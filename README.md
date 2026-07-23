# 🧪📚 TSA Practice Test – Luyện Thi Khoa Học

**Chào mừng bạn đến với ứng dụng *TSA Practice Test*** – một công cụ web giúp học sinh ôn luyện các đề thi Hóa học một cách hiệu quả và thú vị.

## ✨ Tính năng nổi bật
- **🖥️ Giao diện hiện đại, dễ sử dụng**: Thiết kế tối giản, hỗ trợ xem trước bài đọc và làm bài thi với đồng hồ đếm ngược.
- **❓ Đa dạng dạng câu hỏi**:
  - 📝 *Trắc nghiệm một đáp án* (Multiple choice).
  - ✅ *Trắc nghiệm đúng/sai* cho từng phát biểu (True/False nhiều mệnh đề).
  - ✍️ *Điền khuyết* (Fill‑in).
- **⚡ Phản hồi tức thì & Giải thích chi tiết**: Kết quả được chấm ngay và cung cấp lời giải cho từng câu hỏi.
- **💾 Lưu trữ kết quả (Local Storage)**: Điểm cao nhất và lịch sử làm bài được tự động lưu trên trình duyệt.
- **📖 Hỗ trợ bài đọc kèm bảng và hình ảnh**: Giao diện có thể mở rộng/thu gọn các đoạn văn để tiện lợi khi làm bài.

## 📦 Các bộ đề hiện có
Hiện tại, hệ thống đã tích hợp **7 bộ đề**:
1. **Bài Đọc Số 01** – Lớp 11 – Hoá hữu cơ – Hydrocarbon
2. **Bài Đọc Số 02** – Lớp 11 – Hoá hữu cơ – Đại cương hydrocarbon
3. **Bài Đọc Số 03** – Lớp 11 – Hoá hữu cơ – Hydrocarbon
4. **Bài Đọc Số 04** – Lớp 11 – Hoá hữu cơ – Tinh dầu
5. **Bài Đọc Số 05** – Lớp 12 – Hoá hữu cơ – Chất béo
6. **Bài Đọc Số 06** – Lớp 12 – Hoá hữu cơ – Xà phòng
7. **Bài Đọc Số 07** – Lớp 11 – Hoá hữu cơ – Hydrogen carbon

## 📥 Hướng dẫn cài đặt & sử dụng
1. **Clone** repository về máy:
   ```bash
   git clone <repo-url>
   ```
2. **Mở** file `index.html` trong trình duyệt (Chrome, Edge, Firefox, …).
3. (Tuỳ chọn) Dùng **Live Server** của VS Code để có trải nghiệm reload tự động.

## 📂 Cấu trúc thư mục
```
.
├── index.html           # Giao diện chính
├── style.css            # Định dạng CSS
├── app.js               # Logic điều khiển
├── data/                # Các file đề thi (.js)
│   ├── exam1.js
│   ├── exam2.js
│   └── ...
├── images/              # Hình ảnh dùng trong đề
└── File de/             # Tệp nguồn (.docx, .txt)
```

## 🤝 Đóng góp
Để thêm bộ đề mới:
1. Tạo file `examX.js` trong thư mục `data/` tuân theo cấu trúc JSON của các đề hiện có.
2. Thêm file vào mảng `EXAMS` bằng `EXAMS.push(EXAM_X)`.
3. Nhúng script trong `index.html` trước thẻ `app.js`:
   ```html
   <script src="data/examX.js"></script>
   ```

---
*Dự án phục vụ mục đích học tập và luyện thi.*
