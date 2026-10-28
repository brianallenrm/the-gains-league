/**
 * Standings Image Generator using pure HTML5 Canvas
 * Renders an official, beautifully styled graphic (1200 x 1400)
 * Completely eliminates CSS rendering bugs, overflow overlaps, and blurry fonts.
 */

// Helper to load image
function loadImage(src) {
  return new Promise((resolve) => {
    if (!src) return resolve(null);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => {
      // Fallback
      if (src !== '/logo.jpg') {
        const fb = new Image();
        fb.onload = () => resolve(fb);
        fb.onerror = () => resolve(null);
        fb.src = '/logo.jpg';
      } else {
        resolve(null);
      }
    };
    img.src = src;
  });
}

// Rounded rectangle helper
function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

export async function generateStandingsImage(teams, week = 7, playoffCut = 6) {
  const width = 1200;
  const rowHeight = 72;
  const headerHeight = 220;
  const tableHeaderHeight = 52;
  const totalHeight = headerHeight + tableHeaderHeight + (teams.length * rowHeight) + 60;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = totalHeight;
  const ctx = canvas.getContext('2d');

  // 1. Fondos & Iluminación moderna
  ctx.fillStyle = '#070d19';
  ctx.fillRect(0, 0, width, totalHeight);

  // Mesh gradient superior
  const gradTop = ctx.createRadialGradient(width * 0.5, 0, 50, width * 0.5, 0, 700);
  gradTop.addColorStop(0, 'rgba(56, 189, 248, 0.16)');
  gradTop.addColorStop(0.6, 'rgba(15, 23, 42, 0)');
  ctx.fillStyle = gradTop;
  ctx.fillRect(0, 0, width, totalHeight);

  // Mesh gradient inferior dorado
  const gradBot = ctx.createRadialGradient(width * 0.85, totalHeight, 50, width * 0.85, totalHeight, 600);
  gradBot.addColorStop(0, 'rgba(245, 158, 11, 0.1)');
  gradBot.addColorStop(0.7, 'rgba(15, 23, 42, 0)');
  ctx.fillStyle = gradBot;
  ctx.fillRect(0, 0, width, totalHeight);

  // Borde contenedor principal
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 1.5;
  roundRect(ctx, 30, 30, width - 60, totalHeight - 60, 24);
  ctx.stroke();

  // 2. Cargar Logo de la liga
  const logoImg = await loadImage('/logo.jpg');
  if (logoImg) {
    ctx.save();
    roundRect(ctx, 60, 60, 76, 76, 16);
    ctx.clip();
    ctx.drawImage(logoImg, 60, 60, 76, 76);
    ctx.restore();

    ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
    ctx.lineWidth = 2;
    roundRect(ctx, 60, 60, 76, 76, 16);
    ctx.stroke();
  }

  // 3. Encabezado Oficial
  const titleX = logoImg ? 155 : 60;
  
  // Categoría / Píldora
  ctx.fillStyle = '#fbbf24';
  ctx.font = '700 14px "Inter", sans-serif';
  ctx.fillText('🏈 THE GAINS LEAGUE 2026 • TEMPORADA REGULAR', titleX, 78);

  // Título Principal
  ctx.fillStyle = '#ffffff';
  ctx.font = '800 34px "Oswald", "Inter", sans-serif';
  ctx.fillText(`TABLA OFICIAL DE POSICIONES • SEMANA ${week}`, titleX, 116);

  // Subtítulo
  ctx.fillStyle = '#8899b4';
  ctx.font = '400 16px "Inter", sans-serif';
  ctx.fillText(`Corte oficial tras ${week} jornadas • Top ${playoffCut} avanzan a postemporada por el campeonato`, titleX, 142);

  // Badge Top 6 a Playoffs en la esquina superior derecha
  const badgeX = width - 240;
  const badgeY = 70;
  ctx.fillStyle = 'rgba(245, 158, 11, 0.16)';
  roundRect(ctx, badgeX, badgeY, 180, 36, 18);
  ctx.fill();
  ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
  ctx.lineWidth = 1.2;
  roundRect(ctx, badgeX, badgeY, 180, 36, 18);
  ctx.stroke();

  ctx.fillStyle = '#fbbf24';
  ctx.font = '700 14px "Inter", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`🏆 Top ${playoffCut} a Playoffs`, badgeX + 90, badgeY + 23);

  // 4. Cabecera de la Tabla
  const tableY = headerHeight;
  ctx.fillStyle = '#101d33';
  roundRect(ctx, 50, tableY, width - 100, tableHeaderHeight, 10);
  ctx.fill();

  ctx.fillStyle = '#7e92b3';
  ctx.font = '700 13px "Oswald", "Inter", sans-serif';

  // Posiciones de columnas
  const cols = {
    rank: 80,
    team: 160,
    record: 560,
    pct: 670,
    fpts: 770,
    against: 880,
    faab: 970,
    streak: 1045,
    playoffs: 1115
  };

  ctx.textAlign = 'center';
  ctx.fillText('#', cols.rank, tableY + 31);
  ctx.textAlign = 'left';
  ctx.fillText('EQUIPO & MÁNAGER', cols.team, tableY + 31);
  ctx.textAlign = 'center';
  ctx.fillText('RÉCORD', cols.record, tableY + 31);
  ctx.fillText('%VIC', cols.pct, tableY + 31);
  ctx.textAlign = 'right';
  ctx.fillText('PTS FAV', cols.fpts + 15, tableY + 31);
  ctx.fillText('PTS CON', cols.against + 15, tableY + 31);
  ctx.textAlign = 'center';
  ctx.fillText('FAAB', cols.faab, tableY + 31);
  ctx.fillText('RACHA', cols.streak, tableY + 31);
  ctx.fillText('POST', cols.playoffs, tableY + 31);

  // 5. Cargar avatares en paralelo
  const avatarImgs = await Promise.all(teams.map(t => loadImage(t.avatar)));

  // 6. Filas de equipos
  let currentY = tableY + tableHeaderHeight;

  teams.forEach((t, i) => {
    const isPlayoff = i < playoffCut;
    const isPlayoffCutLine = i === playoffCut - 1;

    // Fila cebra tenue
    if (i % 2 === 1) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.fillRect(50, currentY, width - 100, rowHeight);
    }

    // Línea divisoria de fila
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(50, currentY + rowHeight);
    ctx.lineTo(width - 50, currentY + rowHeight);
    ctx.stroke();

    // Ranking #
    ctx.textAlign = 'center';
    ctx.font = '800 22px "Oswald", "Inter", sans-serif';
    if (i === 0) ctx.fillStyle = '#fbbf24';
    else if (i === 1) ctx.fillStyle = '#cbd5e1';
    else if (i === 2) ctx.fillStyle = '#cd7f32';
    else ctx.fillStyle = '#64748b';
    ctx.fillText(`${i + 1}`, cols.rank, currentY + 44);

    // Avatar del equipo
    const avImg = avatarImgs[i] || logoImg;
    const avX = cols.team;
    const avY = currentY + 14;
    const avSize = 44;

    if (avImg) {
      ctx.save();
      roundRect(ctx, avX, avY, avSize, avSize, 10);
      ctx.clip();
      ctx.drawImage(avImg, avX, avY, avSize, avSize);
      ctx.restore();

      ctx.strokeStyle = i === 0 ? 'rgba(245, 158, 11, 0.5)' : 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1.5;
      roundRect(ctx, avX, avY, avSize, avSize, 10);
      ctx.stroke();
    }

    // Nombre de equipo
    const textX = avX + avSize + 14;
    ctx.textAlign = 'left';
    ctx.font = '700 17px "Inter", sans-serif';
    ctx.fillStyle = '#ffffff';

    // Cortar nombre largo si excede
    let teamName = t.teamName || `Equipo ${t.rosterId}`;
    if (ctx.measureText(teamName).width > 220) {
      while (ctx.measureText(teamName + '...').width > 220 && teamName.length > 0) {
        teamName = teamName.slice(0, -1);
      }
      teamName += '...';
    }
    ctx.fillText(teamName, textX, currentY + 32);

    // Mánager e insignia de honor
    ctx.font = '500 13px "Inter", sans-serif';
    ctx.fillStyle = '#8899b4';
    const mgrName = t.displayName || 'Mánager';
    ctx.fillText(mgrName, textX, currentY + 54);

    // Honor badge
    if (t.honor) {
      const mgrWidth = ctx.measureText(mgrName).width;
      const bX = textX + mgrWidth + 10;
      const bY = currentY + 39;
      const badgeText = t.honor.title || '';
      ctx.font = '700 10px "Inter", sans-serif';
      const bTextW = ctx.measureText(badgeText).width;

      if (t.honor.type === 'champion') {
        ctx.fillStyle = 'rgba(245, 158, 11, 0.2)';
        roundRect(ctx, bX, bY, bTextW + 14, 20, 10);
        ctx.fill();
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
        ctx.lineWidth = 1;
        roundRect(ctx, bX, bY, bTextW + 14, 20, 10);
        ctx.stroke();
        ctx.fillStyle = '#fbbf24';
      } else if (t.honor.type === 'runnerup') {
        ctx.fillStyle = 'rgba(203, 213, 225, 0.2)';
        roundRect(ctx, bX, bY, bTextW + 14, 20, 10);
        ctx.fill();
        ctx.strokeStyle = 'rgba(203, 213, 225, 0.4)';
        ctx.lineWidth = 1;
        roundRect(ctx, bX, bY, bTextW + 14, 20, 10);
        ctx.stroke();
        ctx.fillStyle = '#e2e8f0';
      } else {
        ctx.fillStyle = 'rgba(56, 189, 248, 0.18)';
        roundRect(ctx, bX, bY, bTextW + 14, 20, 10);
        ctx.fill();
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.lineWidth = 1;
        roundRect(ctx, bX, bY, bTextW + 14, 20, 10);
        ctx.stroke();
        ctx.fillStyle = '#38bdf8';
      }

      ctx.fillText(badgeText, bX + 7, bY + 14);
    }

    // Récord
    ctx.textAlign = 'center';
    ctx.font = '800 20px "Oswald", "Inter", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${t.wins}-${t.losses}`, cols.record, currentY + 44);

    // % Victoria
    ctx.font = '500 15px "Inter", sans-serif';
    ctx.fillStyle = '#8899b4';
    ctx.fillText(`${(t.winPct * 100).toFixed(1)}%`, cols.pct, currentY + 44);

    // Puntos a Favor
    ctx.textAlign = 'right';
    ctx.font = '800 18px "Oswald", "Inter", sans-serif';
    ctx.fillStyle = '#fbbf24';
    ctx.fillText(t.fpts.toFixed(2), cols.fpts + 15, currentY + 44);

    // Puntos en Contra
    ctx.font = '500 15px "Inter", sans-serif';
    ctx.fillStyle = '#8899b4';
    ctx.fillText(t.fptsAgainst.toFixed(2), cols.against + 15, currentY + 44);

    // FAAB
    ctx.textAlign = 'center';
    ctx.font = '800 18px "Oswald", "Inter", sans-serif';
    ctx.fillStyle = '#34d399';
    ctx.fillText(`$${t.faabRemaining}`, cols.faab, currentY + 44);

    // Racha Badge
    const streakLetter = (t.streak || '').replace(/\d/g, '');
    const streakNum = (t.streak || '').replace(/\D/g, '');
    if (streakLetter) {
      const isWin = streakLetter === 'W';
      ctx.fillStyle = isWin ? 'rgba(16, 185, 129, 0.18)' : 'rgba(239, 68, 68, 0.18)';
      roundRect(ctx, cols.streak - 22, currentY + 23, 44, 26, 6);
      ctx.fill();
      ctx.fillStyle = isWin ? '#34d399' : '#f87171';
      ctx.font = '800 13px "Inter", sans-serif';
      ctx.fillText(`${streakLetter}${streakNum}`, cols.streak, currentY + 41);
    } else {
      ctx.fillStyle = '#4a5e7a';
      ctx.font = '400 16px "Inter", sans-serif';
      ctx.fillText('—', cols.streak, currentY + 44);
    }

    // Playoff Tag
    if (isPlayoff) {
      ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
      roundRect(ctx, cols.playoffs - 35, currentY + 25, 70, 22, 11);
      ctx.fill();
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.35)';
      ctx.lineWidth = 1;
      roundRect(ctx, cols.playoffs - 35, currentY + 25, 70, 22, 11);
      ctx.stroke();

      ctx.fillStyle = '#fbbf24';
      ctx.font = '700 10px "Inter", sans-serif';
      ctx.fillText('🏆 PLAYOFFS', cols.playoffs, currentY + 40);
    }

    // Línea divisoria de clasificación
    if (isPlayoffCutLine) {
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([8, 6]);
      ctx.beginPath();
      ctx.moveTo(50, currentY + rowHeight);
      ctx.lineTo(width - 50, currentY + rowHeight);
      ctx.stroke();
      ctx.setLineDash([]); // Reset
    }

    currentY += rowHeight;
  });

  // Footer marca de agua
  ctx.fillStyle = '#4a5e7a';
  ctx.font = '500 13px "Inter", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('The Gains League 2026 • Generado automáticamente en tiempo real con datos oficiales de Sleeper', width / 2, totalHeight - 25);

  return canvas.toDataURL('image/png');
}
