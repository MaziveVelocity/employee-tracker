INSERT INTO dept (dept_name)
VALUES 
    ('Engineering'),
    ('Quality Assurance'),
    ('Marketing'),
    ('Legal');

SELECT * FROM dept;

INSERT INTO emp_role (title, salary, dept_id)
VALUES 
    ('Engineer Lead', 100000.00, 1),
    ('Engineer', 70000.00, 1),
    ('QA Lead', 90000.00, 2),
    ('QA Rep', 60000.00, 2),
    ('Marketing Manager', 120000.00, 3),
    ('Marketing Rep', 90000.00, 3),
    ('Legal Manager', 160000.00, 4),
    ('Lawyer', 100000.00, 4);

SELECT * FROM emp_role;

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
    ('Jon', 'Doe', 1),
    ('Megan', 'Richards', 3),
    ('Dante ', 'Mcnally', 5),
    ('Dylan ', 'Holland', 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    -- Dept Engineering
    ('Bob', 'Dole', 2, 1),
    ('Stacy', 'Frank', 2, 1),
    ('Dan', 'Joel', 2, 1),
    -- Dept QA
    
    ('Alfred ', 'Healy', 4, 2),
    ('Janice', 'Redfern', 4, 2),
    ('Alessia ', 'Curran', 4, 2),
    -- Dept Marketing
    
    ('Jarred ', 'Hicks', 6, 3),
    ('Lacie ', 'Frank', 6, 3),
    ('Arvin ', 'Acosta', 6, 3),
    -- Dept Legal
    ('Anam ', 'Atherton', 8, 4),
    ('Marsha ', 'Clay', 8, 4),
    ('David ', 'Finney', 8, 4);

    SELECT * FROM employee;