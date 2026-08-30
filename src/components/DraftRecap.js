/**
 * Draft Recap & Report Card Component
 * Combina las calificaciones estadísticas exactas de FantasyPros Consensus (Draft Wizard)
 * con la narrativa divertida, análisis de valor y premios por equipo estilo The Gains League.
 */

export const DRAFT_ANALYSIS_DATA = {
  1: {
    rosterId: 1,
    grade: "A+",
    score: 1028,
    gradeClass: "grade-aplus",
    projRecord: "12-2",
    projRank: 1,
    startersRank: 1,
    benchRank: 6,
    playoffOdds: "97%",
    projPtsPerWeek: 128.4,
    headline: "👑 El Tridente Imparable & Dominio Total",
    summary: "Clase maestra de draft. Según las métricas de FantasyPros, armó los **#1 mejores Starters (957 pts)** de la liga con el **#1 cuerpo de WRs** (Ja'Marr Chase, Chris Olave, Rashee Rice) y ventaja posicional absoluta en TE con Brock Bowers (#1 TE). Con Jayden Daniels y Bo Nix en los controles, tiene piso y techo astronómicos.",
    bestPick: "Brock Bowers (Ronda 2, Pick 22)",
    stealPick: "Bo Nix (Ronda 11, Pick 123)",
    riskPick: "J.K. Dobbins (Ronda 8, Pick 94 - Historial físico)",
    pros: [
      "🥇 #1 Cuadro Titular de la liga (957 puntos proyectados).",
      "🥇 #1 Cuerpo de Receptores y #1 en casillas FLEX.",
      "Ventaja posicional masiva con Brock Bowers en TE."
    ],
    cons: [
      "Corredores (Swift, Javonte, Lloyd) en nivel medio que requerirán rotación."
    ],
    verdict: "Candidato #1 al trofeo de Campeón y a llevarse varios premios de $300 semanales."
  },
  9: {
    rosterId: 9,
    grade: "A",
    score: 1004,
    gradeClass: "grade-a",
    projRecord: "11-3",
    projRank: 2,
    startersRank: 2,
    benchRank: 1,
    playoffOdds: "92%",
    projPtsPerWeek: 124.8,
    headline: "🏰 La Muralla de Profundidad & Bijan Show",
    summary: "Una de las plantillas más temibles y completas: **#1 mejor Banca de toda la liga (129 pts)** y **#2 en Titulares**. Aseguró a Bijan Robinson con el pick #2, Trey McBride en TE y construyó un ejército de receptores (Tee Higgins, Tetairoa McMillan, Terry McLaurin, Rome Odunze, Courtland Sutton) listos para cualquier descanso o lesión.",
    bestPick: "Bijan Robinson (Ronda 1, Pick 2)",
    stealPick: "Rome Odunze (Ronda 8, Pick 95)",
    riskPick: "Kenneth Walker (Ronda 2, Pick 23)",
    pros: [
      "🥇 #1 Mejor banca de suplentes de las 12 escuadras (129 pts).",
      "Bijan Robinson candidato #1 a Jugador Ofensivo del Año.",
      "Trey McBride es el receptor principal en Arizona."
    ],
    cons: [
      "Herbert y Purdy son mariscales seguros pero con menor producción por tierra."
    ],
    verdict: "Equipo completísimo; candidato natural a bye en la primera ronda de playoffs."
  },
  5: {
    rosterId: 5,
    grade: "A-",
    score: 949,
    gradeClass: "grade-a",
    projRecord: "10-4",
    projRank: 3,
    startersRank: 4,
    benchRank: 2,
    playoffOdds: "86%",
    projPtsPerWeek: 120.5,
    headline: "🏎️ Dinamita Terrestre & Gran Ojo en el Draft",
    summary: "Gran balance táctico: **#4 en titulares** y **#2 en banca (110 pts)**. Jonathan Taylor en su prime y el novato sensación Ashton Jeanty forman un backfield súper explosivo. Además, rodeó a Dak Prescott conDrake London, Ladd McConkey, Garrett Wilson y Brian Thomas Jr.",
    bestPick: "Jonathan Taylor (Ronda 1, Pick 6)",
    stealPick: "Brian Thomas Jr. (Ronda 9, Pick 102)",
    riskPick: "Harold Fannin (Ronda 7, Pick 78)",
    pros: [
      "Jonathan Taylor como caballo de batalla de 20+ toques por juego.",
      "Gran profundidad en receptores (London, McConkey, Wilson, Thomas, Evans).",
      "Ashton Jeanty candidato a Novato Ofensivo del Año."
    ],
    cons: [
      "Harold Fannin en TE es una apuesta en una posición exigente."
    ],
    verdict: "Plantel moderno y profundo que llegará embalado al cierre de año."
  },
  12: {
    rosterId: 12,
    grade: "A-",
    score: 937,
    gradeClass: "grade-a",
    projRecord: "9-5",
    projRank: 4,
    startersRank: 3,
    benchRank: 5,
    playoffOdds: "83%",
    projPtsPerWeek: 119.2,
    headline: "⚡ Máxima Velocidad: El Show de Lamar & Gibbs",
    summary: "Inició el draft con el Pick #1 (Jahmyr Gibbs) y castigó en la vuelta con Lamar Jackson. Cuenta con los **#3 mejores Titulares (865 pts)** de la liga y el mayor techo de puntos terrestres de toda la temporada. DeVonta Smith y George Pickens aportan electricidad pura por aire.",
    bestPick: "Jahmyr Gibbs (Ronda 1, Pick 1)",
    stealPick: "Rashid Shaheed (Ronda 15, Pick 169)",
    riskPick: "George Pickens (Ronda 3, Pick 25)",
    pros: [
      "🥉 #3 Mejores Titulares de la liga (865 pts).",
      "Gibbs + Lamar Jackson generan 45+ puntos terrestres combinados.",
      "DeVonta Smith es un WR2 con calibre de WR1."
    ],
    cons: [
      "Tyler Warren como ala cerrada titular novato."
    ],
    verdict: "Uno de los equipos más difíciles de vencer en semanas de duelos directos."
  },
  3: {
    rosterId: 3,
    grade: "B+",
    score: 887,
    gradeClass: "grade-bplus",
    projRecord: "8-6",
    projRank: 5,
    startersRank: 5,
    benchRank: 3,
    playoffOdds: "74%",
    projPtsPerWeek: 115.6,
    headline: "🔥 Nueva Generación: El Tridente Nacua, Nabers & Egbuka",
    summary: "Doble cañón aéreo joven con Puka Nacua y Malik Nabers. Destaca por tener la **#3 mejor Banca (86 pts)** y un backfield comprobado con David Montgomery y Chase Brown. Si Caleb Williams da el salto en Chicago, este equipo peleará por la cima.",
    bestPick: "Malik Nabers (Ronda 3, Pick 28)",
    stealPick: "Emeka Egbuka (Ronda 5, Pick 52)",
    riskPick: "Chase Brown (Ronda 2, Pick 21)",
    pros: [
      "Puka Nacua y Malik Nabers son imanes de pases en formato PPR.",
      "🥉 #3 Mejor Banca de la liga con gran profundidad de recambio.",
      "David Montgomery garantiza volumen y anotaciones en zona roja."
    ],
    cons: [
      "Caleb Williams en su segundo año como mariscal titular único."
    ],
    verdict: "Muy bien posicionado para clasificar holgadamente a postemporada."
  },
  8: {
    rosterId: 8,
    grade: "B",
    score: 814,
    gradeClass: "grade-b",
    projRecord: "8-6",
    projRank: 6,
    startersRank: 6,
    benchRank: 4,
    playoffOdds: "67%",
    projPtsPerWeek: 113.1,
    headline: "🦍 Fuerza Bruta: Jefferson, Rey Henry & Nico Collins",
    summary: "Poderío físico absoluto desde los turnos 12/13. Juntar a Justin Jefferson con Derrick Henry y Nico Collins es una pesadilla para cualquier rival. Joe Burrow comanda una ofensiva capaz de explotar cualquier domingo con 140+ puntos.",
    bestPick: "Nico Collins (Ronda 3, Pick 36)",
    stealPick: "Tony Pollard (Ronda 9, Pick 108)",
    riskPick: "Joe Burrow (Ronda 4, Pick 37)",
    pros: [
      "Justin Jefferson y Nico Collins garantizan yardas y recepciones masivas.",
      "Derrick Henry en Ravens es una máquina de touchdowns en zona roja.",
      "#4 Mejor banca de suplentes de la liga."
    ],
    cons: [
      "Depende de que Joe Burrow se mantenga al 100% físicamente."
    ],
    verdict: "Contendiente firme en la pelea por los boletos de comodín a playoffs."
  },
  2: {
    rosterId: 2,
    grade: "B",
    score: 790,
    gradeClass: "grade-b",
    projRecord: "7-7",
    projRank: 7,
    startersRank: 7,
    benchRank: 7,
    playoffOdds: "58%",
    projPtsPerWeek: 111.4,
    headline: "⚙️ Consistencia Pura: Jalen Hurts & The Sun God",
    summary: "Equilibrio probado con dos máquinas de puntos: Amon-Ra St. Brown y Jalen Hurts. De'Von Achane y Josh Jacobs le dan velocidad y potencia terrestre, respaldados por Travis Kelce en TE y Jaylen Waddle en WR.",
    bestPick: "Amon-Ra St. Brown (Ronda 1, Pick 9)",
    stealPick: "Khalil Shakir (Ronda 14, Pick 160)",
    riskPick: "Travis Kelce (Ronda 7, Pick 81)",
    pros: [
      "Jalen Hurts asegura 20+ puntos cada domingo con anotaciones terrestres.",
      "Amon-Ra St. Brown es uno de los jugadores más confiables de la NFL.",
      "Achane tiene potencial de ganar semanas él solo."
    ],
    cons: [
      "Profundidad en banca en nivel medio (#7 Bench de la liga)."
    ],
    verdict: "Estará en la pelea directa por el 6° puesto de playoffs en la Semana 14."
  },
  11: {
    rosterId: 11,
    grade: "B-",
    score: 748,
    gradeClass: "grade-bminus",
    projRecord: "6-8",
    projRank: 8,
    startersRank: 8,
    benchRank: 9,
    playoffOdds: "46%",
    projPtsPerWeek: 108.9,
    headline: "🚀 El Factor Josh Allen & Alas Veloces",
    summary: "Apostó por el mejor QB de fantasy en Josh Allen (Ronda 2) y sumó a Sam LaPorta en TE junto a receptores electrizantes como JSN, Zay Flowers y el gran robo de DK Metcalf en Ronda 8.",
    bestPick: "Josh Allen (Ronda 2, Pick 18)",
    stealPick: "DK Metcalf (Ronda 8, Pick 90)",
    riskPick: "Cam Skattebo (Ronda 4, Pick 42)",
    pros: [
      "Josh Allen es garantía de 22+ puntos semanales.",
      "Sam LaPorta es ala cerrada top 3 de la NFL.",
      "Gran robo de DK Metcalf en Ronda 8."
    ],
    cons: [
      "Backfield con dudas en volumen titular (Skattebo, Warren, Tuten).",
      "Muchos puestos de banca ocupados por WRs novatos."
    ],
    verdict: "Necesitará que Josh Allen tenga actuaciones de MVP para meterse a la postemporada."
  },
  10: {
    rosterId: 10,
    grade: "C+",
    score: 728,
    gradeClass: "grade-c",
    projRecord: "6-8",
    projRank: 9,
    startersRank: 9,
    benchRank: 8,
    playoffOdds: "40%",
    projPtsPerWeek: 106.8,
    headline: "🎩 El Golpe Maestro de Mahomes & CeeDee Lamb",
    summary: "CeeDee Lamb y Bucky Irving son estrellas consagradas. Logró uno de los robos más increíbles del draft con Patrick Mahomes en Ronda 12 (Pick 137), pero gastar selecciones en K y DEF en rondas medias mermó su rotación titular.",
    bestPick: "CeeDee Lamb (Ronda 1, Pick 8)",
    stealPick: "Patrick Mahomes (Ronda 12, Pick 137 - Robo legendario)",
    riskPick: "Brandon Aubrey (Ronda 6, Pick 65 - Demasiado temprano para K)",
    pros: [
      "CeeDee Lamb candidato a líder de recepciones de la NFL.",
      "Patrick Mahomes de mariscal suplente es un lujo tremendo.",
      "Colston Loveland en TE tiene gran proyección."
    ],
    cons: [
      "Doble pateador en el roster (Aubrey + McPherson) desperdicia una casilla de banca.",
      "FLEX titular debilitado por picks de K/DEF en rondas medias."
    ],
    verdict: "Titulares competitivos; si utiliza sus $100 FAAB para reforzar la banca dará batalla."
  },
  6: {
    rosterId: 6,
    grade: "C",
    score: 692,
    gradeClass: "grade-c",
    projRecord: "5-9",
    projRank: 10,
    startersRank: 10,
    benchRank: 10,
    playoffOdds: "31%",
    projPtsPerWeek: 103.5,
    headline: "👑 Estrellas en la Cima: CMC & A.J. Brown",
    summary: "Christian McCaffrey y A.J. Brown son dos de las máximas figuras de la NFL. Sin embargo, seleccionar a Stafford en Ronda 3 y acumular 2 pateadores y 2 defensas restó profundidad a sus posiciones de recambio.",
    bestPick: "Christian McCaffrey (Ronda 1, Pick 5)",
    stealPick: "Michael Wilson (Ronda 9, Pick 101)",
    riskPick: "Matthew Stafford (Ronda 3, Pick 29)",
    pros: [
      "CMC sano es el jugador #1 de todo el Fantasy Football.",
      "A.J. Brown y Davante Adams forman una pareja temible de WRs.",
      "Kyle Pitts en Atlanta con buen volumen de pases."
    ],
    cons: [
      "4 casillas de roster ocupadas en K y DEF (Myers, Reichard, Broncos, Bills).",
      "Stafford seleccionado antes de mariscales más productivos."
    ],
    verdict: "Requiere liberar espacios en banca y fichar suplentes ofensivos vía Waivers."
  },
  7: {
    rosterId: 7,
    grade: "C-",
    score: 546,
    gradeClass: "grade-c",
    projRecord: "4-10",
    projRank: 11,
    startersRank: 11,
    benchRank: 11,
    playoffOdds: "22%",
    projPtsPerWeek: 98.7,
    headline: "🦏 El Muro Terrestre: Cook, Kyren & Breece Hall",
    summary: "Estrategia 'All-In RB': juntó a James Cook, Kyren Williams y Breece Hall. En una liga con 2 FLEX, jugar con 3 corredores estelares es letal. Sin embargo, los modelos de FantasyPros castigan severamente el cuerpo de WRs tras gastar las 3 primeras rondas en RBs.",
    bestPick: "Breece Hall (Ronda 3, Pick 34)",
    stealPick: "Kyler Murray (Ronda 15, Pick 178 - La ganga del año)",
    riskPick: "Xavier Worthy (Ronda 4, Pick 39)",
    pros: [
      "El trío de RBs más demoledor de la liga (Cook, Kyren, Breece).",
      "Kyler Murray en Ronda 15 tiene valor estratosférico.",
      "George Kittle en TE da solidez garantizada."
    ],
    cons: [
      "Cuerpo de WRs calificado en los puestos bajos por FantasyPros.",
      "Poco balance entre juego aéreo y terrestre."
    ],
    verdict: "Si sus 3 corredores dominan la NFL puede dar un golpe en la mesa y desafiar los pronósticos."
  },
  4: {
    rosterId: 4,
    grade: "D+",
    score: 517,
    gradeClass: "grade-d",
    projRecord: "3-11",
    projRank: 12,
    startersRank: 12,
    benchRank: 12,
    playoffOdds: "14%",
    projPtsPerWeek: 94.2,
    headline: "🎲 Apuesta Audaz & El Gigante Saquon",
    summary: "Estrategia salvaje que rompió los esquemas tradicionales: tomó a Drake Maye en Ronda 1 (#11), a la DEF de Kansas City en Ronda 3 y a un pateador novato en Ronda 4. Saquon Barkley cargará con el peso del equipo como su ancla ofensiva.",
    bestPick: "Saquon Barkley (Ronda 2, Pick 14 - Gran valor)",
    stealPick: "Jayden Reed (Ronda 9, Pick 107)",
    riskPick: "Andy Borregales (Ronda 4, Pick 38 - Kicker en Ronda 4)",
    pros: [
      "Saquon Barkley es un caballo de batalla élite en Philadelphia.",
      "Dalton Kincaid y Mark Andrews le dan seguridad en TE.",
      "Jayden Reed y Chris Godwin son buenos complementos en WR."
    ],
    cons: [
      "#12 en Starters (493 pts) y #12 en Banca (23 pts).",
      "Picks tempranos en K/DEF mermaron la rotación titular."
    ],
    verdict: "Tendrá que utilizar agresivamente los $100 FAAB desde la Semana 1 para construir profundidad."
  }
};

export const DRAFT_AWARDS = [
  {
    icon: "💎",
    title: "El Robo del Draft (Best Steals)",
    winner: "Patrick Mahomes (Pick 137, R12) & Kyler Murray (Pick 178, R15)",
    managers: "Cee Dee’z Nuts & Danbengoa",
    desc: "Llevarse a dos mariscales titulares élite de la NFL en rondas 12 y 15 es una auténtica cátedra de valor de selección."
  },
  {
    icon: "🚀",
    title: "El Tridente Aéreo Más Letal (#1 WR)",
    winner: "Ja'Marr Chase + Chris Olave + Rashee Rice",
    managers: "brianallenrm (Rank #1 Overall)",
    desc: "Calificado como el #1 mejor cuerpo de receptores de toda la liga por FantasyPros, con piso de 25+ recepciones semanales."
  },
  {
    icon: "🦏",
    title: "El Muro de Corredores (Ground & Pound)",
    winner: "James Cook + Kyren Williams + Breece Hall",
    managers: "Danbengoa",
    desc: "Acaparó el backfield con 3 corredores estelares capaces de superar las 1,200 yardas totales cada uno en la temporada."
  },
  {
    icon: "🛡️",
    title: "La Muralla de Profundidad (#1 Bench)",
    winner: "SanzFC (129 pts de banca)",
    managers: "SanzFC (Rank #2 Overall)",
    desc: "Armó la mejor banca de la liga con Odunze, Sutton, Gainwell, Herbert y Purdy listos para cubrir cualquier descanso o lesión."
  }
];

export function renderDraftRecapTab(teams = []) {
  const teamMap = Object.fromEntries(teams.map(t => [t.rosterId, t]));

  // Ordenar por ranking oficial de FantasyPros
  const sortedAnalyses = Object.values(DRAFT_ANALYSIS_DATA).sort((a, b) => a.projRank - b.projRank);

  const reportCardsHtml = sortedAnalyses.map(item => {
    const team = teamMap[item.rosterId] || { teamName: `Equipo ${item.rosterId}`, displayName: 'Mánager', avatar: '/logo.jpg' };
    
    return `
    <div class="draft-report-card">
      <div class="report-card-header">
        <div class="report-team-info">
          <img class="report-avatar" src="${team.avatar || '/logo.jpg'}" alt="" onerror="this.src='/logo.jpg'">
          <div>
            <div class="report-rank-badge">Power Rank #${item.projRank} • Score: ${item.score} pts</div>
            <h3 class="report-team-name">${team.teamName}</h3>
            <div class="report-mgr-name">Mánager: <strong>${team.displayName}</strong></div>
          </div>
        </div>
        <div class="report-grade-box ${item.gradeClass}">
          <div class="grade-letter">${item.grade}</div>
          <div class="grade-label">Calificación</div>
        </div>
      </div>

      <div class="report-headline-badge">
        ${item.headline}
      </div>

      <div class="report-metrics-bar">
        <div class="report-metric-item">
          <span class="metric-lbl">Récord Proyectado</span>
          <span class="metric-val text-gold">${item.projRecord}</span>
        </div>
        <div class="report-metric-item">
          <span class="metric-lbl">Prob. Playoffs</span>
          <span class="metric-val text-green">${item.playoffOdds}</span>
        </div>
        <div class="report-metric-item">
          <span class="metric-lbl">Ranks (Tit/Bca)</span>
          <span class="metric-val" style="font-size:.82rem">#${item.startersRank} Tit / #${item.benchRank} Bca</span>
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
        ${aw.managers}
      </div>
      <p style="font-size:.82rem; color:var(--c-muted); line-height:1.45; margin:0;">
        ${aw.desc}
      </p>
    </div>
  `).join('');

  return `
  <!-- Header del Draft Recap con enlace a FantasyPros -->
  <div class="card mb-1" style="background: linear-gradient(135deg, rgba(245,158,11,.15) 0%, rgba(56,189,248,.1) 100%); border: 1px solid var(--c-border-gold); padding: 1.5rem;">
    <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem; flex-wrap:wrap;">
      <div>
        <div style="font-size:.72rem; font-weight:700; text-transform:uppercase; letter-spacing:.06em; color:var(--gold-lt); margin-bottom:.25rem;">
          🏈 Report Card Oficial • Powered by FantasyPros Draft Wizard
        </div>
        <h2 style="font-family:var(--font-head); font-size:1.6rem; color:#fff; text-transform:uppercase; letter-spacing:.02em; line-height:1.15;">
          Report Card &amp; Power Rankings del Draft 2026
        </h2>
        <p style="font-size:.86rem; color:var(--c-muted); margin-top:.35rem; max-width:640px; line-height:1.5;">
          Análisis cuantitativo de los 180 picks de <strong>The Gains League</strong> calibrado con las proyecciones y algoritmos de consenso de <strong>FantasyPros</strong>.
        </p>
      </div>
      <div style="display:flex; flex-direction:column; gap:.5rem; align-items:flex-end;">
        <span style="background:rgba(16,185,129,.15); border:1px solid #10b981; color:#34d399; font-family:var(--font-head); font-size:1.1rem; padding:.5rem 1rem; border-radius:var(--r-sm); font-weight:700;">
          🏆 #1 Overall: brianallenrm (A+)
        </span>
        <a href="https://fntsy.pro/MB4WH4kb" target="_blank" rel="noopener" style="font-size:.75rem; color:var(--blue); text-decoration:underline; font-weight:600;">
          Ver reporte original en FantasyPros ↗
        </a>
      </div>
    </div>
  </div>

  <!-- Premios y Menciones Especiales del Draft -->
  <div class="card mb-1">
    <div class="section-head">
      <div>
        <div class="section-title">🌟 Premios &amp; Menciones del Draft</div>
        <p style="color:var(--c-muted); font-size:.82rem; margin-top:.2rem;">
          Los robos, tridentes estelares y jugadas maestras que marcaron las 15 rondas.
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
          Ordenados por puntuación total de fuerza proyectada de FantasyPros (Score Starters + Bench).
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
