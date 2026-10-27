# Wordcraft — English vocabulary practice

A local-first vocabulary quiz built with Next.js App Router. The default page opens English practice; a visible Japanese entry remains disabled while that space is temporarily unavailable.

## IELTS Writing Academy

The `/ielts-writing` route provides seven sprint-delivered learning areas: sourced interactive charts, introduction/overview lessons, trend vocabulary, body-paragraph practice, mixed quizzes/progress, and a full Task 1 editor. Academy drafts/progress are stored in the current browser only; there is no account sync.

AI writing evaluation is optional and **off by default**. To enable it on a trusted server, configure `IELTS_AI_EVALUATION_ENABLED=true`, `OPENAI_API_KEY`, and `IELTS_AI_MODEL` as server-only environment variables. Never use a `NEXT_PUBLIC_` key. The server limits each paragraph to 2,500 characters, allows at most five requests per IP per rolling hour per process, and caps each provider response at 1,200 output tokens. Evaluation is sent only after the student presses the optional AI button; requests use the OpenAI Responses API with `store:false`. Usage may incur provider charges. The in-memory rate limit is per process and is not a substitute for a shared limiter on multi-instance hosting. AI feedback is educational, not an official IELTS score.

## Run locally

Prerequisite: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js. Production uses `npm run build` and `npm start`.

## English practice

### Quiz 1 revision pack

The dedicated `/english/quiz-1` route contains all 66 entries from the supplied “Tổng hợp từ vựng sau Quizz 1” Academic English 7 PDF. It is intentionally isolated from the editable browser deck. Learners can draw 10, 20, 30, 50, or a validated custom number of unique random terms, then answer with four distinct multiple-choice meanings or a normalized Vietnamese typed meaning. Each question allows two attempts: the first mistake keeps the answer hidden, while a correct response or second mistake reveals the Vietnamese meaning, PDF pronunciation, and an English example. The completion screen can replay the same set, draw a new random set, or return to setup.

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
- A separate one-time, additive migration adds 17 location and shopping vocabulary cards with Vietnamese meanings and example sentences. Common input typos are retained as deduplication aliases, while the quiz displays the corrected forms.
- After a meaning or verb-form answer is checked, feedback shows whether it was correct, the expected answer when needed, and the word's English example sentence.
- The library displays 10 words per page with accessible previous/next controls. Manual selections persist across pages, while random picks and quiz sessions use the full library. Adding or importing words returns the view to page 1; removing words safely clamps the view if the last page becomes shorter or disappears.

The Japanese space is a non-interactive “temporarily unavailable” card. Existing Japanese cards in the prior `kotoba-vn-cards-v1` storage key are not changed or deleted. The previous Japanese PDF importer and editing screens are retained in the source tree but are not exposed while the Japanese space is gated.

## Deployment

Deploy as a Next.js application (for example, use Vercel's Next.js preset). AI feedback remains unavailable until the server-only settings above are configured. Vocabulary, Academy progress, drafts, and saved submissions remain in the current browser and do not synchronize across devices.
