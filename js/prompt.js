const query = require('./query');
const inquirer = require('inquirer');

const addDept = () => {
    console.log(`
    
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'deptName',
            message: 'Enter Dept Name: '
        },
    ]).then(input => {
        query.insertDept(input.deptName);
        console.log('Success');
    });
}

const addRole = (deptArry) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'deptName',
            message: 'Enter Role Name: '
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter Salary of Role: '
        },
        {
            type: 'list',
            name: 'deptTitle',
            message: "Select Dept: ",
            choices: deptArry.map(dept => dept.dept_name)
        }
    ]).then(input => {
        const { deptName, salary, deptTitle } = input;
        const deptId = deptArry.find(dept => dept.dept_name === deptTitle).id;
        query.insertRole(deptName, salary, deptId);
        console.log('Success');
    });
}

const addEmp = (rolesArry, empArray) => {
    const managerArry = empArray.filter(emp => !emp.manager_id);
    managerArry.push({ first_name: 'None' });
    let managerId;

    return inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter First Name: ',
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Enter Last Name: '
        },
        {
            type: 'list',
            name: 'roleTitle',
            message: 'Select Role: ',
            choices: rolesArry.map(role => role.title)
        },
        {
            type: 'list',
            name: 'managerTitle',
            message: 'Select Manager',
            choices: managerArry.map(manager => manager.first_name)
        }
    ]).then(input => {
        const { firstName, lastName, roleTitle, managerTitle } = input;
        const roleId = rolesArry.find(role => role.title === roleTitle).id;

        if (managerTitle === 'None') {
            managerId = null;
        } else {
            managerId = managerArry.find(manager => manager.first_name === managerTitle).id;
        }

        query.insertEmp(firstName, lastName, roleId, managerId);
        console.log('success');
    })
}

module.exports = { addDept, addRole, addEmp };
