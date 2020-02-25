const api = require('./utils/api');
const generateMarkdown = require('./utils/generateMarkdown');
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
    fs.writeFile(fileName, data + '\n', 'utf8',
        // callback function
        function (err) {
            if (err) throw err;
            // if no error
            console.log("Data is appended to file successfully.")
        });
}

// function addToFile(answers) {
//     writeToFile("README2.md", answers.title);
//     writeToFile("README2.md", answers.desctiption);
//     writeToFile("README2.md", answers.installation);
//     writeToFile("README2.md", answers.usage);
//     writeToFile("README2.md", answers.licenses);
//     writeToFile("README2.md", answers.contributing);
//     writeToFile("README2.md", answers.testing);
// }



function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log("inside inquirer");
            console.log(answers)
            api.getUser(answers.username).then(function (res) {
                // console.log(res.data.email);
                const emailAddress = res.data.email
                // console.log(res.data.avatar_url);
                const profilePicUrl = res.data.avatar_url
                console.log(emailAddress);
                console.log(profilePicUrl);
                console.log(res.data)


                let content = generateMarkdown(answers, res.data);
                writeToFile("README.md", content);
            })
                .catch((err) => {
                    console.log(err)
                    throw err;
                });

        })
        .catch((err) => {
            console.log(err)
            throw err;
        });

}
init();




