/**
 * Vercel Serverless Function: NFL schedule + live scores for the Fantasy Pulse app/widgets.
 *
 * GET /api/schedule?week=5&season=2026
 *   -> { week, season, games: [{ id, away, home, awayName, homeName, kickoff, state, detail, awayScore, homeScore, network, clock, period }] }
 *
 * `state` is "pre" | "in" | "post". Team abbreviations are normalized to Sleeper's (WSH -> WAS).
 * Source: ESPN's public scoreboard (no key). Fetched server-side because the iPhone gets blocked (403).
 * Without ?week the current week is returned.
 */

const ESPN = "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard";
const ABBR = { WSH: "WAS" };
const norm = (a) => ABBR[a] || a;

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }
  const q = req.query || {};
  const week = q.week ? parseInt(q.week, 10) : null;
  const season = q.season ? String(q.season) : null;
  if ((week !== null && !(week >= 1 && week <= 22)) || (season !== null && !/^\d{4}$/.test(season))) {
    return res.status(400).json({ error: "Expected ?week=1-22&season=YYYY (both optional)" });
  }

  const params = new URLSearchParams({ seasontype: "2" });
  if (week) params.set("week", String(week));
  if (season) params.set("dates", season);

  let data;
  try {
    const r = await fetch(`${ESPN}?${params}`, { headers: { accept: "application/json" } });
    if (!r.ok) throw new Error(`ESPN HTTP ${r.status}`);
    data = await r.json();
  } catch (err) {
    res.setHeader("Cache-Control", "no-store");
    return res.status(502).json({ error: "Schedule source unavailable" });
  }

  const games = [];
  for (const ev of data.events || []) {
    const comp = (ev.competitions || [])[0];
    if (!comp) continue;
    const home = (comp.competitors || []).find((c) => c.homeAway === "home");
    const away = (comp.competitors || []).find((c) => c.homeAway === "away");
    if (!home || !away) continue;
    const st = (ev.status && ev.status.type) || {};
    const broadcasts = (comp.broadcasts || []).flatMap((b) => b.names || []);
    games.push({
      id: String(ev.id),
      away: norm(away.team.abbreviation),
      home: norm(home.team.abbreviation),
      awayName: away.team.displayName || away.team.abbreviation,
      homeName: home.team.displayName || home.team.abbreviation,
      kickoff: ev.date,
      state: st.state === "in" || st.state === "post" ? st.state : "pre",
      detail: st.shortDetail || st.detail || "",
      awayScore: parseInt(away.score, 10) || 0,
      homeScore: parseInt(home.score, 10) || 0,
      network: broadcasts[0] || "",
      clock: (ev.status && ev.status.displayClock) || "",
      period: (ev.status && ev.status.period) || 0,
    });
  }
  games.sort((a, b) => new Date(a.kickoff) - new Date(b.kickoff));

  const anyLive = games.some((g) => g.state === "in");
  res.setHeader(
    "Cache-Control",
    anyLive
      ? "public, s-maxage=20, stale-while-revalidate=60"
      : "public, s-maxage=300, stale-while-revalidate=900"
  );
  return res.status(200).json({
    week: (data.week && data.week.number) || week,
    season: (data.season && String(data.season.year)) || season,
    games,
  });
}
