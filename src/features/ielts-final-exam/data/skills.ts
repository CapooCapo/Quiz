export const readingQuestionTypes = [
  { name: 'Note / table / sentence / summary completion', description: 'Điền từ vào ghi chú, bảng, câu hoặc đoạn tóm tắt.' },
  { name: 'Short answer questions', description: 'Trả lời bằng cụm từ hoặc số, trong giới hạn số từ cho trước.' },
  { name: 'Matching headings', description: 'Chọn tiêu đề phù hợp nhất cho từng đoạn văn.' },
  { name: 'True / False / Not Given', description: 'Xác định câu đúng, sai, hoặc bài đọc không đề cập.' },
  { name: 'Yes / No / Not Given', description: 'Xác định tác giả có đồng ý hay không với quan điểm đã nêu.' },
  { name: 'Matching information / features', description: 'Nối thông tin hoặc đặc điểm với đoạn văn tương ứng.' },
  { name: 'Multiple choice (một hoặc nhiều đáp án)', description: 'Chọn một hoặc nhiều phương án đúng.' },
]

export const readingStrategySteps = [
  'Đọc kỹ hướng dẫn và giới hạn số từ (word limit).',
  'Xác định loại thông tin và dạng từ (word form) cần điền.',
  'Xác định từ khóa và nghĩ tới từ đồng nghĩa hoặc cách diễn đạt khác.',
  'Scan bài đọc để tìm đoạn chứa từ khóa.',
  'Đọc kỹ đoạn văn đó để tìm đáp án chính xác.',
  'Kiểm tra ngữ pháp, chính tả và giới hạn số từ.',
  'Lặp lại bước 2–6 cho câu tiếp theo; nếu đoạn văn không khớp, chuyển ngay sang đoạn khác.',
]

export const listeningParts = [
  { part: 'Part 1', questions: 6, focus: 'Giao tiếp đời sống hằng ngày' },
  { part: 'Part 2', questions: 10, focus: 'Giao tiếp đời sống hằng ngày' },
  { part: 'Part 3', questions: 10, focus: 'Tình huống giáo dục, đào tạo học thuật' },
  { part: 'Part 4', questions: 10, focus: 'Tình huống giáo dục, đào tạo học thuật' },
]

export const listeningQuestionTypes = [
  'Hoàn thành câu (Sentence completion)',
  'Trả lời ngắn (Short answer)',
  'Hoàn thành ghi chú, biểu mẫu, bảng hoặc lưu đồ (Note / Form / Table / Flow-chart completion)',
  'Dán nhãn bản đồ hoặc sơ đồ (Map / Diagram labelling)',
  'Trắc nghiệm một đáp án (Multiple choice – single answer)',
  'Trắc nghiệm nhiều đáp án (Multiple choice – multiple answers)',
  'Nối thông tin (Matching)',
]

export const listeningMethodSteps = [
  'Đọc kỹ hướng dẫn và giới hạn số từ (word limit).',
  'Phân tích câu hỏi, gạch chân từ khóa và dự đoán loại thông tin cần điền.',
  'Dự đoán từ đồng nghĩa và cách diễn đạt tương đương (paraphrase).',
  'Nghe bắt từ khóa và các cụm paraphrase.',
  'Chốt đáp án sau khi người nói trình bày hết ý (tránh bẫy tự sửa thông tin).',
  'Kiểm tra lại chính tả, số ít/số nhiều và ngữ pháp.',
]

export const writingTask1Charts = [
  'Table (bảng số liệu)',
  'Line graph (biểu đồ đường)',
  'Bar chart (biểu đồ cột)',
  'Pie chart (biểu đồ tròn)',
  'Multiple charts – Static (một mốc thời gian) hoặc Dynamic (từ hai mốc thời gian trở lên)',
]

export const writingTask1Paragraphs = [
  { name: 'Introduction', hint: '1–2 câu, paraphrase đề bài.', field: 'introduction' as const },
  { name: 'Overview', hint: '1–2 câu, nêu ít nhất 2 đặc điểm nổi bật nhất. Tuyệt đối không đưa số liệu cụ thể.', field: 'overview' as const },
  { name: 'Body 1', hint: '3–4 câu, nhóm thông tin thứ nhất kèm số liệu dẫn chứng.', field: 'body1' as const },
  { name: 'Body 2', hint: '3–4 câu, nhóm thông tin thứ hai kèm số liệu dẫn chứng.', field: 'body2' as const },
]

export const essayTypes = [
  { name: 'Opinion', description: 'Đồng ý hoặc phản đối một nhận định, nêu rõ quan điểm xuyên suốt bài.' },
  { name: 'Discussion & Opinion', description: 'Thảo luận cả hai mặt của vấn đề, sau đó nêu quan điểm cá nhân.' },
  { name: 'Advantages & Disadvantages', description: 'Phân tích thuận lợi và bất lợi, kết luận theo đề bài.' },
]

export const essayBodyChain = ['Luận điểm chính', 'Sự thật (Facts)', 'Giải thích (Explanation)', 'Ví dụ (Example)', 'Kết quả / Hệ quả (Result)']

export const essayPrompts = [
  'Should governments invest more in public transport than in new roads?',
  'Some people believe that students should study only academic subjects, while others think practical skills are equally important. Discuss both views and give your own opinion.',
  'Working from home has both advantages and disadvantages. Discuss.',
]

export const speakingPart2Formula = [
  { letter: 'S', label: 'Setting', hint: 'Bối cảnh: khi nào, ở đâu.' },
  { letter: 'P', label: 'People', hint: 'Người liên quan: vai trò, mối quan hệ, tính cách.' },
  { letter: 'E', label: 'Experience / Events', hint: 'Diễn biến chính: mở đầu, cao trào, kết thúc.' },
  { letter: 'A', label: 'Activity / Feelings', hint: 'Hành động cụ thể và cảm xúc.' },
  { letter: 'K', label: 'Key takeaway', hint: 'Bài học rút ra hoặc lý do đáng nhớ.' },
]
