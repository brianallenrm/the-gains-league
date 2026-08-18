/**
 * Draft Date Poll Component
 * Interactive voting for the 3 tentative draft dates
 */

const LOCAL_STORAGE_KEY = "gains_league_poll_user";
const LOCAL_POLL_DATA_KEY = "gains_league_poll_cache";

// Opciones por defecto
const DEFAULT_OPTIONS = [
  {
    id: "opt1",
    title: "🗓️ Sábado 29 de Agosto — 8:00 PM",
    desc: "🔥 Fin de semana previo al cierre de pretemporada NFL",
    votes: 0,
    percentage: 0,
    voterNames: []
  },
  {
    id: "opt2",
    title: "🗓️ Domingo 30 de Agosto — 7:00 PM",
    desc: "🔒 Domingo por la tarde/noche (Cero fallas de horario)",
    votes: 0,
    percentage: 0,
    voterNames: []
  },
  {
    id: "opt3",
    title: "🗓️ Viernes 4 de Septiembre — 8:00 PM",
    desc: "🏈 Último fin de semana previo al Kickoff oficial NFL",
    votes: 0,
    percentage: 0,
    voterNames: []
  }
];

export async function fetchPollData() {
  try {
    const res = await fetch("/api/poll");
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem(LOCAL_POLL_DATA_KEY, JSON.stringify(data));
      return data;
    }
  } catch (err) {
    console.warn("Usando caché local de votaciones", err);
  }

  // Fallback a localStorage o datos por defecto
  const cached = localStorage.getItem(LOCAL_POLL_DATA_KEY);
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch {}
  }

  return {
    totalVotes: 1,
    options: DEFAULT_OPTIONS
  };
}

export async function submitVote(name, optionId) {
  try {
    const res = await fetch("/api/poll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, optionId })
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem(LOCAL_POLL_DATA_KEY, JSON.stringify(data));
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ name, optionId, timestamp: Date.now() }));
      return { success: true, data };
    }
  } catch (err) {
    console.warn("Modo local para voto", err);
  }

  // Fallback local
  const currentData = JSON.parse(localStorage.getItem(LOCAL_POLL_DATA_KEY) || JSON.stringify({ totalVotes: 0, options: DEFAULT_OPTIONS }));
  
  // Actualizar opciones localmente
  currentData.options.forEach(opt => {
    opt.voterNames = (opt.voterNames || []).filter(n => n.toLowerCase() !== name.toLowerCase());
    if (opt.id === optionId) {
      opt.voterNames.push(name);
    }
    opt.votes = opt.voterNames.length;
  });

  const total = currentData.options.reduce((acc, o) => acc + o.votes, 0);
  currentData.totalVotes = total;
  currentData.options.forEach(opt => {
    opt.percentage = total > 0 ? Math.round((opt.votes / total) * 100) : 0;
  });

  localStorage.setItem(LOCAL_POLL_DATA_KEY, JSON.stringify(currentData));
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ name, optionId, timestamp: Date.now() }));

  return { success: true, data: currentData };
}

export function renderDraftPoll(pollData) {
  const savedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "null");
  const options = pollData?.options || DEFAULT_OPTIONS;
  const totalVotes = pollData?.totalVotes || options.reduce((sum, o) => sum + (o.votes || 0), 0);

  const selectedOptId = savedUser?.optionId || "opt1";

  const optionsHtml = options.map((opt) => {
    const isSelected = savedUser?.optionId === opt.id;
    const voters = opt.voterNames || [];

    const voterChips = voters.map(vName => `
      <span class="poll-voter-chip">${vName}</span>
    `).join('');

    return `
    <div class="poll-option-card ${isSelected ? 'selected' : ''}" data-option-id="${opt.id}">
      <div class="poll-option-header">
        <label class="poll-radio-label">
          <input type="radio" name="draft_option" value="${opt.id}" ${isSelected ? 'checked' : ''}>
          <div class="poll-option-info">
            <div class="poll-option-title">${opt.title}</div>
            <div class="poll-option-desc">${opt.desc}</div>
          </div>
        </label>
        <div class="poll-stat-badge">
          <span class="poll-pct">${opt.percentage}%</span>
          <span class="poll-votes-count">${opt.votes} ${opt.votes === 1 ? 'voto' : 'votos'}</span>
        </div>
      </div>

      <!-- Barra de Progreso -->
      <div class="poll-progress-track">
        <div class="poll-progress-fill" style="width: ${Math.max(opt.percentage, 4)}%;"></div>
      </div>

      <!-- Lista de Votantes -->
      ${voters.length > 0 ? `
      <div class="poll-voters-list">
        <span class="poll-voters-lbl">Votos:</span>
        <div class="poll-chips-wrap">
          ${voterChips}
        </div>
      </div>` : ''}
    </div>`;
  }).join('');

  return `
  <section class="draft-poll-section">
    <div class="container">
      <div class="poll-container-card">
        <div class="poll-header-area">
          <div class="poll-badge-top">
            <span class="dot-pulse" style="background:#f59e0b;"></span>
            Votación Oficial de Fecha
          </div>
          <h2 class="poll-main-title">🗳️ ¿Qué día armamos el Draft de The Gains League?</h2>
          <p class="poll-subtitle">
            Elige la fecha que mejor te quede para el draft. ¡Escribe tu nombre para registrar tu voto y ver los resultados en vivo!
          </p>
        </div>

        <div class="poll-options-grid">
          ${optionsHtml}
        </div>

        <div class="poll-action-bar">
          ${savedUser ? `
          <div class="poll-voted-notice">
            <div class="notice-text">
              ✅ Ya votaste como <strong>${savedUser.name}</strong>. Puedes cambiar tu fecha seleccionando otra opción y pulsando actualizar.
            </div>
            <div class="poll-inputs-row">
              <input type="text" id="poll-name-input" class="poll-input" value="${savedUser.name}" placeholder="Tu nombre">
              <button id="btn-submit-vote" class="btn-vote">
                Actualizar mi Voto
              </button>
            </div>
          </div>
          ` : `
          <div class="poll-form-box">
            <div class="poll-inputs-row">
              <input type="text" id="poll-name-input" class="poll-input" placeholder="👤 Escribe tu nombre o equipo (ej. Brian / Gym Team)">
              <button id="btn-submit-vote" class="btn-vote">
                🔥 Emitir mi Voto
              </button>
            </div>
            <div class="poll-hint">
              Total de votos registrados: <strong>${totalVotes}</strong> • Puedes cambiar tu selección en cualquier momento.
            </div>
          </div>
          `}
        </div>
      </div>
    </div>
  </section>`;
}
