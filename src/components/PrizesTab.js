/**
 * Prizes & Payment Tab Component (The Gains League 2026)
 */

export function renderPrizesTab(teams = [], league = {}, isPreDraft = false) {
  const hasScores = teams.some(t => t.fpts > 0);
  const byFpts = [...teams].sort((a, b) => b.fpts - a.fpts);
  const top = byFpts[0];
  const bottom = byFpts[byFpts.length - 1];

  let weeklyAwardsHtml = '';
  if (hasScores) {
    weeklyAwardsHtml = `
    <div class="awards-row mb-1">
      <div class="award-card gold">
        <div class="award-chip">
          <span class="award-chip-icon">🥇</span>
          <div>
            <div class="award-chip-label">Mister Olympia</div>
            <div class="award-chip-sub">Máximo anotador de la semana — ¡Gana $300 MXN!</div>
          </div>
        </div>
        <div class="award-body">
          <img class="award-avatar" src="${top?.avatar || '/logo.jpg'}" alt="" onerror="this.src='/logo.jpg'">
          <div class="award-team">
            <div class="award-team-name">${top?.teamName || '—'}</div>
            <div class="award-mgr">${top?.displayName || ''}</div>
          </div>
          <div class="award-metric">
            <div class="award-metric-val">${top?.fpts?.toFixed(2) || '0.00'}</div>
            <div class="award-metric-lbl">Puntos FPs</div>
          </div>
        </div>
      </div>

      <div class="award-card red">
        <div class="award-chip">
          <span class="award-chip-icon">🤡</span>
          <div>
            <div class="award-chip-label">Se Saltó Día de Pierna</div>
            <div class="award-chip-sub">Menor anotador de la semana</div>
          </div>
        </div>
        <div class="award-body">
          <img class="award-avatar" src="${bottom?.avatar || '/logo.jpg'}" alt="" onerror="this.src='/logo.jpg'">
          <div class="award-team">
            <div class="award-team-name">${bottom?.teamName || '—'}</div>
            <div class="award-mgr">${bottom?.displayName || ''}</div>
          </div>
          <div class="award-metric">
            <div class="award-metric-val">${bottom?.fpts?.toFixed(2) || '0.00'}</div>
            <div class="award-metric-lbl">Puntos FPs</div>
          </div>
        </div>
        <div class="punishment-banner">
          🏋️‍♂️ <strong>Castigo Oficial:</strong> Grabar 50 burpees en video (antes del jueves) O invitar café/termo de proteína al ganador semanal ☕
        </div>
      </div>
    </div>`;
  } else {
    weeklyAwardsHtml = `
    <div class="card mb-1" style="background:var(--c-surface); border:1px solid var(--c-border); padding:1.25rem; text-align:center;">
      <div style="font-size:2.2rem; margin-bottom:.35rem;">🏆 🏋️‍♂️</div>
      <h3 style="font-family:var(--font-head); font-size:1.2rem; color:var(--gold-lt); text-transform:uppercase; margin-bottom:.3rem;">
        Premios y Castigos Semanales
      </h3>
      <p style="color:var(--c-muted); font-size:.85rem; max-width:560px; margin:0 auto; line-height:1.5;">
        Los premios de <strong>$300 MXN al máximo anotador</strong> y el <strong>castigo de los 50 burpees</strong> se activarán en vivo con los primeros partidos de la Semana 1.
      </p>
    </div>`;
  }

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
          12 equipos inscritos a $600 MXN generan una bolsa total acumulada de <strong>$7,200 MXN</strong> repartida entre el Campeón y las 14 semanas de temporada regular.
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
      <div class="prize-desc">$4,200 MXN en total. Se premia al mánager con más puntos cada jornada regular.</div>
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

  <!-- Premios y Castigos -->
  ${weeklyAwardsHtml}

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
          La cuota por mánager es de <strong>$600 MXN</strong>. <strong>No tiene que ser en un solo pago de $600</strong>; puedes ir abonando conforme te acomodes. Al realizar cualquier pago o abono, por favor <strong>envía tu captura de comprobante por WhatsApp a Brian</strong>.
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
