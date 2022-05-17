const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./connection');
const init = require('../index');

function add(category) {
    const selection = category.split(' ').pop();

    if (selection === 'Employee') {
        inquirer
        .prompt ([
            {
                type: 'input',
                message: "What is the new employee's first name?",
                name: 'first_name',
            },
            {
                type: 'input',
                message: "What is the new employee's last name?",
                name: 'last_name',
            },
            {
                type: 'input',
                message: "What is the new employee's role?",
                name: 'role_name',
            }
        ])
        .then ((answers) => {
            const sql = `INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)`
            const params = [answers.first_name, answers.last_name, answers.role_name];

            db.query(sql, params, function (err,result) {
                console.log('Your employee has been added.')
            })
        })
    } else if (selection === 'Role') {
        inquirer
        .prompt ([
            {
                type: 'input',
                message: "What is the new role's name?",
                name: 'title',
            },
            {
                type: 'input',
                message: "What is the new role's department?",
                name: 'role_department',
            },
            {
                type: 'input',
                message: "What is the new role's salary?",
                name: 'salary',
            }
        ])
        .then ((answers) => {
            const sql = `INSERT INTO role (title, department_id, salary) VALUES (?, ?, ?)`
            const params = [answers.title, answers.role_department, answers.salary];

            db.query(sql, params, function (err,result) {
                console.log('Your role has been added.')
            })
        })
    } else {
        inquirer
        .prompt ([
            {
                type: 'input',
                message: "What is the new department's name?",
                name: 'name',
            }
        ])
        .then ((answers) => {
            const sql = `INSERT INTO department (name) VALUES (?)`
            const params = answers.name;

            db.query(sql, params, function (err,result) {
                console.log('Your department has been added.')
            })
        })
    }
}

module.exports = add;