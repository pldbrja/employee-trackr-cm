const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./connection')

function add(category) {
    console.log("Add?")

    db.execute('', function (err,result) {
        console.log(result)
    })
}

module.exports = add;