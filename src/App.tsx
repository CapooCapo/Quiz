'use client'

import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { usePathname, useRouter } from 'next/navigation'

type WordCard = { id: string; word: string; meaning: string; example: string; pronunciation?: string; aliases?: string[]; clozeSentence?: string; verbBase?: string; verbAnswer?: string[]; hint?: string }
type Mode = 'idle' | 'choice' | 'typing' | 'sentences' | 'verb' | 'complete'
type SelectionMode = 'manual' | 'random'
const STORAGE_KEY = 'kotoba-en-cards-v1'
const WORD_PACK_MARKER_KEY = 'kotoba-en-wildlife-pack-v1-installed'
const CAREER_PACK_MARKER_KEY = 'kotoba-en-career-pack-v1-installed'
const GENERAL_PACK_MARKER_KEY = 'kotoba-en-general-pack-v1-installed'
const PRACTICE_SESSION_KEY = 'kotoba-en-practice-session-v1'
const THEME_KEY = 'kotoba-en-theme-v1'
const WORDS_PER_PAGE = 10
const starterWords: Omit<WordCard, 'id'>[] = [
  { word: 'to unwind', meaning: 'thư giãn, xả hơi', example: 'I like to unwind with a book after work.' },
  { word: "to refresh one's mind", meaning: 'làm đầu óc tỉnh táo, sảng khoái lại', example: 'A short walk outside can refresh your mind.' },
  { word: 'passion', meaning: 'niềm đam mê', example: 'Her passion for wildlife conservation inspired her career.' },
  { word: 'leisure time', meaning: 'thời gian rảnh', example: 'He spends his leisure time hiking in the hills.' },
  { word: 'extinct', meaning: 'tuyệt chủng', example: 'The dodo became extinct in the seventeenth century.' },
  { word: 'conservation', meaning: 'sự bảo tồn', example: 'The reserve funds conservation projects to protect endangered animals.' },
  { word: 'reintroduction', meaning: 'sự tái thả, tái du nhập', example: 'The reintroduction of wolves helped restore the ecosystem.' },
  { word: 'habitat', meaning: 'môi trường sống', example: 'Wetlands provide a vital habitat for many bird species.' },
  { word: 'dam', meaning: 'đập', example: 'The new dam supplies water to nearby farms.' },
  { word: 'species', meaning: 'loài', example: 'This species can survive in very cold conditions.' },
]
const careerWords: Omit<WordCard, 'id'>[] = [
  { word: 'manufacturer', meaning: 'nhà sản xuất, nhà chế tạo', pronunciation: 'UK /ˌmæn.jəˈfæk.tʃər.ər/ · US /ˌmæn.jəˈfæk.tʃɚ.ɚ/', example: 'The manufacturer recalled the product after discovering a safety issue.' },
  { word: 'countercurrent', aliases: ['counter current'], meaning: 'dòng chảy ngược chiều', pronunciation: 'UK /ˌkaʊn.təˈkʌr.ənt/ · US /ˌkaʊn.tɚˈkɝː.ənt/', example: 'The fish use a countercurrent system to absorb oxygen from the water.' },
  { word: 'strategic', meaning: 'mang tính chiến lược', pronunciation: 'UK /strəˈtiː.dʒɪk/ · US /strəˈtiː.dʒɪk/', example: 'The company made a strategic decision to expand into new markets.' },
  { word: 'mound', meaning: 'gò đất; đống đất', pronunciation: 'UK /maʊnd/ · US /maʊnd/', example: 'The children built a small mound of sand beside the path.' },
  { word: 'configuration', meaning: 'cấu hình; cách bố trí', pronunciation: 'UK /kənˌfɪɡ.əˈreɪ.ʃən/ · US /kənˌfɪɡ.jəˈreɪ.ʃən/', example: 'This room configuration gives the team more space to collaborate.' },
  { word: 'secrete', meaning: 'tiết ra, bài tiết (động từ)', pronunciation: 'UK /sɪˈkriːt/ · US /sɪˈkriːt/', example: 'The glands secrete hormones into the bloodstream.' },
  { word: 'well-paid', meaning: 'được trả lương cao', pronunciation: 'UK /ˌwelˈpeɪd/ · US /ˌwelˈpeɪd/', example: 'She hopes to find a well-paid job in engineering.' },
  { word: 'self-employed', meaning: 'tự làm chủ; làm việc tự do', pronunciation: 'UK /ˌself.ɪmˈplɔɪd/ · US /ˌself.ɪmˈplɔɪd/', example: 'He became self-employed and started his own design studio.' },
  { word: 'qualified', meaning: 'đủ trình độ; có chuyên môn', pronunciation: 'UK /ˈkwɒl.ɪ.faɪd/ · US /ˈkwɑː.lə.faɪd/', example: 'Only qualified technicians are allowed to repair this equipment.' },
  { word: 'heavy workload', meaning: 'khối lượng công việc lớn', pronunciation: 'UK /ˌhev.i ˈwɜːk.ləʊd/ · US /ˌhev.i ˈwɝːk.loʊd/', example: 'The team managed a heavy workload by planning the week carefully.' },
  { word: 'be in charge of + V-ing', meaning: 'chịu trách nhiệm phụ trách việc gì', pronunciation: '/biː ɪn ˈtʃɑːdʒ əv/ + verb-ing', example: 'She is in charge of training new employees.' },
  { word: 'be/get promoted', aliases: ['be-get-promoted'], meaning: 'được thăng chức', pronunciation: 'UK /biː ɡet prəˈməʊ.tɪd/ · US /biː ɡet prəˈmoʊ.t̬ɪd/', example: 'He hopes to get promoted after leading the new project.' },
]
const generalWords: Omit<WordCard, 'id'>[] = [
  { word: 'demerits', meaning: 'nhược điểm; điểm trừ', pronunciation: '/ˌdiːˈmer.ɪts/', example: 'One of the main demerits of the plan is its high cost.' },
  { word: 'merits', meaning: 'ưu điểm; giá trị', pronunciation: '/ˈmer.ɪts/', example: 'We should consider the merits of both proposals.' },
  { word: 'upsides', meaning: 'mặt tích cực; lợi ích', pronunciation: '/ˈʌp.saɪdz/', example: 'One of the upsides of working from home is the shorter commute.' },
  { word: 'downsides', meaning: 'mặt bất lợi; nhược điểm', pronunciation: '/ˈdaʊn.saɪdz/', example: 'There are a few downsides to living far from the city centre.' },
  { word: 'positive aspects', meaning: 'những khía cạnh tích cực', pronunciation: 'UK /ˈpɒz.ə.tɪv ˈæs.pekts/ · US /ˈpɑːz.ə.tɪv ˈæs.pekts/', example: 'The report highlights the positive aspects of the new policy.' },
  { word: 'overshadow', meaning: 'làm lu mờ; lấn át', pronunciation: 'UK /ˌəʊ.vəˈʃæd.əʊ/ · US /ˌoʊ.vɚˈʃæd.oʊ/', example: 'The unexpected delay overshadowed an otherwise successful launch.' },
  { word: 'extraterrestrial', meaning: 'ngoài Trái Đất; sinh vật ngoài hành tinh', pronunciation: '/ˌek.strə.təˈres.tri.əl/', example: 'Scientists are searching for signs of extraterrestrial life.' },
  { word: 'capsule', meaning: 'viên nang; khoang nhỏ', pronunciation: 'UK /ˈkæp.sjuːl/ · US /ˈkæp.səl/', example: 'The astronaut returned to Earth in a small capsule.' },
  { word: 'inscription', meaning: 'dòng chữ được khắc', pronunciation: '/ɪnˈskrɪp.ʃən/', example: 'An inscription above the doorway records when the building was completed.' },
  { word: 'diverse', meaning: 'đa dạng', pronunciation: 'UK /daɪˈvɜːs/ · US /dɪˈvɝːs/', example: 'The course attracts students from diverse backgrounds.' },
  { word: 'compilations', meaning: 'các bộ sưu tập; tuyển tập', pronunciation: 'UK /ˌkɒm.pɪˈleɪ.ʃənz/ · US /ˌkɑːm.pəˈleɪ.ʃənz/', example: 'The library has several compilations of traditional folk songs.' },
  { word: 'encounter', meaning: 'cuộc gặp; gặp phải', pronunciation: 'UK /ɪnˈkaʊn.tər/ · US /ɪnˈkaʊn.t̬ɚ/', example: 'During the hike, we had an unexpected encounter with a deer.' },
  { word: 'infinitesimal', meaning: 'vô cùng nhỏ; cực nhỏ', pronunciation: 'UK /ˌɪn.fɪ.nɪˈtes.ɪ.məl/ · US /ˌɪn.fɪ.nəˈtes.ə.məl/', example: 'The measurement changed by an infinitesimal amount.' },
  { word: 'athlete', meaning: 'vận động viên', pronunciation: 'UK /ˈæθ.liːt/ · US /ˈæθ.liːt/', example: 'The athlete trained every morning before school.' },
  { word: 'keep-fit enthusiast', meaning: 'người đam mê rèn luyện thể chất', pronunciation: '/ˌkiːp ˈfɪt ɪnˈθjuː.zi.æst/', example: 'As a keep-fit enthusiast, Minh cycles to work several times a week.' },
  { word: 'enthusiast', meaning: 'người say mê; người đam mê', pronunciation: 'UK /ɪnˈθjuː.zi.æst/ · US /ɪnˈθuː.zi.æst/', example: 'A photography enthusiast, she spends weekends capturing wildlife.' },
  { word: 'to get lean', meaning: 'trở nên săn chắc, giảm mỡ', pronunciation: '/ɡet liːn/', example: 'He follows a balanced diet and strength program to get lean.' },
  { word: 'to get rid of negative energies', meaning: 'loại bỏ những năng lượng tiêu cực', pronunciation: '/ɡet ˈrɪd əv ˈneɡ.ə.tɪv ˈen.ə.dʒiz/', example: 'She goes for a quiet walk to get rid of negative energies after a stressful day.' },
]
const normalizeWord = (word: string) => word.toLocaleLowerCase().trim().replace(/\s+/g, ' ')
const clean = (text: string) => text.toLocaleLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ').trim()
const cleanSentence = (text: string) => text.toLocaleLowerCase().replace(/\s+([,.!?;:])/g, '$1').replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ').trim()
const makeId = () => typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`

const parseCsv = (text: string): string[][] => {
  const rows: string[][] = []
  let row: string[] = [], cell = '', quoted = false
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i]
    if (char === '"' && quoted && text[i + 1] === '"') { cell += '"'; i += 1 }
    else if (char === '"') quoted = !quoted
    else if (char === ',' && !quoted) { row.push(cell); cell = '' }
    else if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && text[i + 1] === '\n') i += 1
      row.push(cell); if (row.some((item) => item.trim())) rows.push(row)
      row = []; cell = ''
    } else cell += char
  }
  if (quoted) throw new Error('The CSV has an unclosed quote. Check quoted cells and try again.')
  row.push(cell); if (row.some((item) => item.trim())) rows.push(row)
  return rows
}

const normalizeRows = (rows: Record<string, unknown>[]) => {
  const cards: WordCard[] = [], errors: string[] = []
  rows.forEach((source, index) => {
    const rowNumber = index + 1
    const stringFields = ['word', 'meaning', 'example', 'pronunciation', 'clozesentence', 'verbbase', 'hint']
    const invalidFields = stringFields.filter((key) => source[key] != null && typeof source[key] !== 'string')
    for (const key of ['verbanswer', 'verbanswers']) {
      const answerValue = source[key]
      if (answerValue == null) continue
      if (typeof answerValue !== 'string' && !Array.isArray(answerValue)) invalidFields.push(key)
      else if (Array.isArray(answerValue) && answerValue.some((item) => typeof item !== 'string')) invalidFields.push(key)
    }
    if (invalidFields.length) {
      errors.push(`Row ${rowNumber}: ${invalidFields.join(', ')} must be strings${invalidFields.some((key) => key === 'verbanswer' || key === 'verbanswers') ? ' (or an array of strings for verbAnswer)' : ''}.`)
      return
    }
    const value = (key: string) => (typeof source[key] === 'string' ? source[key] as string : '').trim()
    const word = value('word'), meaning = value('meaning'), example = value('example')
    const pronunciation = value('pronunciation')
    const clozeSentence = value('clozesentence')
    const verbBase = value('verbbase')
    const answerSource = source['verbanswer'] ?? source['verbanswers'] ?? ''
    const verbAnswer = Array.isArray(answerSource)
      ? answerSource.map((answer) => (answer as string).trim()).filter(Boolean)
      : String(answerSource).split('|').map((answer) => answer.trim()).filter(Boolean)
    const hint = value('hint')
    if (!word || !meaning) { errors.push(`Row ${rowNumber}: word and meaning are required.`); return }
    const hasClozeData = !!(clozeSentence || verbBase || verbAnswer.length)
    if (hasClozeData && (!clozeSentence.includes('___') || !verbBase || !verbAnswer.length)) {
      errors.push(`Row ${rowNumber} (${word}): clozeSentence must include ___, with verbBase and at least one verbAnswer.`); return
    }
    cards.push({ id: makeId(), word, meaning, example, ...(pronunciation ? { pronunciation } : {}), ...(hasClozeData ? { clozeSentence, verbBase, verbAnswer, hint } : {}) })
  })
  return { cards, errors }
}

const importFile = async (file: File) => {
  const text = await file.text()
  let rows: Record<string, unknown>[]
  if (file.name.toLowerCase().endsWith('.csv') || file.type === 'text/csv') {
    const [headerRow, ...dataRows] = parseCsv(text)
    if (!headerRow?.length) throw new Error('The CSV is empty. Add a header row and at least one word.')
    const headers = headerRow.map((header) => header.replace(/^\uFEFF/, '').trim().toLowerCase())
    if (!headers.includes('word') || !headers.includes('meaning')) throw new Error('CSV headers must include word and meaning.')
    rows = dataRows.map((values) => Object.fromEntries(headers.map((header, i) => [header, values[i] ?? ''])))
  } else {
    const parsed: unknown = JSON.parse(text)
    const list = Array.isArray(parsed) ? parsed : parsed && typeof parsed === 'object' && 'cards' in parsed && Array.isArray((parsed as { cards: unknown }).cards) ? (parsed as { cards: unknown[] }).cards : null
    if (!list) throw new Error('JSON must be an array of word objects, or an object with a cards array.')
    rows = list.map((item) => {
      if (!item || typeof item !== 'object' || Array.isArray(item)) return {}
      return Object.fromEntries(Object.entries(item).map(([key, value]) => [key.toLowerCase(), value]))
    })
  }
  return normalizeRows(rows)
}

const downloadTemplate = (format: 'json' | 'csv') => {
  const sample = [{ word: 'go', meaning: 'move from one place to another', pronunciation: '/ɡəʊ/', example: 'I go to work by bus.', clozeSentence: 'Yesterday, I ___ to work by bus.', verbBase: 'go', verbAnswer: ['went'], hint: 'Simple past' }]
  const content = format === 'json'
    ? JSON.stringify(sample, null, 2)
    : 'word,meaning,pronunciation,example,clozeSentence,verbBase,verbAnswer,hint\n"go","move from one place to another","/ɡəʊ/","I go to work by bus.","Yesterday, I ___ to work by bus.","go","went","Simple past"'
  const blob = new Blob([content], { type: format === 'json' ? 'application/json' : 'text/csv' })
  const url = URL.createObjectURL(blob); const link = document.createElement('a')
  link.href = url; link.download = `wordcraft-template.${format}`; link.click(); URL.revokeObjectURL(url)
}

export default function App() {
  const [cards, setCards] = useState<WordCard[]>([])
  const [loaded, setLoaded] = useState(false)
  const [storageReady, setStorageReady] = useState(false)
  const [mode, setMode] = useState<Mode>('idle')
  const [selected, setSelected] = useState<string[]>([])
  const [sessionCards, setSessionCards] = useState<WordCard[]>([])
  const [sentenceCards, setSentenceCards] = useState<WordCard[]>([])
  const [flowMessage, setFlowMessage] = useState('')
  const [libraryPage, setLibraryPage] = useState(1)
  const [selectionMode, setSelectionMode] = useState<SelectionMode>('manual')
  const [randomCount, setRandomCount] = useState('10')
  const [selectionMessage, setSelectionMessage] = useState('')
  const [importMessage, setImportMessage] = useState('')
  const [importError, setImportError] = useState('')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [newWord, setNewWord] = useState('')
  const [newMeaning, setNewMeaning] = useState('')
  const [newPronunciation, setNewPronunciation] = useState('')
  const [newExample, setNewExample] = useState('')
  const [sentenceTokens, setSentenceTokens] = useState<string[]>([])
  const [sentenceAnswer, setSentenceAnswer] = useState<string[]>([])
  const [sentenceWord, setSentenceWord] = useState('')
  const [sentenceExpected, setSentenceExpected] = useState('')
  const [sentenceCheck, setSentenceCheck] = useState<boolean | null>(null)
  const [choiceOrder, setChoiceOrder] = useState<string[]>([])
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [practiceRecoveryMessage, setPracticeRecoveryMessage] = useState('Loading your English practice…')
  const pathname = usePathname()
  const router = useRouter()
  const isRandomPicker = pathname === '/english/random'
  const isPracticePage = pathname === '/english/practice'

  useEffect(() => {
    let existingCards: WordCard[] = []
    let canPersist = true
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed: unknown = JSON.parse(raw)
        if (Array.isArray(parsed)) existingCards = parsed as WordCard[]
        else canPersist = false
      }
    } catch { canPersist = false }
    let mergedCards = existingCards
    const installPack = (markerKey: string, words: Omit<WordCard, 'id'>[]) => {
      if (localStorage.getItem(markerKey) === 'v1') return
      const existingWords = new Set(mergedCards.flatMap((card) => [
        ...(typeof card.word === 'string' ? [normalizeWord(card.word)] : []),
        ...(Array.isArray(card.aliases) ? card.aliases.filter((alias): alias is string => typeof alias === 'string').map(normalizeWord) : []),
      ]))
      const missingWords = words.filter((card) => ![card.word, ...(card.aliases ?? [])].some((word) => existingWords.has(normalizeWord(word))))
        .map((card) => ({ ...card, id: makeId() }))
      mergedCards = [...mergedCards, ...missingWords]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mergedCards))
      localStorage.setItem(markerKey, 'v1')
    }
    try {
      if (canPersist) {
        installPack(WORD_PACK_MARKER_KEY, starterWords)
        installPack(CAREER_PACK_MARKER_KEY, careerWords)
        installPack(GENERAL_PACK_MARKER_KEY, generalWords)
      }
    } catch { /* Keep current cards available; a failed migration is safe to retry. */ }
    setCards(mergedCards)
    setStorageReady(canPersist)
    setLoaded(true)
  }, [])
  useEffect(() => { if (loaded && storageReady) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cards)) } catch { /* Session-only fallback. */ } } }, [cards, loaded, storageReady])
  useEffect(() => {
    let saved: string | null = null
    try { saved = localStorage.getItem(THEME_KEY) } catch { /* Use system preference. */ }
    const preference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    setTheme(saved === 'dark' || saved === 'light' ? saved : preference)
  }, [])
  useEffect(() => { document.documentElement.dataset.theme = theme }, [theme])
  useEffect(() => {
    if (!isPracticePage) return
    if (!loaded) {
      setPracticeRecoveryMessage('Loading your English practice…')
      return
    }
    if (!storageReady) {
      setMode('idle')
      setPracticeRecoveryMessage('Your vocabulary could not be loaded, so this practice session cannot be restored.')
      return
    }
    try {
      const raw = sessionStorage.getItem(PRACTICE_SESSION_KEY)
      const saved = raw ? JSON.parse(raw) as { ids?: unknown; mode?: unknown } : null
      const savedIds = saved?.ids
      const ids = Array.isArray(savedIds) ? savedIds.filter((id): id is string => typeof id === 'string') : []
      const deck = ids.map((id) => cards.find((card) => card.id === id)).filter((card): card is WordCard => !!card)
      if (!Array.isArray(savedIds) || ids.length !== savedIds.length || !deck.length || deck.length !== ids.length || (saved?.mode !== 'choice' && saved?.mode !== 'typing')) {
        setMode('idle')
        setPracticeRecoveryMessage('This practice session is missing or out of date. Return to English practice and choose a deck again.')
        return
      }
      setSelected(deck.map((card) => card.id)); setSessionCards(deck); setSentenceCards(deck.filter((card) => card.example.trim()))
      setMode(saved.mode); setQuestionIndex(0); setScore(0); setAnswer(''); setFeedback(null); setSentenceAnswer([]); setSentenceCheck(null)
      if (saved.mode === 'choice') prepareChoices(0, deck)
      setPracticeRecoveryMessage('')
    } catch {
      setMode('idle')
      setPracticeRecoveryMessage('This practice session could not be restored. Return to English practice and choose a deck again.')
    }
  // Restore saved deck after client-side navigation or refresh.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, storageReady, isPracticePage])

  const activeCards = useMemo(() => selected.map((id) => cards.find((card) => card.id === id)).filter((card): card is WordCard => !!card), [cards, selected])
  const pageCount = Math.max(1, Math.ceil(cards.length / WORDS_PER_PAGE))
  const visiblePage = Math.min(libraryPage, pageCount)
  const visibleCards = cards.slice((visiblePage - 1) * WORDS_PER_PAGE, visiblePage * WORDS_PER_PAGE)
  const verbCards = useMemo(() => sessionCards.filter((card) => card.clozeSentence?.includes('___') && card.verbBase?.trim() && card.verbAnswer?.length), [sessionCards])
  const current = sessionCards[questionIndex]
  const currentVerb = verbCards[questionIndex]
  const addWord = (event: FormEvent) => {
    event.preventDefault()
    if (!newWord.trim() || !newMeaning.trim()) return
    const card: WordCard = { id: makeId(), word: newWord.trim(), meaning: newMeaning.trim(), example: newExample.trim(), ...(newPronunciation.trim() ? { pronunciation: newPronunciation.trim() } : {}) }
    setCards((items) => [card, ...items]); setSelected((items) => [...items, card.id])
    setLibraryPage(1)
    setNewWord(''); setNewMeaning(''); setNewExample(''); setNewPronunciation('')
  }
  const handleImport = async (file?: File) => {
    if (!file) return
    setImportError(''); setImportMessage('')
    if (!/\.(json|csv)$/i.test(file.name)) { setImportError('Choose a .json or .csv vocabulary file.'); return }
    try {
      const result = await importFile(file)
      if (result.errors.length) { setImportError(`Nothing was imported. Fix these rows and try again:\n${result.errors.join('\n')}`); return }
      if (!result.cards.length) { setImportError('No vocabulary rows found. Add at least one word and meaning.'); return }
      setCards((items) => [...result.cards, ...items])
      setSelected((items) => [...new Set([...result.cards.map((card) => card.id), ...items])])
      setLibraryPage(1)
      setImportMessage(`Imported ${result.cards.length} word${result.cards.length === 1 ? '' : 's'} and selected them for practice.`)
    } catch (error) {
      setImportError(error instanceof Error ? error.message : 'The file could not be read. Check its format and try again.')
    }
  }
  const prepareChoices = (index: number, deck: WordCard[]) => {
    const target = deck[index]
    if (!target) { setChoiceOrder([]); return }
    const choices = [target, ...deck.filter((card) => card.id !== target.id).sort(() => Math.random() - 0.5).slice(0, 3)]
    setChoiceOrder(choices.sort(() => Math.random() - 0.5).map((card) => card.id))
  }
  const beginPractice = (nextMode: 'choice' | 'typing', deck: WordCard[]) => {
    if (!deck.length) return
    try { sessionStorage.setItem(PRACTICE_SESSION_KEY, JSON.stringify({ ids: deck.map((card) => card.id), mode: nextMode })) } catch { /* Route still works for this visit. */ }
    setMode(nextMode); setQuestionIndex(0); setScore(0); setAnswer(''); setFeedback(null); setSentenceAnswer([]); setSentenceCheck(null)
    setFlowMessage('')
    setSessionCards(deck)
    setSentenceCards(deck.filter((card) => card.example.trim()))
    if (nextMode === 'choice') prepareChoices(0, deck)
    if (nextMode === 'typing') setChoiceOrder([])
    router.push('/english/practice')
  }
  const begin = (nextMode: 'choice' | 'typing') => beginPractice(nextMode, activeCards)
  const startRandomPractice = (requested: number, nextMode: 'choice' | 'typing') => {
    if (!Number.isInteger(requested) || requested < 1) { setSelectionMessage('Enter a whole number greater than zero.'); return }
    if (!cards.length) { setSelectionMessage('Add or import English words before starting.'); return }
    const shuffled = [...cards].sort(() => Math.random() - 0.5)
    const sample = shuffled.slice(0, Math.min(requested, cards.length))
    setSelected(sample.map((card) => card.id)); setSelectionMode('random')
    const capped = requested > cards.length
    beginPractice(nextMode, sample)
    setFlowMessage(capped ? `You requested ${requested} words, but your deck has ${cards.length}; all available words are included.` : '')
  }
  const prepareSentence = (source: WordCard) => {
    const example = source.example
    const words = example.match(/[\w’'-]+|[^\s\w]/g) ?? []
    setSentenceWord(source?.word ?? '')
    setSentenceExpected(example)
    setSentenceCheck(null)
    setSentenceTokens([...words].sort(() => Math.random() - 0.5)); setSentenceAnswer([])
  }
  const backToEnglish = () => {
    setMode('idle')
    setSelectionMode('manual')
    setSelectionMessage('')
    if (isRandomPicker || isPracticePage) router.push('/')
  }
  const chooseRandomCount = (count: number) => {
    setRandomCount(String(count))
    setSelectionMessage('')
  }
  const startRandomFromPicker = (nextMode: 'choice' | 'typing') => startRandomPractice(Number(randomCount), nextMode)
  const check = (value = answer) => {
    if (!current || !value.trim()) return
    const correct = clean(value) === clean(current.meaning)
    setAnswer(value)
    setFeedback(correct); if (correct) setScore((n) => n + 1)
  }
  const checkVerb = () => {
    if (!currentVerb || !answer.trim()) return
    const expected = currentVerb.verbAnswer ?? []
    const correct = expected.some((form) => clean(answer) === clean(form))
    setFeedback(correct); if (correct) setScore((n) => n + 1)
  }
  const next = () => {
    const nextIndex = questionIndex + 1
    setAnswer(''); setFeedback(null)
    if (mode === 'choice' || mode === 'typing') {
      if (nextIndex < sessionCards.length) {
        setQuestionIndex(nextIndex)
      if (mode === 'choice') prepareChoices(nextIndex, sessionCards)
        return
      }
      setQuestionIndex(0)
      setSentenceCheck(null)
      if (sentenceCards.length) {
        setMode('sentences'); prepareSentence(sentenceCards[0]); return
      }
      setFlowMessage('This selected deck has no example sentences, so sentence matching was skipped.')
      if (verbCards.length) { setMode('verb'); return }
      setMode('complete'); return
    }
    if (mode === 'sentences') {
      if (nextIndex < sentenceCards.length) { setQuestionIndex(nextIndex); prepareSentence(sentenceCards[nextIndex]); return }
      setQuestionIndex(0)
      if (verbCards.length) {
        setFlowMessage('Sentence matching complete. Next, practise the explicit verb forms from this deck.')
        setMode('verb'); return
      }
      setFlowMessage('Vocabulary and sentence practice complete. This deck has no verb-form cloze exercises.')
      setMode('complete'); return
    }
    if (mode === 'verb') {
      if (nextIndex < verbCards.length) { setQuestionIndex(nextIndex); return }
      setFlowMessage('Vocabulary, sentence, and verb-form practice complete.')
      setMode('complete')
    }
  }
  const choose = (tokenIndex: number) => {
    setSentenceAnswer((items) => [...items, sentenceTokens[tokenIndex]])
    setSentenceTokens((items) => items.filter((_, i) => i !== tokenIndex))
  }
  const resetSentence = () => {
    setSentenceTokens([...sentenceTokens, ...sentenceAnswer].sort(() => Math.random() - 0.5)); setSentenceAnswer([]); setSentenceCheck(null)
  }
  const removeSentenceToken = (index: number) => {
    const token = sentenceAnswer[index]
    if (token === undefined) return
    setSentenceAnswer((items) => items.filter((_, i) => i !== index))
    setSentenceTokens((items) => [...items, token])
    setSentenceCheck(null)
  }
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    try { localStorage.setItem(THEME_KEY, nextTheme) } catch { /* Apply for this visit. */ }
  }

  return <div className="shell">
    <header className="topbar"><a className="logo" href="/" onClick={(event) => { event.preventDefault(); backToEnglish() }}>word<span>craft</span></a><nav className="language-switch" aria-label="Learning language"><span className="language-active">English</span><button type="button" disabled aria-disabled="true">Japanese · Temporarily unavailable</button></nav><button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} aria-pressed={theme === 'dark'}>{theme === 'light' ? '☾ Dark' : '☀ Light'}</button><span className="local-note">Your vocabulary stays on this device</span></header>
    <main id="home">
      {isPracticePage ? null : isRandomPicker ? mode === 'idle' ? <section className="exercise random-picker" aria-labelledby="random-title">
        <button className="back-link" onClick={backToEnglish}>← Back to English practice</button>
        <p className="eyebrow">Random practice · full English deck</p><h1 id="random-title">Pick a random deck</h1>
        <p>Choose how many words to draw from all {cards.length} words in your library. If the deck is smaller, we’ll use every available word.</p>
        <div className="random-picks"><span>Word count</span>{[10, 20, 30, 50].map((count) => <button type="button" className={randomCount === String(count) ? 'selected' : ''} key={count} onClick={() => chooseRandomCount(count)}>{count}</button>)}
          <label>Custom count<input type="number" min="1" step="1" value={randomCount} onChange={(event) => { setRandomCount(event.target.value); setSelectionMessage('') }} /></label>
        </div>
        {selectionMessage && <p className="selection-message" role="status">{selectionMessage}</p>}
        <div className="practice-actions random-start"><button className="button dark" disabled={!loaded || cards.length < 2 || !Number.isInteger(Number(randomCount)) || Number(randomCount) < 1} onClick={() => startRandomFromPicker('choice')}><b>Choose an answer</b><small>Multiple choice · needs at least 2 words</small><span>→</span></button><button className="button outline" disabled={!loaded || !cards.length || !Number.isInteger(Number(randomCount)) || Number(randomCount) < 1} onClick={() => startRandomFromPicker('typing')}><b>Write an answer</b><small>Recall from memory</small><span>→</span></button></div>
      </section> : null : <>
      <section className="page-intro"><p className="eyebrow">English practice</p><h1>Your vocabulary deck</h1><p>Choose words, practise their meanings, then match the example sentences.</p></section>
      <section className="workspace" aria-labelledby="library-title">
        <div className="section-title"><div><p className="eyebrow">English learning space</p><h2 id="library-title">Your word library <span>{cards.length}</span></h2></div><p>Select the words you want to practise. Sentence exercises use their example sentences.</p></div>
        <form className="add-form" onSubmit={addWord}>
          <label>Word<input value={newWord} onChange={(e) => setNewWord(e.target.value)} placeholder="e.g. resilient" /></label>
          <label>Meaning<input value={newMeaning} onChange={(e) => setNewMeaning(e.target.value)} placeholder="e.g. able to recover quickly" /></label><label>Pronunciation <small>IPA, optional</small><input value={newPronunciation} onChange={(e) => setNewPronunciation(e.target.value)} placeholder="/prəˌnʌn.siˈeɪ.ʃən/" /></label>
          <label className="example-field">Example sentence <small>needed for sentence-building practice</small><input value={newExample} onChange={(e) => setNewExample(e.target.value)} placeholder="She stayed resilient through the challenge." /></label>
          <button className="button dark" type="submit" disabled={!newWord.trim() || !newMeaning.trim()}>Add word <span>＋</span></button>
        </form>
        <details className="import-panel"><summary>Import a deck from JSON or CSV</summary><div className="import-content"><p>Required fields: <code>word</code> and <code>meaning</code>. Add <code>example</code> for sentence ordering. Verb practice needs all three fields: <code>clozeSentence</code> containing <code>___</code>, <code>verbBase</code>, and explicit <code>verbAnswer</code>. Optional <code>hint</code> is shown as a clue. JSON accepts <code>verbAnswer</code> as a string or array; CSV accepts multiple answers separated by <code>|</code>.</p><div className="import-actions"><label className="button outline file-pick">Choose JSON / CSV<input type="file" accept=".json,.csv,application/json,text/csv" onChange={(event) => { void handleImport(event.target.files?.[0]); event.currentTarget.value = '' }} /></label><button className="text-button" onClick={() => downloadTemplate('json')}>Download JSON example</button><button className="text-button" onClick={() => downloadTemplate('csv')}>Download CSV example</button></div>{importMessage && <p className="import-success" role="status">{importMessage}</p>}{importError && <pre className="import-error" role="alert">{importError}</pre>}</div></details>
        <div className="selection-tools"><div><p className="eyebrow">Build your practice deck</p><div className="selection-tabs"><button className={selectionMode === 'manual' ? 'selected' : ''} onClick={() => { setSelectionMode('manual'); setSelectionMessage('Choose words from the library below.') }}>Choose manually</button><button className="random-link" onClick={() => router.push('/english/random')}>Pick Random <span>→</span></button></div></div>{selectionMessage && <p className="selection-message" role="status">{selectionMessage}</p>}</div>
        {!cards.length ? <div className="empty"><div className="empty-mark">✳</div><h3>Your first word is waiting</h3><p>Add a word above to start a deck. Include an example sentence to unlock sentence-building practice.</p></div> : <div className="word-list">{visibleCards.map((card) => <article className={`word-row ${selected.includes(card.id) ? 'is-selected' : ''}`} key={card.id}>
          <label className="select-word"><input type="checkbox" checked={selected.includes(card.id)} disabled={selectionMode === "random"} onChange={(e) => setSelected((items) => e.target.checked ? [...items, card.id] : items.filter((id) => id !== card.id))} aria-label={`Select ${card.word}`} /><span className="checkmark">✓</span></label>
          <div className="word-main"><h3>{card.word}</h3>{card.pronunciation && <small className="pronunciation">{card.pronunciation}</small>}<p>{card.meaning}</p>{card.example && <small>“{card.example}”</small>}</div>
          <button className="remove" onClick={() => { setCards((items) => items.filter((item) => item.id !== card.id)); setSelected((items) => items.filter((id) => id !== card.id)) }} aria-label={`Remove ${card.word}`}>×</button>
        </article>)}</div>}{pageCount > 1 && <nav className="library-pagination" aria-label="Word library pages"><button className="button outline" onClick={() => setLibraryPage(visiblePage - 1)} disabled={visiblePage <= 1} aria-label="Previous page">← Previous</button><span aria-live="polite">Page {visiblePage} of {pageCount}</span><button className="button outline" onClick={() => setLibraryPage(visiblePage + 1)} disabled={visiblePage >= pageCount} aria-label="Next page">Next →</button></nav>}
        <div className="practice-bar"><div><p className="eyebrow">Ready when you are</p><strong>{selected.length} {selected.length === 1 ? 'word' : 'words'} selected</strong><p>Pick a practice style to begin.</p></div><div className="practice-actions"><button className="button outline" disabled={selected.length < 2} onClick={() => begin('choice')}><span className="action-icon">◉</span><span><b>Choose an answer</b><small>Multiple choice</small></span><span>→</span></button><button className="button outline" disabled={!selected.length} onClick={() => begin('typing')}><span className="action-icon">⌨</span><span><b>Write an answer</b><small>Recall from memory</small></span><span>→</span></button></div></div>
      </section>
      </>}

      {isPracticePage && mode === 'idle' ? <section className="exercise recovery" role="status" aria-labelledby="practice-recovery-title"><p className="eyebrow">English practice</p><h1 id="practice-recovery-title">Resume your practice</h1><p>{practiceRecoveryMessage || 'Your practice session is ready.'}</p><button className="button dark" type="button" onClick={backToEnglish}>Back to English practice <span>→</span></button></section> : isPracticePage && mode !== 'idle' ? mode === 'sentences' ? <section className="exercise" aria-live="polite"><button className="back-link" onClick={backToEnglish}>← Back to English practice</button><p className="eyebrow">Sentence matching · {questionIndex + 1} of {sentenceCards.length}</p><h2>Build a sentence with <em>{sentenceWord}</em></h2><p className="exercise-hint">Tap each word in the right order. This sentence uses one of your selected vocabulary examples.</p><div className="sentence-answer">{sentenceAnswer.length ? sentenceAnswer.map((token, i) => <button type="button" key={`${token}-${i}`} onClick={removeSentenceToken.bind(null, i)} aria-label={`Remove ${token} from your answer`} data-available-tokens={sentenceTokens.length}>{token} ×</button>) : <span>Your sentence will appear here</span>}</div><div className="token-tray">{sentenceTokens.map((token, i) => <button key={`${token}-${i}`} onClick={() => choose(i)}>{token}</button>)}</div><button className="button dark" disabled={sentenceTokens.length > 0 || !sentenceAnswer.length} onClick={() => sentenceCheck ? next() : setSentenceCheck(cleanSentence(sentenceAnswer.join(" ")) === cleanSentence(sentenceExpected))}>{sentenceCheck === true ? <>Next sentence <span>→</span></> : <>Check sentence <span>✓</span></>}</button>{sentenceCheck !== null && <div className={`feedback-panel ${sentenceCheck ? 'correct' : 'incorrect'}`} role="status"><strong>{sentenceCheck ? 'Correct!' : 'Not quite.'}</strong><p>Correct sentence: <b>{sentenceExpected}</b></p></div>}<button className="text-button" onClick={resetSentence}>Start over</button></section> : mode === 'complete' ? <section className="exercise completion" aria-live="polite"><p className="eyebrow">Session complete</p><h2>Your practice flow is finished</h2><p className="flow-message">{flowMessage}</p><p>{score} correct answers</p><button className="button dark" onClick={backToEnglish}>Back to English practice <span>→</span></button></section> : mode === 'verb' ? <section className="exercise" aria-live="polite"><button className="back-link" onClick={backToEnglish}>← Back to English practice</button><div className="quiz-head"><div><p className="eyebrow">Verb forms · explicit answer key</p>{flowMessage && <p className="flow-message">{flowMessage}</p>}<h2>Complete the sentence</h2></div><span className="counter">{questionIndex + 1} / {verbCards.length}<br /><small>{score} correct</small></span></div>{currentVerb ? <><article className="prompt-card"><span>Base verb: <b>{currentVerb.verbBase}</b></span><h3 className="cloze-prompt">{currentVerb.clozeSentence}</h3>{currentVerb.hint && <p className="verb-hint">Clue: {currentVerb.hint}</p>}</article><div className="type-answer"><label htmlFor="verb-answer">Correct verb form</label><div><input id="verb-answer" value={answer} disabled={feedback !== null} onChange={(event) => setAnswer(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') feedback === null ? checkVerb() : next() }} placeholder="Type the inflected form…" />{feedback === null ? <button className="button dark" disabled={!answer.trim()} onClick={checkVerb}>Check <span>→</span></button> : <button className="button dark" onClick={next}>Next <span>→</span></button>}</div>{feedback !== null && <><p className={feedback ? 'result good' : 'result bad'}>{feedback ? 'Correct verb form.' : <>Not quite. Expected: <b>{currentVerb.verbAnswer?.join(' / ')}</b></>}</p>{currentVerb.example && <p className="answer-example"><b>Example:</b> {currentVerb.example}</p>}</>}</div></> : <div className="done"><div>✦</div><h2>Practice complete</h2><p>{score} correct out of {verbCards.length}</p><button className="button dark" onClick={() => backToEnglish()}>Back to English <span>↻</span></button></div>}</section> : <section className="exercise" aria-live="polite"><button className="back-link" onClick={backToEnglish}>← Back to English practice</button><div className="quiz-head"><div><p className="eyebrow">{mode === 'choice' ? 'Quick check · choose' : 'Quick check · recall'}</p>{flowMessage && <p className="flow-message">{flowMessage}</p>}<h2>{mode === 'choice' ? 'Choose the meaning' : 'Write the meaning'}</h2></div><span className="counter">{questionIndex + 1} / {sessionCards.length}<br /><small>{score} correct</small></span></div>{current ? <><div className="prompt-card"><span>What does this word mean?</span><h3>{current.word}</h3>{current.pronunciation && <p className="pronunciation">{current.pronunciation}</p>}</div>{mode === 'choice' ? <><div className="answer-options">{choiceOrder.map((id) => cards.find((card) => card.id === id)).filter((card): card is WordCard => !!card).map((card) => <button className={`option ${feedback !== null && card.id === current.id ? 'correct' : ''} ${feedback === false && clean(answer) === clean(card.meaning) ? 'wrong' : ''}`} key={card.id} disabled={feedback !== null} onClick={() => check(card.meaning)}><span>{card.meaning}</span><b>{feedback !== null && card.id === current.id ? '✓' : '↗'}</b></button>)}</div>{feedback !== null && <div className={feedback ? 'feedback-panel correct' : 'feedback-panel incorrect'} role="status"><strong>{feedback ? 'Correct!' : 'Not quite.'}</strong>{!feedback && <p>Expected meaning: {current.meaning}</p>}{current.example && <p><b>Example:</b> {current.example}</p>}</div>}</> : <div className="type-answer"><label htmlFor="meaning-answer">Your answer</label><div><input id="meaning-answer" value={answer} disabled={feedback !== null} onChange={(e) => setAnswer(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') feedback === null ? check() : next() }} placeholder="Type the meaning…" />{feedback === null ? <button className="button dark" disabled={!answer.trim()} onClick={() => check()}>Check <span>→</span></button> : <button className="button dark" onClick={next}>{questionIndex + 1 === sessionCards.length ? 'Continue' : 'Next'} <span>→</span></button>}</div>{feedback !== null && <><p className={feedback ? 'result good' : 'result bad'}>{feedback ? 'Correct — nice recall.' : `Not quite. Expected meaning: ${current.meaning}`}</p>{current.example && <p className="answer-example"><b>Example:</b> {current.example}</p>}</>}</div>}<div className="quiz-footer"><span>{feedback === null ? 'Take your time — you’ve got this.' : 'Answer checked'}</span>{mode === 'choice' && feedback !== null && <button className="button dark" onClick={next}>{questionIndex + 1 === sessionCards.length ? 'Continue to matching' : 'Next word'} <span>→</span></button>}</div></> : <div className="done"><div>✦</div><h2>Practice complete</h2><p>{score} correct out of {sessionCards.length}</p><button className="button dark" onClick={() => begin(mode === 'choice' ? 'choice' : 'typing')}>Try again <span>↻</span></button></div>}</section> : null}
    </main>
    <footer><span>wordcraft</span><span>Small steps add up to fluency.</span></footer>
  </div>
}
