---
name: modern-web-ui
description: Master craftsmanship for modern web apps with React, Next.js, Tailwind CSS, Shadcn UI, and Framer Motion. Use whenever designing or refactoring visual web interfaces, landing pages, dashboards, and tools.
---

# Modern Web UI Master Skill

This skill guides the design and implementation of high-converting, visually stunning web applications (Linear, Stripe, Vercel caliber).

---

## 1. Aesthetic Archetypes

### A. The Linear / Raycast Aesthetic (Precision Dark Mode)
- **Backgrounds:** `#09090b` to `#0f1117` with subtle ambient radial gradients (`bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]`).
- **Cards:** `bg-zinc-900/60 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:border-white/25 hover:shadow-cyan-500/5`.
- **Top Highlights:** Inner border highlight on cards:
  ```tsx
  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 p-6 backdrop-blur-md">
    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    {/* Content */}
  </div>
  ```

### B. The Bento Grid Architecture
Use varied spans for storytelling:
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="md:col-span-2 rounded-3xl border border-border/40 bg-card/60 p-8 ...">
    {/* Primary Hero Feature */}
  </div>
  <div className="md:col-span-1 rounded-3xl border border-border/40 bg-card/60 p-8 ...">
    {/* Metric / Stat */}
  </div>
</div>
```

---

## 2. Micro-Interactions with Framer Motion (Free & Open Source)

### Smooth Card Entrance & Hover Easing
```tsx
import { motion } from "framer-motion";

export function PremiumCard({ title, description, badge }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
      whileTap={{ scale: 0.98 }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border/50 bg-background/50 p-6 shadow-sm hover:border-primary/40 hover:shadow-lg transition-colors"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary">
          {badge}
        </span>
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
```

---

## 3. Top Free Libraries & Tools to Leverage
1. **Shadcn UI & Radix Primitives:** Fully customizable, accessible, unstyled core logic.
2. **Lucide Icons:** Uniform 24x24 stroke icons with customizable stroke width (use `strokeWidth={1.75}` or `2` for clean look).
3. **Tailwind CSS v4:** Zero-config variables, OKLCH native color support.
4. **Aceternity UI & Magic UI:** Free copy-paste components for text shine, glowing borders, and particle backgrounds.
