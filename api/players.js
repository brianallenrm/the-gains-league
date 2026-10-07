/**
 * Vercel Serverless Function: slim Sleeper player lookup for the Fantasy Pulse widgets.
 *
 * GET /api/players?ids=4881,6790,PIT&week=5&season=2026&fmt=ppr
 *   -> { players: { "<id>": { n: "Name", t: "TEAM", p: "POS", pr: 12.3 | null } }, week, season, fmt }
 *
 * Why: Sleeper matchups only return numeric player ids, and the full player catalog is ~35 MB, which an iOS
 * widget cannot download/parse (30 MB memory cap). This function keeps the catalog + weekly projections in
 * memory and answers with only the few players the widget asks for (a few KB).
 * Public data only (Sleeper's public API); nothing about users is stored.
 */

const PLAYERS_URL = "https://api.sleeper.app/v1/players/nfl";
const FANTASY_POSITIONS = ["QB", "RB", "WR", "TE", "K", "DEF"];
const CATALOG_TTL_MS = 12 * 60 * 60 * 1000;
const PROJ_TTL_MS = 30 * 60 * 1000;
const MAX_IDS = 60;

let catalog = null;
let catalogAt = 0;
let catalogLoading = null;
const projCache = new Map(); // "season-week" -> { at, rows: { id: statsObject } }

async function loadCatalog() {
  if (catalog && Date.now() - catalogAt < CATALOG_TTL_MS) return catalog;
  if (catalogLoading) return catalogLoading;
  catalogLoading = (async () => {
    try {
      const r = await fetch(PLAYERS_URL, { headers: { accept: "application/json" } });
      if (!r.ok) throw new Error(`Sleeper players HTTP ${r.status}`);
      const raw = await r.json();
      const slim = {};
      for (const [id, p] of Object.entries(raw)) {
        const pos = p.position || (Array.isArray(p.fantasy_positions) ? p.fantasy_positions[0] : "") || "";
        if (!FANTASY_POSITIONS.includes(pos)) continue;
        const name = p.full_name || [p.first_name, p.last_name].filter(Boolean).join(" ") || id;
        slim[id] = [name, p.team || "FA", pos];
      }
      catalog = slim;
      catalogAt = Date.now();
      return slim;
    } catch (err) {
      if (catalog) return catalog; // serve stale rather than fail
      throw err;
    } finally {
      catalogLoading = null;
    }
  })();
  return catalogLoading;
}

async function loadProjections(season, week) {
  const key = `${season}-${week}`;
  const hit = projCache.get(key);
  if (hit && Date.now() - hit.at < PROJ_TTL_MS) return hit.rows;
  const qs = "season_type=regular&" + FANTASY_POSITIONS.map((p) => `position[]=${p}`).join("&");
  const urls = [
    `https://api.sleeper.com/projections/nfl/${season}/${week}?${qs}`,
    `https://api.sleeper.app/projections/nfl/${season}/${week}?${qs}`,
  ];
  for (const url of urls) {
    try {
      const r = await fetch(url, { headers: { accept: "application/json" } });
      if (!r.ok) continue;
      const arr = await r.json();
      if (!Array.isArray(arr)) continue;
      const rows = {};
      for (const row of arr) {
        const id = String(row.player_id ?? row.player?.player_id ?? "");
        if (id && row.stats) rows[id] = row.stats;
      }
      if (Object.keys(rows).length > 0) {
        projCache.set(key, { at: Date.now(), rows });
        return rows;
      }
    } catch (_) {
      /* try next url */
    }
  }
  return hit ? hit.rows : null;
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const q = req.query || {};
  const ids = String(q.ids || "")
    .split(",")
    .map((s) => s.trim())
    .filter((s) => /^[A-Za-z0-9]{1,12}$/.test(s));
  const uniqueIds = [...new Set(ids)].slice(0, MAX_IDS);
  const week = parseInt(q.week, 10);
  const season = String(q.season || "");
  const fmt = ["ppr", "half", "std"].includes(q.fmt) ? q.fmt : "ppr";

  if (uniqueIds.length === 0 || !(week >= 1 && week <= 22) || !/^\d{4}$/.test(season)) {
    return res.status(400).json({ error: "Expected ?ids=a,b&week=1-22&season=YYYY" });
  }

  let cat;
  try {
    cat = await loadCatalog();
  } catch (err) {
    res.setHeader("Cache-Control", "no-store");
    return res.status(502).json({ error: "Sleeper catalog unavailable" });
  }
  const proj = await loadProjections(season, week);
  const ptsKey = fmt === "half" ? "pts_half_ppr" : fmt === "std" ? "pts_std" : "pts_ppr";

  const players = {};
  for (const id of uniqueIds) {
    const entry = cat[id];
    if (!entry) continue;
    const raw = proj && proj[id] ? proj[id][ptsKey] : null;
    players[id] = {
      n: entry[0],
      t: entry[1],
      p: entry[2],
      pr: typeof raw === "number" ? Math.round(raw * 10) / 10 : null,
    };
  }

  // Cache at the CDN so widget refreshes are instant and Sleeper is hit rarely.
  res.setHeader(
    "Cache-Control",
    proj
      ? "public, s-maxage=1800, stale-while-revalidate=86400"
      : "public, s-maxage=60, stale-while-revalidate=300"
  );
  return res.status(200).json({ players, week, season, fmt });
}
