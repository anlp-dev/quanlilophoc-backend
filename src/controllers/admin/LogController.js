const {LogService} = require("../../services/Admin/LogService");
const {resExport} = require("../../enums/resExport")
const MESSAGE = require("../../messages/message")
const RequestLog = require("../../models/admin/Log");
class LogController {
  async getLog(req, res) {
    try {
      const result = await LogService();
      if(result){
        resExport(MESSAGE.SUCCESS.status, MESSAGE.SUCCESS.message, result, res);
      }else{
        resExport(MESSAGE.FAIL.status, MESSAGE.FAIL.message, result, res);
      }
    } catch (error) {
      resExport(MESSAGE.ERROR.status, MESSAGE.ERROR.message, res);
    }
  }

  async saveLog(req, res){
    try{
      const { timestamp, ip, location, hostname, user, endpoint, method } = req.body;

      const log = new RequestLog({
        timestamp: new Date(timestamp),
        ip,
        location,
        hostname,
        user,
        endpoint,
        method,
      });
      await log.save();
      resExport(MESSAGE.SUCCESS.status, MESSAGE.SUCCESS.message, res);
    }catch (e) {
      resExport(MESSAGE.ERROR.status, MESSAGE.ERROR.message, res);
    }
  }
}

module.exports = new LogController();

