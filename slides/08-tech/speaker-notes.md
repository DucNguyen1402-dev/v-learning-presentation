Đầu tiên, về **nền tảng công nghệ Frontend**, dự án được chia thành **5 tầng** chính. Mỗi tầng sẽ đảm nhiệm một vai trò khác nhau trong quá trình phát triển dự án.

### 1. Language Foundation

Bắt đầu với tầng đầu tiên là **“Ngôn ngữ nền tảng”**. Đây là tầng **đặt nền tảng về ngôn ngữ và cách mã nguồn được xây dựng**. Với dự án này, **TypeScript** được sử dụng làm ngôn ngữ chính để **xây dựng ứng dụng**, đồng thời giúp kiểm soát **kiểu dữ liệu** trên toàn bộ mã nguồn, qua đó **phát hiện sớm các lỗi ngay trong quá trình phát triển**.

### 2. Build & Bundling Infrastructure

Tầng tiếp theo là **“Công cụ phát triển và đóng gói”**. Đây là tầng phụ trách **hỗ trợ quá trình phát triển, build và chuẩn bị ứng dụng để triển khai**. Cụ thể , Ở tầng này, dự án sử dụng **Vite** để chạy ứng dụng trong quá trình phát triển và build phiên bản production trước khi triển khai lên **Vercel**.

Ngoài ra, **plugin Tailwind CSS** được sử dụng để tích hợp **Tailwind CSS** vào **quy trình build của Vite**.

### 3. UI & Styling System

Tiếp theo là **“Giao diện & kiểu dáng”**. Đây là tầng phụ trách **xây dựng giao diện và cách người dùng tương tác với hệ thống**.

Ở tầng này, dự án sử dụng hai công nghệ chính là **React** và **Tailwind CSS**.

**React** được sử dụng để xây dựng giao diện theo mô hình **component**, giúp chia giao diện thành các thành phần nhỏ, dễ quản lý và tái sử dụng trong toàn dự án.

**Tailwind CSS** đảm nhiệm phần **styling**, giúp xây dựng bố cục và định dạng giao diện một cách linh hoạt.

Bên cạnh hai công nghệ chính, dự án sử dụng thêm một số **công cụ hỗ trợ** như **clsx** và **tailwind-merge** hỗ trợ quản lý và xử lý `className`; **Lucide React** cung cấp hệ thống **icon**; còn **Motion** được sử dụng để tạo các **hiệu ứng chuyển cảnh và chuyển động cho giao diện**.

---

### 4. State & Data Layer

Kế tiếp là tầng **“Quản lý trạng thái và dữ liệu”**. Đây là tầng phụ trách việc **lấy, quản lý và chia sẻ dữ liệu trong ứng dụng**.

Ở tầng này, dự án sử dụng hai thành phần chính là **TanStack React Query** và **React Context API**.

- **TanStack React Query** được sử dụng để quản lý **server state**, hỗ trợ lấy, lưu trữ, caching và đồng bộ dữ liệu từ server.

- **React Context API** được sử dụng để quản lý và chia sẻ **global UI state**, đồng thời cung cấp các context dùng chung trong toàn ứng dụng.

Bên cạnh đó, dự án sử dụng thêm một số **công cụ hỗ trợ**. **Axios** đảm nhiệm việc gửi request đến API, còn **React Hook Form** hỗ trợ quản lý form và validation, với các quy tắc được tổ chức theo từng module.

### 6. Engineering Quality & DX

Và cuối cùng là tầng **“Chất lượng mã nguồn & công cụ”**. Đây là tầng **hỗ trợ kiểm soát chất lượng, tính nhất quán và cấu trúc của mã nguồn trong quá trình phát triển**. Ở tầng này, dự án sử dụng:

- **ESLint** phân tích mã nguồn và phát hiện các **lỗi hoặc vi phạm quy tắc**.
- **Prettier** tự động **định dạng mã nguồn**, giúp code **nhất quán về cách trình bày**.
- Và **Madge** là công cụ phân tích và hỗ trợ phát hiện circular dependency trong cấu trúc mã nguồn.

Và đó là toàn bộ các **nền tảng công nghệ và công cụ chính** được sử dụng trong dự án. Ngoài ra, dự án còn sử dụng một số thư viện và công cụ hỗ trợ khác. Tuy nhiên, do chúng có vai trò khá nhỏ và khó xếp vào tầng phân loại trên nên em không đưa vào phần này.

Tiếp theo, em sẽ chuyển sang phần còn lại của **tổng quan kỹ thuật**
**[Bấm chuyển slide]**.
