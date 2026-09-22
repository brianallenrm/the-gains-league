/**
 * Prizes & Payment Tab Component (The Gains League 2026)
 */

export function renderPrizesTab(teams = [], league = {}, isPreDraft = false, weeklyMatchups = {}) {
  const teamMap = Object.fromEntries(teams.map(t => [t.rosterId, t]));

  // Historial Semanal Oficial
  const weeklyWinners = [
    {
      week: 1,
      topRosterId: 3,
      topPoints: 184.46,
      topTeamName: 'MALIK BUSINESS',
      topMgr: 'mariobarbieri / elchebu',
      bottomRosterId: 6,
      bottomPoints: 91.80,
      bottomTeamName: 'carloverditraconis',
      bottomMgr: 'carloverditraconis'
    },
    {
      week: 2,
      topRosterId: 11,
      topPoints: 167.22,
      topTeamName: 'Emi69Hb',
      topMgr: 'Emi69Hb',
      bottomRosterId: 3,
      bottomPoints: 68.92,
      bottomTeamName: 'MALIK BUSINESS',
      bottomMgr: 'mariobarbieri / elchebu'
    }
  ];

  return `
  <!-- Header de Premios -->
  <div class="card mb-1" style="background: linear-gradient(135deg, rgba(245,158,11,.15) 0%, rgba(16,185,129,.1) 100%); border: 1px solid var(--c-border-gold); padding: 1.5rem;">
    <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem; flex-wrap:wrap;">
      <div>
        <div style="font-size:.72rem; font-weight:700; text-transform:uppercase; letter-spacing:.06em; color:var(--gold-lt); margin-bottom:.25rem;">
          💰 Bolsa Oficial • The Gains League 2026
        </div>
        <h2 style="font-family:var(--font-head); font-size:1.6rem; color:#fff; text-transform:uppercase; letter-spacing:.02em; line-height:1.15;">
          Premios, Castigos &amp; Datos de Pago
        </h2>
        <p style="font-size:.86rem; color:var(--c-muted); margin-top:.35rem; max-width:640px; line-height:1.5;">
          Bolsa acumulada de <strong>$7,200 MXN</strong>. Ya se han disputado y repartido <strong>$600 MXN</strong> correspondientes a las Semanas 1 y 2.
        </p>
      </div>
      <div style="display:flex; flex-direction:column; gap:.5rem; align-items:flex-end;">
        <span style="background:rgba(245,158,11,.18); border:1px solid var(--c-border-gold); color:var(--gold-lt); font-family:var(--font-head); font-size:1.25rem; padding:.5rem 1.1rem; border-radius:var(--r-sm); font-weight:700;">
          💵 Bolsa: $7,200 MXN
        </span>
      </div>
    </div>
  </div>

  <!-- Desglose de la Bolsa -->
  <div class="prize-banner mb-1">
    <div class="prize-box weekly">
      <div class="prize-label">Premio Semanal (14 Semanas)</div>
      <div class="prize-amount">$300 <span style="font-size:1rem; font-weight:400; color:var(--c-muted);">/ sem</span></div>
      <div class="prize-desc">$4,200 MXN en total ($600 ya repartidos en Semanas 1 y 2). Al mánager con más puntos cada semana.</div>
    </div>
    <div class="prize-box champ">
      <div class="prize-label">Gran Campeón 🏆</div>
      <div class="prize-amount">$2,700 <span style="font-size:1rem; font-weight:400; color:var(--c-muted);">MXN</span></div>
      <div class="prize-desc">El ganador de la Gran Final se lleva la gloria, el trofeo y $2,700 en efectivo.</div>
    </div>
    <div class="prize-box total">
      <div class="prize-label">Subcampeón &amp; 3er Lugar</div>
      <div class="prize-amount">Honor &amp; Trofeo</div>
      <div class="prize-desc">Reconocimiento eterno en el muro de honor de The Gains League.</div>
    </div>
  </div>

  <!-- Podio de Premios Semana 2 (Última Concluida) -->
  <div class="card mb-1">
    <div class="section-head">
      <div>
        <div class="section-title">🥇 Resultados de la Semana 2 (Concluida)</div>
        <p style="color:var(--c-muted); font-size:.82rem; margin-top:.2rem;">
          Ganador de los $300 MXN y la humillación de ser el último de la jornada.
        </p>
      </div>
      <span class="section-badge">Semana 2 Oficial</span>
    </div>

    <div class="awards-row mb-1">
      <div class="award-card gold">
        <div class="award-chip">
          <span class="award-chip-icon">🥇</span>
          <div>
            <div class="award-chip-label">Mister Olympia • Semana 2</div>
            <div class="award-chip-sub">¡Ganador oficial de $300 MXN en efectivo!</div>
          </div>
        </div>
        <div class="award-body">
          <img class="award-avatar" src="${teamMap[11]?.avatar || '/logo.jpg'}" alt="" onerror="this.src='/logo.jpg'">
          <div class="award-team">
            <div class="award-team-name">${teamMap[11]?.teamName || 'Emi69Hb'}</div>
            <div class="award-mgr">${teamMap[11]?.displayName || 'Emi69Hb'} (🌱 Novato)</div>
          </div>
          <div class="award-metric">
            <div class="award-metric-val">167.22</div>
            <div class="award-metric-lbl">Puntos FPs</div>
          </div>
        </div>
      </div>

      <div class="award-card red">
        <div class="award-chip">
          <span class="award-chip-icon">🤡</span>
          <div>
            <div class="award-chip-label">Se Saltó Día de Pierna • Semana 2</div>
            <div class="award-chip-sub">Menor puntaje de la jornada</div>
          </div>
        </div>
        <div class="award-body">
          <img class="award-avatar" src="${teamMap[3]?.avatar || '/logo.jpg'}" alt="" onerror="this.src='/logo.jpg'">
          <div class="award-team">
            <div class="award-team-name">${teamMap[3]?.teamName || 'MALIK BUSINESS'}</div>
            <div class="award-mgr">${teamMap[3]?.displayName || 'mariobarbieri'} (🌱 Novato)</div>
          </div>
          <div class="award-metric">
            <div class="award-metric-val">68.92</div>
            <div class="award-metric-lbl">Puntos FPs</div>
          </div>
        </div>
        <div class="punishment-banner">
          🤡 <strong>La Humillación Semanal:</strong> El sótano de la liga esta semana le pertenece a MALIK BUSINESS (68.92 FPs). ¡A aguantar la carrilla en el grupo de WhatsApp! 😂📉
        </div>
      </div>
    </div>
  </div>

  <!-- Historial de Ganadores Semanales ($300 MXN) -->
  <div class="card mb-1">
    <div class="section-head">
      <div>
        <div class="section-title">📜 Historial de Ganadores Semanales ($300 MXN) &amp; El Sótano</div>
        <p style="color:var(--c-muted); font-size:.82rem; margin-top:.2rem;">
          Registro oficial semana a semana de quién se lleva el premio y quién se queda con la humillación de ser el último.
        </p>
      </div>
      <span class="section-badge">$600 MXN Repartidos</span>
    </div>

    <div class="table-scroll">
      <table>
        <thead>
          <tr>
            <th>Semana</th>
            <th>🥇 Mister Olympia ($300 MXN)</th>
            <th class="num text-center">Pts Ganador</th>
            <th>🤡 Se Saltó Pierna (El Sótano)</th>
            <th class="num text-center">Pts Sótano</th>
            <th class="text-center">Estado Premio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="font-weight:700; color:var(--gold-lt);">Semana 1</td>
            <td>
              <strong style="color:#fff;">MALIK BUSINESS</strong> <span style="color:var(--c-muted); font-size:.8rem;">(mariobarbieri)</span>
            </td>
            <td class="num text-center" style="color:#34d399; font-weight:700;">184.46 FPs</td>
            <td>
              <span style="color:#f87171;">carloverditraconis</span>
            </td>
            <td class="num text-center" style="color:var(--c-muted);">91.80 FPs</td>
            <td class="text-center"><span style="background:rgba(16,185,129,.15); color:#34d399; padding:.15rem .45rem; border-radius:var(--r-pill); font-size:.75rem; font-weight:700;">✅ $300 Asignados</span></td>
          </tr>
          <tr>
            <td style="font-weight:700; color:var(--gold-lt);">Semana 2</td>
            <td>
              <strong style="color:#fff;">Emi69Hb</strong> <span style="color:var(--c-muted); font-size:.8rem;">(Emi69Hb)</span>
            </td>
            <td class="num text-center" style="color:#34d399; font-weight:700;">167.22 FPs</td>
            <td>
              <span style="color:#f87171;">MALIK BUSINESS</span>
            </td>
            <td class="num text-center" style="color:var(--c-muted);">68.92 FPs</td>
            <td class="text-center"><span style="background:rgba(16,185,129,.15); color:#34d399; padding:.15rem .45rem; border-radius:var(--r-pill); font-size:.75rem; font-weight:700;">✅ $300 Asignados</span></td>
          </tr>
          <tr style="opacity:.6;">
            <td style="font-weight:700;">Semana 3</td>
            <td colspan="4" style="text-align:center; font-style:italic;">En juego este domingo • $300 MXN al máximo anotador</td>
            <td class="text-center"><span style="background:rgba(245,158,11,.15); color:var(--gold-lt); padding:.15rem .45rem; border-radius:var(--r-pill); font-size:.75rem; font-weight:700;">⏳ Por jugar</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Datos de Depósito / Transferencia -->
  <section class="payment-section" style="padding:0; margin-bottom:1.5rem;">
    <div class="payment-main-card">
      <div class="payment-card-header">
        <div class="payment-badge-top">
          <span class="dot-pulse" style="background:#38bdf8;"></span>
          Cuota Oficial de Inscripción • $600 MXN
        </div>
        <h2 class="payment-header-title">💳 Datos para Depósito / Transferencia</h2>
        <p class="payment-header-sub">
          La cuota por mánager es de <strong>$600 MXN</strong>. Recuerden que <strong>pueden ir abonando conforme se acomoden</strong>. Al realizar cualquier pago o abono, por favor <strong>envía tu captura de comprobante por WhatsApp a Brian</strong>.
        </p>
      </div>

      <div class="payment-details-grid">
        <!-- Datos de la cuenta -->
        <div class="payment-account-meta">
          <div class="meta-item">
            <span class="meta-lbl">Titular de la Cuenta:</span>
            <span class="meta-val" style="color:var(--gold-lt); font-size:1rem;">Brian Allen Rivera</span>
          </div>
          <div class="meta-item">
            <span class="meta-lbl">Banco / Institución:</span>
            <span class="meta-val highlight-bank">Mercado Pago</span>
          </div>
          <div class="meta-item">
            <span class="meta-lbl">Comprobante:</span>
            <span class="meta-val">Enviar captura a Brian por WhatsApp 📲</span>
          </div>
        </div>

        <!-- Tarjetas con botón copiar -->
        <div class="payment-cards-column">
          <!-- CLABE -->
          <div class="pay-box">
            <div class="pay-box-info">
              <span class="pay-box-lbl">CLABE Interbancaria (Transferencias SPEI)</span>
              <span class="pay-box-num">722969010537245844</span>
            </div>
            <button class="btn-copy-inline" data-copy="722969010537245844" title="Copiar CLABE">
              📋 Copiar
            </button>
          </div>

          <!-- Tarjeta Débito -->
          <div class="pay-box">
            <div class="pay-box-info">
              <span class="pay-box-lbl">Tarjeta Debit Mastercard® (Depósito OXXO / 7-Eleven / App)</span>
              <span class="pay-box-num">5428 7801 8665 9777</span>
            </div>
            <button class="btn-copy-inline" data-copy="5428780186659777" title="Copiar Tarjeta">
              📋 Copiar
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
