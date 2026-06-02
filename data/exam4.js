// Bộ đề trọng tâm - Khoa Học - Bài đọc số 04
const EXAM_4 = {
  id: "bai-doc-04",
  title: "Bài Đọc Số 04",
  subtitle: "Lớp 11 – Hoá hữu cơ – Tinh dầu",
  source: "Bộ Đề Trọng Tâm - Khoa Học",
  totalMarks: 7,
  timeLimit: 15, // minutes
  passage: `Tác dụng của nước hoa
• Giúp thư giãn và giảm căng thẳng: Mùi hương của nước hoa có thể kích thích các giác quan và giúp thư giãn tâm trí. Một số loại nước hoa có mùi hương dịu nhẹ, dễ chịu có thể giúp giảm căng thẳng và mệt mỏi.
• Tăng sự tự tin và quyến rũ: Mùi hương của nước hoa có thể giúp bạn cảm thấy tự tin và quyến rũ hơn. Khi sử dụng nước hoa, bạn sẽ cảm thấy mình nổi bật và thu hút hơn trong mắt người đối diện.
• Giúp tạo ấn tượng tốt với người đối diện: Mùi hương của nước hoa là một yếu tố quan trọng trong việc tạo ấn tượng ban đầu. Một mùi hương tinh tế và phù hợp sẽ giúp bạn tạo ấn tượng tốt với người đối diện.

Chiết xuất tinh dầu trong nước hoa
Tinh dầu là thành phần chính tạo nên mùi hương của nước hoa. Có nhiều phương pháp chiết xuất tinh dầu như:
• Chưng cất hơi nước: Đây là phương pháp được sử dụng phổ biến nhất để chiết xuất tinh dầu từ các nguyên liệu rắn như gỗ, rễ cây, vỏ cây. Nguyên liệu được đun sôi trong nước, hơi nước mang theo tinh dầu sẽ được dẫn qua ống ngưng tụ và thu hồi.
• Ép lạnh: Phương pháp này thường được sử dụng để chiết xuất tinh dầu từ các nguyên liệu mềm như hoa, trái cây. Nguyên liệu được ép lấy nước cốt, sau đó nước cốt được tách tinh dầu bằng cách lọc.
• Chiết xuất dung môi: Phương pháp này sử dụng dung môi hữu cơ để hoà tan tinh dầu. Dung môi sau đó được tách ra khỏi tinh dầu bằng cách chưng cất.

Tinh dầu hoa hồng là loại tinh dầu được chiết xuất từ cánh hoa hồng bằng phương pháp chưng cất hơi nước, khử carbon dioxide hoặc chiết xuất dung môi. Nhờ đó, sản phẩm nguyên chất này có được mùi hương nồng rất đặc trưng nhưng khi pha loãng thì lại cho ra mùi thơm rất nhẹ nhàng, dễ chịu.`,
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      text: "Dựa vào thông tin trong văn bản trên, cho biết nước hoa không có tác dụng nào sau đây?",
      options: [
        { label: "Giúp thư giãn và giảm căng thẳng.", value: "a" },
        { label: "Tăng sự tự tin và quyến rũ.", value: "b" },
        { label: "Giúp tạo ấn tượng tốt với người đối diện.", value: "c" },
        { label: "Giúp tăng sức đề kháng cho cơ thể.", value: "d" }
      ],
      correctAnswer: "d",
      explanation: "Theo văn bản, nước hoa không có tác dụng giúp tăng sức đề kháng cho cơ thể."
    },
    {
      id: 2,
      type: "fill-in",
      text: "Dựa vào thông tin trong văn bản, điền cụm từ thích hợp vào chỗ trống?\nCó nhiều phương pháp chiết xuất tinh dầu như chưng cất hơi nước, ép lạnh và __________.",
      correctAnswer: "chiết xuất dung môi",
      explanation: "Phương pháp chiết xuất dung môi."
    },
    {
      id: 3,
      type: "fill-in",
      text: "Phương pháp được sử dụng phổ biến nhất để chiết xuất tinh dầu từ các nguyên liệu rắn như gỗ, rễ cây, vỏ cây là __________.",
      correctAnswer: "chưng cất hơi nước",
      explanation: "Phương pháp chưng cất hơi nước."
    },
    {
      id: 4,
      type: "multiple-choice",
      text: "Geraniol trong tinh dầu hoa hồng có số nguyên tử carbon là",
      options: [
        { label: "10.", value: "a" },
        { label: "11.", value: "b" },
        { label: "9.", value: "c" },
        { label: "8.", value: "d" }
      ],
      correctAnswer: "a",
      explanation: "10."
    },
    {
      id: 5,
      type: "multiple-choice",
      text: "Geraniol không tác dụng với",
      options: [
        { label: "kim loại Na.", value: "a" },
        { label: "dung dịch Br2.", value: "b" },
        { label: "dung dịch NaOH.", value: "c" },
        { label: "dung dịch KMnO4.", value: "d" }
      ],
      correctAnswer: "c",
      explanation: "dung dịch NaOH."
    },
    {
      id: 6,
      type: "multiple-choice",
      text: "Phát biểu nào sau đây về geraniol là sai?",
      options: [
        { label: "Geraniol tồn tại dưới dạng đồng phân trans.", value: "a" },
        { label: "Geraniol có hai liên kết đôi C=C trong phân tử.", value: "b" },
        { label: "Geraniol có mùi thơm của hoa hồng do nó là một este.", value: "c" },
        { label: "Geraniol thuộc loại ancol không no.", value: "d" }
      ],
      correctAnswer: "c",
      explanation: "Geraniol có mùi thơm của hoa hồng do nó là một este là sai (geraniol là ancol)."
    },
    {
      id: 7,
      type: "fill-in",
      text: "Khi các hợp chất hữu cơ bị oxi hoá bởi dung dịch KMnO4 trong môi trường acid H2SO4, thu được các sản phẩm như K2SO4, MnSO4, H2O và chất hữu cơ bị oxi hoá theo sơ đồ. Khi hợp chất hữu cơ là geraniol, theo sơ đồ trên geraniol bị oxi hoá thành các chất có khối lượng mol (g/mol) lớn dần tương ứng là ________, ________, ________. Điền 3 số phù hợp (ví dụ: 44; 58; 116).",
      correctAnswer: "44; 58; 116",
      explanation: "Các chất tương ứng có khối lượng mol 44, 58 và 116."
    }
  ]
};

if (typeof EXAMS !== 'undefined') {
  EXAMS.push(EXAM_4);
}
