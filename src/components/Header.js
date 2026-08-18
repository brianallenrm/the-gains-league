export function renderHeader(league) {
  const isPreDraft = league?.status === "pre_draft";
  return `
  <header class="site-header">
    <div class="container header-inner">
      <a href="#" class="brand">
        <img src="/logo.jpg" alt="Logo" class="brand-logo">
        <div>
          <div class="brand-title">The Gains League</div>
          <div class="brand-sub">Fantasy Football • Gym Edition</div>
        </div>
      </a>
      <div class="header-right">
        <span class="status-pill ${isPreDraft ? 'predraft' : 'live'}">
          <span class="dot-pulse"></span>
          ${isPreDraft ? 'Pre-Draft' : 'En Vivo'}
        </span>
        <button id="btn-refresh" class="btn-refresh">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6"/><path d="M2.5 22v-6h6"/><path d="M22 13a10 10 0 0 1-17.95 5.39M2 11a10 10 0 0 1 17.95-5.39"/></svg>
          Actualizar
        </button>
      </div>
    </div>
  </header>`;
}
