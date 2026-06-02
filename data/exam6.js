// Bộ đề trọng tâm - Khoa Học - Bài đọc số 06
const EXAM_6 = {
  id: "bai-doc-06",
  title: "Bài Đọc Số 06",
  subtitle: "Lớp 12 – Hoá hữu cơ – Xà phòng",
  source: "Bộ Đề Trọng Tâm - Khoa Học",
  totalMarks: 7,
  timeLimit: 15, // minutes
  passage: `Xà phòng (hay xà bông) là một trong những vật dụng quen thuộc trong cuộc sống hằng ngày của chúng ta. Xà phòng có tác dụng tẩy rửa các chất bẩn, dầu mỡ,... Thành phần của xà phòng là muối Na hoặc K của acid béo. Xà phòng được dùng dưới dạng bánh, bột hoặc chất lỏng.
Xà phòng được điều chế bằng cách đun dầu thực vật hoặc mỡ động vật với dung dịch NaOH hoặc KOH ở nhiệt độ cao và áp suất cao. Loại xà phòng này có một nhược điểm là không giặt được trong nước cứng vì nó tạo kết tủa với các ion Ca2+ và Mg2+ bết lên mặt vải làm vải chóng mục.
Sản phẩm của quá trình xà phòng hoá gồm glycerol và xà phòng. Glycerol có giá trị hơn xà phòng và phần lớn nó được thu hồi. Một số còn lại trong xà phòng để làm cho nó mềm và mượt hơn. Dung dịch glycerol được cô đặc bằng cách bốc hơi nước và glycerol sau đó được tinh chế bằng cách chưng cất. Sử dụng chính của nó là sản xuất nhựa alkyd, được sử dụng trong sơn. Nó cũng được sử dụng để sản xuất thuốc nổ (nitroglycerine) và trong nhiều sản phẩm mỹ phẩm và dược phẩm.
Sau khi xà phòng hoá, hỗn hợp xà phòng và glycerol thường được truyền vào một đĩa tiếp xúc quay hoặc RDC, nơi mà hỗn hợp được truyền qua một cột và được rửa với dung dịch NaCl chảy ngược dòng. Xà phòng không thể hoà tan trong nước muối và tách ra ngoài.
Các tính chất của xà phòng như làm mềm và mềm mại phụ thuộc vào độ dài của chuỗi axit cacboxylic, ion kim loại và tỉ lệ axit cacboxylic không được trung hoà. Xà phòng cũng được cho thêm các hoá chất để có màu sắc và mùi thơm của riêng cho nó. Một số loại xà phòng còn có chất diệt khuẩn và chất tẩy tế bào chết. Xà phòng được làm khô bằng cách phun vào buồng chân không để tạo ra một sản phẩm cuối cùng thích hợp để cho vào khuôn tạo hình.`,
  questions: [
    {
      id: 1,
      type: "fill-in",
      text: "Dựa vào thông tin trong văn bản, điền cụm từ thích hợp vào chỗ trống?\nThành phần của xà phòng là muối Na hoặc K của __________.",
      correctAnswer: "acid béo",
      explanation: "Thành phần của xà phòng là muối Na hoặc K của acid béo."
    },
    {
      id: 2,
      type: "true-false",
      text: "Phát biểu sau đây đúng hay sai?",
      statements: [
        { text: "Xà phòng có một nhược điểm là không giặt được trong nước cứng vì nó bị oxi hoá bởi các ion Ca2+ và Mg2+.", answer: false }
      ],
      explanation: "Sai vì xà phòng tạo kết tủa với Ca2+ và Mg2+, chứ không phải bị oxi hoá."
    },
    {
      id: 3,
      type: "fill-in",
      text: "Dựa vào thông tin trong văn bản, điền cụm từ thích hợp vào chỗ trống?\nCác tính chất của xà phòng như làm mềm và mềm mại phụ thuộc vào độ dài của chuỗi axit cacboxylic, ion kim loại và __________.",
      correctAnswer: "tỉ lệ axit cacboxylic không được trung hoà",
      explanation: "Phụ thuộc vào tỉ lệ axit cacboxylic không được trung hoà."
    },
    {
      id: 4,
      type: "multiple-choice",
      text: "Phương pháp thông thường để sản xuất xà phòng là:",
      options: [
        { label: "Đun dầu thực vật hoặc mỡ động vật với dung dịch NaOH hoặc KOH ở nhiệt độ cao và áp suất cao.", value: "a" },
        { label: "Đun dầu thực vật hoặc mỡ động vật với dung dịch NaOH hoặc KOH ở nhiệt độ cao và áp suất thấp.", value: "b" },
        { label: "Đun dầu thực vật hoặc mỡ động vật với dung dịch NaOH hoặc KOH ở nhiệt độ thấp và áp suất cao.", value: "c" },
        { label: "Đun dầu thực vật hoặc mỡ động vật với dung dịch NaOH hoặc KOH ở nhiệt độ thấp và áp suất thấp.", value: "d" }
      ],
      correctAnswer: "a",
      explanation: "Đun dầu thực vật hoặc mỡ động vật với dung dịch NaOH hoặc KOH ở nhiệt độ cao và áp suất cao."
    },
    {
      id: 5,
      type: "true-false",
      text: "Lựa chọn phương án đúng/sai:",
      statements: [
        { text: "Sản phẩm của quá trình xà phòng hoá gồm glycerol và xà phòng.", answer: true },
        { text: "Sử dụng chính của glycerol là sản xuất nhựa alkyd, được sử dụng trong sơn, sản xuất thuốc nổ (nitroglycerine) và trong nhiều sản phẩm mỹ phẩm và dược phẩm.", answer: true },
        { text: "Glycerol có giá trị thấp hơn xà phòng và phần lớn nó được thu hồi.", answer: false },
        { text: "Sau khi xà phòng hoá, hỗn hợp xà phòng và glycerol thường được truyền vào một đĩa tiếp xúc quay hoặc RDC.", answer: true },
        { text: "Xà phòng được làm khô bằng cách phun vào buồng chân không để tạo ra một sản phẩm cuối cùng thích hợp để cho vào khuôn tạo hình.", answer: true }
      ],
      explanation: "Đúng - Đúng - Sai (Glycerol có giá trị HƠN xà phòng) - Đúng - Đúng."
    },
    {
      id: 6,
      type: "multiple-choice",
      text: "Chỉ số acid là số mg KOH dùng để trung hoà lượng acid béo tự do có trong 1 gam chất béo. Một xưởng sản xuất xà phòng, trong một ngày xà phòng hoá một tấn chất béo (chứa 5% tạp chất trơ) có chỉ số axit bằng 7 cần 143 kg NaOH. Hiệu suất phản ứng đạt 75%. Muối của acid béo thu được đem trộn với chất độn, chất màu và tạo mùi thơm rồi đem đóng bánh. Bánh xà phòng thu được chứa 80% muối sodium của acid béo. Mỗi bánh xà phòng nặng 200 gam. Hỏi trong một ngày xưởng trên sản xuất được bao nhiêu bánh xà phòng?",
      options: [
        { label: "4617 bánh.", value: "a" },
        { label: "3278 bánh.", value: "b" },
        { label: "5234 bánh.", value: "c" },
        { label: "3878 bánh.", value: "d" }
      ],
      correctAnswer: "a",
      explanation: "Tính toán lượng muối sinh ra và chia cho (200g * 0.8), thu được 4617 bánh."
    },
    {
      id: 7,
      type: "multiple-choice",
      text: "Tiến hành thí nghiệm đun nóng m gam hỗn hợp E chứa triglyceride X và các acid béo tự do với 200 ml dung dịch NaOH 1M (vừa đủ), thu được glycerol và hỗn hợp Y chứa các muối có công thức chung C17HyCOONa. Đốt cháy 0,07 mol E, thu được 1,845 mol CO2. Mặt khác, m gam E tác dụng vừa đủ với 0,1 mol Br2. Biết các phản ứng xảy ra hoàn toàn. Giá trị của m là",
      options: [
        { label: "57,74.", value: "a" },
        { label: "59,07.", value: "b" },
        { label: "55,76.", value: "c" },
        { label: "31,77.", value: "d" }
      ],
      correctAnswer: "a",
      explanation: "Theo tính toán, m = 57,74."
    }
  ]
};

if (typeof EXAMS !== 'undefined') {
  EXAMS.push(EXAM_6);
}
