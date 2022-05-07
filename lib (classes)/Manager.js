// engineer, intern, manager are ALL employees
const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // using activity 23 as a reference
    // this will take care of the name,id,email from the employee class so that there's not a lot of repeat in code
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  // using Jung's office hours lesson as a reference
  sayManagerValues = function () {
    console.log(
      `Your manager's properties are: \n
            ${this.name} \n
            ${this.id} \n
            ${this.email} \n
            ${this.officeNumber} \n`
    );
  };

  createManager = function () {
    console.log('The Manager has been created');
  };

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;
