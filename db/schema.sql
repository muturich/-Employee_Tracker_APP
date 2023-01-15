DROP DATABASE IF EXISTS employes_db;

CREATE DATABASE employes_db;

use employes_db;


CREATE TABLE department (
    Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (30) 

);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (30) NULL,
    salary DECIMAL (10.5) NOT NULL,
    Department_id INT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (

    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR (30) NOT NULL,
    role_id INT NULL,
    manager_id INT  NULL, 
    PRIMARY KEY (id)

);