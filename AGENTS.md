# Agent Instructions

When modifying or expanding this project, adhere strictly to the following guidelines:

## Thematic Consistency
- **Tone:** The application is a secure, classified intelligence dossier. Use precise, tactical, and slightly ominous language appropriate for a global crisis resistance network.
- **No Marketing Fluff:** Avoid corporate marketing speak. When describing tools or features (like the "Water" AI suite), frame them as strategic assets for humanity's survival and post-scarcity transition.

## Design & Layout Strictures
- **Centralized Layout:** Ensure text alignment remains predominantly centered (`text-center`, `items-center`, `justify-center`), especially for headers, paragraphs, and list items, as requested by the project owner.
- **Dark UI:** Maintain the dark theme. Use `zinc-950` and `zinc-900` for backgrounds, with `zinc-400` and `zinc-200` for text.
- **Accents:** Use `red-500` and `red-600` for critical alerts, primary highlights, and borders to reinforce the "crisis" motif.
- **Typography:**
  - `Cinzel` (serif) for major section titles.
  - `JetBrains Mono` (or standard Tailwind `font-mono`) for tactical readouts, tags, subheaders, and technical specs.
  - Standard sans-serif for body copy.

## Component Architecture
- **Single-View Interface:** Maintain the current architecture where navigation is handled via a fixed bottom tab bar that switches out the active section component. Do not introduce traditional multi-page routing unless explicitly requested.
- **Animation:** Use `motion/react` for smooth transitions between tabs and subtle reveal animations for data cards. Keep animations purposeful (e.g., pulsing alerts, slow fade-ins).

## Scope Management
- Implement strictly what is asked. Do not add unsolicited tracking, complex backends, or unrelated features.
- When updating data (e.g., removing a token or changing a date), thoroughly search for all references and remove or modify them consistently across all components.
