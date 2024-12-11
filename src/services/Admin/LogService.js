const RequestLog = require("../../models/admin/Log");

const LogService = async () => {
  try {
    const results = await RequestLog.aggregate([
      {
        $project: {
          hour: { $hour: "$timestamp" },
          day: { $dayOfMonth: "$timestamp" },
          month: { $month: "$timestamp" },
          year: { $year: "$timestamp" },
        },
      },
      {
        $group: {
          _id: { year: "$year", month: "$month", day: "$day", hour: "$hour" }, // Nhóm theo giờ
          count: { $sum: 1 }, // Đếm số lượng request trong mỗi nhóm thời gian
        },
      },
      {
        $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1, "_id.hour": 1 }, // Sắp xếp theo thời gian
      },
    ]);
    return results;
  } catch (err) {
    console.error("Error saving log:", err);
  }
};

module.exports = { LogService };
