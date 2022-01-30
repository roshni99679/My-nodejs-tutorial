//we will create our owm modules here and export them too....

//const add=require ('./operator');
//here 10 and 5 are function arguments(function call)
// console.log(add(10,5));
//op:15

//const kuchbhi = require('./operator')
// console.log(kuchbhi);
//op:Roshni

//when multiple fns are exported as object ------------------------------------------------
//method 1------------
// const oper=require('./operator');
// console.log(oper)
// console.log(oper.add(10,4))
// console.log(oper.subt(10,3))
// op:{ add: [Function: add], subt: [Function: subt] }
// 14
// 7

//mwthod2---------------
//as we have seen in react while exporting and requiring order of objects must be same but here in node , only the names of the objects must be same everywhere (order doesnt matter)
// const {add,subt,mult,names}=require('./operator.js');

// console.log(names)
// console.log(add(10,4))
// console.log(subt(10,3))
// console.log(mult(10,3))


//ES6 Module > for this to work , the exported file should have extension .mjs and package.json should have "type":"module"
// import {div} from "./operator.mjs";
// console.log(div(10,3));

// import any from "./operator.mjs" 
// console.log(any(10,3));
//mod will be imported here 


import {div,pow} from './operator.mjs'
console.log(div(10,10))
console.log(pow(2,4))

// op:
// Roshni
// 14
// 7
// 30