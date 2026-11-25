export type SpeakingWord = { word: string; ipa: string; meaningVi: string }

export type SpeakingTopic = {
  id: number
  name: string
  part1: [string, string]
  cueCard: string
  cuePoints: [string, string, string, string]
  suggestedWords: SpeakingWord[]
  sampleAnswer: string
}

export const speakingTopics: SpeakingTopic[] = [
  {
    id: 1, name: 'Family and Relationships',
    part1: ['Do you live with your family?', 'How often do you spend time with your relatives?'],
    cueCard: 'Describe a family member who has influenced you.',
    cuePoints: ['who this person is', 'how you know them', 'what they did that influenced you', 'how you feel about this influence'],
    suggestedWords: [
      { word: 'strengthen the bond', ipa: '/ˈstreŋθən ðə bɒnd/', meaningVi: 'củng cố mối gắn bó' },
      { word: 'look up to', ipa: '/lʊk ʌp tuː/', meaningVi: 'ngưỡng mộ, kính trọng' },
      { word: 'quality time', ipa: '/ˈkwɒləti taɪm/', meaningVi: 'thời gian chất lượng bên nhau' },
      { word: 'stay connected', ipa: '/steɪ kəˈnektɪd/', meaningVi: 'giữ liên lạc' },
    ],
    sampleAnswer: 'I would like to talk about my grandmother, who has influenced me the most. She lives in a small village in Bến Tre, and we see each other during the holidays. She raised five children with great patience, so I always look up to her. When I was a child, she taught me to cook and to respect others. Whenever we spend quality time together, we talk for hours and strengthen the bond between us. Even when we live apart, we stay connected through video calls. This experience taught me that kindness and hard work matter more than money.',
  },
  {
    id: 2, name: 'Education and Study',
    part1: ['What subject do you enjoy most at university?', 'Do you prefer studying alone or in groups?'],
    cueCard: 'Describe a course that taught you something useful.',
    cuePoints: ['what the course was about', 'why you enrolled in it', 'what you did during the course', 'what you learned from it'],
    suggestedWords: [
      { word: 'curriculum', ipa: '/kəˈrɪkjələm/', meaningVi: 'chương trình học' },
      { word: 'enrol', ipa: '/ɪnˈrəʊl/', meaningVi: 'đăng ký nhập học' },
      { word: 'practical', ipa: '/ˈpræktɪkl/', meaningVi: 'mang tính thực tế' },
      { word: 'reflect', ipa: '/rɪˈflekt/', meaningVi: 'suy ngẫm, nhìn lại' },
    ],
    sampleAnswer: 'I want to describe a business communication course I took in my second year. The curriculum focused on practical skills, such as writing emails and giving presentations. I enrolled because I wanted to improve my English for future job interviews. The lecturer gave us realistic case studies, and we worked in small groups every week. At first I was nervous, but I gradually became more confident. Looking back, I can reflect on how the course taught me to communicate clearly, which is essential in almost every career.',
  },
  {
    id: 3, name: 'Work and Employment',
    part1: ['Do you like your current job?', 'Is salary or job satisfaction more important to you?'],
    cueCard: 'Describe a job you would like to have in the future.',
    cuePoints: ['what the job involves', 'where you would work', 'why it appeals to you', 'what you would need to qualify for it'],
    suggestedWords: [
      { word: 'promotion', ipa: '/prəˈmoʊʃn/', meaningVi: 'thăng chức' },
      { word: 'deadline', ipa: '/ˈdedlaɪn/', meaningVi: 'hạn chót' },
      { word: 'well-paid', ipa: '/ˌwelˈpeɪd/', meaningVi: 'được trả lương cao' },
      { word: 'qualified', ipa: '/ˈkwɒlɪfaɪd/', meaningVi: 'có đủ trình độ chuyên môn' },
    ],
    sampleAnswer: 'I would like to describe the job of a project manager in an international company. This role appeals to me because it combines planning, teamwork and communication. The person usually works with designers, engineers and clients, and makes sure every task meets its deadline. I imagine working in an office in Ho Chi Minh City with a flexible schedule. I think the job is well-paid and offers a clear path to promotion. To get it, I would need to become fully qualified through professional certificates and several years of experience.',
  },
  {
    id: 4, name: 'Hobbies and Leisure Activities',
    part1: ['What do you usually do in your leisure time?', 'Do you think people today have enough free time?'],
    cueCard: 'Describe a hobby that helps you relax.',
    cuePoints: ['what the hobby is', 'how long you have done it', 'how you practise it', 'why it helps you relax'],
    suggestedWords: [
      { word: 'unwind', ipa: '/ʌnˈwaɪnd/', meaningVi: 'thư giãn, giải tỏa căng thẳng' },
      { word: "refresh one's mind", ipa: '/rɪˈfreʃ wʌnz maɪnd/', meaningVi: 'làm đầu óc sảng khoái' },
      { word: 'passion', ipa: '/ˈpæʃn/', meaningVi: 'niềm đam mê' },
      { word: 'boost energy levels', ipa: '/buːst ˈenədʒi ˈlevlz/', meaningVi: 'tăng mức năng lượng' },
    ],
    sampleAnswer: 'I want to talk about photography, which is my favourite hobby. I started taking photos of street scenes when I was a university student, and it quickly became a real passion. I usually go out early on Sunday mornings to explore quiet neighbourhoods in Saigon. The best part is that I forget about my deadlines and simply focus on what I see. When I come back, I feel calm and refreshed. This hobby helps me unwind after a busy week and boosts my energy levels for the next one.',
  },
  {
    id: 5, name: 'Travel and Tourism',
    part1: ['Do you enjoy travelling abroad?', 'Where do you usually stay when you travel?'],
    cueCard: 'Describe a memorable trip you took with friends.',
    cuePoints: ['where you went', 'who went with you', 'what you did there', 'why the trip was memorable'],
    suggestedWords: [
      { word: 'itinerary', ipa: '/aɪˈtɪnərəri/', meaningVi: 'lịch trình chuyến đi' },
      { word: 'accommodation', ipa: '/əˌkɒməˈdeɪʃn/', meaningVi: 'chỗ ở, nơi lưu trú' },
      { word: 'bargain', ipa: '/ˈbɑːrɡən/', meaningVi: 'mặc cả' },
      { word: 'destination', ipa: '/ˌdestɪˈneɪʃn/', meaningVi: 'điểm đến' },
    ],
    sampleAnswer: 'I would like to describe a weekend trip to Đà Lạt with my friends last year. We planned a detailed itinerary, including a visit to the flower gardens and a short hike to a waterfall. We booked affordable accommodation in a small guesthouse near the lake. At the local market, I had to bargain politely with a seller for a souvenir. The destination was beautiful, and the cool weather was a pleasant change. What I remember most is the laughter we shared during the long journey back.',
  },
  {
    id: 6, name: 'Food and Eating Habits',
    part1: ['What is your favourite food?', 'Do you cook at home often?'],
    cueCard: 'Describe a traditional dish you enjoy eating.',
    cuePoints: ['what the dish is', 'what it is made of', 'when you usually eat it', 'why you enjoy it'],
    suggestedWords: [
      { word: 'nutritious', ipa: '/njuːˈtrɪʃəs/', meaningVi: 'bổ dưỡng' },
      { word: 'cuisine', ipa: '/kwɪˈziːn/', meaningVi: 'ẩm thực' },
      { word: 'ingredient', ipa: '/ɪnˈɡriːdiənt/', meaningVi: 'nguyên liệu' },
      { word: 'appetite', ipa: '/ˈæpɪtaɪt/', meaningVi: 'sự thèm ăn' },
    ],
    sampleAnswer: 'I want to describe bánh xèo, a crispy pancake that my family often makes on weekends. It is a popular dish in the Southern cuisine of Viet Nam. The main ingredients are rice flour, turmeric, bean sprouts and shrimp. My mother usually prepares the batter the night before, so the flavour is richer. We wrap the pancake in fresh lettuce and herbs. It is not only delicious but also nutritious. Whenever I smell it cooking, my appetite grows immediately.',
  },
  {
    id: 7, name: 'Health and Fitness',
    part1: ['How often do you exercise?', 'Do you think sports are important for students?'],
    cueCard: 'Describe a healthy habit you have started recently.',
    cuePoints: ['what the habit is', 'when you started it', 'how you do it', 'how it has affected you'],
    suggestedWords: [
      { word: 'endurance', ipa: '/ɪnˈdjʊərəns/', meaningVi: 'sức bền' },
      { word: 'recover', ipa: '/rɪˈkʌvər/', meaningVi: 'hồi phục' },
      { word: 'posture', ipa: '/ˈpɒstʃər/', meaningVi: 'tư thế' },
      { word: 'well-being', ipa: '/ˌwelˈbiːɪŋ/', meaningVi: 'sức khỏe thể chất và tinh thần' },
    ],
    sampleAnswer: 'I would like to talk about a healthy habit I started six months ago: morning jogging. At first, I could only run for ten minutes before I felt exhausted. Gradually, my endurance improved, and I can now run for about forty minutes without stopping. I also pay attention to my posture when I work at my desk, because sitting for long hours causes back pain. Whenever I feel tired, I take time to recover with proper sleep. This habit has improved my overall well-being and given me more energy.',
  },
  {
    id: 8, name: 'Technology and Social Media',
    part1: ['How much time do you spend on your phone each day?', 'Does social media have more advantages or disadvantages?'],
    cueCard: 'Describe a useful app you use for studying.',
    cuePoints: ['what the app is', 'when you started using it', 'how it helps your study', 'any drawbacks of it'],
    suggestedWords: [
      { word: 'download', ipa: '/ˌdaʊnˈləʊd/', meaningVi: 'tải xuống' },
      { word: 'algorithm', ipa: '/ˈælɡərɪðəm/', meaningVi: 'thuật toán' },
      { word: 'user-friendly', ipa: '/ˌjuːzər ˈfrendli/', meaningVi: 'dễ sử dụng' },
      { word: 'distraction', ipa: '/dɪˈstrækʃn/', meaningVi: 'sự xao nhãng' },
    ],
    sampleAnswer: 'I want to describe a language-learning app that I downloaded on my phone last year. It is user-friendly, and each lesson takes only about fifteen minutes. The app uses an algorithm to recommend exercises based on my mistakes, so I review the words I forget most often. I usually study during my commute to university, which saves a lot of time. Sometimes notifications become a distraction, so I turn them off during lessons. Overall, the app has helped me build my vocabulary steadily and confidently.',
  },
  {
    id: 9, name: 'Environmental Issues',
    part1: ['Which environmental problems are serious in your city?', 'What can individuals do to protect the environment?'],
    cueCard: 'Describe a project that helped protect the environment.',
    cuePoints: ['what the project was', 'who was involved', 'what you did in it', 'what the result was'],
    suggestedWords: [
      { word: 'pollution', ipa: '/pəˈluːʃn/', meaningVi: 'ô nhiễm' },
      { word: 'sustainable', ipa: '/səˈsteɪnəbl/', meaningVi: 'bền vững' },
      { word: 'recycle', ipa: '/riːˈsaɪkl/', meaningVi: 'tái chế' },
      { word: 'conserve', ipa: '/kənˈsɜːrv/', meaningVi: 'bảo tồn, tiết kiệm' },
    ],
    sampleAnswer: 'I would like to describe a clean-up campaign that my university organised along the Saigon River. Pollution had become a serious problem because of plastic waste from nearby houses. Our group collected rubbish, sorted it and explained how to recycle plastic at home. We also discussed sustainable habits, such as using reusable bags and bottles. The experience was tiring, but it was rewarding to see the riverbank cleaner by the end of the day. I think small actions can help conserve natural resources if people apply them consistently.',
  },
  {
    id: 10, name: 'Culture and Traditions',
    part1: ['What traditions does your family follow during Tết?', 'Do young people still value traditions?'],
    cueCard: 'Describe a festival in your country that you enjoy.',
    cuePoints: ['what the festival is', 'when and where it takes place', 'what people do during it', 'why you enjoy it'],
    suggestedWords: [
      { word: 'tradition', ipa: '/trəˈdɪʃn/', meaningVi: 'truyền thống' },
      { word: 'heritage', ipa: '/ˈherɪtɪdʒ/', meaningVi: 'di sản' },
      { word: 'celebrate', ipa: '/ˈselɪbreɪt/', meaningVi: 'kỷ niệm, ăn mừng' },
      { word: 'ancestor', ipa: '/ˈænsestər/', meaningVi: 'tổ tiên' },
    ],
    sampleAnswer: 'I want to describe the Hùng Kings\' Festival, which takes place every year in Phú Thọ. It is an important cultural event that celebrates our ancestors and national heritage. People travel from many provinces to offer incense and take part in traditional music performances. I enjoy watching the procession because the costumes are colourful and the atmosphere is very warm. Although the festival is old, young people also take part by sharing photos and learning the stories behind the rituals. I believe it reminds us where we come from.',
  },
  {
    id: 11, name: 'Sports and Games',
    part1: ['Do you prefer individual or team sports?', 'Have you ever watched a sports competition live?'],
    cueCard: 'Describe a sports event you watched or took part in.',
    cuePoints: ['what the event was', 'when and where it happened', 'what happened during it', 'how you felt about it'],
    suggestedWords: [
      { word: 'compete', ipa: '/kəmˈpiːt/', meaningVi: 'thi đấu' },
      { word: 'champion', ipa: '/ˈtʃæmpiən/', meaningVi: 'nhà vô địch' },
      { word: 'opponent', ipa: '/əˈpoʊnənt/', meaningVi: 'đối thủ' },
      { word: 'spectator', ipa: '/spekˈteɪtər/', meaningVi: 'khán giả' },
    ],
    sampleAnswer: 'I would like to describe a badminton tournament at my university last semester. I did not expect to compete at such a high level, but my friends encouraged me to register. My first opponent was a skilled player from the engineering faculty, and the match was very intense. Many spectators cheered from the stands, which made me feel excited and nervous. I did not win the final, but I learned a lot about strategy and mental strength. The champion of that tournament became a great example for all of us.',
  },
  {
    id: 12, name: 'Globalization and International Relations',
    part1: ['Has globalization improved life in your country?', 'Do you prefer buying foreign or domestic products?'],
    cueCard: 'Describe a foreign product you often use.',
    cuePoints: ['what the product is', 'where it comes from', 'how you started using it', 'why you continue to use it'],
    suggestedWords: [
      { word: 'globalization', ipa: '/ˌɡləʊbəlaɪˈzeɪʃn/', meaningVi: 'toàn cầu hóa' },
      { word: 'tariff', ipa: '/ˈtærɪf/', meaningVi: 'thuế quan' },
      { word: 'export', ipa: '/ɪkˈspɔːrt/', meaningVi: 'xuất khẩu' },
      { word: 'cross-border', ipa: '/krɒs ˈbɔːrdər/', meaningVi: 'xuyên biên giới' },
    ],
    sampleAnswer: 'I would like to describe a skincare brand from Korea that I have used for several years. I first found it through an online store, which shows how globalization has changed shopping habits. The products are exported from Seoul and reach Viet Nam at reasonable prices, although tariffs sometimes increase the cost. I appreciate the simple ingredients and the clear instructions on each bottle. Cross-border trade gives consumers more choice, but I still check the quality carefully before I buy. Overall, the brand has earned my trust.',
  },
  {
    id: 13, name: 'Shopping and Consumerism',
    part1: ['Do you enjoy shopping?', 'Do you prefer shopping online or in shops?'],
    cueCard: 'Describe a purchase that you were satisfied with.',
    cuePoints: ['what you bought', 'where and why you bought it', 'how the purchase went', 'why you were satisfied'],
    suggestedWords: [
      { word: 'window shopping', ipa: '/ˈwɪndoʊ ˈʃɑːpɪŋ/', meaningVi: 'ngắm hàng không mua' },
      { word: 'after-sales service', ipa: '/ˌɑːftər ˈseɪlz ˈsɜːrvɪs/', meaningVi: 'dịch vụ hậu mãi' },
      { word: 'bargain price', ipa: '/ˈbɑːrɡən praɪs/', meaningVi: 'giá hời' },
      { word: 'e-commerce', ipa: '/ˈiː kɒmɜːrs/', meaningVi: 'thương mại điện tử' },
    ],
    sampleAnswer: 'I want to describe a laptop that I bought online last year. Before buying it, I spent some time window shopping on several e-commerce websites to compare prices. I eventually found a bargain price during a seasonal sale. What impressed me most was the after-sales service, because the store repaired a battery problem within two days. The delivery was fast, and the packaging was careful. I think it is important to read reviews before purchasing, but a reliable seller makes the whole experience much easier and more satisfying.',
  },
  {
    id: 14, name: 'Fashion and Clothing',
    part1: ['How would you describe your personal style?', 'Do you think people judge others by their clothes?'],
    cueCard: 'Describe an item of clothing that is special to you.',
    cuePoints: ['what the item is', 'where it came from', 'when you wear it', 'why it is special to you'],
    suggestedWords: [
      { word: 'fabric', ipa: '/ˈfæbrɪk/', meaningVi: 'chất liệu vải' },
      { word: 'stylish', ipa: '/ˈstaɪlɪʃ/', meaningVi: 'sành điệu' },
      { word: 'comfortable', ipa: '/ˈkʌmftəbl/', meaningVi: 'thoải mái' },
      { word: 'fashion', ipa: '/ˈfæʃn/', meaningVi: 'thời trang' },
    ],
    sampleAnswer: 'I would like to describe a traditional áo dài that my grandmother gave me for my graduation. The fabric is soft silk, and the colour is a light blue that I really love. It is not only stylish but also comfortable enough to wear for a long day. My grandmother tailored it herself many years ago, so every stitch reminds me of her care. I wear it on special occasions, such as family gatherings and festivals. Although fashion changes quickly, this dress reflects my identity and my family\'s history.',
  },
  {
    id: 15, name: 'Music and Entertainment',
    part1: ['What kind of music do you listen to most often?', 'Is music important in education?'],
    cueCard: 'Describe a concert or performance that you remember well.',
    cuePoints: ['what the performance was', 'where and when it took place', 'what made it memorable', 'how it made you feel'],
    suggestedWords: [
      { word: 'melody', ipa: '/ˈmelədi/', meaningVi: 'giai điệu' },
      { word: 'perform', ipa: '/pərˈfɔːrm/', meaningVi: 'biểu diễn' },
      { word: 'audience', ipa: '/ˈɔːdiəns/', meaningVi: 'khán giả' },
      { word: 'atmosphere', ipa: '/ˈætməsfɪər/', meaningVi: 'không khí' },
    ],
    sampleAnswer: 'I want to describe a school concert that I attended two years ago. A local choir performed several songs, and the melody of the final piece was so beautiful that everyone stopped talking. The audience was quiet, and the atmosphere felt warm and emotional. I remember the lights, the costumes and the sincere expressions of the singers. What stays with me is how music can connect people who have never met before. Since then, I have listened to live performances whenever I can.',
  },
]
