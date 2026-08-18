/**
 * Vercel Serverless Function: Draft Date Poll (Persistent Cloud Sync)
 * GET /api/poll - Retorna votos actuales
 * POST /api/poll - Registra o actualiza el voto de un usuario con persistencia en la nube
 */

const CLOUD_KV_URL = "https://kvdb.io/4y9q9wN8CqU7vT8YvL6M1w/gains_poll_2026_v1";

const DEFAULT_OPTIONS = [
  {
    id: "opt1",
    title: "Sábado 29 de Agosto — 8:00 PM",
    desc: "🔥 Fin de semana previo al cierre de pretemporada NFL",
    date: "2026-08-29T20:00:00"
  },
  {
    id: "opt2",
    title: "Domingo 30 de Agosto — 7:00 PM",
    desc: "🔒 Domingo por la tarde/noche (Cero fallas de horario)",
    date: "2026-08-30T19:00:00"
  },
  {
    id: "opt3",
    title: "Viernes 4 de Septiembre — 8:00 PM",
    desc: "🏈 Último fin de semana antes del Kickoff oficial NFL",
    date: "2026-09-04T20:00:00"
  }
];

// Memoria local del worker
let localCache = {
  voters: [] // { name: "Brian", optionId: "opt1", timestamp: 123456789 }
};

async function fetchFromCloud() {
  try {
    const res = await fetch(CLOUD_KV_URL);
    if (res.ok) {
      const data = await res.json();
      if (data && Array.isArray(data.voters)) {
        localCache = data;
        return data;
      }
    }
  } catch (err) {
    console.warn("Error leyendo de Cloud KV", err);
  }
  return localCache;
}

async function saveToCloud(data) {
  try {
    await fetch(CLOUD_KV_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  } catch (err) {
    console.warn("Error guardando en Cloud KV", err);
  }
}

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Leer estado actual de la nube
  const currentStore = await fetchFromCloud();

  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const { name, optionId } = body || {};

      if (!name || !name.trim()) {
        return res.status(400).json({ error: "El nombre es obligatorio" });
      }

      if (!optionId || !["opt1", "opt2", "opt3"].includes(optionId)) {
        return res.status(400).json({ error: "Opción de fecha inválida" });
      }

      const cleanName = name.trim().slice(0, 30);
      const voters = currentStore.voters || [];

      // Si ya existe el votante, actualizar su voto; si no, agregarlo
      const existingIndex = voters.findIndex(
        v => v.name.toLowerCase() === cleanName.toLowerCase()
      );

      if (existingIndex >= 0) {
        voters[existingIndex].optionId = optionId;
        voters[existingIndex].timestamp = Date.now();
      } else {
        voters.push({
          name: cleanName,
          optionId,
          timestamp: Date.now()
        });
      }

      currentStore.voters = voters;
      localCache = currentStore;

      // Guardar en la nube en paralelo
      saveToCloud(currentStore);

      return res.status(200).json(formatResponse(voters));
    } catch (err) {
      return res.status(500).json({ error: "Error procesando el voto" });
    }
  }

  // GET
  return res.status(200).json(formatResponse(currentStore.voters || []));
}

function formatResponse(voters = []) {
  const totalVotes = voters.length;

  const results = DEFAULT_OPTIONS.map(opt => {
    const optVoters = voters.filter(v => v.optionId === opt.id);
    const count = optVoters.length;
    const percentage = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;

    return {
      ...opt,
      votes: count,
      percentage,
      voterNames: optVoters.map(v => v.name)
    };
  });

  return {
    totalVotes,
    options: results,
    voters
  };
}
