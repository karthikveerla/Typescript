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
enum color{
    red = 1,
    green,
    blue
}
console.log(color.red);  

//literal types
type Direction = 'up' | 'down' | 'left' | 'right';

let dir: Direction = 'up';
function move(direction: Direction) {
    console.log(`Moving ${direction}`);
}   
move('up');
move('left');

const add = (a:number, b:number): number=>{
    return a+b;
}

const printmsg = (msg:any):void =>{
    console.log(msg);
}

printmsg('arrow functions!');
printmsg(add(3,6));