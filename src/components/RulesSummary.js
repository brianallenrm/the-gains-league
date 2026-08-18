/**
 * Rules and Explanatory Modals Component
 */

export const RULES_DETAILS = {
  beginner: {
    title: "🚀 Guía Rápida para Principiantes",
    subtitle: "Aprende cómo jugar Fantasy Football en 4 sencillos pasos",
    badge: "Básicos del Juego",
    content: `
      <div class="modal-intro-box">
        <p><strong>¿Qué es Fantasy Football?</strong> Es un juego donde tú eres el Dueño y Entrenador de tu propio equipo. Seleccionas jugadores reales de la NFL y cada semana sus jugadas en los partidos reales (yardas, pases, touchdowns) se convierten en puntos en la app de Sleeper.</p>
      </div>

      <div class="modal-steps-list">
        <div class="modal-step-item">
          <div class="step-badge">Paso 1</div>
          <div class="step-content">
            <h4>🏈 El Draft (Día de Selección)</h4>
            <p>Nos conectamos todos en Sleeper. Por turnos, cada quien elige a sus jugadores favoritos de la NFL hasta completar su plantilla de 15 jugadores.</p>
          </div>
        </div>

        <div class="modal-step-item">
          <div class="step-badge">Paso 2</div>
          <div class="step-content">
            <h4>📋 Arma tu Alineación cada Semana</h4>
            <p>Antes de que empiecen los partidos del jueves y domingo, decides quiénes son tus <strong>10 Titulares</strong> (los que suman puntos) y quiénes van a la <strong>Banca</strong>.</p>
          </div>
        </div>

        <div class="modal-step-item">
          <div class="step-badge">Paso 3</div>
          <div class="step-content">
            <h4>📈 Suma Puntos con la NFL en Vivo</h4>
            <p>Sigues los partidos por TV o en Sleeper. Si tu corredor anota Touchdown o tu receptor atrapa pases, tu marcador sube en tiempo real en la pantalla.</p>
          </div>
        </div>

        <div class="modal-step-item">
          <div class="step-badge">Paso 4</div>
          <div class="step-content">
            <h4>⚔️ Gana tu Duelo y Llévate los Premios</h4>
            <p>Cada semana enfrentas cara a cara a otro compa del gym. El que haga más puntos gana. Además, <strong>el mayor anotador de la semana se lleva $300 pesos en efectivo</strong>.</p>
          </div>
        </div>
      </div>
    `
  },

  scoring: {
    title: "🎯 Sistema de Puntuación al 100%",
    subtitle: "Cómo suman y restan puntos tus jugadores en cada jugada",
    badge: "PPR + Bonos",
    content: `
      <div class="modal-section-block">
        <h4>📡 1. Puntos por Recepción (Formato PPR)</h4>
        <p>Jugamos en formato <strong>PPR (1.0 Point Per Reception)</strong>. Cada pase atrapado por un jugador suma <strong>+1.0 punto automático</strong>, más las yardas que avance.</p>
      </div>

      <div class="modal-section-block">
        <h4>🏃 2. Yardas y Anotaciones (Ofensiva)</h4>
        <table class="modal-detail-table">
          <tr><th>Acción Ofensiva</th><th>Puntos</th></tr>
          <tr><td>Touchdown terrestre o por recepción</td><td class="text-green font-bold">+6.0 pts</td></tr>
          <tr><td>Touchdown de pase (Mariscal de campo / QB)</td><td class="text-green font-bold">+4.0 pts</td></tr>
          <tr><td>Cada 10 yardas por carrera o recepción</td><td>+1.0 pt (0.1 pt/yd)</td></tr>
          <tr><td>Cada 25 yardas de pase (QB)</td><td>+1.0 pt (0.04 pt/yd)</td></tr>
          <tr><td>Conversión de 2 puntos anotada</td><td>+2.0 pts</td></tr>
          <tr><td>Intercepción lanzada (QB)</td><td class="text-red font-bold">-1.0 pt</td></tr>
          <tr><td>Balón suelto perdido (Fumble Lost)</td><td class="text-red font-bold">-2.0 pts</td></tr>
        </table>
      </div>

      <div class="modal-section-block">
        <h4>⭐ 3. Bonos por Partidazo (Milestone Bonuses)</h4>
        <p>Para darle más emoción a los partidazos del domingo:</p>
        <ul class="modal-bullet-list">
          <li><strong>+2.0 pts extra</strong> si tu Corredor (RB) llega a 100 yardas por tierra.</li>
          <li><strong>+2.0 pts extra</strong> si tu Receptor (WR) o Ala Cerrada (TE) llega a 100 yardas por aire.</li>
          <li><strong>+2.0 pts extra</strong> si tu Mariscal (QB) llega a 300 yardas de pase.</li>
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>👟 4. Pateadores Decimales (Kickers)</h4>
        <p>Puntuación decimal justa según la distancia:</p>
        <ul class="modal-bullet-list">
          <li>Gol de campo de <strong>1 a 30 yardas:</strong> <strong>3.0 pts base</strong>.</li>
          <li>A partir de 30 yds: <strong>suma 0.1 pt por cada yarda extra</strong> (ej. 47 yds = <strong>4.7 pts</strong>; 56 yds = <strong>5.6 pts</strong>).</li>
          <li>Punto extra anotado (PAT): <strong>+1.0 pt</strong> | Fallado: <strong>-1.0 pt</strong>.</li>
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>🛡️ 5. Defensa Dinámica (DEF)</h4>
        <ul class="modal-bullet-list">
          <li><strong>Sacks (Capturas de QB):</strong> +1.0 pt</li>
          <li><strong>Intercepciones y Fumbles recuperados:</strong> +2.0 pts</li>
          <li><strong>Touchdown Defensivo / Regreso:</strong> +6.0 pts</li>
          <li><strong>Parada en 4to Down (4th Down Stop):</strong> +1.0 pt</li>
          <li><strong>Forzar 3 y Fuera (3 and Out):</strong> +0.5 pts</li>
          <li><strong>Puntos Permitidos:</strong> De +10 pts (blanqueada de 0) hasta -4 pts si permiten más de 35 pts.</li>
        </ul>
      </div>
    `
  },

  roster: {
    title: "🏈 Alineación & Plantilla al 100%",
    subtitle: "Cómo armar tu equipo titular, suplentes y jugadores de reserva",
    badge: "15 Spots + 3 IR",
    content: `
      <div class="modal-section-block">
        <h4>👑 1. Posiciones Titulares (10 Jugadores)</h4>
        <p>Solo los jugadores titulares sumarán puntos cada semana:</p>
        <ul class="modal-bullet-list">
          <li><strong>1 QB:</strong> Mariscal de campo.</li>
          <li><strong>2 RB:</strong> Corredores titulares.</li>
          <li><strong>2 WR:</strong> Receptores abiertos.</li>
          <li><strong>1 TE:</strong> Ala cerrada titular.</li>
          <li><strong>2 FLEX (W/R/T):</strong> ¡Espacio comodín! Puedes meter cualquier combinación de <strong>Corredor (RB), Receptor (WR) o Ala Cerrada (TE)</strong>. Al tener 2 FLEX, tienes máxima libertad para poner a tus mejores hombres.</li>
          <li><strong>1 K:</strong> Pateador.</li>
          <li><strong>1 DEF:</strong> Unidad defensiva completa de un equipo real.</li>
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>🪑 2. La Banca (5 Lugares - BN)</h4>
        <p>5 jugadores de reserva. Sus puntos no cuentan para el marcador mientras estén en la banca. Sirven para cubrir semanas de descanso (Bye Weeks) o guardar novatos prometedores.</p>
      </div>

      <div class="modal-section-block">
        <h4>🚑 3. Casillas de Reserva por Lesión (3 IR)</h4>
        <p>Si un jugador es marcado oficialmente como <strong>Out</strong> o <strong>IR (Injured Reserve)</strong>, puedes moverlo a una casilla de IR. <strong>No te ocupará espacio en la banca</strong> y podrás fichar a un reemplazo libre sin cortarlo.</p>
      </div>
    `
  },

  waivers: {
    title: "💵 Waivers FAAB & Economía al 100%",
    subtitle: "El sistema de subasta secreta para fichar jugadores libres",
    badge: "Presupuesto $100",
    content: `
      <div class="modal-intro-box">
        <p><strong>¿Qué es FAAB?</strong> Significa <em>Free Agent Acquisition Budget</em>. Todos inician con <strong>$100 dólares virtuales</strong> para subastar en secreto por jugadores libres en lugar de que siempre se los lleve el último lugar.</p>
      </div>

      <div class="modal-section-block">
        <h4>⏱️ 1. ¿Cómo funciona el ciclo semanal?</h4>
        <ul class="modal-bullet-list">
          <li><strong>Domingo y Lunes:</strong> Se juegan los partidos. Los jugadores libres quedan bloqueados.</li>
          <li><strong>Martes:</strong> Revisas quién brilló o quién se lesionó. Pones tu <strong>oferta secreta</strong> en Sleeper (ej. <em>$11 por el corredor suplente</em>). Nadie ve tu oferta ni tú ves la de los demás.</li>
          <li><strong>Miércoles AM (12:00 AM):</strong> Sleeper procesa las subastas. Quien ofreció más dinero se queda al jugador y se le descuenta de sus $100.</li>
          <li><strong>Miércoles a Domingo:</strong> Quien no fue reclamado queda como <strong>Agente Libre (FA)</strong> y cualquiera lo puede agarrar gratis al instante ($0).</li>
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>🤝 2. Reglas Clave</h4>
        <ul class="modal-bullet-list">
          <li><strong>Ofertas de $0 permitidas:</strong> Si no quieres gastar presupuesto o te quedas en ceros, puedes meter ofertas de <strong>$0</strong> y llevarte al jugador si nadie ofreció dinero real.</li>
          <li><strong>Desempate:</strong> Si dos mánagers ofrecen lo mismo (ej. $15), desempata la posición de prioridad.</li>
          <li><strong>Presupuesto anual:</strong> Los $100 son para toda la temporada (Semanas 1 a la 17). ¡No se reinician cada semana!</li>
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>💡 3. Tips de Estrategia</h4>
        <ul class="modal-bullet-list">
          <li><strong>No quemes los $100 en la Semana 1:</strong> Guarda presupuesto para lesiones en noviembre y diciembre.</li>
          <li><strong>Usa ofertas de $0:</strong> Para pateadores y defensas de emergencia, ofrece siempre $0.</li>
        </ul>
      </div>
    `
  },

  playoffs: {
    title: "⚙️ Playoffs & Calendario de Temporada",
    subtitle: "Cómo se juega la fase regular, las llaves y el torneo de consolación",
    badge: "Semanas 1 a 17",
    content: `
      <div class="modal-section-block">
        <h4>📅 1. Temporada Regular (Semanas 1 a 14)</h4>
        <p>Juegas un partido semanal contra tus rivales de liga. Cada victoria suma en la tabla general de posiciones.</p>
      </div>

      <div class="modal-section-block">
        <h4>🏆 2. Los Playoffs por el Campeonato (Top 6 Equipos)</h4>
        <p>Los <strong>6 mejores equipos de la tabla</strong> pelean por el trofeo y los $2,700 pesos:</p>
        <ul class="modal-bullet-list">
          <li><strong>1° y 2° Lugar:</strong> Descansan la primera semana (pasan directo a semifinales).</li>
          <li><strong>Semana 15 (Comodines):</strong> 3° vs 6° y 4° vs 5°.</li>
          <li><strong>Semana 16:</strong> Semifinales.</li>
          <li><strong>Semana 17:</strong> ¡La Gran Final de The Gains League!</li>
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>🗑️ 3. ¿Qué pasa con los Equipos Eliminados? (Torneo de Consolación)</h4>
        <p>Los 6 equipos que no clasifican a playoffs (7° al 12° lugar) <strong>siguen jugando por el honor</strong>:</p>
        <ul class="modal-bullet-list">
          <li>Juegan la <strong>Llave de Consolación (Sacko Bowl)</strong> en las semanas 15, 16 y 17.</li>
          <li>Pelean por el orgullo para <strong>evitar terminar en el último lugar absoluto</strong>.</li>
          <li>En la <strong>Semana 15</strong> (última semana con premio de $300), aún pueden ganar los $300 si hacen el puntaje más alto.</li>
          <li>En las <strong>Semanas 16 y 17</strong> ya no hay premio semanal; toda la bolsa restante se concentra en los <strong>$2,700 MXN del Gran Campeón</strong>.</li>
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>⚠️ 4. Regla de Oro: Final en Semana 17</h4>
        <p>Nunca jugamos la Semana 18 de la NFL porque los equipos reales descansan a sus estrellas. Terminar en Semana 17 garantiza finales con titulares reales en el campo.</p>
      </div>
    `
  },

  prizes: {
    title: "💰 Bolsa Total & Dinámicas del Gym",
    subtitle: "Distribución de los $7,200 MXN y retos semanales",
    badge: "100% Repartido",
    content: `
      <div class="modal-section-block">
        <h4>💵 1. Bolsa de $7,200 MXN</h4>
        <table class="modal-detail-table">
          <tr><th>Concepto</th><th>Monto</th></tr>
          <tr><td>Inscripción (12 personas × $600)</td><td>$7,200 MXN</td></tr>
          <tr><td><strong>Premios Semanales (15 sem × $300)</strong></td><td class="text-green font-bold">$4,500 MXN</td></tr>
          <tr><td><strong>Gran Campeón de Temporada</strong></td><td class="text-gold font-bold">$2,700 MXN + Trofeo</td></tr>
        </table>
      </div>

      <div class="modal-section-block">
        <h4>🏋️‍♂️ 2. Retos &amp; Castigos del Gym</h4>
        <ul class="modal-bullet-list">
          <li><strong>El Castigo Semanal:</strong> El equipo con menor puntuación de la jornada debe <strong>grabarse haciendo 50 burpees en el gym</strong> (antes del jueves) <strong>O invitarle un café / termo / pre-entreno al mánager que hizo más puntos</strong> ☕🏋️‍♂️.</li>
          <li><strong>The Sacko:</strong> El último lugar absoluto de la temporada cumple el castigo de honor acordado por la liga.</li>
        </ul>
      </div>
    `
  }
};

export function renderRules() {
  return `
  <!-- Botón Destacado: Guía Rápida para Principiantes -->
  <div class="beginner-banner-card" id="btn-open-beginner">
    <div class="beginner-banner-left">
      <div class="beginner-tag">🚀 ¿Primera vez jugando Fantasy?</div>
      <h3 class="beginner-title">Guía Rápida para Principiantes</h3>
      <p class="beginner-desc">Aprende cómo funciona el draft, cómo armar tu alineación y cómo ganar tu partido en 4 pasos sencillos.</p>
    </div>
    <div class="beginner-btn-action">
      <button class="btn-primary-glow">
        Ver Guía Rápida 📖
      </button>
    </div>
  </div>

  <div class="card mb-1">
    <div class="section-head">
      <div>
        <div class="section-title">📜 Reglamento Oficial 2026</div>
        <p style="color:var(--c-muted); font-size:.82rem; margin-top:.2rem;">
          Toca cualquier tarjeta para ver la explicación completa y detallada de cada regla.
        </p>
      </div>
      <span class="section-badge">The Gains League</span>
    </div>

    <div class="rules-grid">

      <!-- Alineación -->
      <div class="rule-box clickable-rule" data-modal="roster">
        <div class="rule-box-header-row">
          <div class="rule-box-title">🏈 Alineación Semanal</div>
          <span class="rule-hint-badge">Ver detalle ↗</span>
        </div>
        <ul class="rule-list">
          <li><strong>1 QB, 2 RB, 2 WR, 1 TE</strong></li>
          <li><strong>2 FLEX (W/R/T)</strong> — Comodín libre</li>
          <li><strong>1 K &amp; 1 DEF</strong> Titulares</li>
          <li><strong>5 Bancas</strong> + 3 IR de Reserva</li>
        </ul>
      </div>

      <!-- Puntuación -->
      <div class="rule-box clickable-rule" data-modal="scoring">
        <div class="rule-box-header-row">
          <div class="rule-box-title">🎯 Sistema de Puntuación</div>
          <span class="rule-hint-badge">Ver detalle ↗</span>
        </div>
        <ul class="rule-list">
          <li><strong>PPR 1.0</strong> — 1 pt por recepción</li>
          <li><strong>+2 pts</strong> Bono ≥100 yds (RB/WR)</li>
          <li><strong>+2 pts</strong> Bono ≥300 yds pase (QB)</li>
          <li><strong>Kicker decimal:</strong> 3.0 base + 0.1/yd</li>
          <li><strong>DEF activa:</strong> +1 pt 4to down stop</li>
        </ul>
      </div>

      <!-- Waivers FAAB -->
      <div class="rule-box clickable-rule" data-modal="waivers">
        <div class="rule-box-header-row">
          <div class="rule-box-title">💵 Waivers FAAB</div>
          <span class="rule-hint-badge">Ver detalle ↗</span>
        </div>
        <ul class="rule-list">
          <li><strong>$100 dólares virtuales</strong> por año</li>
          <li>Subasta ciega cada <strong>Miércoles AM</strong></li>
          <li>Oferta mínima: <strong>$0</strong> (fichajes gratis)</li>
          <li>Trades aprobados en 1 día</li>
          <li>Deadline de trades: <strong>Semana 11</strong></li>
        </ul>
      </div>

      <!-- Playoffs -->
      <div class="rule-box clickable-rule" data-modal="playoffs">
        <div class="rule-box-header-row">
          <div class="rule-box-title">⚙️ Playoffs &amp; Temporada</div>
          <span class="rule-hint-badge">Ver detalle ↗</span>
        </div>
        <ul class="rule-list">
          <li><strong>14 semanas</strong> fase regular</li>
          <li><strong>Top 6</strong> clasifican a Playoffs</li>
          <li><strong>Consolación</strong> para 7° al 12° lugar</li>
          <li>Playoffs: Semanas <strong>15, 16 y 17</strong></li>
        </ul>
      </div>

      <!-- Premios & Dinero -->
      <div class="rule-box clickable-rule" data-modal="prizes">
        <div class="rule-box-header-row">
          <div class="rule-box-title" style="color:#34d399;">💰 Bolsa &amp; Dinámicas Gym</div>
          <span class="rule-hint-badge">Ver detalle ↗</span>
        </div>
        <ul class="rule-list">
          <li><strong>$7,200 MXN</strong> Bolsa Total</li>
          <li><strong>$300 MXN</strong> por semana (15 sem)</li>
          <li><strong>$2,700 MXN</strong> al Campeón 🏆</li>
          <li><strong>Castigo:</strong> 50 burpees o invitar café ☕</li>
        </ul>
      </div>

      <!-- Reconocimientos Extra -->
      <div class="rule-box blue">
        <div class="rule-box-title">⭐ Premios de Honor</div>
        <ul class="rule-list">
          <li>🥇 <strong>Campeón:</strong> Trofeo itinerante</li>
          <li>📈 <strong>Mejor Récord</strong> de Temporada</li>
          <li>🔥 <strong>Robo del Draft</strong> del año</li>
          <li>🤝 <strong>Trade del Año</strong></li>
          <li>💸 <strong>Mejor Reclamo de Waiver</strong></li>
        </ul>
      </div>

    </div>
  </div>

  <!-- Contenedor del Modal Genérico -->
  <div id="rule-modal-overlay" class="modal-overlay" style="display:none;">
    <div class="modal-card">
      <div class="modal-header">
        <div class="modal-header-text">
          <span id="modal-badge" class="modal-badge-top"></span>
          <h3 id="modal-title" class="modal-title-text"></h3>
          <div id="modal-subtitle" class="modal-subtitle-text"></div>
        </div>
        <button id="btn-close-modal" class="btn-modal-close" title="Cerrar ventana">✕</button>
      </div>
      <div id="modal-body-content" class="modal-body-scroll"></div>
      <div class="modal-footer">
        <button id="btn-modal-got-it" class="btn-modal-action">¡Entendido! 👍</button>
      </div>
    </div>
  </div>`;
}

export function attachRulesModalEvents(container) {
  const overlay = container.querySelector('#rule-modal-overlay');
  const modalTitle = container.querySelector('#modal-title');
  const modalSubtitle = container.querySelector('#modal-subtitle');
  const modalBadge = container.querySelector('#modal-badge');
  const modalBody = container.querySelector('#modal-body-content');
  const btnClose = container.querySelector('#btn-close-modal');
  const btnGotIt = container.querySelector('#btn-modal-got-it');

  function openModal(key) {
    const data = RULES_DETAILS[key];
    if (!data || !overlay) return;

    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalBadge.textContent = data.badge;
    modalBody.innerHTML = data.content;

    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!overlay) return;
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  // Click en banner de principiantes
  container.querySelector('#btn-open-beginner')?.addEventListener('click', () => {
    openModal('beginner');
  });

  // Click en tarjetas de reglas
  container.querySelectorAll('.clickable-rule').forEach(box => {
    box.addEventListener('click', () => {
      const key = box.getAttribute('data-modal');
      if (key) openModal(key);
    });
  });

  // Botones de cerrar
  btnClose?.addEventListener('click', closeModal);
  btnGotIt?.addEventListener('click', closeModal);

  // Cerrar al hacer click fuera
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay && overlay.style.display === 'flex') {
      closeModal();
    }
  });
}
