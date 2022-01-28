//Module Wrapper Function

//lets see behind the scenes for below code 
//npm runs all our codes in this way (wrapper function) 
//module wrapper function(same as IIFE of Advance JS): (function(){})
//(): Grouping Operator 
//function(exports,require,module,__filename,__dirname){} :anonymous function
//anything inside this wrapper function is private to that fn only 
// (function(exports,require,module,__filename,__dirname){
//     const a =require('fs')
//     const myname="Roshni";
//     console.log(myname);
//     module.exports={}
// })

// const myname="Roshni"
// console.log(myname)

//bonus
(function(){
    const a="roshhhhhhhhh";
    console.log(a);
});
//op:


(function(){
    const a="roshhhhhhhhh";
    console.log(a);
}());
//op:roshhhhhhhhh

// (function(){
//     const a="roshhhhhhhhh";
// }());
// console.log(a);
//op:ReferenceError: a is not defined

//cant even use "a" inside of the same file bcoz a id defined inside IIFE (wrapper function )

console.log(__dirname)
console.log(__filename)
//op:
//C:\Users\khushbu gupta\Desktop\WebDev Workspace\node_tutorial\Tutorials\ModWrapperFun
//C:\Users\khushbu gupta\Desktop\WebDev Workspace\node_tutorial\Tutorials\ModWrapperFun\index.js