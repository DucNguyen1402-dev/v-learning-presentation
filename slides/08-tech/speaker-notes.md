Đầu tiên, về **nền tảng công nghệ Frontend** của dự án em chia thành **5 tầng** chính:

### 1. Language Foundation

Tầng đầu tiên là **ngôn ngữ nền tảng**, dự án sử dụng **TypeScript** để kiểm soát **kiểu dữ liệu** trên toàn bộ mã nguồn, giúp phát hiện sớm lỗi ngay trong quá trình phát triển.

---

### 2. Build & Bundling Infrastructure

Tầng tiếp theo là **Công cụ phát triển và đóng gói** , dự án dùng **Vite** chạy ứng dụng trong quá trình phát triển và build phiên bản production trước khi triển khai lên **Vercel**.
Ngoài ra, **plugin Tailwind CSS** cho **Vite** được sử dụng để tích hợp **Tailwind CSS** vào quá trình phát triển ứng dụng.

### 3. UI & Styling System

Tiếp theo là "Giao diện & kiểu dáng", ở tầng này dự án dùng:

- **React** để xây dựng giao diện theo mô hình **component**, giúp tổ chức giao diện thành các thành phần nhỏ, dễ quản lý và tái sử dụng trong toàn ứng dụng;
- **Tailwind CSS** đảm nhiệm styling **clsx** và **tailwind-merge** xử lý className;
  **Lucide React** cung cấp icon; **Motion** tạo hiệu ứng chuyển động.

---

### 4. State & Data Layer

Kế tiếp là tầng **quản lý trạng thái và dữ liệu**, trong đó mỗi thành phần đảm nhiệm một vai trò riêng, bao gồm:

- **TanStack React Query** dùng để fetch, cache và đồng bộ dữ liệu từ server.
- **React Context API** dùng để chia sẻ trạng thái và tổ chức các provider theo từng khu vực Admin/Client.
- **Axios** đảm nhiệm việc gửi request đến API;
- **React Hook Form** quản lý dữ liệu biểu mẫu, còn các quy tắc validation được tổ chức theo từng module.

---

### 6. Engineering Quality & DX

Và cuối cùng là tầng **Chất lượng mã nguồn & công cụ**, bao gồm:
**ESLint** kiểm tra quy tắc mã nguồn,
**Prettier** định dạng code,
còn **Madge** hỗ trợ phát hiện circular dependency.

Ngoài ra, dự án còn sử dụng một số thư viện và công cụ hỗ trợ khác. Tuy nhiên, do chúng có vai trò khá nhỏ và khó xếp vào các nhóm chính nên em không đưa vào phần này.

Và đó là toàn bộ về **nền tảng công nghệ FE**,

Tiếp theo, em sẽ chuyển sang phần **[Bấm chuyển slide]**.
