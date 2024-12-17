const nodemailer = require("nodemailer");

class EmailService {
  async send(emailData) {
    const { to, subject, link } = emailData;

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
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Xác nhận Email</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            color: #333;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: #f4f4f4;
          }
          .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
            overflow: hidden;
            border: 1px solid #7B68EE;
          }
          .header {
            background: linear-gradient(to right, #9370DB, #7B68EE, #6A5ACD, #E6E6FA);
            color: #ffffff;
            padding: 15px; 
            text-align: center;
          }
          .header h1 {
            margin-bottom: 0;
            color: #ffffff;
            font-size: 1.5rem; 
          }
          .content {
            padding: 30px;
          }
          .lead {
            font-size: 1.2rem;
            margin-bottom: 20px;
          }
          p{color: black}
          .highlight {
            color: #e0a800;
            font-weight: bold;
          }
          .button {
            display: inline-block;
            padding: 15px 30px;
            background: linear-gradient(to right, #9370DB, #7B68EE, #6A5ACD);
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: background 0.3s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .button:hover {
            background: linear-gradient(to right, #6A5ACD, #7B68EE, #9370DB);
          }
          .button .icon {
            margin-right: 10px;
          }
          .footer {
            background: linear-gradient(to right, #696969, #808080, #A9A9A9);
            color: #ffffff;
            padding: 20px;
            text-align: center;
            font-size: 0.9rem;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1><i class="fas fa-envelope-open-text icon"></i> ${subject}</h1>
          </div>
          <div class="content">
            <div class="row">
              <div class="col-md-12 text-center">
                <p class="lead">Xin chào <span class="highlight">${to}</span>!</p>
                <p>Cảm ơn bạn đã đăng ký tài khoản tại <span class="highlight">[https://qllh.netlify.app/]</span>.</p>
                <p>Để hoàn tất quá trình đăng ký, vui lòng xác nhận địa chỉ email của bạn bằng cách nhấp vào nút bên dưới:</p>
                <a href="${link}" class="button" style="color: #ffffff;">
                  <i class="fas fa-check-circle icon"></i> Xác nhận Email
                </a>
                <p>Nếu bạn gặp bất kỳ vấn đề nào, vui lòng liên hệ với chúng tôi tại
                  <a href="mailto:anlp.sep19@gmail.com" style="color: #333; text-decoration: underline;">anlp.sep19@gmail.com</a>.
                </p>
                <p>Địa chỉ: Cầu Giấy - Hà Nội<br>SĐT: 0398653926<br>Email: anlp.sep19@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="footer">
            <h4>&copy; 2024 [anlp-dev]. Bản quyền thuộc về anlp.</h4>
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
