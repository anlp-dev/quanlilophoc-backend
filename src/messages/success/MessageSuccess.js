class MessageSuccess{
  constructor(status, message){
    this.status = status;
    this.message = message;
  }
}

const Success = {
  CREATE_SUCCESS: new MessageSuccess(201, 'Create success.'),
  UPDATE_SUCCESS: new MessageSuccess(200, 'Update success.'),
  DELETE_SUCCESS: new MessageSuccess(202, 'Delete success.'),
  GET_DATA: new MessageSuccess(200, 'Get data success.'),
}

module.exports = Success;
