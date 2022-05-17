INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Design Engineer", 77000.00, 1),
       ("Sales Analyst", 68000.00, 4),
       ("Engineering Technician", 74000.00, 1),
       ("Financial Analyst", 71000.00, 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Guy", "Johnson", 3),
       ("Jane", "Doe", 4),
       ("Joe", "Citizen", 1),
       ("Penny", "Tool", 2);