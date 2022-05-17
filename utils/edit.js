const inquirer = require('inquirer');
const db = require('./connection');
const mysql = require('mysql2');
const init = require('../index');


function edit(category) {
    inquirer
        .prompt ([
            {
                type: 'input',
                message: "What is the employee's first name?",
                name: 'employee_name',
            },
            {
                type: 'input',
                message: "What is the role's ID?",
                name: 'role_id',
            }
        ])
        .then ((answers) => {
            const sql = `UPDATE employee SET role_id = (?) WHERE first_name = (?)`
            const params = [answers.role_id, answers.name];

            console.log('Your employee has been updated.')

            db.query(sql, params, function (err,result) {
                 console.log(result)
            })
        })
}

module.exports = edit;