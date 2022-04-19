// const inquirer = require('inquirer');
// const fs = require('fs');
// const Employee = require('./lib/Employee');

// const internInit = () => {
//     inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'name',
//                 message: 'Enter the intern name',
//             },
//             {
//                 type: 'input',
//                 name: 'id',
//                 message: 'Enter the intern employee ID',
//             },
//             {
//                 type: 'input',
//                 name: 'email',
//                 message: 'Enter the intern email address',
//             },
//             {
//                 type: 'input',
//                 name: 'office',
//                 message: 'Enter the intern office number',
//             },
//         ])
//         .then(res => {
//             console.log(res);
//             const myIntern = new Employee(
//                 res.name, 
//                 res.id, 
//                 res.email, 
//                 res.office
//             );
//             console.log(myIntern);
//             // instantiate a new object and pass in the values from the user 
//             myIntern.sayEmployeeValues();

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

// internInit();