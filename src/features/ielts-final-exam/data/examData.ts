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

export const readingSets: ReadingSet[] = [
  // ───────────────────────── 1. Completion ─────────────────────────
  {
    id: 'completion',
    type: 'completion',
    typeName: 'Sentence & Summary Completion',
    title: 'Urban Green Spaces in Ho Chi Minh City',
    topic: 'Môi trường đô thị',
    instruction: 'Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
    passage: [
      { label: 'A', text: 'Ho Chi Minh City has grown rapidly over the last two decades, and much of its former farmland and canal-side vegetation has been replaced by concrete. Urban planners now describe this loss of greenery as one of the main reasons the city feels so hot during the dry season. Surface temperatures in dense districts can be several degrees higher than in suburban areas, a difference known as the urban heat island effect.' },
      { label: 'B', text: 'In response, the city has begun to create small parks, tree-lined pavements and pocket gardens on vacant land. Early studies in several districts suggest that even a modest green area can lower the temperature of its immediate surroundings. Shaded footpaths also encourage people to walk rather than take motorbikes for short trips, which indirectly reduces traffic and emissions.' },
      { label: 'C', text: 'The benefits extend beyond physical comfort. Students at universities in the city often report feeling stressed during exam periods, and researchers have linked regular time in green spaces with lower levels of anxiety. For students who live in crowded boarding houses with little natural light, a quiet park near campus may be the only place to recover between classes.' },
      { label: 'D', text: 'Maintaining these spaces is not straightforward, however. Trees need regular watering during the dry season, and the budget for park maintenance is often reduced when other services are under pressure. Some community groups have offered to look after small gardens in exchange for permission to use them for events, a model that planners are considering for wider use.' },
    ],
    tactics: [
      'Gạch chân từ khóa trong mỗi câu tóm tắt (ví dụ “temperature”, “anxiety”).',
      'Đáp án thường nằm gần từ khóa, nhưng đề thường đổi từ (paraphrase).',
      'Kiểm tra giới hạn số từ và dạng số ít/số nhiều.',
    ],
    items: [
      { id: 'c1', kind: 'text', prompt: 'Green spaces can lower the temperature of their ______ areas.', answers: ['immediate surroundings'], wordLimit: 2, explanation: 'Đoạn B: “lower the temperature of its immediate surroundings”. Từ khóa “temperature” nằm ở đoạn B.' },
      { id: 'c2', kind: 'text', prompt: 'Shaded footpaths encourage people to ______ instead of riding motorbikes for short trips.', answers: ['walk'], wordLimit: 2, explanation: 'Đoạn B: “encourage people to walk rather than take motorbikes”. Đáp án là một động từ.' },
      { id: 'c3', kind: 'text', prompt: 'Researchers have linked regular time in parks with lower levels of ______.', answers: ['anxiety'], wordLimit: 2, explanation: 'Đoạn C: “lower levels of anxiety”. Câu hỏi dùng “lower levels of”, nên đáp án là danh từ đứng sau.' },
      { id: 'c4', kind: 'text', prompt: 'Students who live in ______ boarding houses may find parks useful for recovering between classes.', answers: ['crowded'], wordLimit: 2, explanation: 'Đoạn C: “crowded boarding houses with little natural light”. Đáp án là một tính từ bổ nghĩa cho “boarding houses”.' },
      { id: 'c5', kind: 'text', prompt: 'Trees in parks need regular ______ during the dry season.', answers: ['watering'], wordLimit: 2, explanation: 'Đoạn D: “Trees need regular watering during the dry season”.' },
    ],
  },

  // ───────────────────────── 2. Short answer ─────────────────────────
  {
    id: 'short-answer',
    type: 'short_answer',
    typeName: 'Short Answer Questions',
    title: 'Wildlife Conservation: Black Bears vs. Grizzly Bears',
    topic: 'Bảo tồn động vật hoang dã',
    instruction: 'Answer the questions below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
    passage: [
      { label: 'A', text: 'Black bears and grizzly bears are both found in North America, but they behave differently when they meet people. Black bears are generally more timid and will often retreat into the forest or climb a tree when they feel threatened. This tendency has made them easier to live alongside in many areas, although careless food storage can still draw them into campsites.' },
      { label: 'B', text: 'Grizzly bears, by contrast, are larger and more likely to stand their ground. Their defensive behaviour is partly linked to the shoulder hump, which carries large muscles used for digging, and to the fact that they often defend cubs or a food source. Wildlife managers therefore advise hikers in grizzly territory to make noise on the trail and carry bear spray.' },
      { label: 'C', text: 'Conservation programmes have had to adapt to these differences. In regions where grizzly populations are small and isolated, biologists track individual bears with GPS collars to reduce conflicts with farms and roads. Black bear populations, which are larger and more widespread, are usually managed through public education about rubbish and food storage.' },
      { label: 'D', text: 'Recovery of grizzly populations has been slow, and many experts believe that corridors connecting separate habitats are essential. Without them, bears may be unable to find new mates, which reduces genetic diversity over time. Nevertheless, some recovering populations have shown that careful planning can help people and bears share the landscape.' },
    ],
    tactics: [
      'Xác định loại câu hỏi (what, who, which) để biết cần danh từ hay cụm từ.',
      'Scan tìm từ khóa không đổi như tên riêng hoặc danh từ kỹ thuật.',
      'Trả lời ngắn gọn; không thêm chi tiết mà câu hỏi không yêu cầu.',
    ],
    items: [
      { id: 's1', kind: 'text', prompt: 'What do grizzly bears partly use their shoulder hump for?', answers: ['digging'], wordLimit: 2, explanation: 'Đoạn B: “the shoulder hump, which carries large muscles used for digging”.' },
      { id: 's2', kind: 'text', prompt: 'What should hikers in grizzly territory carry?', answers: ['bear spray'], wordLimit: 2, explanation: 'Đoạn B: “advise hikers … to make noise on the trail and carry bear spray”.' },
      { id: 's3', kind: 'text', prompt: 'What technology do biologists use to track individual grizzly bears?', answers: ['GPS collars'], wordLimit: 2, explanation: 'Đoạn C: “biologists track individual bears with GPS collars”.' },
      { id: 's4', kind: 'text', prompt: 'What do many experts believe is essential for separate habitats?', answers: ['corridors'], wordLimit: 2, explanation: 'Đoạn D: “corridors connecting separate habitats are essential”. Đáp án là một danh từ số nhiều.' },
      { id: 's5', kind: 'text', prompt: 'What decreases over time when bears cannot find new mates?', answers: ['genetic diversity'], wordLimit: 2, explanation: 'Đoạn D: “which reduces genetic diversity over time”.' },
    ],
  },

  // ───────────────────────── 3. Matching headings ─────────────────────────
  {
    id: 'matching-headings',
    type: 'matching_headings',
    typeName: 'Matching Headings',
    title: 'The Evolution of Digital Education',
    topic: 'Giáo dục số',
    instruction: 'Choose the correct heading for paragraphs A–D. There are six headings; two of them are not needed.',
    passage: [
      { label: 'A', text: 'In the early 2000s, a small number of universities began posting lecture notes and slides on the internet, mainly as a convenience for students who could not attend every class. Within a few years, some institutions were experimenting with recorded video lectures, though these were often long, poorly edited, and rarely interactive. Many academics were sceptical about whether such material could replace a real classroom.' },
      { label: 'B', text: 'The next stage was the learning management system, a platform that allowed teachers to share readings, collect assignments and track grades in one place. Later programmes went further by adapting exercises to each learner. If a student repeatedly made the same error with verb tenses, the software would offer more practice in that area rather than moving on to new material.' },
      { label: 'C', text: 'As these tools spread, the role of the teacher began to change. Rather than delivering the same content to every student, many lecturers now spend more time designing activities, guiding discussions and giving feedback on individual work. Some describe this shift as moving from being a “sage on the stage” to a “guide on the side”.' },
      { label: 'D', text: 'Despite these advances, digital education has clear limits. Students in rural areas often have unreliable internet access, and some learners say they miss the direct contact and informal conversation that happen in a real classroom. For this reason, most universities now combine online and face-to-face teaching rather than replacing one with the other.' },
    ],
    tactics: [
      'Đọc câu đầu của mỗi đoạn để nắm ý chính.',
      'Tiêu đề đúng bao quát cả đoạn; tiêu đề chỉ nói một chi tiết là tiêu đề nhiễu.',
      'Ghi lại ý chính bằng một cụm từ trước khi đối chiếu với danh sách.',
    ],
    items: [
      { id: 'h1', kind: 'select', prompt: 'Paragraph A', options: ['i. The rising cost of printed textbooks', 'ii. Early experiments with online lectures', 'iii. Limits of digital learning', 'iv. Learning platforms and personalised practice', 'v. Teachers as designers of learning experiences', 'vi. A decline in university enrolment'], answers: ['ii. Early experiments with online lectures'], explanation: 'Đoạn A kể về các trường đại học đưa bài giảng và video lên mạng từ đầu những năm 2000.' },
      { id: 'h2', kind: 'select', prompt: 'Paragraph B', options: ['i. The rising cost of printed textbooks', 'ii. Early experiments with online lectures', 'iii. Limits of digital learning', 'iv. Learning platforms and personalised practice', 'v. Teachers as designers of learning experiences', 'vi. A decline in university enrolment'], answers: ['iv. Learning platforms and personalised practice'], explanation: 'Đoạn B nói về hệ thống quản lý học tập và phần mềm điều chỉnh bài tập theo từng người học.' },
      { id: 'h3', kind: 'select', prompt: 'Paragraph C', options: ['i. The rising cost of printed textbooks', 'ii. Early experiments with online lectures', 'iii. Limits of digital learning', 'iv. Learning platforms and personalised practice', 'v. Teachers as designers of learning experiences', 'vi. A decline in university enrolment'], answers: ['v. Teachers as designers of learning experiences'], explanation: 'Đoạn C nói vai trò của giáo viên chuyển sang thiết kế hoạt động học tập và hướng dẫn thảo luận.' },
      { id: 'h4', kind: 'select', prompt: 'Paragraph D', options: ['i. The rising cost of printed textbooks', 'ii. Early experiments with online lectures', 'iii. Limits of digital learning', 'iv. Learning platforms and personalised practice', 'v. Teachers as designers of learning experiences', 'vi. A decline in university enrolment'], answers: ['iii. Limits of digital learning'], explanation: 'Đoạn D nêu hạn chế: truy cập internet không đều và thiếu tiếp xúc trực tiếp. Tiêu đề i và vi không xuất hiện trong bài.' },
    ],
  },

  // ───────────────────────── 4. True / False / Not Given ─────────────────────────
  {
    id: 'true-false-not-given',
    type: 'tfng',
    typeName: 'True / False / Not Given',
    title: 'The History of Coffee Cultivation in Viet Nam',
    topic: 'Lịch sử nông nghiệp',
    instruction: 'Write TRUE if the statement agrees with the passage, FALSE if it contradicts it, or NOT GIVEN if the passage does not say.',
    passage: [
      { label: 'A', text: 'Coffee arrived in Viet Nam in the late nineteenth century, when French colonial administrators introduced the plant to the central highlands. Early plantings were small and experimental, and many farmers were initially more interested in rice and other staple crops. Cultivation expanded gradually as the colonial economy began to demand export products.' },
      { label: 'B', text: 'Robusta, a hardier species, quickly became the dominant variety in Viet Nam. It grows at lower altitudes than Arabica and is more resistant to disease, which made it well suited to the country’s climate. By the late twentieth century, the country had become one of the largest exporters of robusta coffee in the world.' },
      { label: 'C', text: 'Arabica is also grown in Viet Nam, mainly in the cooler highlands of Lam Dong province. Its beans are valued for their aroma and are often used in specialty cafés, although production costs are higher. Some growers have begun to switch to Arabica in recent years, hoping to earn higher prices in international markets.' },
      { label: 'D', text: 'Coffee culture in Viet Nam is distinctive. Vietnamese coffee is often brewed slowly through a metal filter and served with sweetened condensed milk, a combination that developed partly because fresh milk was difficult to keep in the hot climate. Today, cafés in the cities have become important social spaces for young people, and many also sell locally roasted beans.' },
    ],
    tactics: [
      'Tìm từ khóa trong câu phát biểu (tên loài, địa danh, năm).',
      'FALSE khi bài nói điều trái ngược; NOT GIVEN khi bài không nhắc tới.',
      'Cẩn thận với từ tuyệt đối như “all”, “most”, “only”.',
    ],
    items: [
      { id: 't1', kind: 'select', prompt: 'Coffee was first brought to Viet Nam by farmers from neighbouring countries.', options: TFNG, answers: ['FALSE'], explanation: 'Đoạn A: cây cà phê được người Pháp (quản trị viên thuộc địa) đưa vào, không phải nông dân các nước láng giềng.' },
      { id: 't2', kind: 'select', prompt: 'Robusta is more tolerant of disease than Arabica.', options: TFNG, answers: ['TRUE'], explanation: 'Đoạn B: robusta “is more resistant to disease”.' },
      { id: 't3', kind: 'select', prompt: 'Arabica is grown mainly in the Mekong Delta.', options: TFNG, answers: ['FALSE'], explanation: 'Đoạn C: Arabica được trồng chủ yếu ở vùng cao Lâm Đồng, không phải đồng bằng sông Cửu Long.' },
      { id: 't4', kind: 'select', prompt: 'Vietnamese coffee is traditionally served with fresh milk.', options: TFNG, answers: ['FALSE'], explanation: 'Đoạn D: cà phê thường được phục vụ với sữa đặc có đường, không phải sữa tươi.' },
      { id: 't5', kind: 'select', prompt: 'Coffee prices in Viet Nam rose sharply during the 1990s.', options: TFNG, answers: ['NOT GIVEN'], explanation: 'Bài không nói về giá cà phê trong thập niên 1990, nên đáp án là NOT GIVEN.' },
    ],
  },

  // ───────────────────────── 5. Yes / No / Not Given ─────────────────────────
  {
    id: 'yes-no-not-given',
    type: 'ynng',
    typeName: 'Yes / No / Not Given',
    title: 'Artificial Intelligence in Higher Education: Opportunity or Threat?',
    topic: 'Công nghệ và giáo dục',
    instruction: 'Write YES if the statement agrees with the writer’s views, NO if it contradicts them, or NOT GIVEN if the writer does not express a view.',
    passage: [
      { label: 'A', text: 'Generative AI tools have arrived in university classrooms faster than most institutions could prepare for. Students now use them to summarise readings, check grammar and generate ideas for essays. Many lecturers are alarmed, fearing that assignments will no longer show what students actually understand. Several universities have recently held meetings to revise their assessment methods, and some have invited technology companies to present their tools.' },
      { label: 'B', text: 'This anxiety is understandable, but the writer believes that banning these tools is neither realistic nor wise. Students will encounter AI in their future workplaces, so learning to question its output is itself a valuable skill. A well-designed assignment can require students to evaluate an AI answer, identify its errors and justify their corrections. A few institutions have already run short workshops that teach students to check AI-generated text against sources and textbooks.' },
      { label: 'C', text: 'However, there is a real risk that students will hand over the difficult part of learning. If a student asks a tool to write an entire essay, the student has not practised structuring an argument, and the assessment becomes meaningless. Universities should therefore be clear about which uses of AI are acceptable for each course. Academic integrity offices have reported more cases of undeclared AI use, which has made fair marking harder for staff.' },
      { label: 'D', text: 'Some critics argue that AI will make universities obsolete. The writer disagrees. Human teachers provide mentoring, feedback and motivation that software cannot replicate, although the writer acknowledges that the balance between these roles is still being debated. Students themselves often describe working with a human tutor as more motivating than using a chatbot alone.' },
    ],
    tactics: [
      'Phân biệt sự kiện (facts) với quan điểm (views) của tác giả.',
      'Tìm các cụm như “the writer believes”, “the writer disagrees” để xác định quan điểm.',
      'NOT GIVEN khi bài không bàn đến vấn đề đó, dù nội dung có liên quan.',
    ],
    items: [
      { id: 'y1', kind: 'select', prompt: 'The writer believes banning AI tools in universities would be unrealistic.', options: YNNG, answers: ['YES'], explanation: 'Đoạn B: “banning these tools is neither realistic nor wise”.' },
      { id: 'y2', kind: 'select', prompt: 'The writer thinks students should be allowed to use AI to write whole essays.', options: YNNG, answers: ['NO'], explanation: 'Đoạn C: nếu sinh viên nhờ AI viết cả bài luận, việc đánh giá trở nên vô nghĩa. Tác giả không đồng ý.' },
      { id: 'y3', kind: 'select', prompt: 'The writer believes that universities will soon become obsolete.', options: YNNG, answers: ['NO'], explanation: 'Đoạn D: “Some critics argue … The writer disagrees.”' },
      { id: 'y4', kind: 'select', prompt: 'The writer thinks AI systems should replace teachers in most courses.', options: YNNG, answers: ['NO'], explanation: 'Đoạn D: giáo viên mang lại sự hướng dẫn và động lực mà phần mềm không thể thay thế.' },
      { id: 'y5', kind: 'select', prompt: 'The writer thinks AI tools will improve students’ grades in all subjects.', options: YNNG, answers: ['NOT GIVEN'], explanation: 'Bài không nói về điểm số của sinh viên, nên đáp án là NOT GIVEN.' },
    ],
  },

  // ───────────────────────── 6. Matching information ─────────────────────────
  {
    id: 'matching-information',
    type: 'matching_info',
    typeName: 'Matching Information / Features',
    title: 'Renewable Energy Initiatives Across Southeast Asia',
    topic: 'Năng lượng tái tạo',
    instruction: 'Choose the paragraph (A–D) that contains each piece of information. A paragraph may be used more than once.',
    passage: [
      { label: 'A', text: 'The Philippines is one of the world’s largest producers of geothermal energy, drawing on the volcanic activity that runs through the archipelago. Power plants built over several decades now supply a significant share of the country’s electricity, although the initial drilling costs remain high. Nearby communities have also benefited from new roads and training programmes for local technicians.' },
      { label: 'B', text: 'Thailand has introduced incentives for households that install rooftop solar panels. Homeowners can sell surplus electricity back to the grid, which has encouraged many families in urban areas to invest, even though the systems can take several years to pay for themselves. Solar installers report strong demand, although some buyers find the application forms complicated.' },
      { label: 'C', text: 'Viet Nam has announced plans for offshore wind farms along its central and southern coastline. Developers see strong wind resources there, but the projects depend on new transmission lines that are still under construction, and some investors have delayed their decisions. Environmental groups have asked for careful planning so that fishing grounds are not disturbed during construction.' },
      { label: 'D', text: 'On remote islands in Indonesia, small hydropower schemes provide electricity to villages far from the national grid. Because these systems are simple and locally managed, they can operate for decades with little outside support, although they are vulnerable to droughts during the dry season. Local cooperatives often manage the systems themselves, collecting small fees from residents to cover repairs.' },
    ],
    tactics: [
      'Gạch chân danh từ chính trong mỗi thông tin (nguồn năng lượng, quốc gia, chi phí).',
      'Tìm paraphrase: “return electricity to the grid” = “sell surplus electricity back”.',
      'Đọc cả đoạn trước khi chọn, vì thông tin có thể nằm ở câu cuối.',
    ],
    items: [
      { id: 'm1', kind: 'select', prompt: 'a reference to projects waiting for infrastructure to be finished', options: PARAGRAPHS, answers: ['C'], explanation: 'Đoạn C: các dự án phụ thuộc vào đường dây truyền tải “still under construction”.' },
      { id: 'm2', kind: 'select', prompt: 'a scheme that allows households to return electricity to the main network', options: PARAGRAPHS, answers: ['B'], explanation: 'Đoạn B: “sell surplus electricity back to the grid”.' },
      { id: 'm3', kind: 'select', prompt: 'a country that relies on volcanic activity for power', options: PARAGRAPHS, answers: ['A'], explanation: 'Đoạn A: nguồn địa nhiệt dựa trên hoạt động núi lửa.' },
      { id: 'm4', kind: 'select', prompt: 'a system that works well despite little outside funding', options: PARAGRAPHS, answers: ['D'], explanation: 'Đoạn D: các hệ thống thủy điện nhỏ “can operate for decades with little outside support”.' },
      { id: 'm5', kind: 'select', prompt: 'a long wait before an investment is paid back', options: PARAGRAPHS, answers: ['B'], explanation: 'Đoạn B: hệ thống điện mặt trời mái nhà “can take several years to pay for themselves”.' },
    ],
  },

  // ───────────────────────── 7. Multiple choice ─────────────────────────
  {
    id: 'multiple-choice',
    type: 'multiple_choice',
    typeName: 'Multiple Choice (single & multiple answers)',
    title: 'Online Research Platforms for University Students',
    topic: 'Nghiên cứu học thuật',
    instruction: 'Questions 1–3: choose ONE letter. Question 4: choose TWO letters.',
    passage: [
      { label: 'A', text: 'University students increasingly rely on online academic databases to find journal articles, conference papers and theses. These platforms index millions of documents, which makes it possible to search an entire field in minutes rather than visiting a library shelf by shelf. Many students also use these platforms to keep track of references, which saves time when preparing bibliographies.' },
      { label: 'B', text: 'Each platform has its own strengths. Some focus on science and engineering and offer detailed citation tools, while others cover the social sciences and humanities more thoroughly. Many provide a free version, but the most complete collections are usually available only through a university subscription. Some platforms also show which journals are most respected in a given discipline, helping users decide where to look first.' },
      { label: 'C', text: 'The main drawback is the sheer volume of results. A broad search can return thousands of items, many of them irrelevant or from low-quality journals. Students therefore need to refine their keywords, check publication dates and look at how often a paper has been cited before relying on it. Experienced researchers often compare several sources before choosing one, rather than trusting the first result.' },
      { label: 'D', text: 'Libraries have responded by offering short training sessions on search techniques, and some universities now include information literacy in their first-year courses. Such training is most effective when students practise with a real research question rather than a demonstration example. Teachers have noticed that students who receive such training tend to write more carefully referenced essays.' },
    ],
    tactics: [
      'Đọc kỹ các lựa chọn: đáp án đúng thường là paraphrase, đáp án sai thường thêm chi tiết không có trong bài.',
      'Với câu chọn hai đáp án, kiểm tra từng lựa chọn riêng biệt.',
      'Chỉ chọn số đáp án mà đề yêu cầu.',
    ],
    items: [
      { id: 'q1', kind: 'choice', prompt: '1. What is the main advantage of online academic databases mentioned in paragraph A?', options: ['A. They are always free to use.', 'B. They allow a whole field to be searched quickly.', 'C. They replace the need for citation.', 'D. They contain only recent articles.'], answers: ['B. They allow a whole field to be searched quickly.'], explanation: 'Đoạn A: cho phép tìm toàn bộ một lĩnh vực trong vài phút. Các lựa chọn khác không có trong bài.' },
      { id: 'q2', kind: 'choice', prompt: '2. According to paragraph B, the most complete collections of articles are usually', options: ['A. free to all users', 'B. found only in printed form', 'C. available through a university subscription', 'D. limited to science journals'], answers: ['C. available through a university subscription'], explanation: 'Đoạn B: “the most complete collections are usually available only through a university subscription”.' },
      { id: 'q3', kind: 'choice', prompt: '3. What problem does paragraph C describe?', options: ['A. Platforms are too expensive.', 'B. Searches return too many results, some irrelevant.', 'C. Libraries are closing.', 'D. Articles are written in too many languages.'], answers: ['B. Searches return too many results, some irrelevant.'], explanation: 'Đoạn C: kết quả tìm kiếm quá nhiều, nhiều kết quả không liên quan hoặc chất lượng thấp.' },
      { id: 'q4', kind: 'multi', prompt: '4. Which TWO strategies does paragraph C suggest for finding reliable articles?', options: ['A. Paying for a premium account', 'B. Checking the publication date', 'C. Reading only the first page of each article', 'D. Looking at how often a paper has been cited', 'E. Asking a librarian to choose the sources'], answers: ['B. Checking the publication date', 'D. Looking at how often a paper has been cited'], explanation: 'Đoạn C: kiểm tra ngày xuất bản và số lần được trích dẫn. Các lựa chọn A, C, E không có trong bài.' },
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
        { word: 'the proportion of', meaning: 'tỷ lệ của' },
        { word: 'fell / dropped', meaning: 'giảm' },
        { word: 'rose / increased', meaning: 'tăng' },
        { word: 'nearly half', meaning: 'gần một nửa' },
        { word: 'the most common', meaning: 'phổ biến nhất' },
        { word: 'be of equal size', meaning: 'có kích thước bằng nhau' },
      ],
      sentence: 'The proportion of households without a car fell from 47% in 1971 to 28% in 2001.',
    },
    model: {
      introduction: 'The bar chart illustrates the proportion of households in a European country with no car, one car, or two or more cars between 1971 and 2001.',
      overview: 'Overall, the proportion of households without a car fell over the period, while car ownership rose, particularly for households with one car. Households with two or more cars also became more common by the end of the period.',
      body1: 'In 1971, nearly half of households (47%) had no car, compared with 35% that owned one car and only 16% that owned two or more. Over the following decade, the proportion without a car dropped to 42%, while the share with two or more cars rose sharply to 28%.',
      body2: 'By 1991, the most common situation was owning exactly one car, at 47%, while households with no car had fallen to 30%. In 2001, 28% of households had no car, 43% had one car and 28% had two or more, so the groups without a car and with two or more cars were now of equal size.',
    },
  },
  {
    id: 'task1-visitors-cities',
    task: 1,
    chart: 'line',
    period: 'Dynamic',
    title: 'International visitors to three Vietnamese cities (2018–2024)',
    prompt: 'The line graph illustrates the number of international tourists visiting three Vietnamese cities (Ho Chi Minh City, Da Nang and Ha Noi) from 2018 to 2024.',
    chartNote: 'Số liệu minh họa, đơn vị: triệu lượt khách.',
    spec: {
      kind: 'line',
      data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        unit: 'm',
        series: [
          { name: 'Ho Chi Minh City', values: [5.2, 5.6, 1.2, 0.8, 2.9, 4.7, 5.5] },
          { name: 'Ha Noi', values: [3.4, 3.8, 0.9, 0.5, 2.2, 3.5, 3.9] },
          { name: 'Da Nang', values: [2.1, 2.3, 0.4, 0.2, 1.1, 2.0, 2.4] },
        ],
      },
    },
    hints: {
      words: [
        { word: 'plummet / plunge', meaning: 'giảm mạnh' },
        { word: 'recover', meaning: 'phục hồi' },
        { word: 'remain the highest', meaning: 'vẫn cao nhất' },
        { word: 'peak at', meaning: 'đạt đỉnh ở mức' },
        { word: 'bottom out at', meaning: 'chạm đáy ở mức' },
        { word: 'surpass', meaning: 'vượt qua' },
      ],
      sentence: 'The number of visitors to Ho Chi Minh City plunged to 1.2 million in 2020 before recovering steadily to 5.5 million in 2024.',
    },
    model: {
      introduction: 'The line graph shows the number of international visitors to three Vietnamese cities, Ho Chi Minh City, Ha Noi and Da Nang, from 2018 to 2024.',
      overview: 'Overall, all three cities saw a sharp fall in visitors around the middle of the period, followed by a steady recovery. Ho Chi Minh City received the highest number of visitors throughout the period.',
      body1: 'In 2018, Ho Chi Minh City welcomed about 5.2 million international visitors, well ahead of Ha Noi with 3.4 million and Da Nang with 2.1 million. Numbers in all three cities rose slightly in 2019, with Ho Chi Minh City reaching 5.6 million.',
      body2: 'The lowest point came in 2021, when visitor numbers in Da Nang fell to just 0.2 million and Ha Noi dropped to 0.5 million. From 2022, all three cities recovered steadily. By 2024, Ho Chi Minh City had returned to 5.5 million, while Ha Noi reached 3.9 million, slightly above its 2019 level.',
    },
  },
  {
    id: 'task1-university-budget',
    task: 1,
    chart: 'pie',
    period: 'Static',
    title: 'University budget by category (2025)',
    prompt: 'The pie charts compare the proportion of the university budget spent on five different categories (Teaching Staff, Research, Facilities, Student Support and Administration) at two campuses in 2025.',
    spec: {
      kind: 'pie',
      pies: [
        {
          title: 'Campus A, 2025',
          slices: [
            { label: 'Teaching Staff', value: 38 },
            { label: 'Research', value: 22 },
            { label: 'Facilities', value: 18 },
            { label: 'Student Support', value: 12 },
            { label: 'Administration', value: 10 },
          ],
        },
        {
          title: 'Campus B, 2025',
          slices: [
            { label: 'Teaching Staff', value: 30 },
            { label: 'Research', value: 28 },
            { label: 'Facilities', value: 14 },
            { label: 'Student Support', value: 16 },
            { label: 'Administration', value: 12 },
          ],
        },
      ],
    },
    hints: {
      words: [
        { word: 'account for', meaning: 'chiếm' },
        { word: 'the largest share', meaning: 'tỷ trọng lớn nhất' },
        { word: 'the smallest proportion', meaning: 'tỷ trọng nhỏ nhất' },
        { word: 'followed by', meaning: 'tiếp theo là' },
        { word: 'in comparison with', meaning: 'so với' },
        { word: 'respectively', meaning: 'lần lượt' },
      ],
      sentence: 'Teaching staff accounted for the largest share of the budget at Campus A, at 38%.',
    },
    model: {
      introduction: 'The pie charts compare the proportion of the budget spent on five categories at two campuses in 2025.',
      overview: 'Overall, teaching staff accounted for the largest share of spending at both campuses, while administration received the smallest share at Campus A. Campus B placed a greater emphasis on research and student support.',
      body1: 'At Campus A, teaching staff took 38% of the budget, the largest single share. Research (22%) and facilities (18%) followed, while student support and administration accounted for 12% and 10% respectively. This suggests that the campus gave its highest priority to the people who deliver teaching.',
      body2: 'At Campus B, teaching staff received 30%, and research took a larger share at 28%, compared with 22% at Campus A. Student support was also higher at 16%, while facilities (14%) were lower and administration (12%) was slightly higher than at Campus A. Overall, the spending at Campus B was more evenly distributed across the five categories than at Campus A.',
    },
  },
  {
    id: 'task1-faculty-table',
    task: 1,
    chart: 'table',
    period: 'Static',
    title: 'Enrolment, graduation and tuition by faculty (2025)',
    prompt: 'The table provides information about student enrolment, graduation rates and average tuition fees across four faculties at a university in 2025.',
    spec: {
      kind: 'table',
      table: {
        headers: ['Faculty', 'Enrolment (students)', 'Graduation rate (%)', 'Average tuition (million VND/year)'],
        rows: [
          ['Business', '1,850', '81', '18'],
          ['Engineering', '1,420', '74', '22'],
          ['Languages', '960', '86', '16'],
          ['Information Technology', '1,130', '79', '24'],
        ],
      },
    },
    hints: {
      words: [
        { word: 'enrol / enrolment', meaning: 'ghi danh / số sinh viên nhập học' },
        { word: 'the highest / lowest', meaning: 'cao nhất / thấp nhất' },
        { word: 'almost twice as many', meaning: 'gần gấp đôi' },
        { word: 'the graduation rate', meaning: 'tỷ lệ tốt nghiệp' },
        { word: 'charge a fee of', meaning: 'thu học phí' },
        { word: 'by contrast', meaning: 'ngược lại' },
      ],
      sentence: 'The Faculty of Business enrolled 1,850 students, almost twice as many as the Faculty of Languages.',
    },
    model: {
      introduction: 'The table gives information about student enrolment, graduation rates and average tuition fees across four faculties at a university in 2025.',
      overview: 'Overall, the Faculty of Business had the largest intake, while the Faculty of Languages had the highest graduation rate. Tuition fees were highest in the Faculty of Information Technology.',
      body1: 'The Faculty of Business enrolled 1,850 students, almost twice as many as the Faculty of Languages, which had 960. The Faculty of Engineering enrolled 1,420 students, and its graduation rate of 74% was the lowest of the four faculties. As a result, enrolment in the two larger faculties was considerably higher than in the other two.',
      body2: 'The Faculty of Information Technology had 1,130 students and a graduation rate of 79%. Its average tuition of 24 million VND per year was the highest, whereas the Faculty of Languages charged the lowest fee, 16 million VND, alongside its high graduation rate of 86%. Students who chose Information Technology therefore faced the highest annual fees of the four faculties.',
    },
  },
  {
    id: 'task1-online-learning',
    task: 1,
    chart: 'multiple',
    period: 'Static',
    title: 'Online learning hours and preferred devices',
    prompt: 'The bar chart shows the total hours spent on online learning per week by university students, while the pie chart illustrates the devices they prefer to use.',
    spec: {
      kind: 'multiple',
      bar: {
        labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4'],
        unit: 'h',
        series: [{ name: 'Hours per week', values: [8, 10, 12, 9] }],
      },
      pies: [
        {
          title: 'Preferred devices',
          slices: [
            { label: 'Laptop', value: 45 },
            { label: 'Smartphone', value: 35 },
            { label: 'Tablet', value: 12 },
            { label: 'Desktop', value: 8 },
          ],
        },
      ],
    },
    hints: {
      words: [
        { word: 'spend … on', meaning: 'dành … cho' },
        { word: 'peak at', meaning: 'đạt đỉnh ở mức' },
        { word: 'the most popular', meaning: 'phổ biến nhất' },
        { word: 'followed by', meaning: 'tiếp theo là' },
        { word: 'together account for', meaning: 'cộng lại chiếm' },
        { word: 'one-fifth', meaning: 'một phần năm' },
      ],
      sentence: 'Third-year students spent the most time on online learning, at 12 hours per week.',
    },
    model: {
      introduction: 'The bar chart shows the average hours per week that university students spend on online learning by year of study, while the pie chart presents the devices they prefer to use.',
      overview: 'Overall, third-year students spent the most time on online learning, and laptops were the most popular device, followed by smartphones.',
      body1: 'Students in Year 1 spent 8 hours per week online, rising to 10 hours in Year 2. The figure peaked at 12 hours among third-year students before falling to 9 hours in Year 4. Students in their third year therefore spent the greatest amount of time online, which may reflect heavier workloads in the later stages of their courses.',
      body2: 'Laptops were preferred by 45% of students, more than the 35% who chose smartphones. Tablets (12%) and desktop computers (8%) were the least popular options, together accounting for one-fifth of students. Taken together, these figures show that personal computers remained the main tool for online study, despite the widespread use of smartphones.',
    },
  },
]

export const writingTask2: WritingTask2[] = [
  {
    id: 'task2-cooperate-compete',
    task: 2,
    essayType: 'discussion',
    title: 'Cooperation or competition in schools',
    prompt: 'Some people think that schools should use teaching methods that encourage students to cooperate. Other people think that schools should use teaching methods that encourage students to compete. Discuss both views and give your own opinion.',
    hints: {
      words: [
        { word: 'teamwork', meaning: 'làm việc nhóm' },
        { word: 'shared goals', meaning: 'mục tiêu chung' },
        { word: 'healthy competition', meaning: 'cạnh tranh lành mạnh' },
        { word: 'motivate', meaning: 'thúc đẩy' },
        { word: 'pressure', meaning: 'áp lực' },
        { word: 'on balance', meaning: 'xét tổng thể' },
      ],
      sentence: 'Cooperative learning helps students develop communication skills, which are essential in most workplaces.',
    },
    model: {
      introduction: 'Some believe that schools should encourage students to cooperate, while others argue that competition is a better way to learn. This essay will discuss both views before giving my own opinion. Both approaches have supporters, and the real question is which one serves students better.',
      body1: 'Those who favour cooperation argue that group work builds communication and teamwork skills, which employers value highly. When students share goals, they can support weaker classmates, so the whole group benefits from the learning process. For example, students who complete a group project in science learn to divide tasks, resolve disagreements and present findings together, skills they will later need in a professional team.',
      body2: 'On the other hand, supporters of competition believe that it motivates students to work harder and to set higher standards for themselves. Healthy rivalry can be stimulating, although excessive pressure may damage self-esteem, so teachers must manage it carefully. For example, a school might hold a quiz competition in which teams earn points, which can make revision more engaging and encourage students to aim higher. Students who thrive under competition often develop resilience, although those who lose repeatedly may become discouraged.',
      conclusion: 'In conclusion, I believe that schools should mainly use cooperative methods, while including carefully managed competition. This balance develops both teamwork and personal drive, which students need for life beyond school. Ultimately, a learning environment that rewards both collaboration and individual achievement is likely to produce the most well-rounded graduates. This balance also reflects the way adults work, where teamwork and personal responsibility both matter.',
    },
  },
  {
    id: 'task2-free-education',
    task: 2,
    essayType: 'opinion',
    title: 'Free university education',
    prompt: 'University education should be free for all students regardless of their financial background. To what extent do you agree or disagree?',
    hints: {
      words: [
        { word: 'equal opportunity', meaning: 'cơ hội bình đẳng' },
        { word: 'financial barrier', meaning: 'rào cản tài chính' },
        { word: 'public funding', meaning: 'ngân sách công' },
        { word: 'tax burden', meaning: 'gánh nặng thuế' },
        { word: 'targeted support', meaning: 'hỗ trợ có mục tiêu' },
        { word: 'to a large extent', meaning: 'phần lớn' },
      ],
      sentence: 'Targeted scholarships would give talented students from poor families equal opportunity without placing an unnecessary burden on taxpayers.',
    },
    model: {
      introduction: 'Whether university education should be free for every student is a contested issue. In my view, I agree to a large extent that access should not depend on wealth, although fully free education may not be the most effective approach. This topic affects millions of families and continues to divide policymakers around the world.',
      body1: 'The main argument for free tuition is that financial barriers prevent many capable students from attending university. When education is free, students from low-income families can pursue careers that would otherwise be out of reach, which benefits society as a whole. For instance, a student from a rural household who is accepted into a medical programme may later serve a region that badly needs doctors. Education also raises average incomes, which in turn strengthens public finances over the long term.',
      body2: 'However, making education free for everyone regardless of income places a heavy burden on public budgets and taxpayers. Wealthier families could afford to pay, so resources may be used less efficiently than if they were directed to those who need them most. Students from wealthier families could also be asked to contribute through fees on a sliding scale, which would keep the system fair.',
      conclusion: 'In conclusion, I agree that financial background should not determine access to university, but I believe targeted scholarships and loans are a fairer solution than universal free tuition. Such a policy would be both more affordable and more effective than offering free places to everyone. Governments would then have more resources to improve the quality of teaching for all.',
    },
  },
  {
    id: 'task2-part-time-work',
    task: 2,
    essayType: 'advantages',
    title: 'Part-time work while studying',
    prompt: 'Nowadays, more university students choose to work part-time while studying. Do the advantages of this trend outweigh the disadvantages?',
    hints: {
      words: [
        { word: 'practical experience', meaning: 'kinh nghiệm thực tế' },
        { word: 'financial independence', meaning: 'độc lập về tài chính' },
        { word: 'time management', meaning: 'quản lý thời gian' },
        { word: 'burnout', meaning: 'kiệt sức' },
        { word: 'academic performance', meaning: 'kết quả học tập' },
        { word: 'outweigh', meaning: 'lớn hơn, vượt trội hơn' },
      ],
      sentence: 'Although part-time work can provide valuable practical experience, it may also reduce the time students have for their studies.',
    },
    model: {
      introduction: 'Many university students now work part-time while they study. While this trend has drawbacks, I believe that its advantages outweigh its disadvantages, provided that the work remains limited in hours. Supporters point to real benefits, while critics focus on the risk of overload.',
      body1: 'The most obvious advantage is practical experience. Students who work part-time learn how to communicate with colleagues and customers, and they often gain a clearer idea of the career they want. Earning their own money also encourages financial independence and responsible spending. Students who work in retail or hospitality, for example, quickly learn to deal with difficult customers and to work under pressure. Earning a regular income can also help them cover living costs without relying entirely on loans or family support.',
      body2: 'Nevertheless, long working hours can harm academic performance. Students who work too many hours may have less time for study and may become exhausted, which increases the risk of missing deadlines or failing courses. A student who works twenty hours a week may find it hard to keep up with assignments, particularly during examination periods. Furthermore, exhaustion can affect health, which may lead to absences and lower motivation in class.',
      conclusion: 'In conclusion, part-time work offers significant benefits when students manage their time carefully and keep their hours reasonable. Therefore, I believe the advantages outweigh the disadvantages in most cases. Universities could support this trend by offering flexible timetables and advice on balancing work and study. Such support would allow students to benefit from work without sacrificing their qualifications.',
    },
  },
]

export function getWritingTask1(id: string) {
  return writingTask1.find((item) => item.id === id)
}

export function getWritingTask2(id: string) {
  return writingTask2.find((item) => item.id === id)
}
