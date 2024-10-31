class Error{
  constructor(status, message){
    this.status = status;
    this.message = message;
  }
}

const errors = {
  NOT_FOUND_STUDENT_ID: new Error(101, 'Not found student by id.'),
  ERROR_SYSTEM: new Error(505, 'System error.'),
  CREATE_STUDENT_FAIL: new Error(420, 'Create student fail.'),
  NOT_FOUND_STUDENT: new Error(404, 'Not found student.'),
}

module.exports =  errors ;
