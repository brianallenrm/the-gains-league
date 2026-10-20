import { renderHonorBadgeHtml, getManagerHonor } from '../utils/managerBadges.js';
import { toPng } from 'html-to-image';

/**
 * High-Impact Matchup Card Highlights & Storylines
 */
function getMatchupFlavor(mid, tA, tB, week = 4) {
  const recA = `${tA?.wins ?? 0}-${tA?.losses ?? 0}`;
  const recB = `${tB?.wins ?? 0}-${tB?.losses ?? 0}`;
  const recordHeader = `<strong>${tA?.teamName} (${recA}) vs ${tB?.teamName} (${recB})</strong>`;

  const hasRosters = (r1, r2) =>
    (tA?.rosterId === r1 && tB?.rosterId === r2) || (tA?.rosterId === r2 && tB?.rosterId === r1);

  // ==========================================
  // SEMANA 7 (CARTELERA ESTELAR)
  // ==========================================
  if (week === 7) {
    // Bowers Rangers (6-0) vs Emi69Hb (6-0)
    if (hasRosters(1, 11) || mid == 3) {
      return {
        tag: '🚀 Choque Supremo de Invictos',
        subtitle: `${recordHeader} • ¡EL PARTIDO DEL AÑO! Choque en la cumbre: ambos invictos 6-0, el ganador se queda con la cima solitaria de la liga`,
        glowClass: 'glow-gold'
      };
    }
    // Danbengoa (3-3) vs SanzFC (4-2)
    if (hasRosters(7, 9) || mid == 2) {
      return {
        tag: '💣 Duelo de Poder',
        subtitle: `${recordHeader} • SanzFC llega encendido con 4 victorias al hilo buscando el Top 2 ante Danbengoa, firme en zona de playoffs`,
        glowClass: 'glow-emerald'
      };
    }
    // DonaldTrumpGoat (3-3) vs DaniAlva08 (2-4)
    if (hasRosters(8, 12) || mid == 1) {
      return {
        tag: '👑 El Campeón ante el Sótano',
        subtitle: `${recordHeader} • DonaldTrumpGoat busca recuperar terreno de playoffs frente a un DaniAlva08 obligado a despertar tras caer al sótano de Semana 6`,
        glowClass: 'glow-purple'
      };
    }
    // carloverditraconis (2-4) vs Cee Dee'z Nuts (2-4)
    if (hasRosters(6, 10) || mid == 4) {
      return {
        tag: '⚔️ Batalla por la Vida',
        subtitle: `${recordHeader} • Duelo crucial por el boleto a playoffs: ambos con 2-4, el que pierda quedará en situación crítica`,
        glowClass: 'glow-blue'
      };
    }
    // Carlosso (2-4) vs versace4444 (2-4)
    if (hasRosters(2, 5) || mid == 5) {
      return {
        tag: '💥 Choque de Necesitados',
        subtitle: `${recordHeader} • Carlosso busca cortar su racha de 4 derrotas consecutivas ante la explosividad ofensiva de versace4444`,
        glowClass: 'glow-cyan'
      };
    }
    // MALIK BUSINESS (3-3) vs Osante (1-5)
    if (hasRosters(3, 4) || mid == 6) {
      return {
        tag: '⚡ A la Caza del Top 4',
        subtitle: `${recordHeader} • MALIK BUSINESS (flamante Mr. Olympia con 161.66 FPs y 2 triunfos seguidos) enfrenta la urgencia máxima de Osante (1-5)`,
        glowClass: 'glow-emerald'
      };
    }
  }

  // ==========================================
  // SEMANA 6 (RECAP HISTÓRICO)
  // ==========================================
  if (week === 6) {
    if (hasRosters(3, 6) || mid == 5) {
      return {
        tag: '💣 Mr. Olympia de la Semana',
        subtitle: `${recordHeader} • MALIK BUSINESS (161.66) se llevó los $300 MXN con una actuación arrolladora superando a carloverditraconis (134.98)`,
        glowClass: 'glow-gold'
      };
    }
    if (hasRosters(8, 11) || mid == 2) {
      return {
        tag: '👑 Golpe de Autoridad Invicto',
        subtitle: `${recordHeader} • Emi69Hb (155.80) dio una cátedra venciendo al Campeón DonaldTrumpGoat (84.52) para colocarse 6-0 en el liderato`,
        glowClass: 'glow-emerald'
      };
    }
    if (hasRosters(7, 10) || mid == 3) {
      return {
        tag: '⚔️ Triunfo de Playoffs',
        subtitle: `${recordHeader} • Danbengoa (132.98) superó con autoridad al Subcampeón Cee Dee’z Nuts (110.28) para afianzarse en el Top 5`,
        glowClass: 'glow-blue'
      };
    }
    if (hasRosters(9, 12) || mid == 1) {
      return {
        tag: '⚡ Racha Imparable',
        subtitle: `${recordHeader} • SanzFC (131.86) hilvanó su 4to triunfo consecutivo mandando a DaniAlva08 (73.02) al sótano de la semana`,
        glowClass: 'glow-gold'
      };
    }
    if (hasRosters(1, 2) || mid == 4) {
      return {
        tag: '🚀 Invicto Sufrido',
        subtitle: `${recordHeader} • Bowers Rangers (122.50) resistió la embestida de Carlosso (110.34) para extender su racha inmaculada a 6-0`,
        glowClass: 'glow-gold'
      };
    }
    if (hasRosters(4, 5) || mid == 6) {
      return {
        tag: '🌱 Respiro de Oro',
        subtitle: `${recordHeader} • versace4444 (114.42) se llevó un duelo cerrado ante Osante (107.60) para conseguir su segundo triunfo del año`,
        glowClass: 'glow-purple'
      };
    }
  }

  // ==========================================
  // SEMANA 5 (RECAP HISTÓRICO)
  // ==========================================
  if (week === 5) {
    if (hasRosters(1, 4) || mid == 5) {
      return {
        tag: '🚀 Exhibición de Mr. Olympia',
        subtitle: `${recordHeader} • Bowers Rangers (188.54) desató su artillería para ganar los $300 MXN, vencer a Osante (124.46) y ponerse 5-0 en el #1 general`,
        glowClass: 'glow-gold'
      };
    }
    if (hasRosters(11, 12) || mid == 1) {
      return {
        tag: '⚡ Invicto Imbatible',
        subtitle: `${recordHeader} • Emi69Hb (176.40) mantuvo su marcha perfecta (5-0) con una victoria contundente sobre DaniAlva08 (132.00)`,
        glowClass: 'glow-emerald'
      };
    }
    if (hasRosters(2, 8) || mid == 3) {
      return {
        tag: '👑 Paliza del Campeón',
        subtitle: `${recordHeader} • DonaldTrumpGoat (157.00) arrolló a Carlosso (70.40), encadenando su segundo triunfo y mandando a su rival al sótano semanal`,
        glowClass: 'glow-purple'
      };
    }
    if (hasRosters(3, 7) || mid == 4) {
      return {
        tag: '💥 Resurgimiento Novato',
        subtitle: `${recordHeader} • MALIK BUSINESS (147.74) sacó una victoria de oro frente a Danbengoa (121.54) para colocarse 2-3 en la tabla`,
        glowClass: 'glow-blue'
      };
    }
    if (hasRosters(5, 6) || mid == 6) {
      return {
        tag: '🌱 Victoria de Oro',
        subtitle: `${recordHeader} • carloverditraconis (138.60) superó en duelo dramático a versace4444 (130.44) para ascender al Top 5 de la liga`,
        glowClass: 'glow-cyan'
      };
    }
    if (hasRosters(9, 10) || mid == 2) {
      return {
        tag: '🛡️ Triunfo al Límite',
        subtitle: `${recordHeader} • SanzFC (115.76) hiló su tercera victoria consecutiva frenando al Subcampeón Cee Dee’z Nuts (100.44)`,
        glowClass: 'glow-slate'
      };
    }
  }

  // ==========================================
  // SEMANA 4 (RECAP HISTÓRICO)
  // ==========================================
  if (week === 4) {
    if (hasRosters(3, 9) || mid == 3) {
      return {
        tag: '💣 Récord Histórico de Liga',
        subtitle: `${recordHeader} • SanzFC (198.52) destrozó el récord de temporada para ganar su segundo Mr. Olympia consecutivo superando a MALIK (146.24)`,
        glowClass: 'glow-gold'
      };
    }
    if (hasRosters(4, 8) || mid == 4) {
      return {
        tag: '👑 El Campeón Despertó',
        subtitle: `${recordHeader} • DonaldTrumpGoat (177.32) aplastó a Osante (99.56) en una demostración brutal de poderío para igualar su récord a 2-2`,
        glowClass: 'glow-purple'
      };
    }
    if (hasRosters(10, 12) || mid == 1) {
      return {
        tag: '⚡ Golpe de Autoridad',
        subtitle: `${recordHeader} • Cee Dee’z Nuts (164.30) arrolló a DaniAlva08 (119.58) hilvanando triunfos para meterse al Top 4 de la liga`,
        glowClass: 'glow-blue'
      };
    }
    if (hasRosters(2, 11) || mid == 2) {
      return {
        tag: '🚀 Invicto Implacable',
        subtitle: `${recordHeader} • Emi69Hb (159.52) dominó de punta a punta mandando a Carlosso (97.32) al sótano de la semana para ponerse 4-0`,
        glowClass: 'glow-emerald'
      };
    }
    if (hasRosters(5, 7) || mid == 5) {
      return {
        tag: '🛡️ Defensa Férrea',
        subtitle: `${recordHeader} • Danbengoa (146.48) frenó a versace4444 (123.00) en una batalla cerrada que consolidó su lugar en zona de clasificación`,
        glowClass: 'glow-slate'
      };
    }
    if (hasRosters(1, 6) || mid == 6) {
      return {
        tag: '🚀 Invicto sin Fisuras',
        subtitle: `${recordHeader} • Bowers Rangers (137.98) venció a carloverditraconis (118.98) para mantener la marcha perfecta de 4-0`,
        glowClass: 'glow-gold'
      };
    }
  }

  // ==========================================
  // SEMANA 3 (RECAP HISTÓRICO)
  // ==========================================
  if (week === 3) {
    if (hasRosters(5, 9) || mid == 4) {
      return {
        tag: '💣 Tiroteo del Año',
        subtitle: `${recordHeader} • SanzFC (190.48) superó a versace4444 (186.54) en el partido con más puntos del año y se llevó los $300 MXN`,
        glowClass: 'glow-gold'
      };
    }
    if (hasRosters(2, 12) || mid == 1) {
      return {
        tag: '🌱 Caída del Invicto',
        subtitle: `${recordHeader} • DaniAlva08 (144.74) dio la campanada quitándole el invicto a Carlosso (129.32) con una actuación brillante`,
        glowClass: 'glow-cyan'
      };
    }
    if (hasRosters(1, 7) || mid == 6) {
      return {
        tag: '🚀 Liderato en Solitario',
        subtitle: `${recordHeader} • Bowers Rangers (160.54) venció a Danbengoa (127.62) para ponerse 3-0 y adueñarse del #1 general de la liga`,
        glowClass: 'glow-emerald'
      };
    }
    if (hasRosters(6, 8) || mid == 5) {
      return {
        tag: '⚡ Paliza al Campeón',
        subtitle: `${recordHeader} • carloverditraconis (164.30) arrolló al Campeón DonaldTrumpGoat (95.38) propinándole una dolorosa caída`,
        glowClass: 'glow-blue'
      };
    }
    if (hasRosters(3, 10) || mid == 2) {
      return {
        tag: '💥 Primer Triunfo',
        subtitle: `${recordHeader} • Cee Dee’z Nuts (95.84) consiguió su primera victoria de la campaña superando a MALIK BUSINESS (90.70)`,
        glowClass: 'glow-purple'
      };
    }
    if (hasRosters(4, 11) || mid == 3) {
      return {
        tag: '👑 Paso Perfecto',
        subtitle: `${recordHeader} • Emi69Hb (120.72) mantuvo su marcha invicta (3-0) superando al veterano Osante (93.26)`,
        glowClass: 'glow-emerald'
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
        tag: '💥 Descalabro al Sótano',
        subtitle: `${recordHeader} • DaniAlva08 venció con autoridad a MALIK BUSINESS mandándolo al último lugar de la jornada (68.92 FPs)`,
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
        tag: '🤡 Al Fondo de la Tabla',
        subtitle: `${recordHeader} • Carlosso (115.32) ganó ante carloverditraconis (91.80), primer último lugar del año`,
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

export function renderMatchupsCardsGrid(matchups = [], teams = [], week = 4) {
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

export function renderMatchups(matchups = [], teams = [], week = 7, isPreDraft = false, league = {}, weeklyMatchups = {}, selectedWeek = null) {
  const playoffCut = league?.settings?.playoff_teams || 6;

  // Determinar semana a mostrar por defecto: Semana 7 (próxima) o seleccionada
  const activeWeek = selectedWeek || week || 7;
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
          ⚡ Semana 3 <span class="m-pill-status">Final</span>
        </button>
        <button class="m-week-pill ${activeWeek === 4 ? 'active' : ''}" data-week="4">
          💥 Semana 4 <span class="m-pill-status">Final</span>
        </button>
        <button class="m-week-pill ${activeWeek === 5 ? 'active' : ''}" data-week="5">
          👑 Semana 5 <span class="m-pill-status">Final</span>
        </button>
        <button class="m-week-pill ${activeWeek === 6 ? 'active' : ''}" data-week="6">
          💣 Semana 6 <span class="m-pill-status">Final</span>
        </button>
        <button class="m-week-pill ${activeWeek === 7 ? 'active' : ''}" data-week="7">
          🚀 Semana 7 <span class="m-pill-status upcoming">Próxima</span>
        </button>
      </div>
    </div>
  </div>

  <!-- Grid de Enfrentamientos Pro -->
  <div id="matchups-cards-grid" class="matchups-pro-grid mb-1">
    ${cardsHtml}
  </div>

  <!-- Tabla de Posiciones General -->
  <div id="standings-capture-target" class="card mt-1 standings-capture-container">
    <div class="section-head">
      <div>
        <div class="section-title">📊 Tabla de Posiciones Oficial (Semana 6 Concluida)</div>
        <p style="color:var(--c-muted); font-size:.82rem; margin-top:.2rem;">
          Récord general tras 6 semanas completadas, puntos a favor/contra y presupuesto de waivers ($100 FAAB).
        </p>
      </div>
      <div style="display:flex; align-items:center; gap:.6rem; flex-wrap:wrap;">
        <span class="section-badge">Top ${playoffCut} a Playoffs</span>
        <button id="btn-download-standings" class="btn-download-table" title="Descargar tabla como imagen PNG en alta calidad">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>Descargar Imagen</span>
        </button>
      </div>
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
  const downloadBtn = container.querySelector('#btn-download-standings');
  const captureTarget = container.querySelector('#standings-capture-target');

  if (downloadBtn && captureTarget) {
    downloadBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const originalHtml = downloadBtn.innerHTML;
      try {
        downloadBtn.disabled = true;
        downloadBtn.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="spin">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10"></path>
          </svg>
          <span>Generando...</span>
        `;

        // Generar imagen con alta resolución y estilo limpio
        const dataUrl = await toPng(captureTarget, {
          backgroundColor: '#0c1526',
          pixelRatio: 2.5,
          filter: (node) => {
            // Ocultar el botón dentro de la captura final
            if (node.id === 'btn-download-standings') return false;
            return true;
          }
        });

        // Crear enlace de descarga automática
        const link = document.createElement('a');
        link.download = `TheGainsLeague_Posiciones_Semana6.png`;
        link.href = dataUrl;
        link.click();

        downloadBtn.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span style="color:#34d399;">¡Descargada!</span>
        `;
      } catch (err) {
        console.error('Error al descargar tabla:', err);
        downloadBtn.innerHTML = `<span>⚠️ Error</span>`;
      } finally {
        setTimeout(() => {
          downloadBtn.disabled = false;
          downloadBtn.innerHTML = originalHtml;
        }, 2200);
      }
    });
  }

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
