SELECT role.title AS role, department.name AS department, role.salary
FROM department
JOIN role ON role.department_id = department.id
GROUP BY role.id, role.title;

SELECT employee.first_name, employee.last_name, role.title AS role, role.salary
FROM role
JOIN employee ON employee.role_id = role.id
GROUP BY employee.id, employee.first_name;