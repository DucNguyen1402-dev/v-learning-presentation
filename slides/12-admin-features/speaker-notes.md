Và bây giờ em sẽ chuyển sang phần demo **Các chức năng quản trị ở khu vực admin**. Trên màn hình có thể thấy, **Khu vực admin** tập trung quản lý hai nhóm chính là **khóa học** và **người dùng**.

Với tính năng **quản lý khóa học**, tài khoản có quyền có thể thực hiện các thao tác từ **thêm, cập nhật, xóa khóa học**, đến **quản lý và ghi danh học viên**.

- Với tính năng **quản lý người dùng**, tài khoản có quyền có thể thực hiện **thêm, cập nhật, xóa người dùng**, đồng thời **xem danh sách các khóa học đã ghi danh của từng người dùng**.

Do thời gian có hạn nên em sẽ demo nhanh từng tính năng và không đi sâu vào phần giải thích. Trước tiên, em sẽ đăng xuất tài khoản user và chuyển sang tài khoản admin mà em đã tạo trước đó:
**[bấm logout và login với tài khoản admin]**

- Em sẽ bắt đầu ngay với **quản lý khóa học** và thêm một khóa học mới :
  **[Bấm thêm khóa học]**
  Tại đây em sẽ nhập thông tin khóa học cần thêm:

  <!-- Từ giao diện đến hệ thống Frontend
  Hành trình xây dựng Frontend từ giao diện người dùng đến một hệ thống hoàn chỉnh. -->

  **[Nhập thông tin nhanh]**
  và sau đó bấm thêm khóa học:
  **[Bấm thêm khóa học]**

Như vậy đã thêm thành công.
Tiếp theo về thao tác cập nhật, thì em sẽ chọn một khóa học bất kì:
**[Bấm edit khóa học "đăng sau những API" đang bị lỗi tên và chưa có hình ảnh ]**
Tại đây em sẽ cập nhật lại các thông tin cơ bản, và sau đó bấm lưu

 <!-- Đằng sau những API -->

**[Bấm lưu]**
Như vậy đã cập nhật thành công.

Và bây giờ xem sẽ tìm và xóa khóa mình đã tạo trước đó
**[Bấm tìm và xóa Từ giao diện đến hệ thống Frontend]**

Đã xóa thành công.

- Và đó là các thao tác cập nhật cơ bản. Còn bây giờ, em sẽ chuyển sang một thao tác khác là **quản lý ghi danh**. Ở đây, em sẽ chọn khóa học vừa cập nhật trước đó và vào **quản lý ghi danh**.

**[Bấm quản lý khóa học ghi danh của khóa học X]**
Tại đây hiển thị **danh sách học viên đã ghi danh thành công và đang chờ xác thực ghi danh**.

- Với học viên đã ghi danh, em có thể **hủy ghi danh**.
  **[Bấm xóa ghi danh học viên]**
- Với học viên đang chờ xác thực, em có thể **xác thực ghi danh**.
  **[Bấm xác thực]**

Đó là phần **quản lý ghi danh**. Tiếp theo, em sẽ thử thao tác còn lại là **ghi danh học viên** với cùng khóa học này.

**[Bấm chọn ghi danh học viên]**
tại đây có **danh sách tài khoản học viên chưa ghi danh khóa học** ,em chọn một học viên bất kì để ghi danh
**[Bấm chọn ghi danh học viên]**
Giả sử em sẽ tìm tài khoản user mình vừa đăng ký trước đó và ghi danh vào khóa.
lúc này ghi danh thành công và em sẽ qua xem thử phần quản lý ghi danh của khóa:
**[Bấm back và vào phần quản lý ghi danh]**
và tìm tài khoản vừa mới ghi danh
**[gõ tài khoản X]**
Và đấy, **tài khoản ducnguyen** đã xuất hiện trong danh sách ghi danh với trạng thái **ghi danh thành công**.

và vừa rồi cũng là thao tác cuối cùng của tính năng quản lý khóa học. giờ em sẽ chuyển qua **quản lý người dùng**
**[Bấm chọn quản lý người dùng]**

- Ở quản lý người dùng cũng có các thao tác cơ bản như **thêm, sửa, xóa**, em sẽ đi nhanh qua các thao tác này:

* bắt đầu với thêm người dùng, em sẽ nhập các thông tin để thêm người dùng mới là một học viên:
  **[Bấm chọn thên dùng và nhập dữ liệu sau đó bấm thêm]**
  <!-- Đỗ Hoàng Pixel -->
  như vậy đã thêm thành công
* em sẽ cập nhật thông tin người dùng vừa thêm
  **[Bấm chọn sửa thông tin người dùng X và sửa họ tên Pixel -> Đỗ Hoàng Nam]**
  Đã cập nhật thành công, và giờ em thử xóa luôn ngưởi dùng đó.

  như vậy đã xong 3 thao tác cơ bản, giờ đến với thao tác cuối cùng là **xem danh sách khóa học đã ghi danh** ,
  **[bấm xem khóa học người dùng đầu tiên trong list]**
  tại đây có thông tin các khóa học ghi danh bao gồm cả trạng thái **chờ xác thực** và **đã thành công**, tuy nhiên người dùng này thì không có **khóa học chờ xác thực**.
  Em sẽ thử tìm một tài khoản khác...."mothaiba", đây rồi: ở tài khoản này có 2 khóa học trong danh sách với một trạng thái ghi danh thành công, còn một đang chờ xác nhận.
  Bây giờ em thử hủy ghi danh học khóa.
  **[bấm hủy]**
  như vậy đã hủy ghi danh thành công.

  Và đó là tất cả các thao tác với **quản lý người dùng** đồng thời cũng kết thúc phần **demo admin và tính năng quản trị** cũng như phần nội dung **demo cho dự án**.

  **[bấm chuyển slide]**
