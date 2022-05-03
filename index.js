// npm inquirer package is required for this application. 

var inquirer = require('inquirer');

var fs = require('fs');

var licenseBadge

var licenseLink

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
    name: 'link',
    message: 'Provide the deployment link.'
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
    console.log(JSON.stringify(answers.license, null, '  '));
    renderLicenseBadge(answers.license)
    console.log(licenseBadge)
    renderLicenseLink(answers.license) 
    console.log(licenseLink)
    fs.writeFile('README.md', generateMarkdown(answers) )
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error)
    } else {
      return;
    }
  });
 
function renderLicenseBadge(license) {
  if (license == 'None') {
    licenseBadge = ''
  } else if (license == 'Apache License 2.0'){
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license == 'GNU General Public License v3.0'){
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license == 'MIT License'){
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license == 'BSD 2-Clause "Simplified" License'){
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  } else if (license == 'BSD 3-Clause "NEW" License'){
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license == 'Boost Software License 1.0'){
    licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (license == 'Creative Commons Zero v1.0 Universal'){
    licenseBadge = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
  } else if (license == 'Eclipse Public License 2.0'){
    licenseBadge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  } else if (license == 'GNU Affero General Public License v3.0'){
    licenseBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  } else if (license == 'GNU General Public License v2.0'){
    licenseBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  } else if (license == 'GNU Lesser General Public License v2.1'){
    licenseBadge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  }
}

function renderLicenseLink(license) {
    if (license == 'None') {
    licenseLink = ''
  } else if (license == 'Apache License 2.0'){
    licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
  } else if (license == 'GNU General Public License v3.0'){
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  } else if (license == 'MIT License'){
    licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (license == 'BSD 2-Clause "Simplified" License'){
    licenseLink = 'https://opensource.org/licenses/BSD-2-Clause'
  } else if (license == 'BSD 3-Clause "NEW" License'){
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause'
  } else if (license == 'Boost Software License 1.0'){
    licenseLink = 'https://www.boost.org/LICENSE_1_0.txt'
  } else if (license == 'Creative Commons Zero v1.0 Universal'){
    licenseLink = 'https://creativecommons.org/publicdomain/zero/1.0/'
  } else if (license == 'Eclipse Public License 2.0'){
    licenseLink = 'https://www.eclipse.org/legal/epl-2.0/'
  } else if (license == 'GNU Affero General Public License v3.0'){
    licenseLink = 'https://www.gnu.org/licenses/agpl-3.0.en.html'
  } else if (license == 'GNU General Public License v2.0'){
    licenseLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.html'
  } else if (license == 'GNU Lesser General Public License v2.1'){
    licenseLink = 'https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html'
  }
}

function generateMarkdown(answers) {`

# ${answers.projectTitle}

## Description

${answers.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#Usage)
- [Deployed Link](#Deployed Link)
- [Interface](#Interface)
- [Credits](#Credits)
- [License](#License)
- [Questions](#Questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Deployed Link

${answers.link}

## Interface

${answers.screenShot}

## Credits

${answers.credits}

## License

${answers.licenseBadge}

${answers.licenseLink}

## Questions

${answers.questions}

`;
}




