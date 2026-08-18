/**
 * Draft Date Poll Component (Real-Time Cloud Persistence)
 */

const LOCAL_STORAGE_KEY = "gains_league_poll_user";
const LOCAL_POLL_DATA_KEY = "gains_league_poll_cache";
const CLOUD_FALLBACK_URL = "https://kvdb.io/4y9q9wN8CqU7vT8YvL6M1w/gains_poll_2026_v1";

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

function formatVotersData(voters = []) {
  const total = voters.length;
  const options = DEFAULT_OPTIONS.map(opt => {
    const optVoters = voters.filter(v => v.optionId === opt.id);
    const count = optVoters.length;
    const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
    return {
      ...opt,
      votes: count,
      percentage,
      voterNames: optVoters.map(v => v.name)
    };
  });
  return { totalVotes: total, options, voters };
}

export async function fetchPollData() {
  // 1. Intentar endpoint serverless
  try {
    const res = await fetch("/api/poll");
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem(LOCAL_POLL_DATA_KEY, JSON.stringify(data));
      return data;
    }
  } catch (err) {}

  // 2. Intentar fallback directo a Cloud KV
  try {
    const resCloud = await fetch(CLOUD_FALLBACK_URL);
    if (resCloud.ok) {
      const cloudJson = await resCloud.json();
      if (cloudJson && Array.isArray(cloudJson.voters)) {
        const formatted = formatVotersData(cloudJson.voters);
        localStorage.setItem(LOCAL_POLL_DATA_KEY, JSON.stringify(formatted));
        return formatted;
      }
    }
  } catch (err) {}

  // 3. Fallback a caché de localStorage
  const cached = localStorage.getItem(LOCAL_POLL_DATA_KEY);
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch {}
  }

  return { totalVotes: 0, options: DEFAULT_OPTIONS, voters: [] };
}

export async function submitVote(name, optionId) {
  const cleanName = name.trim().slice(0, 30);
  let updatedData = null;

  // 1. Enviar a /api/poll
  try {
    const res = await fetch("/api/poll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: cleanName, optionId })
    });
    if (res.ok) {
      updatedData = await res.json();
    }
  } catch (err) {}

  // 2. Si falló, intentar guardar directo en Cloud KV
  if (!updatedData) {
    try {
      let currentCloud = { voters: [] };
      const getRes = await fetch(CLOUD_FALLBACK_URL);
      if (getRes.ok) {
        currentCloud = await getRes.json();
      }
      const voters = currentCloud.voters || [];
      const idx = voters.findIndex(v => v.name.toLowerCase() === cleanName.toLowerCase());
      if (idx >= 0) {
        voters[idx].optionId = optionId;
        voters[idx].timestamp = Date.now();
      } else {
        voters.push({ name: cleanName, optionId, timestamp: Date.now() });
      }
      currentCloud.voters = voters;

      await fetch(CLOUD_FALLBACK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentCloud)
      });
      updatedData = formatVotersData(voters);
    } catch (err) {}
  }

  // 3. Fallback local si no hay conexión
  if (!updatedData) {
    const current = JSON.parse(localStorage.getItem(LOCAL_POLL_DATA_KEY) || '{"voters":[]}');
    const voters = current.voters || [];
    const idx = voters.findIndex(v => v.name.toLowerCase() === cleanName.toLowerCase());
    if (idx >= 0) {
      voters[idx].optionId = optionId;
    } else {
      voters.push({ name: cleanName, optionId, timestamp: Date.now() });
    }
    updatedData = formatVotersData(voters);
  }

  localStorage.setItem(LOCAL_POLL_DATA_KEY, JSON.stringify(updatedData));
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ name: cleanName, optionId, timestamp: Date.now() }));

  return { success: true, data: updatedData };
}

export function renderDraftPoll(pollData) {
  const savedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "null");
  const options = pollData?.options || DEFAULT_OPTIONS;
  const totalVotes = pollData?.totalVotes || 0;

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
        <div class="poll-progress-fill" style="width: ${Math.max(opt.percentage, opt.votes > 0 ? 6 : 0)}%;"></div>
      </div>

      <!-- Lista de Votantes -->
      ${voters.length > 0 ? `
      <div class="poll-voters-list">
        <span class="poll-voters-lbl">Votaron:</span>
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
            Votación Oficial en Tiempo Real
          </div>
          <h2 class="poll-main-title">🗳️ ¿Qué día armamos el Draft de The Gains League?</h2>
          <p class="poll-subtitle">
            Elige la fecha que mejor te quede para el draft. ¡Escribe tu nombre para registrar tu voto y ver qué fecha va ganando!
          </p>
        </div>

        <div class="poll-options-grid">
          ${optionsHtml}
        </div>

        <div class="poll-action-bar">
          ${savedUser ? `
          <div class="poll-voted-notice">
            <div class="notice-text">
              ✅ Ya registraste tu voto como <strong>${savedUser.name}</strong>. Puedes cambiar tu fecha seleccionando otra opción y pulsando actualizar.
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
              Total de votos registrados: <strong>${totalVotes}</strong> • Los resultados se actualizan para todos en tiempo real.
            </div>
          </div>
          `}
        </div>
      </div>
    </div>
  </section>`;
}
