import { loadLeagueData } from './api/sleeper.js';
import { renderHeader }      from './components/Header.js';
import { renderHero }        from './components/Hero.js';
import { renderStandingsTab } from './components/Standings.js';
import { renderMatchups }    from './components/Matchups.js';
import { renderMarket }      from './components/TrendingMarket.js';
import { renderRules }       from './components/RulesSummary.js';

const TABS = [
  { id: 'home',     icon: '📊', label: 'Tabla & Premios' },
  { id: 'matchups', icon: '⚔️', label: 'Enfrentamientos' },
  { id: 'market',   icon: '📈', label: 'Mercado' },
  { id: 'rules',    icon: '📜', label: 'Reglamento' },
];

class GainsLeagueApp {
  constructor(root) {
    this.root    = root;
    this.tab     = 'home';
    this.data    = null;
    this.loading = true;
    this.error   = null;
  }

  /* ── Boot ───────────────────────────────────────────────── */
  async init() {
    this.showLoading();
    try {
      this.data    = await loadLeagueData();
      this.loading = false;
    } catch (err) {
      this.error   = err.message;
      this.loading = false;
    }
    this.render();
  }

  async refresh() {
    // Spinner sutil en el botón
    const btn = document.getElementById('btn-refresh');
    if (btn) { btn.disabled = true; btn.textContent = '⟳ ...'; }
    this.error = null;
    try {
      this.data = await loadLeagueData();
    } catch (err) {
      this.error = err.message;
    }
    this.render();
  }

  /* ── Loading splash ─────────────────────────────────────── */
  showLoading() {
    this.root.innerHTML = `
    <div class="loading-screen">
      <img src="/logo.jpg" class="loading-logo" alt="Logo">
      <div class="loading-text">Cargando The Gains League...</div>
      <div class="loading-sub">Conectando con Sleeper API</div>
    </div>`;
  }

  /* ── Tab content ────────────────────────────────────────── */
  getTabContent() {
    const d = this.data;
    switch (this.tab) {
      case 'home':
        return renderStandingsTab(d.teams, d.league, d.isPreDraft);
      case 'matchups':
        return renderMatchups(d.matchups, d.teams, d.currentWeek, d.isPreDraft);
      case 'market':
        return renderMarket(d.trendingAdds, d.trendingDrops, d.transactions, d.teams);
      case 'rules':
        return renderRules();
      default:
        return '';
    }
  }

  /* ── Main render ────────────────────────────────────────── */
  render() {
    if (this.loading) return;

    if (this.error) {
      this.root.innerHTML = `
      <div class="container">
        <div class="error-box">
          <h3>Error de Conexión</h3>
          <p>${this.error}</p>
          <button id="btn-retry" class="btn-primary">🔄 Reintentar</button>
        </div>
      </div>`;
      document.getElementById('btn-retry')?.addEventListener('click', () => this.init());
      return;
    }

    const d = this.data;

    /* Tabs HTML */
    const tabsHtml = TABS.map(t => `
      <button class="tab${this.tab === t.id ? ' active' : ''}" data-tab="${t.id}">
        <span>${t.icon}</span> ${t.label}
      </button>`).join('');

    this.root.innerHTML = `
    ${renderHeader(d.league)}

    ${renderHero(d.league, d.teams)}

    <div class="tabs-bar">
      <div class="container">
        <div class="tabs-inner">${tabsHtml}</div>
      </div>
    </div>

    <main class="container" style="padding-bottom:3rem">
      ${this.getTabContent()}
    </main>

    <footer class="site-footer">
      <div class="container">
        <img src="/logo.jpg" class="footer-logo" alt="Logo">
        <div class="footer-text">© 2026 The Gains League 🏋️‍♂️🏈 — Conectado en tiempo real a Sleeper API</div>
        <div class="footer-links">
          <a href="https://sleeper.com/leagues/1393074729073520640/predraft" target="_blank" rel="noopener">Ver en Sleeper</a>
          <a href="https://sleeper.com/i/QBMbleqAAnMmJ" target="_blank" rel="noopener">Invitar al Draft</a>
          <a href="https://docs.sleeper.com" target="_blank" rel="noopener">API Docs</a>
        </div>
      </div>
    </footer>`;

    /* ── Event Listeners ── */
    document.getElementById('btn-refresh')?.addEventListener('click', () => this.refresh());

    this.root.querySelectorAll('.tab').forEach(btn => {
      btn.addEventListener('click', () => {
        this.tab = btn.dataset.tab;
        this.render();
        // Scroll a los tabs en mobile
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }
}

/* ── Bootstrap ─────────────────────────────────────────────── */
const app = new GainsLeagueApp(document.getElementById('app'));
app.init();
