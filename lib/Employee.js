class Employee {
    // take in properties of the employee
    constructor(name, id, email, username) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.username = username;
    }

    sayEmployeeValues = function() {
        console.log(
            `Your employee's properties are: \n
            ${this.name} \n
            ${this.id} \n
            ${this.email} \n
            ${this.username} \n`
        );
    };

    createEmployee = function() {
        console.log('The employee has been created');
    };

    // getName() {
    //     return this.name;
    // }

    // gedId() {
    //     return this.id;
    // }

    // getEmail() {
    //     return this.email;
    // }

    // class getRole extends Employee {
    //     return Employee;
    // }

}

module.exports = Employee;