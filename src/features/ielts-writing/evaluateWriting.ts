export type WritingDraft = { introduction:string; overview:string; body1:string; body2:string }
export type CriterionFeedback = { title:string; level:'Needs attention'|'Developing'|'Promising'; explanationVi:string; suggestion:string }
export type WritingFeedback = { criteria:CriterionFeedback[]; corrections:{before:string;after:string;reasonVi:string}[]; vocabularySuggestions:string[]; improvedVersion:WritingDraft; wordCount:number }

const wordCount=(text:string)=>text.trim()?text.trim().split(/\s+/).length:0
export function evaluateWriting(draft:WritingDraft):WritingFeedback {
 const text=Object.values(draft).join(' ').trim(), lower=text.toLowerCase(), words=wordCount(text)
 const criteria:CriterionFeedback[]=[
  {title:'Task Achievement',level:draft.overview.trim()&&draft.body1.trim()&&draft.body2.trim()?'Developing':'Needs attention',explanationVi:'Đây là rà soát cấu trúc cục bộ, không phải điểm IELTS. Overview nên nêu xu hướng chính; thân bài cần chọn và so sánh số liệu chính xác.',suggestion:'Kiểm tra đủ overview và hai đoạn thân bài; đối chiếu từng con số với biểu đồ.'},
  {title:'Coherence and Cohesion',level:/\b(overall|whereas|while|however|by contrast|respectively)\b/i.test(text)?'Developing':'Needs attention',explanationVi:'Công cụ chỉ dò một số từ nối và sự hiện diện của bốn đoạn; chưa đánh giá logic liên kết thực sự.',suggestion:'Mỗi đoạn nên có trọng tâm rõ; dùng từ nối khi quan hệ ý nghĩa cần thiết.'},
  {title:'Lexical Resource',level:/\b(increased|rose|fell|declined|fluctuated|remained|peaked|recovered)\b/i.test(text)?'Developing':'Needs attention',explanationVi:'Rà soát từ vựng dựa trên sự xuất hiện của một số động từ xu hướng; không đánh giá độ chính xác toàn diện hay mức band.',suggestion:'Chọn động từ phù hợp với hướng và mức độ biến động; tránh lặp từ không cần thiết.'},
  {title:'Grammatical Range and Accuracy',level:/[.!?][\s\S]+[.!?]/.test(text)&&words>45?'Developing':'Needs attention',explanationVi:'Kiểm tra hình thức rất cơ bản; không phân tích cú pháp như giám khảo hay mô hình ngôn ngữ.',suggestion:'Rà lại chia động từ, mạo từ, giới từ và dấu câu; kết hợp câu đơn và câu phức chính xác.'},
 ]
 const corrections:{before:string;after:string;reasonVi:string}[]=[]
 if(/peaked\s+to\s+/i.test(text))corrections.push({before:'peaked to',after:'peaked at',reasonVi:'Dùng “peak at” trước giá trị; dùng “peak in” trước năm.'})
 if(/between\s+[^.!?]+?\s+to\s+/i.test(text))corrections.push({before:'between … to …',after:'between … and …',reasonVi:'Cấu trúc cặp là “between A and B”; hoặc dùng “from A to B”.'})
 if(/increased\s+by\s+\d+(?:\.\d+)?%/i.test(text))corrections.push({before:'increased by …% (for a difference between percentage values)',after:'increased by … percentage points',reasonVi:'Nếu đang nêu hiệu số tuyệt đối giữa hai tỷ lệ %, đơn vị là percentage points.'})
 const vocabularySuggestions=['rose / increased / climbed (upward movement)','fell / declined / dropped (downward movement)','remained stable / levelled off (little change)','fluctuated between A and B (movement within a range)'].filter(item=>!lower.includes(item.split(' / ')[0].split(' (')[0]))
 const improvedVersion={
  introduction:draft.introduction.replace(/\bpeaked to\b/gi,'peaked at').replace(/\bbetween ([^.!?]+?) to ([^.!?]+)/gi,'between $1 and $2'),
  overview:draft.overview.replace(/\bpeaked to\b/gi,'peaked at').replace(/\bbetween ([^.!?]+?) to ([^.!?]+)/gi,'between $1 and $2'),
  body1:draft.body1.replace(/\bpeaked to\b/gi,'peaked at').replace(/\bbetween ([^.!?]+?) to ([^.!?]+)/gi,'between $1 and $2'),
  body2:draft.body2.replace(/\bpeaked to\b/gi,'peaked at').replace(/\bbetween ([^.!?]+?) to ([^.!?]+)/gi,'between $1 and $2'),
 }
 return {criteria,corrections,vocabularySuggestions,improvedVersion,wordCount:words}
}
