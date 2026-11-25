# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — Next.js dev server (Next 16, React 19, Node 20.9+)
- `npm run build` — production build; this is the only check CI runs (`.github/workflows/ci.yaml`)
- `npm run lint` — ESLint flat config (`eslint-config-next` core-web-vitals + typescript)
- `npm test` — `node --test tests/*.test.mjs` (Node's built-in runner, no Jest/Vitest)
- Single file: `node --test tests/quiz-one.test.mjs`; single test: add `--test-name-pattern "<regex>"`

## Architecture

Wordcraft is a local-first vocabulary/IELTS practice app on the Next.js App Router. All learner data lives in browser `localStorage`; there is no database or auth.

- `app/` holds thin route shells that import client components from `src/`:
  - `/`, `/english/practice`, `/english/random` all render the same `src/App.tsx`, which branches on `usePathname()` and navigates with `router.push`. Adding behavior for one of these routes means editing `App.tsx`, not the page file.
  - `/english/quiz-1` → `src/features/quiz-one/` (fixed 66-word pack in `data.ts`, isolated from the editable deck). Pure quiz logic is in `logic.mjs` (plain JS + JSDoc) so tests can import it directly.
  - `/ielts-writing` → `src/features/ielts-writing/` (content in `data/*.ts`, UI in `components/`).
  - `app/api/ielts-writing/evaluate/route.ts` — the only server code. Optional AI feedback via the OpenAI Responses API, gated by server-only env vars `IELTS_AI_EVALUATION_ENABLED=true`, `OPENAI_API_KEY`, `IELTS_AI_MODEL` (never `NEXT_PUBLIC_`). Enforces 2,500 chars/paragraph, an in-memory 5 req/IP/hour limit, `store:false`, 1,200 max output tokens.
- `src/App.tsx` is a large single client component containing the English deck: built-in word packs, CSV/JSON import + validation, multiple-choice/typed quizzes, sentence ordering, verb-form cloze rounds, and pagination.
- localStorage keys are versioned and prefixed `kotoba-en-*` (cards `kotoba-en-cards-v1`, session, theme `kotoba-en-theme-v1` shared across all features) and `wordcraft-ielts-*`. Word packs are added by one-time migrations guarded by `kotoba-en-<pack>-v1-installed` marker keys, merging only words missing after case/whitespace normalization — follow this pattern when adding a pack so deleted words are not re-added. All storage access is wrapped in try/catch with a session-only fallback.
- The Japanese space is intentionally gated ("temporarily unavailable"). `src/storage.ts` (`kotoba-vn-cards-v1`), `src/pdfParser.ts`, and `scripts/` belong to that retained-but-unexposed Japanese importer; don't delete the legacy storage key's data.
- Leftovers from a prior Vite setup (`index.html`, `src/main.tsx`, `vite.config.ts`, `src/App.css`, `src/index.css`, `tsconfig.app.json`/`tsconfig.node.json`, `.oxlintrc.json`) are not used by the Next.js build.

## Tests

Most tests are source-text assertions: they `readFile` `.tsx`/`.ts`/`.css` sources and regex-match markup, class names, data fields, and theme CSS rules (e.g. `tests/sentence-practice.test.mjs` matches JSX inside `App.tsx`; `tests/quiz-one.test.mjs` checks `globals.css` and the CSS modules). Renaming classes, restructuring JSX, or rewording data can break them even when behavior is unchanged — run `npm test` after UI/CSS edits. `quiz-one.test.mjs` transpiles `data.ts` on the fly with the `typescript` package to import it.

## Deployment

Vercel git deployments are disabled (`vercel.json`). `.github/workflows/cd.yaml` runs after a successful CI run on a push to `main`: deploys a Vercel preview (staging), smoke-tests it, then `vercel promote`s it to production and smoke-tests `/` and `/ielts-writing`. Both jobs abort if `main` moved past the tested SHA.
