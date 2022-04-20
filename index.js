// SHOUT OUT TO MY INSTRUCTOR JUNG. The office hours he had was a really big help in getting my to finish this homework lol thank you :) 

// calling in all my files & npms that I will need for this hw.
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

// if user wants to go again this must be called
// using Jung's office hours lesson as a reference
const goAgain = () => {
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
}

// the prompts the user will come across when making a Manager 
const createManager = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'nameManager',
                message: 'Enter the team manager name',
            },
            {
                type: 'input',
                name: 'idManager',
                message: 'Enter the team manager employee ID',
            },
            {
                type: 'input',
                name: 'emailManager',
                message: 'Enter the team manager email address',
            },
            {
                type: 'input',
                name: 'usernameManager',
                message: 'Enter the team manager office number',
            },
        ])
        .then(res => {
            console.log(res);
            const myManager = new Manager(
                res.name, 
                res.id, 
                res.email, 
                res.officeNumber
            );
            console.log(myManager);
            // instantiate a new object and pass in the values from the user 
            myManager.sayManagerValues();

        });
}

// the prompts the user will come across when making an Engineer 
const createEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'nameEngineer',
                message: 'Enter the engineer name',
            },
            {
                type: 'input',
                name: 'idEngineer',
                message: 'Enter the engineer employee ID',
            },
            {
                type: 'input',
                name: 'emailEngineer',
                message: 'Enter the engineer email address',
            },
            {
                type: 'input',
                name: 'githubEngineer',
                message: 'Enter the engineer github username',
            },
        ])
        .then(res => {
            console.log(res);
            const myEngineer= new Engineer(
                res.name, 
                res.id, 
                res.email, 
                res.github
            );
            console.log(myEngineer);
            // instantiate a new object and pass in the values from the user 
            myEngineer.sayEngineerValues();

        });
}

// the prompts the user will come across when making an Intern 
const createIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'nameIntern',
                message: 'Enter the intern name',
            },
            {
                type: 'input',
                name: 'idIntern',
                message: 'Enter the intern employee ID',
            },
            {
                type: 'input',
                name: 'emailIntern',
                message: 'Enter the intern email address',
            },
            {
                type: 'input',
                name: 'schoolIntern',
                message: 'Enter the intern school',
            },
        ])
        .then(res => {
            console.log(res);
            const myIntern = new Intern(
                res.name, 
                res.id, 
                res.email, 
                res.school
            );
            console.log(myIntern);
            // instantiate a new object and pass in the values from the user 
            myIntern.sayInternValues();

        });
}
