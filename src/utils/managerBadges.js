/**
 * Manager Honors & Badges Definition
 * Season 2 of The Gains League (2026)
 */

export function getManagerHonor(teamOrManager) {
  if (!teamOrManager) return null;
  const name = typeof teamOrManager === 'string' ? teamOrManager : (teamOrManager.displayName || teamOrManager.teamName || '');
  const rosterId = typeof teamOrManager === 'object' ? Number(teamOrManager.rosterId) : null;

  // Actual Campeón 2025 (DonaldTrumpGoat)
  if (name === 'DonaldTrumpGoat' || rosterId === 8) {
    return {
      title: '👑 Actual Campeón',
      shortTitle: '👑 Campeón',
      type: 'champion',
      desc: 'Campeón The Gains League 2025'
    };
  }

  // Subcampeón 2025 (Osante)
  if (name === 'Osante' || rosterId === 4) {
    return {
      title: '🥈 Subcampeón',
      shortTitle: '🥈 Subcampeón',
      type: 'runnerup',
      desc: 'Subcampeón The Gains League 2025'
    };
  }

  // Novatos / Primera vez en la liga (mariobarbieri, versace4444, Emi69Hb, DaniAlva08)
  if (name === 'mariobarbieri' || name === 'MALIK BUSINESS' || rosterId === 3) {
    return {
      title: '🌱 Novato',
      shortTitle: '🌱 Novato',
      type: 'rookie',
      desc: 'Debutante en The Gains League 2026'
    };
  }

  if (name === 'versace4444' || rosterId === 5) {
    return {
      title: '🌱 Novato',
      shortTitle: '🌱 Novato',
      type: 'rookie',
      desc: 'Debutante en The Gains League 2026'
    };
  }

  if (name === 'Emi69Hb' || rosterId === 11) {
    return {
      title: '🌱 Novato',
      shortTitle: '🌱 Novato',
      type: 'rookie',
      desc: 'Debutante en The Gains League 2026'
    };
  }

  if (name === 'DaniAlva08' || rosterId === 12) {
    return {
      title: '🌱 Novato',
      shortTitle: '🌱 Novato',
      type: 'rookie',
      desc: 'Debutante en The Gains League 2026'
    };
  }

  return null;
}

export function renderHonorBadgeHtml(honor) {
  if (!honor) return '';
  return `<span class="honor-badge honor-${honor.type}" title="${honor.desc}">${honor.title}</span>`;
}
