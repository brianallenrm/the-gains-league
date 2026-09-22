import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  loadLeagueData,
  getLeague,
  getRosters,
  getUsers,
  getNflState,
  getMatchups,
  getTransactions,
  getTrending,
  getPlayerDatabase
} from '../src/api/sleeper.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function exportLeagueStatus() {
  console.log('🔄 Conectando con Sleeper API para exportar estado de la liga...');

  const [leagueData, playerDb, trendingAddsRaw, trendingDropsRaw] = await Promise.all([
    loadLeagueData(),
    getPlayerDatabase(),
    getTrending('add', 25),
    getTrending('drop', 15)
  ]);

  const {
    league,
    teams,
    currentWeek,
    weeklyMatchups,
    transactions
  } = leagueData;

  const now = new Date();
  const dateStr = now.toLocaleString('es-MX', {
    timeZone: 'America/Mexico_City',
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  // Conjunto de todos los IDs de jugadores en algún roster
  const allRosteredIds = new Set();
  teams.forEach(t => {
    (t.players || []).forEach(pId => allRosteredIds.add(pId));
  });

  // Mapa de jugador a equipo dueño
  const playerOwnerMap = {};
  teams.forEach(t => {
    (t.players || []).forEach(pId => {
      playerOwnerMap[pId] = {
        teamName: t.teamName,
        displayName: t.displayName,
        rosterId: t.rosterId
      };
    });
  });

  // Enriquecer trending adds con disponibilidad
  const trendingAdds = trendingAddsRaw.map(item => {
    const p = playerDb[item.player_id] || {};
    const isTaken = allRosteredIds.has(item.player_id);
    const owner = isTaken ? playerOwnerMap[item.player_id] : null;
    return {
      playerId: item.player_id,
      name: p.name || `Jugador #${item.player_id}`,
      pos: p.pos || 'NFL',
      team: p.team || 'FA',
      count: item.count,
      isAvailable: !isTaken,
      owner: owner ? `${owner.teamName} (${owner.displayName})` : 'DISPONIBLE (Free Agent / Waivers)'
    };
  });

  const trendingDrops = trendingDropsRaw.map(item => {
    const p = playerDb[item.player_id] || {};
    const isTaken = allRosteredIds.has(item.player_id);
    const owner = isTaken ? playerOwnerMap[item.player_id] : null;
    return {
      playerId: item.player_id,
      name: p.name || `Jugador #${item.player_id}`,
      pos: p.pos || 'NFL',
      team: p.team || 'FA',
      count: item.count,
      isAvailable: !isTaken,
      owner: owner ? `${owner.teamName} (${owner.displayName})` : 'DISPONIBLE (Free Agent / Waivers)'
    };
  });

  // Identificar el equipo del usuario (brianallenrm / Bowers Rangers)
  const myTeam = teams.find(t => t.displayName === 'brianallenrm' || t.rosterId === 1) || teams[0];

  // Helper para resolver lista de jugadores
  const resolvePlayers = (playerIds = [], starterIds = []) => {
    return playerIds.map(id => {
      const p = playerDb[id] || {};
      const isStarter = starterIds.includes(id);
      return {
        id,
        name: p.name || `Jugador #${id}`,
        pos: p.pos || 'NFL',
        nflTeam: p.team || 'FA',
        isStarter
      };
    });
  };

  // Construir objeto enriquecido de equipos
  const enrichedTeams = teams.map(t => {
    const startersList = resolvePlayers(t.starters || [], t.starters || []);
    const benchIds = (t.players || []).filter(id => !(t.starters || []).includes(id));
    const benchList = resolvePlayers(benchIds, t.starters || []);

    return {
      rank: t.rank,
      rosterId: t.rosterId,
      teamName: t.teamName,
      displayName: t.displayName,
      wins: t.wins,
      losses: t.losses,
      ties: t.ties || 0,
      fpts: t.fpts,
      fptsAgainst: t.fptsAgainst,
      faabRemaining: t.faabRemaining,
      streak: t.streak,
      starters: startersList,
      bench: benchList,
      totalPlayers: (t.players || []).length
    };
  });

  // Matchups de Semana 3
  const week3MatchupsRaw = weeklyMatchups[3] || [];
  const pairs = {};
  week3MatchupsRaw.forEach(m => {
    if (!pairs[m.matchup_id]) pairs[m.matchup_id] = [];
    pairs[m.matchup_id].push(m);
  });
  const teamMap = Object.fromEntries(teams.map(t => [t.rosterId, t]));

  const week3Matchups = Object.entries(pairs).map(([mid, pair]) => {
    const [a, b] = pair;
    const tA = teamMap[a?.roster_id];
    const tB = teamMap[b?.roster_id];
    return {
      matchupId: mid,
      teamA: {
        rosterId: a?.roster_id,
        teamName: tA?.teamName || `Equipo ${a?.roster_id}`,
        displayName: tA?.displayName || 'Mánager',
        record: `${tA?.wins ?? 0}-${tA?.losses ?? 0}`
      },
      teamB: {
        rosterId: b?.roster_id,
        teamName: tB?.teamName || `Equipo ${b?.roster_id}`,
        displayName: tB?.displayName || 'Mánager',
        record: `${tB?.wins ?? 0}-${tB?.losses ?? 0}`
      }
    };
  });

  // ==========================================
  // GENERAR LEAGUE_STATUS.MD
  // ==========================================
  let md = '';
  md += `# 🏈 The Gains League 2026 • Estado Oficial de la Liga\n\n`;
  md += `> **Última actualización:** ${dateStr} (Semana 2 concluida • Rumbo a Semana 3)\n`;
  md += `> **Liga en Sleeper ID:** \`${league.league_id}\` | **Formato:** Half PPR / 1 QB, 2 RB, 2 WR, 1 TE, 2 FLEX, 1 K, 1 DEF (10 titulares, 6 banca)\n`;
  md += `> **Bolsa Total:** $7,200 MXN ($300 por semana x 14 semanas + $2,700 al Gran Campeón)\n`;
  md += `> **Premios Asignados:** $600 MXN ($300 a MALIK BUSINESS en Sem 1, $300 a Emi69Hb en Sem 2)\n\n`;

  md += `---\n\n`;

  // SECCIÓN: MI EQUIPO
  md += `## 👤 Mi Equipo: **${myTeam.teamName}** (@${myTeam.displayName})\n\n`;
  md += `- **Récord Actual:** **${myTeam.wins}-${myTeam.losses}** (${(myTeam.winPct * 100).toFixed(1)}%)\n`;
  md += `- **Posición en la Tabla:** **#${myTeam.rank}** de 12 equipos (Zona de Clasificación 🏆)\n`;
  md += `- **Puntos a Favor (FPs):** **${myTeam.fpts.toFixed(2)} pts** (#2 mejor ofensiva de la liga)\n`;
  md += `- **Puntos en Contra:** ${myTeam.fptsAgainst.toFixed(2)} pts\n`;
  md += `- **Presupuesto FAAB Restante:** **$${myTeam.faabRemaining}** de $100 iniciales\n`;
  md += `- **Racha:** ${myTeam.streak || '2W'}\n`;
  md += `- **Próximo Partido (Semana 3):** vs **Danbengoa** (1-1)\n\n`;

  const myEnriched = enrichedTeams.find(t => t.rosterId === myTeam.rosterId);
  md += `### 🌟 Alineación Titular (Starters)\n`;
  md += `| Posición | Jugador | Equipo NFL |\n`;
  md += `| :--- | :--- | :---: |\n`;
  myEnriched.starters.forEach(p => {
    md += `| **${p.pos}** | ${p.name} | \`${p.nflTeam}\` |\n`;
  });

  md += `\n### 🪑 Banca (Bench)\n`;
  md += `| Posición | Jugador | Equipo NFL |\n`;
  md += `| :--- | :--- | :---: |\n`;
  myEnriched.bench.forEach(p => {
    md += `| **${p.pos}** | ${p.name} | \`${p.nflTeam}\` |\n`;
  });

  md += `\n---\n\n`;

  // SECCIÓN: TABLA GENERAL
  md += `## 📊 Tabla General de Posiciones (Semana 2 Concluida)\n\n`;
  md += `| # | Equipo | Mánager | Récord | %Vic | Pts Favor | Pts Contra | FAAB | Racha | Estatus |\n`;
  md += `| :-: | :--- | :--- | :-: | :-: | :-: | :-: | :-: | :-: | :--- |\n`;
  teams.forEach((t, i) => {
    const isPlayoff = i < 6;
    const tag = isPlayoff ? '🏆 Playoffs' : '—';
    const highlight = t.rosterId === myTeam.rosterId ? '**' : '';
    md += `| ${t.rank} | ${highlight}${t.teamName}${highlight} | @${t.displayName} | **${t.wins}-${t.losses}** | ${(t.winPct * 100).toFixed(1)}% | ${t.fpts.toFixed(2)} | ${t.fptsAgainst.toFixed(2)} | $${t.faabRemaining} | ${t.streak || '—'} | ${tag} |\n`;
  });

  md += `\n*Nota: Los primeros 6 lugares avanzan a Playoffs al terminar la Semana 14.*\n\n`;
  md += `---\n\n`;

  // SECCIÓN: ENFRENTAMIENTOS SEMANA 3
  md += `## ⚔️ Próximos Enfrentamientos (Semana 3)\n\n`;
  week3Matchups.forEach(m => {
    md += `- **Matchup #${m.matchupId}:** **${m.teamA.teamName}** (${m.teamA.record}) vs **${m.teamB.teamName}** (${m.teamB.record})\n`;
  });

  md += `\n---\n\n`;

  // SECCIÓN: ROSTERS COMPLETOS DE TODOS LOS EQUIPOS
  md += `## 📋 Rosters Completos de los 12 Equipos\n\n`;
  enrichedTeams.forEach(t => {
    md += `### ${t.rank}. ${t.teamName} (@${t.displayName})\n`;
    md += `- **Récord:** ${t.wins}-${t.losses} | **FPs:** ${t.fpts.toFixed(2)} | **FAAB:** $${t.faabRemaining}\n`;
    md += `- **Titulares (${t.starters.length}):** ${t.starters.map(p => `${p.name} (${p.pos}-${p.nflTeam})`).join(', ')}\n`;
    md += `- **Banca (${t.bench.length}):** ${t.bench.map(p => `${p.name} (${p.pos}-${p.nflTeam})`).join(', ')}\n\n`;
  });

  md += `---\n\n`;

  // SECCIÓN: MERCADO Y DISPONIBILIDAD (TOP AGENTES LIBRES / WAIVERS)
  md += `## 📈 Mercado: Jugadores Más Buscados en la NFL (Trending Adds)\n\n`;
  md += `*Muestra los 25 jugadores más reclamados en la NFL en Sleeper y si están disponibles o tomados en nuestra liga:*\n\n`;
  md += `| # | Jugador | Pos | Equipo | Reclamos NFL | Disponibilidad en The Gains League |\n`;
  md += `| :-: | :--- | :-: | :-: | :-: | :--- |\n`;
  trendingAdds.forEach((p, idx) => {
    const disp = p.isAvailable ? '🟢 **DISPONIBLE (Agente Libre / Waivers)**' : `🔴 Tomado por ${p.owner}`;
    md += `| ${idx + 1} | **${p.name}** | ${p.pos} | \`${p.team}\` | +${p.count.toLocaleString()} | ${disp} |\n`;
  });

  md += `\n---\n\n`;

  // SECCIÓN: JUGADORES MÁS CORTADOS
  md += `## 📉 Mercado: Jugadores Más Cortados (Trending Drops)\n\n`;
  md += `| # | Jugador | Pos | Equipo | Cortes NFL | Estatus en The Gains League |\n`;
  md += `| :-: | :--- | :-: | :-: | :-: | :--- |\n`;
  trendingDrops.forEach((p, idx) => {
    const disp = p.isAvailable ? '⚪ Agente Libre' : `En roster de ${p.owner}`;
    md += `| ${idx + 1} | **${p.name}** | ${p.pos} | \`${p.team}\` | -${p.count.toLocaleString()} | ${disp} |\n`;
  });

  md += `\n---\n\n`;

  // SECCIÓN: TRANSACCIONES RECIENTES
  md += `## 🔄 Transacciones Recientes de la Liga\n\n`;
  if (!transactions || transactions.length === 0) {
    md += `*No hay transacciones registradas recientemente.*\n\n`;
  } else {
    transactions.slice(0, 15).forEach(tx => {
      const team = teams.find(t => tx.roster_ids?.includes(t.rosterId));
      const teamName = team ? `${team.teamName} (@${team.displayName})` : `Roster ${tx.roster_ids?.[0]}`;
      const date = new Date(tx.status_updated || tx.created).toLocaleDateString('es-MX', { month: 'short', day: 'numeric' });
      
      const adds = Object.keys(tx.adds || {}).map(id => playerDb[id]?.name || `Jugador #${id}`);
      const drops = Object.keys(tx.drops || {}).map(id => playerDb[id]?.name || `Jugador #${id}`);
      
      let details = [];
      if (adds.length > 0) details.push(`➕ Agregó: ${adds.join(', ')}`);
      if (drops.length > 0) details.push(`➖ Cortó: ${drops.join(', ')}`);
      
      md += `- **[${date}] ${teamName}**: ${details.join(' | ')} *(Tipo: ${tx.type})*\n`;
    });
    md += `\n`;
  }

  md += `---\n\n`;
  md += `## 💡 Cómo actualizar este archivo en cualquier momento\n\n`;
  md += `Ejecuta desde la terminal de este proyecto:\n`;
  md += `\`\`\`bash\nnode scripts/export_league_status.js\n\`\`\`\n`;
  md += `O usa el comando npm:\n`;
  md += `\`\`\`bash\nnpm run export:status\n\`\`\`\n`;

  // Guardar archivo LEAGUE_STATUS.md
  const mdPath = path.join(rootDir, 'LEAGUE_STATUS.md');
  fs.writeFileSync(mdPath, md, 'utf-8');
  console.log(`✅ Archivo Markdown guardado exitosamente en: ${mdPath}`);

  // Guardar archivo JSON estructurado league_snapshot.json
  const jsonPath = path.join(rootDir, 'league_snapshot.json');
  const snapshotData = {
    updatedAt: now.toISOString(),
    leagueInfo: {
      leagueId: league.league_id,
      name: league.name,
      season: league.season,
      totalTeams: league.total_rosters,
      currentWeek
    },
    standings: teams.map(t => ({
      rank: t.rank,
      rosterId: t.rosterId,
      teamName: t.teamName,
      displayName: t.displayName,
      wins: t.wins,
      losses: t.losses,
      fpts: t.fpts,
      fptsAgainst: t.fptsAgainst,
      faabRemaining: t.faabRemaining,
      streak: t.streak
    })),
    myTeam: {
      ...myEnriched,
      nextMatchup: week3Matchups.find(m => m.teamA.rosterId === myTeam.rosterId || m.teamB.rosterId === myTeam.rosterId)
    },
    allTeams: enrichedTeams,
    week3Matchups,
    trendingAdds,
    trendingDrops,
    recentTransactions: transactions.slice(0, 20)
  };

  fs.writeFileSync(jsonPath, JSON.stringify(snapshotData, null, 2), 'utf-8');
  console.log(`✅ Archivo JSON guardado exitosamente en: ${jsonPath}`);
}

exportLeagueStatus().catch(err => {
  console.error('❌ Error al exportar estado de la liga:', err);
  process.exit(1);
});
