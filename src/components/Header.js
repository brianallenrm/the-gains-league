export function renderHeader(league, onRefresh) {
  const isPreDraft = league?.status === "pre_draft";
  const statusText = isPreDraft ? "Pre-Draft 🏈" : "Temporada Activa ⚡";
  const statusClass = isPreDraft ? "predraft" : "live";

  return `
    <header class="site-header">
      <div class="container header-inner">
        <a href="#" class="brand">
          <img src="/logo.jpg" alt="The Gains League Logo" class="brand-logo">
          <div class="brand-info">
            <h1>The Gains League</h1>
            <span class="brand-tagline">Fantasy Football & Gym Community</span>
          </div>
        </a>

        <div class="header-status">
          <div class="status-badge ${statusClass}">
            <span class="pulse-dot"></span>
            ${statusText}
          </div>
          <button id="btn-refresh" class="btn-refresh" title="Actualizar datos">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
            </svg>
            Actualizar
          </button>
        </div>
      </div>
    </header>
  `;
}
