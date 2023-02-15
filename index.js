// Write your solution in this file!
const employee = {
    name: 'Todd',
    streetAddress: '123 Main St',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;


}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
    return Object.assign({}, employee, {[key]: value});
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}