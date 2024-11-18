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
  REGISTER_SUCCESS: new MessageSuccess(201, 'Register success.'),
  LOGIN_SUCCESS: new MessageSuccess(200, 'Login success.'),
  LOGOUT_SUCCESS: new MessageSuccess(200, 'Logout success.'),
  LOAD_ID_BY_TOKEN: new MessageSuccess(200, 'Load id by token success.'),
  GET_CLASS: new MessageSuccess(202, "Get all class success"),
  ADD_CLASS: new MessageSuccess(202, "Create class success"),
  GET_ROLE: new MessageSuccess(203, "Get role success"),
}

module.exports = Success;
