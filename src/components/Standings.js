export function renderStandings(teams = [], league) {
  const playoffCutoff = league?.settings?.playoff_teams || 6;

  if (teams.length === 0) {
    return `
      <div class="card">
        <p style="text-align:center; color: var(--text-muted);">Cargando equipos...</p>
      </div>
    `;
  }

  const rows = teams.map((team, index) => {
    const isPlayoff = index < playoffCutoff;
    let rankBadgeClass = "";
    if (index === 0) rankBadgeClass = "top-1";
    else if (index === 1) rankBadgeClass = "top-2";
    else if (index === 2) rankBadgeClass = "top-3";

    const streakClass = team.streak?.startsWith("W") ? "win" : team.streak?.startsWith("L") ? "loss" : "";

    return `
      <tr class="${isPlayoff ? 'playoff-seed' : ''}">
        <td>
          <span class="rank-badge ${rankBadgeClass}">${index + 1}</span>
        </td>
        <td>
          <div class="team-cell">
            <img src="${team.avatar}" class="team-avatar" alt="${team.teamName}">
            <div class="team-meta">
              <div class="team-name">${team.teamName}</div>
              <div class="manager">${team.displayName}</div>
            </div>
          </div>
        </td>
        <td style="font-weight: 700; font-family: var(--font-display); font-size: 1.1rem;">
          ${team.wins}-${team.losses}${team.ties > 0 ? `-${team.ties}` : ''}
        </td>
        <td>
          ${(team.winPct * 100).toFixed(1)}%
        </td>
        <td class="val-fpts">
          ${team.fpts.toFixed(2)}
        </td>
        <td style="color: var(--text-muted);">
          ${team.fptsAgainst.toFixed(2)}
        </td>
        <td>
          <strong style="color: var(--accent-gold-light); font-family: var(--font-display); font-size: 1.05rem;">
            $${team.faabRemaining}
          </strong>
        </td>
        <td>
          ${team.streak ? `<span class="streak-tag ${streakClass}">${team.streak}</span>` : '<span style="color:var(--text-faint)">-</span>'}
        </td>
      </tr>
    `;
  }).join('');

  return `
    <div class="card">
      <div class="section-title">
        <span>📊 Tabla de Posiciones Oficial</span>
        <span class="badge">Top 6 clasifican a Playoffs</span>
      </div>

      <div class="table-responsive">
        <table class="standings-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Equipo / Mánager</th>
              <th>Récord</th>
              <th>% Vic.</th>
              <th>Pts Favor</th>
              <th>Pts Contra</th>
              <th>FAAB Disp.</th>
              <th>Racha</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
