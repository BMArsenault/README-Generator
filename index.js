const fs = require('fs');
// const generatePage = require('./readme-template');
const inquirer = require('inquirer');

// Create questions for user

const promptUser = () => {
  inquirer.prompt([
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
      name: 'title',
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
  ])
  .then(answers => {
    userInput(answers);
  });
};


const userInput = ({
  email,
  link,
  title,
  description,
  installation,
  usage,
  license,
  contributing,
  test,
}) => {
  const templateData = `
    # ${title}

    ## Description
    ${description}

    ## Table of Contents
    - [Installation](##installation)
    - [Usage](##usage)
    - [License](##license)
    - [Contributing](##contributing)
    - [Tests](##tests)
    - [Questions](##questions)

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## License
    ${license}

    ## Contributing
    ${contributing}

    ## Tests
    ${test}

    ## Questions
    
    If you have any questions, please feel free to send me an email with additional questions:  ${email}

    Github Link: ${'https://www.github.com/' + link}
    `;
  // TODO: Create a function to write README file
  fs.writeFile("README.md", templateData, err => {
    if (err) throw new Error(err);
      console.log('Readme created!  Check out readme.md in this directory to see it!');
  });
};


promptUser();
// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
