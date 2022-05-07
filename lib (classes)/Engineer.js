// engineer, intern, manager are ALL employees
const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // using activity 23 as a reference
    // this will take care of the name,id,email from the employee class so that there's not a lot of repeat in code
    super(name, id, email);

    this.github = github;
  }

  // using Jung's office hours lesson as a reference
  sayEngineerValues = function () {
    console.log(
      `Your engineer's properties are: \n
            ${this.name} \n
            ${this.id} \n
            ${this.email} \n
            ${this.github} \n`
    );
  };

  createEngineer = function () {
    console.log('The Engineer has been created');
  };

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
