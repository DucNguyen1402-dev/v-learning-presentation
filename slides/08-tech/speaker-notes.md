Trước tiên, em xin giới thiệu **nền tảng công nghệ Frontend** của dự án theo mô hình **9 tầng kiến trúc**. Slide chỉ trình bày các tầng có công nghệ đang được sử dụng, phân loại theo vai trò của chúng trong vòng đời phát triển.

---

### 1. Language Foundation

Ở tầng ngôn ngữ nền tảng, dự án sử dụng **TypeScript** để kiểm soát kiểu dữ liệu trên toàn codebase. React và Vite được xếp ở các tầng khác vì đảm nhiệm vai trò riêng.

---

### 2. Build & Bundling Infrastructure

**Vite** cung cấp dev server, HMR và quy trình build ứng dụng. Plugin **@tailwindcss/vite** tích hợp Tailwind CSS v4 vào quy trình build này.

---

### 3. UI & Styling System

- **React** xây dựng giao diện theo component; **React Router DOM** điều hướng các route Admin và Client.
- **Tailwind CSS** đảm nhiệm styling, còn **Radix UI** cung cấp các primitive giao diện chú trọng khả năng truy cập.
- **clsx** và **tailwind-merge** xử lý className; **Lucide React** cung cấp icon; **Motion** tạo hiệu ứng chuyển động.

---

### 4. State & Data Layer

Tầng dữ liệu và trạng thái gồm các vai trò riêng:

- **TanStack React Query** fetch, cache và đồng bộ dữ liệu server.
- **React Context API** chia sẻ Auth state và provider theo khu vực Admin/Client.
- **Axios** gửi request đến API; **React Hook Form** quản lý dữ liệu biểu mẫu; validation rules được viết theo từng module.

---

### 6. Engineering Quality & DX

**ESLint** kiểm tra quy tắc mã nguồn, **Prettier** định dạng code, còn **Madge** hỗ trợ phát hiện circular dependency. Các tầng khác không có công nghệ tương ứng trong stack đang trình bày nên được lược khỏi slide. Các tiện ích như **date-fns** và **qrcode** cũng không được đưa vào vì không thuộc các tầng đang ánh xạ.

Như vậy, các công nghệ được nhìn theo vai trò kiến trúc thay vì gom thành danh sách thư viện. Tiếp theo, em sẽ chuyển sang phần **[Bấm chuyển slide]**.
