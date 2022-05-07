// lib = library
// activity 21 reference

class Employee {
  // take in properties of the employee
  // constructor is a function - defines the class
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // functions so that these can be called elsewhere
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}

// exporting out the file
module.exports = Employee;
