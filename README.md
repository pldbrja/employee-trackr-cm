# Employee Tracker

## About the Project

The goal of this project was to create use Node.js and MySQL to create a company database. The main priority of this project was to use Inquirer.js to create a navigation in order to view and add to the roles, employees, and departments in the database. It also features MySQL2, which allows the user upon selection and input to trigger prepared MySQL queries.

This project is not fully complete, but has accomplished the basics of allowing for the user to submit new roles, departments, and employees. In the future, the Manager features and the ability to go more in depth than just the basic options is planned to be tested.

## Features

Using Inquirer, there are the main options of Viewing, Adding, and Editing the current database. Each choice will branch off to a function that handles the queries, viewing will show the basic table of the selected option. Adding will create a new entry to the tables, and Edit will update the specific role of an employee.

Due to issues with the code, hitting CTRL + C, or the general exit command on the user's computer, is the only way to exit the broken loop function that will be fixed in the future.

## How to Run

```
node index.js
```

## Tools

* MySQL
* Node.js
* Inquirer.js
* console.table
* MySQL2
* dotenv

## Documentation
