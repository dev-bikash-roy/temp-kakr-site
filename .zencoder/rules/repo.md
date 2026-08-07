# Repository Overview

## Tech Stack
- **Framework**: Nuxt 3 (Vue 3)
- **Language**: TypeScript (SFC `script setup`)
- **Styling**: Tailwind CSS + @tailwindcss/typography
- **Nuxt Modules**: @nuxtjs/tailwindcss, @vueuse/nuxt, @nuxt/image
- **UI/Animation libs**: Swiper, AOS, GSAP, Framer Motion

## Project Structure (key paths)
- **app.vue**: Global layout shell; header/footer and `<NuxtPage />`
- **pages/**: Route-based views (e.g., `index.vue`, `about.vue`, etc.)
- **components/**: Reusable components (e.g., `ArticleSlider.vue`, `ParticleBackground.vue`)
- **assets/css/main.css**: Tailwind entry
- **public/**: Static assets (e.g., images)
- **nuxt.config.ts**: Nuxt configuration
- **tailwind.config.js**: Tailwind configuration

## Scripts
- **Dev**: `npm run dev`
- **Build**: `npm run build`
- **Generate (SSG)**: `npm run generate`
- **Preview**: `npm run preview`

## TypeScript/Editor Setup
- Root `tsconfig.json` extends `.nuxt/tsconfig.json`, which sets:
  - **moduleResolution**: `Bundler` (TypeScript 5+)
  - Aliases and paths for `vue`, `nuxt`, and app dirs
- Recommended editor setup:
  1. Install workspace TypeScript 5+ and `vue-tsc` as dev deps
     - `npm i -D typescript@^5 vue-tsc@^2`
  2. VS Code → "TypeScript: Select TypeScript Version" → Use Workspace Version
  3. Use **Vue (Volar)** with Take Over Mode enabled; disable Vetur
  4. Optional VS Code setting: `"typescript.tsdk": "node_modules/typescript/lib"`

## Common Issues and Fixes
- **Cannot find module 'vue'** in SFCs/TS files
  - Ensure `npm install` completed and `node_modules` exists
  - Use TypeScript 5+ (Nuxt uses `moduleResolution: "Bundler"`)
  - Switch VS Code to workspace TS and enable Volar Take Over Mode

## Node/Package Notes
- Use **Node 18+** (Nuxt 3 requirement)
- Dependencies are declared in `package.json`; `vue` is a transitive dep via `nuxt`

## Type Checking
- Install `vue-tsc` and run type-check without emit:
  - `npx vue-tsc --noEmit -p tsconfig.json`

## Tailwind
- `cssPath: '~/assets/css/main.css'` configured in `nuxt.config.ts`
- Purge content paths defined in `tailwind.config.js`

## Build Artifacts
- `.nuxt/` (build working dir) and `.output/` (generated output)

## Notes
- Avoid changing `moduleResolution` to `node`; keep `Bundler` for Nuxt 3
- Prefer auto-imported components and composables provided by Nuxt