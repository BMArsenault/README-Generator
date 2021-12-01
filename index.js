const fs = require('fs');
const generatePage = required('./readme-template.js');
const inquirer = require('inquirer');


// Create questions for user

const questions = [
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address. (Required)',
  },
  {
    type: 'input',
    name: 'link',
    message: 'Please provide a link to your Github project. (Required)',
  },
  {
    type: 'input',
    name: 'project',
    message: 'What is the name of your project? (Required)',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please give a brief description of the project. (Required)',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide commands for installations on this project. (Required)',
  },
      // {
      //   type: 'checkbox',
      //   name: 'languages',
      //   message: 'What did you build this project with? (Check all that apply)',
      //   choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      // },
  {
    type: 'input',
    name: 'usage',
    message: 'Please describe the usage for this project. (Required)',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Please list any licenses needed for this project. (Required)',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please explain how others could contribute on this project. (Required)',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please provide tests for this project. (Required)',
  },
]

promptUser()
.then(promptReadme)

// TODO: Create a function to write README file
fs.writeFile('./README.md', data, err => {
  if (err) throw new Error(err);
  console.log('Readme created!  Check out readme.md in this directory to see it!');
});

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
