// Bộ đề trọng tâm - Khoa Học - Bài đọc số 07
const EXAM_7 = {
  id: "bai-doc-07",
  title: "Bài Đọc Số 07",
  subtitle: "Lớp 11 – Hoá hữu cơ – Hydrogen carbon",
  source: "Bộ Đề Trọng Tâm - Khoa Học",
  totalMarks: 6,
  timeLimit: 15, // minutes
  passage: `Trước đây, vào mùa đông bà con nông dân thường dùng đất đèn để giấm chuối cho mau chín, vì đất đèn tác dụng với hơi nước sinh ra chất khí X, khí X này cũng có tác dụng làm trái cây mau chín. Tuy nhiên, đất đèn có thể chứa hợp chất của arsenic và phosphorus độc. Khi gặp nước đất đèn tạo mùi hôi khó chịu, dễ cháy, nổ. Đất đèn cũng gây ảnh hưởng đến hệ thần kinh, nhức đầu, chóng mặt... nên nhiều nước cấm sử dụng.
Khí ethylene (C2H4) là hormon sinh trưởng thực vật, là khí không mùi, không màu tồn tại trong tự nhiên có vai trò kích thích làm tăng tốc độ chín của trái cây. Tuy nhiên, dùng khí ethylene khi ở nồng độ cao hơn 2,7% có khả năng gây cháy nổ, ethylene làm cho trái cây chín không mong muốn xảy ra trong quá trình bảo quản và vận chuyển.
Ngày nay, thay vì dùng đất đèn và bình chứa khí ethylene, người ta thường ngâm trái cây trong dung dịch ethephon. Ở nước ta hiện nay, ethephon được sử dụng phổ biến như là một chất không thể thiếu trong công nghệ trước và sau thu hoạch. Ethephon thường được sử dụng ở dạng lỏng, khi sử dụng thấm vào cây, quả, kích thích sự sinh trưởng tự nhiên và tăng khả năng sản sinh ethylene của thực vật, hoạt chất được xem như là một hormone chín của hoa quả. Trái cây chín nhanh, không gây độc hại nếu sử dụng ở liều lượng cho phép, sử dụng sản phẩm có nguồn gốc rõ ràng.`,
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      text: "Ethephon có số nguyên tử oxygen là",
      options: [
        { label: "2.", value: "a" },
        { label: "3.", value: "b" },
        { label: "4.", value: "c" },
        { label: "1.", value: "d" }
      ],
      correctAnswer: "b",
      explanation: "Công thức của ethephon là ClCH2CH2P(O)(OH)2, có 3 nguyên tử oxygen."
    },
    {
      id: 2,
      type: "true-false",
      text: "Phát biểu sau đây đúng hay sai?",
      statements: [
        { text: "Đất đèn tác dụng với hơi nước sinh ra chất khí X, khí X là CH4.", answer: false }
      ],
      explanation: "Khí X là acetylene (C2H2), không phải CH4."
    },
    {
      id: 3,
      type: "multiple-choice",
      text: "Ở nước ta hiện nay, để kích thích trái cây nhanh chín, sử dụng phổ biến hoá chất là",
      options: [
        { label: "đất đèn.", value: "a" },
        { label: "ethephon.", value: "b" },
        { label: "bình chứa khí C2H4.", value: "c" },
        { label: "bình chứa khí C2H2.", value: "d" }
      ],
      correctAnswer: "b",
      explanation: "Theo đoạn văn: \"người ta thường ngâm trái cây trong dung dịch ethephon\"."
    },
    {
      id: 4,
      type: "multiple-choice",
      text: "Chọn phát biểu sai?",
      options: [
        { label: "Có thể bảo quản trái cây bằng khí ozone.", value: "a" },
        { label: "Bỏ chuối xanh vào túi nilon, buộc kín giúp chuối chín nhanh hơn.", value: "b" },
        { label: "Xếp xen kẽ cà chua xanh và cà chua chín để thúc cà chua xanh chín nhanh hơn.", value: "c" },
        { label: "Phân tử X có chứa 4 nguyên tố.", value: "d" }
      ],
      correctAnswer: "d",
      explanation: "Phân tử X là C2H2 chỉ chứa 2 nguyên tố C và H, phát biểu d sai."
    },
    {
      id: 5,
      type: "multiple-choice",
      text: "Kéo và thả các số, từ, cụm từ thích hợp vào mỗi chỗ trống?Đất đèn có thể chứa hợp chất của arsenic và ___(a)___ độc, khi gặp nước đất đèn tạo mùi hôi khó chịu, dễ cháy, nổ. Đất đèn cũng gây ảnh hưởng đến hệ thần kinh, nhức đầu, chóng mặt... nên nhiều nước ___(b)___. Dùng khí ethylene khi ở nồng độ cao hơn ___(c)___, có khả năng gây cháy nổ, ethylene làm cho trái cây chín không mong muốn xảy ra trong quá trình bảo quản và vận chuyển. Ethephon thường được sử dụng ở ___(d)___, khi được sử dụng thấm vào cây, quả, kích thích sự sinh trưởng tự nhiên và tăng khả năng sản sinh ethylene của thực vật, hoạt chất được xem như là một ___(e)___ chín của hoa quả.",
      options: [
        { label: "a - phosphorus; b - cấm sử dụng; c - 2,7%; d - dạng lỏng; e - hormone", value: "a" },
        { label: "a - kali; b - cấm sử dụng; c - 2,7%; d - dạng lỏng; e - hormone", value: "b" }
      ],
      correctAnswer: "a",
      explanation: "Dựa vào đoạn văn, ta có các cụm từ tương ứng."
    },
    {
      id: 6,
      type: "multiple-choice",
      text: "Ethephon bán trên thị trường ở dạng dung dịch 40% (khối lượng riêng 1,4 g/cm³). Nguyên liệu để sản xuất chất ClCH2CH2P(O)Cl2 là ethylene, phosphorus trichloride và oxygen. Chúng tổng hợp trong tháp dưới nhiệt độ thấp hoặc áp suất cao, tạo thành ethephon. Từ 14 kg ethylene, 41,25 kg phosphorus trichloride và oxygen được lấy từ lượng dư không khí, hiệu suất phản ứng đạt 80%, lượng ethephon sản xuất được đem bán hết đến tay người tiêu dùng, thu được số tiền là bao nhiêu?",
      options: [
        { label: "7.740.625 đ.", value: "a" },
        { label: "6.192.500 đ.", value: "b" },
        { label: "12.385.000 đ.", value: "c" },
        { label: "15.481.250 đ.", value: "d" }
      ],
      correctAnswer: "c",
      explanation: "Tính toán thu được 12.385.000 đ."
    }
  ]
};

if (typeof EXAMS !== 'undefined') {
  EXAMS.push(EXAM_7);
}
