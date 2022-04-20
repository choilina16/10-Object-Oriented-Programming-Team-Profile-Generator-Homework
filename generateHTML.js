const inquirer = require('inqurier');
const fs = require('fs');

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Builder</title>

    <!--Import materialize.css-->
    <!-- USING MATERIALIZE FRAMEWORK!! -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- custom css file -->
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>

    <!-- header/navbar -->
    <div class="navbar-fixed">
        <nav>
        <div class="nav-wrapper">
            <a href="#!" class="brand-logo">Team Builder</a>
        </div>
        </nav>
    </div>

    <!-- Manager -->
    <div class="row">
        <div class="col s12 m6">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
            <span class="card-title">Manager</span>
            <ul>
                <li>Name</li>
                <li>Employee ID</li>
                <li>Email</li>
                <li>Office Number</li>
            </ul>
            </div>
        </div>
        </div>
    </div>

    <!-- Engineer -->
    <div class="row">
    <div class="col s12 m6">
        <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">Engineer</span>
            <ul>
            <li>Name</li>
            <li>Employee ID</li>
            <li>Email</li>
            <li>Github Username</li>
            </ul>
        </div>
        </div>
    </div>
    </div>


    <!-- Intern -->
    <div class="row">
        <div class="col s12 m6">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
            <span class="card-title">Intern</span>
            <ul>
                <li>Name</li>
                <li>Employee ID</li>
                <li>Email</li>
                <li>School</li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    
</body>
</html>`;

.then((answers) => {
    const htmlPageContent = generateHTML(answers);

    // this is actually writing the file. if errors then it will tell you so in console log
    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });