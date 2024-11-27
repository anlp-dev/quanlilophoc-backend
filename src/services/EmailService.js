const nodemailer = require("nodemailer");

class EmailService {
  async send(emailData) {
    const { to, subject, text } = emailData;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "anlphe176714@fpt.edu.vn",
        pass: "yhji pzbc lbjf wvmz",
      },
    });

    const html_text = `
      <!DOCTYPE html>
      <html lang="en">

      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Xác nhận địa chỉ email</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
      </head>

      <body
        style="font-family: 'Arial', sans-serif; background-color: #f4f4f4; color: #333; margin: 0; padding: 0; box-sizing: border-box;">
        <div class="container"
          style="max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15); overflow: hidden;">
          <div class="header" style="background: linear-gradient(to right, #007bff, #0062cc); color: #ffffff; padding: 20px; text-align: center;">
            <h1 style="margin-bottom: 0;"><i class="fas fa-envelope-open-text icon"></i> Xác nhận Email</h1>
          </div>
          <div class="content" style="padding: 30px;">
            <div class="row">
              <div class="col-md-12 text-center">
                <p class="lead" style="font-size: 1.2rem; margin-bottom: 20px;">Xin chào <span class="highlight"
                    style="color: #e0a800; font-weight: bold;">${to}</span>!</p>
                <p>Cảm ơn bạn đã đăng ký tài khoản tại <span class="highlight" style="color: #e0a800; font-weight: bold;">[Tên
                    website/dịch vụ]</span>.</p>
                <p>Để hoàn tất quá trình đăng ký, vui lòng xác nhận địa chỉ email của bạn bằng cách nhấp vào nút bên dưới:</p>
                <a href="${text}" class="button"
                  style="display: inline-block; padding: 15px 30px; background: linear-gradient(to right, #28a745, #218838); color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold; transition: background 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                  <i class="fas fa-check-circle icon" style="margin-right: 10px;"></i> Xác nhận Email
                </a>
                <img src="https://example.com/images/email-confirmation.png" alt="Email Confirmation" class="image img-fluid"
                  style="max-width: 100%; height: auto; margin: 30px 0;">
                <p>Nếu bạn gặp bất kỳ vấn đề nào, vui lòng liên hệ với chúng tôi tại
                  <a href="mailto:support@example.com" style="color: #333; text-decoration: underline;">support@example.com</a>.
                </p>
              </div>
            </div>
          </div>
          <div class="footer" style="background-color: #333; color: #ffffff; padding: 20px; text-align: center;">
            <p>&copy; 2023 [Tên công ty]. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: "anlphe176714@fpt.edu.vn",
      to: to,
      subject: subject,
      html: html_text,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info);
      return {
        status: 200,
        message: "Email đã được gửi!!!",
      };
    } catch (error) {
      console.error("Error sending email:", error);
      return {
        status: 500,
        message: "Lỗi khi gửi email!!!",
      };
    }
  }
}

module.exports = new EmailService();
