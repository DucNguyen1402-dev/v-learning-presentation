Với **user flow và giao diện phía Học viên** thì ở đây em có mô phỏng một hành trình sử dụng tương đối đầy đủ của một học viên, với 8 bước và phần bên phải là giao diện tương ứng giúp hình dung rõ hơn.

Trước khi đi vào nội dung chính của phần này, em xin nói rõ một điểm liên quan đến dữ liệu. Đó là dữ liệu khóa học từ API hiện chưa đồng nhất về nội dung, từ tên khóa học đến các thông tin liên quan. Vì vậy, để UI phía User được trực quan và thống nhất hơn, em đã sử dụng mock data cho gần như toàn bộ phần hiển thị. Rất nhiều thông tin vì thế chỉ mang tính minh họa, anh chị có thể bỏ qua khi xem.

Nào giờ quay lại và cùng bắt đầu với bước đầu tiên trong hành trình học viên đó là **“Đăng nhập”**. Ở bước này, học viên sẽ sử dụng tài khoản đã đăng ký trước đó để đăng nhập vào hệ thống.

**[Bấm chuyển flow]**

Sau khi đăng nhập thành công, học viên sẽ được chuyển đến **Trang chủ**, nơi có thể xem tổng quan nội dung và tiếp tục khám phá các khóa học.

**[Bấm chuyển flow]**

Từ trang chủ có thể chuyển sang **“Danh sách khóa học”**, nơi học viên có thể xem các khóa học đang có trên hệ thống và sử dụng chức năng **tìm kiếm, lọc** để tìm khóa học phù hợp.

**[Bấm chuyển flow]**

Từ danh sách này, học viên có thể chọn một khóa học để **xem thông tin chi tiết**, bao gồm nội dung và các thông tin liên quan đến khóa học.

**[Bấm chuyển flow]**

Nếu muốn tham gia khóa học, học viên có thể thực hiện **đăng ký khóa học** trực tiếp từ trang chi tiết.

**[Bấm chuyển flow]**

Khi chọn đăng ký khóa học thì học viên sẽ được chuyển đến trang thanh toán với thông tin tài khoản đăng ký và thông tin thanh toán tương ứng.

**[Bấm chuyển flow]**

Sau khi bấm thanh toán và đăng ký thành công, khóa học sẽ được đưa vào **danh sách khóa học cá nhân**, nơi học viên có thể quản lý các khóa học mình đã đăng ký.
**[Bấm chuyển flow]**

Tại **danh sách khóa học cá nhân**, học viên có thể chọn một khóa học đã đăng ký để xem **chi tiết khóa học**,
bên trong hiển thị **thông tin tổng quan, danh sách bài học và tiến độ học tập**.

Trong phần tổng quan, học viên có thể **chọn bài học mong muốn để bắt đầu học**. Tuy nhiên, do hiện tại chưa có dữ liệu nội dung bài học nên phần triển khai bài học vẫn đang để trống.

Ngoài ra, tại phần tổng quan học viên cũng có thể **yêu cầu hủy đăng ký khóa học** nếu có nhu cầu.

Như vậy, trên đây là flow chính trong trải nghiệm của học viên, từ đăng nhập, khám phá khóa học cho đến quản lý khóa học đã đăng ký.


Phần chức năng còn lại của hệ thống là **quản trị**, em sẽ trình bày tiếp qua **Admin Side và giao diện quản trị**.
