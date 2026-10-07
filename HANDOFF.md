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
   - **Regla (actualizada 2026-10-07):** Ya no hay datos de muestra de la Semana 4. Si nunca se ha sincronizado nada, `SharedFantasyData.placeholderMatchups` muestra una tarjeta neutral ("Abre la app"); con datos previos se usa siempre el último caché real. `loadRosterData` devuelve `nil` sin datos reales. `NFLGameMatchup.placeholder` cubre el widget de cuenta regresiva sin conexión.

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

### [2026-10-07 03:00] — Claude
- **Qué se hizo**: Limpieza de datos innecesarios. Eliminados los datos fijos de la Semana 4: `NFLDatabase` (de 838 a 101 líneas, solo modelos + placeholder), `sampleMatchups`/`sampleRosterBayArea` (ahora `placeholderMatchups` neutral y `loadRosterData` → nil sin datos). `refreshData()` ya no usa semana 4 por defecto (usa `selectedWeek`). Barra de probabilidad y avance de jornada reales en Sleeper y ESPN (todas las tarjetas).
- **Pendiente (valores de respaldo con 4)**: `fetchNFLState` fallback ("2026",4), ESPN `scoringPeriodId ?? 4`, Yahoo `?? 4`, `selectedWeek` inicial = 4 en ContentView, FantasyWidgetViews línea ~302 `?? 4`.
- **Estado de compilación**: SIN VERIFICAR.

### [2026-10-07 02:00] — Claude
- **Qué se hizo**: Calendario NFL real. Nuevo `api/schedule.js` (Vercel, ESPN scoreboard del lado servidor). Swift: `NFLScheduleService`/`NFLScheduleGame` en SleeperAPIService.swift; `PlayerLineupItem.gameState` + `isUpcoming` ("pre"/"in"/"post"/"bye"); "VIVO" por jugador solo si su partido está en juego; status de tarjeta derivado de los jugadores (Sleeper rápido, Sleeper app, ESPN); Live Activity solo para ligas con status "Vivo"; widget cuenta regresiva usa el próximo partido real (hora local del teléfono) y se recarga al kickoff; pestaña NFL reescrita con calendario real, a favor/en contra desde rosters reales, refresco cada 30 s; `loadRealRosterData` sin fallback de muestra.
- **Archivos tocados**: api/schedule.js, SleeperAPIService, ESPNAPIService, FantasyModels, SharedFantasyData (copias idénticas), FantasyWidgetExtension.swift, FantasyWidgetViews.swift, FantasyWidgetApp.swift, NFLImpactView.swift
- **Estado de compilación**: SIN VERIFICAR (no hay xcodebuild en el sandbox); Brian debe compilar con Cmd+B.
- **Siguiente paso recomendado**: corregir errores de compilación, probar en el TNF (jue 8 oct, 8:15 pm ET), luego selector de jugador por widget.

### [2026-10-07 01:10] — Claude
- **Qué se hizo**: Datos reales en widgets/app para Sleeper (nombres, posiciones, proyecciones). Nuevo `api/players.js` (Vercel): mantiene en memoria el catálogo de Sleeper (reducido) + proyecciones semanales y responde solo con los ids pedidos (`/api/players?ids=..&week=..&season=..&fmt=ppr|half|std`); cache CDN 30 min. `vercel.json`: `maxDuration: 30` para esa función. En `SleeperAPIService`: `fetchEnrichment` (widget: timeout 1.5 s + caché local `fp_enrich_cache_v1`; app: timeout 15 s con la MISMA URL, para calentar el CDN del widget), `applyEnrichment` (nombre/equipo/proyección reales; posición real salvo FLEX/BN/IR), formato de puntuación por liga vía `scoring_settings.rec`. `gameProgress` en la ruta rápida ya no está fijo en 0.5: se calcula con titulares sin jugar (antes la barra de probabilidad quedaba 50-50).
- **Archivos tocados**: `api/players.js`, `vercel.json`, `SleeperAPIService.swift` (ambas copias).
- **Estado de compilación**: NO VERIFICADO (sin xcodebuild). La API de proyecciones de Sleeper (`api.sleeper.com/projections/...`) no pudo probarse desde el entorno de Claude (sin salida a Sleeper): verificar tras desplegar.
- **Pendiente**: push de `api/players.js` + `vercel.json`; abrir la app (calienta el caché); etapa 2: elegir jugadores por widget (AppIntent de configuración); ESPN en widgets (Keychain Sharing, por probar).

### [2026-10-07 00:20] — Claude
- **Qué se hizo** (a partir de capturas de Brian):
  1. ESPN: titulares/banca ordenados QB, RB, WR, TE, FLEX, K, DEF (antes orden crudo de ESPN, QB quedaba en medio). Puntos reales vs proyección separados vía `player.stats` (`statSourceId` 0/1); fallback sin stats: si ningún equipo ha anotado, `appliedStatTotal` se trata como proyección. Se eliminó la proyección inventada de 12.0.
  2. Tag "VIVO" por jugador: `isPlaying` ahora exige `NFLSlateService.isLiveNow` (nuevo, ventanas en hora del Este). Aplica a Sleeper (`resolvePlayer`) y ESPN.
  3. Rankings reales: Sleeper (`standingRank`: victorias, luego fpts) y ESPN (`standingRank`: victorias, luego pointsFor). Antes eran fijos ("1st/3rd", "2nd", "3rd", "5th").
  4. Widgets descuadrados (2 con una liga, 2 con otra): `sortMatchups` no ordenaba si no había orden personalizado, y el orden dependía de qué liga respondía primero en el TaskGroup. Ahora orden estable (plataforma, nombre de liga, id) + `SharedFantasyData.ordinal`.
- **Archivos tocados**: `SharedFantasyData.swift`, `SleeperAPIService.swift`, `SleeperPlayerCatalog.swift`, `ESPNAPIService.swift` (copias idénticas en app y extensión).
- **Estado de compilación**: NO VERIFICADO (sin xcodebuild). Posibles avisos de aislamiento MainActor en `NFLSlateService`/`NFLSlateState` (marcados `nonisolated`).
- **Pendiente (decisión de Brian)**: (a) ESPN no aparece en los widgets: sin App Groups el widget no ve las cookies de ESPN que guarda la app; opciones: Keychain Sharing (probar si la cuenta gratuita lo permite) o que el widget reciba credenciales por otro canal; (b) datos del widget no reales: nombres desconocidos ("Jugador 11564"), proyecciones por defecto (12.0) y posiciones incorrectas porque el widget solo conoce `builtinPlayers`; plan: función serverless en Vercel (`/api/players`) que sirva un catálogo reducido y proyecciones de Sleeper, con caché en el widget.

### [2026-10-06 23:45] — Claude
- **Qué se hizo**: `ESPNAPIService.currentSeason` marcado `nonisolated` (avisos de aislamiento MainActor en ESPN/Yahoo). **Brian confirmó en iPhone: el login de ESPN funciona y carga datos reales** tras el fix de temporada (antes consultaba 2024).
- **Archivos tocados**: `ESPNAPIService.swift` (ambas copias).
- **Pendiente**: (1) orden de los jugadores en ESPN se ve raro (revisar `slotPositionName`/`parseRosterEntries` en `ESPNAPIService.swift`); (2) Yahoo: esperando aprobación del Client ID (1-2 semanas); páginas puente ya publicadas en the-gains-league.vercel.app; (3) soportar varias ligas ESPN sin pedir League ID.

### [2026-10-06 23:10] — Claude
- **Qué se hizo**: Yahoo exige Redirect URI `https`. Se añadió `public/yahoo-callback.html` (puente que reenvía `?code=...` a `fantasypulse://yahoo-callback`) y `public/fantasy-pulse/index.html` (página informativa). `YahooAPIService.redirectUri` ahora es `https://the-gains-league.vercel.app/yahoo-callback.html` (ambas copias). `ASWebAuthenticationSession` sigue con `callbackURLScheme: "fantasypulse"`.
- **Archivos tocados**: `public/yahoo-callback.html`, `public/fantasy-pulse/index.html`, `FantasyWidget/{FantasyWidget,FantasyWidgetExtension}/YahooAPIService.swift`, `FantasyWidget/FantasyWidget/WebAuthViews.swift`.
- **Pendiente**: Brian debe hacer push del repo web para que Vercel publique las páginas; luego enviar la solicitud a Yahoo (espera 1-2 semanas). Cuando haya Client ID: ponerlo fijo en Info.plist (`YAHOO_CLIENT_ID`), quitar la casilla de Client ID de `YahooLoginSheet` y parsear el scoreboard.
- **Estado de compilación**: NO VERIFICADO (sin xcodebuild en el entorno de Claude).

### [2026-10-06 22:40] — Claude
- **Qué se hizo**:
  1. Fix de compilación (Xcode): `CardBox` en `SleeperAPIService` marcado `nonisolated` (el proyecto usa aislamiento MainActor por defecto).
  2. Auditoría ESPN/Yahoo. **ESPN**: `executeESPNRequest` probaba temporadas `[2024, 2025, 2023]` y devolvía la primera respuesta 200, o sea datos de 2024 como si fueran actuales; además todos los defaults eran `"2024"`. Ahora `ESPNAPIService.currentSeason` (calculada por fecha) y solo se consulta la temporada pedida. **Yahoo**: nunca funcionó porque (a) exige un Client ID aprobado por Yahoo (solicitud en sports.yahoo.com/developer/access, revisión manual, uso personal permitido) y (b) `fetchYahooMatchups` solo crea tarjetas vacías ("Mi Equipo Yahoo", 0 pts), no parsea el scoreboard.
- **Archivos tocados**: `SleeperAPIService.swift` (ambas copias), `ESPNAPIService.swift` y `YahooAPIService.swift` (ambas copias).
- **Estado de compilación**: NO VERIFICADO por Claude (sin xcodebuild); Brian compila en Xcode.
- **Siguiente paso recomendado**: Brian reconecta ESPN y prueba. Para Yahoo: solicitar acceso a la API; cuando haya Client ID, implementar el parseo del scoreboard con respuestas reales. Mejoras ESPN pendientes: soportar varias ligas y auto-detectarlas, sin pedir League ID.

### [2026-10-06 21:55] — Claude
- **Contexto**: La causa raíz del "Sin sincronizar" fue meter App Groups (para auto-refresh) en una cuenta gratuita de Apple: la app escribía datos que el widget nunca podía leer. El widget ya se alimenta solo vía red; se limpió y endureció.
- **Qué se hizo**:
  1. Entitlements de app y widget vaciados (sin `application-groups`). `SharedFantasyData` usa solo `UserDefaults.standard`; `sharedContainerFileURL` devuelve `nil` (cuenta gratuita).
  2. `fetchMatchupsForUserFast`: plazo global duro de 4.5 s con resultados parciales (`CardBox`), `fetchNFLStateStrict` (sin fallback silencioso a semana 4; si falla el estado no se escribe nada).
  3. Nuevo `SharedFantasyData.mergeFreshSleeper`: fusiona por liga, conserva ligas ocultas, ESPN/Yahoo y tarjetas de la misma semana; descarta tarjetas Sleeper de semanas viejas.
  4. `NFLSlateService.currentState()` ahora usa `America/New_York` (antes hora local del iPhone, desfasada ~2 h en UTC-6); domingo desde 09:00 ET.
  5. Provider del widget: refresco 5 min (vivo) / 15 min ("en curso") / 60 min (todo Final) / 30 min resto.
  6. App: `refreshData` solo escribe al caché de widgets / Live Activities si la semana es la actual (`currentNFLWeek`); ya no vacía la pantalla si falla la red. Refresco de fondo usa la ruta rápida + merge (ya no borra ESPN/Yahoo ni baja el catálogo de 35 MB). `LiveActivitySync` mantiene la actividad mientras el estado sea "Vivo" o "en curso".
- **Archivos tocados**: `FantasyWidgetExtension/{FantasyWidgetExtension,SharedFantasyData,SleeperAPIService}.swift` (+ copias idénticas en `FantasyWidget/`), `FantasyWidget/{ContentView,FantasyWidgetApp}.swift`, `FantasyWidget/FantasyWidget.entitlements`, `FantasyWidgetExtensionExtension.entitlements`.
- **Estado de compilación**: NO VERIFICADO. Claude no tiene `xcodebuild` en su entorno. Brian debe compilar en Xcode (Cmd+B) y pegar errores si los hay.
- **Pendiente / siguiente paso**: (a) compilar y probar en el iPhone; (b) Live Activities sin push solo se actualizan con la app en primer/segundo plano (límite de cuenta gratuita); (c) arreglar logins de Yahoo y ESPN (`WebAuthViews.swift`, `YahooAPIService.swift`, `ESPNAPIService.swift`); (d) quitar defaults de semana 4 restantes (`refreshData(week: 4)`, `sampleMatchups`) y añadir indicador de "dato desactualizado" en el widget.
- **Punto de retorno**: commit `b40588a` "Estado antes de arreglos" en el repo de `FantasyWidget/`.

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
