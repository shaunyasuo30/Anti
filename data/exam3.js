// Bộ đề trọng tâm - Khoa Học - Bài đọc số 03
const EXAM_3 = {
  id: "bai-doc-03",
  title: "Bài Đọc Số 03",
  subtitle: "Lớp 11 – Hoá hữu cơ – Hydrocarbon",
  source: "Bộ Đề Trọng Tâm - Khoa Học",
  totalMarks: 6,
  timeLimit: 15, // minutes
  passage: `Sử dụng thông tin trong văn bản sau để trả lời các câu hỏi từ số 1 đến số 6
Cho hai bảng số liệu sau:
Bảng 1: Tên gọi và một số tính chất vật lí của một số alkane
Bảng 2: Một số tính chất vật lí của một số alkene`,
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      text: "Chất CH₃CH₂CH₃ có tên là",
      options: [
        { label: "Methane.", value: "a" },
        { label: "Ethane.", value: "b" },
        { label: "Propane.", value: "c" },
        { label: "Butane.", value: "d" }
      ],
      correctAnswer: "c",
      explanation: "Propane có công thức C₃H₈, cấu tạo là CH₃CH₂CH₃."
    },
    {
      id: 2,
      type: "true-false",
      text: "Phát biểu sau đây đúng hay sai?",
      statements: [
        {
          text: "Trong bảng 1, khi số nguyên tử carbon tăng, nhiệt độ sôi và khối lượng riêng của alkane tăng theo.",
          answer: true
        }
      ],
      explanation: "Đúng."
    },
    {
      id: 3,
      type: "multiple-choice",
      text: "Trong bảng 2, but-1-en có nhiệt độ nóng chảy là",
      options: [
        { label: "-102°.", value: "a" },
        { label: "-185°.", value: "b" },
        { label: "-186°.", value: "c" },
        { label: "-138,3°.", value: "d" }
      ],
      correctAnswer: "b",
      explanation: "-185°."
    },
    {
      id: 4,
      type: "multiple-choice",
      text: "Chọn phát biểu đúng?",
      options: [
        { label: "Khi số nguyên tử carbon tăng, nhiệt độ nóng chảy của alkene đều tăng.", value: "a" },
        { label: "Nhiệt độ sôi của alkene thấp hơn alkane khi so sánh cùng số nguyên tử carbon.", value: "b" },
        { label: "Khi số nguyên tử carbon tăng, nhiệt độ sôi của alkene giảm.", value: "c" },
        { label: "Phân tử C₁₀H₂₂ mạch không phân nhánh có tên là nonane.", value: "d" }
      ],
      correctAnswer: "b",
      explanation: "Nhiệt độ sôi của alkene thấp hơn alkane khi so sánh cùng số nguyên tử carbon."
    },
    {
      id: 5,
      type: "true-false",
      text: "Chọn đúng hoặc sai cho mỗi phát biểu sau:",
      statements: [
        { text: "Tất cả các alkane, alkene trong hai bảng trên đều có khối lượng riêng nhẹ hơn nước.", answer: true },
        { text: "Các alkane, alkene hầu như không tan trong nước do chúng kém phân cực.", answer: true },
        { text: "Khối lượng riêng của pentane ở 25°C là 0,63 g/cm³.", answer: true },
        { text: "Propane là thành phần chủ yếu của khí thiên nhiên.", answer: false },
        { text: "Ở điều kiện thường các chất methane, ethane, propane, butane ở thể khí.", answer: true }
      ],
      explanation: "Đúng - Đúng - Đúng - Sai - Đúng"
    },
    {
      id: 6,
      type: "multiple-choice",
      text: "Kéo và thả các cụm từ thích hợp vào mỗi chỗ trống?Phân tử alkene có chứa một liên kết ___(a)___ và các liên kết ___(b)___. Khi số nguyên tử carbon trong alkene tăng thì nhiệt độ sôi ___(c)___, do có sự tăng về ___(d)___ và sự tương tác van der Waals. Thêm hex-1-ene vào mỗi ống nghiệm chứa nước hoặc chloroform (CHCl3), hiện tượng ở ống chứa nước là ___(e)___, còn ở ống chứa chloroform là thu được dung dịch ___(g)___.",
      options: [
        { label: "a - π (pi); b - σ (xích ma); c - tăng dần; d - khối lượng phân tử; e - phân lớp; g - đồng nhất", value: "a" },
        { label: "a - σ (xích ma); b - π (pi); c - tăng dần; d - khối lượng phân tử; e - phân lớp; g - đồng nhất", value: "b" },
        { label: "a - π (pi); b - σ (xích ma); c - giảm dần; d - khối lượng phân tử; e - phân lớp; g - đồng nhất", value: "c" },
        { label: "a - π (pi); b - σ (xích ma); c - tăng dần; d - số lượng nguyên tử; e - phân lớp; g - đồng nhất", value: "d" }
      ],
      correctAnswer: "a",
      explanation: "a - π (pi); b - σ (xích ma); c - tăng dần; d - khối lượng phân tử; e - phân lớp; g - đồng nhất"
    }
  ]
};

if (typeof EXAMS !== 'undefined') {
  EXAMS.push(EXAM_3);
}
