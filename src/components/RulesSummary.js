export function renderRules() {
  return `
  <div class="card mb-1">
    <div class="section-head">
      <div class="section-title">📜 Reglamento Oficial 2026</div>
      <span class="section-badge">The Gains League</span>
    </div>
    <div class="rules-grid">

      <div class="rule-box">
        <div class="rule-box-title">🏈 Alineación Semanal</div>
        <ul class="rule-list">
          <li><strong>1 QB</strong> — Mariscal de campo</li>
          <li><strong>2 RB</strong> — Corredores titulares</li>
          <li><strong>2 WR</strong> — Receptores titulares</li>
          <li><strong>1 TE</strong> — Ala cerrada</li>
          <li><strong>2 FLEX (W/R/T)</strong> — RB, WR o TE</li>
          <li><strong>1 K</strong> Pateador &amp; <strong>1 DEF</strong> Defensa</li>
          <li><strong>5 BN</strong> + 3 IR de Reserva</li>
        </ul>
      </div>

      <div class="rule-box">
        <div class="rule-box-title">🎯 Sistema de Puntuación</div>
        <ul class="rule-list">
          <li><strong>PPR 1.0</strong> — 1 pt por recepción</li>
          <li><strong>+2 pts</strong> Bono ≥100 yds corriendo (RB)</li>
          <li><strong>+2 pts</strong> Bono ≥100 yds recibiendo (WR/TE)</li>
          <li><strong>+2 pts</strong> Bono ≥300 yds de pase (QB)</li>
          <li><strong>Kicker decimal:</strong> 3.0 pts base + 0.1/yd (>30 yds)</li>
          <li><strong>DEF activa:</strong> +1 pt parada 4to down, +0.5 pts 3&amp;out</li>
        </ul>
      </div>

      <div class="rule-box">
        <div class="rule-box-title">💵 Waivers FAAB</div>
        <ul class="rule-list">
          <li><strong>$100 MXN virtuales</strong> por temporada</li>
          <li>Ofertas ciegas — procesa cada <strong>Miércoles AM</strong></li>
          <li>Oferta mínima: <strong>$0</strong> (nunca te quedas sin poder fichar)</li>
          <li>2 días en waivers tras soltar un jugador</li>
          <li>Revisión de trades: 1 día / Comisionado aprueba</li>
          <li>Deadline de trades: <strong>Semana 11</strong></li>
        </ul>
      </div>

      <div class="rule-box">
        <div class="rule-box-title">⚙️ Playoffs &amp; Temporada</div>
        <ul class="rule-list">
          <li><strong>15 semanas</strong> de temporada regular</li>
          <li><strong>6 equipos</strong> clasifican a Playoffs</li>
          <li>Playoffs: Semanas <strong>15, 16 y 17</strong></li>
          <li>Final en Sem 17 — nunca Sem 18 (descanso real)</li>
          <li>Desempate en standings: Puntos a Favor</li>
        </ul>
      </div>

      <div class="rule-box danger">
        <div class="rule-box-title">🏋️‍♂️ Retos &amp; Castigos del Gym</div>
        <ul class="rule-list">
          <li><strong>Peor puntaje semanal:</strong> 50 burpees en video para el grupo (antes del jueves)</li>
          <li><strong>Trofeo itinerante:</strong> El campeón lleva la mancuerna dorada todo el año</li>
          <li><strong>The Sacko (último lugar):</strong> Reto físico o social acordado por la liga</li>
          <li>Premio semanal de <strong>$300 MXN</strong> al mayor puntaje</li>
        </ul>
      </div>

      <div class="rule-box blue">
        <div class="rule-box-title">⭐ Reconocimientos de Temporada</div>
        <ul class="rule-list">
          <li>🥇 <strong>Campeón</strong> — $2,700 MXN + Trofeo</li>
          <li>📈 <strong>Mejor Récord</strong> de Temporada Regular</li>
          <li>🔥 <strong>Robo del Draft</strong> — Mayor retorno por selección</li>
          <li>🤝 <strong>Trade del Año</strong> — El intercambio más épico</li>
          <li>💸 <strong>Mejor Waiver</strong> — Mejor uso del presupuesto FAAB</li>
        </ul>
      </div>

    </div>
  </div>`;
}
