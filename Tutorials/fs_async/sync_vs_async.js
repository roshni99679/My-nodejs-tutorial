const fs= require("fs");

//--------------------------------------------Synchronous
const data=fs.readFileSync('read.txt',"utf8");
console.log(data);
console.log("I will be executed only after printing data bcoz im with synchronous")
//op:
//Today is an awesome day............. I appended........
//I will be executed only after printing data bcoz im with synchronous


//-------------------------------------------Asynchronous
fs.readFile('read.txt',"utf8",
(err,data)=>{
    console.log(data)
});
console.log("I will be executed within the time of data reading and printing if its taking more time.");
//op:
//I will be executed within the time of data reading and printing if its taking more time.
//Today is an awesome day............. I appended........