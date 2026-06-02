// Bộ đề trọng tâm - Khoa Học - Bài đọc số 01
const EXAM_1 = {
  id: "bai-doc-01",
  title: "Bài Đọc Số 01",
  subtitle: "Lớp 11 – Hoá hữu cơ – Hydrocarbon",
  source: "Bộ Đề Trọng Tâm - Khoa Học",
  totalMarks: 6,
  timeLimit: 15, // minutes
  passage: `Chỉ số octan là đại lượng tiêu chuẩn đặc trưng cho tính chống kích nổ của nhiên liệu (khả năng chịu nén). Giá trị octan càng cao thì tính chống kích nổ của nhiên liệu trước khi phát nổ (đốt cháy) càng lớn. Thực tế, nhiên liệu có chỉ số octan cao thường được sử dụng trong động cơ xăng hiệu suất cao vì đòi hỏi tỉ số nén lớn. Ngược lại, nhiên liệu có giá trị octan thấp hơn (với chỉ số cetane - khả năng tự bốc cháy cao hơn) phù hợp với động cơ diesel. Việc sử dụng loại xăng có chỉ số octan thấp hơn đối với động cơ xe trong thời gian dài có thể ảnh hưởng rất xấu đến tình trạng xe như: phá huỷ động cơ xe, khiến xe vận hành kém hơn, có thể dẫn tới việc cháy nổ, làm quá nhiệt gây hỏng động cơ của xe.

Quá trình reforming xúc tác được áp dụng trong công nghiệp để nâng cấp phân đoạn naphtha có trị số octan thấp thành sản phẩm có trị số octan cao, đồng thời là quá trình chủ yếu sản xuất hydrocarbon thơm có độ tinh khiết cao.

Vì mục đích sản xuất, một hộ gia đình dùng máy phát điện công suất 2 kW chạy bằng loại xăng A92. Giả sử xăng chỉ chứa 4 chất với thành phần số mol như sau:`,
  table: {
    headers: ["Chất", "C₇H₁₆", "C₈H₁₈", "C₉H₂₀", "C₁₀H₂₂"],
    rows: [
      ["Phần trăm số mol (%)", "4", "60", "32", "4"]
    ]
  },
  passageAfterTable: `Trong một ngày gia đình cần chạy máy phát 4 giờ. Biết lượng tiêu hao xăng trung bình là 680 g/kWh, khối lượng riêng của xăng 800 gam/lít. Giả định quá trình đốt nhiên liệu là oxi hoá hoàn toàn.`,
  questions: [
    {
      id: 1,
      type: "true-false",
      text: "Các phát biểu sau đây đúng hay sai?",
      // Mỗi phát biểu con cần tích Đúng hoặc Sai.
      // Phải đúng TẤT CẢ mới được điểm.
      statements: [
        {
          text: "Tính chống kích nổ của xăng A92 kém hơn xăng A95.",
          answer: true // Đúng
        }
      ],
      explanation: "Xăng A92 có chỉ số octan là 92, thấp hơn xăng A95 (chỉ số octan 95). Giá trị octan càng cao thì tính chống kích nổ càng lớn, do đó xăng A92 có tính chống kích nổ kém hơn xăng A95."
    },
    {
      id: 2,
      type: "multiple-choice",
      text: "Phát biểu nào sau đây đúng?",
      options: [
        { label: "Động cơ xăng thường sử dụng nhiên liệu có chỉ số octan thấp.", value: "a" },
        { label: "Giá trị octan càng cao thì khả năng chịu nén của nhiên liệu trước khi phát nổ càng lớn.", value: "b" },
        { label: "Quá trình reforming xúc tác làm giảm chỉ số octan.", value: "c" },
        { label: "Nhiên liệu có giá trị octan thấp hơn (với chỉ số cetane - khả năng tự bốc cháy cao hơn) phù hợp với động cơ diesel.", value: "d" }
      ],
      correctAnswer: "b",
      explanation: "Theo đoạn văn: \"Giá trị octan càng cao thì tính chống kích nổ của nhiên liệu trước khi phát nổ (đốt cháy) càng lớn.\" Tính chống kích nổ chính là khả năng chịu nén."
    },
    {
      id: 3,
      type: "true-false",
      text: "Các phát biểu sau đây đúng hay sai?",
      statements: [
        {
          text: "Nếu sử dụng loại xăng có chỉ số octan thấp hơn đối với dòng xe trong thời gian dài có thể ảnh hưởng rất xấu đến tình trạng xe.",
          answer: true // Đúng
        }
      ],
      explanation: "Theo đoạn văn: \"Việc sử dụng loại xăng có chỉ số octan thấp hơn đối với động cơ xe trong thời gian dài có thể ảnh hưởng rất xấu đến tình trạng xe.\""
    },
    {
      id: 4,
      type: "multiple-choice",
      text: "Một bóng điện có công suất 100 W. Lượng điện tiêu thụ của bóng điện trên trong vòng 2 giờ là",
      options: [
        { label: "100 Wh.", value: "a" },
        { label: "50 Wh.", value: "b" },
        { label: "200 Wh.", value: "c" },
        { label: "50 Wh.", value: "d" }
      ],
      correctAnswer: "c",
      explanation: "Điện năng tiêu thụ = Công suất × Thời gian = 100 W × 2 h = 200 Wh."
    },
    {
      id: 5,
      type: "fill-in",
      text: "Điền số thích hợp vào chỗ trống.\nTrong 30 ngày máy phát điện của hộ gia đình trên tiêu tốn ______ lít xăng.",
      correctAnswer: "204",
      explanation: "Lượng xăng tiêu thụ trong 1 ngày = 2 kW × 4 h × 680 g/kWh = 5440 g.\nTrong 30 ngày: 5440 × 30 = 163200 g.\nĐổi sang lít: 163200 / 800 = 204 lít."
    },
    {
      id: 6,
      type: "multiple-choice",
      text: "Trong một ngày, máy phát điện thải ra ngoài môi trường thể tích CO₂ lít (đkc) là",
      options: [
        { label: "9471.", value: "a" },
        { label: "13927.", value: "b" },
        { label: "1132.", value: "c" },
        { label: "2018.", value: "d" }
      ],
      correctAnswer: "a",
      explanation: "Khối lượng mol trung bình M = 0.04×100 + 0.60×114 + 0.32×128 + 0.04×142 = 118.08 g/mol.\nSố mol xăng = 5440 / 118.08 ≈ 46.07 mol.\nSố mol C trung bình = 0.04×7 + 0.60×8 + 0.32×9 + 0.04×10 = 8.36.\nSố mol CO₂ = 46.07 × 8.36 ≈ 385.15 mol.\nV(CO₂) = 385.15 × 24.79 ≈ 9471 lít (đkc)."
    }
  ]
};

// Registry tất cả bộ đề
const EXAMS = [EXAM_1];
