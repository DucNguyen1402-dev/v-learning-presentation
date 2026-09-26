“Đầu tiên là **công nghệ nền tảng**, bao gồm những công nghệ cốt lõi được sử dụng để xây dựng phần frontend của dự án.”

---

Nói về **Ngôn ngữ & nền tảng** trước, thì ở đây có 3 lớp nền tảng chính:

- Đầu tiên là **TypeScript**, dùng làm ngôn ngữ chính, giúp kiểm soát kiểu dữ liệu và hạn chế lỗi trong code.

- Tiếp theo là **React**, dùng để xây dựng giao diện theo hướng **component-based**, giúp các thành phần dễ tổ chức và tái sử dụng.

- Cuối cùng là **Vite**, dùng để **build và chạy development server**, với ưu điểm là khởi động nhanh, HMR nhanh và hỗ trợ tốt cho **React và TypeScript**.

---

## Và đây là ba lớp nền tảng chính, tiếp theo về **routing**, dự án sử dụng **React Router DOM** để quản lý và điều hướng giữa các trang.

Tiếp theo là về **quản lý state và dữ liệu**, em sử dụng ba công cụ chính.

- **TanStack React Query** dùng để quản lý **server state**, hỗ trợ fetching và caching dữ liệu từ API.
- **React Context API** dùng cho các state dùng chung như **Auth** và các **Provider** của Admin, Client.
- Cuối cùng là **Axios**, dùng để giao tiếp với **API**.

---

- Về **form & validation**, em dùng **React Hook Form** để quản lý form và hạn chế re-render. Các **validation rules** được tách theo từng module như login, register để dễ quản lý và tái sử dụng.

* Về **UI & Styling**, em dùng **Tailwind CSS** kết hợp **Radix UI** để xây dựng các component **accessible** và dễ tái sử dụng. **clsx** và **tailwind-merge** hỗ trợ quản lý class, **Lucide React** dùng cho icon và **Motion** cho animation.

--

- Đối với **tiện ích**, em dùng **date-fns** để xử lý thời gian và **qrcode** để sinh mã QR, chủ yếu phục vụ cho **demo thanh toán phía Client**.

--

- Và cuối cùng là **tooling**. Em dùng **ESLint** để kiểm tra code, **Prettier** để format và **Madge** để phát hiện **circular dependency** trong codebase.

--

- Nhìn chung, dự án được xây dựng theo nguyên tắc **“cần gì dùng đó”**, các công nghệ được lựa chọn **phù hợp với nhu cầu thực tế** và hạn chế những công nghệ không cần thiết.
