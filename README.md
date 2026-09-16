# V-Learning Presentation

Bộ khung presentation HTML/CSS/JavaScript thuần.

## Cấu trúc

- `index.html`: trang trình chiếu chính.
- `css/`: reset, biến giao diện, nền tảng, component, animation và style dùng
  chung của slide.
- `css/slides/`: stylesheet riêng cho từng slide, dùng cùng tên với slide.
- `js/`: logic presentation và điều hướng.
- `slides/`: mỗi slide là một HTML fragment riêng, được khai báo cùng file CSS
  trong `slides/manifest.json`.
- `assets/images/`: logo, screenshots và diagrams.
- `assets/fonts/`: font cục bộ.

Chạy một local server tại thư mục dự án rồi mở `index.html`, vì presentation
load các slide bằng `fetch()`.

Ví dụ:

```bash
python -m http.server 8000
```

Sau đó mở `http://localhost:8000`.
