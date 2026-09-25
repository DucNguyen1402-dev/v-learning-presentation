“Đầu tiên là **công nghệ nền tảng**, bao gồm những công nghệ cốt lõi được sử dụng để xây dựng phần frontend của dự án.”

---

Nói về **Ngôn ngữ & nền tảng** trước, thì ở đây có 3 lớp nền tảng chính:

- Đầu tiên là **TypeScript**, được sử dụng làm ngôn ngữ chính, giúp tăng **type safety** và hạn chế các lỗi liên quan đến kiểu dữ liệu trong codebase.

- Tiếp theo là **React**, được sử dụng để xây dựng giao diện theo hướng **component-based**, giúp các thành phần có thể được tổ chức và tái sử dụng một cách rõ ràng trong ứng dụng.

- Cuối cùng là **Vite**, đóng vai trò **build tool và development server**, hỗ trợ quá trình phát triển với tốc độ khởi động và HMR nhanh. Đồng thời, Vite có cấu hình tương đối đơn giản và hỗ trợ tốt cho **React và TypeScript**, phù hợp với nhu cầu của dự án.

---

Và đây là ba lớp nền tảng chính, tiếp theo về **routing**, dự án sử dụng **React Router DOM** để quản lý và điều hướng giữa các trang. Thư viện này tích hợp tốt với React và đáp ứng được nhu cầu routing của dự án.

Cụ thể, em dùng routing để tổ chức các khu vực **Client và Admin**, đồng thời kết hợp **Route Guard** để kiểm soát quyền truy cập vào từng route.

---

Tiếp theo là về **quản lý state và dữ liệu**, em sử dụng ba công cụ chính.

- TanStack React Query dùng để quản lý server state, hỗ trợ fetching và caching dữ liệu từ API.
- React Context API dùng cho các state dùng chung như Auth và các Provider theo từng khu vực Admin, Client.
- Và cuối cùng là Axios được sử dụng để giao tiếp với API, kết hợp interceptor để tự động đính kèm Access Token vào request.

---

**Về form & validation**, em sử dụng **React Hook Form** để quản lý form và hạn chế re-render không cần thiết. Các **validation rules** cũng được em tách theo từng module như login, register để code rõ ràng và dễ tái sử dụng.

--
Về phần **UI & Styling**, em sử dụng **Tailwind CSS** kết hợp với **Radix UI** để xây dựng các component có tính **accessible** và dễ tái sử dụng. Bên cạnh đó, em dùng **clsx** và **tailwind-merge** để quản lý class linh hoạt và hạn chế xung đột về styling. **Lucide React** được sử dụng cho hệ thống icon, còn **Motion** hỗ trợ xử lý các hiệu ứng animation.

--

Đối với **tiện ích**, em tích hợp thêm một số thư viện nhỏ để hỗ trợ các workflow chính. **date-fns** được sử dụng để xử lý và định dạng thời gian khi submit dữ liệu, còn thư viện **qrcode** được dùng để sinh mã QR, chủ yếu phục vụ cho phần **demo thanh toán ở phía Client**.

--

Và cuối cùng là **tooling**. Để đảm bảo chất lượng code và giữ codebase nhất quán, em sử dụng **ESLint** với các rule dành cho TypeScript, React Hooks và import. Bên cạnh đó, em kết hợp **Prettier** để format code đồng nhất. Ngoài ra, em sử dụng **Madge** để kiểm tra và phát hiện các **circular dependency** trong codebase.

--
Nhìn chung, dự án được xây dựng theo nguyên tắc **“cần gì dùng đó”**, nên các công nghệ được lựa chọn **phù hợp với nhu cầu thực tế**, đồng thời em hạn chế đưa vào những công nghệ không thực sự cần thiết hoặc không được sử dụng trong dự án.
