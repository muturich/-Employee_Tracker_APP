INSERT INTO department (name)
VALUES
("Sales"),
("Engineering"),
("Finance"),
("Legal");


INSERT INTO roles (title,salary,department_id)
VALUES
("Sales Lead",100000,1),
("Lead Engineer",150000,2),
("Software Engineer",120000,2),
("Accountant",125000,3),
("Legal Team Lead",250000,4);


INSERT INTO employee (first_name, last_name,role_id,manager_id)

VALUES 
("Richard","Mcall",1,3),
("Joseph","Don",2,1),
("Benjamin","Frestrik",3,null),
("Kaka","Dave",4,3),
("Fred","Muller",5,null),
