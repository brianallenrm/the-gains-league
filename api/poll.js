/**
 * Vercel Serverless Function: Draft Date Poll
 * GET /api/poll - Retorna votos actuales
 * POST /api/poll - Registra o actualiza el voto de un usuario
 */

// Memoria compartida del worker / fallback
let pollData = {
  options: [
    {
      id: "opt1",
      title: "Sábado 29 de Agosto — 8:00 PM",
      desc: "🥩 Plan carne asada / chelas / convivencia",
      date: "2026-08-29T20:00:00"
    },
    {
      id: "opt2",
      title: "Domingo 30 de Agosto — 7:00 PM",
      desc: "🔒 Tranqui de domingo por la tarde (Cero fallas)",
      date: "2026-08-30T19:00:00"
    },
    {
      id: "opt3",
      title: "Viernes 4 de Septiembre — 8:00 PM",
      desc: "🏈 Último fin de semana antes del Kickoff NFL",
      date: "2026-09-04T20:00:00"
    }
  ],
  voters: [] // { name: "Brian", optionId: "opt1", timestamp: 123456789 }
};

export default function handler(req, res) {
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

      // Si ya existe el votante, actualizar su voto; si no, agregarlo
      const existingIndex = pollData.voters.findIndex(
        v => v.name.toLowerCase() === cleanName.toLowerCase()
      );

      if (existingIndex >= 0) {
        pollData.voters[existingIndex].optionId = optionId;
        pollData.voters[existingIndex].timestamp = Date.now();
      } else {
        pollData.voters.push({
          name: cleanName,
          optionId,
          timestamp: Date.now()
        });
      }

      return res.status(200).json(formatResponse());
    } catch (err) {
      return res.status(500).json({ error: "Error procesando el voto" });
    }
  }

  // GET
  return res.status(200).json(formatResponse());
}

function formatResponse() {
  const totalVotes = pollData.voters.length;

  const results = pollData.options.map(opt => {
    const optVoters = pollData.voters.filter(v => v.optionId === opt.id);
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
    voters: pollData.voters
  };
}
