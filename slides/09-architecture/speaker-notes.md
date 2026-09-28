...Về **Luồng khởi tạo và hoạt động của ứng dụng**.

Nếu nhìn dưới dạng một mô hình tổng thể, ứng dụng được tổ chức thành từng tầng, với luồng đi từ trên xuống dưới.

Luồng bắt đầu từ **main**, sau đó đi vào **App** và **AppProvider**. Đây là nơi khởi tạo ứng dụng và quản lý những **state, context dùng chung** như **loading, toast, modal, current user và nhiều context khác**.

Từ đây, luồng đi vào **AppRoutes** và sau đó chia thành hai nhánh chính là **Admin Route Tree** và **Client Route Tree**. Mỗi nhánh đều có **Route Guard** để kiểm tra quyền truy cập trước khi đưa người dùng vào **Admin Layout** hoặc **Client Layout** tương ứng.

Bên dưới các layout là các **domain module**, được tổ chức độc lập theo từng nhóm chức năng như **đăng ký, đăng nhập , quản lý khóa học, quản lý người dùng và nhiều tính năng khác**.
Các modules này tập trung xử lý phần giao diện và logic của từng domain, đồng thời sử dụng lại những thành phần và chức năng chung từ **Shared Layer**.

**Shared Layer** là tầng dùng chung cho toàn bộ hệ thống, gồm các nhóm như **UI, session, storage, API Client cùng nhiều nhóm dùng chung khác**. Đặc biệt, trong đó **API Client** chịu trách nhiệm giao tiếp với **server**.

Như vậy, có thể hình dung tổng thể luồng hoạt động của ứng dụng như sau: **khởi tạo ứng dụng, rồi đến quản lý state dùng chung, sau đó phân luồng và kiểm tra quyền, tiếp đến là layout, rồi xử lý theo từng domain, và cuối cùng là sử dụng các thành phần dùng chung và giao tiếp với server**.

Và như vậy, em vừa trình bày xong phần **kiến trúc và luồng hoạt động**, đồng thời cũng kết thúc phần nội dung lớn thứ hai về **tổng quan kỹ thuật** của ứng dụng.

**[bấm chuyển slide]**
