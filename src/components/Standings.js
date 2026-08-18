/* renderMembers — tabla de miembros actuales en pre-draft */
function renderMembers(teams, total = 12) {
  const slots = Array.from({ length: total }, (_, i) => teams[i] || null);

  const cards = slots.map((t, i) => {
    if (!t) return `
      <div class="member-card empty">
        <div class="slot-num">${i + 1}</div>
        <div class="member-info">
          <div class="m-name" style="color:var(--c-faint)">Esperando...</div>
        </div>
      </div>`;

    return `
      <div class="member-card">
        <img
          class="member-avatar"
          src="${t.avatar || '/logo.jpg'}"
          alt="${t.displayName}"
          onerror="this.src='/logo.jpg'">
        <div class="member-info">
          <div class="m-name">${t.teamName}</div>
          <div class="m-mgr">${t.displayName}</div>
        </div>
        ${t.ownerId ? `<span class="member-badge">Unido</span>` : ''}
      </div>`;
  }).join('');

  return `
  <div class="card">
    <div class="section-head">
      <div class="section-title">👥 Participantes Confirmados</div>
      <span class="section-badge">${teams.length}/${total} inscritos</span>
    </div>
    <div class="members-grid">${cards}</div>
    ${teams.length < total ? `
    <div style="margin-top:1.1rem;padding:.85rem;background:rgba(245,158,11,.08);border:1px dashed var(--c-border-gold);border-radius:var(--r-md);text-align:center;">
      <p style="font-size:.85rem;color:var(--c-muted)">
        🔗 <strong style="color:var(--gold-lt)">Invita al grupo del gym:</strong>
        <a href="https://sleeper.com/i/QBMbleqAAnMmJ" target="_blank" rel="noopener"
           style="color:var(--gold-lt);font-weight:700;text-decoration:underline;margin-left:.3rem">
          sleeper.com/i/QBMbleqAAnMmJ
        </a>
      </p>
    </div>` : ''}
  </div>`;
}

/* renderWeeklyAwards — premios y castigos semanales */
function awardCard(variant, icon, title, sub, team, metricVal, metricLbl, extra = '') {
  const avatar = team?.avatar || '/logo.jpg';
  return `
  <div class="award-card ${variant}">
    <div class="award-chip">
      <span class="award-chip-icon">${icon}</span>
      <div>
        <div class="award-chip-label">${title}</div>
        <div class="award-chip-sub">${sub}</div>
      </div>
    </div>
    <div class="award-body">
      <img class="award-avatar" src="${avatar}" alt="" onerror="this.src='/logo.jpg'">
      <div class="award-team">
        <div class="award-team-name">${team?.teamName || '—'}</div>
        <div class="award-mgr">${team?.displayName || ''}</div>
      </div>
      <div class="award-metric">
        <div class="award-metric-val">${metricVal}</div>
        <div class="award-metric-lbl">${metricLbl}</div>
      </div>
    </div>
    ${extra}
  </div>`;
}

export function renderStandingsTab(teams, league, isPreDraft) {
  const totalSpots = league?.total_rosters || 12;
  const playoffCut = league?.settings?.playoff_teams || 6;
  const hasScores  = teams.some(t => t.fpts > 0);

  /* ── Awards ─────────────────────────────────────────────── */
  let awardsHtml = '';
  if (!isPreDraft && hasScores) {
    const byFpts   = [...teams].sort((a,b) => b.fpts - a.fpts);
    const top      = byFpts[0];
    const bottom   = byFpts[byFpts.length - 1];

    awardsHtml = `
    <div class="awards-row">
      ${awardCard('gold','🥇','Mister Olympia','Máximo anotador — gana $300 MXN',
          top, top?.fpts?.toFixed(2), 'Puntos')}
      ${awardCard('red','🤡','Se Saltó Día de Pierna','Menor anotador de la jornada',
          bottom, bottom?.fpts?.toFixed(2), 'Puntos',
          `<div class="punishment-banner">🏋️‍♂️ Castigo: 50 burpees grabados para el grupo (antes del jueves)</div>`)}
      ${awardCard('blue','🎯','Gym Rat Coach','Mejor alineación seleccionada',
          top, '—', 'Pronto')}
    </div>`;
  } else if (!isPreDraft) {
    awardsHtml = `
    <div class="card text-center" style="padding:1.5rem">
      <div style="font-size:2rem;margin-bottom:.5rem">⏳</div>
      <p style="color:var(--c-muted)">Los premios semanales apareceran cuando arranquen los partidos de la Semana 1.</p>
    </div>`;
  }

  /* ── Prize banner ─────────────────────────────────────────── */
  const prizeBanner = `
  <div class="prize-banner">
    <div class="prize-box weekly">
      <div class="prize-label">Premio Semanal (15 semanas)</div>
      <div class="prize-amount">$300</div>
      <div class="prize-desc">Al equipo con más puntos cada semana. Si hay empate se divide.</div>
    </div>
    <div class="prize-box champ">
      <div class="prize-label">Gran Campeón 🏆</div>
      <div class="prize-amount">$2,700</div>
      <div class="prize-desc">El ganador de la llave de playoffs se lleva el resto de la bolsa.</div>
    </div>
    <div class="prize-box total">
      <div class="prize-label">Bolsa Total (12 × $600)</div>
      <div class="prize-amount">$7,200</div>
      <div class="prize-desc">$4,500 en semanales + $2,700 al campeón = $7,200 MXN repartidos.</div>
    </div>
  </div>`;

  /* ── Members (pre-draft) ─────────────────────────────────── */
  if (isPreDraft) {
    return `
    ${prizeBanner}
    ${renderMembers(teams, totalSpots)}`;
  }

  /* ── Standings table ─────────────────────────────────────── */
  const rows = teams.map((t, i) => {
    const isPlayoffEdge = i === playoffCut - 1;
    const isElim        = i >= playoffCut;
    const streakLetter  = (t.streak || '').replace(/\d/g,'');
    const streakNum     = (t.streak || '').replace(/\D/g,'');

    return `
    <tr class="${isPlayoffEdge ? 'playoff-line' : ''} ${isElim ? 'eliminated' : ''}">
      <td>
        <span class="rank-num ${i<3 ? 'r'+(i+1) : ''}">${i+1}</span>
      </td>
      <td>
        <div class="team-cell">
          <img class="t-avatar" src="${t.avatar || '/logo.jpg'}" alt="" onerror="this.src='/logo.jpg'">
          <div>
            <div class="t-name">${t.teamName}</div>
            <div class="t-mgr">${t.displayName}</div>
          </div>
        </div>
      </td>
      <td class="record">${t.wins}-${t.losses}${t.ties ? `-${t.ties}` : ''}</td>
      <td class="text-muted">${(t.winPct*100).toFixed(1)}%</td>
      <td class="num fpts-val">${t.fpts.toFixed(2)}</td>
      <td class="num text-muted">${t.fptsAgainst.toFixed(2)}</td>
      <td class="num faab-val">$${t.faabRemaining}</td>
      <td>
        ${streakLetter
          ? `<span class="streak ${streakLetter}">${streakLetter}${streakNum}</span>`
          : '<span class="text-faint">—</span>'}
      </td>
      <td>${i < playoffCut ? `<span class="playoff-tag">🏆 Playoffs</span>` : ''}</td>
    </tr>`;
  }).join('');

  return `
  ${awardsHtml}
  ${prizeBanner}
  <div class="card">
    <div class="section-head">
      <div class="section-title">📊 Tabla de Posiciones</div>
      <span class="section-badge">Top ${playoffCut} clasifican</span>
    </div>
    <div class="table-scroll">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Equipo</th>
            <th>Récord</th>
            <th>%Vic</th>
            <th class="num">Pts Fav</th>
            <th class="num">Pts Con</th>
            <th class="num">FAAB</th>
            <th>Racha</th>
            <th></th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  </div>`;
}
