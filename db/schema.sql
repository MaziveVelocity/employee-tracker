DROP TABLE IF EXISTS dept;
DROP TABLE IF EXISTS emp_role;
DROP TABLE IF EXISTS employee;

CREATE TABLE dept(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    dept_name VARCHAR(30) NOT NULL
);

DESCRIBE dept;

CREATE TABLE emp_role(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DEC(9,2) NOT NULL,
    dept_id INT NOT NULL,
    FOREIGN KEY (dept_id) REFERENCES dept(id)
);

DESCRIBE emp_role;

CREATE TABLE employee(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES emp_role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

DESCRIBE employee;