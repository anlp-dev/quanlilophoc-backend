const {getPermissionsForUser} = require('../database/db')

function checkPermission(permission){
  return async function (req, res, next) {
    try {
      console.log('account:  ', req.account.userId)
      const userPermissions = await getPermissionsForUser(req.account.userId);
      if (userPermissions.includes(permission)) {
        next();
      } else {
        res.status(403).json({
          status: 403, 
          message: 'Bạn không có quyền truy cập!!!!'
        });
      }
    } catch (error) {
      console.error('Lỗi kiểm tra quyền:', error);
      res.status(500).send('Lỗi server');
    }
  };
}

module.exports = {checkPermission}
