/**
 * Sleeper API Client — The Gains League
 * League ID: 1393074729073520640
 */

export const LEAGUE_ID = "1393074729073520640";
const BASE_URL = "https://api.sleeper.app/v1";
const CDN_AVATARS = "https://sleepercdn.com/avatars";
const CDN_PLAYERS = "https://sleepercdn.com/content/nfl/players/thumb";

/* ── Helpers ─────────────────────────────────────────────── */
export const avatarUrl = (id, thumb = true) =>
  id ? `${CDN_AVATARS}${thumb ? "/thumbs" : ""}/${id}` : null;

export const playerThumb = (playerId) =>
  `${CDN_PLAYERS}/${playerId}.jpg`;

/* ── Raw fetchers (con error handling individual) ────────── */
async function apiFetch(path, fallback = null) {
  try {
    const res = await fetch(`${BASE_URL}${path}`);
    if (!res.ok) return fallback;
    return res.json();
  } catch {
    return fallback;
  }
}

export const getLeague      = () => apiFetch(`/league/${LEAGUE_ID}`);
export const getUsers       = () => apiFetch(`/league/${LEAGUE_ID}/users`, []);
export const getRosters     = () => apiFetch(`/league/${LEAGUE_ID}/rosters`, []);
export const getNflState    = () => apiFetch(`/state/nfl`, { week: 1, season_type: "pre", season: "2026" });
export const getMatchups    = (w) => apiFetch(`/league/${LEAGUE_ID}/matchups/${w}`, []);
export const getTransactions= (w) => apiFetch(`/league/${LEAGUE_ID}/transactions/${w}`, []);
export const getTrending    = (type, limit = 10) =>
  apiFetch(`/players/nfl/trending/${type}?lookback_hours=24&limit=${limit}`, []);

/* ── Master loader ───────────────────────────────────────── */
export async function loadLeagueData() {
  // Carga paralela de datos base
  const [league, users, rosters, nflState] = await Promise.all([
    getLeague(), getUsers(), getRosters(), getNflState(),
  ]);

  if (!league) throw new Error("No se pudo conectar con la liga en Sleeper.");

  /* Mapa usuario por user_id */
  const userMap = Object.fromEntries((users || []).map(u => [u.user_id, u]));

  /* Equipos consolidados */
  const teams = (rosters || []).map(roster => {
    const user    = userMap[roster.owner_id] || {};
    const s       = roster.settings || {};
    const meta    = roster.metadata || {};

    const fpts        = (s.fpts || 0) + (s.fpts_decimal || 0) / 100;
    const fptsAgainst = (s.fpts_against || 0) + (s.fpts_against_decimal || 0) / 100;
    const totalFaab   = league.settings?.waiver_budget || 100;
    const faabUsed    = s.waiver_budget_used || 0;
    const wins        = s.wins || 0;
    const losses      = s.losses || 0;
    const ties        = s.ties || 0;
    const totalGames  = wins + losses + ties;

    return {
      rosterId     : roster.roster_id,
      ownerId      : roster.owner_id,
      teamName     : user.metadata?.team_name || user.display_name || `Equipo ${roster.roster_id}`,
      displayName  : user.display_name || "Mánager",
      avatar       : avatarUrl(user.avatar, true),
      wins, losses, ties,
      fpts         : +fpts.toFixed(2),
      fptsAgainst  : +fptsAgainst.toFixed(2),
      faabRemaining: totalFaab - faabUsed,
      waiverPos    : s.waiver_position || roster.roster_id,
      streak       : meta.streak || null,
      winPct       : totalGames > 0 ? (wins + ties * 0.5) / totalGames : 0,
      players      : roster.players || [],
      starters     : roster.starters || [],
      reserve      : roster.reserve || [],
      // Datos extra del roster para cálculo de bench points
      roster,
    };
  });

  // Ordenar: victorias desc, puntos desc
  teams.sort((a, b) => b.wins !== a.wins ? b.wins - a.wins : b.fpts - a.fpts);
  teams.forEach((t, i) => { t.rank = i + 1; });

  // Semana actual — en pre-draft usar semana 1
  const currentWeek = (nflState?.leg || nflState?.week || 1);
  const isPreDraft  = league.status === "pre_draft";

  // Carga paralela de datos semanales
  const [matchups, transactions, trendingAdds, trendingDrops] = await Promise.all([
    isPreDraft ? [] : getMatchups(currentWeek),
    isPreDraft ? [] : getTransactions(currentWeek),
    getTrending("add", 10),
    getTrending("drop", 10),
  ]);

  return {
    league, users, rosters, teams, userMap,
    nflState, currentWeek, isPreDraft,
    matchups, transactions, trendingAdds, trendingDrops,
  };
}
