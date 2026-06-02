if (typeof EXAMS === 'undefined') window.EXAMS = [];

EXAMS.push({
  id: 'bai_doc_so_09',
  title: 'Bài đọc số 09',
  subtitle: 'Lớp 11, hoá hữu cơ, alcohol',
  source: 'BỘ ĐỀ TRỌNG TÂM - KHOA HỌC',
  timeLimit: 15,
  totalMarks: 7,
  passage: `Vitamin là những hợp chất hữu cơ mà cơ thể không thể tự tổng hợp được, phần lớn phải lấy từ bên ngoài vào qua các loại thực phẩm sử dụng hằng ngày. Vitamin tồn tại trong cơ thể với một lượng nhỏ nhưng đóng vai trò quan trọng trong việc duy trì sự sống cũng như các hoạt động sống của cơ thể.
Vitamin A (retinol) có màu vàng, không tan trong nước, hoà tan tốt trong dầu, rất cần thiết cho thị lực và phát triển xương. Vitamin A tương tự như các loại vitamin khác, là một chất dinh dưỡng thiết yếu cho con người như việc duy trì thị lực, tăng trưởng cơ thể, chức năng miễn dịch và sức khoẻ sinh sản. Người ta dùng UI (International Units) để đo đơn vị dinh dưỡng của vitamin có trong các loại thực phẩm rau củ. 1 UI vitamin A tương đương 0,3 µg retinol.
Vitamin A (retinol) có nhiều trong carot, súp lơ, lạc, khoai lang, bí ngô, bơ, xoài... Trong 1 củ cà rốt lên đến 7835 IU (một đơn vị đo lường cho các giá trị của một chất) và 100 g cà rốt cung cấp 17033 IU, tương ứng với lượng vitamin A cần cho 2 người trong 1 ngày. Vitamin A trong cà rốt được hình thành dưới dạng beta-carotene, do đó chúng còn có khả năng chống oxy hoá, bảo vệ sức khoẻ. Ngoài lượng vitamin A dồi dào, trong cà rốt còn chứa rất nhiều vitamin B, C, K, chất xơ và magie, đều là những chất có lợi cho cơ thể.

Công thức cấu tạo của vitamin A (retinol) được biểu diễn như hình dưới (có thể tham khảo file gốc).`,
  questions: [
    {
      type: 'multiple-choice',
      text: 'TSA 01: Phát biểu sau đây đúng hay sai? Vitamin là những hợp chất hữu cơ mà cơ thể tự tổng hợp được.',
      options: [
        { value: 'a', label: 'Đúng' },
        { value: 'b', label: 'Sai' }
      ],
      correctAnswer: 'b'
    },
    {
      type: 'fill-in',
      text: 'TSA 02: Điền từ hoặc cụm từ thích hợp vào chỗ trống. Vitamin tồn tại trong cơ thể với một lượng ___(a)___ nhưng đóng vai trò quan trọng trong việc ___(b)___ cũng như các hoạt động sống của cơ thể. (Ví dụ trả lời: a - nhỏ; b - duy trì sự sống)',
      correctAnswer: 'a - nhỏ; b - duy trì sự sống'
    },
    {
      type: 'multiple-choice',
      text: 'TSA 03: Cứ 100 gam cà rốt cung cấp 17033 IU. Vậy 300 gam cà rốt tương ứng với lượng vitamin A cần cho bao nhiêu người trong 1 ngày?',
      options: [
        { value: 'a', label: '4.' },
        { value: 'b', label: '6.' },
        { value: 'c', label: '8.' },
        { value: 'd', label: '3.' }
      ],
      correctAnswer: 'b'
    },
    {
      type: 'multiple-choice',
      text: 'TSA 04: Thành phần phần trăm khối lượng của nguyên tố hidro có trong vitamin A là',
      options: [
        { value: 'a', label: '10,84%.' },
        { value: 'b', label: '10,14%.' },
        { value: 'c', label: '10,49%.' },
        { value: 'd', label: '5,59%.' }
      ],
      correctAnswer: 'c'
    },
    {
      type: 'multiple-choice',
      text: 'TSA 05: Khi cho 1 mol retinol tác dụng với Na dư thì số mol H₂ thu được là',
      options: [
        { value: 'a', label: '1.' },
        { value: 'b', label: '2.' },
        { value: 'c', label: '0,5.' },
        { value: 'd', label: '0,25.' }
      ],
      correctAnswer: 'c'
    },
    {
      type: 'true-false',
      text: 'TSA 06: Lựa chọn phương án đúng/sai:',
      statements: [
        { text: 'Vitamin A (retinol) có nhiều trong carot, súp lơ, lạc, khoai lang, bí ngô, bơ, xoài...', answer: true },
        { text: 'Trong cà rốt còn chứa rất nhiều vitamin B, C, K, chất xơ và magie, đều là những chất có lợi cho cơ thể.', answer: true },
        { text: 'Vitamin A (retinol) dễ hoà tan trong nước.', answer: false },
        { text: 'Vitamin A (retinol) thuộc loại ancol không no, mạch hở.', answer: false },
        { text: 'Vitamin A (retinol) chứa 6 liên kết π (pi).', answer: false }
      ]
    },
    {
      type: 'fill-in',
      text: 'TSA 07: Thực hiện phản ứng ozone phân retinol (giả sử nhóm chức OH không bị oxi hoá trong phản ứng này), các sản phẩm hữu cơ X, Y, Z, T (khối lượng mol lớn dần và đều chứa các nguyên tố C, H, O). Công thức phân tử lần lượt X, Y, Z, T tương ứng là ___, ___, ___, ___. (Ví dụ trả lời: C2H2O2; C2H4O2; C3H4O2; C10H16O3)',
      correctAnswer: 'C2H2O2; C2H4O2; C3H4O2; C10H16O3'
    }
  ]
});
