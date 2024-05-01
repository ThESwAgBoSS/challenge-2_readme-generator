// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "Please Enter Your Github username",
    },
    {
        type: "input",
        name: "title",
        message: "Please Enter Your Readme Title",
    },
    {
        type: "input",
        name: "description",
        message: "Please Enter Your Readme Description",
    },
    {
        type: "input",
        name: "installation",
        message: "Please Enter Your Installation Process",
    },
    {
        type: "input",
        name: "usage information",
        message: "Please Enter Your Usage Information",
    },
    {
        type: "input",
        name: "contribution guidelines",
        message: "Please Enter Contribution Guidlines",
    },
    {
        type: "input",
        name: "test instructions",
        message: "Please Enter Test Instructions",
    },
    {
        type: "input",
        name: "email",
        message: "Please Enter Your Github Email",
    },
    {
        type: "input",
        name: "license",
        message: "Please Enter The License You Chose",
        choices: ["MIT","BSD 3","GPL 3", "ISC","Apache 2.0","Unlicense","N/A"],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
