import { renderHonorBadgeHtml, getManagerHonor } from '../utils/managerBadges.js';

/**
 * High-Impact Matchup Card Highlights
 */
function getMatchupFlavor(mid, tA, tB, week = 1) {
  // mid 6: DonaldTrumpGoat vs SanzFC (Week 1)
  if (week === 1 && mid == 6) {
    return { tag: '👑 Duelo de Titanes', subtitle: 'El Campeón Defensor vs #2 Power Rank', glowClass: 'glow-gold' };
  }
  // mid 2: mariobarbieri vs versace4444 (Week 1)
  if (week === 1 && mid == 2) {
    return { tag: '🌱 Choque de Debutantes', subtitle: 'Duelo directo entre Novatos 2026', glowClass: 'glow-cyan' };
  }
  // mid 4: brianallenrm vs Cee Dee'z Nuts (Week 1)
  if (week === 1 && mid == 4) {
    return { tag: '🥈 vs 🚀 Duelo de Alto Voltaje', subtitle: '#1 Proyectado vs Subcampeón 2025', glowClass: 'glow-blue' };
  }
  // Week 2 Highlights
  if (week === 2 && mid == 5) {
    return { tag: '🔥 Duelo al Límite', subtitle: 'Bowers Rangers (142.44) supera a SanzFC (139.98) por solo 2.4 pts', glowClass: 'glow-gold' };
  }
  if (week === 2 && mid == 4) {
    return { tag: '⚡ Mr. Olympia de la Semana', subtitle: 'Emi69Hb se lleva los $300 MXN con 167.22 FPs', glowClass: 'glow-emerald' };
  }
  if (week === 2 && mid == 1) {
    return { tag: '💥 Descalabro y Castigo', subtitle: 'DaniAlva08 vence a MALIK BUSINESS (68.92 FPs -> 50 burpees)', glowClass: 'glow-purple' };
  }
  if (week === 2 && mid == 6) {
    return { tag: '🦏 Triunfo Terrestre', subtitle: 'Danbengoa (133.42) se impone a DonaldTrumpGoat (85.68)', glowClass: 'glow-blue' };
  }

  // Week 3 Highlights
  if (week === 3 && (tA?.rosterId === 1 || tB?.rosterId === 1)) {
    return { tag: '🚀 Choque Invicto', subtitle: 'Bowers Rangers (2-0) vs Danbengoa (1-1)', glowClass: 'glow-gold' };
  }
  if (week === 3 && mid == 1) {
    return { tag: '🔥 Batalla por el Récord', subtitle: 'Carlosso (2-0) vs DaniAlva08 (1-1)', glowClass: 'glow-cyan' };
  }

  // Fallback generic
  if (tA?.honor?.type === 'champion' || tB?.honor?.type === 'champion') {
    return { tag: '👑 Frente al Campeón', subtitle: 'Prueba de fuego frente a DonaldTrumpGoat', glowClass: 'glow-gold' };
  }
  return { tag: '⚔️ Choque Directo', subtitle: `Duelo oficial de Semana ${week} en The Gains League`, glowClass: 'glow-slate' };
}

export function renderMatchupsCardsGrid(matchups = [], teams = [], week = 2) {
  const teamMap = Object.fromEntries(teams.map(t => [t.rosterId, t]));

  // Agrupar por matchup_id
  const pairs = {};
  matchups.forEach(m => {
    if (!pairs[m.matchup_id]) pairs[m.matchup_id] = [];
    pairs[m.matchup_id].push(m);
  });

  return Object.entries(pairs).map(([mid, pair]) => {
    const [a, b] = pair;
    const ta = teamMap[a?.roster_id] || { rosterId: a?.roster_id, teamName: `Equipo ${a?.roster_id}`, avatar: '/logo.jpg', displayName: 'Mánager' };
    const tb = teamMap[b?.roster_id] || { rosterId: b?.roster_id, teamName: `Equipo ${b?.roster_id}`, avatar: '/logo.jpg', displayName: 'Mánager' };
    const sa = a?.points ?? 0;
    const sb = b?.points ?? 0;
    const hasStarted = sa > 0 || sb > 0;
    const isCompleted = hasStarted; // Si ya tienen puntos registrados
    const flavor = getMatchupFlavor(mid, ta, tb, week);
    const aWon = isCompleted && sa > sb;
    const bWon = isCompleted && sb > sa;
    const diff = Math.abs(sa - sb).toFixed(2);

    return `
    <div class="matchup-card-pro ${flavor.glowClass} ${isCompleted ? 'is-final' : ''}">
      <div class="m-card-header">
        <span class="m-card-badge">
          ${isCompleted ? '🏁 FINAL' : '⚡ MATCHUP'} #${mid} • SEMANA ${week}
        </span>
        <span class="m-card-flavor-tag">${flavor.tag}</span>
      </div>

      <div class="m-clash-body">
        <!-- Equipo A -->
        <div class="m-team-side side-a ${aWon ? 'leading winner-team' : ''} ${bWon ? 'loser-team' : ''}">
          <div class="m-team-avatar-wrap">
            <img class="m-team-avatar" src="${ta.avatar || '/logo.jpg'}" alt="" onerror="this.src='/logo.jpg'">
            ${aWon ? '<span class="team-win-crown" title="Ganador">🏆</span>' : ''}
          </div>
          <div class="m-team-info">
            <div class="m-team-title">${ta.teamName}</div>
            <div class="m-team-mgr">${ta.displayName} ${renderHonorBadgeHtml(ta.honor || getManagerHonor(ta))}</div>
          </div>
          <div class="m-team-score ${aWon ? 'text-gold' : ''}">
            ${hasStarted ? sa.toFixed(2) : '0.00'}
            <span class="m-score-lbl">FPs</span>
          </div>
          ${aWon ? `<span class="win-pill-badge">🏆 Ganador (+${diff})</span>` : ''}
        </div>

        <!-- Centro VS -->
        <div class="m-vs-divider">
          <div class="vs-circle ${isCompleted ? 'final-vs' : ''}">
            ${isCompleted ? 'VS' : 'VS'}
          </div>
          <div class="vs-status ${isCompleted ? 'status-final' : ''}">
            ${isCompleted ? '🏁 Final' : '🏈 Kickoff'}
          </div>
        </div>

        <!-- Equipo B -->
        <div class="m-team-side side-b ${bWon ? 'leading winner-team' : ''} ${aWon ? 'loser-team' : ''}">
          <div class="m-team-avatar-wrap">
            <img class="m-team-avatar" src="${tb.avatar || '/logo.jpg'}" alt="" onerror="this.src='/logo.jpg'">
            ${bWon ? '<span class="team-win-crown" title="Ganador">🏆</span>' : ''}
          </div>
          <div class="m-team-info">
            <div class="m-team-title">${tb.teamName}</div>
            <div class="m-team-mgr">${tb.displayName} ${renderHonorBadgeHtml(tb.honor || getManagerHonor(tb))}</div>
          </div>
          <div class="m-team-score ${bWon ? 'text-gold' : ''}">
            ${hasStarted ? sb.toFixed(2) : '0.00'}
            <span class="m-score-lbl">FPs</span>
          </div>
          ${bWon ? `<span class="win-pill-badge">🏆 Ganador (+${diff})</span>` : ''}
        </div>
      </div>

      <div class="m-card-footer">
        <span class="m-footer-sub">💡 ${flavor.subtitle}</span>
      </div>
    </div>`;
  }).join('');
}

export function renderMatchups(matchups = [], teams = [], week = 3, isPreDraft = false, league = {}, weeklyMatchups = {}, selectedWeek = null) {
  const playoffCut = league?.settings?.playoff_teams || 6;

  // Determinar semana a mostrar por defecto: Semana 2 si ya concluyó, o la semana seleccionada
  const activeWeek = selectedWeek || (weeklyMatchups[2]?.some(m => m.points > 0) ? 2 : week);
  const activeMatchups = (weeklyMatchups[activeWeek] && weeklyMatchups[activeWeek].length > 0)
    ? weeklyMatchups[activeWeek]
    : matchups;

  const cardsHtml = renderMatchupsCardsGrid(activeMatchups, teams, activeWeek);

  /* ── Tabla de Posiciones Oficial ──────────────────────────── */
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
      <td class="record text-center" style="font-family:var(--font-head); font-size:1.05rem;">
        <strong>${t.wins}-${t.losses}</strong>${t.ties ? `-${t.ties}` : ''}
      </td>
      <td class="text-center text-muted">${(t.winPct * 100).toFixed(1)}%</td>
      <td class="num text-center fpts-val" style="color:var(--gold-lt); font-weight:700;">${t.fpts.toFixed(2)}</td>
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
  <!-- Header de Enfrentamientos con Selector de Semana -->
  <div class="card mb-1" style="background: linear-gradient(135deg, rgba(239,68,68,.15) 0%, rgba(56,189,248,.12) 100%); border: 1px solid var(--c-border); padding: 1.35rem 1.5rem;">
    <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem; flex-wrap:wrap;">
      <div>
        <div style="font-size:.72rem; font-weight:700; text-transform:uppercase; letter-spacing:.06em; color:var(--gold-lt); margin-bottom:.25rem;">
          🏈 The Gains League 2026 • Temporada Regular
        </div>
        <h2 style="font-family:var(--font-head); font-size:1.6rem; color:#fff; text-transform:uppercase; letter-spacing:.02em; line-height:1.15;">
          ⚔️ Enfrentamientos • <span id="m-active-week-title" style="color:var(--gold-lt)">Semana ${activeWeek}</span>
        </h2>
        <p style="font-size:.86rem; color:var(--c-muted); margin-top:.35rem; max-width:640px; line-height:1.5;">
          Resultados en vivo sincronizados con Sleeper. Selecciona la semana para ver marcadores finales o los duelos de la próxima fecha.
        </p>
      </div>

      <!-- Selector de Semana Pills -->
      <div class="matchups-week-pills">
        <button class="m-week-pill ${activeWeek === 1 ? 'active' : ''}" data-week="1">
          🏈 Semana 1 <span class="m-pill-status">Final</span>
        </button>
        <button class="m-week-pill ${activeWeek === 2 ? 'active' : ''}" data-week="2">
          🔥 Semana 2 <span class="m-pill-status">Final</span>
        </button>
        <button class="m-week-pill ${activeWeek === 3 ? 'active' : ''}" data-week="3">
          ⚡ Semana 3 <span class="m-pill-status upcoming">Próxima</span>
        </button>
      </div>
    </div>
  </div>

  <!-- Grid de Enfrentamientos Pro -->
  <div id="matchups-cards-grid" class="matchups-pro-grid mb-1">
    ${cardsHtml}
  </div>

  <!-- Tabla de Posiciones General -->
  <div class="card mt-1">
    <div class="section-head">
      <div>
        <div class="section-title">📊 Tabla de Posiciones Oficial (Semana 2 Concluida)</div>
        <p style="color:var(--c-muted); font-size:.82rem; margin-top:.2rem;">
          Récord general tras 2 semanas completadas, puntos a favor/contra y presupuesto de waivers ($100 FAAB).
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

export function attachMatchupsEvents(container, weeklyMatchups, teams) {
  const weekPills = container.querySelectorAll('.m-week-pill');
  const gridContainer = container.querySelector('#matchups-cards-grid');
  const titleSpan = container.querySelector('#m-active-week-title');

  weekPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const targetWeek = parseInt(pill.getAttribute('data-week'), 10);
      if (!targetWeek || !weeklyMatchups[targetWeek]) return;

      // Actualizar clase activa en pills
      weekPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      // Actualizar título
      if (titleSpan) titleSpan.textContent = `Semana ${targetWeek}`;

      // Renderizar tarjetas de la semana seleccionada
      if (gridContainer) {
        gridContainer.innerHTML = renderMatchupsCardsGrid(weeklyMatchups[targetWeek], teams, targetWeek);
      }
    });
  });
}
