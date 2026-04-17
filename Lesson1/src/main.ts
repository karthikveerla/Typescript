type one = string
type two = string
type three = number | string

let a: one = 'Sanuel'
let b = a as two
let c = a as three

let d = <one>'Samuel'


const addOrConcat = (a:number,b:number, c: 'add' | 'concat') : number | string =>{
    if(c === 'add'){
        return a+b;
    }
    return ''+a+b;
}
//assertion to string 
let myval: string = addOrConcat(2,3,'concat') as string;
console.log(myval);
//assertion to number
let myval2: number = addOrConcat(2,3,'add') as number;
console.log(myval2);



// // let username = 'karthik';
// // console.log(username);

// // let myobj: object;
// // myobj ={
// //     name: 'karthik',
// //     age: 25,
// //     email: 'karthik@example.com',   
// //     phone: '123-456-7890',
// //     address: '123 Main St, Anytown, USA'
// // }

// // type employee ={
// //     name: string;
// //     id: number;
// //     department: string;
// //     salary: number;
// //     skills: string[];
// // }

// // let emp1: employee = {
// //     name: 'karthik',
// //     id: 101,
// //     department: 'IT',
// //     salary: 50000,
// //     skills:['java','python','springboot']
// // }

// // const greetemp = (emp:employee) =>{
// //     return `Hello ${emp.name}`;
// // }
// // console.log(greetemp(emp1));


// //enums
// enum color{
//     red = 1,
//     green,
//     blue
// }
// console.log(color.red);  

// //literal types
// type Direction = 'up' | 'down' | 'left' | 'right';

// let dir: Direction = 'up';
// function move(direction: Direction) {
//     console.log(`Moving ${direction}`);
// }   
// move('up');
// move('left');

// const add = (a:number, b:number): number=>{
//     return a+b;
// }

// const printmsg = (msg:any):void =>{
//     console.log(msg);
// }

// printmsg('arrow functions!');
// printmsg(add(3,6));

// //optionalparamenter
// const addAll = (a:number,b:number,c?:number) : number =>{
//     if(c != undefined){
//         return a+b+c;
//     }
//     return a+b;
// }

// //default parameter
// const addWithDefault = (a:number,b:number,c:number=10): number =>{
//     return a+b+c;
// }

// const addwithfirstdefault = (a:number =10,b:number):number=>{
//     return a+b;
// }

// console.log(addAll(3,4));
// console.log(addAll(3,4,5));
// console.log(addWithDefault(3,4));
// console.log(addwithfirstdefault(undefined,5));

// type numberOrString = number | string;

// let value: numberOrString;