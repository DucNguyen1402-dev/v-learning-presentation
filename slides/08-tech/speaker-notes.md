Đầu tiên, về **nền tảng công nghệ Frontend**, dự án được chia thành **5 tầng** chính. Mỗi tầng sẽ đảm nhiệm một vai trò khác nhau trong quá trình phát triển dự án.

### 1. Language Foundation

Bắt đầu với tầng đầu tiên là **“Ngôn ngữ nền tảng”**. Đây là tầng **đặt nền tảng về ngôn ngữ và cách mã nguồn được xây dựng**. Với dự án này, **TypeScript** được sử dụng làm ngôn ngữ chính để **xây dựng ứng dụng**, đồng thời giúp kiểm soát **kiểu dữ liệu** trên toàn bộ mã nguồn, qua đó **phát hiện sớm các lỗi ngay trong quá trình phát triển**.

### 2. Build & Bundling Infrastructure

Tầng tiếp theo là **“Công cụ phát triển và đóng gói”**. Đây là tầng phụ trách **hỗ trợ quá trình phát triển, build và chuẩn bị ứng dụng để triển khai**. Ở tầng này, dự án sử dụng **Vite** để chạy ứng dụng trong quá trình phát triển và build phiên bản production trước khi triển khai lên **Vercel**.

Ngoài ra, **plugin Tailwind CSS** được sử dụng để tích hợp **Tailwind CSS** vào **quy trình build của Vite**.

### 3. UI & Styling System

Tiếp theo là **“Giao diện & kiểu dáng”**. Đây là tầng phụ trách **xây dựng giao diện, từ cách hiển thị đến cách người dùng tương tác với giao diện**. Ở tầng này, dự án sử dụng:

- **React** để xây dựng giao diện theo mô hình **component**, giúp tổ chức giao diện thành các thành phần nhỏ, dễ quản lý và tái sử dụng trong toàn dự án;
- Tiếp đến là **Tailwind CSS** đảm nhiệm styling **clsx** và **tailwind-merge** kết hợp xử lý className;
- **Lucide React** cung cấp icon; và thư viện **Motion** được sử dụng để **tạo các hiệu ứng chuyển cảnh và chuyển động cho giao diện**.

---

### 4. State & Data Layer

Kế tiếp là tầng **quản lý trạng thái và dữ liệu**, Đây là tầng phụ trách việc **lấy, quản lý và chia sẻ dữ liệu trong ứng dụng**, từ **dữ liệu được đồng bộ với server đến các trạng thái dùng chung và dữ liệu trong form**. Cụ thể,ở tầng này, dự án sử dụng:

- **TanStack React Query** hỗ trợ lấy, lưu trữ và đồng bộ dữ liệu từ server.
- Tiếp đến **React Context API** dùng để chia sẻ global UI state và cung cấp các context dùng chung cho toàn ứng dụng.
- **Axios** đảm nhiệm việc gửi request đến API;
- Và **React Hook Form** quản lý form và validation, với các quy tắc được tổ chức theo từng module.

### 6. Engineering Quality & DX

Và cuối cùng là tầng **“Chất lượng mã nguồn & công cụ”**. Đây là tầng **hỗ trợ kiểm soát chất lượng, tính nhất quán và cấu trúc của mã nguồn trong quá trình phát triển**. Ở tầng này, dự án sử dụng:

- **ESLint** phân tích mã nguồn và phát hiện các **lỗi hoặc vi phạm quy tắc**.
- **Prettier** tự động **định dạng mã nguồn**, giúp code **nhất quán về cách trình bày**.
- Và **Madge** là công cụ phân tích và hỗ trợ phát hiện circular dependency trong mã nguồn.

Và đó là toàn bộ các **nền tảng công nghệ và công cụ chính** được sử dụng trong dự án. Ngoài ra, dự án còn sử dụng một số thư viện và công cụ hỗ trợ khác. Tuy nhiên, do chúng có vai trò khá nhỏ và khó xếp vào tầng phân loại trên nên em không đưa vào phần này.

Tiếp theo, em sẽ chuyển sang phần còn lại của **tổng quan kỹ thuật**
**[Bấm chuyển slide]**.
