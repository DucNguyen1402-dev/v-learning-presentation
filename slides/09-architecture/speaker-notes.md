...Về **Luồng khởi tạo và hoạt động của ứng dụng**.

Nếu nhìn dưới dạng một mô hình tổng thể, ứng dụng được tổ chức thành nhiều tầng, với luồng đi từ trên xuống dưới.

Luồng bắt đầu từ **điểm khởi tạo ứng dụng** là **main**.Từ đó, ứng dụng đi vào **App** và được bọc bởi **AppProvider**, với **AppProvider** đóng vai trò tập hợp tất cả các **Context Provider** dùng chung **(loading, toast, modal, current user,...)** để cung cấp các trạng thái toàn cục cho ứng dụng."

Từ đây, luồng đi vào **AppRoutes** và sau đó chia thành hai nhánh chính là **Client Route Tree** và **Admin Route Tree**. Mỗi nhánh đều có **Guard** để kiểm tra quyền truy cập trước khi đưa người dùng vào **Client Layout** hoặc **Admin Layout** tương ứng.

Bên dưới các layout là các **domain module**, được phân chia theo từng nhóm chức năng của hệ thống. Ví dự như Ở nhánh **client** có các nhóm như **đăng ký, đăng nhập, quản lý khóa học cá nhân**; còn ở **admin** là các nhóm như **quản lý khóa học, quản lý người dùng cùng một số chức năng khác**.

Các modules này tập trung xử lý phần giao diện và logic của từng domain, đồng thời sử dụng lại những thành phần và chức năng chung từ **Shared Layer**.

Về **Shared Layer** thì đây là tầng dùng chung cho toàn bộ hệ thống, gồm các nhóm như **API Client, UI, session, storage, current user, cùng nhiều nhóm dùng chung khác**. Đặc biệt, trong đó **API Client** chịu trách nhiệm giao tiếp với phía **server**.

Như vậy, có thể hình dung lại một cách tổng thể luồng khởi tạo và hoạt động của ứng dụng như sau: **bắt đầu khởi tạo ứng dụng, rồi đến quản lý state và context dùng chung, sau đó phân luồng và kiểm tra quyền, tiếp đến là layout, rồi xử lý theo từng domain, và cuối cùng là sử dụng các thành phần dùng chung và giao tiếp với server**.

Như vậy, em vừa trình bày xong phần **Luồng khởi tạo và hoạt động**, đồng thời cũng kết thúc phần nội dung lớn thứ hai về **tổng quan kỹ thuật** của ứng dụng.

**[bấm chuyển slide]**
