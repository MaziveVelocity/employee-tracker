const query = require('./js/query');
const prompt = require('./js/prompt')
const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');

const mainPrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Select action: ',
            choices:
                ['Display Departments', 'Display Roles', 'Display Employees', 'Add Employee', 'Add Dept', 'Add Role', 'Finish']
        }
    ]).then(input => {
        switch (input.options) {
            case 'Display Departments':
                query.getDept().then(([result, fields]) => {
                    console.table(result);
                    mainPrompt();
                });
                break;
            case 'Display Roles':
                query.getRole().then(([result, fields]) => {
                    console.table(result);
                    mainPrompt();
                });
                break;
            case 'Display Employees':
                query.getEmp().then(([result, fields]) => {
                    console.table(result);
                    mainPrompt();
                });
                break;
            case 'Add Dept':
                prompt.addDept().then(mainPrompt);
                break;
            case 'Add Role':
                query.getDept().then(([result, fields]) => {
                    console.log('got role now will run add role');
                    prompt.addRole(result).then(mainPrompt);
                });
                break;
            case 'Add Employee':
                Promise.all([query.getRole(),query.getEmp()]).then(([[resultRole, roleFields],[resultEmp, empFields]]) => {
                    // console.log(resultRole, resultEmp);
                    prompt.addEmp(resultRole, resultEmp).then(mainPrompt);
                })
                
                // query.getRole().then(([resultRole, fields]) => {
                //     query.getEmp().then(([resultEmp, fields2]) => {
                //         prompt.addEmp(resultRole, resultEmp).then(mainPrompt);
                //     });
                // });
                break;
            default:
                db.end();
                break;
        }
    });
}

mainPrompt()