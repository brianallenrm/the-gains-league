export function renderRulesSummary() {
  return `
    <div class="card">
      <div class="section-title">
        <span>💰 Bolsa Total, Reglamento & Premios Oficiales 2026</span>
        <span class="badge">Bolsa: $7,200 MXN</span>
      </div>

      <!-- Banner de Premiación -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 1.5rem;">
        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(7, 11, 20, 0.8)); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-lg); padding: 1.25rem;">
          <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; letter-spacing: 0.05em;">
            Premios Semanales (15 Semanas)
          </div>
          <div style="font-family: var(--font-display); font-size: 2.2rem; color: #34d399; margin: 0.25rem 0;">
            $4,500 <span style="font-size: 1rem; color: var(--text-muted);">MXN</span>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-muted);">
            <strong>$300 MXN cada semana</strong> para el mánager con más puntos anotados. ¡Siempre hay dinero en juego! (Si hay empate, se divide).
          </p>
        </div>

        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(7, 11, 20, 0.8)); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: var(--radius-lg); padding: 1.25rem;">
          <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; letter-spacing: 0.05em;">
            Gran Campeón de Temporada 🏆
          </div>
          <div style="font-family: var(--font-display); font-size: 2.2rem; color: var(--accent-gold-light); margin: 0.25rem 0;">
            $2,700 <span style="font-size: 1rem; color: var(--text-muted);">MXN</span>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-muted);">
            Se lleva el resto de la bolsa acumulada más el honor y el trofeo itinerante de la liga en el gym.
          </p>
        </div>
      </div>

      <div class="rules-grid">
        <!-- Cómo Funciona -->
        <div class="rule-box">
          <h4>💵 Estructura Financiera</h4>
          <ul>
            <li><strong>Inscripción:</strong> $600 pesos por persona (12 equipos).</li>
            <li><strong>Bolsa Total:</strong> $7,200 pesos (100% repartido).</li>
            <li><strong>Premios Semanales:</strong> 15 semanas x $300 = $4,500 pesos.</li>
            <li><strong>Premio Campeón:</strong> $2,700 pesos al ganador de Playoffs.</li>
            <li><strong>Ajuste por quorum:</strong> Si son 11 equipos: $550 c/u (14 sem x $275 = $3,850 + $2,200 campeón).</li>
          </ul>
        </div>

        <!-- Alineación -->
        <div class="rule-box">
          <h4>🏈 Alineación Titular</h4>
          <ul>
            <li><strong>1 QB, 2 RB, 2 WR, 1 TE</strong></li>
            <li><strong>2 FLEX (W/R/T)</strong> (Receptor, Corredor o Ala Cerrada)</li>
            <li><strong>1 K</strong> (Pateador) & <strong>1 DEF</strong> (Defensa)</li>
            <li><strong>5 Bancas (BN)</strong> + 3 Reservas (IR)</li>
            <li><strong>Duración:</strong> 15 semanas de temporada regular + Playoffs (Sem 15-17).</li>
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
            <li><strong>Pateadores Decimales:</strong> 3.0 pts base + 0.1 pt por yd extra (>30 yds).</li>
          </ul>
        </div>

        <!-- Reconocimientos Extra -->
        <div class="rule-box" style="border-color: rgba(56, 189, 248, 0.4);">
          <h4 style="color: #38bdf8;">⭐ Reconocimientos de Temporada</h4>
          <ul>
            <li><strong>Mejor Récord</strong> de Temporada Regular.</li>
            <li><strong>Mejor Reclamo de Waiver</strong> del año.</li>
            <li><strong>Robo del Draft</strong> (Mayor retorno de inversión).</li>
            <li><strong>Trade del Año</strong> más impactante.</li>
            <li><strong>Castigo del Peor Equipo:</strong> Reto físico del gym.</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}
