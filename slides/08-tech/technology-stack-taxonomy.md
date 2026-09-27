# Triết Lý Phân Loại Cấu Tạo Dự Án Frontend (Technology Stack Taxonomy)

## Triết Lý Cốt Lõi
Mọi dự án Frontend phức tạp đều được xây dựng dựa trên triết lý **Separation of Concerns (Tách biệt các mối bận tâm)** và **Abstraction Layers (Các tầng trừu tượng)**. 

Thay vì xem dự án như một tập hợp ngẫu nhiên các công nghệ (*React, TypeScript, Vite...*), triết lý này chia dự án thành **9 Tầng Kiến trúc (9 Architectural Layers)** theo 4 mốc vòng đời: **Viết code (Write Time) -> Đóng gói (Build Time) -> Vận hành (Run Time) -> Triển khai (Deploy Time)**.

---

## Bảng Tổng Quan 9 Tầng Kiến Trúc

```
+-----------------------------------------------------------------------+
| DEPLOY TIME (Triển khai)                                              |
|  [9] Infrastructure & Delivery  (Vercel, AWS, Cloudflare, CI/CD)      |
+-----------------------------------------------------------------------+
| RUN TIME (Vận hành & Giám sát)                                       |
|  [8] Observability & Analytics  (Sentry, PostHog, GA4)               |
|  [7] Runtime & Platform         (Browser, V8, Node.js, Bun)           |
+-----------------------------------------------------------------------+
| WRITE & BUILD TIME (Chất lượng & Dữ liệu)                            |
|  [6] Engineering Quality & DX   (ESLint, Prettier, Husky)             |
|  [5] Testing Architecture       (Vitest, Playwright, MSW)             |
|  [4] State & Data Layer         (TanStack Query, Zustand, Zod)        |
|  [3] UI & Styling System        (React, Tailwind CSS, Shadcn UI)      |
|  [2] Build & Bundling           (Vite, SWC, Rolldown)                 |
|  [1] Language Foundation        (TypeScript, JavaScript)              |
+-----------------------------------------------------------------------+
```

---

## Chi Tiết Các Tầng Phân Loại

### 1. Language Foundation (Ngôn ngữ nền tảng)
* **Công nghệ:** TypeScript, JavaScript (ESNext).
* **Mô tả:** Quy định ngữ pháp, quy tắc kiểu dữ liệu (Type System) và logic nền tảng ở mức thấp nhất.

### 2. Build & Bundling Infrastructure (Hạ tầng Biên dịch & Đóng gói)
* **Công nghệ:** Vite, Webpack, SWC, Rolldown, ESBuild.
* **Mô tả:** Biên dịch mã nguồn, xử lý Hot Module Replacement (HMR) khi dev, tối ưu và đóng gói tĩnh (bundle) khi đưa lên Production.

### 3. UI & Styling System (Hệ thống Giao diện & Hiển thị)
* **Công nghệ:** React, Vue, Tailwind CSS, CSS Modules, Radix UI.
* **Mô tả:** Định nghĩa mô hình component, quản lý render giao diện, bố cục (layout) và ngôn ngữ thiết kế (Design System).

### 4. State & Data Layer (Tầng Quản lý Dữ liệu & Trạng thái)
* **Công nghệ:** TanStack Query (React Query), Zustand, Redux Toolkit, React Hook Form, Zod.
* **Mô tả:** Quản lý vòng đời dữ liệu từ Server (caching, revalidating), trạng thái ứng dụng ở Client và xác thực dữ liệu đầu vào (Validation).

### 5. Testing Architecture (Kiểm thử Cấu trúc)
* **Công nghệ:** Vitest, React Testing Library, Playwright, MSW.
* **Mô tả:** Đảm bảo độ tin cậy của mã nguồn thông qua Unit test, Integration test, End-to-End (E2E) test và API Mocking.

### 6. Engineering Quality & DX (Chất lượng Mã nguồn & Trải nghiệm Dev)
* **Công nghệ:** ESLint, Prettier, Biome, Husky, lint-staged.
* **Mô tả:** Chuẩn hóa quy cách viết code, tự động kiểm tra lỗi cú pháp và ngăn chặn code không đạt chuẩn commit vào repository.

### 7. Runtime & Platform (Môi trường Thực thi)
* **Công nghệ:** Browser Engines (V8, WebKit), Node.js, Bun.
* **Mô tả:** Môi trường phần mềm trực tiếp chạy mã JavaScript và cung cấp các Web/System API.

### 8. Observability & Analytics (Giám sát & Phân tích)
* **Công nghệ:** Sentry, LogRocket, PostHog, Google Analytics 4.
* **Mô tả:** Theo dõi lỗi thời gian thực (Crash reporting), hiệu năng ứng dụng (RUM) và hành vi người dùng trên Production.

### 9. Infrastructure & Delivery (Hạ tầng Phân phối & Triển khai)
* **Công nghệ:** Vercel, Cloudflare Pages, AWS S3/CloudFront, GitHub Actions.
* **Mô tả:** Tự động hóa luồng CI/CD, phân phối tài nguyên tĩnh qua mạng CDN toàn cầu và lưu trữ ứng dụng.

---

## Bảng Ánh Xạ Nhanh (Quick Mapping)

| Công nghệ | Tầng phân loại | Vai trò ngắn gọn |
| :--- | :--- | :--- |
| **TypeScript** | 1. Language | Kiểm soát kiểu & ngữ pháp |
| **Vite** | 2. Build & Bundling | Biên dịch & đóng gói |
| **React + Tailwind** | 3. UI & Styling | Dựng giao diện & styling |
| **TanStack Query** | 4. State & Data | Đồng bộ & cache API |
| **Vitest + Playwright** | 5. Testing | Kiểm thử tự động |
| **ESLint + Husky** | 6. Quality & DX | Bắt lỗi code & chuẩn hóa |
| **Browser** | 7. Runtime | Môi trường thực thi code |
| **Sentry** | 8. Observability | Báo lỗi khi ứng dụng crash |
| **Vercel / GitHub Actions** | 9. Infrastructure | CI/CD & CDN phân phối |