class Message{
    constructor(status, message){
        this.status = status;
        this.message = message;
    }
}

const MESSAGE = {
    SUCCESS: new Message(200, 'Thành công!!'),
    FAIL: new Message(201, 'Thất bại!!'),
    ERROR: new Message (400, 'Lỗi!!!!!!')
}

module.exports = MESSAGE;
