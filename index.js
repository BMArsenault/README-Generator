const fs = require('fs');
// const generatePage = require('./readme-template');
const inquirer = require('inquirer');

// Create questions for user

const promptUser = () => {
  inquirer.prompt([
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
      type: 'checkbox',
      name: 'license',
      message: 'Please select the license you would like for this project.',
      choices: ['MIT', 'BSD', 'Apache 2.0', 'IBM']
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
  ])
  .then(answers => {
    userInput(answers);
  });
};

// const getBadge = (license) => {
//   let licenseType = license;
//   let yourLicense = ''
//   if(licenseType === 'MIT') {
//     yourLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
//   } else if (licenseType === 'BSD') {
//     yourLicense = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
//   } else if (licenseType === 'Apache 2.0') {
//     yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
//   } else if (licenseType === 'IBM') {
//     yourLicense = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
//   } else {
//     yourLicense = 'N/A';
//   };
// };


const userInput = ({
  title,
  description,
  installation,
  usage,
  license,
  contributing,
  test,
  email,
  link,
}) => {
  const templateData = `
# ${title}

## Description
${licenseType}
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
  fs.writeFile('./README.md', templateData, "utf8", err => {
    if (err) throw new Error(err);
      console.log('Readme created!  Check out readme.md in this directory to see it!');
  });
};


promptUser();
// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

// badges
// MIT    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

//Apache 2.0  [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

// BSD  [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

// IBM  [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
