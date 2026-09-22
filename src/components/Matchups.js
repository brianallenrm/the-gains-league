import { renderHonorBadgeHtml, getManagerHonor } from '../utils/managerBadges.js';

/**
 * High-Impact Matchup Card Highlights & Storylines
 */
function getMatchupFlavor(mid, tA, tB, week = 3) {
  const recA = `${tA?.wins ?? 0}-${tA?.losses ?? 0}`;
  const recB = `${tB?.wins ?? 0}-${tB?.losses ?? 0}`;
  const recordHeader = `<strong>${tA?.teamName} (${recA}) vs ${tB?.teamName} (${recB})</strong>`;

  const hasRosters = (r1, r2) =>
    (tA?.rosterId === r1 && tB?.rosterId === r2) || (tA?.rosterId === r2 && tB?.rosterId === r1);

  // ==========================================
  // SEMANA 3 (CARTELERA ESTELAR)
  // ==========================================
  if (week === 3) {
    // Carlosso (2-0) vs DaniAlva08 (1-1)
    if (hasRosters(2, 12) || mid == 1) {
      return {
        tag: '🛡️ Invicto a Prueba',
        subtitle: `${recordHeader} • Carlosso expone su paso perfecto (2-0) ante el novato revelación DaniAlva08 en ascenso`,
        glowClass: 'glow-cyan'
      };
    }
    // MALIK BUSINESS (1-1) vs Cee Dee'z Nuts (0-2)
    if (hasRosters(3, 10) || mid == 2) {
      return {
        tag: '💥 Urgencia & Redención',
        subtitle: `${recordHeader} • MALIK BUSINESS busca redimirse de los 50 burpees ante el Subcampeón obligado a salir del 0-2`,
        glowClass: 'glow-purple'
      };
    }
    // Osante (1-1) vs Emi69Hb (2-0)
    if (hasRosters(4, 11) || mid == 3) {
      return {
        tag: '🎯 Caza al Líder Invicto',
        subtitle: `${recordHeader} • El colmillo veterano de Osante intentará frenar la aplanadora de Emi69Hb (#1 y Mr. Olympia)`,
        glowClass: 'glow-emerald'
      };
    }
    // versace4444 (1-1) vs SanzFC (0-2)
    if (hasRosters(5, 9) || mid == 4) {
      return {
        tag: '💣 Choque de Artillería',
        subtitle: `${recordHeader} • Duelo de alto puntaje (+285 FPs c/u); SanzFC busca justicia tras caer por solo 2.4 pts`,
        glowClass: 'glow-blue'
      };
    }
    // carloverditraconis (0-2) vs DonaldTrumpGoat (1-1)
    if (hasRosters(6, 8) || mid == 5) {
      return {
        tag: '👑 Furia del Campeón',
        subtitle: `${recordHeader} • El Campeón Defensor busca rugir de nuevo frente a un rival urgido de salir del fondo`,
        glowClass: 'glow-gold'
      };
    }
    // Bowers Rangers (2-0) vs Danbengoa (1-1)
    if (hasRosters(1, 7) || mid == 6) {
      return {
        tag: '🚀 En Defensa del Invicto',
        subtitle: `${recordHeader} • Bowers Rangers (#2 general) expone su invicto ante Danbengoa, encendido tras vencer al campeón`,
        glowClass: 'glow-gold'
      };
    }
  }

  // ==========================================
  // SEMANA 2 (RECAP HISTÓRICO)
  // ==========================================
  if (week === 2) {
    if (hasRosters(1, 9) || mid == 5) {
      return {
        tag: '🔥 Final de Infarto',
        subtitle: `${recordHeader} • Bowers Rangers (142.44) superó a SanzFC (139.98) por solo 2.4 pts en el cierre más dramático`,
        glowClass: 'glow-gold'
      };
    }
    if (hasRosters(6, 11) || mid == 4) {
      return {
        tag: '⚡ Mr. Olympia de la Semana',
        subtitle: `${recordHeader} • Emi69Hb se llevó los $300 MXN con 167.22 FPs y asaltó el liderato general de la liga`,
        glowClass: 'glow-emerald'
      };
    }
    if (hasRosters(3, 12) || mid == 1) {
      return {
        tag: '💥 Descalabro & Burpees',
        subtitle: `${recordHeader} • DaniAlva08 venció con autoridad a MALIK BUSINESS (68.92 FPs -> 50 burpees)`,
        glowClass: 'glow-purple'
      };
    }
    if (hasRosters(7, 8) || mid == 6) {
      return {
        tag: '🦏 Golpe al Campeón',
        subtitle: `${recordHeader} • Danbengoa (133.42) propinó una sorpresiva derrota al Campeón Defensor DonaldTrumpGoat (85.68)`,
        glowClass: 'glow-blue'
      };
    }
    if (hasRosters(2, 4) || mid == 2) {
      return {
        tag: '🚀 Paso Firme al Invicto',
        subtitle: `${recordHeader} • Carlosso (144.46) dominó a Osante (107.12) para mantenerse invicto (2-0)`,
        glowClass: 'glow-cyan'
      };
    }
    if (hasRosters(5, 10) || mid == 3) {
      return {
        tag: '🌱 Duelo al Alambre',
        subtitle: `${recordHeader} • versace4444 (142.66) se llevó un duelo cerradísimo ante el Subcampeón Cee Dee’z Nuts (139.66)`,
        glowClass: 'glow-slate'
      };
    }
  }

  // ==========================================
  // SEMANA 1 (RECAP HISTÓRICO)
  // ==========================================
  if (week === 1) {
    if (hasRosters(3, 5) || mid == 2) {
      return {
        tag: '🏆 Mr. Olympia Inaugural',
        subtitle: `${recordHeader} • MALIK BUSINESS arrancó encendido con 184.46 FPs para ganar los primeros $300 MXN`,
        glowClass: 'glow-gold'
      };
    }
    if (hasRosters(8, 9) || mid == 6) {
      return {
        tag: '👑 Duelo de Titanes',
        subtitle: `${recordHeader} • DonaldTrumpGoat (156.86) defendió la corona en un partidazo ante SanzFC (147.26)`,
        glowClass: 'glow-gold'
      };
    }
    if (hasRosters(1, 10) || mid == 4) {
      return {
        tag: '🥈 vs 🚀 Duelo Estelar',
        subtitle: `${recordHeader} • Bowers Rangers (167.66) venció al Subcampeón Cee Dee’z Nuts (140.30)`,
        glowClass: 'glow-blue'
      };
    }
    if (hasRosters(4, 12) || mid == 1) {
      return {
        tag: '🛡️ Prueba de Fuego',
        subtitle: `${recordHeader} • Osante (137.72) se impuso con experiencia al debutante DaniAlva08 (108.46)`,
        glowClass: 'glow-purple'
      };
    }
    if (hasRosters(7, 11) || mid == 5) {
      return {
        tag: '🌱 Explosión Debutante',
        subtitle: `${recordHeader} • Emi69Hb (162.16) se presentó en la liga con una victoria aplastante ante Danbengoa (103.72)`,
        glowClass: 'glow-emerald'
      };
    }
    if (hasRosters(2, 6) || mid == 3) {
      return {
        tag: '🤡 Primeros 50 Burpees',
        subtitle: `${recordHeader} • Carlosso (115.32) ganó ante carloverditraconis (91.80), primer castigado del año`,
        glowClass: 'glow-slate'
      };
    }
  }

  // ==========================================
  // DYNAMIC FALLBACK (CUALQUIER OTRA SEMANA)
  // ==========================================
  const isUndefeatedA = tA?.losses === 0 && (tA?.wins ?? 0) > 0;
  const isUndefeatedB = tB?.losses === 0 && (tB?.wins ?? 0) > 0;
  const isWinlessA = (tA?.wins ?? 0) === 0 && (tA?.losses ?? 0) > 0;
  const isWinlessB = (tB?.wins ?? 0) === 0 && (tB?.losses ?? 0) > 0;
  const isChamp = tA?.honor?.type === 'champion' || tB?.honor?.type === 'champion';
  const isRookieA = tA?.honor?.type === 'rookie';
  const isRookieB = tB?.honor?.type === 'rookie';

  if (isUndefeatedA && isUndefeatedB) {
    return {
      tag: '🚀 Choque de Invictos',
      subtitle: `${recordHeader} • Ambos equipos llegan invictos; uno perderá el paso perfecto`,
      glowClass: 'glow-gold'
    };
  }
  if (isUndefeatedA || isUndefeatedB) {
    const undefeatedTeam = isUndefeatedA ? tA?.teamName : tB?.teamName;
    return {
      tag: '🛡️ Desafío al Invicto',
      subtitle: `${recordHeader} • ${undefeatedTeam} expone su récord inmaculado en un duelo de máxima tensión`,
      glowClass: 'glow-emerald'
    };
  }
  if (isWinlessA && isWinlessB) {
    return {
      tag: '🔥 Salir del Fondo',
      subtitle: `${recordHeader} • Duelo crucial donde uno conseguirá su primera victoria del año`,
      glowClass: 'glow-purple'
    };
  }
  if (isChamp) {
    return {
      tag: '👑 Frente al Campeón',
      subtitle: `${recordHeader} • Choque de alta exigencia ante el Campeón Defensor`,
      glowClass: 'glow-gold'
    };
  }
  if (isRookieA && isRookieB) {
    return {
      tag: '🌱 Duelo de Debutantes',
      subtitle: `${recordHeader} • Choque directo entre novatos buscando afianzarse en playoffs`,
      glowClass: 'glow-cyan'
    };
  }
  if ((isRookieA && !isRookieB) || (!isRookieA && isRookieB)) {
    return {
      tag: '🛡️ Veterano vs Novato',
      subtitle: `${recordHeader} • La experiencia frente a la juventud en un duelo directo por la tabla`,
      glowClass: 'glow-blue'
    };
  }

  return {
    tag: '⚔️ Choque Divisional Clave',
    subtitle: `${recordHeader} • Partido fundamental en la pelea directa por los 6 boletos a playoffs`,
    glowClass: 'glow-slate'
  };
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
    const ta = teamMap[a?.roster_id] || { rosterId: a?.roster_id, teamName: `Equipo ${a?.roster_id}`, avatar: '/logo.jpg', displayName: 'Mánager', wins: 0, losses: 0 };
    const tb = teamMap[b?.roster_id] || { rosterId: b?.roster_id, teamName: `Equipo ${b?.roster_id}`, avatar: '/logo.jpg', displayName: 'Mánager', wins: 0, losses: 0 };
    const sa = a?.points ?? 0;
    const sb = b?.points ?? 0;
    const hasStarted = sa > 0 || sb > 0;
    const isCompleted = hasStarted; // Si ya tienen puntos registrados
    const flavor = getMatchupFlavor(mid, ta, tb, week);
    const aWon = isCompleted && sa > sb;
    const bWon = isCompleted && sb > sa;
    const diff = Math.abs(sa - sb).toFixed(2);

    const recA = `${ta.wins ?? 0}-${ta.losses ?? 0}`;
    const recB = `${tb.wins ?? 0}-${tb.losses ?? 0}`;

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
            <div class="m-team-title">
              <span>${ta.teamName}</span>
              <span class="m-team-rec-badge">(${recA})</span>
            </div>
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
            VS
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
            <div class="m-team-title">
              <span class="m-team-rec-badge">(${recB})</span>
              <span>${tb.teamName}</span>
            </div>
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

  // Determinar semana a mostrar por defecto: Semana 3 si ya estamos en la 3, o Semana 2
  const activeWeek = selectedWeek || week || 3;
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
          Resultados en vivo sincronizados con Sleeper. Selecciona la semana para revivir marcadores o calentar los duelos de la próxima jornada.
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
