export function renderHero(league, teams = []) {
  const numTeams = league?.total_rosters || 12;
  const currentMembers = teams.length;
  const isPreDraft = league?.status === "pre_draft";

  return `
    <section class="hero-banner">
      <div class="container">
        <div class="hero-card">
          <img src="/logo.jpg" alt="The Gains League Escudo" class="hero-logo-large">
          
          <div class="hero-title-area">
            <h2>The Gains League 2026</h2>
            <p>Compite. Aprende. Diviértete. Gana. 🏈🏋️‍♂️ ${isPreDraft ? "¡Inscripciones abiertas y camino al Draft!" : "Temporada Regular en Vivo."}</p>
          </div>

          <div class="hero-stats-grid">
            <div class="hero-stat-pill">
              <div class="val">${currentMembers}/${numTeams}</div>
              <div class="lbl">Equipos</div>
            </div>
            <div class="hero-stat-pill">
              <div class="val" style="color: #34d399;">$7,200</div>
              <div class="lbl">Bolsa MXN</div>
            </div>
            <div class="hero-stat-pill">
              <div class="val" style="color: var(--accent-gold-light);">$300</div>
              <div class="lbl">Premio/Semana</div>
            </div>
            <div class="hero-stat-pill">
              <div class="val" style="color: #fbbf24;">$2,700</div>
              <div class="lbl">Campeón</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
