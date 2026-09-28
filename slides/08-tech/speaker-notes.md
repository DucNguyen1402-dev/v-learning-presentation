Trước tiên, em xin trình về **nền tảng công nghệ Frontend** của dự án với **5 nhóm** chính:

### 1. Language Foundation

Đầu tiên là về **ngôn ngữ nền tảng**, dự án sử dụng **TypeScript** để kiểm soát **kiểu dữ liệu** trên toàn codebase, giúp phát hiện sớm lỗi ngay trong quá trình phát triển.

---

### 2. Build & Bundling Infrastructure

Tiếp theo là nhóm **Công cụ phát triển và đóng gói** , dự án dùng **Vite** để chạy ứng dụng trong quá trình phát triển và đóng gói khi phát hành.
Ngoài ra, **plugin Tailwind CSS** cho **Vite** được sử dụng để đưa **Tailwind CSS** vào quá trình phát triển ứng dụng.

### 3. UI & Styling System

Tiếp theo là "Giao diện & kiểu dáng", ở nhóm này dự án dùng:

- **React** để xây dựng giao diện theo mô hình **component**, giúp tổ chức giao diện thành các thành phần nhỏ, dễ quản lý và tái sử dụng trong toàn ứng dụng;
- **Tailwind CSS** đảm nhiệm styling **clsx** và **tailwind-merge** xử lý className;
  **Lucide React** cung cấp icon; **Motion** tạo hiệu ứng chuyển động.

---

### 4. State & Data Layer

Tiếp theo là nhóm **quản lý trạng thái và dữ liệu**, trong đó mỗi thành phần đảm nhiệm một vai trò riêng:

- **TanStack React Query** dùng để fetch, cache và đồng bộ dữ liệu từ server.
- **React Context API** dùng để chia sẻ trạng thái Auth và tổ chức các provider theo từng khu vực Admin/Client.
- **Axios** đảm nhiệm việc gửi request đến API;
- **React Hook Form** quản lý dữ liệu biểu mẫu, còn các quy tắc validation được tổ chức theo từng module.

---

### 6. Engineering Quality & DX

Và cuối cùng là nhóm **Chất lượng mã nguồn & công cụ**:
**ESLint** kiểm tra quy tắc mã nguồn,
**Prettier** định dạng code,
còn **Madge** hỗ trợ phát hiện circular dependency.

Như vậy, các công nghệ được nhìn theo vai trò kiến trúc thay vì gom thành danh sách thư viện.

Tiếp theo, em sẽ chuyển sang phần **[Bấm chuyển slide]**.
