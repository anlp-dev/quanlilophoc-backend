const PassConfig = require('../../models/systems/PassConfigSystem');
class PasswordConfigController {
    async get(req, res){
        try{
            const data = await PassConfig.find({});
            res.status(200).json({
                status: 200,
                message: 'Thành công!!!',
                data: data
            })
        }catch (e) {

        }
    }

    async update(req, res){
        try{
            const data_req = req.body;
            const data = await PassConfig.findByIdAndUpdate(data_req.id, {lengthPass: data_req.lengthPass, specialCharacters:data_req.specialCharacters, numbersCharacters:data_req.numbersCharacters, upperCaseCharacters:data_req.upperCaseCharacters});
            res.status(200).json(data);
        }catch (e) {
            throw new Error(e);
        }
    }

    async add(req, res){
        try{
            const newPassConfig = new PassConfig({
                lengthPass: 8,
                specialCharacters: true,
                numbersCharacters: true,
                upperCaseCharacters: true,
                createdAt: new Date()
            });
            const result = await newPassConfig.save();
            res.status(200).json(result);
        }catch (e) {

        }
    }

    async delete(req, res){
        try{

        }catch (e) {

        }
    }
}

module.exports = new PasswordConfigController();