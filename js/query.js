const db = require('../db/connection');


function getDept() {
    return db.promise().query(`SELECT * FROM dept;`);
}

function getRole() {
    return db.promise().query(
        `SELECT emp_role.id, emp_role.title, emp_role.salary, dept.dept_name
        From dept
        INNER JOIN emp_role ON dept.id = emp_role.dept_id;`);
}

function getEmp() {
    return db.promise().query(
        `SELECT e1.id, e1.first_name, e1.last_name,
        emp_role.title, emp_role.salary, dept.dept_name, 
        CONCAT(e2.first_name,' ',e2.last_name) manager, e2.id manager_id
        From employee e1
        LEFT JOIN emp_role ON e1.role_id = emp_role.id
        LEFT JOIN dept ON emp_role.dept_id = dept.id
        LEFT JOIN employee e2 ON e2.id = e1.manager_id;`);
}

function insertDept(deptName) {
    const sql = `INSERT INTO dept (dept_name)
    VALUES (?)`;
    const params = [deptName]

    db.query(sql, params,
        (err, result) => {
            if (err) {
                console.log(err)
            }
        });
}

function insertRole(title, salary, deptId) {

    const sql = `INSERT INTO emp_role (title, salary, dept_id) 
    VALUES (?,?,?)`;
    const params = [title, salary, deptId];

    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err)
        }
    });
}

function insertEmp(firstName, lastName, roleId, managerId) {
    if (!managerId) {
        const sql = `INSERT INTO employee (first_name, last_name, role_id)
        VALUES (?,?,?)`;
        const params = [firstName, lastName, roleId]

        db.query(sql, params,
            (err, result) => {
                if (err) {
                    console.log(err)
                }
            });
    }else{
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES (?,?,?,?)`;
        const params = [firstName, lastName, roleId, managerId]

        db.query(sql, params,
            (err, result) => {
                if (err) {
                    console.log(err)
                }
            });
    }
}

module.exports = { getDept, getEmp, getRole, insertDept, insertRole, insertEmp };