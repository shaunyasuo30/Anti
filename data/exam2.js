// Bộ đề trọng tâm - Khoa Học - Bài đọc số 02
const EXAM_2 = {
  id: "bai-doc-02",
  title: "Bài Đọc Số 02",
  subtitle: "Lớp 11 – Hoá hữu cơ – Đại cương hydrocarbon",
  source: "Bộ Đề Trọng Tâm - Khoa Học",
  totalMarks: 8,
  timeLimit: 15, // minutes
  passage: `Cho mô hình các phân tử sau:<br><br>
<div style="text-align:center;">
  <img src="images/image1.png" style="max-width:100%; border-radius:8px; margin-bottom:10px;" alt="Mô hình phân tử">
  <img src="images/image2.png" style="max-width:100%; border-radius:8px; margin-bottom:10px;" alt="Mô hình phân tử">
</div>
<br>
Các hình cầu màu đen (hình cầu tại điểm gấp khúc) là nguyên tử carbon; còn lại là các nguyên tử hydrogen. Mỗi nguyên tử carbon đều ở trạng thái lai hoá sp³, bốn orbital lai hoá hướng về 4 đỉnh của một tứ diện. Bốn orbital lai hoá tham gia xen phủ với các orbital của nguyên tử hydrogen hoặc carbon bên cạnh, tạo ra các liên kết xích ma (σ). Các liên kết này khá bền, khó bị phá vỡ bởi acid, base và muối.`,
  questions: [
    {
      id: 1,
      type: "true-false",
      text: "Phát biểu sau đây đúng hay sai?\nPhân tử CH₄ có cấu trúc hình tứ diện đều.",
      statements: [
        {
          text: "Phân tử CH₄ có cấu trúc hình tứ diện đều.",
          answer: true // Đúng
        }
      ],
      explanation: "Đúng. Nguyên tử carbon lai hoá sp³, tạo 4 liên kết σ với H hướng về 4 đỉnh của hình tứ diện đều."
    },
    {
      id: 2,
      type: "fill-in",
      text: "Điền từ thích hợp vào chỗ trống.\nHai chất (III), (IV) được gọi là __________ của nhau.",
      correctAnswer: "đồng phân",
      explanation: "Chúng có cùng công thức phân tử C₅H₁₂ nhưng khác nhau về cấu tạo mạch carbon (III mạch không nhánh, IV mạch có nhánh)."
    },
    {
      id: 3,
      type: "multiple-choice",
      text: "Phân tử (II) có số liên kết xích ma (σ) là",
      options: [
        { label: "6.", value: "a" },
        { label: "7.", value: "b" },
        { label: "8.", value: "c" },
        { label: "1.", value: "d" }
      ],
      correctAnswer: "b",
      explanation: "Phân tử (II) là C₂H₆ (ethane). Số liên kết σ = 1 (C-C) + 6 (C-H) = 7 liên kết."
    },
    {
      id: 4,
      type: "true-false",
      text: "Phát biểu sau đây đúng hay sai?\nPhân tử (III) có 4 nguyên tử carbon đều thuộc cùng một mặt phẳng.",
      statements: [
        {
          text: "Phân tử (III) có 4 nguyên tử carbon đều thuộc cùng một mặt phẳng.",
          answer: false // Sai
        }
      ],
      explanation: "Sai. Do lai hoá sp³ (tứ diện), mạch carbon không nằm trên cùng một mặt phẳng mà là đường gấp khúc trong không gian."
    },
    {
      id: 5,
      type: "multiple-choice",
      text: "Bốn chất (I), (II), (III), (IV) thuộc cùng dãy đồng đẳng có tên là",
      options: [
        { label: "alkane.", value: "a" },
        { label: "alkene.", value: "b" },
        { label: "alkyne.", value: "c" },
        { label: "alkadien.", value: "d" }
      ],
      correctAnswer: "a",
      explanation: "Tất cả các chất đều có liên kết đơn (no), mạch hở nên thuộc dãy đồng đẳng alkane."
    },
    {
      id: 6,
      type: "multiple-choice",
      text: `Ghép các cụm từ thích hợp ở cột B sang cột A cho phù hợp:
Cột A:
(a) Chất (IV) có mạch carbon ___
(b) Chất (II) có độ dài liên kết C-C là ___
(c) Chất (I) có góc liên kết HCH là ___
(d) Chất (III) có số liên kết C-H là ___

Cột B: (1) 109,5° ; (2) phân nhánh ; (3) 153 pm ; (4) 10 ; (5) 6 ; (6) 111°`,
      options: [
        { label: "a - phân nhánh; b - 153 pm; c - 109,5°; d - 10", value: "a" },
        { label: "a - không phân nhánh; b - 153 pm; c - 109,5°; d - 10", value: "b" },
        { label: "a - phân nhánh; b - 109,5°; c - 153 pm; d - 10", value: "c" },
        { label: "a - phân nhánh; b - 153 pm; c - 111°; d - 6", value: "d" }
      ],
      correctAnswer: "a",
      explanation: "Chất (IV) isopentane mạch phân nhánh; (II) ethane có lk C-C là 153 pm; (I) methane có góc 109,5°; (III) butane có 10 lk C-H."
    },
    {
      id: 7,
      type: "multiple-choice",
      text: "Khi phân tử (IV) tham gia phản ứng halogen hoá với phân tử chlorine thì thu được tối đa số dẫn xuất chứa 2 nguyên tử chlorine là",
      options: [
        { label: "4.", value: "a" },
        { label: "5.", value: "b" },
        { label: "3.", value: "c" },
        { label: "2.", value: "d" }
      ],
      correctAnswer: "c",
      explanation: "Có 3 đồng phân dichlorine (dẫn xuất thế 2 chlorine) tối đa."
    },
    {
      id: 8,
      type: "true-false",
      text: "Lựa chọn phương án đúng/sai:",
      statements: [
        {
          text: "Ở điều kiện thường, bốn chất trên đều không tác dụng với acid, base và các chất oxi hoá như KMnO₄, K₂Cr₂O₇...",
          answer: true
        },
        {
          text: "Trong dãy đồng đẳng của methane, từ C₄H₁₀ trở đi có đồng phân cấu tạo.",
          answer: true
        },
        {
          text: "Phân tử (III), (IV) thì độ dài liên kết C-C lớn hơn C-H.",
          answer: true
        },
        {
          text: "Đốt cháy hoàn toàn cùng một khối lượng hai chất (II), (III) thì chất cho số mol CO₂ nhiều hơn là chất (II).",
          answer: false
        },
        {
          text: "Chất (IV) có tên là 2-methyl butane.",
          answer: false
        }
      ],
      explanation: "Đúng - Đúng - Đúng - Sai - Sai"
    }
  ]
};

if (typeof EXAMS !== 'undefined') {
  EXAMS.push(EXAM_2);
}
