DROP DATABASE IF EXISTS employes_db;
--creates the "employes_db" database--
CREATE DATABASE employes_db;


--use employes_db--

use employes_db;

--create different tables within  employes_db--

CREATE TABLE department (
    Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (30) --to hold deparment name

);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (30) NOT NULL,--to hold role title
    salary DECIMAL NOT NULL, --to hold role salary
    Department_id INT NOT NULL, --to hold reference to department role belongs to
    FOREIGN KEY (department_id),
    REFENCE department_id
);

CREATE TABLE employee (

    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, --to hold employee first name
    last_name VARCHAR (30) NOT NULL, --to hold employee last name
    role_id INT NOT NULL, --to hold reference to employee role
    manager_id INT  NULL, --to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)
    FOREIGN KEY (role_id) REFERENCES roles (id),
    FOREIGN KEY (manager_id)REFERENCES employee (id)
   

);