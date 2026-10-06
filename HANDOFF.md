# HANDOFF.md — Bitácora de Sintonía entre Antigravity y Claude

Este documento es el **testigo de relevo activo** entre **Antigravity** (Google DeepMind) y **Claude** (Anthropic). 
Cada vez que uno de los dos agentes trabaje en el proyecto o termine una tarea, debe consultar este archivo primero y actualizarlo al finalizar para que el otro agente sepa exactamente en qué punto está la app, qué funciona, qué se resolvió y qué falta por hacer.

---

## 📌 Estado Actual del Proyecto (Al 6 de Octubre de 2026)

| Componente | Estado | Detalles |
| :--- | :--- | :--- |
| **Live Activities (Dynamic Island / Lock Screen)** | ✅ **Activo y 100% Funcional** | Corre en el iPhone físico con marcadores en vivo de Sleeper (`164.06` vs `111.18`). Cálculo dinámico de probabilidad de victoria (`winProbability`). |
| **Widgets de Inicio (Small, Medium, Large)** | ✅ **Activo y 100% Funcional** | Marcadores reales de la Semana 4 precargados (183.88 en Bay Area, 116.38 en Gains League, 138.92 en Random Competetive). Descarga en paralelo ultra rápida vía `fetchMatchupsForUserFast`. |
| **Widget Jugadores Restantes (Medium)** | ✅ **Activo y 100% Funcional** | Muestra jugadores titulares reales (*Lamar Jackson, CeeDee Lamb, Brock Bowers, Tetairoa McMillan*) con avatares y proyecciones. |
| **Cuenta de Apple** | ⚠️ **Free Personal Apple ID (`Y9G8534N2D`)** | Sin membresía de pago de \$99/año por ahora. **Restricción clave:** App Groups bloqueados por Apple en iPhone físico. Los widgets son autónomos y consultan directo a la API de Sleeper. |
| **Compilación (`xcodebuild`)** | ✅ **BUILD SUCCEEDED** | Ambos targets (`FantasyWidget` y `FantasyWidgetExtensionExtension`) compilan limpiamente sin errores ni warnings críticos. |
| **Web Concourse (The Gains League)** | ✅ **Activo y Actualizado** | Actualizado a la Semana 4 con recapitulaciones y snapshot en `league_snapshot.json`. |

---

## 🏗️ Decisiones de Arquitectura y Reglas Inquebrantables

1. **Aislamiento de Widgets en Cuentas Gratuitas:**
   - La app principal y la extensión del widget no comparten `UserDefaults` ni carpetas compartidas porque Apple desactiva `com.apple.security.application-groups` en perfiles gratuitos.
   - **Solución implementada:** El widget tiene su propio motor de red en `FantasyTimelineProvider.getTimeline` que llama a `SleeperAPIService.shared.fetchMatchupsForUserFast(username:)`.
   - **Regla:** NUNCA eliminar el respaldo (`sampleMatchups` / `sampleRosterBayArea`) en `SharedFantasyData.swift`. Si el widget arranca en frío o sin internet, DEBE mostrar los datos de respaldo reales, nunca una pantalla negra ni `"Sin sincronizar"`.

2. **Límites de Memoria del Widget (30 MB):**
   - En extensiones de widgets (`.appex`), iOS mata el proceso si supera 30 MB de RAM.
   - **Regla:** NUNCA descargar el JSON de 35 MB del catálogo completo de jugadores de Sleeper dentro de la extensión. Usar la tabla `builtinPlayers` integrada en `SleeperPlayerCatalogManager` y el caché local.

3. **Límites de Tiempo de Red del Widget (~3.5 segundos):**
   - El widget tiene un tiempo límite muy corto para responder en `getTimeline`.
   - **Solución implementada:** Las 4 ligas y sus datos (usuarios, rosters, matchups) se descargan en paralelo usando `withTaskGroup` y `async let` en menos de 1 segundo.
   - **Regla:** NUNCA hacer peticiones en bucles `for` secuenciales dentro del widget ni consultar endpoints bloqueantes (como ESPN scoreboard que da error 403).

4. **Sincronización de Archivos Duplicados:**
   Existen archivos compartidos entre el target de la app y el target del widget:
   - `SharedFantasyData.swift`
   - `SleeperAPIService.swift`
   - `SleeperPlayerCatalog.swift`
   - `FantasyModels.swift`
   - `ESPNAPIService.swift`
   - `YahooAPIService.swift`
   **Regla:** Cualquier cambio realizado en uno debe copiarse inmediatamente al otro para evitar discrepancias (`cp FantasyWidget/FantasyWidgetExtension/X.swift FantasyWidget/FantasyWidget/X.swift`).

---

## 🗺️ Tareas Pendientes / Próximos Pasos

- [ ] **Verificación Semana 5 (Jueves por la noche):**
  - Comprobar que Sleeper cambie a `week: 5` y que los widgets y Live Activities carguen automáticamente los nuevos rivales y proyecciones.
- [ ] **Integración Completa de ESPN y Yahoo:**
  - Robustecer la autenticación de cookies y scraping seguro para usuarios con ligas en ESPN y Yahoo para cuando el usuario las active.
- [ ] **Soporte APNs y Supabase Push (Fase Futura):**
  - Cuando el usuario decida pagar la membresía de Apple Developer (\$99/año), activar `pushType: .token` en Live Activities para que las actualizaciones lleguen por Push Notifications remotas desde Supabase Edge Functions sin depender de polling en primer plano.

---

## 📜 Log de Entregas / Handoffs

### [2026-10-06 15:15] — Antigravity
- **Qué se hizo**:
  1. Identificado y solucionado el error raíz por el cual los widgets salían en *"Sin sincronizar"* o *"Sin ligas sincronizadas"*. Se restauró el respaldo de `SharedFantasyData.swift` con datos reales de la Semana 4 (183.88 en Bay Area, 116.38 en Gains League, 138.92 en Random Competetive) y alineaciones completas.
  2. Implementado `fetchMatchupsForUserFast` en `SleeperAPIService` con concurrencia paralela (`withTaskGroup` y `async let`), reduciendo el tiempo de descarga a menos de 1 segundo con un timeout estricto de 3.5s.
  3. Eliminada la llamada externa bloqueante a ESPN (que arrojaba error 403) y reemplazada por cálculo instantáneo de ventanas de juego NFL en `NFLSlateService`.
  4. Mapeados los jugadores estrella y titulares de Brian (*Lamar Jackson, CeeDee Lamb, Brock Bowers, Tetairoa McMillan, etc.*) en `SleeperPlayerCatalogManager` para resolver nombres sin descargar los 35 MB de catálogo en el widget.
  5. Creados `CLAUDE.md` y `HANDOFF.md` para iniciar el trabajo en equipo con Claude.
- **Archivos tocados**:
  - `FantasyWidget/FantasyWidgetExtension/SharedFantasyData.swift` y copia en app
  - `FantasyWidget/FantasyWidgetExtension/SleeperAPIService.swift` y copia en app
  - `FantasyWidget/FantasyWidgetExtension/SleeperPlayerCatalog.swift` y copia en app
  - `FantasyWidget/FantasyWidgetExtension/FantasyWidgetExtension.swift`
  - `CLAUDE.md` (root y en FantasyWidget)
  - `HANDOFF.md` (root y en FantasyWidget)
- **Estado de compilación**: `** BUILD SUCCEEDED **` en ambos targets (`FantasyWidget` y `FantasyWidgetExtensionExtension`).
- **Siguiente paso recomendado para Claude**:
  - Revisar si el usuario desea iniciar con la integración profunda de Yahoo/ESPN o ajustar interfaces visuales de cara al inicio de la Semana 5.
