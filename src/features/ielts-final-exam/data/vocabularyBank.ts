import { baseVocabularyWords, vocabularyTopics } from './vocabulary'
import { extraVocabularyWords } from './vocabularyExtra'
import type { VocabularyWord } from './vocabulary'

// The full vocabulary bank: the original 30 words plus the VLU slide list.
export const vocabularyWords: VocabularyWord[] = [...baseVocabularyWords, ...extraVocabularyWords]
export { vocabularyTopics }
