import type { CardStorage, VocabularyCard } from './domain'

const KEY = 'kotoba-vn-cards-v1'
const failureMessage = (action: string) => `Local storage could not ${action}. Your current cards remain available in this tab.`

export const localCardStorage: CardStorage = {
  load() {
    try {
      const saved = localStorage.getItem(KEY)
      return { cards: saved ? JSON.parse(saved) as VocabularyCard[] : [], error: null }
    } catch {
      return { cards: [], error: failureMessage('load saved cards') }
    }
  },
  save(cards) {
    try {
      localStorage.setItem(KEY, JSON.stringify(cards))
      return null
    } catch {
      return failureMessage('save changes')
    }
  },
  clear() {
    try {
      localStorage.removeItem(KEY)
      return null
    } catch {
      return failureMessage('clear saved cards')
    }
  },
}
