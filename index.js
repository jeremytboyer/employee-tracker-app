const inquirer = require("inquirer");
const mysql2 = require("mysql2");
const Table =require('cli-table3')
const connection = mysql2.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "employee_tracker_app_db",
});

function showMainMenu() {
  return inquirer
    .prompt({
      message: "What would you like to do?",
      type: "list",
      name: "main",
      choices: ["View all departments", "View all employees"],
    })
    .then((answer) => {
      if (answer.main === "View all employees") {
        const sql = `SELECT
        employee.id AS id,
        employee.first_name,
        employee.last_name,
        role.title,
        role.salary,
        department.name AS department,
        CONCAT(managers.first_name, " ", managers.last_name) AS manager
        from employee
         JOIN role
         ON role.id  = employee.role_id
         JOIN department 
         ON department.id = role.department_id
         LEFT JOIN employee managers
         ON employee.manager_id = managers.id`;
        connection.query(sql, (err, data) => {
         
            const table = new Table({
                head: ['ID', 'First Name', 'Last Name', 'Title', 'Salary', 'Department', 'Manager'],
                colWidths: [15, 15, 15, 15, 15 ,15],
                wordWrap: true,
              });
      
              data.forEach(row => {
                table.push([row.id, row.first_name, row.last_name, row.title, row.salary, row.department, row.manager]);
              });
      
              console.log(table.toString());
      
              showMainMenu();
        });
      }

    });
}

showMainMenu();
