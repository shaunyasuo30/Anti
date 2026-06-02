# TSA Practice Test – Luyện Thi Khoa Học

Chào mừng bạn đến với ứng dụng **TSA Practice Test**, một ứng dụng web giúp học sinh ôn luyện các bộ đề thi trọng tâm môn Khoa học (Hóa học).

## Tính Năng Chính
- **Giao diện hiện đại, dễ sử dụng:** Được thiết kế tối giản, hỗ trợ xem trước bài đọc và làm bài thi với đồng hồ đếm ngược.
- **Đa dạng dạng câu hỏi:**
  - Trắc nghiệm một đáp án (Multiple choice).
  - Trắc nghiệm đúng/sai cho từng phát biểu (True/False nhiều mệnh đề).
  - Điền khuyết (Fill-in).
- **Phản hồi tức thì & Giải thích chi tiết:** Sau khi nộp bài, hệ thống sẽ chấm điểm ngay lập tức và cung cấp lời giải thích cho từng câu hỏi.
- **Lưu trữ kết quả (Local Storage):** Kết quả làm bài và điểm cao nhất của từng đề được tự động lưu lại trên trình duyệt của bạn.
- **Hỗ trợ bài đọc kèm bảng và hình ảnh:** Giao diện có thể mở rộng (expand) / thu gọn (collapse) bài đọc để tiện lợi khi làm bài.

## Các Bộ Đề Hiện Có
Hiện tại, hệ thống đã được tích hợp sẵn 7 bộ đề:
1. **Bài Đọc Số 01:** Lớp 11 – Hoá hữu cơ – Hydrocarbon
2. **Bài Đọc Số 02:** Lớp 11 – Hoá hữu cơ – Đại cương hydrocarbon
3. **Bài Đọc Số 03:** Lớp 11 – Hoá hữu cơ – Hydrocarbon
4. **Bài Đọc Số 04:** Lớp 11 – Hoá hữu cơ – Tinh dầu
5. **Bài Đọc Số 05:** Lớp 12 – Hoá hữu cơ – Chất béo
6. **Bài Đọc Số 06:** Lớp 12 – Hoá hữu cơ – Xà phòng
7. **Bài Đọc Số 07:** Lớp 11 – Hoá hữu cơ – Hydrogen carbon

## Hướng Dẫn Cài Đặt & Sử Dụng
Đây là một ứng dụng frontend thuần túy (HTML, CSS, JavaScript). Không cần cài đặt server hay database phức tạp.
1. Sao chép (clone) repository này về máy.
2. Mở file `index.html` trực tiếp bằng trình duyệt (Chrome, Edge, Firefox, v.v.).
3. Hoặc bạn có thể sử dụng các extension như **Live Server** trên VS Code để có trải nghiệm tốt nhất.

## Cấu Trúc Thư Mục
```
.
├── index.html           # Giao diện chính của ứng dụng
├── style.css            # Tệp định dạng CSS
├── app.js               # Logic điều khiển chính của ứng dụng
├── data/                # Chứa các tệp dữ liệu đề thi (.js)
│   ├── exam1.js
│   ├── exam2.js
│   └── ...
├── images/              # Lưu trữ hình ảnh sử dụng trong các đề thi
└── File de/             # Thư mục chứa các tệp đề nguồn (.docx, .txt)
```

## Đóng Góp
Để thêm bộ đề mới, bạn chỉ cần:
1. Tạo một file `examX.js` mới trong thư mục `data/` tuân theo cấu trúc JSON tương tự các đề hiện có.
2. Thêm file đó vào mảng `EXAMS` bằng lệnh `EXAMS.push(EXAM_X)`.
3. Nhúng (import) thẻ `<script src="data/examX.js"></script>` vào file `index.html` trước thẻ gọi `app.js`.

---
*Dự án phục vụ mục đích học tập và luyện thi.*
