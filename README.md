# 🏋️‍♂️ The Gains League | Fantasy Football Dashboard 🏈

Dashboard web interactivo y en tiempo real para **The Gains League**, sincronizado directamente con la API oficial de **Sleeper** (League ID: `1393074729073520640`).

---

## ⚡ Características
- 🏆 **Hub Principal:** Estado de la liga en vivo (*Pre-Draft / En Temporada*), conteo de miembros, presupuesto FAAB y plazas de playoffs.
- 🥇 **The Gains vs The Pains (Cuadro de Honor & Castigos):**
  - **Mister Olympia:** Máximo anotador semanal.
  - **Se Saltó Día de Pierna:** Menor anotador con recordatorio del castigo (50 burpees).
  - **Gym Rat Coach:** Mayor eficiencia de alineación.
- 📊 **Tabla de Posiciones Oficial:** Récords (G-E-P), Puntos a Favor, Puntos en Contra, Racha y FAAB disponible.
- ⚔️ **Centro de Enfrentamientos:** Marcadores semana a semana.
- 📈 **Mercado & Tendencias NFL:** Jugadores más fichados y cortados en tiempo real.
- 📜 **Reglamento & Dinámicas:** Resumen de bonos por 100/300 yds, pateadores decimales y dinámicas de gym.

---

## 🚀 Cómo Ejecutar Localmente

1. Clonar el repositorio o abrir la carpeta del proyecto:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. Compilar para producción:
```bash
npm run build
```

---

## ☁️ Cómo Desplegar en GitHub + Vercel

1. **Subir a GitHub:**
```bash
git add .
git commit -m "feat: initial release of The Gains League dashboard"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/the-gains-league.git
git push -u origin main
```

2. **Desplegar en Vercel:**
- Entra a [Vercel.com](https://vercel.com) y haz clic en **Add New Project**.
- Importa tu repositorio `the-gains-league`.
- Vercel detectará automáticamente **Vite** como framework preset.
- Haz clic en **Deploy** ¡y listo! Tendrás tu enlace público en segundos.
