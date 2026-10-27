export type QuizOneVocabularyItem = {
  id: string
  lesson: string
  term: string
  pronunciation: string
  meaning: string
  acceptedMeanings: string[]
  definition: string
  example: string
}

export const quizOneVocabulary: QuizOneVocabularyItem[] = [
  {
    id: 'l14-window-shopping', lesson: 'Lesson 14', term: 'window shopping', pronunciation: '/ˈwɪndəʊ ˈʃɑːpɪŋ/',
    meaning: 'việc ngắm hàng mà không có ý định mua', acceptedMeanings: ['ngắm hàng không mua', 'đi xem hàng mà không mua'],
    definition: 'The activity of looking at goods displayed in shop windows without intending to buy them.',
    example: 'We spent the afternoon window shopping in the city centre.',
  },
  {
    id: 'l14-after-sales-service', lesson: 'Lesson 14', term: 'after-sales service', pronunciation: '/ˌæftər ˌseɪlz ˈsɜːrvɪs/',
    meaning: 'dịch vụ hậu mãi', acceptedMeanings: ['hỗ trợ khách hàng sau khi mua', 'dịch vụ sau bán hàng'],
    definition: 'The support provided to customers after they buy a product.',
    example: 'Good after-sales service makes customers more likely to return.',
  },
  {
    id: 'l14-e-commerce', lesson: 'Lesson 14', term: 'e-commerce', pronunciation: '/ˈiː kɑːmɜːrs/',
    meaning: 'thương mại điện tử', acceptedMeanings: ['mua bán hàng hóa và dịch vụ trên mạng', 'kinh doanh trực tuyến'],
    definition: 'The business of buying and selling goods and services on the internet.',
    example: 'E-commerce has made it easy for small businesses to reach global customers.',
  },
  {
    id: 'l14-bargain-price', lesson: 'Lesson 14', term: 'to buy something at a bargain price', pronunciation: '/baɪ ˈsʌmθɪŋ æt ə ˈbɑːrɡən praɪs/',
    meaning: 'mua thứ gì với giá hời', acceptedMeanings: ['mua với giá rẻ', 'mua được món hời'],
    definition: 'To buy something at a lower price.',
    example: 'Lan bought the laptop at a bargain price during the sale.',
  },
  {
    id: 'l14-shop-for', lesson: 'Lesson 14', term: 'to shop for something', pronunciation: '/ʃɑːp fər ˈsʌmθɪŋ/',
    meaning: 'đi mua hoặc tìm mua thứ gì', acceptedMeanings: ['đi mua thứ gì', 'tìm mua thứ gì'],
    definition: 'To buy something, especially from stores.',
    example: 'They went to the mall to shop for new shoes.',
  },
  {
    id: 'l14-bargain', lesson: 'Lesson 14', term: 'to bargain', pronunciation: '/ˈbɑːrɡən/',
    meaning: 'mặc cả; thương lượng giá', acceptedMeanings: ['mặc cả', 'trả giá'],
    definition: 'To try to make someone give you something at a better price.',
    example: 'Visitors often bargain with sellers at the night market.',
  },

  {
    id: 'l16-shopaholic', lesson: 'Lesson 16', term: 'shopaholic', pronunciation: '/ʃɒp.əˈhɒl.ɪk/',
    meaning: 'người nghiện mua sắm', acceptedMeanings: ['người mê mua sắm'],
    definition: 'A person who enjoys shopping very much and does it a lot.',
    example: 'As a self-confessed shopaholic, Mai visits the mall every weekend.',
  },
  {
    id: 'l16-in-store-experience', lesson: 'Lesson 16', term: 'in-store experience', pronunciation: '/ɪn stɔːr ɪkˈspɪr.i.əns/',
    meaning: 'trải nghiệm mua sắm tại cửa hàng', acceptedMeanings: ['trải nghiệm tại cửa hàng'],
    definition: 'The overall feeling and interactions customers have while shopping at a physical store.',
    example: 'Helpful staff can greatly improve the in-store experience.',
  },
  {
    id: 'l16-discount', lesson: 'Lesson 16', term: 'discount', pronunciation: '/ˈdɪs.kaʊnt/',
    meaning: 'sự giảm giá; khoản chiết khấu', acceptedMeanings: ['giảm giá', 'chiết khấu'],
    definition: 'A reduction in the usual price.',
    example: 'Students receive a ten-percent discount on all books.',
  },
  {
    id: 'l16-prioritize-eco-friendly', lesson: 'Lesson 16', term: 'to prioritize eco-friendly products', pronunciation: '/praɪˈɔːr.ə.taɪz ˌiː.kəʊ ˈfrend.li ˈprɒd.ʌkts/',
    meaning: 'ưu tiên các sản phẩm thân thiện với môi trường', acceptedMeanings: ['ưu tiên sản phẩm xanh', 'chọn sản phẩm ít gây hại môi trường'],
    definition: 'To give preference to items that have a minimal impact on the environment.',
    example: 'Many shoppers now prioritize eco-friendly products with less packaging.',
  },
  {
    id: 'l16-go-window-shopping', lesson: 'Lesson 16', term: 'to go window shopping', pronunciation: '/ɡoʊ ˈwɪndoʊ ˈʃɑːpɪŋ/',
    meaning: 'đi ngắm hàng mà không định mua', acceptedMeanings: ['đi xem hàng không mua', 'đi ngắm đồ'],
    definition: 'To browse in stores or look at items in store windows without intending to buy anything.',
    example: 'We went window shopping while we waited for the film to start.',
  },
  {
    id: 'l16-one-stop-shop', lesson: 'Lesson 16', term: 'one-stop shop', pronunciation: '/ˌwʌn.stɒp ˈʃɒp/',
    meaning: 'nơi cung cấp nhiều sản phẩm hoặc dịch vụ tại một chỗ', acceptedMeanings: ['cửa hàng một điểm đến', 'nơi mua mọi thứ'],
    definition: 'A business that sells a number of different products or services in one place.',
    example: 'The centre is a one-stop shop for travel bookings and insurance.',
  },

  {
    id: 'l17-tech-savvy', lesson: 'Lesson 17', term: 'tech-savvy', pronunciation: '/tek ˈsæv.i/',
    meaning: 'am hiểu công nghệ', acceptedMeanings: ['rành công nghệ', 'thành thạo công nghệ'],
    definition: 'Knowing a lot about technology, especially computers.',
    example: 'Tech-savvy students quickly adapted to the new learning platform.',
  },
  {
    id: 'l17-addictive', lesson: 'Lesson 17', term: 'addictive', pronunciation: '/əˈdɪk.tɪv/',
    meaning: 'gây nghiện', acceptedMeanings: ['dễ gây nghiện'],
    definition: 'So enjoyable or habit-forming that it is difficult to stop.',
    example: 'Short-form videos can be addictive if you watch them without limits.',
  },
  {
    id: 'l17-technological-items', lesson: 'Lesson 17', term: 'technological items', pronunciation: '/ˌtek.nəˈlɒdʒ.ɪ.kəl ˈaɪ.təmz/',
    meaning: 'các thiết bị hoặc đồ dùng công nghệ', acceptedMeanings: ['đồ công nghệ', 'thiết bị công nghệ'],
    definition: 'Things related to technology, such as phones and computers.',
    example: 'Phones and tablets are the most common technological items in her bag.',
  },
  {
    id: 'l17-screen-time', lesson: 'Lesson 17', term: 'screen time / screentime', pronunciation: '/ˈskriːn ˌtaɪm/',
    meaning: 'thời gian sử dụng màn hình', acceptedMeanings: ['thời gian nhìn màn hình', 'thời gian dùng thiết bị điện tử'],
    definition: 'Time spent using a device such as a computer, television, or tablet.',
    example: 'Parents often set daily screen-time limits for young children.',
  },
  {
    id: 'l17-fulfill', lesson: 'Lesson 17', term: 'to fulfill', pronunciation: '/fʊlˈfɪl/',
    meaning: 'thực hiện; hoàn thành điều được mong đợi hoặc hứa', acceptedMeanings: ['hoàn thành', 'thực hiện lời hứa', 'đáp ứng'],
    definition: 'To do something that is expected, hoped for, or promised, or to cause it to happen.',
    example: 'The new software fulfills all the requirements of the project.',
  },
  {
    id: 'l17-distract', lesson: 'Lesson 17', term: 'to distract somebody from something / doing something', pronunciation: '/dɪˈstrækt/',
    meaning: 'làm ai xao nhãng khỏi việc gì', acceptedMeanings: ['làm mất tập trung', 'khiến ai phân tâm'],
    definition: 'To make someone stop giving their attention to something.',
    example: 'Phone notifications can distract students from doing their homework.',
  },

  {
    id: 'l19-digital-age', lesson: 'Lesson 19', term: 'digital age', pronunciation: '/ˈdɪdʒ.ɪ.təl eɪdʒ/',
    meaning: 'thời đại số', acceptedMeanings: ['kỷ nguyên số', 'thời đại công nghệ số'],
    definition: 'The period when information technology is widely used.',
    example: 'In the digital age, information can travel around the world instantly.',
  },
  {
    id: 'l19-cutting-edge', lesson: 'Lesson 19', term: 'cutting-edge technology', pronunciation: '/ˌkʌt.ɪŋ ˈedʒ tekˈnɒl.ə.dʒi/',
    meaning: 'công nghệ tiên tiến nhất', acceptedMeanings: ['công nghệ hiện đại nhất', 'công nghệ tối tân'],
    definition: 'The newest and most advanced technology.',
    example: 'The hospital uses cutting-edge technology to diagnose rare diseases.',
  },
  {
    id: 'l19-internet-access', lesson: 'Lesson 19', term: 'to have access to the Internet', pronunciation: '/tuː hæv ˈæk.ses tuː ði ˈɪn.tə.net/',
    meaning: 'có khả năng truy cập Internet', acceptedMeanings: ['có quyền truy cập internet', 'dùng được internet'],
    definition: 'To be able to use the Internet.',
    example: 'Most students have access to the Internet at the university library.',
  },
  {
    id: 'l19-social-media-addict', lesson: 'Lesson 19', term: 'social media addict', pronunciation: '/ˌsəʊ.ʃəl ˈmiː.di.ə ˈæd.ɪkt/',
    meaning: 'người nghiện mạng xã hội', acceptedMeanings: ['người dành quá nhiều thời gian cho mạng xã hội'],
    definition: 'A person who spends too much time on social media.',
    example: 'He realized he was becoming a social media addict and deleted two apps.',
  },
  {
    id: 'l19-cyberbullying-victim', lesson: 'Lesson 19', term: 'victim of cyberbullying', pronunciation: '/ˈvɪk.tɪm əv ˈsaɪ.bəˌbʊl.i.ɪŋ/',
    meaning: 'nạn nhân của bắt nạt trên mạng', acceptedMeanings: ['nạn nhân bị bắt nạt trực tuyến'],
    definition: 'A person harmed or frightened by another person through unpleasant online messages.',
    example: 'Schools should provide support for every victim of cyberbullying.',
  },
  {
    id: 'l19-click-mouse', lesson: 'Lesson 19', term: '(to do something) with the click of a mouse', pronunciation: '/wɪð ðə klɪk əv ə maʊs/',
    meaning: 'làm việc gì dễ dàng chỉ bằng một cú nhấp chuột', acceptedMeanings: ['chỉ với một cú nhấp chuột', 'làm nhanh bằng máy tính'],
    definition: 'To do something easily and quickly using a computer.',
    example: 'You can book a hotel with the click of a mouse.',
  },

  {
    id: 'l20-destination', lesson: 'Lesson 20', term: 'destination', pronunciation: '/ˌdes.tɪˈneɪ.ʃən/',
    meaning: 'điểm đến', acceptedMeanings: ['nơi đến'],
    definition: 'The place you are travelling to.',
    example: 'Hoi An is a popular destination for international visitors.',
  },
  {
    id: 'l20-route', lesson: 'Lesson 20', term: 'route', pronunciation: '/ruːt/',
    meaning: 'tuyến đường; lộ trình', acceptedMeanings: ['đường đi', 'lộ trình'],
    definition: 'The path you take to get somewhere.',
    example: 'We chose a scenic route through the mountains.',
  },
  {
    id: 'l20-stunning', lesson: 'Lesson 20', term: 'stunning', pronunciation: '/ˈstʌn.ɪŋ/',
    meaning: 'tuyệt đẹp; gây ấn tượng mạnh', acceptedMeanings: ['đẹp ngoạn mục', 'rất đẹp'],
    definition: 'Very beautiful or impressive.',
    example: 'The hotel offers stunning views of the bay.',
  },
  {
    id: 'l20-eco-tour', lesson: 'Lesson 20', term: 'to go on an eco-tour', pronunciation: '/tə ɡoʊ ɒn ən ˈiː.kəʊ tʊər/',
    meaning: 'tham gia chuyến du lịch sinh thái', acceptedMeanings: ['đi du lịch sinh thái'],
    definition: 'To travel in a way that supports the environment.',
    example: 'We went on an eco-tour to learn about mangrove conservation.',
  },
  {
    id: 'l20-backpacking-holiday', lesson: 'Lesson 20', term: 'to take a backpacking holiday', pronunciation: '/tə teɪk ə ˈbækˌpæk.ɪŋ ˈhɒl.ɪ.deɪ/',
    meaning: 'đi du lịch ba lô', acceptedMeanings: ['đi phượt bằng ba lô', 'du lịch bụi'],
    definition: 'To travel with a backpack, often staying in simple places.',
    example: 'They took a backpacking holiday across Southeast Asia.',
  },
  {
    id: 'l20-tourist-attraction', lesson: 'Lesson 20', term: 'tourist attraction', pronunciation: '/ˈtʊə.rɪst əˈtræk.ʃən/',
    meaning: 'điểm thu hút khách du lịch', acceptedMeanings: ['địa điểm du lịch', 'điểm tham quan'],
    definition: 'A place that draws visitors.',
    example: 'The ancient temple is the town’s main tourist attraction.',
  },

  {
    id: 'l22-flavorful', lesson: 'Lesson 22', term: 'flavorful', pronunciation: '/ˈfleɪ.və.fəl/',
    meaning: 'đậm đà; có hương vị thơm ngon', acceptedMeanings: ['ngon đậm vị', 'nhiều hương vị'],
    definition: 'Having a strong and pleasant taste.',
    example: 'The soup is flavorful without being too salty.',
  },
  {
    id: 'l22-takeaway', lesson: 'Lesson 22', term: 'takeaway', pronunciation: '/ˈteɪ.kə.weɪ/',
    meaning: 'đồ ăn mang đi', acceptedMeanings: ['món ăn mua mang về', 'thức ăn mang về'],
    definition: 'A meal cooked and bought at a shop or restaurant but taken elsewhere to be eaten.',
    example: 'We ordered a takeaway because nobody had time to cook.',
  },
  {
    id: 'l22-nutritious', lesson: 'Lesson 22', term: 'nutritious', pronunciation: '/njuːˈtrɪʃ.əs/',
    meaning: 'bổ dưỡng; giàu dinh dưỡng', acceptedMeanings: ['có lợi cho sức khỏe', 'giàu dưỡng chất'],
    definition: 'Containing substances that are good for your health and help you grow.',
    example: 'A nutritious breakfast helps children concentrate at school.',
  },
  {
    id: 'l22-cuisine', lesson: 'Lesson 22', term: 'cuisine', pronunciation: '/kwɪˈziːn/',
    meaning: 'nền ẩm thực; phong cách nấu ăn', acceptedMeanings: ['ẩm thực', 'phong cách nấu nướng'],
    definition: 'A style of cooking.',
    example: 'Vietnamese cuisine is known for its fresh herbs and balanced flavours.',
  },
  {
    id: 'l22-allergic', lesson: 'Lesson 22', term: 'be allergic to something', pronunciation: '/bi əˈlɜː.dʒɪk tə ˈsʌm.θɪŋ/',
    meaning: 'bị dị ứng với thứ gì', acceptedMeanings: ['dị ứng với'],
    definition: 'To become sick or develop skin or breathing problems after contact with certain foods or substances.',
    example: 'My brother is allergic to peanuts, so he always checks food labels.',
  },
  {
    id: 'l22-picky-eater', lesson: 'Lesson 22', term: 'a picky eater', pronunciation: '/ə ˈpɪk.i ˈiː.tər/',
    meaning: 'người kén ăn', acceptedMeanings: ['người khó ăn'],
    definition: 'Someone with specific food likes and dislikes who may not enjoy trying new foods.',
    example: 'Even as a picky eater, Nam enjoyed the vegetable curry.',
  },

  {
    id: 'l23-rhythm', lesson: 'Lesson 23', term: 'rhythm', pronunciation: '/ˈrɪð.əm/',
    meaning: 'nhịp điệu', acceptedMeanings: ['tiết tấu'],
    definition: 'A strong pattern of sounds, words, or musical notes used in music, poetry, and dancing.',
    example: 'The song has a lively rhythm that makes people want to dance.',
  },
  {
    id: 'l23-touch-heart', lesson: 'Lesson 23', term: 'to touch someone’s heart', pronunciation: '/tʌtʃ ˈsʌm.wʌnz hɑːt/',
    meaning: 'chạm đến trái tim ai; làm ai xúc động sâu sắc', acceptedMeanings: ['làm ai cảm động', 'lay động lòng người'],
    definition: 'To affect someone emotionally in a deep way.',
    example: 'Her honest performance touched everyone’s heart.',
  },
  {
    id: 'l23-catchy-melody', lesson: 'Lesson 23', term: 'catchy melody', pronunciation: '/ˈkætʃ.i ˈmel.ə.di/',
    meaning: 'giai điệu bắt tai, dễ nhớ', acceptedMeanings: ['giai điệu dễ nhớ', 'giai điệu cuốn hút'],
    definition: 'A tune in a song that is attractive and easy to remember.',
    example: 'The advertisement uses a catchy melody that stays in your head.',
  },
  {
    id: 'l23-live-performance', lesson: 'Lesson 23', term: 'live performance', pronunciation: '/laɪv pəˈfɔː.məns/',
    meaning: 'buổi biểu diễn trực tiếp', acceptedMeanings: ['màn trình diễn trực tiếp'],
    definition: 'Music, theatre, dance, or another performance presented in front of an audience.',
    example: 'The band gave an energetic live performance at the festival.',
  },
  {
    id: 'l23-top-charts', lesson: 'Lesson 23', term: 'to top the charts', pronunciation: '/tɒp ðə tʃɑːts/',
    meaning: 'đứng đầu các bảng xếp hạng', acceptedMeanings: ['dẫn đầu bảng xếp hạng', 'xếp hạng nhất'],
    definition: 'To be the most popular and ranked number one on music lists.',
    example: 'The singer’s latest single topped the charts for three weeks.',
  },
  {
    id: 'l23-diverse-music-taste', lesson: 'Lesson 23', term: 'to have a diverse taste in music', pronunciation: '/hæv ə daɪˈvɜːs teɪst ɪn ˈmjuː.zɪk/',
    meaning: 'có gu âm nhạc đa dạng', acceptedMeanings: ['thích nhiều thể loại nhạc'],
    definition: 'To like many different types of music.',
    example: 'She has a diverse taste in music, from jazz to electronic dance music.',
  },

  {
    id: 'l25-keep-up-fashion', lesson: 'Lesson 25', term: 'to keep up with fashion / trends', pronunciation: '/kiːp ʌp wɪð ˈfæʃ.ən trendz/',
    meaning: 'theo kịp thời trang hoặc xu hướng', acceptedMeanings: ['cập nhật xu hướng thời trang', 'bắt kịp mốt'],
    definition: 'To stay aware of the latest trends and styles in clothing and accessories.',
    example: 'You do not need to buy new clothes every month to keep up with fashion.',
  },
  {
    id: 'l25-casual-wear', lesson: 'Lesson 25', term: 'casual wear', pronunciation: '/ˈkæʒ.u.əl weər/',
    meaning: 'trang phục thường ngày', acceptedMeanings: ['quần áo thường ngày', 'đồ mặc thoải mái'],
    definition: 'Comfortable, informal clothing suitable for everyday occasions.',
    example: 'Jeans and a T-shirt are acceptable casual wear in this office.',
  },
  {
    id: 'l25-trendy-clothes', lesson: 'Lesson 25', term: 'trendy clothes', pronunciation: '/ˈtren.di kləʊðz/',
    meaning: 'quần áo hợp thời trang', acceptedMeanings: ['quần áo hợp mốt', 'trang phục thời thượng'],
    definition: 'Clothing items that are currently fashionable or modern in style.',
    example: 'The shop sells trendy clothes at affordable prices.',
  },
  {
    id: 'l25-day-to-day-style', lesson: 'Lesson 25', term: 'day-to-day style / clothing', pronunciation: '/ˌdeɪ tə ˈdeɪ staɪl / ˈkləʊðɪŋ/',
    meaning: 'phong cách hoặc trang phục hằng ngày', acceptedMeanings: ['quần áo hằng ngày', 'phong cách thường ngày'],
    definition: 'The clothes people typically wear in everyday life rather than on special occasions.',
    example: 'Her day-to-day style is simple, practical, and comfortable.',
  },
  {
    id: 'l25-suit-somebody', lesson: 'Lesson 25', term: 'to suit somebody fine / well', pronunciation: '/suːt ˈsʌm.bə.di faɪn / wel/',
    meaning: 'rất hợp với ai; làm ai trông đẹp hơn', acceptedMeanings: ['hợp với ai', 'rất phù hợp với ai'],
    definition: 'To make somebody look more attractive.',
    example: 'That dark blue jacket suits you very well.',
  },
  {
    id: 'l25-fashion-sense', lesson: 'Lesson 25', term: 'to have a good sense of fashion', pronunciation: '/hæv ə ɡʊd sens əv ˈfæʃ.ən/',
    meaning: 'có gu thời trang tốt', acceptedMeanings: ['biết cách ăn mặc đẹp', 'có khiếu thời trang'],
    definition: 'To understand and apply fashion principles, trends, and personal style effectively.',
    example: 'Linh has a good sense of fashion and combines colours confidently.',
  },

  {
    id: 'l27-sedentary-lifestyle', lesson: 'Lesson 27 · Health', term: 'to lead a sedentary lifestyle', pronunciation: '/liːd ə ˈsed.ən.tər.i ˈlaɪf.staɪl/',
    meaning: 'có lối sống ít vận động', acceptedMeanings: ['sống ít vận động', 'có lối sống tĩnh tại'],
    definition: 'To live a life involving little physical activity.',
    example: 'Office workers may lead a sedentary lifestyle if they never exercise.',
  },
  {
    id: 'l27-under-weather', lesson: 'Lesson 27 · Health', term: 'under the weather', pronunciation: '/ˌʌn.də ðə ˈweð.ər/',
    meaning: 'cảm thấy không khỏe', acceptedMeanings: ['cảm thấy ốm', 'hơi mệt trong người'],
    definition: 'Feeling ill.',
    example: 'I am feeling under the weather, so I will rest at home today.',
  },
  {
    id: 'l27-aware-wellbeing', lesson: 'Lesson 27 · Health', term: 'be aware of one’s well-being', pronunciation: '/bi əˈweər əv wʌnz ˌwelˈbiː.ɪŋ/',
    meaning: 'nhận thức và quan tâm đến sức khỏe, hạnh phúc của mình', acceptedMeanings: ['quan tâm đến sức khỏe bản thân', 'ý thức về sức khỏe của mình'],
    definition: 'To know and care about one’s health and happiness.',
    example: 'Students should be aware of their well-being during stressful exam periods.',
  },
  {
    id: 'l27-hit-gym', lesson: 'Lesson 27 · Health', term: 'to hit the gym', pronunciation: '/hɪt ðə dʒɪm/',
    meaning: 'đi tập gym', acceptedMeanings: ['đến phòng tập', 'đi tập thể dục ở phòng gym'],
    definition: 'To go to the gym to work out.',
    example: 'I usually hit the gym after work on Mondays and Thursdays.',
  },
  {
    id: 'l27-boost-immune', lesson: 'Lesson 27 · Health', term: 'to boost one’s immune system', pronunciation: '/buːst wʌnz ɪˈmjuːn ˌsɪs.təm/',
    meaning: 'tăng cường hệ miễn dịch', acceptedMeanings: ['làm hệ miễn dịch mạnh hơn', 'nâng cao sức đề kháng'],
    definition: 'To make the body’s ability to fight disease stronger.',
    example: 'Regular sleep and a balanced diet can help boost your immune system.',
  },
  {
    id: 'l27-fight-off', lesson: 'Lesson 27 · Health', term: 'to fight off', pronunciation: '/faɪt ɒf/',
    meaning: 'chống lại hoặc đẩy lùi bệnh tật', acceptedMeanings: ['đẩy lùi bệnh', 'chống chọi với bệnh'],
    definition: 'To prevent oneself from getting a disease or to recover from it.',
    example: 'Her body fought off the infection without further treatment.',
  },

  {
    id: 'l27-culturally-diverse', lesson: 'Lesson 27 · Culture', term: 'culturally diverse', pronunciation: '/ˈkʌl.tʃər.əl.i daɪˈvɜːs/',
    meaning: 'đa dạng về văn hóa', acceptedMeanings: ['có nhiều nền văn hóa khác nhau', 'đa văn hóa'],
    definition: 'Having people from many different cultural backgrounds.',
    example: 'Toronto is a culturally diverse city with communities from around the world.',
  },
  {
    id: 'l27-preserve-values', lesson: 'Lesson 27 · Culture', term: 'to preserve traditional values', pronunciation: '/prɪˈzɜːv trəˈdɪʃ.ən.əl ˈvæl.juːz/',
    meaning: 'gìn giữ các giá trị truyền thống', acceptedMeanings: ['bảo tồn giá trị truyền thống'],
    definition: 'To protect and keep customs and beliefs from the past alive.',
    example: 'Local festivals help communities preserve traditional values.',
  },
  {
    id: 'l27-cultural-exchanges', lesson: 'Lesson 27 · Culture', term: 'to encourage cultural exchanges', pronunciation: '/ɪnˈkʌr.ɪdʒ ˈkʌl.tʃər.əl ɪksˈtʃeɪn.dʒɪz/',
    meaning: 'khuyến khích giao lưu văn hóa', acceptedMeanings: ['thúc đẩy trao đổi văn hóa'],
    definition: 'To promote interaction and understanding between different cultures.',
    example: 'Student programmes encourage cultural exchanges between partner universities.',
  },
  {
    id: 'l27-traditional-costume', lesson: 'Lesson 27 · Culture', term: 'traditional costume', pronunciation: '/trəˈdɪʃ.ən.əl ˈkɒs.tjuːm/',
    meaning: 'trang phục truyền thống', acceptedMeanings: ['quốc phục', 'quần áo truyền thống'],
    definition: 'Clothes that represent a country’s culture or history.',
    example: 'The áo dài is a well-known Vietnamese traditional costume.',
  },
  {
    id: 'l27-festive-atmosphere', lesson: 'Lesson 27 · Culture', term: 'festive atmosphere', pronunciation: '/ˈfes.tɪv ˈæt.mə.sfɪər/',
    meaning: 'không khí lễ hội vui tươi', acceptedMeanings: ['bầu không khí lễ hội', 'không khí ngày hội'],
    definition: 'A cheerful and joyful environment during a celebration.',
    example: 'Lanterns and music created a festive atmosphere in the old town.',
  },
  {
    id: 'l27-adapt-culture', lesson: 'Lesson 27 · Culture', term: 'to adapt to a new culture', pronunciation: '/əˈdæpt tə ə njuː ˈkʌl.tʃər/',
    meaning: 'thích nghi với một nền văn hóa mới', acceptedMeanings: ['hòa nhập với văn hóa mới'],
    definition: 'To change one’s behaviour or lifestyle to fit into another culture.',
    example: 'It took her several months to adapt to a new culture abroad.',
  },

  {
    id: 'l30-custom', lesson: 'Lesson 30', term: 'custom', pronunciation: '/ˈkʌs.təm/',
    meaning: 'phong tục; tập quán', acceptedMeanings: ['phong tục', 'tập quán'],
    definition: 'A traditional practice or way of behaving in a particular society.',
    example: 'Removing your shoes before entering a home is a common custom in many countries.',
  },
  {
    id: 'l30-culture-shock', lesson: 'Lesson 30', term: 'culture shock', pronunciation: '/ˈkʌl.tʃər ˌʃɒk/',
    meaning: 'sốc văn hóa', acceptedMeanings: ['cảm giác bối rối khi gặp văn hóa khác biệt'],
    definition: 'Confusion or surprise when experiencing a very different culture or way of life.',
    example: 'The different meal times caused some culture shock during his first week abroad.',
  },
  {
    id: 'l30-cultural-heritage', lesson: 'Lesson 30', term: 'cultural heritage', pronunciation: '/ˈkʌl.tʃər.əl ˈher.ɪ.tɪdʒ/',
    meaning: 'di sản văn hóa', acceptedMeanings: ['di sản về văn hóa'],
    definition: 'Traditions, monuments, and values passed down through generations.',
    example: 'The ancient buildings are an important part of the nation’s cultural heritage.',
  },
  {
    id: 'l30-foster-culture', lesson: 'Lesson 30', term: 'to foster a culture', pronunciation: '/tə ˈfɒs.tər ə ˈkʌl.tʃər/',
    meaning: 'nuôi dưỡng hoặc thúc đẩy một văn hóa', acceptedMeanings: ['xây dựng một văn hóa', 'khuyến khích một văn hóa'],
    definition: 'To encourage the development of certain beliefs or behaviours in a society or group.',
    example: 'The school aims to foster a culture of respect and cooperation.',
  },
  {
    id: 'l30-appreciate-diversity', lesson: 'Lesson 30', term: 'to appreciate cultural diversity', pronunciation: '/tə əˈpriː.ʃi.eɪt ˈkʌl.tʃər.əl daɪˈvɜː.sə.ti/',
    meaning: 'trân trọng sự đa dạng văn hóa', acceptedMeanings: ['đánh giá cao đa dạng văn hóa', 'tôn trọng khác biệt văn hóa'],
    definition: 'To recognize and value differences among various cultures.',
    example: 'Travelling can teach people to appreciate cultural diversity.',
  },
  {
    id: 'l30-passed-down', lesson: 'Lesson 30', term: 'be passed down from one generation to the next', pronunciation: '/biː pɑːst daʊn frɒm wʌn ˌdʒen.əˈreɪ.ʃən tə ðə nekst/',
    meaning: 'được truyền từ thế hệ này sang thế hệ khác', acceptedMeanings: ['được truyền qua các thế hệ', 'được truyền lại cho đời sau'],
    definition: 'To be transferred or handed on from parents to children over time.',
    example: 'This recipe has been passed down from one generation to the next.',
  },
]
