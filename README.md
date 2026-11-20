# Nirmal Kumar – portfolio (React + TypeScript)

Vite + React 18 + TypeScript. Styling is the original `src/styles/global.css` from the HTML version.

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck
npm run build      # outputs dist/
```

## Structure

- `src/components/` – one component per section (Hero, About, Education, QualityFlow, Stack, SoftSkills, Projects, Interests, Favorites, Contact, Footer)
- `src/data/` – typed content: edit text, stages, tools and projects here, not in the components
- `src/hooks/` – `useIntroScroll`, `useReducedMotion`, `useSketch`
- `src/assets/` – local images; `index.ts` is the registry

## Notes

- Most stack logos load from the devicon CDN. If one fails to load, the tile shows two letters instead.
- Add a new project or stage by adding an object to `src/data/projects.ts` or `src/data/stages.ts`.
