// Bộ đề trọng tâm - Khoa Học - Bài đọc số 05
const EXAM_5 = {
  id: "bai-doc-05",
  title: "Bài Đọc Số 05",
  subtitle: "Lớp 12 – Hoá hữu cơ – Chất béo",
  source: "Bộ Đề Trọng Tâm - Khoa Học",
  totalMarks: 8,
  timeLimit: 15, // minutes
  passage: `Chất béo là triester của glycerol và acid béo. Chất béo có tính chất nhẹ hơn nước. Chất béo tan trong dung môi hữu cơ như benzene, nước xà phòng nhưng không tan trong nước. Chúng tồn tại trạng thái rắn hoặc lỏng ở điều kiện nhiệt độ thường. Trong đó:
• Chất béo rắn có các gốc hydrocarbon no hay gốc acid béo no. Ví dụ: (C17H35COO)3C3H5
• Chất béo lỏng có gốc hydrocarbon không no hoặc gốc acid béo không no. Ví dụ: (C17H33COO)3C3H5
Chất béo có thể tồn tại ở trạng thái rắn hoặc lỏng

Trong một số trường hợp, chất béo dư thừa có thể ảnh hưởng nghiêm trọng tới sức khoẻ. Tuy nhiên, đây là chất có vai trò quan trọng và không thể thiếu đối với cơ thể con người. Bao gồm:
• Chất béo là thành phần của cấu trúc và màng tế bào, giúp duy trì ổn định hoạt động cũng như tính toàn vẹn của tế bào.
• Chất béo giúp bảo vệ cơ quan nội tạng khỏi tổn thương và những va đập bên ngoài.
• Tính năng cách nhiệt, cách âm giúp giảm thiểu tối đa sự mất nhiệt của cơ thể ra ngoài.
• Cung cấp nguồn năng lượng ATP cần thiết cho hoạt động sống của cơ thể.

Dầu mỡ để lâu ngày sẽ có mùi khét và khó chịu, đó là sự ôi mỡ. Có nhiều nguyên nhân gây ôi mỡ, nhưng chủ yếu nhất là do oxi không khí cộng vào nối đôi ở gốc acid không no tạo ra peroxide, chất này bị phân huỷ thành các aldehyde có mùi khó chịu.`,
  questions: [
    {
      id: 1,
      type: "fill-in",
      text: "Điền từ hoặc cụm từ thích hợp vào chỗ trống.\nChất béo là triester của glycerol và __________.",
      correctAnswer: "acid béo",
      explanation: "Chất béo là triester của glycerol và acid béo."
    },
    {
      id: 2,
      type: "multiple-choice",
      text: "Trong đoạn thông tin của văn bản trên, chất béo không có vai trò nào sau đây?",
      options: [
        { label: "Chất béo là thành phần của cấu trúc và màng tế bào, giúp duy trì ổn định hoạt động cũng như tính toàn vẹn của tế bào.", value: "a" },
        { label: "Chất béo giúp bảo vệ cơ quan nội tạng khỏi tổn thương và những va đập bên ngoài.", value: "b" },
        { label: "Tính năng cách nhiệt, cách âm giúp giảm thiểu tối đa sự mất nhiệt của cơ thể ra ngoài.", value: "c" },
        { label: "Chất béo cung cấp chất dinh dưỡng và khí oxygen cho cơ thể.", value: "d" }
      ],
      correctAnswer: "d",
      explanation: "Chất béo cung cấp chất dinh dưỡng và khí oxygen cho cơ thể là sai."
    },
    {
      id: 3,
      type: "true-false",
      text: "Phát biểu sau đây đúng hay sai?",
      statements: [
        { text: "Dầu mỡ để lâu ngày sẽ có mùi khét và khó chịu, đó là sự ôi mỡ. Nguyên nhân chủ yếu nhất là do oxi không khí cộng vào nối đôi ở gốc axit không no tạo ra peroxide.", answer: true }
      ],
      explanation: "Đúng."
    },
    {
      id: 4,
      type: "multiple-choice",
      text: "Tiến hành 2 thí nghiệm sau\nThí nghiệm 1: Cho vài giọt dầu ăn vào ống nghiệm chứa benzene.\nThí nghiệm 2: Cho vài giọt dầu ăn vào ống nghiệm chứa dung dịch muối ăn.\nHiện tượng quan sát ở 2 thí nghiệm trên là",
      options: [
        { label: "Cả hai thí nghiệm đều phân lớp.", value: "a" },
        { label: "Cả hai thí nghiệm đều thu được dung dịch đồng nhất.", value: "b" },
        { label: "Thí nghiệm 1, thu được dung dịch đồng nhất. Thí nghiệm 2, chất lỏng phân thành 2 lớp.", value: "c" },
        { label: "Thí nghiệm 1, chất lỏng phân thành 2 lớp. Thí nghiệm 2, thu được dung dịch đồng nhất.", value: "d" }
      ],
      correctAnswer: "c",
      explanation: "Dầu ăn tan trong benzene và không tan trong dung dịch muối ăn."
    },
    {
      id: 5,
      type: "multiple-choice",
      text: "Bơ thực vật là một thuật ngữ chỉ chung về các loại bơ có nguồn gốc từ thực vật và là loại bơ được chế biến từ dầu thực vật. Em hãy nêu phương pháp chế biến bơ từ dầu thực vật.",
      options: [
        { label: "Hydrogen hoá acid béo.", value: "a" },
        { label: "Hydrogen hoá dầu thực vật.", value: "b" },
        { label: "Đề hydrogen hoá dầu thực vật.", value: "c" },
        { label: "Xà phòng hoá dầu thực vật.", value: "d" }
      ],
      correctAnswer: "b",
      explanation: "Hydrogen hoá dầu thực vật (biến chất béo lỏng thành rắn)."
    },
    {
      id: 6,
      type: "multiple-choice",
      text: "Khi cho chất béo vào nước, khuấy mạnh rồi dùng máy đo pH để thử thì thấy giá trị pH nhỏ hơn 7. Cách giải thích nào sau đây là đúng?",
      options: [
        { label: "Trong chất béo có sẵn một lượng nhỏ acid béo tự do.", value: "a" },
        { label: "Chất béo bị thuỷ phân bởi nước tạo ra acid béo tự do.", value: "b" },
        { label: "Trong chất béo có glycerol gây ra tính acid.", value: "c" },
        { label: "Khi khuấy mạnh, phân tử chất béo bị bẻ gãy, sinh ra acid béo.", value: "d" }
      ],
      correctAnswer: "a",
      explanation: "Trong chất béo có sẵn một lượng nhỏ acid béo tự do."
    },
    {
      id: 7,
      type: "multiple-choice",
      text: "Cho các phát biểu sau:\n(a) Chất béo thuộc loại hợp chất ester.\n(b) Chất béo không tan trong nước do chúng nhẹ hơn nước.\n(c) Chất béo rắn dễ bị ôi thiu hơn chất béo lỏng.\n(d) Dầu thực vật dễ bị ôi hơn mỡ động vật.\n(e) Cô cạn chất béo lỏng thu được chất béo rắn.\nSố phát biểu đúng là",
      options: [
        { label: "2.", value: "a" },
        { label: "3.", value: "b" },
        { label: "4.", value: "c" },
        { label: "5.", value: "d" }
      ],
      correctAnswer: "a",
      explanation: "Có 2 phát biểu đúng: (a) và (d)."
    },
    {
      id: 8,
      type: "multiple-choice",
      text: "Chất triolein có công thức cấu tạo như hình bên. Khi để lâu trong không khí, nếu giả sử chỉ có oxi không khí cộng vào nối đôi ở gốc acid không no tạo ra peroxide, rồi phân huỷ thành các aldehyde có mùi khó chịu. Công thức sản phẩm hữu cơ của quá trình oxi hoá là",
      options: [
        { label: "C9H18O và C30H50O9.", value: "a" },
        { label: "C9H18O và C30H50O6.", value: "b" },
        { label: "C8H16O và C33H56O9.", value: "c" },
        { label: "C8H16O và C33H56O6.", value: "d" }
      ],
      correctAnswer: "a",
      explanation: "Sản phẩm là C9H18O và C30H50O9."
    }
  ]
};

if (typeof EXAMS !== 'undefined') {
  EXAMS.push(EXAM_5);
}
