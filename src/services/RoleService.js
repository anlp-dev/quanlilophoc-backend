const Role = require("../models/Role");

class RoleService{
  async getRole(){
    try {
      const res_data = await Role.find({name: {$ne: 'admin'}});
      return res_data;
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = new RoleService();
