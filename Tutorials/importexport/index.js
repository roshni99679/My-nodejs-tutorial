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
const {add,subt,mult,names}=require('./operator');
console.log(names)
console.log(add(10,4))
console.log(subt(10,3))
console.log(mult(10,3))
// op:
// Roshni
// 14
// 7
// 30