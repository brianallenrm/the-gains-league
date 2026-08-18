export function renderMarket(trendingAdds = [], trendingDrops = [], transactions = [], teams = []) {
  const teamMap = Object.fromEntries(teams.map(t => [t.rosterId, t]));

  /* ── Trending ──────────────────────────────────────────── */
  function trendList(items, type) {
    if (!items.length) {
      return `<li class="trending-item"><span class="text-muted">Cargando tendencias de la NFL...</span></li>`;
    }

    const posColors = {
      QB: '#ef4444',
      RB: '#38bdf8',
      WR: '#34d399',
      TE: '#f59e0b',
      K:  '#a78bfa',
      DEF:'#ec4899'
    };

    return items.map((item, i) => {
      const posColor = posColors[item.pos] || '#94a3b8';
      const formattedCount = item.count ? item.count.toLocaleString() : '0';

      return `
      <li class="trending-item">
        <span class="trending-item-rank">${i + 1}</span>
        <img class="trending-player-photo" src="${item.photo}" alt="${item.name}" onerror="this.style.display='none'">
        <div class="trending-item-info">
          <div class="trending-player-name">${item.name}</div>
          <div class="trending-player-sub">
            <span class="pos-badge" style="background:${posColor}20; color:${posColor}; border: 1px solid ${posColor}40;">
              ${item.pos}
            </span>
            <span class="team-badge">${item.team || 'FA'}</span>
          </div>
        </div>
        <span class="trending-item-cnt ${type === 'add' ? 'text-green' : 'text-red'}">
          ${type === 'add' ? `+${formattedCount}` : `-${formattedCount}`}
        </span>
      </li>`;
    }).join('');
  }

  const trendingHtml = `
  <div class="card">
    <div class="section-head">
      <div>
        <div class="section-title">📈 Radar de Mercado NFL (Últimas 24h)</div>
        <p style="color:var(--c-muted); font-size:.8rem; margin-top:.2rem;">
          Jugadores más fichados y cortados en vivo por millones de mánagers en todo Sleeper. Ideal para anticiparse en waivers.
        </p>
      </div>
      <span class="section-badge">Sleeper Live</span>
    </div>
    <div class="trending-cols">
      <div class="trending-box adds">
        <div class="trending-title">🔥 Más Fichados (+Adds)</div>
        <ul class="trending-list">${trendList(trendingAdds, 'add')}</ul>
      </div>
      <div class="trending-box drops">
        <div class="trending-title">❄️ Más Cortados (-Drops)</div>
        <ul class="trending-list">${trendList(trendingDrops, 'drop')}</ul>
      </div>
    </div>
  </div>`;

  /* ── Transactions ──────────────────────────────────────── */
  let txHtml = '';
  if (transactions.length > 0) {
    const typeIcon = { trade: '🔄', free_agent: '✅', waiver: '📋' };
    const typeLabel = { trade: 'Trade', free_agent: 'Agente Libre', waiver: 'Waiver' };
    const typeCss   = { trade: 'trade', free_agent: 'free', waiver: 'waiver' };

    const items = transactions.slice(0, 10).map(tx => {
      const icon  = typeIcon[tx.type] || '📄';
      const label = typeLabel[tx.type] || tx.type;
      const css   = typeCss[tx.type] || 'free';
      const rosterIds = tx.roster_ids || [];
      const teamNames = rosterIds.map(id => teamMap[id]?.teamName || `Equipo ${id}`).join(' ↔ ');
      const ts = tx.status_updated
        ? new Date(tx.status_updated).toLocaleDateString('es-MX', { month:'short', day:'numeric' })
        : '';

      let adds = '', drops = '';
      if (tx.adds)  adds  = Object.entries(tx.adds).map(([pid]) => `Fichó ID: ${pid}`).join(', ');
      if (tx.drops) drops = Object.entries(tx.drops).map(([pid]) => `Cortó ID: ${pid}`).join(', ');

      const faabNote = tx.settings?.waiver_bid !== undefined ? ` • Oferta FAAB: $${tx.settings.waiver_bid}` : '';

      return `
      <div class="tx-item">
        <div class="tx-type-icon ${css}">${icon}</div>
        <div class="tx-body">
          <div class="tx-title">${label} • ${teamNames}</div>
          ${adds  ? `<div class="tx-sub text-green">${adds}</div>`  : ''}
          ${drops ? `<div class="tx-sub text-red">${drops}</div>` : ''}
          <div class="tx-meta">${ts}${faabNote}</div>
        </div>
      </div>`;
    }).join('');

    txHtml = `
    <div class="card">
      <div class="section-head">
        <div class="section-title">💸 Transacciones de la Liga</div>
        <span class="section-badge">Semana actual</span>
      </div>
      <div class="tx-list">${items}</div>
    </div>`;
  }

  return `${trendingHtml}${txHtml}`;
}
