import { fetchFullLeagueData } from './api/sleeper.js';
import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderWeeklyAwards } from './components/WeeklyAwards.js';
import { renderStandings } from './components/Standings.js';
import { renderMatchups } from './components/Matchups.js';
import { renderRulesSummary } from './components/RulesSummary.js';
import { renderTrendingMarket } from './components/TrendingMarket.js';

export class App {
  constructor(container) {
    this.container = container;
    this.currentTab = 'standings'; // 'standings' | 'matchups' | 'market' | 'rules'
    this.leagueData = null;
    this.isLoading = true;
    this.error = null;
  }

  async init() {
    await this.loadData();
    this.render();
  }

  async loadData() {
    this.isLoading = true;
    this.error = null;
    this.renderLoading();

    try {
      this.leagueData = await fetchFullLeagueData();
    } catch (err) {
      console.error(err);
      this.error = err.message || "Error al conectar con la API de Sleeper";
    } finally {
      this.isLoading = false;
      this.render();
    }
  }

  setTab(tab) {
    this.currentTab = tab;
    this.render();
  }

  renderLoading() {
    this.container.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:80vh; gap:1.2rem; text-align:center;">
        <img src="/logo.jpg" alt="Logo" style="width:80px; height:80px; border-radius:12px; border:2px solid var(--accent-gold); animation: pulse 1.5s infinite;">
        <h2 style="font-family:var(--font-display); font-size:1.6rem; color:#fff; text-transform:uppercase;">Cargando The Gains League...</h2>
        <p style="color:var(--text-muted); font-size:0.9rem;">Sincronizando con Sleeper API</p>
      </div>
    `;
  }

  renderError() {
    this.container.innerHTML = `
      <div class="container" style="padding-top: 4rem; text-align:center;">
        <div class="card" style="max-width: 500px; margin: 0 auto; border-color: rgba(239, 68, 68, 0.4);">
          <h2 style="color: #f87171; font-family: var(--font-display); margin-bottom: 0.5rem;">Error de Conexión</h2>
          <p style="color: var(--text-muted); margin-bottom: 1.5rem;">${this.error}</p>
          <button id="btn-retry" class="btn-refresh" style="margin: 0 auto;">Reintentar</button>
        </div>
      </div>
    `;

    document.getElementById('btn-retry')?.addEventListener('click', () => this.loadData());
  }

  render() {
    if (this.isLoading) return;
    if (this.error) {
      this.renderError();
      return;
    }

    const { league, teams, matchups, currentWeek, trendingAdds, trendingDrops, transactions } = this.leagueData;

    let tabContent = '';
    if (this.currentTab === 'standings') {
      tabContent = `
        ${renderWeeklyAwards(teams, matchups, currentWeek)}
        ${renderStandings(teams, league)}
      `;
    } else if (this.currentTab === 'matchups') {
      tabContent = renderMatchups(matchups, teams, currentWeek);
    } else if (this.currentTab === 'market') {
      tabContent = renderTrendingMarket(trendingAdds, trendingDrops, transactions);
    } else if (this.currentTab === 'rules') {
      tabContent = renderRulesSummary();
    }

    this.container.innerHTML = `
      ${renderHeader(league)}
      ${renderHero(league, teams)}

      <main class="container">
        <!-- Navigation Tabs -->
        <div class="nav-tabs-wrapper">
          <nav class="nav-tabs">
            <button class="tab-btn ${this.currentTab === 'standings' ? 'active' : ''}" data-tab="standings">
              📊 Tabla & Premios
            </button>
            <button class="tab-btn ${this.currentTab === 'matchups' ? 'active' : ''}" data-tab="matchups">
              ⚔️ Enfrentamientos
            </button>
            <button class="tab-btn ${this.currentTab === 'market' ? 'active' : ''}" data-tab="market">
              📈 Mercado & Waivers
            </button>
            <button class="tab-btn ${this.currentTab === 'rules' ? 'active' : ''}" data-tab="rules">
              📜 Reglamento & Gym
            </button>
          </nav>
        </div>

        <!-- Dynamic Content -->
        <div class="tab-content-area">
          ${tabContent}
        </div>
      </main>

      <footer class="site-footer">
        <div class="container">
          <p>© 2026 The Gains League 🏋️‍♂️🏈 | Conectado en tiempo real a Sleeper API</p>
          <div class="footer-links">
            <a href="https://sleeper.com/leagues/1393074729073520640/predraft" target="_blank" rel="noopener">Ver en Sleeper.com</a>
            <a href="https://sleeper.com/i/QBMbleqAAnMmJ" target="_blank" rel="noopener">Enlace de Invitación</a>
          </div>
        </div>
      </footer>
    `;

    // Event listeners
    document.getElementById('btn-refresh')?.addEventListener('click', () => this.loadData());
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetTab = e.currentTarget.getAttribute('data-tab');
        if (targetTab) this.setTab(targetTab);
      });
    });
  }
}
