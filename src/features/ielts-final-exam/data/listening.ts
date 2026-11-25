export type ListeningType = { name: string; description: string }

// The seven Listening question types. The product has no audio, so this page only describes the formats.
export const listeningTypes: ListeningType[] = [
  { name: 'Hoàn thành câu (Sentence completion)', description: 'Điền một từ hoặc số vào chỗ trống trong câu.' },
  { name: 'Trả lời ngắn (Short answer)', description: 'Trả lời câu hỏi bằng một cụm ngắn, không vượt quá số từ quy định.' },
  { name: 'Hoàn thành ghi chú / biểu mẫu / bảng / lưu đồ (Note, form, table, flow-chart completion)', description: 'Điền thông tin còn thiếu vào ghi chú, biểu mẫu, bảng hoặc sơ đồ quy trình.' },
  { name: 'Dán nhãn bản đồ / sơ đồ (Map or diagram labelling)', description: 'Ghi chữ cái đúng vào vị trí tương ứng trên bản đồ hoặc sơ đồ.' },
  { name: 'Trắc nghiệm một đáp án (Multiple choice – single answer)', description: 'Chọn một phương án đúng trong các lựa chọn.' },
  { name: 'Trắc nghiệm nhiều đáp án (Multiple choice – multiple answers)', description: 'Chọn đúng hai hoặc nhiều phương án theo yêu cầu của đề.' },
  { name: 'Nối thông tin (Matching)', description: 'Nối mỗi người nói hoặc mỗi mục với một lựa chọn trong danh sách.' },
]
