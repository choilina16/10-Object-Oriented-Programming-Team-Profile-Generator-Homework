// const inquirer = require('inquirer');
// const fs = require('fs');
// const Employee = require('./lib/Employee');

// const engineerInit = () => {
//     inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'name',
//                 message: 'Enter the engineer name',
//             },
//             {
//                 type: 'input',
//                 name: 'id',
//                 message: 'Enter the engineer employee ID',
//             },
//             {
//                 type: 'input',
//                 name: 'email',
//                 message: 'Enter the engineer email address',
//             },
//             {
//                 type: 'input',
//                 name: 'office',
//                 message: 'Enter the engineer office number',
//             },
//         ])
//         .then(res => {
//             console.log(res);
//             const myEngineer = new Employee(
//                 res.name, 
//                 res.id, 
//                 res.email, 
//                 res.office
//             );
//             console.log(myEngineer);
//             // instantiate a new object and pass in the values from the user 
//             myEngineer.sayEmployeeValues();

//             inquirer.prompt([
//                 {
//                     type: 'confirm',
//                     name: 'goAgain',
//                     message: 'Do you want to make a new employee?'
//                 }
//             ]).then(confirm => {
//                 if(confirm.goAgain) {
//                     init();
//                 } else {
//                     process.exit();
//                 }
//             })
//         });
// };

// engineerInit();