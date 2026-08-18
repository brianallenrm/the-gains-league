import { loadLeagueData } from './api/sleeper.js';
import { renderHeader }      from './components/Header.js';
import { renderHero }        from './components/Hero.js';
import { renderDraftPoll, fetchPollData, submitVote } from './components/DraftPoll.js';
import { renderStandingsTab } from './components/Standings.js';
import { renderMatchups }    from './components/Matchups.js';
import { renderMarket }      from './components/TrendingMarket.js';
import { renderRules, attachRulesModalEvents } from './components/RulesSummary.js';

const TABS = [
  { id: 'home',     icon: '📊', label: 'Tabla & Premios' },
  { id: 'rules',    icon: '📜', label: 'Reglamento' },
  { id: 'matchups', icon: '⚔️', label: 'Enfrentamientos' },
  { id: 'market',   icon: '📈', label: 'Mercado' },
];

class GainsLeagueApp {
  constructor(root) {
    this.root     = root;
    this.tab      = 'home';
    this.data     = null;
    this.pollData = null;
    this.loading  = true;
    this.error    = null;
  }

  /* ── Boot ───────────────────────────────────────────────── */
  async init() {
    this.showLoading();
    try {
      const [leagueData, pollData] = await Promise.all([
        loadLeagueData(),
        fetchPollData()
      ]);
      this.data     = leagueData;
      this.pollData = pollData;
      this.loading  = false;
    } catch (err) {
      this.error   = err.message;
      this.loading = false;
    }
    this.render();
  }

  async refresh() {
    const btn = document.getElementById('btn-refresh');
    if (btn) { btn.disabled = true; btn.textContent = '⟳ ...'; }
    this.error = null;
    try {
      const [leagueData, pollData] = await Promise.all([
        loadLeagueData(),
        fetchPollData()
      ]);
      this.data     = leagueData;
      this.pollData = pollData;
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
        return renderStandingsTab(d.teams, d.league, d.isPreDraft, d.users);
      case 'rules':
        return renderRules();
      case 'matchups':
        return renderMatchups(d.matchups, d.teams, d.currentWeek, d.isPreDraft);
      case 'market':
        return renderMarket(d.trendingAdds, d.trendingDrops, d.transactions, d.teams);
      default:
        return '';
    }
  }

  /* ── Switch Tab Smoothly Without Scroll Jump ────────────── */
  switchTab(newTab) {
    if (this.tab === newTab) return;
    this.tab = newTab;

    // Actualizar botones de tabs
    this.root.querySelectorAll('.tab').forEach(btn => {
      if (btn.dataset.tab === newTab) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Actualizar contenido del contenedor principal
    const mainContainer = document.getElementById('main-tab-content');
    if (mainContainer) {
      mainContainer.innerHTML = this.getTabContent();
      if (this.tab === 'rules') {
        attachRulesModalEvents(this.root);
      }
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

    ${renderHero(d.league, d.teams, d.users)}

    ${d.isPreDraft ? renderDraftPoll(this.pollData) : ''}

    <div class="tabs-bar">
      <div class="container">
        <div class="tabs-inner">${tabsHtml}</div>
      </div>
    </div>

    <main id="main-tab-content" class="container" style="padding-bottom:3rem">
      ${this.getTabContent()}
    </main>

    <footer class="site-footer">
      <div class="container">
        <img src="/logo.jpg" class="footer-logo" alt="Logo">
        <div class="footer-text">© 2026 The Gains League 🏋️‍♂️🏈 — Conectado en tiempo real a Sleeper API</div>
        <div class="footer-links">
          <a href="https://sleeper.com/download" target="_blank" rel="noopener" class="footer-link">
            📲 Descargar Sleeper App
          </a>
          <a href="https://sleeper.com/i/QBMbleqAAnMmJ" target="_blank" rel="noopener" class="footer-link footer-link-cta">
            🏈 Unirse a la Liga
          </a>
          <a href="https://sleeper.com/leagues/1393074729073520640/predraft" target="_blank" rel="noopener" class="footer-link">
            💻 Entrar a la Liga (Web)
          </a>
        </div>
      </div>
    </footer>`;

    this.attachEvents();
  }

  attachEvents() {
    // Refresh button
    document.getElementById('btn-refresh')?.addEventListener('click', () => this.refresh());

    // Tabs switching (In-place swap without page jump)
    this.root.querySelectorAll('.tab').forEach(btn => {
      btn.addEventListener('click', () => {
        this.switchTab(btn.dataset.tab);
      });
    });

    // Poll option card selection
    this.root.querySelectorAll('.poll-option-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const radio = card.querySelector('input[type="radio"]');
        if (radio && e.target !== radio) {
          radio.checked = true;
        }
        this.root.querySelectorAll('.poll-option-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
      });
    });

    // Submit vote button
    const btnVote = document.getElementById('btn-submit-vote');
    const nameInput = document.getElementById('poll-name-input');

    if (btnVote && nameInput) {
      btnVote.addEventListener('click', async () => {
        const name = nameInput.value.trim();
        const checkedRadio = this.root.querySelector('input[name="draft_option"]:checked');

        if (!name) {
          nameInput.focus();
          nameInput.style.borderColor = '#ef4444';
          setTimeout(() => { nameInput.style.borderColor = ''; }, 2000);
          return;
        }

        if (!checkedRadio) {
          alert('Por favor selecciona una fecha de la lista.');
          return;
        }

        btnVote.disabled = true;
        btnVote.textContent = 'Enviando...';

        const res = await submitVote(name, checkedRadio.value);
        if (res.success) {
          this.pollData = res.data;
          const pollContainer = this.root.querySelector('.draft-poll-section');
          if (pollContainer) {
            // Re-render only poll without touching the rest of page
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = renderDraftPoll(this.pollData);
            pollContainer.replaceWith(tempDiv.firstElementChild);
            this.attachEvents();
          } else {
            this.render();
          }
        } else {
          btnVote.disabled = false;
          btnVote.textContent = '🔥 Emitir mi Voto';
          alert('Hubo un error al registrar tu voto. Intenta de nuevo.');
        }
      });
    }

    // Inline copy buttons (e.g. on Standings tab)
    this.root.querySelectorAll('.btn-copy-inline').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const textToCopy = btn.getAttribute('data-copy');
        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = btn.textContent;
            btn.textContent = '✅ Copiado';
            btn.style.background = '#10b981';
            btn.style.color = '#fff';
            setTimeout(() => {
              btn.textContent = originalText;
              btn.style.background = '';
              btn.style.color = '';
            }, 2000);
          });
        }
      });
    });

    // Rules modal events
    if (this.tab === 'rules') {
      attachRulesModalEvents(this.root);
    }
  }
}

/* ── Bootstrap ─────────────────────────────────────────────── */
const app = new GainsLeagueApp(document.getElementById('app'));
app.init();
