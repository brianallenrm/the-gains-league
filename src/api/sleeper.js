/**
 * Sleeper API Client for The Gains League
 * League ID: 1393074729073520640
 */

export const LEAGUE_ID = "1393074729073520640";
const BASE_URL = "https://api.sleeper.app/v1";
const CDN_URL = "https://sleepercdn.com/avatars";

// Helpers para URLs de Avatares
export const getAvatarUrl = (avatarId, isThumb = true) => {
  if (!avatarId) return "/logo.jpg";
  return isThumb 
    ? `${CDN_URL}/thumbs/${avatarId}`
    : `${CDN_URL}/${avatarId}`;
};

// Obtener detalles de la liga
export async function getLeagueDetails(leagueId = LEAGUE_ID) {
  const res = await fetch(`${BASE_URL}/league/${leagueId}`);
  if (!res.ok) throw new Error("No se pudo obtener la información de la liga");
  return res.json();
}

// Obtener usuarios de la liga
export async function getLeagueUsers(leagueId = LEAGUE_ID) {
  const res = await fetch(`${BASE_URL}/league/${leagueId}/users`);
  if (!res.ok) throw new Error("No se pudieron obtener los miembros de la liga");
  return res.json();
}

// Obtener rosters/plantillas de la liga
export async function getLeagueRosters(leagueId = LEAGUE_ID) {
  const res = await fetch(`${BASE_URL}/league/${leagueId}/rosters`);
  if (!res.ok) throw new Error("No se pudieron obtener los rosters");
  return res.json();
}

// Obtener estado actual de la NFL
export async function getNflState(sport = "nfl") {
  try {
    const res = await fetch(`${BASE_URL}/state/${sport}`);
    if (!res.ok) throw new Error("Error al obtener estado de NFL");
    return res.json();
  } catch (err) {
    console.warn("Usando estado por defecto de NFL", err);
    return { week: 1, season_type: "regular", season: "2026" };
  }
}

// Obtener enfrentamientos semanales (Matchups)
export async function getLeagueMatchups(week = 1, leagueId = LEAGUE_ID) {
  try {
    const res = await fetch(`${BASE_URL}/league/${leagueId}/matchups/${week}`);
    if (!res.ok) return [];
    return res.json();
  } catch (err) {
    console.warn(`Error al cargar enfrentamientos de semana ${week}`, err);
    return [];
  }
}

// Obtener transacciones semanales
export async function getLeagueTransactions(week = 1, leagueId = LEAGUE_ID) {
  try {
    const res = await fetch(`${BASE_URL}/league/${leagueId}/transactions/${week}`);
    if (!res.ok) return [];
    return res.json();
  } catch (err) {
    console.warn(`Error al cargar transacciones de semana ${week}`, err);
    return [];
  }
}

// Obtener jugadores en tendencia (Adds/Drops)
export async function getTrendingPlayers(type = "add", sport = "nfl", limit = 10) {
  try {
    const res = await fetch(`${BASE_URL}/players/${sport}/trending/${type}?lookback_hours=24&limit=${limit}`);
    if (!res.ok) return [];
    return res.json();
  } catch (err) {
    console.warn(`Error al obtener jugadores trending (${type})`, err);
    return [];
  }
}

// Obtener picks intercambiados (Dynasty / Traded Picks)
export async function getTradedPicks(leagueId = LEAGUE_ID) {
  try {
    const res = await fetch(`${BASE_URL}/league/${leagueId}/traded_picks`);
    if (!res.ok) return [];
    return res.json();
  } catch (err) {
    return [];
  }
}

// Función maestra para consolidar datos de la liga
export async function fetchFullLeagueData() {
  const [league, users, rosters, nflState] = await Promise.all([
    getLeagueDetails(),
    getLeagueUsers(),
    getLeagueRosters(),
    getNflState()
  ]);

  // Mapear usuarios por user_id para acceso rápido
  const userMap = {};
  users.forEach(u => {
    userMap[u.user_id] = u;
  });

  // Consolidar equipos combinando roster + user
  const teams = rosters.map(roster => {
    const user = userMap[roster.owner_id] || {};
    const teamName = user.metadata?.team_name || user.display_name || `Equipo ${roster.roster_id}`;
    const avatar = user.avatar ? getAvatarUrl(user.avatar) : "/logo.jpg";
    
    // Estadísticas
    const wins = roster.settings?.wins || 0;
    const losses = roster.settings?.losses || 0;
    const ties = roster.settings?.ties || 0;
    const fpts = (roster.settings?.fpts || 0) + ((roster.settings?.fpts_decimal || 0) / 100);
    const fptsAgainst = (roster.settings?.fpts_against || 0) + ((roster.settings?.fpts_against_decimal || 0) / 100);
    const waiverBudgetUsed = roster.settings?.waiver_budget_used || 0;
    const totalFaab = league.settings?.waiver_budget || 100;
    const faabRemaining = totalFaab - waiverBudgetUsed;
    const waiverPosition = roster.settings?.waiver_position || 1;
    const streak = roster.metadata?.streak || "0";

    const totalGames = wins + losses + ties;
    const winPct = totalGames > 0 ? (wins + 0.5 * ties) / totalGames : 0;

    return {
      rosterId: roster.roster_id,
      ownerId: roster.owner_id,
      user,
      teamName,
      displayName: user.display_name || "Mánager",
      avatar,
      wins,
      losses,
      ties,
      fpts: Number(fpts.toFixed(2)),
      fptsAgainst: Number(fptsAgainst.toFixed(2)),
      faabRemaining,
      waiverBudgetUsed,
      waiverPosition,
      streak,
      winPct,
      players: roster.players || [],
      starters: roster.starters || [],
      reserve: roster.reserve || []
    };
  });

  // Ordenar standings por Victorias > Puntos a Favor
  teams.sort((a, b) => {
    if (b.wins !== a.wins) return b.wins - a.wins;
    return b.fpts - a.fpts;
  });

  // Asignar rank
  teams.forEach((t, i) => {
    t.rank = i + 1;
  });

  // Obtener enfrentamientos de la semana actual
  const currentWeek = nflState?.week || 1;
  const [matchups, transactions, trendingAdds, trendingDrops] = await Promise.all([
    getLeagueMatchups(currentWeek),
    getLeagueTransactions(currentWeek),
    getTrendingPlayers("add", "nfl", 8),
    getTrendingPlayers("drop", "nfl", 8)
  ]);

  return {
    league,
    users,
    rosters,
    teams,
    userMap,
    nflState,
    currentWeek,
    matchups,
    transactions,
    trendingAdds,
    trendingDrops
  };
}
