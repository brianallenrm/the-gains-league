/**
 * Rules and Explanatory Modals Component
 */

export const RULES_DETAILS = {
  payment: {
    title: "💳 Datos de Pago & Depósito ($600 MXN)",
    subtitle: "Información para cubrir tu cuota de inscripción a la liga",
    badge: "Cuota Oficial",
    content: `
      <div class="modal-intro-box">
        <p><strong>Cuota total por persona:</strong> <strong>$600 MXN</strong> (12 participantes = $7,200 MXN en la bolsa). Recuerda que <strong>no tiene que ser en un solo pago de $600</strong>; puedes ir abonando conforme te acomodes para ir cubriendo la cuota antes del Draft.</p>
      </div>

      <div class="modal-section-block">
        <h4>🏦 Cuentas para Transferencia / Depósito</h4>
        
        <div class="payment-card-box">
          <div class="payment-row">
            <div class="payment-info-col">
              <span class="payment-label">CLABE Interbancaria (Cualquier banco)</span>
              <span class="payment-value" id="clabe-val">722969010537245844</span>
            </div>
            <button class="btn-copy-pay" data-copy="722969010537245844" title="Copiar CLABE">
              📋 Copiar
            </button>
          </div>
        </div>

        <div class="payment-card-box">
          <div class="payment-row">
            <div class="payment-info-col">
              <span class="payment-label">Tarjeta Debit Mastercard®</span>
              <span class="payment-value" id="card-val">5428 7801 8665 9777</span>
            </div>
            <button class="btn-copy-pay" data-copy="5428780186659777" title="Copiar Tarjeta">
              📋 Copiar
            </button>
          </div>
        </div>
      </div>

      <div class="modal-section-block">
        <h4>📲 Envío de Comprobante</h4>
        <ul class="modal-bullet-list">
          <li>Cada que hagas un depósito o transferencia (completo o abono), <strong>envía tu comprobante de pago por WhatsApp a Brian</strong> para registrarlo en la lista de la liga.</li>
          <li>En el concepto de tu transferencia puedes poner tu <strong>Nombre</strong> o <strong>Nombre de tu Equipo</strong>.</li>
        </ul>
      </div>
    `
  },

  beginner: {
    title: "🚀 Guía Rápida para Principiantes",
    subtitle: "Aprende cómo jugar Fantasy Football en 4 sencillos pasos",
    badge: "Básicos del Juego",
    content: `
      <div class="modal-intro-box">
        <p><strong>¿Qué es Fantasy Football?</strong> Es un juego donde tú eres el Dueño y Entrenador de tu propio equipo. Eliges jugadores reales de la NFL y cada semana sus jugadas en los partidos reales (yardas, pases, touchdowns) se convierten en puntos para tu equipo en la app de Sleeper.</p>
      </div>

      <div class="modal-steps-list">
        <div class="modal-step-item">
          <div class="step-badge">Paso 1</div>
          <div class="step-content">
            <h4>🏈 El Draft (Día de Selección)</h4>
            <p>Nos conectamos todos en la app de Sleeper el día fijado. Por turnos, cada quien elige a sus jugadores favoritos de la NFL hasta completar su plantilla de 15 jugadores.</p>
          </div>
        </div>

        <div class="modal-step-item">
          <div class="step-badge">Paso 2</div>
          <div class="step-content">
            <h4>📋 Arma tu Alineación cada Semana</h4>
            <p>Antes de que arranquen los partidos del jueves y domingo, decides quiénes son tus <strong>10 Titulares</strong> (los que suman puntos) y quiénes van a la <strong>Banca</strong>.</p>
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
            <p>Cada semana enfrentas cara a cara a otro compa del gym. El que haga más puntos gana el partido. Además, <strong>el que anote más puntos de toda la liga esa jornada se lleva $300 pesos en efectivo</strong>.</p>
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
        <p>Jugamos en formato <strong>PPR (1.0 Point Per Reception)</strong>. Cada pase que atrapa un jugador suma <strong>+1.0 punto automático</strong>, más las yardas que avance.</p>
      </div>

      <div class="modal-section-block">
        <h4>🏃 2. Tabla de Puntos Ofensivos</h4>
        <div class="modal-stat-list">
          <div class="modal-stat-row">
            <span class="modal-stat-label">Touchdown terrestre o por recepción</span>
            <span class="modal-stat-val text-green">+6.0 pts</span>
          </div>
          <div class="modal-stat-row">
            <span class="modal-stat-label">Touchdown de pase (Mariscal de campo / QB)</span>
            <span class="modal-stat-val text-green">+4.0 pts</span>
          </div>
          <div class="modal-stat-row">
            <span class="modal-stat-label">Cada 10 yardas por carrera o recepción</span>
            <span class="modal-stat-val">+1.0 pt</span>
          </div>
          <div class="modal-stat-row">
            <span class="modal-stat-label">Cada 25 yardas de pase (QB)</span>
            <span class="modal-stat-val">+1.0 pt</span>
          </div>
          <div class="modal-stat-row">
            <span class="modal-stat-label">Conversión de 2 puntos anotada</span>
            <span class="modal-stat-val">+2.0 pts</span>
          </div>
          <div class="modal-stat-row">
            <span class="modal-stat-label">Intercepción lanzada (QB)</span>
            <span class="modal-stat-val text-red">-1.0 pt</span>
          </div>
          <div class="modal-stat-row">
            <span class="modal-stat-label">Balón suelto perdido (Fumble Lost)</span>
            <span class="modal-stat-val text-red">-2.0 pts</span>
          </div>
        </div>
      </div>

      <div class="modal-section-block">
        <h4>⭐ 3. Bonos por Partidazo (Milestones)</h4>
        <ul class="modal-bullet-list">
          <li><strong>+2.0 pts extra:</strong> Si tu Corredor (RB) llega a 100 yardas por tierra en el juego.</li>
          <li><strong>+2.0 pts extra:</strong> Si tu Receptor (WR) o Ala Cerrada (TE) llega a 100 yardas recibidas.</li>
          <li><strong>+2.0 pts extra:</strong> Si tu Mariscal (QB) llega a 300 yardas de pase.</li>
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>👟 4. Pateadores Decimales (Kickers)</h4>
        <ul class="modal-bullet-list">
          <li>Gol de campo de <strong>1 a 30 yardas:</strong> da <strong>3.0 puntos base</strong>.</li>
          <li>A partir de 30 yds: <strong>suma 0.1 pt por cada yarda extra</strong> (ej. gol de 48 yds = <strong>4.8 pts</strong>; de 57 yds = <strong>5.7 pts</strong>).</li>
          <li>Punto extra anotado (PAT): <strong>+1.0 pt</strong> | Fallado: <strong>-1.0 pt</strong>.</li>
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>🛡️ 5. Defensa Activa (DEF)</h4>
        <ul class="modal-bullet-list">
          <li><strong>Sacks (Capturas de QB):</strong> +1.0 pt cada una.</li>
          <li><strong>Intercepciones y Fumbles recuperados:</strong> +2.0 pts.</li>
          <li><strong>Touchdown Defensivo o de Regreso:</strong> +6.0 pts.</li>
          <li><strong>Parada en 4to Down (4th Down Stop):</strong> +1.0 pt.</li>
          <li><strong>Forzar 3 y Fuera (3 and Out):</strong> +0.5 pts.</li>
          <li><strong>Puntos Permitidos:</strong> Desde +10 pts (blanqueada) hasta -4 pts si reciben más de 35 pts.</li>
        </ul>
      </div>
    `
  },

  roster: {
    title: "🏈 Alineación & Plantilla al 100%",
    subtitle: "Cómo armar tu equipo titular, suplentes y casillas de reserva",
    badge: "15 Spots + 3 IR",
    content: `
      <div class="modal-section-block">
        <h4>👑 1. Posiciones Titulares (10 Jugadores)</h4>
        <p>Solo los 10 jugadores titulares sumarán puntos a tu marcador cada semana:</p>
        <ul class="modal-bullet-list">
          <li><strong>1 QB (Quarterback):</strong> Mariscal de campo titular.</li>
          <li><strong>2 RB (Running Backs):</strong> Tus 2 corredores principales.</li>
          <li><strong>2 WR (Wide Receivers):</strong> Tus 2 receptores abiertos estelares.</li>
          <li><strong>1 TE (Tight End):</strong> Ala cerrada titular.</li>
          <li><strong>2 FLEX (W/R/T):</strong> ¡Espacio comodín! Puedes meter cualquier combinación de <strong>Corredor (RB), Receptor (WR) o Ala Cerrada (TE)</strong>. Al tener 2 FLEX, tienes máxima flexibilidad para jugar con tus mejores hombres.</li>
          <li><strong>1 K (Kicker):</strong> Pateador.</li>
          <li><strong>1 DEF (Defense):</strong> Unidad defensiva completa de un equipo real.</li>
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>🪑 2. La Banca (5 Lugares - BN)</h4>
        <p>5 jugadores de reserva. Sus puntos no cuentan mientras estén en la banca. Sirven para cubrir descansos reales de la NFL (Bye Weeks) o guardar suplentes que puedan explotar a mitad de temporada.</p>
      </div>

      <div class="modal-section-block">
        <h4>🚑 3. Casillas de Reserva por Lesión (3 IR)</h4>
        <p>Si un jugador sufre una lesión y la NFL lo marca oficialmente como <strong>Out</strong> o <strong>IR (Injured Reserve)</strong>, puedes moverlo a una casilla de IR.</p>
        <p><strong>Beneficio:</strong> El jugador lesionado <strong>no te ocupa espacio en la banca</strong>, permitiéndote fichar a un reemplazo libre sin tener que cortarlo.</p>
      </div>
    `
  },

  waivers: {
    title: "💵 Waivers FAAB & Economía al 100%",
    subtitle: "El sistema de subasta secreta para fichar jugadores libres",
    badge: "Presupuesto $100",
    content: `
      <div class="modal-intro-box">
        <p><strong>¿Qué es FAAB?</strong> Significa <em>Free Agent Acquisition Budget</em>. Todos inician con un presupuesto virtual de <strong>$100 dólares</strong> para subastar a ciegas por jugadores libres, en lugar de que siempre se los lleve el último lugar.</p>
      </div>

      <div class="modal-section-block">
        <h4>⏱️ 1. ¿Cómo funciona el ciclo semanal?</h4>
        <ul class="modal-bullet-list">
          <li><strong>Domingo y Lunes:</strong> Se juegan los partidos reales. Los jugadores libres quedan congelados en <em>Waivers</em>.</li>
          <li><strong>Martes todo el día:</strong> Analizas quién brilló o quién se lesionó. Pones tu <strong>oferta secreta</strong> en Sleeper (ej. <em>ofrezco $11 por el corredor suplente</em>). Nadie ve cuánto ofreciste tú ni tú ves lo que ofrecieron los demás.</li>
          <li><strong>Miércoles AM (12:00 AM):</strong> Sleeper procesa todas las subastas automáticamente. Quien ofreció más dinero se queda al jugador y se le descuenta de sus $100.</li>
          <li><strong>Miércoles a Domingo:</strong> Los jugadores que nadie reclamó en la subasta quedan como <strong>Agentes Libres (FA)</strong> y cualquiera los puede agarrar al instante y gratis ($0).</li>
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>🤝 2. Reglas Clave</h4>
        <ul class="modal-bullet-list">
          <li><strong>Ofertas de $0 permitidas:</strong> Si no quieres gastar presupuesto o te quedas en ceros, puedes meter ofertas de <strong>$0 dólares</strong> y aun así llevarte al jugador si nadie ofreció dinero real.</li>
          <li><strong>Desempate:</strong> Si dos personas ofrecen la misma cantidad de dinero (ej. ambos ofrecieron $15), desempata la posición de prioridad de la tabla.</li>
          <li><strong>Presupuesto para todo el año:</strong> Los $100 son para toda la temporada (Semanas 1 a la 17). ¡No se reinician cada semana!</li>
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>💡 3. Tips de Estrategia para Novatos</h4>
        <ul class="modal-bullet-list">
          <li><strong>No quemes los $100 en la Semana 1:</strong> Es un error clásico emocionarse por un jugador que tuvo 1 buen juego y quedarse sin dinero para lesiones en noviembre o diciembre.</li>
          <li><strong>Usa las ofertas de $0:</strong> Para pateadores, defensas de la semana o parches de emergencia, siempre ofrece $0. Guarda tus dólares fuertes para corredores o receptores que se adueñen de la titularidad.</li>
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
        <p>Juegas un partido semanal contra tus rivales de la liga. Cada victoria suma en la tabla general de posiciones.</p>
      </div>

      <div class="modal-section-block">
        <h4>🏆 2. Los Playoffs por el Campeonato (Top 6 Equipos)</h4>
        <p>Al terminar la Semana 14, los <strong>6 mejores equipos de la tabla</strong> pelean por el trofeo y los $2,700 pesos:</p>
        <ul class="modal-bullet-list">
          <li><strong>1° y 2° Lugar General:</strong> Descansan la primera semana (pasan directo a semifinales).</li>
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
        <p>Nunca jugamos la Semana 18 de la NFL porque los equipos reales descansan a sus estrellas antes de los playoffs reales. Terminar en Semana 17 garantiza finales con los titulares reales en el campo.</p>
      </div>
    `
  },

  prizes: {
    title: "💰 Bolsa Total & Dinámicas del Gym",
    subtitle: "Distribución de los $7,200 MXN y retos semanales",
    badge: "100% Repartido",
    content: `
      <div class="modal-section-block">
        <h4>💵 1. Desglose de la Bolsa ($7,200 MXN)</h4>
        <div class="modal-stat-list">
          <div class="modal-stat-row">
            <span class="modal-stat-label">Inscripción Total (12 personas × $600)</span>
            <span class="modal-stat-val">$7,200 MXN</span>
          </div>
          <div class="modal-stat-row">
            <span class="modal-stat-label">Premios Semanales (15 sem × $300)</span>
            <span class="modal-stat-val text-green font-bold">$4,500 MXN</span>
          </div>
          <div class="modal-stat-row">
            <span class="modal-stat-label">Gran Campeón de Temporada</span>
            <span class="modal-stat-val text-gold font-bold">$2,700 MXN + Trofeo</span>
          </div>
        </div>
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
  <!-- Banner Destacado 1: Datos para el Depósito de $600 MXN -->
  <div class="payment-banner-card clickable-rule" data-modal="payment">
    <div class="payment-banner-left">
      <div class="payment-tag">💳 Cuota de Inscripción • $600 MXN</div>
      <h3 class="payment-title">Datos para Transferencia / Depósito</h3>
      <p class="payment-desc">CLABE y Tarjeta disponibles. Puedes cubrir tu cuota en abonos conforme te acomodes. ¡Toca aquí para ver los datos y copiar cuentas!</p>
    </div>
    <div class="payment-btn-action">
      <button class="btn-pay-glow">
        Ver Cuentas 📋
      </button>
    </div>
  </div>

  <!-- Botón Destacado 2: Guía Rápida para Principiantes -->
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

      <!-- Pagos y Depósitos -->
      <div class="rule-box clickable-rule" data-modal="payment" style="border-color: rgba(56,189,248,.35);">
        <div class="rule-box-header-row">
          <div class="rule-box-title" style="color:var(--blue);">💳 Depósitos &amp; Cuenta</div>
          <span class="rule-hint-badge" style="color:var(--blue); background:rgba(56,189,248,.12);">Ver CLABE ↗</span>
        </div>
        <ul class="rule-list">
          <li><strong>$600 MXN</strong> por persona</li>
          <li>Se puede pagar en <strong>abonos</strong></li>
          <li>CLABE &amp; Tarjeta disponibles</li>
          <li>Mandar comprobante a <strong>Brian</strong></li>
        </ul>
      </div>

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

    // Attach copy button listeners inside modal
    modalBody.querySelectorAll('.btn-copy-pay').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const textToCopy = btn.getAttribute('data-copy');
        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = btn.textContent;
            btn.textContent = '✅ Copiado';
            btn.style.background = '#10b981';
            btn.style.color = '#fff';
            setTimeout(() => {
              btn.textContent = originalText;
              btn.style.background = '';
              btn.style.color = '';
            }, 2000);
          });
        }
      });
    });

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
