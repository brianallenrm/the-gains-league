export function renderHero(league, teams = [], users = []) {
  const joinedUsers = users.length > 0 ? users.length : teams.filter(t => t.hasOwner).length;
  const total = league?.total_rosters || 12;
  const isPreDraft = league?.status === "pre_draft";

  const subtext = isPreDraft
    ? (joinedUsers >= total
        ? `¡Liga completa (${total}/${total})! • ¡Listos para el Draft! 🏈🔥`
        : `Buscando integrante ${joinedUsers + 1} de ${total} • ¡Inscripciones abiertas!`)
    : `Temporada 2026 en progreso • Semana activa`;

  return `
  <section class="hero">
    <div class="container">
      <div class="hero-card">
        <img src="/logo.jpg" alt="The Gains League" class="hero-logo">
        <div class="hero-body">
          <h1>The Gains League <span class="text-gold">2026</span></h1>
          <p class="hero-subtext">${subtext}</p>
          <div class="hero-pills">
            <div class="hero-pill">
              <div class="hero-pill-val">${joinedUsers}/${total}</div>
              <div class="hero-pill-lbl">Equipos</div>
            </div>
            <div class="hero-pill">
              <div class="hero-pill-val text-green">$7,200</div>
              <div class="hero-pill-lbl">Bolsa MXN</div>
            </div>
            <div class="hero-pill">
              <div class="hero-pill-val">$300</div>
              <div class="hero-pill-lbl">Prize/Sem</div>
            </div>
            <div class="hero-pill">
              <div class="hero-pill-val text-purple">$2,700</div>
              <div class="hero-pill-lbl">Campeón</div>
            </div>
            <div class="hero-pill">
              <div class="hero-pill-val">PPR+</div>
              <div class="hero-pill-lbl">Formato</div>
            </div>
            <div class="hero-pill">
              <div class="hero-pill-val">6</div>
              <div class="hero-pill-lbl">Playoffs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
