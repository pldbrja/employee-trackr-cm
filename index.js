const mysql = require('mysql2');
const conTable = require('console.table');
const inquirer = require('inquirer');


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

    function view(category) {
        const selection = category.split(' ').pop();

        console.info(selection);

    //     if (selection === 'Employees') {
    //         console.log('')
    //     } else if (selection === 'Roles') {

    //     } else if (selection === 'Departments') {

    //     } else {
    //         console.info("Sorry that's not a selection")
    //     }
    }

    inquirer
        .prompt(
            indexQuestions
        )
        .then((answers) => {
            if (answers.index === 'View All Employees' || 'View All Roles' || 'View All Departments') {
                view(answers.index)
            } else if (answers.index === 'Add Employee' || 'Add Role' || 'Add Department') {
                IDK
            }
        })


    // Copy and paste for the inquirer prompts so less typing.
    //{
    //    type: '',
    //    message: '',
    //    na
}

init();