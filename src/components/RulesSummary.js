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
        <p><strong>¿Qué es Fantasy Football?</strong> Es un juego donde tú eres el Dueño y Entrenador General de tu propio equipo. Seleccionas jugadores reales de la NFL y cada semana sus jugadas en los partidos de la vida real (yardas, pases, touchdowns) se convierten en puntos para tu equipo en la app de Sleeper.</p>
      </div>

      <div class="modal-steps-list">
        <div class="modal-step-item">
          <div class="step-badge">Paso 1</div>
          <div class="step-content">
            <h4>🏈 El Draft (Día de Selección)</h4>
            <p>Todos los miembros de la liga nos conectamos el día fijado (desde la app de Sleeper o la web). Por turnos, cada quien elige a sus jugadores favoritos de la NFL hasta completar su plantilla de 15 jugadores.</p>
          </div>
        </div>

        <div class="modal-step-item">
          <div class="step-badge">Paso 2</div>
          <div class="step-content">
            <h4>📋 Arma tu Alineación cada Semana</h4>
            <p>Antes de que empiecen los partidos del jueves y domingo, decides a qué jugadores pones como <strong>Titulares</strong> (los que sumarán puntos) y a quiénes dejas en la <strong>Banca</strong> (por si descansan o tienen un partido difícil).</p>
          </div>
        </div>

        <div class="modal-step-item">
          <div class="step-badge">Paso 3</div>
          <div class="step-content">
            <h4>📈 Suma Puntos con la NFL en Vivo</h4>
            <p>Cada domingo sigues los partidos por TV o en la app de Sleeper. Si tu corredor anota un Touchdown o tu receptor atrapa pases largos, tu marcador sube en tiempo real en la pantalla.</p>
          </div>
        </div>

        <div class="modal-step-item">
          <div class="step-badge">Paso 4</div>
          <div class="step-content">
            <h4>⚔️ Gana tu Duelo y Llévate los Premios</h4>
            <p>Cada semana te enfrentas cara a cara contra otro compa del gym. El que haga más puntos gana el partido de la semana. Además, <strong>el que anote más puntos de toda la liga esa jornada se lleva $300 pesos en efectivo</strong>.</p>
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
        <p>Jugamos en formato <strong>PPR (1.0 Point Per Reception)</strong>. Esto significa que cada vez que un jugador atrapa un pase, <strong>suma 1 punto automático</strong>, más las yardas que avance. Esto premia mucho a los receptores activos y corredores versátiles.</p>
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
        <p>Para darle más emoción a las actuaciones monstruo de los domingos:</p>
        <ul class="modal-bullet-list">
          <li><strong>+2.0 pts extra</strong> si tu Corredor (RB) llega a 100 yardas por tierra en el partido.</li>
          <li><strong>+2.0 pts extra</strong> si tu Receptor (WR) o Ala Cerrada (TE) llega a 100 yardas por aire.</li>
          <li><strong>+2.0 pts extra</strong> si tu Mariscal (QB) llega a 300 yardas de pase.</li>
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>👟 4. Pateadores Decimales (Kickers)</h4>
        <p>En lugar de rangos fijos injustos, usamos puntuación decimal exacta:</p>
        <ul class="modal-bullet-list">
          <li>Cualquier gol de campo de <strong>1 a 30 yardas</strong> da <strong>3.0 puntos base</strong>.</li>
          <li>A partir de 30 yardas, <strong>suma 0.1 pt por cada yarda extra</strong> (ej. gol de campo de 46 yds = <strong>4.6 pts</strong>; de 58 yds = <strong>5.8 pts</strong>).</li>
          <li>Punto extra anotado (PAT): <strong>+1.0 pt</strong> | Punto extra fallado: <strong>-1.0 pt</strong>.</li>
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>🛡️ 5. Defensa Dinámica (DEF / Special Teams)</h4>
        <p>Nuestra defensa premia las jugadas grandes de los defensivos:</p>
        <ul class="modal-bullet-list">
          <li><strong>Sacks (Capturas de QB):</strong> +1.0 pt</li>
          <li><strong>Intercepciones y Fumbles recuperados:</strong> +2.0 pts</li>
          <li><strong>Touchdown Defensivo o de Regreso:</strong> +6.0 pts</li>
          <li><strong>Parada en 4to Down (4th Down Stop):</strong> +1.0 pt <em>(¡Premio por detener al rival!)</em></li>
          <li><strong>Forzar 3 y Fuera (3 and Out):</strong> +0.5 pts</li>
          <li><strong>Puntos Permitidos:</strong> Escala que va desde +10 pts (blanqueada de 0 pts) hasta -4 pts si permiten más de 35 puntos.</li>
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
        <p>Solo los jugadores que pongas de titulares cada semana sumarán puntos a tu marcador:</p>
        <ul class="modal-bullet-list">
          <li><strong>1 QB (Quarterback):</strong> El líder de tu ofensiva.</li>
          <li><strong>2 RB (Running Backs):</strong> Tus 2 corredores principales.</li>
          <li><strong>2 WR (Wide Receivers):</strong> Tus 2 receptores abiertos estelares.</li>
          <li><strong>1 TE (Tight End):</strong> Ala cerrada titular.</li>
          <li><strong>2 FLEX (W/R/T):</strong> ¡Espacio comodín! Puedes meter cualquier combinación de <strong>Corredor (RB), Receptor (WR) o Ala Cerrada (TE)</strong>. Al tener 2 FLEX, tienes máxima flexibilidad para jugar con tus mejores hombres.</li>
          <li><strong>1 K (Kicker):</strong> Pateador.</li>
          <li><strong>1 DEF (Defense):</strong> Unidad defensiva completa de un equipo real (ej. 49ers, Ravens, etc.).</li>
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>🪑 2. La Banca (5 Lugares - BN)</h4>
        <p>En tu banca guardas a 5 jugadores de reserva. Los puntos que hagan mientras están en la banca <strong>no cuentan</strong> para el partido de esa semana.</p>
        <p><strong>¿Para qué sirve la banca?</strong></p>
        <ul class="modal-bullet-list">
          <li>Cubrir a tus titulares en sus <em>Bye Weeks</em> (semanas de descanso real de su equipo NFL).</li>
          <li>Guardar prospectos novatos o suplentes que puedan explotar a mitad de temporada.</li>
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>🚑 3. Puestos de Reserva por Lesión (3 IR)</h4>
        <p>Si un jugador de tu equipo sufre una lesión y la NFL lo declara oficialmente como <strong>Out (Fuera)</strong> o <strong>IR (Injured Reserve)</strong>, puedes moverlo a una casilla de IR.</p>
        <p><strong>Beneficio:</strong> El jugador lesionado <strong>no te ocupa espacio en la banca</strong>, permitiéndote fichar a un reemplazo libre sin tener que cortar a tu estrella.</p>
      </div>
    `
  },

  waivers: {
    title: "💵 Waivers FAAB & Economía al 100%",
    subtitle: "El sistema de subasta secreta para fichar jugadores libres",
    badge: "Presupuesto $100",
    content: `
      <div class="modal-intro-box">
        <p><strong>¿Qué es FAAB?</strong> Significa <em>Free Agent Acquisition Budget</em>. En lugar del sistema viejo y aburrido donde el que va en último lugar siempre se queda con los mejores jugadores, en Sleeper todos tienen un presupuesto virtual de <strong>$100 dólares</strong> para subastar a ciegas por jugadores libres.</p>
      </div>

      <div class="modal-section-block">
        <h4>⏱️ 1. ¿Cómo funciona el ciclo semanal?</h4>
        <ul class="modal-bullet-list">
          <li><strong>Domingo y Lunes:</strong> Se juegan los partidos. Los jugadores libres quedan bloqueados en <em>Waivers</em>.</li>
          <li><strong>Martes todo el día:</strong> Analizas qué jugadores destacaron o quién se lesionó. Si quieres fichar a alguien, pones una <strong>oferta secreta</strong> (ej. <em>"Ofrezco $12 por el corredor suplente"</em>). Nadie puede ver cuánto dinero ofreciste tú ni tú puedes ver lo que ofrecieron los demás.</li>
          <li><strong>Miércoles en la madrugada (12:00 AM):</strong> El sistema procesa todas las subastas automáticamente. Quien ofreció más dinero se queda con el jugador y se le descuenta de sus $100.</li>
          <li><strong>Miércoles a Domingo:</strong> Los jugadores que nadie reclamó en la subasta quedan como <strong>Agentes Libres (FA)</strong> y cualquiera los puede agarrar al instante y gratis ($0).</li>
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>🤝 2. Reglas Clave de FAAB</h4>
        <ul class="modal-bullet-list">
          <li><strong>Ofertas de $0 permitidas:</strong> Si no quieres gastar presupuesto o te quedas sin dinero a mitad de año, puedes meter ofertas de <strong>$0 dólares</strong> y aun así llevarte al jugador si nadie ofreció dinero real.</li>
          <li><strong>Desempate:</strong> Si dos personas ofrecen exactamente la misma cantidad de dinero (ej. ambos ofrecieron $15), el sistema desempata usando la prioridad de la tabla.</li>
          <li><strong>Presupuesto para todo el año:</strong> Los $100 son para toda la temporada (semana 1 a la 17). <em>¡No se reinician cada semana!</em></li>
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>💡 3. Consejos de Estrategia para Novatos</h4>
        <ul class="modal-bullet-list">
          <li><strong>No te gastes los $100 en la Semana 1:</strong> Es un error clásico emocionarse por un jugador que tuvo 1 buen juego y quedarse sin dinero para el resto del año.</li>
          <li><strong>Usa las ofertas de $0:</strong> Para pateadores, defensas de la semana o parches de emergencia, siempre ofrece $0. Guarda tus dólares fuertes para corredores o receptores que se conviertan en titulares indiscutibles.</li>
        </ul>
      </div>
    `
  },

  playoffs: {
    title: "⚙️ Playoffs & Calendario de Temporada",
    subtitle: "Cómo se juega la fase regular y la pelea por el Campeonato",
    badge: "Semanas 1 a 17",
    content: `
      <div class="modal-section-block">
        <h4>📅 1. Temporada Regular (Semanas 1 a 14)</h4>
        <p>Durante las primeras 14 semanas de la NFL juegas un partido semanal contra cada rival de la liga. Cada victoria suma en la tabla general de posiciones.</p>
      </div>

      <div class="modal-section-block">
        <h4>🏆 2. Clasificación a Playoffs (Top 6 Equipos)</h4>
        <p>Al terminar la Semana 14, los <strong>6 mejores equipos de la tabla</strong> clasifican a los Playoffs por el trofeo y los $2,700 pesos:</p>
        <ul class="modal-bullet-list">
          <li><strong>1° y 2° Lugar General:</strong> Descansan la primera ronda de playoffs (pasan directo a semifinales).</li>
          <li><strong>3° vs 6° y 4° vs 5°:</strong> Juegan la ronda de comodines en Semana 15.</li>
          <li><strong>Semana 16:</strong> Semifinales.</li>
          <li><strong>Semana 17:</strong> ¡La Gran Final de The Gains League!</li>
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>⚠️ 3. Regla de Oro: La Final es en Semana 17</h4>
        <p>Nunca jugamos en la Semana 18 de la NFL porque en la última semana real los equipos profesionales descansan a sus jugadores estrella antes de los playoffs reales. Terminar en Semana 17 garantiza que todas tus estrellas jueguen la final.</p>
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
        <h4>🏋️‍♂️ 2. Retos y Castigos Gym</h4>
        <ul class="modal-bullet-list">
          <li><strong>El Castigo Semanal:</strong> El equipo con menor puntuación de cada semana debe grabarse haciendo <strong>50 burpees en el gym</strong> y mandar el video al grupo antes del jueves.</li>
          <li><strong>The Sacko:</strong> El último lugar de toda la temporada cumple el castigo de honor acordado por la liga al inicio del año.</li>
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
          <li>Playoffs: Semanas <strong>15, 16 y 17</strong></li>
          <li>Final en Semana 17</li>
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
          <li><strong>Castigo semanal:</strong> 50 burpees</li>
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
        <div>
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
