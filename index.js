const mysql = require('mysql2');
const conTable = require('console.table');
const inquirer = require('inquirer');
const view = require('./utils/views');
//const add = require('./utils/add');
//const edit = require('./utils/edit');


// const db = mysql.createConnection(
//     {
//       host: 'localhost',
//       user: 'root',
//       database: 'company_db'
//     },
//     console.log(`Connected to the Employee Database, welcome.`)
// );

function init() {
    const indexQuestions = [
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'index',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
        }
    ];

    inquirer
        .prompt(
            indexQuestions
        )
        .then((answers) => {

            switch(answers.index) {
                case "View All Employees":
                case "View All Roles":
                case "View All Departments":
                    view(answers.index);
                    break;

                case "Add Employee":
                case "Add Role":
                case "Add Department":
                    console.log(answers.index);
                    break;

                case "Update Employee Role":
                    console.log(answers.index);
                    break;

                case "Quit":
                    console.log(answers.index);
                    console.log('Goodbye.')
                    break;
            }
        })


    // Copy and paste for the inquirer prompts so less typing.
    //{
    //    type: '',
    //    message: '',
    //    na
}

init();