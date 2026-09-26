Bắt đầu với **user flow**, trên màn hình là sơ đồ mô tả tổng quan luồng sử dụng của phía user. Vì phần này em đã trình bày ở phần trước, nên ở đây em sẽ không đi lại chi tiết mà chỉ sơ đồ hóa lại luồng để mọi người có cái nhìn tổng quan trước khi vào demo trực tiếp.

Và sau đây là phần **demo user flow**.

em sẽ bắt đầu với phần **đăng ký**, trong vai một người dùng mới em sẽ tạo tài khoản học viên với thông tin yêu cầu:
**[nhập thông tin]**
và sau đó thì bấm đăng ký:
**[bấm đăng ký]**
sau khi đăng ký xong thì em đang được chuyển đến phần login, tại đây em sẽ nhập tài khoản vừa đăng ký
**[nhập thông tin]**
và bấm đăng nhập,
**[bấm đăng nhập]**
sau khi đăng nhập thành công thì em được điều hướng về Home, tại đây em qua xem danh sách khóa học cá nhân trước
**[bấm nav sang khóa học của tôi]**
Hiện tại thì danh sách khóa học đang trống nên em sẽ bấm vào khám phá khóa học,
**[bấm vào nút khám phá khóa học]**
lúc này em được điều hướng đến trang danh sách, tại đây em bấm chọn xem chi tiết một khóa học bất kì:
**[bấm xem chi tiết khóa học X]**
Tại trang chi tiết chứa **thông tin mô tả và cả giá khóa học,** lúc này nếu thấy phù hợp thì em sẽ chọn **đăng ký khóa học**
**[bấm đăng ký]**
Em sẽ được chuyển hướng đến **trang thanh toán giả lập,** có **thông tin tài khoản đăng ký, phương thức thanh toán và tóm tắt đăng ký**, lúc này em bấm **xác nhận thanh toán**:
**[bấm xác nhận thanh toán]**
nếu đăng ký và thanh toán thành công sẽ được chuyển về trang **khóa học cá nhân**, tại đây sẽ hiện ra khóa học mới thêm vào, em vào xem chi tiết khóa học:
**[bấm xem chi tiết khóa học]**
Tại trang chi tiết thì bao gồm thông tin khóa học, tiến độ và danh sách bài học, tại đây học viên có 2 lựa chọn khác:

- tiếp tục học với danh sách bài học : **[bấm vào bài học bất kì]**, hiện tại tính năng này chưa triển khai **[bấm back]**
- hoặc hủy ghi danh khóa học : **[bấm hủy ghi danh]**, Sau khi hủy ghi danh, khóa học sẽ được xóa khỏi danh sách khóa học cá nhân.

và đó là toàn bộ flow chính của một user ở phía client.

**[bấm Chuyển slide]**
