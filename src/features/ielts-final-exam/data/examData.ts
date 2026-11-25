// Exam data for the IELTS Final Exam product. Add new sets here without touching the UI components.

export type ExerciseKind = 'text' | 'select' | 'choice' | 'multi'

export type ExerciseItem = {
  id: string
  kind: ExerciseKind
  prompt: string
  /** Options for select, choice and multi items. */
  options?: string[]
  /** text: accepted answers. select/choice: the single correct option. multi: every correct option. */
  answers: string[]
  /** Maximum words for text answers (the word limit shown in the instruction). */
  wordLimit?: number
  /** Vietnamese explanation that points to the paragraph containing the evidence. */
  explanation: string
}

export type Paragraph = { label: string; text: string }

export type ReadingType =
  | 'completion'
  | 'short_answer'
  | 'matching_headings'
  | 'tfng'
  | 'ynng'
  | 'matching_info'
  | 'multiple_choice'

export type ReadingSet = {
  id: string
  type: ReadingType
  typeName: string
  title: string
  topic: string
  instruction: string
  passage: Paragraph[]
  /** Short checklist shown beside the questions. */
  tactics: string[]
  items: ExerciseItem[]
}

const TFNG = ['TRUE', 'FALSE', 'NOT GIVEN']
const YNNG = ['YES', 'NO', 'NOT GIVEN']
const PARAGRAPHS = ['A', 'B', 'C', 'D']

const TACTICS_COMPLETION = [
  'Đọc kỹ hướng dẫn và giới hạn từ (WORD LIMIT). Gạch chân từ khóa và nghĩ các cách diễn đạt tương đương.',
  'Xác định loại thông tin (tên, ngày tháng, nơi chốn, con số) và dạng từ (danh từ, động từ, tính từ) cần điền.',
  'Scan để tìm đoạn chứa từ khóa, đọc kỹ đoạn đó để rút trích chính xác.',
  'Kiểm tra ngữ pháp, chính tả và giới hạn từ. Các câu thường xuất hiện đúng thứ tự trong bài.',
]
const TACTICS_TFNG = [
  'Gạch chân từ khóa và chú ý từ tuyệt đối như all, only, never, always.',
  'Scan để định vị đoạn văn chứa thông tin, rồi đối chiếu chi tiết.',
  'TRUE/YES: khớp hoàn toàn. FALSE/NO: trái ngược trực tiếp. NOT GIVEN: không đủ thông tin, không tự suy diễn.',
]
const TACTICS_MATCHING = [
  'Đọc trước danh sách tiêu đề, gạch chân từ khóa phân biệt các tiêu đề.',
  'Đọc câu chủ đề và ý bao quát của từng đoạn; loại tiêu đề chỉ chứa một chi tiết nhỏ.',
  'Matching information: scan tìm tên riêng hoặc từ khóa trong các đoạn A–D, rồi loại trừ dần.',
]
const TACTICS_MC = [
  'Gạch chân từ khóa trong câu hỏi, scan tìm đoạn liên quan trước khi đọc các lựa chọn.',
  'Đối chiếu từng lựa chọn để loại đáp án bẫy: sai một chi tiết, đảo quan hệ nhân quả, hoặc không được nhắc tới.',
]

export const readingSets: ReadingSet[] = [
  // ───────────── 1. Sentence completion ─────────────
  {
    id: 'sentence-completion',
    type: 'completion',
    typeName: 'Sentence Completion',
    title: 'Satellite Radar Monitoring of Active Volcanoes',
    topic: 'Công nghệ & Địa chất',
    instruction: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
    passage: [
      { label: 'A', text: "Monitoring active volcanoes has historically been a hazardous task for geologists, often requiring field teams to install fragile sensors directly onto unstable slopes. In recent decades, however, a remote-sensing technique known as Interferometric Synthetic Aperture Radar (InSAR) has transformed volcanic surveillance. Orbiting hundreds of kilometers above the Earth, radar satellites transmit microwave beams toward the ground and measure the time it takes for the signals to bounce back. Because these beams can penetrate thick clouds and operate both day and night, scientists can observe remote peaks continuously regardless of weather conditions." },
      { label: 'B', text: "The core principle of InSAR relies on comparing two radar images of the same volcanic area taken at different times. When magma, or molten rock, rises from deep within the Earth's crust and accumulates beneath a volcano, it exerts immense upward pressure, causing the surface to swell by a few centimeters. By overlapping the before-and-after radar waves, researchers generate a colorful visual map called an interferogram. The concentric rainbow-colored bands on this map reveal subtle ground deformation long before any visible ash or lava emerges at the summit." },
      { label: 'C', text: "Despite its precision, InSAR faces certain environmental limitations. Dense forest canopies can scatter the radar signals, creating signal interference that obscures ground movement. Similarly, heavy snowfall during winter months alters the surface reflection, making data interpretation difficult. Nevertheless, when combined with traditional seismic measurements, satellite radar provides an invaluable early-warning system that helps local authorities evacuate nearby communities safely." },
    ],
    tactics: TACTICS_COMPLETION,
    items: [
      { id: 'c1', kind: 'text', prompt: "Radar satellites send out ______ to measure distances to the Earth's surface.", answers: ['microwave beams'], wordLimit: 2, explanation: 'Đoạn A: "...satellites transmit microwave beams toward the ground..."' },
      { id: 'c2', kind: 'text', prompt: 'Unlike optical cameras, radar signals are able to pass through ______.', answers: ['thick clouds'], wordLimit: 2, explanation: 'Đoạn A: "...these beams can penetrate thick clouds..."' },
      { id: 'c3', kind: 'text', prompt: 'Underground pressure from rising ______ forces the volcanic surface to expand slightly.', answers: ['molten rock', 'magma'], wordLimit: 2, explanation: 'Đoạn B: "When magma, or molten rock, rises... causing the surface to swell". "Magma" cũng được chấp nhận như đáp án thay thế.' },
      { id: 'c4', kind: 'text', prompt: 'Scientists analyze ground movement using a multi-coloured image termed an ______.', answers: ['interferogram'], wordLimit: 2, explanation: 'Đoạn B: "...visual map called an interferogram."' },
      { id: 'c5', kind: 'text', prompt: 'Thick ______ can disrupt radar waves and reduce measurement accuracy.', answers: ['forest canopies', 'forest canopy'], wordLimit: 2, explanation: 'Đoạn C: "Dense forest canopies can scatter the radar signals, creating signal interference..."' },
    ],
  },

  // ───────────── 2. Short answer ─────────────
  {
    id: 'short-answer',
    type: 'short_answer',
    typeName: 'Short Answer Questions',
    title: 'Biomimicry in Sustainable Architecture',
    topic: 'Kiến trúc & mô phỏng sinh học',
    instruction: 'Answer the questions below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
    passage: [
      { label: 'A', text: "In modern sustainable construction, architects are increasingly turning to biomimicry—the practice of imitating nature's time-tested designs to solve human engineering challenges. One of the most celebrated examples is the Eastgate Centre in Harare, Zimbabwe, designed by architect Mick Pearce. Rather than relying on conventional, energy-hungry air conditioning systems, Pearce drew inspiration from the self-cooling mounds built by African termites." },
      { label: 'B', text: "Inside a termite mound, millions of insects generate substantial heat through their daily activities and fungal farming. To survive in a harsh climate where outside temperatures swing dramatically between day and night, termites construct a complex network of vertical chimneys and horizontal tunnels. Warm air rises and escapes through vents at the peak, while cooler air is drawn in through openings near the base. Furthermore, termites constantly open and close specific vents throughout the day to regulate internal airflow and maintain a remarkably stable temperature of around 30 degrees Celsius." },
      { label: 'C', text: "Translating this biological configuration into concrete and brick, the Eastgate Centre utilizes high-mass building materials that absorb heat during the sunny afternoon without raising indoor temperatures. At night, low-power fans flush cool night air through hollow floors and vertical ducts, releasing the stored heat before dawn. As a result, this eco-friendly building consumes approximately 90 percent less energy for ventilation than standard office complexes of a similar size, proving that ancient insect engineering holds vital lessons for greener cities." },
    ],
    tactics: [
      'Xác định loại câu hỏi (what, where, which, how much) để biết cần loại thông tin nào.',
      'Scan tìm từ khóa không đổi như tên riêng, con số, đơn vị.',
      'Trả lời ngắn gọn trong giới hạn từ; không thêm chi tiết mà câu hỏi không yêu cầu.',
    ],
    items: [
      { id: 's1', kind: 'text', prompt: 'Which natural structure inspired the cooling design of the Eastgate Centre?', answers: ['termite mounds', 'termite mound'], wordLimit: 2, explanation: 'Đoạn A: "...drew inspiration from the self-cooling mounds built by African termites."' },
      { id: 's2', kind: 'text', prompt: 'Where is the cool air pulled into a termite mound?', answers: ['the base'], wordLimit: 2, explanation: 'Đoạn B: "...cooler air is drawn in through openings near the base."' },
      { id: 's3', kind: 'text', prompt: 'What exact indoor temperature do termites maintain inside their mounds?', answers: ['30 degrees', '30°C'], wordLimit: 2, explanation: 'Đoạn B: "...maintain a remarkably stable temperature of around 30 degrees Celsius." Chấp nhận "30°C".' },
      { id: 's4', kind: 'text', prompt: 'Which structural parts of the Eastgate Centre carry cool air during the night?', answers: ['hollow floors', 'vertical ducts'], wordLimit: 2, explanation: 'Đoạn C: "...flush cool night air through hollow floors and vertical ducts..." Chỉ cần một trong hai cụm.' },
      { id: 's5', kind: 'text', prompt: 'By what percentage does the building reduce energy used for ventilation?', answers: ['90 percent', '90%'], wordLimit: 2, explanation: 'Đoạn C: "...consumes approximately 90 percent less energy for ventilation..."' },
    ],
  },

  // ───────────── 3. Note completion ─────────────
  {
    id: 'note-completion',
    type: 'completion',
    typeName: 'Note / Table / Flow-chart Completion',
    title: 'Messages to the Stars: The Voyager Golden Records',
    topic: 'Vũ trụ & khám phá',
    instruction: 'Complete the notes below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
    passage: [
      { label: 'A', text: "Launched by NASA in 1977, the twin spacecraft Voyager 1 and Voyager 2 embarked on an unprecedented mission to explore the outer planets before continuing into interstellar space. Attached to the exterior of each spacecraft is a twelve-inch gold-plated copper phonograph disk, known as the Golden Record. Designed by a committee chaired by astronomer Carl Sagan, this interstellar time capsule was created to communicate the story of our world to any extraterrestrial civilization that might encounter the probes millions of years from now." },
      { label: 'B', text: "To protect the delicate recording from cosmic radiation and micrometeorite erosion, each disk is encased in a protective aluminum cover. Electroplated onto this jacket is an ultra-pure sample of uranium-238, which acts as a radioactive clock allowing future finders to calculate the exact launch date of the spacecraft. Alongside the uranium source, visual symbols etched onto the cover explain how to operate the stylus and play the audio and video signals encoded on the disk." },
      { label: 'C', text: "The contents of the Golden Record form a rich compilation of human culture and natural history. The first section features 116 encoded photographs illustrating mathematical concepts, human anatomy, diverse landscapes, and everyday life across continents. Following the visual archive, spoken greetings are recorded in 55 languages, ranging from ancient Sumerian to modern Vietnamese and English. The final portion includes 90 minutes of musical selections—from Bach's classical compositions to indigenous folk songs—alongside natural Earth sounds such as ocean waves, thunder, bird chirps, and a human heartbeat." },
    ],
    tactics: TACTICS_COMPLETION,
    items: [
      { id: 'n1', kind: 'text', prompt: 'Made of copper coated with gold, measuring (1) ______ in diameter.', answers: ['twelve inches', '12 inches'], wordLimit: 2, explanation: 'Đoạn A: "...a twelve-inch gold-plated copper phonograph disk..."' },
      { id: 'n2', kind: 'text', prompt: 'Protected inside a durable (2) ______ jacket.', answers: ['aluminum', 'aluminium'], wordLimit: 2, explanation: 'Đoạn B: "...encased in a protective aluminum cover."' },
      { id: 'n3', kind: 'text', prompt: 'Contains (3) ______ so recipients can determine when the probe left Earth.', answers: ['uranium-238'], wordLimit: 2, explanation: 'Đoạn B: "...an ultra-pure sample of uranium-238, which acts as a radioactive clock..."' },
      { id: 'n4', kind: 'text', prompt: 'Visual archive: (4) ______ images depicting science, nature, and human society.', answers: ['116'], wordLimit: 2, explanation: 'Đoạn C: "The first section features 116 encoded photographs..."' },
      { id: 'n5', kind: 'text', prompt: 'Audio greetings: recorded in a total of (5) ______.', answers: ['55 languages', '55'], wordLimit: 2, explanation: 'Đoạn C: "...spoken greetings are recorded in 55 languages..."' },
      { id: 'n6', kind: 'text', prompt: 'Soundscape: 90 minutes of global music plus natural sounds ending with a (6) ______.', answers: ['human heartbeat', 'heartbeat'], wordLimit: 2, explanation: 'Đoạn C: "...natural Earth sounds such as... and a human heartbeat."' },
    ],
  },

  // ───────────── 4. True / False / Not Given ─────────────
  {
    id: 'true-false-not-given',
    type: 'tfng',
    typeName: 'True / False / Not Given',
    title: 'Sustainable Eco-Tourism in the Mekong Delta',
    topic: 'Du lịch & môi trường',
    instruction: 'Write TRUE if the statement agrees with the information in the passage, FALSE if it contradicts it, or NOT GIVEN if there is no information on this.',
    passage: [
      { label: 'A', text: "Over the past decade, the Mekong Delta in southern Vietnam has emerged as a premier destination for travelers seeking authentic cultural and ecological experiences. Unlike mass tourism in major coastal resorts, eco-tourism in provinces such as Ben Tre, Can Tho, and Dong Thap emphasizes low-impact travel that preserves fragile wetland ecosystems while generating direct income for local farming households." },
      { label: 'B', text: "A typical eco-tour in this region invites visitors to navigate shaded canals aboard traditional wooden sampans, stay in family-run homestays surrounded by tropical fruit orchards, and participate in agricultural workshops. According to a 2025 regional tourism survey, international arrivals choosing community-based homestays increased by 35 percent compared to pre-pandemic figures. Local authorities have partnered with environmental organizations to train boat operators and homestay hosts in waste reduction, solar energy adoption, and plastic-free hospitality." },
      { label: 'C', text: "However, rapid growth brings notable challenges. Unregulated motorboat traffic along narrow waterways has accelerated riverbank erosion, threatening riverside orchards and aquatic habitats. Moreover, seasonal saltwater intrusion caused by rising sea levels has forced several orchard owners to modify their traditional farming practices. To safeguard the long-term viability of the delta, provincial planners are currently introducing strict daily visitor caps in sensitive bird sanctuaries and mangrove reserves." },
    ],
    tactics: TACTICS_TFNG,
    items: [
      { id: 't1', kind: 'select', prompt: 'Eco-tourism in the Mekong Delta focuses on minimizing environmental harm and supporting local families economically.', options: TFNG, answers: ['TRUE'], explanation: 'Đoạn A: "...emphasizes low-impact travel that preserves fragile wetland ecosystems while generating direct income for local farming households."' },
      { id: 't2', kind: 'select', prompt: 'More than half of all international tourists visiting Vietnam in 2025 stayed in Mekong Delta homestays.', options: TFNG, answers: ['NOT GIVEN'], explanation: 'Đoạn B chỉ nói lượng khách chọn homestay tăng 35% so với trước đại dịch. Bài không nói họ chiếm hơn một nửa tổng khách quốc tế.' },
      { id: 't3', kind: 'select', prompt: 'Local boat operators have received training on how to reduce waste and avoid single-use plastics.', options: TFNG, answers: ['TRUE'], explanation: 'Đoạn B: "...train boat operators and homestay hosts in waste reduction... and plastic-free hospitality."' },
      { id: 't4', kind: 'select', prompt: 'Motorized boats operating in narrow canals have contributed to the wearing away of riverbanks.', options: TFNG, answers: ['TRUE'], explanation: 'Đoạn C: "Unregulated motorboat traffic along narrow waterways has accelerated riverbank erosion..."' },
      { id: 't5', kind: 'select', prompt: 'Daily visitor limits have completely eliminated saltwater intrusion in mangrove reserves.', options: TFNG, answers: ['FALSE'], explanation: 'Đoạn C: xâm nhập mặn do nước biển dâng gây ra. Giới hạn khách mới đang được áp dụng ("currently introducing"), chưa hề xóa bỏ xâm nhập mặn.' },
    ],
  },

  // ───────────── 5. Yes / No / Not Given ─────────────
  {
    id: 'yes-no-not-given',
    type: 'ynng',
    typeName: 'Yes / No / Not Given',
    title: 'Artificial Light at Night: The Hidden Biological Toll',
    topic: 'Môi trường đô thị',
    instruction: "Write YES if the statement agrees with the writer's views, NO if it contradicts them, or NOT GIVEN if the writer does not express a view on it.",
    passage: [
      { label: 'A', text: "For centuries, human progress has been synonymous with pushing back the darkness. Today, however, the relentless expansion of LED streetlamps, illuminated billboards, and glass-walled skyscrapers has bathed modern cities in an artificial glow that never truly fades. While urban planners routinely praise bright lighting for enhancing nighttime commerce and pedestrian safety, I contend that we have dangerously underestimated the biological toll this light pollution inflicts on urban wildlife." },
      { label: 'B', text: "Countless nocturnal species rely on natural cycles of light and darkness to regulate essential behaviors such as foraging, navigation, and reproduction. Migratory birds, for instance, use starlight and moonlight to orient themselves across continents; when blinded by the glare of brightly lit towers, millions fatally collide with windows each year. Similarly, artificial illumination near coastal beaches disorients newly hatched sea turtles, drawing them away from the safety of the ocean toward busy roadways." },
      { label: 'C', text: "Fortunately, unlike chemical pollutants that linger in soil and water for decades, light pollution is entirely reversible with immediate policy action. Municipalities do not need to plunge cities into total darkness to protect biodiversity. Simply shielding outdoor fixtures so light shines downward, switching to warmer amber-colored bulbs, and dimming decorative lights after midnight are practical, cost-effective remedies that would restore natural night skies without compromising public security." },
    ],
    tactics: TACTICS_TFNG,
    items: [
      { id: 'y1', kind: 'select', prompt: 'The writer believes society has failed to recognize how severely artificial night lighting harms city animals.', options: YNNG, answers: ['YES'], explanation: 'Đoạn A: "...I contend that we have dangerously underestimated the biological toll this light pollution inflicts on urban wildlife."' },
      { id: 'y2', kind: 'select', prompt: 'Street crime rates drop dramatically whenever cities install brighter LED streetlamps.', options: YNNG, answers: ['NOT GIVEN'], explanation: 'Đoạn A chỉ nói các nhà quy hoạch khen ngợi ánh sáng vì an toàn cho người đi bộ. Bài không có dữ liệu về tội phạm đường phố.' },
      { id: 'y3', kind: 'select', prompt: 'Bright city buildings interfere with the natural navigation cues used by migrating birds.', options: YNNG, answers: ['YES'], explanation: 'Đoạn B: chim di cư dùng ánh sao và ánh trăng để định hướng; ánh sáng chói làm chúng bị lạc hướng.' },
      { id: 'y4', kind: 'select', prompt: 'Cleaning up light pollution is just as slow and difficult as removing toxic chemicals from the soil.', options: YNNG, answers: ['NO'], explanation: 'Đoạn C: trái ngược hoàn toàn. Ô nhiễm ánh sáng có thể đảo ngược ngay bằng chính sách, không kéo dài như hóa chất độc.' },
      { id: 'y5', kind: 'select', prompt: 'Dimming non-essential lights late at night can help wildlife while keeping citizens safe.', options: YNNG, answers: ['YES'], explanation: 'Đoạn C: làm mờ đèn trang trí sau nửa đêm là giải pháp thực tế, ít tốn kém, không làm giảm an ninh công cộng.' },
    ],
  },

  // ───────────── 6. Multiple choice ─────────────
  {
    id: 'multiple-choice',
    type: 'multiple_choice',
    typeName: 'Multiple Choice (single & multiple answers)',
    title: 'Collaborative Learning in Modern Universities',
    topic: 'Giáo dục đại học',
    instruction: 'Questions 1–2: choose ONE letter. Questions 3 & 4: choose TWO letters.',
    passage: [
      { label: 'A', text: "Traditional university classrooms have long operated on a competitive model, where individual students vie for top grades, scholarships, and class rankings. While healthy academic rivalry can motivate self-directed learners to excel, modern employers increasingly report that graduates often struggle when transitioning into team-based workplaces. Consequently, many higher education institutions are redesigning their curricula around collaborative learning methodologies." },
      { label: 'B', text: "In a collaborative classroom, students work in small, diverse groups to solve complex case studies, conduct laboratory experiments, or co-author research papers. Research conducted by educational psychologists demonstrates that when learners explain concepts to their peers, they achieve deeper cognitive retention than when studying alone. Furthermore, group projects expose students to varied perspectives, fostering critical thinking and cross-cultural communication skills that are vital in an interconnected global economy." },
      { label: 'C', text: "Nevertheless, implementing teamwork effectively requires careful instructional design. A common pitfall is uneven participation, where one or two dedicated students shoulder the entire workload while passive members take equal credit. To prevent this, lecturers must establish transparent individual accountability—such as peer evaluations, individual reflection logs, and distinct role assignments within each team—ensuring that every student contributes meaningfully to the final outcome." },
    ],
    tactics: TACTICS_MC,
    items: [
      { id: 'q1', kind: 'choice', prompt: '1. Why are many universities shifting away from purely competitive teaching methods?', options: ['A. Individual grading systems are too expensive to administer.', 'B. Graduates often lack the teamwork skills required by modern employers.', 'C. Scholarships are no longer awarded based on class rankings.', 'D. Students refuse to study independently for final examinations.'], answers: ['B. Graduates often lack the teamwork skills required by modern employers.'], explanation: 'Đoạn A: "...modern employers increasingly report that graduates often struggle when transitioning into team-based workplaces."' },
      { id: 'q2', kind: 'choice', prompt: '2. According to educational psychologists, what happens when students teach or explain ideas to classmates?', options: ['A. They finish their assignments much faster.', 'B. They remember and understand the material more deeply.', 'C. They become less reliant on university libraries.', 'D. They avoid disagreements during group discussions.'], answers: ['B. They remember and understand the material more deeply.'], explanation: 'Đoạn B: "...when learners explain concepts to their peers, they achieve deeper cognitive retention than when studying alone."' },
      { id: 'q3', kind: 'multi', prompt: '3 & 4. Which TWO strategies are recommended to ensure fair participation in group projects? (Choose TWO letters.)', options: ['A. Allowing students to choose their own final grades', 'B. Reducing the number of research papers per semester', 'C. Using peer assessments among group members', 'D. Assigning specific responsibilities to each student', 'E. Separating high-achieving students from weaker learners'], answers: ['C. Using peer assessments among group members', 'D. Assigning specific responsibilities to each student'], explanation: 'Đoạn C: "...such as peer evaluations [C], individual reflection logs, and distinct role assignments within each team [D]..." Các lựa chọn A, B, E không được khuyến nghị trong bài.' },
    ],
  },

  // ───────────── 7. Matching headings & matching information ─────────────
  {
    id: 'matching-headings',
    type: 'matching_headings',
    typeName: 'Matching Headings & Matching Information',
    title: 'The Ecological Role of Ancient Giant Trees',
    topic: 'Sinh thái rừng',
    instruction: 'Questions 1–4: choose the correct heading (i–vi) for paragraphs A–D. Questions 5–7: write the letter (A–D) of the paragraph that contains each piece of information. Two headings are not needed.',
    passage: [
      { label: 'A', text: 'Across the world\'s remaining old-growth forests, colossal trees—some towering over 90 meters high and living for more than a millennium—serve as the structural backbone of terrestrial ecosystems. These botanical giants only reach such extraordinary dimensions under specific environmental conditions, requiring abundant rainfall, nutrient-rich soils, and prolonged protection from severe windstorms and wildfires.' },
      { label: 'B', text: 'Far from being mere timber resources, ancient trees function as vertical apartment complexes for biodiversity. Their thick, furrowed bark traps moisture and organic debris, supporting rare mosses, lichens, and epiphytic ferns that cannot survive on younger trees. High in the upper canopy, hollows formed by broken branches provide essential nesting shelters for endangered owls, bats, and arboreal mammals.' },
      { label: 'C', text: 'Beyond sheltering wildlife, large old trees play a disproportionately vital role in regulating the global climate. According to forest ecologist Dr. Elena Vance, a single mature giant can absorb and store as much atmospheric carbon in one year as dozens of young saplings combined. Their massive root networks also stabilize hillsides and filter rainwater, maintaining clean water supplies for downstream communities.' },
      { label: 'D', text: 'Tragically, populations of giant trees are declining rapidly worldwide due to commercial logging, agricultural expansion, and prolonged droughts linked to climate change. Because these trees require centuries to mature, replanting seedlings cannot quickly replace their lost ecological functions. Conservationists argue that strict legal protections for existing old-growth stands, combined with buffer zones around isolated giants, are urgently needed to prevent irreversible biodiversity loss.' },
    ],
    tactics: TACTICS_MATCHING,
    items: [
      { id: 'h1', kind: 'select', prompt: 'Paragraph A', options: ['i. Urgent conservation measures to protect aging tree populations', 'ii. Commercial uses of ancient timber in modern industry', 'iii. Environmental conditions required for trees to reach massive sizes', 'iv. How giant trees provide habitats for diverse flora and fauna', 'v. The contribution of large trees to carbon storage and water quality', 'vi. How invasive insects destroy forest canopies'], answers: ['iii. Environmental conditions required for trees to reach massive sizes'], explanation: 'Đoạn A nói về điều kiện mưa, đất giàu dinh dưỡng và ít bão, cháy để cây đạt kích thước khổng lồ.' },
      { id: 'h2', kind: 'select', prompt: 'Paragraph B', options: ['i. Urgent conservation measures to protect aging tree populations', 'ii. Commercial uses of ancient timber in modern industry', 'iii. Environmental conditions required for trees to reach massive sizes', 'iv. How giant trees provide habitats for diverse flora and fauna', 'v. The contribution of large trees to carbon storage and water quality', 'vi. How invasive insects destroy forest canopies'], answers: ['iv. How giant trees provide habitats for diverse flora and fauna'], explanation: 'Đoạn B mô tả cây cổ thụ như "chung cư thẳng đứng" cho rêu, dương xỉ, chim cú và dơi.' },
      { id: 'h3', kind: 'select', prompt: 'Paragraph C', options: ['i. Urgent conservation measures to protect aging tree populations', 'ii. Commercial uses of ancient timber in modern industry', 'iii. Environmental conditions required for trees to reach massive sizes', 'iv. How giant trees provide habitats for diverse flora and fauna', 'v. The contribution of large trees to carbon storage and water quality', 'vi. How invasive insects destroy forest canopies'], answers: ['v. The contribution of large trees to carbon storage and water quality'], explanation: 'Đoạn C dẫn lời TS. Elena Vance về khả năng hấp thụ carbon và lọc nước mưa của rễ cây.' },
      { id: 'h4', kind: 'select', prompt: 'Paragraph D', options: ['i. Urgent conservation measures to protect aging tree populations', 'ii. Commercial uses of ancient timber in modern industry', 'iii. Environmental conditions required for trees to reach massive sizes', 'iv. How giant trees provide habitats for diverse flora and fauna', 'v. The contribution of large trees to carbon storage and water quality', 'vi. How invasive insects destroy forest canopies'], answers: ['i. Urgent conservation measures to protect aging tree populations'], explanation: 'Đoạn D nêu nguyên nhân suy giảm và các biện pháp bảo tồn khẩn cấp như bảo vệ pháp lý và vùng đệm.' },
      { id: 'm5', kind: 'select', prompt: 'A comparison between the carbon absorption capacity of old trees and young trees.', options: PARAGRAPHS, answers: ['C'], explanation: 'Đoạn C: "...a single mature giant can absorb... as much atmospheric carbon... as dozens of young saplings combined."' },
      { id: 'm6', kind: 'select', prompt: 'Why planting new trees is not an immediate substitute for cutting down ancient ones.', options: PARAGRAPHS, answers: ['D'], explanation: 'Đoạn D: "Because these trees require centuries to mature, replanting seedlings cannot quickly replace..."' },
      { id: 'm7', kind: 'select', prompt: 'Examples of animals that use tree cavities for raising their young or resting.', options: PARAGRAPHS, answers: ['B'], explanation: 'Đoạn B: "...hollows... provide essential nesting shelters for endangered owls, bats, and arboreal mammals."' },
    ],
  },
]

export function getReadingSet(id: string): ReadingSet | undefined {
  return readingSets.find((set) => set.id === id)
}

// ───────────────────────── Writing ─────────────────────────

export type Series = { name: string; values: number[] }
export type LineBarData = { labels: string[]; unit: string; series: Series[] }
export type PieData = { title: string; slices: { label: string; value: number }[] }
export type TableData = { headers: string[]; rows: string[][] }

export type ChartSpec =
  | { kind: 'bar'; data: LineBarData }
  | { kind: 'line'; data: LineBarData }
  | { kind: 'pie'; pies: PieData[] }
  | { kind: 'table'; table: TableData }
  | { kind: 'multiple'; bar: LineBarData; pies: PieData[] }

export type UsefulWord = { word: string; meaning: string }

export type WritingTask1 = {
  id: string
  task: 1
  chart: 'line' | 'bar' | 'pie' | 'table' | 'multiple'
  period: 'Static' | 'Dynamic'
  title: string
  prompt: string
  /** Note shown under the chart, e.g. rounding notes from the source. */
  chartNote?: string
  spec: ChartSpec
  hints: { words: UsefulWord[]; sentence: string }
  model: { introduction: string; overview: string; body1: string; body2: string }
}

export type WritingTask2 = {
  id: string
  task: 2
  essayType: 'opinion' | 'discussion' | 'advantages'
  title: string
  prompt: string
  hints: { words: UsefulWord[]; sentence: string }
  model: { introduction: string; body1: string; body2: string; conclusion: string }
}

export const CHART_NAMES: Record<WritingTask1['chart'], string> = {
  line: 'Line Graph',
  bar: 'Bar Chart',
  pie: 'Pie Chart',
  table: 'Table',
  multiple: 'Multiple Charts',
}

export const ESSAY_NAMES: Record<WritingTask2['essayType'], string> = {
  opinion: 'Opinion (Agree / Disagree)',
  discussion: 'Discussion & Opinion',
  advantages: 'Advantages & Disadvantages',
}

export const writingTask1: WritingTask1[] = [
  // ───────────── Task 1 · 1.1 Dynamic line graph ─────────────
  {
    id: 'task1-communication-methods',
    task: 1,
    chart: 'line',
    period: 'Dynamic',
    title: 'Communication methods of US teenagers (2006–2009)',
    prompt: 'The line graph below illustrates the percentage of teenagers in one US state using four different methods of communication between November 2006 and September 2009.',
    spec: {
      kind: 'line',
      data: {
        labels: ['Nov 2006', 'Nov 2007', 'Feb 2008', 'Sep 2009'],
        unit: '%',
        series: [
          { name: 'Text messages', values: [28, 38, 39, 55] },
          { name: 'Calls on cell phones', values: [35, 36, 38, 39] },
          { name: 'Talk face-to-face', values: [32, 40, 30, 34] },
          { name: 'Email', values: [15, 17, 16, 10] },
        ],
      },
    },
    hints: {
      words: [
        { word: 'increase significantly / surge / rocket', meaning: 'tăng mạnh' },
        { word: 'rise steadily / grow gradually', meaning: 'tăng đều' },
        { word: 'decrease sharply / plummet', meaning: 'giảm mạnh' },
        { word: 'decline slightly / dip', meaning: 'giảm nhẹ' },
        { word: 'fluctuate around', meaning: 'dao động quanh mức' },
        { word: 'reach a peak of', meaning: 'đạt đỉnh ở mức' },
      ],
      sentence: 'Text messaging surged from 28% in late 2006 to 38% in November 2007, before rocketing to 55% in September 2009.',
    },
    model: {
      introduction: 'The line graph compares the proportion of adolescents in a US state utilizing four distinct communication channels—text messaging, mobile phone calls, face-to-face conversations, and email—from November 2006 to September 2009.',
      overview: 'Overall, text messaging experienced the most dramatic growth, overtaking all other methods to become the dominant mode of communication by the end of the period. In contrast, email remained the least popular option and saw a slight downward trend.',
      body1: 'In November 2006, cell phone calls were the most common method at 35%, closely followed by face-to-face communication at 32% and text messages at 28%. Over the following year, the figure for face-to-face interaction rose to a peak of 40% in November 2007 before dropping to 30% in February 2008 and recovering slightly to 34% by September 2009. Meanwhile, mobile phone calls climbed steadily throughout the timeframe, reaching 39% at the end.',
      body2: 'Regarding text messaging, usage surged from 28% in late 2006 to 38% in November 2007, before rocketing to 55% in September 2009. Conversely, email started at just 15%, fluctuated mildly between 16% and 17% during 2007 and early 2008, and eventually declined to 10% in September 2009.',
    },
  },

  // ───────────── Task 1 · 1.2 Dynamic bar chart ─────────────
  {
    id: 'task1-households-cars',
    task: 1,
    chart: 'bar',
    period: 'Dynamic',
    title: 'Households by number of cars (1971–2001)',
    prompt: 'The bar chart below shows the percentage of households with different numbers of cars in a European country between 1971 and 2001.',
    chartNote: 'Lưu ý: tổng tỷ lệ của mỗi năm có thể chênh lệch 1–2% do làm tròn số.',
    spec: {
      kind: 'bar',
      data: {
        labels: ['1971', '1981', '1991', '2001'],
        unit: '%',
        series: [
          { name: 'No car', values: [47, 42, 30, 28] },
          { name: '1 car', values: [35, 31, 47, 43] },
          { name: '2 or more cars', values: [16, 28, 21, 28] },
        ],
      },
    },
    hints: {
      words: [
        { word: 'rise steadily / grow gradually', meaning: 'tăng đều' },
        { word: 'decrease sharply / plummet', meaning: 'giảm mạnh' },
        { word: 'the highest / lowest proportion', meaning: 'tỷ lệ cao nhất / thấp nhất' },
        { word: 'account for / make up', meaning: 'chiếm' },
        { word: 'whereas / in contrast', meaning: 'trong khi / ngược lại' },
        { word: 'overtake', meaning: 'vượt qua' },
      ],
      sentence: 'By 1991 and 2001, owning a single car had replaced having no car as the most common household arrangement.',
    },
    model: {
      introduction: 'The bar chart illustrates the proportion of families owning zero, one, or at least two cars in a European nation at ten-year intervals from 1971 to 2001.',
      overview: 'Overall, car ownership rose substantially over the thirty-year period, as evidenced by a steady decline in the percentage of car-free households. By 1991 and 2001, owning a single car had replaced having no car as the most common household arrangement.',
      body1: 'In 1971, nearly half of all households (47%) did not own a car, whereas 35% possessed one vehicle and only 16% owned two or more. By 1981, the share of car-free homes dipped to 42%, while single-car ownership fell slightly to 31%. Simultaneously, families with two or more cars saw a notable jump from 16% to 28%.',
      body2: 'A major shift occurred in 1991 when single-car households surged to 47%, overtaking the car-free group which dropped sharply to 30%. In the final year, 2001, one-car ownership remained dominant at 43%, multi-car households rebounded to 28% after a brief dip to 21% in 1991, and households without a car fell to a low of 28%.',
    },
  },

  // ───────────── Task 1 · 1.3 Dynamic table ─────────────
  {
    id: 'task1-languages-table',
    task: 1,
    chart: 'table',
    period: 'Dynamic',
    title: 'Home languages of high school students (2008 and 2014)',
    prompt: 'The table below gives information about the languages that high school students speak at home in one school district in the USA (2008 and 2014).',
    spec: {
      kind: 'table',
      table: {
        headers: ['Language', '2008 (students)', '2014 (students)'],
        rows: [
          ['Spanish', '15,110', '28,816'],
          ['Korean', '3,029', '2,735'],
          ['Vietnamese', '2,557', '1,467'],
          ['Chinese', '1,875', '4,670'],
          ['Arabic', '430', '1,302'],
          ['Russian', '414', '1,656'],
          ['Hindi', '375', '430'],
          ['Tagalog', '138', '512'],
          ['Polish', '110', '82'],
          ['Nepalese', '95', '439'],
        ],
      },
    },
    hints: {
      words: [
        { word: 'nearly double', meaning: 'gần gấp đôi' },
        { word: 'increase fourfold / threefold', meaning: 'tăng gấp bốn / gấp ba' },
        { word: 'overtake', meaning: 'vượt qua' },
        { word: 'the second most common', meaning: 'phổ biến thứ hai' },
        { word: 'edge down slightly', meaning: 'giảm nhẹ' },
        { word: 'a sharper drop of', meaning: 'giảm mạnh hơn' },
      ],
      sentence: 'In 2008, Spanish dominated with 15,110 student speakers, and this figure nearly doubled to 28,816 by 2014.',
    },
    model: {
      introduction: 'The table compares the number of high school students speaking ten different home languages in a US school district in 2008 and 2014.',
      overview: 'Overall, the vast majority of languages recorded an upward trend in the number of speakers over the six-year period, with Spanish remaining by far the most widely spoken language. In contrast, only Korean, Vietnamese, and Polish experienced declines.',
      body1: 'In 2008, Spanish dominated with 15,110 student speakers, and this figure nearly doubled to 28,816 by 2014. Similarly, Chinese saw a substantial rise from 1,875 to 4,670, overtaking both Korean and Vietnamese to become the second most common language. Meanwhile, Russian and Arabic also witnessed dramatic growth, increasing fourfold to 1,656 and threefold to 1,302 respectively.',
      body2: 'Conversely, the number of Korean speakers edged down slightly from 3,029 to 2,735, while Vietnamese saw a sharper drop of over 1,000 students, falling from 2,557 in 2008 to 1,467 in 2014. Among the remaining minority languages, Tagalog and Nepalese surged to 512 and 439 speakers, Hindi grew modestly from 375 to 430, whereas Polish decreased marginally from 110 to 82.',
    },
  },

  // ───────────── Task 1 · 1.4 Static pie charts ─────────────
  {
    id: 'task1-expenditure-pies',
    task: 1,
    chart: 'pie',
    period: 'Static',
    title: 'Monthly expenditure of students in Ho Chi Minh City and Ha Noi (2025)',
    prompt: 'The pie charts compare the proportion of average monthly expenditure across five categories by university students living in Ho Chi Minh City and Ha Noi in 2025.',
    spec: {
      kind: 'pie',
      pies: [
        {
          title: 'Ho Chi Minh City, 2025',
          slices: [
            { label: 'Housing & Utilities', value: 38 },
            { label: 'Food & Dining', value: 27 },
            { label: 'Transportation', value: 12 },
            { label: 'Study Materials', value: 13 },
            { label: 'Leisure & Entertainment', value: 10 },
          ],
        },
        {
          title: 'Ha Noi, 2025',
          slices: [
            { label: 'Housing & Utilities', value: 34 },
            { label: 'Food & Dining', value: 29 },
            { label: 'Transportation', value: 11 },
            { label: 'Study Materials', value: 16 },
            { label: 'Leisure & Entertainment', value: 10 },
          ],
        },
      ],
    },
    hints: {
      words: [
        { word: 'account for / make up / constitute', meaning: 'chiếm tỷ trọng' },
        { word: 'the largest proportion', meaning: 'tỷ trọng lớn nhất' },
        { word: 'a slightly higher share', meaning: 'tỷ trọng cao hơn một chút' },
        { word: 'rank second', meaning: 'xếp thứ hai' },
        { word: 'an identical', meaning: 'giống hệt nhau' },
        { word: 'whereas / in contrast', meaning: 'trong khi / ngược lại' },
      ],
      sentence: 'In Ho Chi Minh City, housing and utilities constituted the largest proportion of student budgets at 38%, compared to 34% in Ha Noi.',
    },
    model: {
      introduction: 'The two pie charts illustrate how university students in Ho Chi Minh City and Ha Noi allocated their average monthly spending across five expense categories in 2025.',
      overview: 'Overall, accommodation and food together accounted for roughly two-thirds of total student expenditure in both cities. While housing represented the largest expense in both locations, students in Ha Noi spent a slightly higher share on food and study materials than their counterparts in Ho Chi Minh City.',
      body1: 'In Ho Chi Minh City, housing and utilities constituted the largest proportion of student budgets at 38%, compared to 34% in Ha Noi. Food and dining ranked second in both cities, making up 27% of spending in Ho Chi Minh City and a slightly higher 29% in Ha Noi.',
      body2: 'Regarding academic and personal expenses, students in Ha Noi dedicated 16% of their monthly budget to study materials, whereas those in Ho Chi Minh City spent 13%. Transportation accounted for similar shares of 12% in Ho Chi Minh City and 11% in Ha Noi, while leisure and entertainment took up an identical 10% in both urban centers.',
    },
  },

  // ───────────── Task 1 · 1.5 Static multiple charts ─────────────
  {
    id: 'task1-online-learning',
    task: 1,
    chart: 'multiple',
    period: 'Static',
    title: 'Self-study hours and devices of undergraduates (2025)',
    prompt: 'The bar chart shows the average weekly hours spent on self-study by undergraduates across four faculties at a university in 2025, while the pie chart illustrates the primary digital devices they used for studying.',
    spec: {
      kind: 'multiple',
      bar: {
        labels: ['Engineering', 'Medicine', 'Economics', 'Foreign Languages'],
        unit: 'h',
        series: [{ name: 'Hours per week', values: [18.5, 22.0, 14.0, 15.5] }],
      },
      pies: [
        {
          title: 'Primary study devices',
          slices: [
            { label: 'Laptop', value: 58 },
            { label: 'Smartphone', value: 24 },
            { label: 'Tablet', value: 13 },
            { label: 'Desktop PC', value: 5 },
          ],
        },
      ],
    },
    hints: {
      words: [
        { word: 'the longest / shortest', meaning: 'dài nhất / ngắn nhất' },
        { word: 'lead with', meaning: 'dẫn đầu với' },
        { word: 'the preferred', meaning: 'được ưa chuộng nhất' },
        { word: 'nearly three-fifths', meaning: 'gần ba phần năm' },
        { word: 'almost double', meaning: 'gần gấp đôi' },
        { word: 'a tiny minority', meaning: 'một thiểu số rất nhỏ' },
      ],
      sentence: 'Medicine undergraduates led with an average of 22 hours of self-study per week, followed by Engineering students at 18.5 hours.',
    },
    model: {
      introduction: 'The bar chart compares the average number of hours per week undergraduates in four academic faculties devoted to self-study in 2025, while the pie chart breaks down the main digital devices utilized for learning.',
      overview: 'Overall, Medicine students recorded the longest weekly self-study duration, whereas Economics students spent the least time studying independently. In terms of technology, laptops were overwhelmingly the preferred learning device among undergraduates.',
      body1: 'Looking at the bar chart, Medicine undergraduates led with an average of 22 hours of self-study per week, followed by Engineering students at 18.5 hours. Students majoring in Foreign Languages studied independently for 15.5 hours weekly, which was 1.5 hours higher than the lowest figure recorded by Economics students at 14 hours.',
      body2: 'According to the pie chart, nearly three-fifths (58%) of students relied primarily on laptops for their coursework. Smartphones were the second most common device at 24%, almost double the figure for tablets at 13%, while desktop computers were used by only a tiny minority of 5%.',
    },
  },
]

export const writingTask2: WritingTask2[] = [
  // ───────────── Task 2 · Discussion & Opinion ─────────────
  {
    id: 'task2-cooperate-compete',
    task: 2,
    essayType: 'discussion',
    title: 'Cooperation or competition in schools',
    prompt: 'Some people think that schools should use teaching methods that encourage students to cooperate. Other people think that schools should use teaching methods that encourage students to compete. Discuss both views and give your opinion.',
    hints: {
      words: [
        { word: 'on the one hand / on the other hand', meaning: 'một mặt / mặt khác' },
        { word: 'academic rivalry', meaning: 'sự cạnh tranh học thuật' },
        { word: 'interpersonal skills', meaning: 'kỹ năng giao tiếp' },
        { word: 'resilience under pressure', meaning: 'khả năng chống chịu áp lực' },
        { word: 'a balanced combination', meaning: 'sự kết hợp cân bằng' },
        { word: 'in conclusion', meaning: 'tóm lại' },
      ],
      sentence: 'On the one hand, there are several reasons why promoting competition among students is advantageous.',
    },
    model: {
      introduction: 'Opinions are divided on whether educational institutions should prioritize collaborative learning or foster academic competition among students. While both pedagogical approaches offer distinct merits, I believe that a balanced combination leaning toward cooperation yields greater long-term benefits.',
      body1: 'On the one hand, there are several reasons why promoting competition among students is advantageous. The main benefit of competitive teaching methods is that academic rivalry motivates learners to push beyond their limits and reach their full potential. In classrooms where grades, awards, and rankings are emphasized, students are driven to work harder and develop resilience under pressure. For instance, science olympiads or debate tournaments encourage participants to sharpen their critical thinking skills, preparing them well for the competitive nature of the modern job market.',
      body2: 'On the other hand, supporters of cooperative learning suggest that teamwork cultivates essential interpersonal skills that individual competition cannot provide. In real-world workplaces, complex projects rarely rely on isolated individuals; instead, they require seamless collaboration across diverse teams. When schools assign group research or peer-review tasks, students learn how to communicate effectively, resolve conflicts, and leverage each member\'s strengths. Consequently, cooperative learning not only deepens academic understanding but also builds emotional intelligence.',
      conclusion: 'In conclusion, although healthy competition can stimulate individual excellence, collaborative methods equip students with vital social skills for lifelong success. Therefore, schools should integrate both strategies into their curriculum while placing greater emphasis on teamwork.',
    },
  },

  // ───────────── Task 2 · Opinion (agree / disagree) ─────────────
  {
    id: 'task2-free-education',
    task: 2,
    essayType: 'opinion',
    title: 'Free university education',
    prompt: 'Many people believe that university education should be free for all students regardless of their financial background. To what extent do you agree or disagree?',
    hints: {
      words: [
        { word: 'equal opportunity', meaning: 'cơ hội bình đẳng' },
        { word: 'financial barrier', meaning: 'rào cản tài chính' },
        { word: 'upward social mobility', meaning: 'thăng tiến xã hội' },
        { word: 'substantial long-term returns', meaning: 'lợi ích lâu dài đáng kể' },
        { word: 'I completely agree with', meaning: 'tôi hoàn toàn đồng ý' },
        { word: 'to offset', meaning: 'bù đắp' },
      ],
      sentence: 'The primary reason why I support free tertiary education is that it ensures equal opportunities for all talented young people.',
    },
    model: {
      introduction: 'Whether higher education should be fully funded by the state for every student has sparked considerable debate. I completely agree with the viewpoint that university tuition should be abolished regardless of students\' socioeconomic status, as this policy promotes social equality and drives national economic development.',
      body1: 'The primary reason why I support free tertiary education is that it ensures equal opportunities for all talented young people. In many countries, high tuition fees prevent capable students from low-income families from pursuing a degree, forcing them into low-paid jobs instead. By removing financial barriers, universities can admit learners purely based on academic merit rather than wealth. For example, several European nations such as Germany and Norway offer tuition-free degrees, enabling students from disadvantaged backgrounds to achieve upward social mobility.',
      body2: 'Furthermore, making university accessible to everyone generates substantial long-term returns for the economy. When a larger proportion of the population acquires advanced technical and analytical skills, the workforce becomes significantly more productive and innovative. A highly educated labor force attracts foreign investment and accelerates growth in high-value sectors such as healthcare, engineering, and information technology. As a result, higher tax revenues from well-paid graduates easily offset the initial public expenditure on education.',
      conclusion: 'In conclusion, I strongly believe that university education should be free for all students because it fosters fairness and strengthens a nation\'s economic competitiveness. Governments should therefore allocate sufficient public funds to subsidize higher education for future generations.',
    },
  },

  // ───────────── Task 2 · Advantages & Disadvantages ─────────────
  {
    id: 'task2-part-time-work',
    task: 2,
    essayType: 'advantages',
    title: 'Part-time work while studying',
    prompt: 'Nowadays, more university students choose to work part-time while studying. Do the advantages of this trend outweigh the disadvantages?',
    hints: {
      words: [
        { word: 'outweigh', meaning: 'lớn hơn, vượt trội hơn' },
        { word: 'chronic fatigue', meaning: 'mệt mỏi kéo dài' },
        { word: 'transferable soft skills', meaning: 'kỹ năng mềm có thể áp dụng' },
        { word: 'financial autonomy', meaning: 'tự chủ tài chính' },
        { word: 'career readiness', meaning: 'sẵn sàng cho nghề nghiệp' },
        { word: 'to strain', meaning: 'gây áp lực lên' },
      ],
      sentence: 'Firstly, earning an income helps undergraduates cover living expenses and reduce the financial burden on their parents.',
    },
    model: {
      introduction: 'Taking on part-time employment during university years has become increasingly common among undergraduates worldwide. While working while studying can create time-management pressures, I believe that its practical and financial benefits far outweigh the drawbacks.',
      body1: 'On the one hand, the main disadvantage of holding a part-time job is the potential negative impact on academic performance. Balancing lecture schedules, assignments, and work shifts requires exceptional self-discipline. If students work excessive hours, particularly late at night in retail or hospitality roles, they may experience chronic fatigue and miss important deadlines. Consequently, their grades could suffer, and some might even risk delaying their graduation.',
      body2: 'On the other hand, working part-time offers significant advantages that prepare students for life after university. Firstly, earning an income helps undergraduates cover living expenses and reduce the financial burden on their parents, fostering personal independence. Secondly, part-time jobs allow young people to gain real-world experience and develop transferable soft skills such as customer communication, problem-solving, and teamwork. For instance, a student working as a teaching assistant or marketing intern builds a stronger resume, making them far more attractive to employers upon graduation.',
      conclusion: 'In conclusion, although part-time work may temporarily strain a student\'s schedule, the financial autonomy and career readiness it provides are far more valuable. If students limit their working hours to around 15 hours per week, they can successfully reap these benefits without compromising their studies.',
    },
  },
]

export function getWritingTask1(id: string) {
  return writingTask1.find((item) => item.id === id)
}

export function getWritingTask2(id: string) {
  return writingTask2.find((item) => item.id === id)
}
