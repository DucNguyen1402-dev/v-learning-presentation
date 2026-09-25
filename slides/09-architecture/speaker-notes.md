Vừa rồi và về công nghệ nền tảng, và tiếp theo là về kiến trúc và luồng hoạt động trong dự án.

Về **kiến trúc và luồng hoạt động**, ứng dụng được tổ chức theo từng tầng từ trên xuống dưới.

Luồng bắt đầu từ **main**, đi qua **App** và **AppProvider**, nơi quản lý các **state và context dùng chung** như loading, toast, modal và thông tin người dùng.

Sau đó, luồng đi vào **AppRoutes** và được tách thành hai nhánh chính là **Admin Route Tree** và **Client Route Tree**. Mỗi nhánh đều có **Route Guard** để kiểm tra quyền truy cập trước khi render **Admin Layout** hoặc **Client Layout**.

Bên dưới các layout là các **domain modules** độc lập như quản lý khóa học, quản lý người dùng và trang cá nhân. Các module này sử dụng lại những thành phần và chức năng chung từ **Shared Layer**, bao gồm UI, session, storage và **API Client** dùng để giao tiếp với server.
