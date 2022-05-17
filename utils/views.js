const conTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./connection');

function view(category) {
    const selection = category.split(' ').pop();

    if (selection === 'Employees') {
        db.query('SELECT employee.first_name, employee.last_name, role.title AS role, role.salary FROM role JOIN employee ON employee.role_id = role.id GROUP BY employee.id, employee.first_name;', function (err,result) {
            console.log(" ")
            console.table(result)
        })
    } else if (selection === 'Roles') {
        db.query('SELECT role.title AS role, department.name AS department, role.salary FROM department JOIN role ON role.department_id = department.id GROUP BY role.id, role.title;', function (err,result) {
            console.log(" ")
            console.table( result)
        })
    } else {
        db.query('SELECT * FROM department', function (err,result) {
            console.log(" ")
            console.table(result)
        })
    }
}

module.exports = view;