import { localCardStorage } from '../src/storage.ts'

const setLocalStorage = (getItem: () => string | null) => {
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    value: { getItem, setItem() {}, removeItem() {} },
  })
}

setLocalStorage(() => '{invalid json')
const parseFailure = localCardStorage.load()
if (parseFailure.cards.length || !parseFailure.error) throw new Error('Expected a parse failure result with no cards.')

setLocalStorage(() => { throw new Error('Storage unavailable') })
const storageFailure = localCardStorage.load()
if (storageFailure.cards.length || !storageFailure.error) throw new Error('Expected a storage failure result with no cards.')

setLocalStorage(() => '[]')
const successfulLoad = localCardStorage.load()
if (successfulLoad.error || successfulLoad.cards.length) throw new Error('Expected a successful empty-card result.')

console.log('Storage load verifier passed: parse and storage failures return errors; successful loads return cards.')
