const apiDoc = require('./utils/api');
const generateMarkdownDoc = require('./utils/generateMarkdown');
const inquirer = require("inquirer");
const fs = require('fs');

const questions = [
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "username"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Add a project description:",
        name: "description"
    },
    {
        type: "input",
        message: "What must be installed?",
        name: "installation"
    },
    {
        type: "input",
        message: "Please state usage:",
        name: "usage"
    },
    {
        type: "input",
        message: "Please list licenses:",
        name: "licenses"
    },
    {
        type: "input",
        message: "Who will be contributing?",
        name: "contributing"
    },
    {
        type: "input",
        message: "What types of testing will be used?",
        name: "testing"
    },
];


function writeToFile(fileName, data) {
    fs.appendFile(fileName, data + '\n', 'utf8',
        // callback function
        function (err) {
            if (err) throw err;
            // if no error
            console.log("Data is appended to file successfully.")
        });
}

// function addToFile() {
//     writeToFile("README2.md", questions.title);
//     writeToFile("README2.md", questions.desctiption);
//     writeToFile("README2.md", questions.installation);
//     writeToFile("README2.md", questions.usage);
//     writeToFile("README2.md", questions.licenses);
//     writeToFile("README2.md", questions.contributing);
//     writeToFile("README2.md", questions.testing);
// }



function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log("inside inquirer");
            apiDoc.getUser(answers).then(({ data }) => {
                console.log(data);
            });
        });

}
init();


