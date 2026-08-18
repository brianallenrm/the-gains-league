/**
 * Payment Info Card Component (Rendered below Draft Poll)
 */

export function renderPaymentSection() {
  return `
  <section class="payment-section">
    <div class="container">
      <div class="payment-main-card">
        <div class="payment-card-header">
          <div class="payment-badge-top">
            <span class="dot-pulse" style="background:#38bdf8;"></span>
            Cuota Oficial de Inscripción • $600 MXN
          </div>
          <h2 class="payment-header-title">💳 Datos para Depósito / Transferencia</h2>
          <p class="payment-header-sub">
            La cuota total es de <strong>$600 MXN</strong> por persona (12 jugadores = $7,200 MXN en premios). <strong>No tiene que ser en un solo pago de $600</strong>; puedes ir abonando conforme te acomodes. Al realizar cualquier pago o abono, <strong>envía tu comprobante por WhatsApp a Brian</strong>.
          </p>
        </div>

        <div class="payment-details-grid">
          <!-- Datos de la cuenta -->
          <div class="payment-account-meta">
            <div class="meta-item">
              <span class="meta-lbl">Titular de la Cuenta:</span>
              <span class="meta-val">Brian Allen Rivera</span>
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
    </div>
  </section>`;
}
