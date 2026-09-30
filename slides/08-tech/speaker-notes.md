Đầu tiên, về **nền tảng công nghệ Frontend**, dự án được chia thành **5 tầng** chính. Mỗi tầng sẽ bao gồm một số công nghệ và công cụ khác nhau, do thời gian có hạn, em sẽ chỉ **lướt nhanh qua các tầng**.

### 1. Language Foundation

Tầng đầu tiên là **ngôn ngữ nền tảng**, dự án sử dụng **TypeScript** để kiểm soát **kiểu dữ liệu** trên toàn bộ mã nguồn, giúp phát hiện sớm lỗi ngay trong quá trình phát triển.

---

### 2. Build & Bundling Infrastructure

Tầng tiếp theo là **Công cụ phát triển và đóng gói** , dự án dùng **Vite** chạy ứng dụng trong quá trình phát triển và build phiên bản production trước khi triển khai lên **Vercel**.
Ngoài ra, **plugin Tailwind CSS** được sử dụng để tích hợp **Tailwind CSS** vào **quy trình build của Vite**.

### 3. UI & Styling System

Tiếp theo là "Giao diện & kiểu dáng", ở tầng này dự án dùng:

- **React** để xây dựng giao diện theo mô hình **component**, giúp tổ chức giao diện thành các thành phần nhỏ, dễ quản lý và tái sử dụng trong toàn dự án;
- Tiếp đến là **Tailwind CSS** đảm nhiệm styling **clsx** và **tailwind-merge** kết hợp xử lý className;
- **Lucide React** cung cấp icon; và thư viện **Motion** được sử dụng để **tạo các hiệu ứng chuyển cảnh và chuyển động cho giao diện**.

---

### 4. State & Data Layer

Kế tiếp là tầng **quản lý trạng thái và dữ liệu**, gồm nhiều thành phần đảm nhiệm các vai trò tách biệt, đầu tiên là:

- **TanStack React Query** hỗ trợ lấy, lưu trữ và đồng bộ dữ liệu từ server.
- Tiếp đến **React Context API** dùng để chia sẻ global UI state và cung cấp các context dùng chung cho toàn ứng dụng.
- **Axios** đảm nhiệm việc gửi request đến API;
- Và **React Hook Form** quản lý form và validation, với các quy tắc được tổ chức theo từng module.

### 6. Engineering Quality & DX

Và cuối cùng là tầng **Chất lượng mã nguồn & công cụ**, dự án sử dụng:

- **ESLint** phân tích mã nguồn và phát hiện các **lỗi hoặc vi phạm quy tắc**.
- **Prettier** tự động **định dạng mã nguồn**, giúp code **nhất quán về cách trình bày**.
- Và **Madge** là công cụ phân tích và hỗ trợ phát hiện circular dependency trong mã nguồn.

Và đó là toàn bộ các **nền tảng công nghệ và công cụ chính** được sử dụng trong dự án. Ngoài ra, dự án còn sử dụng một số thư viện và công cụ hỗ trợ khác. Tuy nhiên, do chúng có vai trò khá nhỏ và khó xếp vào tầng phân loại trên nên em không đưa vào phần này.

Tiếp theo, em sẽ chuyển sang phần còn lại của **tổng quan kỹ thuật**
**[Bấm chuyển slide]**.
