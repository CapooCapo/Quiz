# Wordcraft — English vocabulary practice

A local-first vocabulary quiz built with Next.js App Router. The default page opens English practice; a visible Japanese entry remains disabled while that space is temporarily unavailable.

## Run locally

Prerequisite: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js. Production uses `npm run build` and `npm start`.

## English practice

- Add words manually or import JSON/CSV decks. Required headers/fields are `word` and `meaning`; optional `example` enables sentence ordering.
- Select the vocabulary to practise with a multiple-choice meaning quiz or typed-recall quiz.
- Choose words manually from the library, or click **Pick Random** to open a separate `/english/random` page. There you can sample 10, 20, 30, or 50 words from the complete English deck, or enter a custom positive count. Requests larger than the deck select all available words and explain the cap.
- Start a multiple-choice or typed-meaning round. Advancing past the last vocabulary word automatically starts a finite sentence-order round using only selected words that have examples. If there are no examples, the app explains that sentence practice was skipped and provides a finish path.
- Verb-inflection exercises are created only from records with all of: `clozeSentence` containing `___`, `verbBase`, and explicit `verbAnswer`. Optional `hint` provides a clue. JSON accepts `verbAnswer` as a string or array; CSV accepts pipe-separated alternatives, such as `went|had gone`. The quiz checks only the supplied expected forms; it does not infer conjugation from prose.
- After sentence matching, selected records with complete cloze fields continue into the bounded verb-form round, then a completion screen. Practice rounds retain the selected order (or sampled random order).
- The import panel offers downloadable JSON and CSV examples. Imports are validated as a whole and rejected with row-specific feedback if required fields or cloze fields are incomplete.
- `pronunciation` is optional for imported or manually added cards (for example, IPA); it is shown in the library and on vocabulary quiz prompts. JSON and CSV examples include the field.
- English vocabulary is stored separately in browser `localStorage` under `kotoba-en-cards-v1`.
- On first load, a versioned one-time migration adds a 10-word English starter pack (Vietnamese meanings and examples) only when a case/whitespace-normalized word is missing. Existing entries are kept as-is, and the migration marker prevents deleted pack words from reappearing after later reloads.
- Separate one-time, additive migrations add the 12 career vocabulary items and 18 general vocabulary items with Vietnamese meanings, pronunciation, and example sentences. They use independent version markers and alias-aware normalized deduplication, preserving existing cards and edits without re-adding deleted entries on later loads.
- After a meaning or verb-form answer is checked, feedback shows whether it was correct, the expected answer when needed, and the word's English example sentence.
- The library displays 10 words per page with accessible previous/next controls. Manual selections persist across pages, while random picks and quiz sessions use the full library. Adding or importing words returns the view to page 1; removing words safely clamps the view if the last page becomes shorter or disappears.

The Japanese space is a non-interactive “temporarily unavailable” card. Existing Japanese cards in the prior `kotoba-vn-cards-v1` storage key are not changed or deleted. The previous Japanese PDF importer and editing screens are retained in the source tree but are not exposed while the Japanese space is gated.

## Deployment

Deploy as a Next.js application (for example, use Vercel's Next.js preset). This app has no backend or required environment variables. Vocabulary remains in the current browser and does not synchronize across devices.
