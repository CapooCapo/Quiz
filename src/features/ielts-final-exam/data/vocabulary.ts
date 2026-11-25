export type IllustrationKey = 'family' | 'book' | 'briefcase' | 'coffee' | 'plane' | 'leaf' | 'globe' | 'music' | 'run' | 'phone' | 'shirt'

export type ClozeItem = {
  sentence: string
  options: string[]
  answer: string
  explanation: string
}

export type VocabularyWord = {
  id: string
  topicId: number
  word: string
  partOfSpeech: string
  ipa: string
  meaningVi: string
  illustration: IllustrationKey
  distractorsEn: [string, string, string]
  distractorsVi: [string, string, string]
  context: ClozeItem
  grammar: ClozeItem
}

export const vocabularyTopics: { id: number; name: string }[] = [
  { id: 1, name: 'Family and Relationships' },
  { id: 2, name: 'Education and Study' },
  { id: 3, name: 'Work and Employment' },
  { id: 4, name: 'Hobbies and Leisure Activities' },
  { id: 5, name: 'Travel and Tourism' },
  { id: 6, name: 'Food and Eating Habits' },
  { id: 7, name: 'Health and Fitness' },
  { id: 8, name: 'Technology and Social Media' },
  { id: 9, name: 'Environmental Issues' },
  { id: 10, name: 'Culture and Traditions' },
  { id: 11, name: 'Sports and Games' },
  { id: 12, name: 'Globalization and International Relations' },
  { id: 13, name: 'Shopping and Consumerism' },
  { id: 14, name: 'Fashion and Clothing' },
  { id: 15, name: 'Music and Entertainment' },
  { id: 16, name: 'Academic Reading Vocabulary (pre-reading)' },
]

export const baseVocabularyWords: VocabularyWord[] = [
  {
    id: 'vocab-nuclear-family', topicId: 1, word: 'nuclear family', partOfSpeech: 'danh từ (cụm)', ipa: '/ˈnjuːkliər ˈfæməli/',
    meaningVi: 'gia đình hạt nhân (cha mẹ và con cái)', illustration: 'family',
    distractorsEn: ['sibling rivalry', 'distant relative', 'household chores'], distractorsVi: ['sự ganh đua giữa anh chị em', 'họ hàng xa', 'việc nhà'],
    context: { sentence: 'My ___ lives in a small house in Đồng Nai: my parents, my younger brother and me.', options: ['nuclear family', 'community', 'neighbourhood', 'generation'], answer: 'nuclear family', explanation: 'Cha mẹ và các con tạo thành gia đình hạt nhân; ba đáp án còn lại không chỉ đúng nhóm người này.' },
    grammar: { sentence: 'Many young couples prefer to live as a ___ rather than with their grandparents.', options: ['nuclear family', 'nuclear families', 'nuclearly family', 'nuclear familial'], answer: 'nuclear family', explanation: 'Sau mạo từ “a” phải là danh từ số ít.' },
  },
  {
    id: 'vocab-strengthen-bond', topicId: 1, word: 'strengthen the bond', partOfSpeech: 'cụm động từ', ipa: '/ˈstreŋθən ðə bɒnd/',
    meaningVi: 'củng cố, làm cho mối quan hệ gắn bó hơn', illustration: 'family',
    distractorsEn: ['break the rules', 'lose the way', 'cut the cost'], distractorsVi: ['phá vỡ quy tắc', 'lạc đường', 'cắt giảm chi phí'],
    context: { sentence: 'Eating dinner together every evening helps us ___ and understand each other better.', options: ['strengthen the bond', 'break the rules', 'lose the way', 'cut the cost'], answer: 'strengthen the bond', explanation: 'Bữa cơm chung giúp gắn kết gia đình, nên cần cụm “strengthen the bond”.' },
    grammar: { sentence: 'Regular family trips help children ___ their relationships with their parents.', options: ['strengthen', 'strengthening', 'strengthened', 'strengthens'], answer: 'strengthen', explanation: 'Sau cấu trúc “help + tân ngữ”, dùng động từ nguyên thể không có “to”.' },
  },
  {
    id: 'vocab-curriculum', topicId: 2, word: 'curriculum', partOfSpeech: 'danh từ', ipa: '/kəˈrɪkjələm/',
    meaningVi: 'chương trình học', illustration: 'book',
    distractorsEn: ['pedestrian', 'turbulence', 'mechanism'], distractorsVi: ['người đi bộ', 'sự hỗn loạn', 'cơ chế vận hành'],
    context: { sentence: 'The new ___ includes more practical projects for first-year students.', options: ['curriculum', 'pedestrian', 'turbulence', 'mechanism'], answer: 'curriculum', explanation: 'Curriculum là toàn bộ các môn học và nội dung giảng dạy.' },
    grammar: { sentence: 'The university has updated its ___ to include more English for Business courses.', options: ['curriculum', 'curricular', 'curricularly', 'curriculize'], answer: 'curriculum', explanation: 'Sau tính từ sở hữu “its” và với một chương trình học duy nhất, dùng danh từ số ít.' },
  },
  {
    id: 'vocab-enrol', topicId: 2, word: 'enrol', partOfSpeech: 'động từ', ipa: '/ɪnˈrəʊl/',
    meaningVi: 'đăng ký nhập học, ghi danh', illustration: 'book',
    distractorsEn: ['withdraw', 'graduate', 'repeat'], distractorsVi: ['rút lui', 'tốt nghiệp', 'học lại'],
    context: { sentence: 'Students who want to ___ in the summer course must submit the form before 30 June.', options: ['enrol', 'withdraw', 'graduate', 'repeat'], answer: 'enrol', explanation: 'Enrol là đăng ký chính thức vào một khóa học; withdraw là rút khỏi.' },
    grammar: { sentence: 'All new students must ___ for the orientation session before classes begin.', options: ['enrol', 'enrolment', 'enrolled', 'enrols'], answer: 'enrol', explanation: 'Sau động từ khuyết thiếu “must” dùng động từ nguyên thể.' },
  },
  {
    id: 'vocab-promotion', topicId: 3, word: 'promotion', partOfSpeech: 'danh từ', ipa: '/prəˈmoʊʃn/',
    meaningVi: 'sự thăng chức', illustration: 'briefcase',
    distractorsEn: ['resignation', 'recruitment', 'retirement'], distractorsVi: ['sự từ chức', 'sự tuyển dụng', 'sự nghỉ hưu'],
    context: { sentence: 'After three years of excellent results, she received a ___ to team leader.', options: ['promotion', 'resignation', 'recruitment', 'retirement'], answer: 'promotion', explanation: 'Promotion là được chuyển lên vị trí cao hơn; resignation là từ chức.' },
    grammar: { sentence: 'The manager ___ her to senior accountant last month.', options: ['promoted', 'promotion', 'promotes', 'promoting'], answer: 'promoted', explanation: '“Last month” là dấu hiệu thì quá khứ đơn, nên dùng động từ “promoted”.' },
  },
  {
    id: 'vocab-deadline', topicId: 3, word: 'deadline', partOfSpeech: 'danh từ', ipa: '/ˈdedlaɪn/',
    meaningVi: 'hạn chót', illustration: 'briefcase',
    distractorsEn: ['budget', 'vacancy', 'salary'], distractorsVi: ['ngân sách', 'vị trí trống', 'tiền lương'],
    context: { sentence: 'We must submit the report before the ___ on Friday, so please finish your section today.', options: ['deadline', 'budget', 'vacancy', 'salary'], answer: 'deadline', explanation: 'Deadline là thời hạn cuối cùng để hoàn thành công việc.' },
    grammar: { sentence: 'The team ___ the project before the deadline last week.', options: ['completed', 'complete', 'completion', 'completely'], answer: 'completed', explanation: 'Hành động đã xong trong quá khứ (“last week”), nên dùng quá khứ đơn.' },
  },
  {
    id: 'vocab-unwind', topicId: 4, word: 'unwind', partOfSpeech: 'động từ', ipa: '/ʌnˈwaɪnd/',
    meaningVi: 'thư giãn, giải tỏa căng thẳng sau giờ làm việc hoặc học tập', illustration: 'coffee',
    distractorsEn: ['undermine', 'undertake', 'unfold'], distractorsVi: ['làm suy yếu năng lực', 'đảm nhận trách nhiệm', 'mở rộng quy mô'],
    context: { sentence: 'After a stressful week of final exams at VLU, listening to acoustic music helps me ___ and recharge my batteries.', options: ['unwind', 'accelerate', 'fluctuate', 'accumulate'], answer: 'unwind', explanation: 'Ngữ cảnh cần một động từ mang nghĩa “thư giãn, giải tỏa căng thẳng” sau kỳ thi.' },
    grammar: { sentence: 'Creating a peaceful environment at home is essential for ___ after long working hours.', options: ['unwinding', 'unwind', 'unwound', 'unwinds'], answer: 'unwinding', explanation: 'Sau giới từ “for” cần danh động từ (V-ing): “unwinding”.' },
  },
  {
    id: 'vocab-passion', topicId: 4, word: 'passion', partOfSpeech: 'danh từ', ipa: '/ˈpæʃn/',
    meaningVi: 'niềm đam mê', illustration: 'music',
    distractorsEn: ['obligation', 'hesitation', 'reluctance'], distractorsVi: ['nghĩa vụ', 'sự do dự', 'sự miễn cưỡng'],
    context: { sentence: 'She has a deep ___ for painting, and she spends every weekend in her small studio.', options: ['passion', 'obligation', 'hesitation', 'reluctance'], answer: 'passion', explanation: 'Passion chỉ cảm xúc yêu thích mãnh liệt, phù hợp với sở thích lâu dài.' },
    grammar: { sentence: 'Her ___ for music inspired her to join the school choir.', options: ['passion', 'passionate', 'passionately', 'passionless'], answer: 'passion', explanation: 'Sau tính từ sở hữu “Her” cần một danh từ.' },
  },
  {
    id: 'vocab-itinerary', topicId: 5, word: 'itinerary', partOfSpeech: 'danh từ', ipa: '/aɪˈtɪnərəri/',
    meaningVi: 'lịch trình chuyến đi', illustration: 'plane',
    distractorsEn: ['souvenir', 'passport', 'luggage'], distractorsVi: ['quà lưu niệm', 'hộ chiếu', 'hành lý'],
    context: { sentence: 'Before the trip, we printed a detailed ___ so that everyone knew the schedule for each day.', options: ['itinerary', 'souvenir', 'passport', 'luggage'], answer: 'itinerary', explanation: 'Itinerary là kế hoạch chi tiết về các điểm đến và thời gian.' },
    grammar: { sentence: 'The travel agency has ___ all of our hotel bookings for the whole week.', options: ['confirmed', 'confirm', 'confirmation', 'confirmable'], answer: 'confirmed', explanation: 'Thì hiện tại hoàn thành dùng “has” + quá khứ phân từ: “confirmed”.' },
  },
  {
    id: 'vocab-accommodation', topicId: 5, word: 'accommodation', partOfSpeech: 'danh từ (không đếm được)', ipa: '/əˌkɒməˈdeɪʃn/',
    meaningVi: 'chỗ ở, nơi lưu trú', illustration: 'globe',
    distractorsEn: ['destination', 'departure', 'transit'], distractorsVi: ['điểm đến', 'sự khởi hành', 'sự quá cảnh'],
    context: { sentence: 'Finding affordable ___ near the city centre can be difficult during the holiday season.', options: ['accommodation', 'destination', 'departure', 'transit'], answer: 'accommodation', explanation: 'Accommodation là nơi ở; destination là nơi đến.' },
    grammar: { sentence: 'Hotels near the airport offer ___ prices for travellers who arrive late at night.', options: ['affordable', 'afford', 'affordably', 'affordability'], answer: 'affordable', explanation: 'Trước danh từ “prices” cần một tính từ.' },
  },
  {
    id: 'vocab-nutritious', topicId: 6, word: 'nutritious', partOfSpeech: 'tính từ', ipa: '/njuːˈtrɪʃəs/',
    meaningVi: 'bổ dưỡng', illustration: 'leaf',
    distractorsEn: ['greasy', 'bitter', 'processed'], distractorsVi: ['nhiều dầu mỡ', 'đắng', 'đã qua chế biến công nghiệp'],
    context: { sentence: 'A balanced breakfast with fruit, eggs and whole grains is very ___ for students.', options: ['nutritious', 'greasy', 'bitter', 'processed'], answer: 'nutritious', explanation: 'Nutritious mô tả thực phẩm giàu dưỡng chất.' },
    grammar: { sentence: 'Doctors recommend eating more vegetables because they are ___ and low in calories.', options: ['nutrition', 'nutritious', 'nutritiously', 'nutritionist'], answer: 'nutritious', explanation: 'Sau động từ “are” cần một tính từ.' },
  },
  {
    id: 'vocab-cuisine', topicId: 6, word: 'cuisine', partOfSpeech: 'danh từ', ipa: '/kwɪˈziːn/',
    meaningVi: 'ẩm thực (của một vùng hoặc quốc gia)', illustration: 'globe',
    distractorsEn: ['recipe', 'ingredient', 'appetite'], distractorsVi: ['công thức nấu ăn', 'nguyên liệu', 'sự thèm ăn'],
    context: { sentence: 'Vietnamese ___ is famous worldwide for its fresh herbs and well-balanced flavours.', options: ['cuisine', 'recipe', 'ingredient', 'appetite'], answer: 'cuisine', explanation: 'Cuisine chỉ cả một nền ẩm thực, không phải một món cụ thể.' },
    grammar: { sentence: 'Many tourists ___ to try local dishes when they visit Hội An.', options: ['like', 'likes', 'liking', 'liked'], answer: 'like', explanation: 'Chủ ngữ số nhiều “Many tourists” đi với động từ nguyên dạng.' },
  },
  {
    id: 'vocab-endurance', topicId: 7, word: 'endurance', partOfSpeech: 'danh từ', ipa: '/ɪnˈdjʊərəns/',
    meaningVi: 'sức bền, khả năng chịu đựng', illustration: 'run',
    distractorsEn: ['flexibility', 'weight', 'posture'], distractorsVi: ['sự dẻo dai', 'cân nặng', 'tư thế'],
    context: { sentence: 'Running a marathon requires strong ___ and careful preparation over several months.', options: ['endurance', 'flexibility', 'weight', 'posture'], answer: 'endurance', explanation: 'Endurance là sức bền kéo dài khi vận động.' },
    grammar: { sentence: 'The coach believes that daily swimming will improve her ___ over the next season.', options: ['endurance', 'endure', 'enduring', 'endurably'], answer: 'endurance', explanation: 'Sau tính từ sở hữu “her” cần một danh từ.' },
  },
  {
    id: 'vocab-recover', topicId: 7, word: 'recover', partOfSpeech: 'động từ', ipa: '/rɪˈkʌvər/',
    meaningVi: 'hồi phục (sức khỏe)', illustration: 'coffee',
    distractorsEn: ['exhaust', 'inject', 'sweat'], distractorsVi: ['làm kiệt sức', 'tiêm', 'đổ mồ hôi'],
    context: { sentence: 'It took her three weeks to ___ from the flu, so she missed two important classes.', options: ['recover', 'exhaust', 'inject', 'sweat'], answer: 'recover', explanation: 'Recover là phục hồi sau bệnh hoặc chấn thương.' },
    grammar: { sentence: 'She has ___ from the injury, and she can now walk without any pain.', options: ['recovered', 'recovering', 'recovery', 'recovers'], answer: 'recovered', explanation: 'Thì hiện tại hoàn thành: “has” + quá khứ phân từ “recovered”.' },
  },
  {
    id: 'vocab-download', topicId: 8, word: 'download', partOfSpeech: 'động từ', ipa: '/ˌdaʊnˈləʊd/',
    meaningVi: 'tải xuống', illustration: 'phone',
    distractorsEn: ['delete', 'print', 'scan'], distractorsVi: ['xóa', 'in ấn', 'quét'],
    context: { sentence: 'Students can ___ the lecture slides from the portal before the class starts.', options: ['download', 'delete', 'print', 'scan'], answer: 'download', explanation: 'Download là sao chép tệp từ mạng về thiết bị.' },
    grammar: { sentence: 'The app will automatically ___ the latest update when the phone is connected to Wi-Fi.', options: ['download', 'downloads', 'downloading', 'downloaded'], answer: 'download', explanation: 'Sau trợ động từ “will” dùng động từ nguyên thể.' },
  },
  {
    id: 'vocab-algorithm', topicId: 8, word: 'algorithm', partOfSpeech: 'danh từ', ipa: '/ˈælɡərɪðəm/',
    meaningVi: 'thuật toán', illustration: 'phone',
    distractorsEn: ['database', 'browser', 'keyboard'], distractorsVi: ['cơ sở dữ liệu', 'trình duyệt', 'bàn phím'],
    context: { sentence: 'The video platform uses an ___ to suggest clips based on what you watched before.', options: ['algorithm', 'database', 'browser', 'keyboard'], answer: 'algorithm', explanation: 'Thuật toán gợi ý nội dung dựa trên lịch sử xem.' },
    grammar: { sentence: 'Social media ___ often show posts that match each user\'s interests.', options: ['algorithms', 'algorithm', 'algorithmic', 'algorithmically'], answer: 'algorithms', explanation: 'Chủ ngữ số nhiều “Social media algorithms” đi với danh từ số nhiều.' },
  },
  {
    id: 'vocab-pollution', topicId: 9, word: 'pollution', partOfSpeech: 'danh từ', ipa: '/pəˈluːʃn/',
    meaningVi: 'sự ô nhiễm', illustration: 'leaf',
    distractorsEn: ['recycling', 'harvest', 'drought'], distractorsVi: ['sự tái chế', 'sự thu hoạch', 'hạn hán'],
    context: { sentence: 'Heavy traffic and factory smoke have caused serious air ___ in many big cities.', options: ['pollution', 'recycling', 'harvest', 'drought'], answer: 'pollution', explanation: 'Air pollution là ô nhiễm không khí.' },
    grammar: { sentence: 'The government has introduced stricter rules to reduce ___ from factories.', options: ['pollution', 'pollute', 'polluted', 'polluting'], answer: 'pollution', explanation: 'Sau động từ “reduce” cần một danh từ làm tân ngữ.' },
  },
  {
    id: 'vocab-sustainable', topicId: 9, word: 'sustainable', partOfSpeech: 'tính từ', ipa: '/səˈsteɪnəbl/',
    meaningVi: 'bền vững, không làm cạn kiệt tài nguyên', illustration: 'leaf',
    distractorsEn: ['temporary', 'wasteful', 'unpredictable'], distractorsVi: ['tạm thời', 'lãng phí', 'khó đoán trước'],
    context: { sentence: 'Farmers are adopting ___ methods that protect the soil and conserve water.', options: ['sustainable', 'temporary', 'wasteful', 'unpredictable'], answer: 'sustainable', explanation: 'Sustainable mô tả phương pháp có thể duy trì lâu dài.' },
    grammar: { sentence: 'Using bamboo instead of plastic is a more ___ choice for the environment.', options: ['sustainable', 'sustainably', 'sustainability', 'sustain'], answer: 'sustainable', explanation: 'Trước danh từ “choice” cần một tính từ.' },
  },
  {
    id: 'vocab-tradition', topicId: 10, word: 'tradition', partOfSpeech: 'danh từ', ipa: '/trəˈdɪʃn/',
    meaningVi: 'truyền thống', illustration: 'globe',
    distractorsEn: ['innovation', 'fashion', 'rumour'], distractorsVi: ['sự đổi mới', 'xu hướng thời trang', 'tin đồn'],
    context: { sentence: 'Families gather together to celebrate Tết, a long-standing cultural ___.', options: ['tradition', 'innovation', 'fashion', 'rumour'], answer: 'tradition', explanation: 'Tradition là phong tục được lưu truyền qua nhiều thế hệ.' },
    grammar: { sentence: 'Many young people still ___ the custom of visiting their grandparents during the New Year.', options: ['follow', 'following', 'followed', 'follows'], answer: 'follow', explanation: 'Chủ ngữ số nhiều “Many young people” đi với động từ không thêm -s.' },
  },
  {
    id: 'vocab-heritage', topicId: 10, word: 'heritage', partOfSpeech: 'danh từ (không đếm được)', ipa: '/ˈherɪtɪdʒ/',
    meaningVi: 'di sản (văn hóa, lịch sử)', illustration: 'globe',
    distractorsEn: ['property', 'salary', 'currency'], distractorsVi: ['tài sản', 'tiền lương', 'tiền tệ'],
    context: { sentence: 'The ancient town of Hội An is recognised as a UNESCO World ___ site.', options: ['heritage', 'property', 'salary', 'currency'], answer: 'heritage', explanation: 'World Heritage Site là di sản thế giới.' },
    grammar: { sentence: 'The villagers are proud of their cultural ___, which has been passed down for centuries.', options: ['heritage', 'heritable', 'heritages', 'heritagely'], answer: 'heritage', explanation: 'Heritage là danh từ không đếm được nên không thêm -s.' },
  },
  {
    id: 'vocab-compete', topicId: 11, word: 'compete', partOfSpeech: 'động từ', ipa: '/kəmˈpiːt/',
    meaningVi: 'thi đấu, cạnh tranh', illustration: 'run',
    distractorsEn: ['withdraw', 'retire', 'rehearse'], distractorsVi: ['rút lui', 'giải nghệ', 'diễn tập'],
    context: { sentence: 'Athletes from more than 40 countries will ___ in the regional swimming championship.', options: ['compete', 'withdraw', 'retire', 'rehearse'], answer: 'compete', explanation: 'Compete là tham gia thi đấu với đối thủ.' },
    grammar: { sentence: 'She is hoping to ___ in the national tournament next summer.', options: ['compete', 'competition', 'competitive', 'competitor'], answer: 'compete', explanation: 'Sau “to” dùng động từ nguyên thể.' },
  },
  {
    id: 'vocab-champion', topicId: 11, word: 'champion', partOfSpeech: 'danh từ', ipa: '/ˈtʃæmpiən/',
    meaningVi: 'nhà vô địch', illustration: 'run',
    distractorsEn: ['spectator', 'referee', 'coach'], distractorsVi: ['khán giả', 'trọng tài', 'huấn luyện viên'],
    context: { sentence: 'After winning the gold medal, the young runner became the national ___.', options: ['champion', 'spectator', 'referee', 'coach'], answer: 'champion', explanation: 'Champion là người giành chức vô địch.' },
    grammar: { sentence: 'The ___ celebrated with the fans after the final whistle.', options: ['champion', 'champions', 'championship', 'championed'], answer: 'champion', explanation: 'Chủ ngữ số ít “The champion” đi với danh từ số ít.' },
  },
  {
    id: 'vocab-tariff', topicId: 12, word: 'tariff', partOfSpeech: 'danh từ', ipa: '/ˈtærɪf/',
    meaningVi: 'thuế quan đánh vào hàng nhập khẩu', illustration: 'briefcase',
    distractorsEn: ['subsidy', 'quota', 'loan'], distractorsVi: ['tiền trợ cấp', 'hạn ngạch', 'khoản vay'],
    context: { sentence: 'The new ___ on imported steel has raised prices for local construction companies.', options: ['tariff', 'subsidy', 'quota', 'loan'], answer: 'tariff', explanation: 'Tariff là thuế đánh vào hàng nhập khẩu; subsidy là trợ cấp của chính phủ.' },
    grammar: { sentence: 'Several countries have agreed to reduce their ___ on agricultural products.', options: ['tariffs', 'tariffed', 'tariffing', 'tariffal'], answer: 'tariffs', explanation: 'Chủ ngữ nhiều nước và “their” nên danh từ phải ở số nhiều.' },
  },
  {
    id: 'vocab-globalization', topicId: 12, word: 'globalization', partOfSpeech: 'danh từ', ipa: '/ˌɡləʊbəlaɪˈzeɪʃn/',
    meaningVi: 'toàn cầu hóa', illustration: 'globe',
    distractorsEn: ['isolation', 'nationalism', 'bureaucracy'], distractorsVi: ['sự cô lập', 'chủ nghĩa dân tộc', 'bộ máy quan liêu'],
    context: { sentence: '___ has made it easier for Vietnamese products to reach customers in Europe.', options: ['Globalization', 'Isolation', 'Nationalism', 'Bureaucracy'], answer: 'Globalization', explanation: 'Globalization là quá trình các nền kinh tế kết nối với nhau.' },
    grammar: { sentence: 'The rapid ___ of the economy has created many jobs in export industries.', options: ['globalization', 'globalize', 'globalized', 'globally'], answer: 'globalization', explanation: 'Sau “The rapid” cần một danh từ làm chủ ngữ.' },
  },
  {
    id: 'vocab-window-shopping', topicId: 13, word: 'window shopping', partOfSpeech: 'danh từ (cụm)', ipa: '/ˈwɪndoʊ ˈʃɑːpɪŋ/',
    meaningVi: 'ngắm hàng hóa mà không có ý định mua', illustration: 'coffee',
    distractorsEn: ['sales tax', 'gift wrapping', 'cash refund'], distractorsVi: ['thuế bán hàng', 'gói quà', 'hoàn tiền mặt'],
    context: { sentence: 'We spent the afternoon ___ in the city centre, but we did not buy anything.', options: ['window shopping', 'gift wrapping', 'cash refund', 'sales tax'], answer: 'window shopping', explanation: 'Window shopping là đi xem hàng trong cửa kính mà không mua.' },
    grammar: { sentence: 'Many people enjoy ___ on weekends, even when they have no plan to buy anything.', options: ['window shopping', 'window shop', 'window shopped', 'window shops'], answer: 'window shopping', explanation: 'Sau động từ “enjoy” dùng danh động từ (V-ing).' },
  },
  {
    id: 'vocab-after-sales-service', topicId: 13, word: 'after-sales service', partOfSpeech: 'danh từ (cụm)', ipa: '/ˌɑːftər ˈseɪlz ˈsɜːrvɪs/',
    meaningVi: 'dịch vụ hậu mãi, hỗ trợ sau khi bán', illustration: 'briefcase',
    distractorsEn: ['price tag', 'shopping cart', 'checkout'], distractorsVi: ['nhãn giá', 'giỏ hàng', 'thanh toán'],
    context: { sentence: 'Customers prefer brands that offer reliable ___ after they buy a product.', options: ['after-sales service', 'price tag', 'shopping cart', 'checkout'], answer: 'after-sales service', explanation: 'After-sales service là hỗ trợ sau khi khách đã mua hàng.' },
    grammar: { sentence: 'The shop ___ its after-sales service team last year to handle repair requests faster.', options: ['expanded', 'expand', 'expansion', 'expanding'], answer: 'expanded', explanation: '“Last year” là dấu hiệu thì quá khứ đơn: “expanded”.' },
  },
  {
    id: 'vocab-fabric', topicId: 14, word: 'fabric', partOfSpeech: 'danh từ', ipa: '/ˈfæbrɪk/',
    meaningVi: 'vải, chất liệu vải', illustration: 'shirt',
    distractorsEn: ['button', 'zipper', 'pattern'], distractorsVi: ['cúc áo', 'khóa kéo', 'họa tiết'],
    context: { sentence: 'This jacket is made from a soft, lightweight ___ that is perfect for spring.', options: ['fabric', 'button', 'zipper', 'pattern'], answer: 'fabric', explanation: 'Fabric là chất liệu dệt dùng để may quần áo.' },
    grammar: { sentence: 'The designer chose a ___ cotton to make the summer dresses more comfortable.', options: ['lightweight', 'lightly', 'lightness', 'lighten'], answer: 'lightweight', explanation: 'Trước danh từ “cotton” cần một tính từ.' },
  },
  {
    id: 'vocab-stylish', topicId: 14, word: 'stylish', partOfSpeech: 'tính từ', ipa: '/ˈstaɪlɪʃ/',
    meaningVi: 'sành điệu, đẹp theo xu hướng', illustration: 'shirt',
    distractorsEn: ['shabby', 'clumsy', 'broken'], distractorsVi: ['cũ kỹ', 'vụng về', 'bị hỏng'],
    context: { sentence: 'She always looks ___ in her simple white shirt and black trousers.', options: ['stylish', 'shabby', 'clumsy', 'broken'], answer: 'stylish', explanation: 'Stylish mô tả vẻ ngoài có gu thời trang.' },
    grammar: { sentence: 'He looks very ___ in his new suit, and everyone complimented him.', options: ['stylish', 'stylishly', 'style', 'stylishness'], answer: 'stylish', explanation: 'Sau động từ nối “looks” cần một tính từ.' },
  },
  {
    id: 'vocab-melody', topicId: 15, word: 'melody', partOfSpeech: 'danh từ', ipa: '/ˈmelədi/',
    meaningVi: 'giai điệu', illustration: 'music',
    distractorsEn: ['audience', 'stadium', 'ticket'], distractorsVi: ['khán giả', 'sân vận động', 'vé'],
    context: { sentence: 'The singer\'s voice and the gentle ___ of the piano created a calm atmosphere.', options: ['melody', 'audience', 'stadium', 'ticket'], answer: 'melody', explanation: 'Melody là chuỗi nốt nhạc có giai điệu rõ ràng.' },
    grammar: { sentence: 'The song\'s ___ was so catchy that it stayed in my head all day.', options: ['melody', 'melodic', 'melodically', 'melodize'], answer: 'melody', explanation: 'Chủ ngữ “The song\'s ___” là danh từ số ít.' },
  },
  {
    id: 'vocab-perform', topicId: 15, word: 'perform', partOfSpeech: 'động từ', ipa: '/pərˈfɔːrm/',
    meaningVi: 'biểu diễn', illustration: 'music',
    distractorsEn: ['attend', 'forget', 'hesitate'], distractorsVi: ['tham dự', 'quên', 'do dự'],
    context: { sentence: 'Students will ___ traditional songs in front of their families at the end-of-year concert.', options: ['perform', 'attend', 'forget', 'hesitate'], answer: 'perform', explanation: 'Perform là trình diễn trước khán giả.' },
    grammar: { sentence: 'The orchestra ___ a new symphony every spring, and tickets sell out quickly.', options: ['performs', 'perform', 'performed', 'performing'], answer: 'performs', explanation: 'Chủ ngữ số ít “The orchestra” đi với động từ thêm -s.' },
  },
]

