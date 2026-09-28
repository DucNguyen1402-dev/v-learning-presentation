Tiếp theo, em sẽ trình bày về **Luồng khởi tạo và hoạt động của ứng dụng**.

Như trên màn hình có thể thấy, ứng dụng được tổ chức thành từng tầng, với luồng đi từ trên xuống dưới.

Luồng bắt đầu từ **main**, sau đó đi vào **App** và **AppProvider**. Đây là nơi khởi tạo ứng dụng và quản lý những **state, context dùng chung** như loading, toast, modal và thông tin người dùng.

Từ đây, luồng đi vào **AppRoutes** và được chia thành hai nhánh chính là **Admin Route Tree** và **Client Route Tree**. Mỗi nhánh đều có **Route Guard** để kiểm tra quyền truy cập trước khi đưa người dùng vào **Admin Layout** hoặc **Client Layout** tương ứng.

Bên dưới các layout là các **domain module**, được tổ chức độc lập theo từng nhóm chức năng như quản lý khóa học, quản lý người dùng hay trang cá nhân. Các module này tập trung xử lý phần giao diện và logic của từng domain, đồng thời sử dụng lại những thành phần và chức năng chung từ **Shared Layer**.

Ở tầng dùng chung này có các nhóm như **UI, session, storage** và **API Client**, trong đó API Client chịu trách nhiệm giao tiếp với server.

Như vậy, có thể hình dung tổng thể luồng hoạt động của ứng dụng như sau: **khởi tạo ứng dụng → quản lý state dùng chung → phân luồng và kiểm tra quyền → layout → xử lý theo từng domain → sử dụng các thành phần dùng chung và giao tiếp với server**.

Và như vậy, em vừa trình bày xong phần **kiến trúc và luồng hoạt động**, đồng thời cũng kết thúc **nội dung lớn thứ hai về tổng quan kỹ thuật** của ứng dụng.

**[bấm chuyển slide]**
