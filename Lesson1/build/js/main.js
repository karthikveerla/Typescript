"use strict";
let username = 'karthik';
console.log(username);
let myobj;
myobj = {
    name: 'karthik',
    age: 25,
    email: 'karthik@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA'
};
let emp1 = {
    name: 'karthik',
    id: 101,
    department: 'IT',
    salary: 50000,
    skills: ['java', 'python', 'springboot']
};
const greetemp = (emp) => {
    return `Hello ${emp.name}`;
};
console.log(greetemp(emp1));
