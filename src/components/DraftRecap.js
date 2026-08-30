/**
 * Draft Recap & Report Card Component
 * Analysis, Grades (A+, A, B, C, D), Projected Records, Playoff Odds & Awards
 */

export const DRAFT_ANALYSIS_DATA = {
  1: {
    rosterId: 1,
    grade: "A+",
    gradeClass: "grade-aplus",
    projRecord: "11-3",
    projRank: 1,
    playoffOdds: "94%",
    projPtsPerWeek: 124.6,
    summary: "Draft magistral de pies a cabeza. Con Ja'Marr Chase como ancla y Brock Bowers en la TE élite, armó una ofensiva con piso altísimo. El combo de Jayden Daniels en QB y Rashee Rice + Chris Olave le da dinamismo puro en PPR.",
    bestPick: "Jayden Daniels (Ronda 7, Pick 75)",
    stealPick: "Bo Nix (Ronda 11, Pick 123)",
    riskPick: "J.K. Dobbins (Ronda 8, Pick 94 - Historial físico)",
    pros: [
      "Tridente estelar de WRs de élite (Chase, Olave, Rice).",
      "Ventaja posicional masiva con Brock Bowers en TE.",
      "Gran movilidad y puntos terrestres con Jayden Daniels."
    ],
    cons: [
      "Cuerpo de corredores (Swift, Javonte) dependiente de volumen."
    ],
    verdict: "Contendiente número 1 al título y boleto casi asegurado a Playoffs."
  },
  2: {
    rosterId: 2,
    grade: "A",
    gradeClass: "grade-a",
    projRecord: "10-4",
    projRank: 2,
    playoffOdds: "88%",
    projPtsPerWeek: 121.2,
    summary: "Equilibrio total con dos máquinas de puntos constantes: Amon-Ra St. Brown y Jalen Hurts. De'Von Achane y Josh Jacobs forman un backfield explosivo con gol y recepciones.",
    bestPick: "Amon-Ra St. Brown (Ronda 1, Pick 9)",
    stealPick: "Khalil Shakir (Ronda 14, Pick 160)",
    riskPick: "Travis Kelce (Ronda 7, Pick 81 - Factor edad)",
    pros: [
      "Jalen Hurts asegura 20+ puntos cada semana con el tush-push.",
      "Amon-Ra es una máquina de 8+ recepciones semanales.",
      "Achane tiene potencial de ganar semanas él solo."
    ],
    cons: [
      "Depende de que Kelce mantenga nivel estelar en playoffs."
    ],
    verdict: "Equipo sólido candidato a bye en la primera ronda de playoffs."
  },
  8: {
    rosterId: 8,
    grade: "A",
    gradeClass: "grade-a",
    projRecord: "10-4",
    projRank: 3,
    playoffOdds: "85%",
    projPtsPerWeek: 119.8,
    summary: "Poderío absoluto desde el turno de la vuelta (12/13). Juntar a Justin Jefferson con Derrick Henry y Nico Collins es una pesadilla física para cualquier rival.",
    bestPick: "Nico Collins (Ronda 3, Pick 36)",
    stealPick: "Tony Pollard (Ronda 9, Pick 108)",
    riskPick: "Joe Burrow (Ronda 4, Pick 37)",
    pros: [
      "Justin Jefferson y Nico Collins garantizan yardas y TDs masivos.",
      "Derrick Henry en Ravens es una fábrica de touchdowns en zona roja.",
      "Joe Burrow tiene techo de 4,500 yardas."
    ],
    cons: [
      "Profundidad en banca en receptores jóvenes."
    ],
    verdict: "Uno de los planteles con mayor techo de puntos semanales de toda la liga."
  },
  7: {
    rosterId: 7,
    grade: "A-",
    gradeClass: "grade-a",
    projRecord: "9-5",
    projRank: 4,
    playoffOdds: "79%",
    projPtsPerWeek: 117.5,
    summary: "Estrategia 'Hero RB / Heavy Backfield' llevada al extremo: James Cook, Kyren Williams y Breece Hall. En liga con 2 FLEX, jugar con 3 corredores titulares top es una ventaja aplastante.",
    bestPick: "Breece Hall (Ronda 3, Pick 34)",
    stealPick: "Kyler Murray (Ronda 15, Pick 178 - Robo absoluto)",
    riskPick: "Xavier Worthy (Ronda 4, Pick 39)",
    pros: [
      "El mejor trío de RBs de la liga (Cook, Kyren, Breece).",
      "Kyler Murray como QB2 en ronda 15 es el robo del año.",
      "George Kittle en TE da consistencia y bloqueos."
    ],
    cons: [
      "Cuerpo de receptores depende del despegue de novatos."
    ],
    verdict: "Si sus corredores se mantienen sanos, es candidato natural a semifinales."
  },
  9: {
    rosterId: 9,
    grade: "B+",
    gradeClass: "grade-bplus",
    projRecord: "8-6",
    projRank: 5,
    playoffOdds: "72%",
    projPtsPerWeek: 115.4,
    summary: "Gran visión seleccionando a Bijan Robinson con el pick #2 y Trey McBride en TE. Armó un ejército de receptores de profundidad con Tee Higgins, Tetairoa McMillan, Terry McLaurin y Rome Odunze.",
    bestPick: "Bijan Robinson (Ronda 1, Pick 2)",
    stealPick: "Rome Odunze (Ronda 8, Pick 95)",
    riskPick: "Kenneth Walker (Ronda 2, Pick 23)",
    pros: [
      "Bijan Robinson candidato número 1 a RB1 de toda la NFL.",
      "Trey McBride es el blanco principal en Arizona.",
      "Cuerpo de WRs con 6 titulares viables para rotar por match."
    ],
    cons: [
      "Justin Herbert y Brock Purdy son QBs de piso seguro pero menor movilidad."
    ],
    verdict: "Plantel muy equilibrado con altas probabilidades de entrar al Top 6."
  },
  12: {
    rosterId: 12,
    grade: "B+",
    gradeClass: "grade-bplus",
    projRecord: "8-6",
    projRank: 6,
    playoffOdds: "68%",
    projPtsPerWeek: 114.8,
    summary: "Inició el draft con el Pick #1 llevándose a Jahmyr Gibbs y aseguró a Lamar Jackson en la vuelta. La dupla Lamar + Gibbs tiene el mayor potencial de puntos terrestres de la liga.",
    bestPick: "Jahmyr Gibbs (Ronda 1, Pick 1)",
    stealPick: "Rashid Shaheed (Ronda 15, Pick 169)",
    riskPick: "George Pickens (Ronda 3, Pick 25)",
    pros: [
      "Gibbs + Lamar Jackson generan 40+ puntos terrestres combinados.",
      "DeVonta Smith es un WR2 con techo de WR1 en Philly.",
      "Buena profundidad con prospectos jóvenes (Burden, Henderson)."
    ],
    cons: [
      "Incertidumbre en TE titular con Tyler Warren."
    ],
    verdict: "Equipo peligroso en duelos directos; si explota Pickens, es finalista."
  },
  3: {
    rosterId: 3,
    grade: "B",
    gradeClass: "grade-b",
    projRecord: "7-7",
    projRank: 7,
    playoffOdds: "55%",
    projPtsPerWeek: 112.9,
    summary: "Doble cañón aéreo joven con Puka Nacua y Malik Nabers. Si Caleb Williams da el salto esperado en su segundo año en Chicago, este equipo puede colarse a los puestos altos.",
    bestPick: "Malik Nabers (Ronda 3, Pick 28)",
    stealPick: "Emeka Egbuka (Ronda 5, Pick 52)",
    riskPick: "Chase Brown (Ronda 2, Pick 21)",
    pros: [
      "Puka Nacua y Malik Nabers son imanes de pases (PPR puro).",
      "David Montgomery garantiza anotaciones constantes.",
      "Mucho talento novato con potencial de explosión."
    ],
    cons: [
      "Incertidumbre en QB con Caleb Williams como titular único.",
      "Doble selección de defensas (NE y PIT) ocupó puestos valiosos de banca."
    ],
    verdict: "Luchará palmo a palmo por el último boleto a playoffs en la Semana 14."
  },
  5: {
    rosterId: 5,
    grade: "B",
    gradeClass: "grade-b",
    projRecord: "7-7",
    projRank: 8,
    playoffOdds: "52%",
    projPtsPerWeek: 111.8,
    summary: "Backfield de lujo con Jonathan Taylor y el novato sensación Ashton Jeanty. Acumuló mucho talento en receptores con Drake London, Ladd McConkey y Garrett Wilson.",
    bestPick: "Jonathan Taylor (Ronda 1, Pick 6)",
    stealPick: "Brian Thomas (Ronda 9, Pick 102)",
    riskPick: "Harold Fannin (Ronda 7, Pick 78)",
    pros: [
      "Jonathan Taylor en su prime como caballo de batalla.",
      "Drake London y Garrett Wilson son líderes indiscutibles de targets.",
      "Ashton Jeanty tiene potencial de Novato Ofensivo del Año."
    ],
    cons: [
      "Dak Prescott como único mariscal élite.",
      "Harold Fannin en TE es una apuesta arriesgada."
    ],
    verdict: "Equipo en la frontera de playoffs con gran talento en RB/WR."
  },
  11: {
    rosterId: 11,
    grade: "B-",
    gradeClass: "grade-bminus",
    projRecord: "6-8",
    projRank: 9,
    playoffOdds: "44%",
    projPtsPerWeek: 109.5,
    summary: "Apostó temprano por el mejor QB de fantasy en Josh Allen (Ronda 2) y rodeó con receptores veloces como JSN y Zay Flowers. Sam LaPorta le da seguridad en la posición de TE.",
    bestPick: "Josh Allen (Ronda 2, Pick 18)",
    stealPick: "DK Metcalf (Ronda 8, Pick 90)",
    riskPick: "Cam Skattebo (Ronda 4, Pick 42)",
    pros: [
      "Josh Allen es garantía de 22+ puntos por semana.",
      "Sam LaPorta es top 3 de alas cerradas.",
      "DK Metcalf en ronda 8 tiene tremendo valor."
    ],
    cons: [
      "Backfield terrestre con dudas en volumen titular (Skattebo, Warren, Tuten).",
      "Demasiados picks dedicados a WRs novatos en rondas finales."
    ],
    verdict: "Dependerá mucho de que Josh Allen tenga semanas monstruosas para ganar duelos."
  },
  10: {
    rosterId: 10,
    grade: "C+",
    gradeClass: "grade-c",
    projRecord: "5-9",
    projRank: 10,
    playoffOdds: "35%",
    projPtsPerWeek: 106.2,
    summary: "CeeDee Lamb y Bucky Irving son estrellas comprobadas. Patrick Mahomes en Ronda 12 fue una ganga histórica, pero gastar la Ronda 6 en un pateador (Brandon Aubrey) debilitó su profundidad de banca.",
    bestPick: "CeeDee Lamb (Ronda 1, Pick 8)",
    stealPick: "Patrick Mahomes (Ronda 12, Pick 137 - Robo total)",
    riskPick: "Brandon Aubrey (Ronda 6, Pick 65 - Demasiado temprano para K)",
    pros: [
      "CeeDee Lamb es candidato a WR1 de la temporada.",
      "Patrick Mahomes de QB suplente es un lujo brutal.",
      "Colston Loveland tiene proyección de ala cerrada estelar."
    ],
    cons: [
      "Gastar picks 6 y 8 en K/DEF mermó los suplentes de RB/WR.",
      "Doble pateador en el roster (Aubrey + McPherson) desperdicia una plaza."
    ],
    verdict: "Titulares competitivos, pero necesitará waivers agresivos para cubrir lesiones."
  },
  6: {
    rosterId: 6,
    grade: "C",
    gradeClass: "grade-c",
    projRecord: "5-9",
    projRank: 11,
    playoffOdds: "28%",
    projPtsPerWeek: 104.1,
    summary: "CMC y A.J. Brown son dos de los jugadores más dominantes de la NFL. Sin embargo, seleccionar a Stafford en Ronda 3 y dos pateadores + dos defensas en rondas tempranas dejó huecos grandes en los titulares FLEX.",
    bestPick: "Christian McCaffrey (Ronda 1, Pick 5)",
    stealPick: "Michael Wilson (Ronda 9, Pick 101)",
    riskPick: "Matthew Stafford (Ronda 3, Pick 29 - Tomado 6 rondas antes)",
    pros: [
      "CMC sano es el jugador #1 del fútbol americano.",
      "A.J. Brown y Davante Adams son una pareja de WRs estelar.",
      "Kyle Pitts tiene techo de puntos alto en Atlanta."
    ],
    cons: [
      "Stafford en ronda 3 sobre otros QBs élite.",
      "Doble K (Myers + Reichard) y doble DEF ocupan 4 casillas de roster."
    ],
    verdict: "Su 11 titular es fuerte pero requerirá ajustes urgentes en la banca vía mercado FAAB."
  },
  4: {
    rosterId: 4,
    grade: "D+",
    gradeClass: "grade-d",
    projRecord: "4-10",
    projRank: 12,
    playoffOdds: "18%",
    projPtsPerWeek: 99.4,
    summary: "Estrategia atípica: seleccionó a Drake Maye en Ronda 1 (Pick 11), a la DEF de Kansas City en Ronda 3 y a un pateador novato en Ronda 4. Saquon Barkley cargará con la mayor parte del peso ofensivo.",
    bestPick: "Saquon Barkley (Ronda 2, Pick 14 - Excelente valor)",
    stealPick: "Jayden Reed (Ronda 9, Pick 107)",
    riskPick: "Andy Borregales (Ronda 4, Pick 38 - Kicker en R4)",
    pros: [
      "Saquon Barkley es un monstruo detrás de la línea de Eagles.",
      "Dalton Kincaid y Mark Andrews le dan seguridad en TE.",
      "Jayden Reed y Chris Godwin son sólidos en WR."
    ],
    cons: [
      "Gastar picks de Rondas 1, 3 y 4 en QB de Patriots, DEF y K mermó el cuadro titular.",
      "Tendrá que trabajar los Waivers con los $100 FAAB desde la Semana 1."
    ],
    verdict: "Candidato a dar sorpresas si Drake Maye explota, pero el camino a playoffs es cuesta arriba."
  }
};

export const DRAFT_AWARDS = [
  {
    icon: "💎",
    title: "El Robo del Draft (Best Steal)",
    winner: "Patrick Mahomes (Pick 137, R12) & Kyler Murray (Pick 178, R15)",
    managers: "Cee Dee’z Nuts & Danbengoa",
    desc: "Llevarse a dos mariscales estelares de la NFL en las últimas rondas del draft es una auténtica clase de valor de selección."
  },
  {
    icon: "🚀",
    title: "El Tridente Aéreo Más Letal",
    winner: "Ja'Marr Chase + Chris Olave + Rashee Rice",
    managers: "brianallenrm",
    desc: "Tres receptores número 1 de sus respectivos equipos que garantizan más de 25 recepciones combinadas por semana."
  },
  {
    icon: "🦏",
    title: "El Muro de Corredores (Ground & Pound)",
    winner: "James Cook + Kyren Williams + Breece Hall",
    managers: "Danbengoa",
    desc: "Monopolizó el backfield con 3 corredores estelares capaces de superar las 1,200 yardas totales en el año."
  },
  {
    icon: "🎯",
    title: "El Pick Más Audaz (Biggest Reach)",
    winner: "Kansas City DEF (Ronda 3) & Andy Borregales (Ronda 4)",
    managers: "Osante",
    desc: "Asegurar defensiva y pateador en las primeras 4 rondas rompió todos los libros tradicionales de estrategia de fantasy."
  }
];

export function renderDraftRecapTab(teams = []) {
  const teamMap = Object.fromEntries(teams.map(t => [t.rosterId, t]));

  // Ordenar por ranking proyectado
  const sortedAnalyses = Object.values(DRAFT_ANALYSIS_DATA).sort((a, b) => a.projRank - b.projRank);

  const reportCardsHtml = sortedAnalyses.map(item => {
    const team = teamMap[item.rosterId] || { teamName: `Equipo ${item.rosterId}`, displayName: 'Mánager', avatar: '/logo.jpg' };
    
    return `
    <div class="draft-report-card">
      <div class="report-card-header">
        <div class="report-team-info">
          <img class="report-avatar" src="${team.avatar || '/logo.jpg'}" alt="" onerror="this.src='/logo.jpg'">
          <div>
            <div class="report-rank-badge">Proyección #${item.projRank} • Récord: ${item.projRecord}</div>
            <h3 class="report-team-name">${team.teamName}</h3>
            <div class="report-mgr-name">Mánager: <strong>${team.displayName}</strong></div>
          </div>
        </div>
        <div class="report-grade-box ${item.gradeClass}">
          <div class="grade-letter">${item.grade}</div>
          <div class="grade-label">Calificación</div>
        </div>
      </div>

      <div class="report-metrics-bar">
        <div class="report-metric-item">
          <span class="metric-lbl">Prob. Playoffs</span>
          <span class="metric-val text-green">${item.playoffOdds}</span>
        </div>
        <div class="report-metric-item">
          <span class="metric-lbl">Pts Proyectados/Sem</span>
          <span class="metric-val text-gold">${item.projPtsPerWeek} pts</span>
        </div>
        <div class="report-metric-item">
          <span class="metric-lbl">Mejor Selección</span>
          <span class="metric-val" style="font-size:.82rem">${item.bestPick.split('(')[0]}</span>
        </div>
      </div>

      <div class="report-summary-text">
        ${item.summary}
      </div>

      <div class="report-highlights-grid">
        <div class="highlight-col pros-col">
          <div class="highlight-title">💪 Fortalezas</div>
          <ul class="highlight-list">
            ${item.pros.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>
        <div class="highlight-col cons-col">
          <div class="highlight-title">⚠️ Puntos a Cuidar</div>
          <ul class="highlight-list">
            ${item.cons.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="report-picks-footer">
        <div class="pick-tag steal">💎 <strong>Robo:</strong> ${item.stealPick}</div>
        <div class="pick-tag risk">⚡ <strong>Riesgo:</strong> ${item.riskPick}</div>
      </div>

      <div class="report-verdict-bar">
        <span>🎯 <strong>Veredicto:</strong> ${item.verdict}</span>
      </div>
    </div>`;
  }).join('');

  const awardsCardsHtml = DRAFT_AWARDS.map(aw => `
    <div class="award-card blue" style="padding:1.15rem;">
      <div style="font-size:1.8rem; margin-bottom:.4rem">${aw.icon}</div>
      <div style="font-family:var(--font-head); font-size:1.1rem; color:var(--gold-lt); text-transform:uppercase; margin-bottom:.2rem;">
        ${aw.title}
      </div>
      <div style="font-size:.9rem; font-weight:700; color:#fff; margin-bottom:.15rem;">
        ${aw.winner}
      </div>
      <div style="font-size:.75rem; color:var(--blue); font-weight:700; text-transform:uppercase; margin-bottom:.5rem;">
        Mánager: ${aw.managers}
      </div>
      <p style="font-size:.82rem; color:var(--c-muted); line-height:1.45; margin:0;">
        ${aw.desc}
      </p>
    </div>
  `).join('');

  return `
  <!-- Header del Draft Recap -->
  <div class="card mb-1" style="background: linear-gradient(135deg, rgba(245,158,11,.12) 0%, rgba(56,189,248,.08) 100%); border: 1px solid var(--c-border-gold); padding: 1.5rem;">
    <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem; flex-wrap:wrap;">
      <div>
        <div style="font-size:.72rem; font-weight:700; text-transform:uppercase; letter-spacing:.06em; color:var(--gold-lt); margin-bottom:.25rem;">
          🏈 Draft Oficial Concluido • 180 Picks Registrados
        </div>
        <h2 style="font-family:var(--font-head); font-size:1.6rem; color:#fff; text-transform:uppercase; letter-spacing:.02em; line-height:1.15;">
          Report Card &amp; Análisis Post-Draft 2026
        </h2>
        <p style="font-size:.86rem; color:var(--c-muted); margin-top:.35rem; max-width:640px; line-height:1.5;">
          Evaluación completa de los 12 equipos con calificaciones de la <strong>A+ a la D</strong>, récord proyectado para las 14 semanas de temporada regular y probabilidad de clasificar a playoffs.
        </p>
      </div>
      <div style="display:flex; gap:.6rem; align-items:center;">
        <span style="background:rgba(245,158,11,.15); border:1px solid var(--c-border-gold); color:var(--gold-lt); font-family:var(--font-head); font-size:1.1rem; padding:.5rem 1rem; border-radius:var(--r-sm); font-weight:700;">
          12 Equipos Analizados
        </span>
      </div>
    </div>
  </div>

  <!-- Premios y Menciones Especiales del Draft -->
  <div class="card mb-1">
    <div class="section-head">
      <div>
        <div class="section-title">🌟 Premios &amp; Menciones del Draft</div>
        <p style="color:var(--c-muted); font-size:.82rem; margin-top:.2rem;">
          Los robos, sorpresas y jugadas maestras que marcaron las 15 rondas de selección.
        </p>
      </div>
      <span class="section-badge">Draft Insights</span>
    </div>
    <div class="awards-row" style="margin-bottom:0;">
      ${awardsCardsHtml}
    </div>
  </div>

  <!-- Report Cards Grid -->
  <div class="draft-cards-container">
    <div class="section-head mb-1">
      <div>
        <div class="section-title">📋 Calificaciones Oficiales por Equipo</div>
        <p style="color:var(--c-muted); font-size:.82rem; margin-top:.2rem;">
          Ordenados por ranking de fuerza proyectada para la Temporada 2026.
        </p>
      </div>
      <span class="section-badge">Power Rankings</span>
    </div>
    <div class="report-cards-grid">
      ${reportCardsHtml}
    </div>
  </div>
  `;
}
