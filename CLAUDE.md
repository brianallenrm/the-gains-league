# CLAUDE.md — Fantasy Pulse & The Gains League

Welcome, Claude! This file is your operational manual, architectural blueprint, and collaboration agreement for co-developing this codebase alongside **Antigravity** (Google DeepMind agent).

You and Antigravity share this repository and work as a tag team. Please follow the instructions below to ensure seamless collaboration without breaking builds, losing context, or regressing features.

---

## 1. Project Overview & Architecture

### What is this app?
- **Fantasy Pulse**: High-end iOS native Fantasy Football tracker with real-time Dynamic Island Live Activities, interactive Home Screen / Lock Screen widgets, and unified multi-league tracking (Sleeper, Yahoo, ESPN).
- **The Gains League**: Accompanying web concourse & dashboard (React + Vite + Tailwind v4 + Supabase) showcasing weekly recaps, trophies, standings, and automated league updates.
- **Primary User**: Brian Allen (`brianallenrm`).

### Directory Layout
```
/ (Root)
├── FantasyWidget/                  # Native iOS Xcode Project
│   ├── FantasyWidget/              # Target 1: Main iOS App (SwiftUI, Supabase, ActivityKit)
│   ├── FantasyWidgetExtension/     # Target 2: Widgets & Live Activity Extension
│   ├── FantasyWidget.xcodeproj     # Xcode project definition
│   └── CLAUDE.md & HANDOFF.md      # Symlinked/Synced context files
├── src/                            # Web App (React + Vite + Tailwind)
├── supabase/                       # Supabase Edge Functions & migrations
├── LEAGUE_STATUS.md                # Real-time state of The Gains League
├── HANDOFF.md                      # Shared living log between Claude & Antigravity
└── GEMINI.md                       # Antigravity visual principles & collaboration rules
```

---

## 2. Critical Technical Constraints (DO NOT BREAK)

### ⚠️ A. Free Apple Developer Account (Personal Team `Y9G8534N2D`)
- The user deploys directly to their physical iPhone using a **Free Personal Apple ID** (not yet enrolled in the \$99/yr program).
- **CRITICAL OS RESTRICTION:** On physical iOS hardware with a free provisioning profile, Apple **strips the App Groups capability** (`com.apple.security.application-groups`).
- **CONSEQUENCE:** The main app and the widget extension **cannot** share local memory (`UserDefaults(suiteName: "group.barm.FantasyWidget")` and App Group container URLs return `nil` or fail silently across processes).
- **SOLUTION ARCHITECTURE:**
  1. **Widgets (`FantasyWidgetExtension`)**: Fetch their own data directly from the public Sleeper API (`fetchMatchupsForUserFast`), cached locally in the extension's private `UserDefaults.standard`.
  2. **Live Activities (`ActivityKit`)**: Managed by the main app using the OS-level `Activity<FantasyLiveActivityAttributes>` pipe. This bypasses App Groups completely and works in real-time on Dynamic Island / Lock Screen.
  3. **Fallbacks**: Widgets MUST ALWAYS have rich, pre-seeded fallbacks with real user data (`SharedFantasyData.sampleMatchups`). NEVER return `[]` or `"Sin sincronizar"` on cold starts.

### ⚠️ B. WidgetKit Memory & Execution Limits
- **Memory limit:** 30 MB maximum. Exceeding this triggers an instant Jetsam process kill by iOS.
- **RULE:** NEVER download or parse the 35 MB official Sleeper player catalog JSON inside the widget extension (`Bundle.main.bundleURL.pathExtension == "appex"`). Instead, use `builtinPlayers` in `SleeperPlayerCatalogManager` and pre-cached entries.
- **Execution timeout:** Widget timeline updates have a ~3.5–5.0 second budget.
- **RULE:** ALWAYS fetch multiple leagues concurrently in parallel using `withTaskGroup` or `async let`. Never make sequential requests or call external APIs that can block or return 403 (e.g. ESPN scoreboard is blocked).

### ⚠️ C. Sleeper API
- Public, unauthenticated REST API at `https://api.sleeper.app/v1`.
- User username: `brianallenrm` (User ID: `1268709498130804736`).
- Active leagues:
  - `Bay Area League 2026` (`1389754933292568576`)
  - `The Gains League` (`1393074729073520640`)
  - `Random Competetive League` (`1403201401999384576`)

---

## 3. Collaboration Protocol: Claude & Antigravity

To ensure you and Antigravity stay in perfect sync:

1. **Check Status on Arrival:**
   - Always run `git status` and `git log -n 5 --oneline`.
   - Read [`HANDOFF.md`](file:///Users/BrianAllen/Documents/antigravity/radiant-kepler/HANDOFF.md) to understand the latest state, who worked on what, and what is currently pending.
2. **Build Verification Before Handoff:**
   - Always compile both iOS targets using the command below before declaring work complete. Never commit or finish a turn with broken syntax or unresolved symbols.
3. **Log Your Work in `HANDOFF.md`:**
   - Whenever you complete a feature, fix a bug, or pause your session, add an entry at the top of the **Log de Entregas / Handoffs** section in [`HANDOFF.md`](file:///Users/BrianAllen/Documents/antigravity/radiant-kepler/HANDOFF.md).
   - Format:
     ```markdown
     ### [YYYY-MM-DD HH:MM] — Claude
     - **Qué se hizo**: ...
     - **Archivos tocados**: ...
     - **Estado de compilación**: BUILD SUCCEEDED
     - **Siguiente paso recomendado**: ...
     ```
4. **Synchronize Shared Files:**
   - Notice that certain files exist in both `FantasyWidget/FantasyWidget/` and `FantasyWidget/FantasyWidgetExtension/`:
     - `SharedFantasyData.swift`
     - `SleeperAPIService.swift`
     - `SleeperPlayerCatalog.swift`
     - `FantasyModels.swift`
     - `ESPNAPIService.swift`
     - `YahooAPIService.swift`
   - If you modify one of these, **keep both copies identical**:
     `cp FantasyWidget/FantasyWidgetExtension/File.swift FantasyWidget/FantasyWidget/File.swift`

---

## 4. Key Commands

### Build iOS App (Both Targets)
```bash
xcodebuild -project FantasyWidget/FantasyWidget.xcodeproj -scheme FantasyWidget -destination "generic/platform=iOS" -derivedDataPath ./build/DerivedData build CODE_SIGNING_ALLOWED=NO
```

### Build Widget Extension Target Specifically
```bash
xcodebuild -project FantasyWidget/FantasyWidget.xcodeproj -scheme FantasyWidgetExtensionExtension -destination "generic/platform=iOS" -derivedDataPath ./build/DerivedData build CODE_SIGNING_ALLOWED=NO
```

### Build Web App
```bash
npm run build
```

### Run Web Development Server
```bash
npm run dev
```

---

## 5. Visual Design Principles (The Anti-Generic Rule)
Follow the visual standard defined in `GEMINI.md`:
- **Dark Mode Palette**: Deep obsidian (`#080a10` to `#0d1117`), never flat `#000000` or washed-out `#1f2937`.
- **Surfaces**: Subtle contrast cards with `Color.white.opacity(0.06)`, `backdrop-blur`, and layered borders.
- **Accents**: Vivid Electric Emerald (`#22c55e`), Electric Cyan (`#06b6d4`), Neon Violet, or Hyper Amber.
- **Touch Targets**: Minimum 44x44 pt. Continuous curves (`RoundedRectangle(cornerRadius: ..., style: .continuous)`).
- **Never produce generic AI slop**: Always use real typography hierarchy, monospaced digits for scores, and tactile feedback.
