export function renderMatchups(matchups, teams, week, isPreDraft) {
  // Build teamMap by roster_id
  const teamMap = Object.fromEntries(teams.map(t => [t.rosterId, t]));

  if (isPreDraft || matchups.length === 0) {
    return `
    <div class="card">
      <div class="section-head">
        <div class="section-title">⚔️ Enfrentamientos</div>
        <span class="section-badge">Semana ${week}</span>
      </div>
      <div class="predraft-state">
        <div class="icon">🏈</div>
        <h3>¡Nos vemos en el Draft!</h3>
        <p>Los enfrentamientos semana a semana aparecerán aquí una vez que el Draft oficial concluya y arranque la Temporada 2026.</p>
      </div>
    </div>`;
  }

  // Group by matchup_id
  const pairs = {};
  matchups.forEach(m => {
    if (!pairs[m.matchup_id]) pairs[m.matchup_id] = [];
    pairs[m.matchup_id].push(m);
  });

  const cards = Object.values(pairs).map(pair => {
    const [a, b] = pair;
    const ta = teamMap[a?.roster_id] || { teamName: `Equipo ${a?.roster_id}`, avatar: null, displayName: '' };
    const tb = teamMap[b?.roster_id] || { teamName: `Equipo ${b?.roster_id}`, avatar: null, displayName: '' };
    const sa  = a?.points ?? 0;
    const sb  = b?.points ?? 0;

    const rowA = `
    <div class="matchup-row ${sa > sb ? 'winner' : ''}">
      <div class="team-cell">
        <img class="t-avatar" src="${ta.avatar || '/logo.jpg'}" alt="" onerror="this.src='/logo.jpg'">
        <div><div class="t-name">${ta.teamName}</div><div class="t-mgr">${ta.displayName}</div></div>
      </div>
      <div class="m-score">${sa.toFixed(2)}</div>
    </div>`;

    const rowB = `
    <div class="matchup-row ${sb > sa ? 'winner' : ''}">
      <div class="team-cell">
        <img class="t-avatar" src="${tb.avatar || '/logo.jpg'}" alt="" onerror="this.src='/logo.jpg'">
        <div><div class="t-name">${tb.teamName}</div><div class="t-mgr">${tb.displayName}</div></div>
      </div>
      <div class="m-score">${sb.toFixed(2)}</div>
    </div>`;

    return `<div class="matchup-card">${rowA}${rowB}</div>`;
  }).join('');

  return `
  <div class="card">
    <div class="section-head">
      <div class="section-title">⚔️ Enfrentamientos</div>
      <span class="section-badge">Semana ${week}</span>
    </div>
    <div class="matchups-grid">${cards}</div>
  </div>`;
}
