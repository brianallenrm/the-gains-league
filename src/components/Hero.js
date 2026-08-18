export function renderHero(league, teams = []) {
  const numTeams = league?.total_rosters || 12;
  const currentMembers = teams.length;
  const faabBudget = league?.settings?.waiver_budget || 100;
  const playoffTeams = league?.settings?.playoff_teams || 6;
  const isPreDraft = league?.status === "pre_draft";

  return `
    <section class="hero-banner">
      <div class="container">
        <div class="hero-card">
          <img src="/logo.jpg" alt="The Gains League Escudo" class="hero-logo-large">
          
          <div class="hero-title-area">
            <h2>The Gains League 2026</h2>
            <p>Donde el press de banca y el Fantasy Football se juegan con todo el peso. ${isPreDraft ? "¡Preparando el Draft de 12 Equipos!" : "Temporada Regular en Vivo."}</p>
          </div>

          <div class="hero-stats-grid">
            <div class="hero-stat-pill">
              <div class="val">${currentMembers}/${numTeams}</div>
              <div class="lbl">Equipos</div>
            </div>
            <div class="hero-stat-pill">
              <div class="val">$${faabBudget}</div>
              <div class="lbl">FAAB Base</div>
            </div>
            <div class="hero-stat-pill">
              <div class="val">${playoffTeams}</div>
              <div class="lbl">Playoffs</div>
            </div>
            <div class="hero-stat-pill">
              <div class="val">PPR+</div>
              <div class="lbl">Formato</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
