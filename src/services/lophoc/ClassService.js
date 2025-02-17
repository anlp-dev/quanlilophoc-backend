const Classes = require("../../models/class/Class");

class ClassService{
  async getAllClass(){
    try {
      const res = await Classes.find({});
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getClassByTeacherId(id){
    try {
      const res = await Classes.find({teacherId: id}).populate('teacherId');
      return res;
    } catch (error) {                           
      throw new Error(error);
    }
  }

  async addClass(classReq){
    try {
      console.log(classReq, 123)
      if(!classReq.code || !classReq.khoi || !classReq.className){
        throw new Error('Dữ liệu không hợp lệ !!!');
      }
      const checkClassesCode = await Classes.findOne({ma: classReq.code});
       if(checkClassesCode){
         throw new Error('Mã lớp học đã tồn tại !!!')
       }
       const classes = {
         ma: classReq.code,
         khoi: classReq.khoi,
         name: classReq.className,
         teacherId: classReq.teacherId,
       }
       const classSave = new Classes(classes);
       await classSave.save();
      // const res_data = await Class.create(classes);
      //  return res_data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async addManyClass(classReq){
    try {
      const res_data = await Classes.insertMany(classReq);
      return res_data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateClassById(classReq){
    try {
      const checkClassesCode = await Classes.findOne({ma: classReq.code});
      if(checkClassesCode){
        throw new Error('Mã lớp học đã tồn tại !!!')
      }
      const classDataUpdate = {
        ma: classReq.code,
        khoi: classReq.khoi,
        name: classReq.className
      }
      await Classes.findByIdAndUpdate(classReq._id, classDataUpdate);
      const res_data = await Classes.find({});
      return res_data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async removeClassById(idReq){
    try{
      if(!idReq){
        throw new Error("Lỗi khi xóa !!!")
      }
      await Classes.findByIdAndDelete(idReq);
      const res_data = await Classes.find({});
      return res_data;
    }catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = new ClassService();

