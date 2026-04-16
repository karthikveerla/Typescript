"use strict";
// let username = 'karthik';
// console.log(username);
// let myobj: object;
// myobj ={
//     name: 'karthik',
//     age: 25,
//     email: 'karthik@example.com',   
//     phone: '123-456-7890',
//     address: '123 Main St, Anytown, USA'
// }
// type employee ={
//     name: string;
//     id: number;
//     department: string;
//     salary: number;
//     skills: string[];
// }
// let emp1: employee = {
//     name: 'karthik',
//     id: 101,
//     department: 'IT',
//     salary: 50000,
//     skills:['java','python','springboot']
// }
// const greetemp = (emp:employee) =>{
//     return `Hello ${emp.name}`;
// }
// console.log(greetemp(emp1));
//enums
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["green"] = 2] = "green";
    color[color["blue"] = 3] = "blue";
})(color || (color = {}));
console.log(color.red);
let dir = 'up';
function move(direction) {
    console.log(`Moving ${direction}`);
}
move('up');
move('left');
const add = (a, b) => {
    return a + b;
};
const printmsg = (msg) => {
    console.log(msg);
};
printmsg('arrow functions!');
printmsg(add(3, 6));
//optionalparamenter
const addAll = (a, b, c) => {
    if (c != undefined) {
        return a + b + c;
    }
    return a + b;
};
//default parameter
const addWithDefault = (a, b, c = 10) => {
    return a + b + c;
};
const addwithfirstdefault = (a = 10, b) => {
    return a + b;
};
console.log(addAll(3, 4));
console.log(addAll(3, 4, 5));
console.log(addWithDefault(3, 4));
console.log(addwithfirstdefault(undefined, 5));
