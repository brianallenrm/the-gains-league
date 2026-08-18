export function renderTrendingMarket(trendingAdds = [], trendingDrops = [], transactions = []) {
  const addItems = trendingAdds.map((item, idx) => `
    <li style="display:flex; justify-content:space-between; padding: 0.4rem 0; border-bottom: 1px solid rgba(255,255,255,0.04);">
      <span><strong style="color:var(--accent-green);">#${idx + 1}</strong> ID: ${item.player_id}</span>
      <span style="color:var(--text-muted); font-size:0.8rem;">+${item.count} altas</span>
    </li>
  `).join('') || '<li style="color:var(--text-muted);">Sin datos de altas</li>';

  const dropItems = trendingDrops.map((item, idx) => `
    <li style="display:flex; justify-content:space-between; padding: 0.4rem 0; border-bottom: 1px solid rgba(255,255,255,0.04);">
      <span><strong style="color:var(--accent-red);">#${idx + 1}</strong> ID: ${item.player_id}</span>
      <span style="color:var(--text-muted); font-size:0.8rem;">-${item.count} cortes</span>
    </li>
  `).join('') || '<li style="color:var(--text-muted);">Sin datos de bajas</li>';

  return `
    <div class="card">
      <div class="section-title">
        <span>📈 Mercado & Tendencias NFL (Últimas 24 Horas)</span>
        <span class="badge">Sleeper Trending API</span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
        <div style="background: var(--bg-subtle); padding: 1rem; border-radius: var(--radius-md); border: 1px solid rgba(16, 185, 129, 0.2);">
          <h4 style="font-family: var(--font-display); color: var(--accent-green); text-transform: uppercase; margin-bottom: 0.75rem;">
            🔥 Jugadores Más Fichados (+Adds)
          </h4>
          <ul style="list-style: none;">
            ${addItems}
          </ul>
        </div>

        <div style="background: var(--bg-subtle); padding: 1rem; border-radius: var(--radius-md); border: 1px solid rgba(239, 68, 68, 0.2);">
          <h4 style="font-family: var(--font-display); color: #f87171; text-transform: uppercase; margin-bottom: 0.75rem;">
            ❄️ Jugadores Más Cortados (-Drops)
          </h4>
          <ul style="list-style: none;">
            ${dropItems}
          </ul>
        </div>
      </div>
    </div>
  `;
}
