const EmailService = require("../../services/system/EmailService");

class EmailController {
  async sendEmail(req, res){
    try {
      const result = await EmailService.send(req.body);
      res.json(result)
    } catch (error) {
      throw new Error(e);
    }
  }
}

module.exports = new EmailController();
