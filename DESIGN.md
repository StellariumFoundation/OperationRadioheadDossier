# Design System

## Overview
The design language of the "Operation Radiohead" dossier is built around a "Tactical Dark Mode" aesthetic. It simulates a highly secure, encrypted terminal used by a resistance network.

## Color Palette
- **Backgrounds:** Deep, almost black grays.
  - Main Canvas: `bg-zinc-950`
  - Cards & Panels: `bg-zinc-900/40` to `bg-zinc-950/80` with backdrop blur.
- **Primary Text:** 
  - Body: `text-zinc-400`
  - High Contrast: `text-zinc-100` to `text-zinc-200`
- **Accents:**
  - **Red (Primary Alert):** `text-red-500`, `text-red-600`. Used for crisis indicators, active states, and critical warnings.
  - **Emerald (Secure/Support):** `text-emerald-500`. Used for verified sanctuaries and secure Monero transactions.
  - **Amber/Indigo (Secondary):** Used sparingly to differentiate tech modules or specific tabs.

## Typography
- **Headings (H1/H2):** `Cinzel`, Georgia, serif. Provides a stark, institutional, and historic weight to the crisis.
- **Technical/Tactical Elements:** `font-mono` (JetBrains Mono/monospace). Used for tags, small uppercase headers, data points, and technical specifications.
- **Body Text:** Standard sans-serif (Inter/system-ui), kept small (`text-xs` or `text-[11px]`) with relaxed line height (`leading-relaxed`) to resemble dense dossier reports.

## Layout & Spacing
- **Alignment:** Strongly favors centralized alignment (`text-center`, `flex-col items-center`) for a monolithic, broadcasting feel.
- **Containers:** Max width is generally constrained (`max-w-4xl` or `max-w-5xl`) to keep line lengths readable.
- **Borders:** Thin, subtle borders (`border-zinc-900`, `border-red-900/30`) are used extensively to define cards and separate data points without relying heavily on background color differences.

## Interactions & Animation
- **Hover States:** Subtle background lightening (`hover:bg-zinc-800/80`) or border highlighting.
- **Page Transitions:** Framer Motion is used to fade in and slide up (`y: 15` to `y: 0`) new sections when navigating.
- **Bottom Navigation:** A fixed bottom dock with icon-heavy, minimalist buttons. Hovering triggers subtle skew and scale animations to mimic a responsive tactical interface.
- **Scroll Progress:** A thin red line on the right edge tracks vertical scroll progress, adding to the specialized terminal feel.

## Background Effects
- **Audio Player:** Hidden/minimal background audio controls playing ambient crisis sounds.
- **Canvas Effects:** A fixed background canvas rendering subtle, drifting red particle effects (blood splatter/sparks motif) to set the mood.
