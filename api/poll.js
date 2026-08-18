/**
 * Vercel Serverless Function: Draft Date Poll (100% Persistent Cloud Storage)
 * GET /api/poll - Retorna votos actuales desde la base de datos en la nube
 * POST /api/poll - Registra o actualiza el voto de un usuario en la nube permanente
 */

const CLOUD_DB_ID = "ff8081819ff5b11001a0127b78f13cda";
const CLOUD_DB_URL = `https://api.restful-api.dev/objects/${CLOUD_DB_ID}`;

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

// Fallback en memoria si la nube tarda
let memoryCache = [
  { name: "Brian (Comish)", optionId: "opt1", timestamp: Date.now() }
];

async function fetchCloudVoters() {
  try {
    const res = await fetch(CLOUD_DB_URL);
    if (res.ok) {
      const json = await res.json();
      if (json && json.data && Array.isArray(json.data.voters)) {
        memoryCache = json.data.voters;
        return json.data.voters;
      }
    }
  } catch (err) {
    console.warn("Error leyendo de Cloud DB", err);
  }
  return memoryCache;
}

async function saveCloudVoters(voters) {
  try {
    await fetch(CLOUD_DB_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "the_gains_league_poll_2026",
        data: { voters }
      })
    });
  } catch (err) {
    console.warn("Error guardando en Cloud DB", err);
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
      const voters = await fetchCloudVoters();

      // Actualizar o agregar voto
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

      memoryCache = voters;

      // Guardar en la nube persistente
      await saveCloudVoters(voters);

      return res.status(200).json(formatResponse(voters));
    } catch (err) {
      return res.status(500).json({ error: "Error procesando el voto" });
    }
  }

  // GET
  const currentVoters = await fetchCloudVoters();
  return res.status(200).json(formatResponse(currentVoters));
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
