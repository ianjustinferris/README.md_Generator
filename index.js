// npm inquirer package is required for this application. 

var inquirer = require('inquirer');

var fs = require('fs');

const questions = [
{
    type: 'input',
    name: 'projectTitle',
    message: 'What is the title of your new project?'
},

{
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project.'
},

{
    type: 'input',
    name: 'installation',
    message: 'Provide a description for the installation of your project.'
},

{
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.'
},

{
    type: 'input',
    name: 'screenShot',
    message: 'Input the relative path of your screenshot/s.'
},

{
    type: 'input',
    name: 'credits',
    message: 'Who would you like to credit for this project? (Enter name and Github profile)'
},

{
    type: 'list',
    name: 'license',
  message: 'Select the license you would like to use.',
  choices: ['None','Apache License 2.0','GNU General Public License v3.0','MIT License','BSD 2-Clause "Simplified" License','BSD 3-Clause "NEW" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v3.0']
},

{
    type: 'input',
    name: 'questions',
    message: 'Enter your email.'
}
 
];


inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error)
    } else {
      return;
    }
  });


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None') {
    return ''
  } else if (license == 'Apache License 2.0'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license == 'GNU General Public License v3.0'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license == 'MIT License'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license == 'BSD 2-Clause "Simplified" License'){
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  } else if (license == 'BSD 3-Clause "NEW" License'){
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license == 'Boost Software License 1.0'){
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (license == 'Creative Commons Zero v1.0 Universal'){
    return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
  } else if (license == 'Eclipse Public License 2.0'){
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  } else if (license == 'GNU Affero General Public License v3.0'){
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  } else if (license == 'GNU General Public License v2.0'){
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  } else if (license == 'GNU Lesser General Public License v2.1'){
    return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();
