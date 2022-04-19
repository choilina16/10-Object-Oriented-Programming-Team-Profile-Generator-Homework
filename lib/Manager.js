const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');

const init = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the team manager name',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter the team manager employee ID',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter the team manager email address',
            },
            {
                type: 'input',
                name: 'username',
                message: 'Enter the team manager office number',
            },
        ])
        .then(res => {
            console.log(res);
            const myManager = new Employee(
                res.name, 
                res.id, 
                res.email, 
                res.username
            );
            console.log(myManager);
            // instantiate a new object and pass in the values from the user 
            myManager.sayEmployeeValues();

            inquirer
                .prompt([
                {
                    type: 'confirm',
                    name: 'goManagerAgain',
                    message: 'Do you want to add a new manager?'
                }
            ])
            .then(confirm => {
                if(confirm.goManagerAgain) {
                    init();
                } else {
                    process.exit();
                }
            });
        });
};

init();