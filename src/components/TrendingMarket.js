export function renderMarket(trendingAdds, trendingDrops, transactions, teams) {
  const teamMap = Object.fromEntries(teams.map(t => [t.rosterId, t]));

  /* ── Trending ──────────────────────────────────────────── */
  function trendList(items, type) {
    if (!items.length) return `<li class="trending-item"><span class="text-muted">Sin datos disponibles</span></li>`;
    return items.map((item, i) => `
    <li class="trending-item">
      <span class="trending-item-rank">${i + 1}</span>
      <span class="trending-item-id">ID ${item.player_id}</span>
      <span class="trending-item-cnt">${type === 'add' ? `+${item.count} altas` : `-${item.count} bajas`}</span>
    </li>`).join('');
  }

  const trendingHtml = `
  <div class="card">
    <div class="section-head">
      <div class="section-title">📈 Tendencias NFL en 24h</div>
      <span class="section-badge">Sleeper API Live</span>
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
      if (tx.adds)  adds  = Object.entries(tx.adds).map(([pid]) => `Fichó: ${pid}`).join(', ');
      if (tx.drops) drops = Object.entries(tx.drops).map(([pid]) => `Cortó: ${pid}`).join(', ');

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
        <div class="section-title">💸 Transacciones Recientes</div>
        <span class="section-badge">Semana actual</span>
      </div>
      <div class="tx-list">${items}</div>
    </div>`;
  }

  return `${trendingHtml}${txHtml}`;
}
