export function renderHero(league, teams = []) {
  const joined   = teams.length;
  const total    = league?.total_rosters || 12;
  const faab     = league?.settings?.waiver_budget || 100;
  const playoffs = league?.settings?.playoff_teams || 6;
  const isPreDraft = league?.status === "pre_draft";

  return `
  <section class="hero">
    <div class="container">
      <div class="hero-card">
        <img src="/logo.jpg" alt="The Gains League" class="hero-logo">
        <div class="hero-body">
          <h1>The Gains League <span style="color:var(--gold-lt)">2026</span></h1>
          <p>${isPreDraft
            ? `Buscando integrante ${joined + 1} de ${total} • ¡Inscripciones abiertas!`
            : `Temporada 2026 en progreso • Semana activa`}</p>
          <div class="hero-pills">
            <div class="hero-pill">
              <div class="hero-pill-val">${joined}/${total}</div>
              <div class="hero-pill-lbl">Equipos</div>
            </div>
            <div class="hero-pill">
              <div class="hero-pill-val" style="color:#34d399">$7,200</div>
              <div class="hero-pill-lbl">Bolsa MXN</div>
            </div>
            <div class="hero-pill">
              <div class="hero-pill-val">$300</div>
              <div class="hero-pill-lbl">Prize/Sem</div>
            </div>
            <div class="hero-pill">
              <div class="hero-pill-val" style="color:#a78bfa">$2,700</div>
              <div class="hero-pill-lbl">Campeón</div>
            </div>
            <div class="hero-pill">
              <div class="hero-pill-val">PPR+</div>
              <div class="hero-pill-lbl">Formato</div>
            </div>
            <div class="hero-pill">
              <div class="hero-pill-val">${playoffs}</div>
              <div class="hero-pill-lbl">Playoffs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
