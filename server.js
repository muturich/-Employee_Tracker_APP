//dependencies required

const mysql= require ('mysql2');
const inquirer = require ('inquirer');
require("console.table");

//mysql connection 

const connection = mysql.createConnection({
    host: 'localhost',

    //your port, if not 3306

    port: 3306,

    //my username
    user: 'root',

    //my password
    password:'University1',
    database: 'employes_db'

});

connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id" + connection.threadID);
    console.log(`
     _____________________ 
    |  _________________  |
    | | EmployeeManager | |
    | |_________________| |
    |___________________| |`
    )
    firstPrompt();
})

//function which prompts the user for what action they should take

function firstPrompt(){
    inquirer
    .prompt({
        type:"list",
        name:"task",
        message: "Would you like to do ?",
        choices:[
            "View Employees",
            "View Employees by Department",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Add Role",
            "END"]

    })
.then (function({ task}){
    switch (task) {
        case "View Employees":
         viewEmployee();
         break;

        case "View Employees by Department":
         viewEmployeeByDepartment();
         break;
        
        case "Add Employee":
         addEmployee();
         break;

        case "Remove Employees":
         removeEmployees();
         break;

        case "Update Employee Role":
         updateEmployeeRole();
         break;
        case "Add Role":
         addRole();
         break;
        case "End":
         connection.end();
         break;
    }
});

}

//view Employees/Read all. SELECT *FROM
 
function viewEmployee (){
    console.log("Viewing employees\n");

    var query = 
    `SELECT e.id, e.first_name, e.last_name,r.title,d.name AS department,r.salary,CONCAT(m.first_name, '',m.last_name)AS manager
    FROM employee e
    LEFT JOIN role r
         ON e.role_id = r.id
    LEFT JOIN department d
    on d.id = r.department_id
    LEFT Join employee m 
        ON m.id = e.manager_id`

    connection.query(query, function (err, res){
        if (err) throw err;

        console.table(res);
        console.log("Employees viewed!\n");

        firstPrompt();
});
}


//"view Employees by Department" / READ by, SELECT * FROM 
//Make a department array

function viewEmployeeByDepartment() {
    console.log("Viewing employees by department\n");

    var query = 
    `SELECT d.id, d.name, r.salary AS budget
    FROM employee e
    LEFT JOIN role r
          ON e.role_id = r.id
    LEFT JOIN department d
    ON d.id = r.department_id
    GROUP BY d.id, d.name `

    connection.query(query, function(err, res) {
     if (err) throw err;

     const departmentChoices = res.map(data => ({
        value: data.id, name: data.name
     }));
     console.table(res);
     console.log("Department view succeed!\n");

     promptDepartment(departmentChoices);
     
    });

}

