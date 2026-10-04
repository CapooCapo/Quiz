(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/App.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const STORAGE_KEY = 'kotoba-en-cards-v1';
const WORD_PACK_MARKER_KEY = 'kotoba-en-wildlife-pack-v1-installed';
const CAREER_PACK_MARKER_KEY = 'kotoba-en-career-pack-v1-installed';
const GENERAL_PACK_MARKER_KEY = 'kotoba-en-general-pack-v1-installed';
const PRACTICE_SESSION_KEY = 'kotoba-en-practice-session-v1';
const THEME_KEY = 'kotoba-en-theme-v1';
const WORDS_PER_PAGE = 10;
const starterWords = [
    {
        word: 'to unwind',
        meaning: 'thư giãn, xả hơi',
        example: 'I like to unwind with a book after work.'
    },
    {
        word: "to refresh one's mind",
        meaning: 'làm đầu óc tỉnh táo, sảng khoái lại',
        example: 'A short walk outside can refresh your mind.'
    },
    {
        word: 'passion',
        meaning: 'niềm đam mê',
        example: 'Her passion for wildlife conservation inspired her career.'
    },
    {
        word: 'leisure time',
        meaning: 'thời gian rảnh',
        example: 'He spends his leisure time hiking in the hills.'
    },
    {
        word: 'extinct',
        meaning: 'tuyệt chủng',
        example: 'The dodo became extinct in the seventeenth century.'
    },
    {
        word: 'conservation',
        meaning: 'sự bảo tồn',
        example: 'The reserve funds conservation projects to protect endangered animals.'
    },
    {
        word: 'reintroduction',
        meaning: 'sự tái thả, tái du nhập',
        example: 'The reintroduction of wolves helped restore the ecosystem.'
    },
    {
        word: 'habitat',
        meaning: 'môi trường sống',
        example: 'Wetlands provide a vital habitat for many bird species.'
    },
    {
        word: 'dam',
        meaning: 'đập',
        example: 'The new dam supplies water to nearby farms.'
    },
    {
        word: 'species',
        meaning: 'loài',
        example: 'This species can survive in very cold conditions.'
    }
];
const careerWords = [
    {
        word: 'manufacturer',
        meaning: 'nhà sản xuất, nhà chế tạo',
        pronunciation: 'UK /ˌmæn.jəˈfæk.tʃər.ər/ · US /ˌmæn.jəˈfæk.tʃɚ.ɚ/',
        example: 'The manufacturer recalled the product after discovering a safety issue.'
    },
    {
        word: 'countercurrent',
        aliases: [
            'counter current'
        ],
        meaning: 'dòng chảy ngược chiều',
        pronunciation: 'UK /ˌkaʊn.təˈkʌr.ənt/ · US /ˌkaʊn.tɚˈkɝː.ənt/',
        example: 'The fish use a countercurrent system to absorb oxygen from the water.'
    },
    {
        word: 'strategic',
        meaning: 'mang tính chiến lược',
        pronunciation: 'UK /strəˈtiː.dʒɪk/ · US /strəˈtiː.dʒɪk/',
        example: 'The company made a strategic decision to expand into new markets.'
    },
    {
        word: 'mound',
        meaning: 'gò đất; đống đất',
        pronunciation: 'UK /maʊnd/ · US /maʊnd/',
        example: 'The children built a small mound of sand beside the path.'
    },
    {
        word: 'configuration',
        meaning: 'cấu hình; cách bố trí',
        pronunciation: 'UK /kənˌfɪɡ.əˈreɪ.ʃən/ · US /kənˌfɪɡ.jəˈreɪ.ʃən/',
        example: 'This room configuration gives the team more space to collaborate.'
    },
    {
        word: 'secrete',
        meaning: 'tiết ra, bài tiết (động từ)',
        pronunciation: 'UK /sɪˈkriːt/ · US /sɪˈkriːt/',
        example: 'The glands secrete hormones into the bloodstream.'
    },
    {
        word: 'well-paid',
        meaning: 'được trả lương cao',
        pronunciation: 'UK /ˌwelˈpeɪd/ · US /ˌwelˈpeɪd/',
        example: 'She hopes to find a well-paid job in engineering.'
    },
    {
        word: 'self-employed',
        meaning: 'tự làm chủ; làm việc tự do',
        pronunciation: 'UK /ˌself.ɪmˈplɔɪd/ · US /ˌself.ɪmˈplɔɪd/',
        example: 'He became self-employed and started his own design studio.'
    },
    {
        word: 'qualified',
        meaning: 'đủ trình độ; có chuyên môn',
        pronunciation: 'UK /ˈkwɒl.ɪ.faɪd/ · US /ˈkwɑː.lə.faɪd/',
        example: 'Only qualified technicians are allowed to repair this equipment.'
    },
    {
        word: 'heavy workload',
        meaning: 'khối lượng công việc lớn',
        pronunciation: 'UK /ˌhev.i ˈwɜːk.ləʊd/ · US /ˌhev.i ˈwɝːk.loʊd/',
        example: 'The team managed a heavy workload by planning the week carefully.'
    },
    {
        word: 'be in charge of + V-ing',
        meaning: 'chịu trách nhiệm phụ trách việc gì',
        pronunciation: '/biː ɪn ˈtʃɑːdʒ əv/ + verb-ing',
        example: 'She is in charge of training new employees.'
    },
    {
        word: 'be/get promoted',
        aliases: [
            'be-get-promoted'
        ],
        meaning: 'được thăng chức',
        pronunciation: 'UK /biː ɡet prəˈməʊ.tɪd/ · US /biː ɡet prəˈmoʊ.t̬ɪd/',
        example: 'He hopes to get promoted after leading the new project.'
    }
];
const generalWords = [
    {
        word: 'demerits',
        meaning: 'nhược điểm; điểm trừ',
        pronunciation: '/ˌdiːˈmer.ɪts/',
        example: 'One of the main demerits of the plan is its high cost.'
    },
    {
        word: 'merits',
        meaning: 'ưu điểm; giá trị',
        pronunciation: '/ˈmer.ɪts/',
        example: 'We should consider the merits of both proposals.'
    },
    {
        word: 'upsides',
        meaning: 'mặt tích cực; lợi ích',
        pronunciation: '/ˈʌp.saɪdz/',
        example: 'One of the upsides of working from home is the shorter commute.'
    },
    {
        word: 'downsides',
        meaning: 'mặt bất lợi; nhược điểm',
        pronunciation: '/ˈdaʊn.saɪdz/',
        example: 'There are a few downsides to living far from the city centre.'
    },
    {
        word: 'positive aspects',
        meaning: 'những khía cạnh tích cực',
        pronunciation: 'UK /ˈpɒz.ə.tɪv ˈæs.pekts/ · US /ˈpɑːz.ə.tɪv ˈæs.pekts/',
        example: 'The report highlights the positive aspects of the new policy.'
    },
    {
        word: 'overshadow',
        meaning: 'làm lu mờ; lấn át',
        pronunciation: 'UK /ˌəʊ.vəˈʃæd.əʊ/ · US /ˌoʊ.vɚˈʃæd.oʊ/',
        example: 'The unexpected delay overshadowed an otherwise successful launch.'
    },
    {
        word: 'extraterrestrial',
        meaning: 'ngoài Trái Đất; sinh vật ngoài hành tinh',
        pronunciation: '/ˌek.strə.təˈres.tri.əl/',
        example: 'Scientists are searching for signs of extraterrestrial life.'
    },
    {
        word: 'capsule',
        meaning: 'viên nang; khoang nhỏ',
        pronunciation: 'UK /ˈkæp.sjuːl/ · US /ˈkæp.səl/',
        example: 'The astronaut returned to Earth in a small capsule.'
    },
    {
        word: 'inscription',
        meaning: 'dòng chữ được khắc',
        pronunciation: '/ɪnˈskrɪp.ʃən/',
        example: 'An inscription above the doorway records when the building was completed.'
    },
    {
        word: 'diverse',
        meaning: 'đa dạng',
        pronunciation: 'UK /daɪˈvɜːs/ · US /dɪˈvɝːs/',
        example: 'The course attracts students from diverse backgrounds.'
    },
    {
        word: 'compilations',
        meaning: 'các bộ sưu tập; tuyển tập',
        pronunciation: 'UK /ˌkɒm.pɪˈleɪ.ʃənz/ · US /ˌkɑːm.pəˈleɪ.ʃənz/',
        example: 'The library has several compilations of traditional folk songs.'
    },
    {
        word: 'encounter',
        meaning: 'cuộc gặp; gặp phải',
        pronunciation: 'UK /ɪnˈkaʊn.tər/ · US /ɪnˈkaʊn.t̬ɚ/',
        example: 'During the hike, we had an unexpected encounter with a deer.'
    },
    {
        word: 'infinitesimal',
        meaning: 'vô cùng nhỏ; cực nhỏ',
        pronunciation: 'UK /ˌɪn.fɪ.nɪˈtes.ɪ.məl/ · US /ˌɪn.fɪ.nəˈtes.ə.məl/',
        example: 'The measurement changed by an infinitesimal amount.'
    },
    {
        word: 'athlete',
        meaning: 'vận động viên',
        pronunciation: 'UK /ˈæθ.liːt/ · US /ˈæθ.liːt/',
        example: 'The athlete trained every morning before school.'
    },
    {
        word: 'keep-fit enthusiast',
        meaning: 'người đam mê rèn luyện thể chất',
        pronunciation: '/ˌkiːp ˈfɪt ɪnˈθjuː.zi.æst/',
        example: 'As a keep-fit enthusiast, Minh cycles to work several times a week.'
    },
    {
        word: 'enthusiast',
        meaning: 'người say mê; người đam mê',
        pronunciation: 'UK /ɪnˈθjuː.zi.æst/ · US /ɪnˈθuː.zi.æst/',
        example: 'A photography enthusiast, she spends weekends capturing wildlife.'
    },
    {
        word: 'to get lean',
        meaning: 'trở nên săn chắc, giảm mỡ',
        pronunciation: '/ɡet liːn/',
        example: 'He follows a balanced diet and strength program to get lean.'
    },
    {
        word: 'to get rid of negative energies',
        meaning: 'loại bỏ những năng lượng tiêu cực',
        pronunciation: '/ɡet ˈrɪd əv ˈneɡ.ə.tɪv ˈen.ə.dʒiz/',
        example: 'She goes for a quiet walk to get rid of negative energies after a stressful day.'
    }
];
const normalizeWord = (word)=>word.toLocaleLowerCase().trim().replace(/\s+/g, ' ');
const clean = (text)=>text.toLocaleLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ').trim();
const cleanSentence = (text)=>text.toLocaleLowerCase().replace(/\s+([,.!?;:])/g, '$1').replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ').trim();
const makeId = ()=>typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
const parseCsv = (text)=>{
    const rows = [];
    let row = [], cell = '', quoted = false;
    for(let i = 0; i < text.length; i += 1){
        const char = text[i];
        if (char === '"' && quoted && text[i + 1] === '"') {
            cell += '"';
            i += 1;
        } else if (char === '"') quoted = !quoted;
        else if (char === ',' && !quoted) {
            row.push(cell);
            cell = '';
        } else if ((char === '\n' || char === '\r') && !quoted) {
            if (char === '\r' && text[i + 1] === '\n') i += 1;
            row.push(cell);
            if (row.some((item)=>item.trim())) rows.push(row);
            row = [];
            cell = '';
        } else cell += char;
    }
    if (quoted) throw new Error('The CSV has an unclosed quote. Check quoted cells and try again.');
    row.push(cell);
    if (row.some((item)=>item.trim())) rows.push(row);
    return rows;
};
const normalizeRows = (rows)=>{
    const cards = [], errors = [];
    rows.forEach((source, index)=>{
        const rowNumber = index + 1;
        const stringFields = [
            'word',
            'meaning',
            'example',
            'pronunciation',
            'clozesentence',
            'verbbase',
            'hint'
        ];
        const invalidFields = stringFields.filter((key)=>source[key] != null && typeof source[key] !== 'string');
        for (const key of [
            'verbanswer',
            'verbanswers'
        ]){
            const answerValue = source[key];
            if (answerValue == null) continue;
            if (typeof answerValue !== 'string' && !Array.isArray(answerValue)) invalidFields.push(key);
            else if (Array.isArray(answerValue) && answerValue.some((item)=>typeof item !== 'string')) invalidFields.push(key);
        }
        if (invalidFields.length) {
            errors.push(`Row ${rowNumber}: ${invalidFields.join(', ')} must be strings${invalidFields.some((key)=>key === 'verbanswer' || key === 'verbanswers') ? ' (or an array of strings for verbAnswer)' : ''}.`);
            return;
        }
        const value = (key)=>(typeof source[key] === 'string' ? source[key] : '').trim();
        const word = value('word'), meaning = value('meaning'), example = value('example');
        const pronunciation = value('pronunciation');
        const clozeSentence = value('clozesentence');
        const verbBase = value('verbbase');
        const answerSource = source['verbanswer'] ?? source['verbanswers'] ?? '';
        const verbAnswer = Array.isArray(answerSource) ? answerSource.map((answer)=>answer.trim()).filter(Boolean) : String(answerSource).split('|').map((answer)=>answer.trim()).filter(Boolean);
        const hint = value('hint');
        if (!word || !meaning) {
            errors.push(`Row ${rowNumber}: word and meaning are required.`);
            return;
        }
        const hasClozeData = !!(clozeSentence || verbBase || verbAnswer.length);
        if (hasClozeData && (!clozeSentence.includes('___') || !verbBase || !verbAnswer.length)) {
            errors.push(`Row ${rowNumber} (${word}): clozeSentence must include ___, with verbBase and at least one verbAnswer.`);
            return;
        }
        cards.push({
            id: makeId(),
            word,
            meaning,
            example,
            ...pronunciation ? {
                pronunciation
            } : {},
            ...hasClozeData ? {
                clozeSentence,
                verbBase,
                verbAnswer,
                hint
            } : {}
        });
    });
    return {
        cards,
        errors
    };
};
const importFile = async (file)=>{
    const text = await file.text();
    let rows;
    if (file.name.toLowerCase().endsWith('.csv') || file.type === 'text/csv') {
        const [headerRow, ...dataRows] = parseCsv(text);
        if (!headerRow?.length) throw new Error('The CSV is empty. Add a header row and at least one word.');
        const headers = headerRow.map((header)=>header.replace(/^\uFEFF/, '').trim().toLowerCase());
        if (!headers.includes('word') || !headers.includes('meaning')) throw new Error('CSV headers must include word and meaning.');
        rows = dataRows.map((values)=>Object.fromEntries(headers.map((header, i)=>[
                    header,
                    values[i] ?? ''
                ])));
    } else {
        const parsed = JSON.parse(text);
        const list = Array.isArray(parsed) ? parsed : parsed && typeof parsed === 'object' && 'cards' in parsed && Array.isArray(parsed.cards) ? parsed.cards : null;
        if (!list) throw new Error('JSON must be an array of word objects, or an object with a cards array.');
        rows = list.map((item)=>{
            if (!item || typeof item !== 'object' || Array.isArray(item)) return {};
            return Object.fromEntries(Object.entries(item).map(([key, value])=>[
                    key.toLowerCase(),
                    value
                ]));
        });
    }
    return normalizeRows(rows);
};
const downloadTemplate = (format)=>{
    const sample = [
        {
            word: 'go',
            meaning: 'move from one place to another',
            pronunciation: '/ɡəʊ/',
            example: 'I go to work by bus.',
            clozeSentence: 'Yesterday, I ___ to work by bus.',
            verbBase: 'go',
            verbAnswer: [
                'went'
            ],
            hint: 'Simple past'
        }
    ];
    const content = format === 'json' ? JSON.stringify(sample, null, 2) : 'word,meaning,pronunciation,example,clozeSentence,verbBase,verbAnswer,hint\n"go","move from one place to another","/ɡəʊ/","I go to work by bus.","Yesterday, I ___ to work by bus.","go","went","Simple past"';
    const blob = new Blob([
        content
    ], {
        type: format === 'json' ? 'application/json' : 'text/csv'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `wordcraft-template.${format}`;
    link.click();
    URL.revokeObjectURL(url);
};
function App() {
    _s();
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [storageReady, setStorageReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sessionCards, setSessionCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sentenceCards, setSentenceCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [flowMessage, setFlowMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [libraryPage, setLibraryPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectionMode, setSelectionMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('manual');
    const [randomCount, setRandomCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('10');
    const [selectionMessage, setSelectionMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [importMessage, setImportMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [importError, setImportError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [questionIndex, setQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answer, setAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [newWord, setNewWord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newMeaning, setNewMeaning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newPronunciation, setNewPronunciation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newExample, setNewExample] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sentenceTokens, setSentenceTokens] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sentenceAnswer, setSentenceAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sentenceWord, setSentenceWord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sentenceExpected, setSentenceExpected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sentenceCheck, setSentenceCheck] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [choiceOrder, setChoiceOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    const [practiceRecoveryMessage, setPracticeRecoveryMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Loading your English practice…');
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const isRandomPicker = pathname === '/english/random';
    const isPracticePage = pathname === '/english/practice';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            let existingCards = [];
            let canPersist = true;
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    if (Array.isArray(parsed)) existingCards = parsed;
                    else canPersist = false;
                }
            } catch  {
                canPersist = false;
            }
            let mergedCards = existingCards;
            const installPack = {
                "App.useEffect.installPack": (markerKey, words)=>{
                    if (localStorage.getItem(markerKey) === 'v1') return;
                    const existingWords = new Set(mergedCards.flatMap({
                        "App.useEffect.installPack": (card)=>[
                                ...typeof card.word === 'string' ? [
                                    normalizeWord(card.word)
                                ] : [],
                                ...Array.isArray(card.aliases) ? card.aliases.filter({
                                    "App.useEffect.installPack": (alias)=>typeof alias === 'string'
                                }["App.useEffect.installPack"]).map(normalizeWord) : []
                            ]
                    }["App.useEffect.installPack"]));
                    const missingWords = words.filter({
                        "App.useEffect.installPack.missingWords": (card)=>![
                                card.word,
                                ...card.aliases ?? []
                            ].some({
                                "App.useEffect.installPack.missingWords": (word)=>existingWords.has(normalizeWord(word))
                            }["App.useEffect.installPack.missingWords"])
                    }["App.useEffect.installPack.missingWords"]).map({
                        "App.useEffect.installPack.missingWords": (card)=>({
                                ...card,
                                id: makeId()
                            })
                    }["App.useEffect.installPack.missingWords"]);
                    mergedCards = [
                        ...mergedCards,
                        ...missingWords
                    ];
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(mergedCards));
                    localStorage.setItem(markerKey, 'v1');
                }
            }["App.useEffect.installPack"];
            try {
                if (canPersist) {
                    installPack(WORD_PACK_MARKER_KEY, starterWords);
                    installPack(CAREER_PACK_MARKER_KEY, careerWords);
                    installPack(GENERAL_PACK_MARKER_KEY, generalWords);
                }
            } catch  {}
            setCards(mergedCards);
            setStorageReady(canPersist);
            setLoaded(true);
        }
    }["App.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (loaded && storageReady) {
                try {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
                } catch  {}
            }
        }
    }["App.useEffect"], [
        cards,
        loaded,
        storageReady
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            let saved = null;
            try {
                saved = localStorage.getItem(THEME_KEY);
            } catch  {}
            const preference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            setTheme(saved === 'dark' || saved === 'light' ? saved : preference);
        }
    }["App.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            document.documentElement.dataset.theme = theme;
        }
    }["App.useEffect"], [
        theme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!isPracticePage) return;
            if (!loaded) {
                setPracticeRecoveryMessage('Loading your English practice…');
                return;
            }
            if (!storageReady) {
                setMode('idle');
                setPracticeRecoveryMessage('Your vocabulary could not be loaded, so this practice session cannot be restored.');
                return;
            }
            try {
                const raw = sessionStorage.getItem(PRACTICE_SESSION_KEY);
                const saved = raw ? JSON.parse(raw) : null;
                const savedIds = saved?.ids;
                const ids = Array.isArray(savedIds) ? savedIds.filter({
                    "App.useEffect": (id)=>typeof id === 'string'
                }["App.useEffect"]) : [];
                const deck = ids.map({
                    "App.useEffect.deck": (id)=>cards.find({
                            "App.useEffect.deck": (card)=>card.id === id
                        }["App.useEffect.deck"])
                }["App.useEffect.deck"]).filter({
                    "App.useEffect.deck": (card)=>!!card
                }["App.useEffect.deck"]);
                if (!Array.isArray(savedIds) || ids.length !== savedIds.length || !deck.length || deck.length !== ids.length || saved?.mode !== 'choice' && saved?.mode !== 'typing') {
                    setMode('idle');
                    setPracticeRecoveryMessage('This practice session is missing or out of date. Return to English practice and choose a deck again.');
                    return;
                }
                setSelected(deck.map({
                    "App.useEffect": (card)=>card.id
                }["App.useEffect"]));
                setSessionCards(deck);
                setSentenceCards(deck.filter({
                    "App.useEffect": (card)=>card.example.trim()
                }["App.useEffect"]));
                setMode(saved.mode);
                setQuestionIndex(0);
                setScore(0);
                setAnswer('');
                setFeedback(null);
                setSentenceAnswer([]);
                setSentenceCheck(null);
                if (saved.mode === 'choice') prepareChoices(0, deck);
                setPracticeRecoveryMessage('');
            } catch  {
                setMode('idle');
                setPracticeRecoveryMessage('This practice session could not be restored. Return to English practice and choose a deck again.');
            }
        // Restore saved deck after client-side navigation or refresh.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["App.useEffect"], [
        loaded,
        storageReady,
        isPracticePage
    ]);
    const activeCards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[activeCards]": ()=>selected.map({
                "App.useMemo[activeCards]": (id)=>cards.find({
                        "App.useMemo[activeCards]": (card)=>card.id === id
                    }["App.useMemo[activeCards]"])
            }["App.useMemo[activeCards]"]).filter({
                "App.useMemo[activeCards]": (card)=>!!card
            }["App.useMemo[activeCards]"])
    }["App.useMemo[activeCards]"], [
        cards,
        selected
    ]);
    const pageCount = Math.max(1, Math.ceil(cards.length / WORDS_PER_PAGE));
    const visiblePage = Math.min(libraryPage, pageCount);
    const visibleCards = cards.slice((visiblePage - 1) * WORDS_PER_PAGE, visiblePage * WORDS_PER_PAGE);
    const verbCards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[verbCards]": ()=>sessionCards.filter({
                "App.useMemo[verbCards]": (card)=>card.clozeSentence?.includes('___') && card.verbBase?.trim() && card.verbAnswer?.length
            }["App.useMemo[verbCards]"])
    }["App.useMemo[verbCards]"], [
        sessionCards
    ]);
    const current = sessionCards[questionIndex];
    const currentVerb = verbCards[questionIndex];
    const addWord = (event)=>{
        event.preventDefault();
        if (!newWord.trim() || !newMeaning.trim()) return;
        const card = {
            id: makeId(),
            word: newWord.trim(),
            meaning: newMeaning.trim(),
            example: newExample.trim(),
            ...newPronunciation.trim() ? {
                pronunciation: newPronunciation.trim()
            } : {}
        };
        setCards((items)=>[
                card,
                ...items
            ]);
        setSelected((items)=>[
                ...items,
                card.id
            ]);
        setLibraryPage(1);
        setNewWord('');
        setNewMeaning('');
        setNewExample('');
        setNewPronunciation('');
    };
    const handleImport = async (file)=>{
        if (!file) return;
        setImportError('');
        setImportMessage('');
        if (!/\.(json|csv)$/i.test(file.name)) {
            setImportError('Choose a .json or .csv vocabulary file.');
            return;
        }
        try {
            const result = await importFile(file);
            if (result.errors.length) {
                setImportError(`Nothing was imported. Fix these rows and try again:\n${result.errors.join('\n')}`);
                return;
            }
            if (!result.cards.length) {
                setImportError('No vocabulary rows found. Add at least one word and meaning.');
                return;
            }
            setCards((items)=>[
                    ...result.cards,
                    ...items
                ]);
            setSelected((items)=>[
                    ...new Set([
                        ...result.cards.map((card)=>card.id),
                        ...items
                    ])
                ]);
            setLibraryPage(1);
            setImportMessage(`Imported ${result.cards.length} word${result.cards.length === 1 ? '' : 's'} and selected them for practice.`);
        } catch (error) {
            setImportError(error instanceof Error ? error.message : 'The file could not be read. Check its format and try again.');
        }
    };
    const prepareChoices = (index, deck)=>{
        const target = deck[index];
        if (!target) {
            setChoiceOrder([]);
            return;
        }
        const choices = [
            target,
            ...deck.filter((card)=>card.id !== target.id).sort(()=>Math.random() - 0.5).slice(0, 3)
        ];
        setChoiceOrder(choices.sort(()=>Math.random() - 0.5).map((card)=>card.id));
    };
    const beginPractice = (nextMode, deck)=>{
        if (!deck.length) return;
        try {
            sessionStorage.setItem(PRACTICE_SESSION_KEY, JSON.stringify({
                ids: deck.map((card)=>card.id),
                mode: nextMode
            }));
        } catch  {}
        setMode(nextMode);
        setQuestionIndex(0);
        setScore(0);
        setAnswer('');
        setFeedback(null);
        setSentenceAnswer([]);
        setSentenceCheck(null);
        setFlowMessage('');
        setSessionCards(deck);
        setSentenceCards(deck.filter((card)=>card.example.trim()));
        if (nextMode === 'choice') prepareChoices(0, deck);
        if (nextMode === 'typing') setChoiceOrder([]);
        router.push('/english/practice');
    };
    const begin = (nextMode)=>beginPractice(nextMode, activeCards);
    const startRandomPractice = (requested, nextMode)=>{
        if (!Number.isInteger(requested) || requested < 1) {
            setSelectionMessage('Enter a whole number greater than zero.');
            return;
        }
        if (!cards.length) {
            setSelectionMessage('Add or import English words before starting.');
            return;
        }
        const shuffled = [
            ...cards
        ].sort(()=>Math.random() - 0.5);
        const sample = shuffled.slice(0, Math.min(requested, cards.length));
        setSelected(sample.map((card)=>card.id));
        setSelectionMode('random');
        const capped = requested > cards.length;
        beginPractice(nextMode, sample);
        setFlowMessage(capped ? `You requested ${requested} words, but your deck has ${cards.length}; all available words are included.` : '');
    };
    const prepareSentence = (source)=>{
        const example = source.example;
        const words = example.match(/[\w’'-]+|[^\s\w]/g) ?? [];
        setSentenceWord(source?.word ?? '');
        setSentenceExpected(example);
        setSentenceCheck(null);
        setSentenceTokens([
            ...words
        ].sort(()=>Math.random() - 0.5));
        setSentenceAnswer([]);
    };
    const backToEnglish = ()=>{
        setMode('idle');
        setSelectionMode('manual');
        setSelectionMessage('');
        if (isRandomPicker || isPracticePage) router.push('/');
    };
    const chooseRandomCount = (count)=>{
        setRandomCount(String(count));
        setSelectionMessage('');
    };
    const startRandomFromPicker = (nextMode)=>startRandomPractice(Number(randomCount), nextMode);
    const check = (value = answer)=>{
        if (!current || !value.trim()) return;
        const correct = clean(value) === clean(current.meaning);
        setAnswer(value);
        setFeedback(correct);
        if (correct) setScore((n)=>n + 1);
    };
    const checkVerb = ()=>{
        if (!currentVerb || !answer.trim()) return;
        const expected = currentVerb.verbAnswer ?? [];
        const correct = expected.some((form)=>clean(answer) === clean(form));
        setFeedback(correct);
        if (correct) setScore((n)=>n + 1);
    };
    const next = ()=>{
        const nextIndex = questionIndex + 1;
        setAnswer('');
        setFeedback(null);
        if (mode === 'choice' || mode === 'typing') {
            if (nextIndex < sessionCards.length) {
                setQuestionIndex(nextIndex);
                if (mode === 'choice') prepareChoices(nextIndex, sessionCards);
                return;
            }
            setQuestionIndex(0);
            setSentenceCheck(null);
            if (sentenceCards.length) {
                setMode('sentences');
                prepareSentence(sentenceCards[0]);
                return;
            }
            setFlowMessage('This selected deck has no example sentences, so sentence matching was skipped.');
            if (verbCards.length) {
                setMode('verb');
                return;
            }
            setMode('complete');
            return;
        }
        if (mode === 'sentences') {
            if (nextIndex < sentenceCards.length) {
                setQuestionIndex(nextIndex);
                prepareSentence(sentenceCards[nextIndex]);
                return;
            }
            setQuestionIndex(0);
            if (verbCards.length) {
                setFlowMessage('Sentence matching complete. Next, practise the explicit verb forms from this deck.');
                setMode('verb');
                return;
            }
            setFlowMessage('Vocabulary and sentence practice complete. This deck has no verb-form cloze exercises.');
            setMode('complete');
            return;
        }
        if (mode === 'verb') {
            if (nextIndex < verbCards.length) {
                setQuestionIndex(nextIndex);
                return;
            }
            setFlowMessage('Vocabulary, sentence, and verb-form practice complete.');
            setMode('complete');
        }
    };
    const choose = (tokenIndex)=>{
        setSentenceAnswer((items)=>[
                ...items,
                sentenceTokens[tokenIndex]
            ]);
        setSentenceTokens((items)=>items.filter((_, i)=>i !== tokenIndex));
    };
    const resetSentence = ()=>{
        setSentenceTokens([
            ...sentenceTokens,
            ...sentenceAnswer
        ].sort(()=>Math.random() - 0.5));
        setSentenceAnswer([]);
        setSentenceCheck(null);
    };
    const removeSentenceToken = (index)=>{
        const token = sentenceAnswer[index];
        if (token === undefined) return;
        setSentenceAnswer((items)=>items.filter((_, i)=>i !== index));
        setSentenceTokens((items)=>[
                ...items,
                token
            ]);
        setSentenceCheck(null);
    };
    const toggleTheme = ()=>{
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
        try {
            localStorage.setItem(THEME_KEY, nextTheme);
        } catch  {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "logo",
                        href: "/",
                        onClick: (event)=>{
                            event.preventDefault();
                            backToEnglish();
                        },
                        children: [
                            "word",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "craft"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 411,
                                columnNumber: 130
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 411,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "language-switch",
                        "aria-label": "Learning language",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "language-active",
                                children: "English"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 411,
                                columnNumber: 216
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                disabled: true,
                                "aria-disabled": "true",
                                children: "Japanese · Temporarily unavailable"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 411,
                                columnNumber: 264
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 411,
                        columnNumber: 152
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "theme-toggle",
                        type: "button",
                        onClick: toggleTheme,
                        "aria-label": `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`,
                        "aria-pressed": theme === 'dark',
                        children: theme === 'light' ? '☾ Dark' : '☀ Light'
                    }, void 0, false, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 411,
                        columnNumber: 365
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "local-note",
                        children: "Your vocabulary stays on this device"
                    }, void 0, false, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 411,
                        columnNumber: 588
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 411,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                id: "home",
                children: [
                    isPracticePage ? null : isRandomPicker ? mode === 'idle' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "exercise random-picker",
                        "aria-labelledby": "random-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "back-link",
                                onClick: backToEnglish,
                                children: "← Back to English practice"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 414,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Random practice · full English deck"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 415,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                id: "random-title",
                                children: "Pick a random deck"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 415,
                                columnNumber: 71
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Choose how many words to draw from all ",
                                    cards.length,
                                    " words in your library. If the deck is smaller, we’ll use every available word."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 416,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "random-picks",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Word count"
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 417,
                                        columnNumber: 39
                                    }, this),
                                    [
                                        10,
                                        20,
                                        30,
                                        50
                                    ].map((count)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: randomCount === String(count) ? 'selected' : '',
                                            onClick: ()=>chooseRandomCount(count),
                                            children: count
                                        }, count, false, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 417,
                                            columnNumber: 95
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Custom count",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "1",
                                                step: "1",
                                                value: randomCount,
                                                onChange: (event)=>{
                                                    setRandomCount(event.target.value);
                                                    setSelectionMessage('');
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 418,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 418,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 417,
                                columnNumber: 9
                            }, this),
                            selectionMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "selection-message",
                                role: "status",
                                children: selectionMessage
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 420,
                                columnNumber: 30
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "practice-actions random-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "button dark",
                                        disabled: !loaded || cards.length < 2 || !Number.isInteger(Number(randomCount)) || Number(randomCount) < 1,
                                        onClick: ()=>startRandomFromPicker('choice'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Choose an answer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 421,
                                                columnNumber: 244
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "Multiple choice · needs at least 2 words"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 421,
                                                columnNumber: 267
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 421,
                                                columnNumber: 322
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 421,
                                        columnNumber: 56
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "button outline",
                                        disabled: !loaded || !cards.length || !Number.isInteger(Number(randomCount)) || Number(randomCount) < 1,
                                        onClick: ()=>startRandomFromPicker('typing'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Write an answer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 421,
                                                columnNumber: 533
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "Recall from memory"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 421,
                                                columnNumber: 555
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 421,
                                                columnNumber: 588
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 421,
                                        columnNumber: 345
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 421,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 413,
                        columnNumber: 67
                    }, this) : null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "page-intro",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: "English practice"
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 423,
                                        columnNumber: 39
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: "Your vocabulary deck"
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 423,
                                        columnNumber: 82
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Choose words, practise their meanings, then match the example sentences."
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 423,
                                        columnNumber: 111
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 423,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "workspace",
                                "aria-labelledby": "library-title",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-title",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "eyebrow",
                                                        children: "English learning space"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        id: "library-title",
                                                        children: [
                                                            "Your word library ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: cards.length
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 135
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 94
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 425,
                                                columnNumber: 40
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Select the words you want to practise. Sentence exercises use their example sentences."
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 425,
                                                columnNumber: 173
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 425,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: "add-form",
                                        onSubmit: addWord,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Word",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: newWord,
                                                        onChange: (e)=>setNewWord(e.target.value),
                                                        placeholder: "e.g. resilient"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 427,
                                                        columnNumber: 22
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 427,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Meaning",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: newMeaning,
                                                        onChange: (e)=>setNewMeaning(e.target.value),
                                                        placeholder: "e.g. able to recover quickly"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 428,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 428,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Pronunciation ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: "IPA, optional"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 428,
                                                        columnNumber: 173
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: newPronunciation,
                                                        onChange: (e)=>setNewPronunciation(e.target.value),
                                                        placeholder: "/prəˌnʌn.siˈeɪ.ʃən/"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 428,
                                                        columnNumber: 201
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 428,
                                                columnNumber: 152
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "example-field",
                                                children: [
                                                    "Example sentence ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: "needed for sentence-building practice"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 429,
                                                        columnNumber: 61
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: newExample,
                                                        onChange: (e)=>setNewExample(e.target.value),
                                                        placeholder: "She stayed resilient through the challenge."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 429,
                                                        columnNumber: 113
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 429,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "button dark",
                                                type: "submit",
                                                disabled: !newWord.trim() || !newMeaning.trim(),
                                                children: [
                                                    "Add word ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "＋"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 115
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 430,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 426,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        className: "import-panel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                children: "Import a deck from JSON or CSV"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 432,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "import-content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            "Required fields: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                children: "word"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 144
                                                            }, this),
                                                            " and ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                children: "meaning"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 166
                                                            }, this),
                                                            ". Add ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                children: "example"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 192
                                                            }, this),
                                                            " for sentence ordering. Verb practice needs all three fields: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                children: "clozeSentence"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 274
                                                            }, this),
                                                            " containing ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                children: "___"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 312
                                                            }, this),
                                                            ", ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                children: "verbBase"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 330
                                                            }, this),
                                                            ", and explicit ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                children: "verbAnswer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 366
                                                            }, this),
                                                            ". Optional ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                children: "hint"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 400
                                                            }, this),
                                                            " is shown as a clue. JSON accepts ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                children: "verbAnswer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 451
                                                            }, this),
                                                            " as a string or array; CSV accepts multiple answers separated by ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                children: "|"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 539
                                                            }, this),
                                                            "."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 124
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "import-actions",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "button outline file-pick",
                                                                children: [
                                                                    "Choose JSON / CSV",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "file",
                                                                        accept: ".json,.csv,application/json,text/csv",
                                                                        onChange: (event)=>{
                                                                            void handleImport(event.target.files?.[0]);
                                                                            event.currentTarget.value = '';
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 432,
                                                                        columnNumber: 651
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 590
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-button",
                                                                onClick: ()=>downloadTemplate('json'),
                                                                children: "Download JSON example"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 827
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-button",
                                                                onClick: ()=>downloadTemplate('csv'),
                                                                children: "Download CSV example"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 930
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 558
                                                    }, this),
                                                    importMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "import-success",
                                                        role: "status",
                                                        children: importMessage
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 1055
                                                    }, this),
                                                    importError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "import-error",
                                                        role: "alert",
                                                        children: importError
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 1135
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 432,
                                                columnNumber: 92
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 432,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "selection-tools",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "eyebrow",
                                                        children: "Build your practice deck"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 47
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "selection-tabs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: selectionMode === 'manual' ? 'selected' : '',
                                                                onClick: ()=>{
                                                                    setSelectionMode('manual');
                                                                    setSelectionMessage('Choose words from the library below.');
                                                                },
                                                                children: "Choose manually"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 433,
                                                                columnNumber: 130
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "random-link",
                                                                onClick: ()=>router.push('/english/random'),
                                                                children: [
                                                                    "Pick Random ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "→"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 433,
                                                                        columnNumber: 418
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 433,
                                                                columnNumber: 327
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 98
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 433,
                                                columnNumber: 42
                                            }, this),
                                            selectionMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "selection-message",
                                                role: "status",
                                                children: selectionMessage
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 433,
                                                columnNumber: 474
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 433,
                                        columnNumber: 9
                                    }, this),
                                    !cards.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "empty",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "empty-mark",
                                                children: "✳"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 434,
                                                columnNumber: 49
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Your first word is waiting"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 434,
                                                columnNumber: 84
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Add a word above to start a deck. Include an example sentence to unlock sentence-building practice."
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 434,
                                                columnNumber: 119
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 434,
                                        columnNumber: 26
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "word-list",
                                        children: visibleCards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: `word-row ${selected.includes(card.id) ? 'is-selected' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "select-word",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: selected.includes(card.id),
                                                                disabled: selectionMode === "random",
                                                                onChange: (e)=>setSelected((items)=>e.target.checked ? [
                                                                            ...items,
                                                                            card.id
                                                                        ] : items.filter((id)=>id !== card.id)),
                                                                "aria-label": `Select ${card.word}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 435,
                                                                columnNumber: 42
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "checkmark",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 435,
                                                                columnNumber: 297
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "word-main",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                children: card.word
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 436,
                                                                columnNumber: 38
                                                            }, this),
                                                            card.pronunciation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                className: "pronunciation",
                                                                children: card.pronunciation
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 436,
                                                                columnNumber: 81
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: card.meaning
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 436,
                                                                columnNumber: 143
                                                            }, this),
                                                            card.example && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: [
                                                                    "“",
                                                                    card.example,
                                                                    "”"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 436,
                                                                columnNumber: 181
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "remove",
                                                        onClick: ()=>{
                                                            setCards((items)=>items.filter((item)=>item.id !== card.id));
                                                            setSelected((items)=>items.filter((id)=>id !== card.id));
                                                        },
                                                        "aria-label": `Remove ${card.word}`,
                                                        children: "×"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, card.id, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 434,
                                                columnNumber: 289
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 434,
                                        columnNumber: 234
                                    }, this),
                                    pageCount > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "library-pagination",
                                        "aria-label": "Word library pages",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "button outline",
                                                onClick: ()=>setLibraryPage(visiblePage - 1),
                                                disabled: visiblePage <= 1,
                                                "aria-label": "Previous page",
                                                children: "← Previous"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 438,
                                                columnNumber: 114
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-live": "polite",
                                                children: [
                                                    "Page ",
                                                    visiblePage,
                                                    " of ",
                                                    pageCount
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 438,
                                                columnNumber: 271
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "button outline",
                                                onClick: ()=>setLibraryPage(visiblePage + 1),
                                                disabled: visiblePage >= pageCount,
                                                "aria-label": "Next page",
                                                children: "Next →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 438,
                                                columnNumber: 336
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 438,
                                        columnNumber: 46
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "practice-bar",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "eyebrow",
                                                        children: "Ready when you are"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 44
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: [
                                                            selected.length,
                                                            " ",
                                                            selected.length === 1 ? 'word' : 'words',
                                                            " selected"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 89
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Pick a practice style to begin."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 175
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 439,
                                                columnNumber: 39
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "practice-actions",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "button outline",
                                                        disabled: selected.length < 2,
                                                        onClick: ()=>begin('choice'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "action-icon",
                                                                children: "◉"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 351
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        children: "Choose an answer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 439,
                                                                        columnNumber: 395
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        children: "Multiple choice"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 439,
                                                                        columnNumber: 418
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 389
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 455
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 253
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "button outline",
                                                        disabled: !selected.length,
                                                        onClick: ()=>begin('typing'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "action-icon",
                                                                children: "⌨"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 573
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        children: "Write an answer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 439,
                                                                        columnNumber: 617
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        children: "Recall from memory"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 439,
                                                                        columnNumber: 639
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 611
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 679
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 478
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 439,
                                                columnNumber: 219
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 439,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 424,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 422,
                        columnNumber: 27
                    }, this),
                    isPracticePage && mode === 'idle' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "exercise recovery",
                        role: "status",
                        "aria-labelledby": "practice-recovery-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "English practice"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 139
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                id: "practice-recovery-title",
                                children: "Resume your practice"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 182
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: practiceRecoveryMessage || 'Your practice session is ready.'
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 240
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "button dark",
                                type: "button",
                                onClick: backToEnglish,
                                children: [
                                    "Back to English practice ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 404
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 309
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 443,
                        columnNumber: 44
                    }, this) : isPracticePage && mode !== 'idle' ? mode === 'sentences' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "exercise",
                        "aria-live": "polite",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "back-link",
                                onClick: backToEnglish,
                                children: "← Back to English practice"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 548
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: [
                                    "Sentence matching · ",
                                    questionIndex + 1,
                                    " of ",
                                    sentenceCards.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 637
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "Build a sentence with ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: sentenceWord
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 755
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 729
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "exercise-hint",
                                children: "Tap each word in the right order. This sentence uses one of your selected vocabulary examples."
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 783
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sentence-answer",
                                children: sentenceAnswer.length ? sentenceAnswer.map((token, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: removeSentenceToken.bind(null, i),
                                        "aria-label": `Remove ${token} from your answer`,
                                        "data-available-tokens": sentenceTokens.length,
                                        children: [
                                            token,
                                            " ×"
                                        ]
                                    }, `${token}-${i}`, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 1001
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Your sentence will appear here"
                                }, void 0, false, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 443,
                                    columnNumber: 1205
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 910
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "token-tray",
                                children: sentenceTokens.map((token, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>choose(i),
                                        children: token
                                    }, `${token}-${i}`, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 1317
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 1255
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "button dark",
                                disabled: sentenceTokens.length > 0 || !sentenceAnswer.length,
                                onClick: ()=>sentenceCheck ? next() : setSentenceCheck(cleanSentence(sentenceAnswer.join(" ")) === cleanSentence(sentenceExpected)),
                                children: sentenceCheck === true ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Next sentence ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 443,
                                            columnNumber: 1669
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 443,
                                    columnNumber: 1653
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Check sentence ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 443,
                                            columnNumber: 1706
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 443,
                                    columnNumber: 1689
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 1397
                            }, this),
                            sentenceCheck !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `feedback-panel ${sentenceCheck ? 'correct' : 'incorrect'}`,
                                role: "status",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: sentenceCheck ? 'Correct!' : 'Not quite.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 1851
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Correct sentence: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: sentenceExpected
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 1932
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 1911
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 1760
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-button",
                                onClick: resetSentence,
                                children: "Start over"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 1968
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 443,
                        columnNumber: 499
                    }, this) : mode === 'complete' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "exercise completion",
                        "aria-live": "polite",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Session complete"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 2138
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Your practice flow is finished"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 2181
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flow-message",
                                children: flowMessage
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 2220
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    score,
                                    " correct answers"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 2265
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "button dark",
                                onClick: backToEnglish,
                                children: [
                                    "Back to English practice ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 2376
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 2295
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 443,
                        columnNumber: 2078
                    }, this) : mode === 'verb' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "exercise",
                        "aria-live": "polite",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "back-link",
                                onClick: backToEnglish,
                                children: "← Back to English practice"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 2479
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "quiz-head",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "eyebrow",
                                                children: "Verb forms · explicit answer key"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 2600
                                            }, this),
                                            flowMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flow-message",
                                                children: flowMessage
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 2675
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Complete the sentence"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 2721
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 2595
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "counter",
                                        children: [
                                            questionIndex + 1,
                                            " / ",
                                            verbCards.length,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 2823
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: [
                                                    score,
                                                    " correct"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 2829
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 2757
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 2568
                            }, this),
                            currentVerb ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "prompt-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Base verb: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: currentVerb.verbBase
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 2939
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 2922
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "cloze-prompt",
                                                children: currentVerb.clozeSentence
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 2975
                                            }, this),
                                            currentVerb.hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "verb-hint",
                                                children: [
                                                    "Clue: ",
                                                    currentVerb.hint
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 3057
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 2889
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "type-answer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "verb-answer",
                                                children: "Correct verb form"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 3150
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "verb-answer",
                                                        value: answer,
                                                        disabled: feedback !== null,
                                                        onChange: (event)=>setAnswer(event.target.value),
                                                        onKeyDown: (event)=>{
                                                            if (event.key === 'Enter') feedback === null ? checkVerb() : next();
                                                        },
                                                        placeholder: "Type the inflected form…"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 3209
                                                    }, this),
                                                    feedback === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "button dark",
                                                        disabled: !answer.trim(),
                                                        onClick: checkVerb,
                                                        children: [
                                                            "Check ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 3570
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 3486
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "button dark",
                                                        onClick: next,
                                                        children: [
                                                            "Next ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 3648
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 3596
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 3204
                                            }, this),
                                            feedback !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: feedback ? 'result good' : 'result bad',
                                                        children: feedback ? 'Correct verb form.' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                "Not quite. Expected: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                    children: currentVerb.verbAnswer?.join(' / ')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/App.tsx",
                                                                    lineNumber: 443,
                                                                    columnNumber: 3815
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/App.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 3792
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 3702
                                                    }, this),
                                                    currentVerb.example && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "answer-example",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: "Example:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 3921
                                                            }, this),
                                                            " ",
                                                            currentVerb.example
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 3891
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 3700
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 3121
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 2887
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "done",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "✦"
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 4001
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Practice complete"
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 4013
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            score,
                                            " correct out of ",
                                            verbCards.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 4039
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "button dark",
                                        onClick: ()=>backToEnglish(),
                                        children: [
                                            "Back to English ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "↻"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 4167
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 4087
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 3979
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 443,
                        columnNumber: 2430
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "exercise",
                        "aria-live": "polite",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "back-link",
                                onClick: backToEnglish,
                                children: "← Back to English practice"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 4259
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "quiz-head",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "eyebrow",
                                                children: mode === 'choice' ? 'Quick check · choose' : 'Quick check · recall'
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 4380
                                            }, this),
                                            flowMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flow-message",
                                                children: flowMessage
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 4492
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: mode === 'choice' ? 'Choose the meaning' : 'Write the meaning'
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 4538
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 4375
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "counter",
                                        children: [
                                            questionIndex + 1,
                                            " / ",
                                            sessionCards.length,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 4686
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: [
                                                    score,
                                                    " correct"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 4692
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 4617
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 4348
                            }, this),
                            current ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "prompt-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "What does this word mean?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 4777
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: current.word
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 4815
                                            }, this),
                                            current.pronunciation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "pronunciation",
                                                children: current.pronunciation
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 4864
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 4748
                                    }, this),
                                    mode === 'choice' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "answer-options",
                                                children: choiceOrder.map((id)=>cards.find((card)=>card.id === id)).filter((card)=>!!card).map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `option ${feedback !== null && card.id === current.id ? 'correct' : ''} ${feedback === false && clean(answer) === clean(card.meaning) ? 'wrong' : ''}`,
                                                        disabled: feedback !== null,
                                                        onClick: ()=>check(card.meaning),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: card.meaning
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 5352
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: feedback !== null && card.id === current.id ? '✓' : '↗'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 5379
                                                            }, this)
                                                        ]
                                                    }, card.id, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 5102
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 4950
                                            }, this),
                                            feedback !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: feedback ? 'feedback-panel correct' : 'feedback-panel incorrect',
                                                role: "status",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: feedback ? 'Correct!' : 'Not quite.'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 5578
                                                    }, this),
                                                    !feedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            "Expected meaning: ",
                                                            current.meaning
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 5647
                                                    }, this),
                                                    current.example && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: "Example:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 5713
                                                            }, this),
                                                            " ",
                                                            current.example
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 5710
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 5482
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 4948
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "type-answer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "meaning-answer",
                                                children: "Your answer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 5793
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "meaning-answer",
                                                        value: answer,
                                                        disabled: feedback !== null,
                                                        onChange: (e)=>setAnswer(e.target.value),
                                                        onKeyDown: (e)=>{
                                                            if (e.key === 'Enter') feedback === null ? check() : next();
                                                        },
                                                        placeholder: "Type the meaning…"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 5849
                                                    }, this),
                                                    feedback === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "button dark",
                                                        disabled: !answer.trim(),
                                                        onClick: ()=>check(),
                                                        children: [
                                                            "Check ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 6190
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 6102
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "button dark",
                                                        onClick: next,
                                                        children: [
                                                            questionIndex + 1 === sessionCards.length ? 'Continue' : 'Next',
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 6329
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 6216
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 5844
                                            }, this),
                                            feedback !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: feedback ? 'result good' : 'result bad',
                                                        children: feedback ? 'Correct — nice recall.' : `Not quite. Expected meaning: ${current.meaning}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 6383
                                                    }, this),
                                                    current.example && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "answer-example",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: "Example:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 6581
                                                            }, this),
                                                            " ",
                                                            current.example
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 6551
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 6381
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 5764
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "quiz-footer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: feedback === null ? 'Take your time — you’ve got this.' : 'Answer checked'
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 6659
                                            }, this),
                                            mode === 'choice' && feedback !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "button dark",
                                                onClick: next,
                                                children: [
                                                    questionIndex + 1 === sessionCards.length ? 'Continue to matching' : 'Next word',
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 6921
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 6791
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 6630
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 4746
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "done",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "✦"
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 6979
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Practice complete"
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 6991
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            score,
                                            " correct out of ",
                                            sessionCards.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 7017
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "button dark",
                                        onClick: ()=>begin(mode === 'choice' ? 'choice' : 'typing'),
                                        children: [
                                            "Try again ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "↻"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 443,
                                                columnNumber: 7173
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 443,
                                        columnNumber: 7068
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 443,
                                columnNumber: 6957
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 443,
                        columnNumber: 4210
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 412,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "wordcraft"
                    }, void 0, false, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 445,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Small steps add up to fluency."
                    }, void 0, false, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 445,
                        columnNumber: 35
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 445,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/App.tsx",
        lineNumber: 410,
        columnNumber: 10
    }, this);
}
_s(App, "p00C4MvYRjkRm2Q9+Q+6YLHc1q0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_App_tsx_166lazp._.js.map