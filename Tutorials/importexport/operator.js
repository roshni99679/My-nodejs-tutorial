//a and b are function parameters (fuction define)
const add=(a,b)=>{
    return a+b;
}
const subt=(a,b)=>{
    return a-b;
}
const mult=(a,b)=>{
    return a*b;
}
const names="Roshni";

//to use this add function in index.js we need to make it public
// module.exports=add;

// module.exports=names;

//to use all add,mult and sub function in index.js:-----------------
//method1-----------------
// module.exports.add=add;
// module.exports.subt=subt;
// module.exports.mult=mult;

//method2(object destructuring)-----------------
module.exports={mult,add,subt,names};
