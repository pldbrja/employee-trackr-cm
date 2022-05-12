const conTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./connection');

function view(category) {
    const selection = category.split(' ').pop();

    console.info(selection);

    if (selection === 'Employees') {
        db.query('SELECT * FROM role', function (err,result) {
            console.log(result)
        })
    } else if (selection === 'Roles') {
        console.log('You have selected Roles')
    } else {
        console.log('You have selected Departments')
    }
}

module.exports = view;