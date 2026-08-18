export function renderMatchups(matchups = [], teams = [], currentWeek = 1) {
  const teamMap = {};
  teams.forEach(t => {
    teamMap[t.rosterId] = t;
  });

  // Agrupar por matchup_id
  const matchupPairs = {};
  matchups.forEach(m => {
    if (!matchupPairs[m.matchup_id]) {
      matchupPairs[m.matchup_id] = [];
    }
    matchupPairs[m.matchup_id].push(m);
  });

  const pairList = Object.values(matchupPairs);

  if (pairList.length === 0) {
    return `
      <div class="card">
        <div class="section-title">
          <span>⚔️ Enfrentamientos de la Semana ${currentWeek}</span>
        </div>
        <p style="text-align: center; color: var(--text-muted); padding: 1.5rem 0;">
          Los enfrentamientos se generarán automáticamente una vez completado el Draft oficial.
        </p>
      </div>
    `;
  }

  const cards = pairList.map(pair => {
    const team1Data = pair[0] || {};
    const team2Data = pair[1] || {};

    const team1 = teamMap[team1Data.roster_id] || { teamName: `Equipo ${team1Data.roster_id}`, avatar: '/logo.jpg' };
    const team2 = teamMap[team2Data.roster_id] || { teamName: `Equipo ${team2Data.roster_id}`, avatar: '/logo.jpg' };

    const score1 = team1Data.points || 0;
    const score2 = team2Data.points || 0;

    const isTeam1Winning = score1 > score2;
    const isTeam2Winning = score2 > score1;

    return `
      <div class="matchup-card">
        <div class="matchup-team-row ${isTeam1Winning ? 'winner' : ''}">
          <div class="team-cell">
            <img src="${team1.avatar}" class="team-avatar" alt="Avatar">
            <div class="team-meta">
              <div class="team-name">${team1.teamName}</div>
              <div class="manager">${team1.displayName || ''}</div>
            </div>
          </div>
          <div class="matchup-score">${score1.toFixed(1)}</div>
        </div>

        <div class="matchup-team-row ${isTeam2Winning ? 'winner' : ''}">
          <div class="team-cell">
            <img src="${team2.avatar}" class="team-avatar" alt="Avatar">
            <div class="team-meta">
              <div class="team-name">${team2.teamName}</div>
              <div class="manager">${team2.displayName || ''}</div>
            </div>
          </div>
          <div class="matchup-score">${score2.toFixed(1)}</div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="card">
      <div class="section-title">
        <span>⚔️ Centro de Enfrentamientos</span>
        <span class="badge">Semana ${currentWeek}</span>
      </div>

      <div class="matchups-grid">
        ${cards}
      </div>
    </div>
  `;
}
