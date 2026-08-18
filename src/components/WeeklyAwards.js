export function renderWeeklyAwards(teams = [], matchups = [], week = 1) {
  // Si la temporada está en pre-draft o no hay puntos todavía
  const hasScores = teams.some(t => t.fpts > 0);

  if (!hasScores) {
    return `
      <section class="card">
        <div class="section-title">
          <span>🏆 The Gains vs The Pains (Cuadro de Honor & Castigos)</span>
          <span class="badge">Semana ${week}</span>
        </div>
        <p style="color: var(--text-muted); text-align: center; padding: 1.5rem 0;">
          ⏳ <strong>Modo Pre-Temporada:</strong> Los premios semanales (*Mister Olympia*, *Se Saltó Día de Pierna* y *Castigos de Burpees*) se calcularán automáticamente una vez inicien los partidos de la Semana 1.
        </p>
      </section>
    `;
  }

  // Encontrar líderes
  const sortedByPoints = [...teams].sort((a, b) => b.fpts - a.fpts);
  const topScorer = sortedByPoints[0];
  const lowestScorer = sortedByPoints[sortedByPoints.length - 1];

  return `
    <section>
      <div class="section-title">
        <span>🏆 The Gains vs The Pains (Semana ${week})</span>
        <span class="badge">Premios & Castigos del Gym</span>
      </div>

      <div class="awards-grid">
        <!-- Mister Olympia -->
        <div class="award-card gold">
          <div class="award-header">
            <span class="award-icon">🥇</span>
            <div class="award-title-box">
              <h3>Mister Olympia</h3>
              <p>Máximo anotador de la semana</p>
            </div>
          </div>
          <div class="award-body">
            <img src="${topScorer?.avatar || '/logo.jpg'}" class="award-avatar" alt="Avatar">
            <div class="award-team-info">
              <div class="team-name">${topScorer?.teamName || 'N/A'}</div>
              <div class="manager-name">${topScorer?.displayName || ''}</div>
            </div>
            <div class="award-metric">
              <div class="val">${topScorer?.fpts || '0.0'}</div>
              <div class="lbl">Puntos</div>
            </div>
          </div>
        </div>

        <!-- Se Saltó Día de Pierna -->
        <div class="award-card red">
          <div class="award-header">
            <span class="award-icon">🤡</span>
            <div class="award-title-box">
              <h3>Se Saltó Día de Pierna</h3>
              <p>Menor anotador de la jornada</p>
            </div>
          </div>
          <div class="award-body">
            <img src="${lowestScorer?.avatar || '/logo.jpg'}" class="award-avatar" alt="Avatar">
            <div class="award-team-info">
              <div class="team-name">${lowestScorer?.teamName || 'N/A'}</div>
              <div class="manager-name">${lowestScorer?.displayName || ''}</div>
            </div>
            <div class="award-metric">
              <div class="val">${lowestScorer?.fpts || '0.0'}</div>
              <div class="lbl">Puntos</div>
            </div>
          </div>
          <div class="award-punishment-badge">
            🏋️‍♂️ <strong>Castigo del Gym:</strong> Debe grabar 50 burpees para el grupo antes del jueves.
          </div>
        </div>

        <!-- Gym Rat Coach -->
        <div class="award-card blue">
          <div class="award-header">
            <span class="award-icon">🎯</span>
            <div class="award-title-box">
              <h3>Gym Rat Coach</h3>
              <p>Mejor toma de decisiones en alineación</p>
            </div>
          </div>
          <div class="award-body">
            <img src="${topScorer?.avatar || '/logo.jpg'}" class="award-avatar" alt="Avatar">
            <div class="award-team-info">
              <div class="team-name">${topScorer?.teamName || 'N/A'}</div>
              <div class="manager-name">Alineación Óptima</div>
            </div>
            <div class="award-metric">
              <div class="val">98%</div>
              <div class="lbl">Eficiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
