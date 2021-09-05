const db = require('../db/connection');
const cTable = require('console.table');

function viewDept() {
    db.query(`SELECT * FROM dept;`, async (err, results) => {
        if (err) {
            console.log(err.message);
            return;
        } else {
            console.table(results);
            return;
        }
    });
}

function viewRoles() {
    db.query(
        `SELECT emp_role.id, emp_role.title, dept.dept_name
        From dept
        INNER JOIN emp_role ON dept.id = emp_role.dept_id;`
        , async (err, results) => {

            if (err) {
                console.log(err.message);
                return;
            } else {
                console.table(results);
                return;
            }
        });
}

function viewEmp() {
    db.query(
        `SELECT e1.id, e1.first_name, e1.last_name,
        emp_role.title, emp_role.salary, dept.dept_name, 
        CONCAT(e2.first_name,' ',e2.last_name)manager
        From employee e1
        LEFT JOIN emp_role ON e1.role_id = emp_role.id
        LEFT JOIN dept ON emp_role.dept_id = dept.id
        LEFT JOIN employee e2 ON e3.id = e1.manager_id;`
        , async (err, results) => {
            if (err) {
                console.log(err.message);
                return;
            } else {
                console.table(results);
                return;
            }
        });
}

function addDept(deptName) {
    db.query(
        `INSERT INTO dept (dept_name)
        VALUES (?)`,
        [deptName],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            viewDept();
        });
}

function addRole(title, salary, deptId) {
    db.query(
        `INSERT INTO dept (title, salary, dept_id)
        VALUES (?, ?, ?)`,
        [title, salary, deptId],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            viewRoles();
        });
}

function addEmp(firstName, lastName, roleId, managerId) {
    db.query(
        `INSERT INTO emp_role (first_name, last_name, role_id, manager_id)
        VALUES (?)`,
        [firstName, lastName, roleId, managerId],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            viewEmp();
        });
}

module.exports = { viewDept, viewEmp, viewRoles, addDept, addRole, addEmp };