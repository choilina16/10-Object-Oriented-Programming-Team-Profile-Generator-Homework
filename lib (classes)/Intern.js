// engineer, intern, manager are ALL employees
const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    // using activity 23 as a reference
    // this will take care of the name,id,email from the employee class so that there's not a lot of repeat in code
    super(name, id, email);

    this.school = school;
  }

  // using Jung's office hours lesson as a reference
  sayInternValues = function () {
    console.log(
      `Your intern's properties are: \n
            ${this.name} \n
            ${this.id} \n
            ${this.email} \n
            ${this.school} \n`
    );
  };

  createIntern = function () {
    console.log('The Intern has been created');
  };

  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;
