export function renderRulesSummary() {
  return `
    <div class="card">
      <div class="section-title">
        <span>📜 Reglamento & Dinámicas de The Gains League</span>
        <span class="badge">Ajustes Oficiales 2026</span>
      </div>

      <div class="rules-grid">
        <!-- Alineación -->
        <div class="rule-box">
          <h4>🏈 Alineación Titular</h4>
          <ul>
            <li><strong>1 QB</strong> (Mariscal de Campo)</li>
            <li><strong>2 RB</strong> (Corredores)</li>
            <li><strong>2 WR</strong> (Receptores)</li>
            <li><strong>1 TE</strong> (Ala Cerrada)</li>
            <li><strong>2 FLEX (W/R/T)</strong> (Receptor, Corredor o Ala Cerrada)</li>
            <li><strong>1 K</strong> (Pateador) & <strong>1 DEF</strong> (Defensa)</li>
            <li><strong>5 Bancas (BN)</strong> + 3 Reservas (IR)</li>
          </ul>
        </div>

        <!-- Puntuación & Bonos -->
        <div class="rule-box">
          <h4>🎯 Puntuación & Bonos</h4>
          <ul>
            <li><strong>PPR Completo:</strong> 1.0 pt por cada recepción.</li>
            <li><strong>Bono de Carrera:</strong> +2 pts al llegar a 100 yds (RB).</li>
            <li><strong>Bono de Recepción:</strong> +2 pts al llegar a 100 yds (WR/TE).</li>
            <li><strong>Bono de Pase:</strong> +2 pts al llegar a 300 yds (QB).</li>
            <li><strong>Pateadores Decimales:</strong> 3.0 pts base hasta 30 yds + 0.1 pt por yarda extra después de 30 yds.</li>
            <li><strong>Defensa Activa:</strong> +1 pt por parada en 4to down y +0.5 pt por 3-and-out.</li>
          </ul>
        </div>

        <!-- Waivers & Economía -->
        <div class="rule-box">
          <h4>💵 Waivers & FAAB</h4>
          <ul>
            <li><strong>Presupuesto Inicial:</strong> $100 dólares virtuales para el año.</li>
            <li><strong>Oferta Mínima:</strong> $0 dólares (puedes fichar gratis si se acaba el presupuesto).</li>
            <li><strong>Día de Procesamiento:</strong> Miércoles por la mañana (subasta a ciegas).</li>
            <li><strong>Periodo de Waivers:</strong> 2 días tras cortar a un jugador.</li>
            <li><strong>Revisión de Trades:</strong> 1 día / Aprobación de Comisionado.</li>
          </ul>
        </div>

        <!-- Dinámicas del Gym -->
        <div class="rule-box" style="border-color: rgba(239, 68, 68, 0.4);">
          <h4 style="color: #f87171;">🏋️‍♂️ Retos & Castigos Gym</h4>
          <ul>
            <li><strong>Menor Puntaje Semanal:</strong> Grabar 50 burpees y enviarlo al grupo de WhatsApp antes del jueves.</li>
            <li><strong>Trofeo Itinerante:</strong> El campeón se lleva la mancuerna/escudo dorado del gym por 1 año.</li>
            <li><strong>The Sacko (Último lugar anual):</strong> Cumplir el castigo especial de fin de temporada acordado por la liga.</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}
