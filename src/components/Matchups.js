import { renderHonorBadgeHtml, getManagerHonor } from '../utils/managerBadges.js';

/**
 * High-Impact Matchup Card Highlights
 */
function getMatchupFlavor(mid, tA, tB) {
  // mid 6: DonaldTrumpGoat vs SanzFC
  if (mid == 6 || (tA?.rosterId === 8 || tB?.rosterId === 8)) {
    return { tag: '👑 Duelo de Titanes', subtitle: 'El Campeón Defensor vs #2 Power Rank', glowClass: 'glow-gold' };
  }
  // mid 2: mariobarbieri vs versace4444
  if (mid == 2 || ((tA?.honor?.type === 'rookie') && (tB?.honor?.type === 'rookie'))) {
    return { tag: '🌱 Choque de Debutantes', subtitle: 'Duelo directo entre Novatos 2026', glowClass: 'glow-cyan' };
  }
  // mid 4: brianallenrm vs Cee Dee'z Nuts (channels98)
  if (mid == 4 || (tA?.rosterId === 1 || tB?.rosterId === 1)) {
    return { tag: '🥈 vs 🚀 Duelo de Alto Voltaje', subtitle: '#1 Proyectado vs Subcampeón 2025', glowClass: 'glow-blue' };
  }
  // mid 1: Osante vs DaniAlva08
  if (mid == 1) {
    return { tag: '🛡️ Veterano vs ⚡ Novato', subtitle: 'Prueba de fuego para el debutante', glowClass: 'glow-purple' };
  }
  // mid 5: Danbengoa vs Emi69Hb
  if (mid == 5) {
    return { tag: '🦏 El Muro Terrestre vs 🌱 Debutante', subtitle: 'Batalla de estrategias de Draft', glowClass: 'glow-emerald' };
  }
  // mid 3: Carlosso vs carloverditraconis
  return { tag: '🔥 Batalla de Veteranos', subtitle: 'Rivalidad clásica The Gains League', glowClass: 'glow-slate' };
}

export function renderMatchups(matchups = [], teams = [], week = 1, isPreDraft = false, league = {}) {
  const playoffCut = league?.settings?.playoff_teams || 6;
  const teamMap = Object.fromEntries(teams.map(t => [t.rosterId, t]));

  // Agrupar por matchup_id
  const pairs = {};
  matchups.forEach(m => {
    if (!pairs[m.matchup_id]) pairs[m.matchup_id] = [];
    pairs[m.matchup_id].push(m);
  });

  const cardsHtml = Object.entries(pairs).map(([mid, pair]) => {
    const [a, b] = pair;
    const ta = teamMap[a?.roster_id] || { rosterId: a?.roster_id, teamName: `Equipo ${a?.roster_id}`, avatar: '/logo.jpg', displayName: 'Mánager' };
    const tb = teamMap[b?.roster_id] || { rosterId: b?.roster_id, teamName: `Equipo ${b?.roster_id}`, avatar: '/logo.jpg', displayName: 'Mánager' };
    const sa = a?.points ?? 0;
    const sb = b?.points ?? 0;
    const hasStarted = sa > 0 || sb > 0;
    const flavor = getMatchupFlavor(mid, ta, tb);

    return `
    <div class="matchup-card-pro ${flavor.glowClass}">
      <div class="m-card-header">
        <span class="m-card-badge">⚡ Matchup #${mid} • Semana ${week}</span>
        <span class="m-card-flavor-tag">${flavor.tag}</span>
      </div>

      <div class="m-clash-body">
        <!-- Equipo A -->
        <div class="m-team-side side-a ${hasStarted && sa > sb ? 'leading' : ''}">
          <div class="m-team-avatar-wrap">
            <img class="m-team-avatar" src="${ta.avatar || '/logo.jpg'}" alt="" onerror="this.src='/logo.jpg'">
          </div>
          <div class="m-team-info">
            <div class="m-team-title">${ta.teamName}</div>
            <div class="m-team-mgr">${ta.displayName} ${renderHonorBadgeHtml(ta.honor || getManagerHonor(ta))}</div>
          </div>
          <div class="m-team-score ${hasStarted && sa > sb ? 'text-gold' : ''}">
            ${hasStarted ? sa.toFixed(2) : '0.00'}
            <span class="m-score-lbl">FPs</span>
          </div>
        </div>

        <!-- Centro VS -->
        <div class="m-vs-divider">
          <div class="vs-circle">VS</div>
          <div class="vs-status">${hasStarted ? '⚡ EN VIVO' : '🏈 Kickoff'}</div>
        </div>

        <!-- Equipo B -->
        <div class="m-team-side side-b ${hasStarted && sb > sa ? 'leading' : ''}">
          <div class="m-team-avatar-wrap">
            <img class="m-team-avatar" src="${tb.avatar || '/logo.jpg'}" alt="" onerror="this.src='/logo.jpg'">
          </div>
          <div class="m-team-info">
            <div class="m-team-title">${tb.teamName}</div>
            <div class="m-team-mgr">${tb.displayName} ${renderHonorBadgeHtml(tb.honor || getManagerHonor(tb))}</div>
          </div>
          <div class="m-team-score ${hasStarted && sb > sa ? 'text-gold' : ''}">
            ${hasStarted ? sb.toFixed(2) : '0.00'}
            <span class="m-score-lbl">FPs</span>
          </div>
        </div>
      </div>

      <div class="m-card-footer">
        <span class="m-footer-sub">💡 ${flavor.subtitle}</span>
      </div>
    </div>`;
  }).join('');

  /* ── Tabla de Posiciones ──────────────────────────────────── */
  const standingsRows = teams.map((t, i) => {
    const isPlayoffEdge = i === playoffCut - 1;
    const isElim = i >= playoffCut;
    const streakLetter = (t.streak || '').replace(/\d/g, '');
    const streakNum = (t.streak || '').replace(/\D/g, '');

    return `
    <tr class="${isPlayoffEdge ? 'playoff-line' : ''} ${isElim ? 'eliminated' : ''}">
      <td>
        <span class="rank-num ${i < 3 ? 'r' + (i + 1) : ''}">${i + 1}</span>
      </td>
      <td>
        <div class="team-cell">
          <img class="t-avatar" src="${t.avatar || '/logo.jpg'}" alt="" onerror="this.src='/logo.jpg'">
          <div>
            <div class="t-name">${t.teamName}</div>
            <div class="t-mgr">${t.displayName} ${renderHonorBadgeHtml(t.honor || getManagerHonor(t))}</div>
          </div>
        </div>
      </td>
      <td class="record text-center">${t.wins}-${t.losses}${t.ties ? `-${t.ties}` : ''}</td>
      <td class="text-center text-muted">${(t.winPct * 100).toFixed(1)}%</td>
      <td class="num text-center fpts-val">${t.fpts.toFixed(2)}</td>
      <td class="num text-center text-muted">${t.fptsAgainst.toFixed(2)}</td>
      <td class="num text-center faab-val">$${t.faabRemaining}</td>
      <td class="text-center">
        ${streakLetter
          ? `<span class="streak ${streakLetter}">${streakLetter}${streakNum}</span>`
          : '<span class="text-faint">—</span>'}
      </td>
      <td class="text-center">${i < playoffCut ? `<span class="playoff-tag">🏆 Playoffs</span>` : ''}</td>
    </tr>`;
  }).join('');

  return `
  <!-- Header de Enfrentamientos -->
  <div class="card mb-1" style="background: linear-gradient(135deg, rgba(239,68,68,.15) 0%, rgba(56,189,248,.12) 100%); border: 1px solid var(--c-border); padding: 1.35rem 1.5rem;">
    <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem; flex-wrap:wrap;">
      <div>
        <div style="font-size:.72rem; font-weight:700; text-transform:uppercase; letter-spacing:.06em; color:var(--gold-lt); margin-bottom:.25rem;">
          🏈 The Gains League 2026 • Temporada Regular
        </div>
        <h2 style="font-family:var(--font-head); font-size:1.6rem; color:#fff; text-transform:uppercase; letter-spacing:.02em; line-height:1.15;">
          ⚔️ Enfrentamientos de la Semana ${week}
        </h2>
        <p style="font-size:.86rem; color:var(--c-muted); margin-top:.35rem; max-width:640px; line-height:1.5;">
          Los 6 duelos oficiales de la jornada. Los puntos y resultados se sincronizan en tiempo real directamente desde Sleeper.
        </p>
      </div>
      <div style="display:flex; flex-direction:column; gap:.5rem; align-items:flex-end;">
        <span style="background:rgba(56,189,248,.15); border:1px solid rgba(56,189,248,.35); color:#38bdf8; font-family:var(--font-head); font-size:1.05rem; padding:.45rem .95rem; border-radius:var(--r-sm); font-weight:700;">
          Semana ${week} • 6 Duelos
        </span>
      </div>
    </div>
  </div>

  <!-- Grid de Enfrentamientos Pro -->
  <div class="matchups-pro-grid mb-1">
    ${cardsHtml}
  </div>

  <!-- Tabla de Posiciones General -->
  <div class="card mt-1">
    <div class="section-head">
      <div>
        <div class="section-title">📊 Tabla de Posiciones Oficial</div>
        <p style="color:var(--c-muted); font-size:.82rem; margin-top:.2rem;">
          Récord general, puntos a favor/contra y presupuesto de waivers ($100 FAAB).
        </p>
      </div>
      <span class="section-badge">Top ${playoffCut} a Playoffs</span>
    </div>
    <div class="table-scroll">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Equipo &amp; Mánager</th>
            <th class="text-center">Récord</th>
            <th class="text-center">%Vic</th>
            <th class="num text-center">Pts Fav</th>
            <th class="num text-center">Pts Con</th>
            <th class="num text-center">FAAB</th>
            <th class="text-center">Racha</th>
            <th class="text-center"></th>
          </tr>
        </thead>
        <tbody>${standingsRows}</tbody>
      </table>
    </div>
  </div>`;
}
