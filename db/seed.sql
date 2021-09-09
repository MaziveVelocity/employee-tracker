INSERT INTO dept (dept_name)
VALUES 
    ('Engineering'),
    ('Quality Assurance'),
    ('Marketing'),
    ('Legal');

SELECT * FROM dept;

INSERT INTO emp_role (title, salary, dept_id)
VALUES 
    ('Manager', 100000.00, 1),
    ('Employee', 70000.00, 1),
    ('Manager', 90000.00, 2),
    ('Employee', 60000.00, 2),
    ('Manager', 120000.00, 3),
    ('Employee', 90000.00, 3),
    ('Manager', 160000.00, 4),
    ('Employee', 100000.00, 4);

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
    
    ('Alfred ', 'Healy', 4, 3),
    ('Janice', 'Redfern', 4, 3),
    ('Alessia ', 'Curran', 4, 3),
    -- Dept Marketing
    
    ('Jarred ', 'Hicks', 6, 5),
    ('Lacie ', 'Frank', 6, 5),
    ('Arvin ', 'Acosta', 6, 5),
    -- Dept Legal
    ('Anam ', 'Atherton', 8, 7),
    ('Marsha ', 'Clay', 8, 7),
    ('David ', 'Finney', 8, 7);

SELECT * FROM employee;
