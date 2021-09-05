const query = require('./js/query');
const inquirer = require('inquirer');

const mainPrompt = () =>{
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message:'Select action: ',
            choices: 
            ['Display Departments', 'Display Roles', 'Display Employees',]
        }
    ]).then(input => {
        switch(input.options){
            case 'Display Departments': 
            query.viewDept();
            mainPrompt();
            break;
            case 'Display Roles': 
            query.viewRoles();
            mainPrompt();
            break;
            case 'Display Employees': 
            query.viewEmp();
            mainPrompt();
            break;
            default: return;
        }
    });
}

mainPrompt()