const fs = require('fs');
// const generatePage = required('./readme-template.js');
const inquirer = require('inquirer');
const templateData = require('./readme-template.js');


// Create questions for user

const questions = [
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.',
  },
  {
    type: 'input',
    name: 'link',
    message: 'Please provide a link to your Github username.',
  },
  {
    type: 'input',
    name: 'project',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please give a brief description of the project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions.',
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
    message: 'Please provide instructions for project usage.',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Please list any licenses needed for this project.',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'List contributors on this project.',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please provide tests for this project and how to run them.',
  },
]

const promptUser = (questions) => {
  inquirer.prompt(questions)
  .then(answers => {
    promptReadme(answers);
  });
};

// get answers from user questions
// const promptReadme 

// TODO: Create a function to write README file
// fs.writeFile('README.md', templateData, err => {
//   if (err)
//     console.log(err);
//   else {
//     console.log('Readme created!  Check out readme.md in this directory to see it!');
//   }
// });

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

promptUser(questions);
