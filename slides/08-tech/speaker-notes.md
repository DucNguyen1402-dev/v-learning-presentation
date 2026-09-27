Trước tiên, em xin giới thiệu **nền tảng công nghệ Frontend** của dự án. Nội dung được chia thành ba nhóm bao gồm: **nền tảng phát triển**, **các năng lực chính của ứng dụng**, và **thư viện tiện ích cùng công cụ hỗ trợ**.

---

### 1. Nền tảng phát triển

Đầu tiên là **nền tảng phát triển**, gồm ngôn ngữ, thư viện giao diện và công cụ phát triển, đóng gói ứng dụng.

- Về ngôn ngữ, TypeScript giúp kiểm soát kiểu dữ liệu, qua đó hạn chế lỗi trong quá trình phát triển.

- Về thư viện giao diện, React cho phép xây dựng giao diện từ các thành phần độc lập, giúp tái sử dụng và quản lý giao diện hiệu quả.

- Về công cụ phát triển và đóng gói, Vite được sử dụng để chạy môi trường phát triển và đóng gói ứng dụng khi phát hành. Điểm nổi bật của Vite là thời gian khởi động nhanh và khả năng cập nhật thay đổi ngay lập tức mà không cần tải lại toàn bộ trang.

---

### 2. Các năng lực của ứng dụng

Nhóm thứ hai gồm những công nghệ hỗ trợ các chức năng chính của ứng dụng, từ điều hướng và quản lý dữ liệu đến xây dựng biểu mẫu và giao diện.

Về **điều hướng**, dự án sử dụng **React Router DOM** để quản lý việc chuyển đổi giữa các trang.

Tiếp theo là **quản lý trạng thái và dữ liệu**, với ba thành phần chính:

- **TanStack React Query** quản lý dữ liệu từ máy chủ (**server state**), hỗ trợ lấy dữ liệu từ API và lưu vào bộ nhớ đệm.
- **React Context API** dùng để chia sẻ trạng thái chung, chẳng hạn thông tin xác thực (**Auth**) và dữ liệu được cung cấp qua các **Provider** của khu vực Admin và Client.
- **Axios** được sử dụng để gửi yêu cầu đến **API** và nhận dữ liệu phản hồi.

Về **biểu mẫu và kiểm tra dữ liệu**, **React Hook Form** hỗ trợ quản lý dữ liệu biểu mẫu và hạn chế các lần render không cần thiết. Các quy tắc kiểm tra được tách theo từng chức năng, chẳng hạn đăng nhập và đăng ký, để dễ quản lý và tái sử dụng.

Về **giao diện và kiểu dáng**, **Tailwind CSS** được kết hợp với **Radix UI** để xây dựng các thành phần giao diện chú trọng khả năng truy cập và dễ tái sử dụng. **clsx** và **tailwind-merge** hỗ trợ kết hợp và xử lý các class CSS; **Lucide React** cung cấp biểu tượng; còn **Motion** được dùng để tạo hiệu ứng chuyển động.

---

### 3. Thư viện tiện ích và công cụ hỗ trợ

Cuối cùng là nhóm thư viện tiện ích và công cụ hỗ trợ quá trình phát triển.

- Về **tiện ích**, **date-fns** được dùng để xử lý ngày giờ, còn **qrcode** để tạo mã QR, chủ yếu phục vụ phần demo thanh toán phía người dùng.

- Trong nhóm **công cụ hỗ trợ phát triển**, **ESLint** giúp kiểm tra chất lượng mã nguồn, **Prettier** định dạng mã, còn **Madge** hỗ trợ phát hiện các phụ thuộc vòng trong dự án.

Nhìn chung, các công nghệ và công cụ được lựa chọn dựa trên nhu cầu thực tế của dự án, ưu tiên những giải pháp cần thiết và phù hợp.
