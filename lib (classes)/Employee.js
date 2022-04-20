class Employee {
    // take in properties of the employee
    // constructor is a function
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
}
    module.exports = Employee;

    // sayEmployeeValues = function() {
    //     console.log(
    //         `Your employee's properties are: \n
    //         ${this.name} \n
    //         ${this.id} \n
    //         ${this.email} \n
    //         ${this.username} \n`
    //     );
    // };

    // createEmployee = function() {
    //     console.log('The employee has been created');
    // };

    // class getRole extends Employee {
    //     return Employee;
    // }


