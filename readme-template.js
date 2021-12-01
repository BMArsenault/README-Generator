module.exports = templateData => {
    // change all ${Input} to appropriate
    return `
    # ${projectInput}

    ## Description
    ${descriptionInput}

    ## Table of Contents
    - [Installation](##installation)
    - [Usage](##usage)
    - [License](##license)
    - [Contributing](##contributing)
    - [Tests](##tests)
    - [Questions](##questions)

    ## Installation
    ${installationInput}

    ## Usage
    ${usageInput}

    ## License


    ## Contributing
    ${contributingInput}

    ## Tests
    ${testInput}

    ## Questions
    
    Github Link: ${'https://www.github.com/' + githubInput}

    If you have any questions, please feel free to send me an email with additional questions:  ${emailInput}
    `;
};