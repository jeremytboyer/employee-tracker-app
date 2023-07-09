INSERT INTO department (name) VALUES ('HR'), ('Operations'), ('Development');

INSERT INTO role (title, salary, department_id) VALUES
    ('Developer', 75000, 3),
    ('Operation Manager', 85000, 2),
    ('HR Manager', 90000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Jeremy', 'Boyer', 1, NULL),
    ('Sam', 'Abel', 1, 1),
    ('Froggy', 'Flip', 2, null),
    ('Crabby', 'Pinch', 3, null);

