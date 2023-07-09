--  SELECT
--  employee.first_name,
--  employee.last_name,
--  role.title,
--  role.salary,
--  department.name,
--  CONCAT(managers.first_name, " ", managers.last_name) AS manager
--  from employee
--   JOIN role
--   ON role.id  = employee.role_id
--   JOIN department 
--   ON department.id = role.department_id
--   LEFT JOIN employee managers
--   ON employee.manager_id = managers.id;

SELECT * FROM department