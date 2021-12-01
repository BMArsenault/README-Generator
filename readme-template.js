module.exports = templateData => {
    // change all ${Input} to appropriate
    return `
    # ${project}

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
};