Đầu tiên, về **nền tảng công nghệ Frontend**, dự án được chia thành **5 tầng** chính. Mỗi tầng sẽ đảm nhiệm một vai trò khác nhau trong quá trình phát triển dự án.

### 1. Language Foundation

Bắt đầu với tầng đầu tiên là **“Ngôn ngữ nền tảng”**. Đây là tầng **đặt nền tảng về ngôn ngữ và cách mã nguồn được xây dựng**. Với dự án này, **TypeScript** được sử dụng làm ngôn ngữ chính để **xây dựng ứng dụng**, đồng thời ngôn ngữ này cung cấp cơ chế **kiểm soát kiểu dữ liệu trên toàn bộ mã nguồn**, giúp **phát hiện sớm các lỗi ngay trong quá trình phát triển**.

### 2. Build & Bundling Infrastructure

Tầng tiếp theo là **Công cụ phát triển và đóng gói**. Đây là tầng phụ trách **hỗ trợ quá trình phát triển, build và chuẩn bị ứng dụng để triển khai**.

Ở tầng này, dự án sử dụng **Vite** làm công cụ chính để **chạy ứng dụng trong quá trình phát triển và build phiên bản production** trước khi triển khai lên **Vercel**.

Bên cạnh đó, **plugin tailwindcss cho vite** được sử dụng như một **thành phần hỗ trợ**, giúp tích hợp **Tailwind CSS** vào **quy trình build của Vite**.

### 3. UI & Styling System

Tiếp theo là **“Giao diện & kiểu dáng”**. Đây là tầng phụ trách **xây dựng giao diện và cách người dùng tương tác với hệ thống**.

Ở tầng này, dự án sử dụng hai công nghệ chính bao gồm:

Đầu tiên là Thư viện **React** được sử dụng để xây dựng giao diện theo mô hình **component**, giúp chia giao diện thành các thành phần nhỏ, dễ quản lý và tái sử dụng trong toàn dự án.

Thứ hai là **Tailwind CSS**, được sử dụng để **thiết kế và định dạng giao diện cho ứng dụng** dựa trên **lớp tiện ích**, giúp **việc xây dựng giao diện** trở nên **linh hoạt và dễ dàng**.

Bên cạnh hai thành phần, còn có một số **thành phần khác** hỗ trợ tham gia vào quá trình xây dựng giao diện như **clsx** và **tailwind-merge** hỗ trợ quản lý và xử lý `className`; **Lucide React** cung cấp hệ thống **icon**; và **Motion** được sử dụng để tạo các **hiệu ứng chuyển cảnh và chuyển động cho giao diện**.

---

### 4. State & Data Layer

Kế tiếp là tầng **“Quản lý trạng thái và dữ liệu”**. Đây là tầng phụ trách việc **lấy, quản lý và chia sẻ dữ liệu trong ứng dụng**.

Ở tầng này, dự án sử dụng hai thành phần chính gồm :

- Thư viện **TanStack React Query** được sử dụng để quản lý **server state**, hỗ trợ lấy, lưu trữ, caching và đồng bộ dữ liệu từ server.

- **React Context API** là một cơ chế để quản lý và chia sẻ **global UI state**, đồng thời cung cấp các context dùng chung trong toàn ứng dụng.

Tương tự như một số tầng trước đó , ở tầng này cũng có một số **thành phần** hỗ trựo khác tham gia vào **quản lý trạng thái & dữ liệu** như **Axios** đảm nhiệm việc gửi request đến API, còn **React Hook Form** hỗ trợ quản lý form và validation, với các quy tắc được tổ chức theo từng module.

### 6. Engineering Quality & DX

Và cuối cùng là tầng **“Chất lượng mã nguồn & công cụ”**. Đây là tầng **hỗ trợ kiểm soát chất lượng, tính nhất quán và cấu trúc của mã nguồn trong quá trình phát triển**. Cụ thể Ở tầng này, dự án sử dụng:

- **ESLint** phân tích mã nguồn và phát hiện các **lỗi hoặc vi phạm quy tắc**.
- **Prettier** tự động **định dạng mã nguồn**, giúp code **nhất quán về cách trình bày**.
- Và **Madge** là công cụ phân tích và hỗ trợ phát hiện circular dependency trong cấu trúc mã nguồn.

Và đó là toàn bộ các **nền tảng công nghệ và công cụ chính** được sử dụng trong dự án. Ngoài ra, dự án còn sử dụng một số thư viện và công cụ hỗ trợ khác. Tuy nhiên, do chúng có vai trò khá nhỏ và khó xếp vào tầng phân loại trên nên em không đưa vào phần này.

Tiếp theo, em sẽ chuyển sang phần còn lại của **tổng quan kỹ thuật**
**[Bấm chuyển slide]**.
