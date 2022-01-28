//JSON 
//JSON stands for Javascript Object Notation.
//JSON is light-weight format for storing and transporting data
//JSON is often used when data is sent from a server to e webpage.


//object---------------------------------------------------------------------------------
const biodata={
    name:"Roshni",
    age:22,
    school:"MGMCET"
}
console.log(biodata.age)
//op:22

//Conversion of object To JSON: --------------------------------------------------------------
//stringify: object to JSON -------------------
const jsondata=JSON.stringify(biodata)
console.log(jsondata)
//op:{"name":"Roshni","age":22,"school":"MGMCET"}

console.log(jsondata.age)
//op:undefined                    
//i.e we cant access name , age ,school when converted to json

//Conversion from JSON to string / object----------------------------------------------------------------
//parse: JSON to object-----------------------
const objdata=JSON.parse(jsondata)
console.log(objdata)
console.log(objdata.age)
console.log(objdata.name)
//op:
// { name: 'Roshni', age: 22, school: 'MGMCET' }
// 22
// Roshni
//i.e now i can access name,age,school with the help of parse i.e object data

// Challenge---------------------------------------------------------------------------------------------------------
//1.create a object bio
//2.convert that object to JSON
//3.create a new json file and add that JSON data into a new file
//4.Read that json file in JSON format AND Object format both

const fs=require("fs");
const bio={
    name:"Rosshhhh",
    gender:"Female",
    age:22
}
const Jsondata=JSON.stringify(bio)
//filename should be .json in order to store json data in it
fs.writeFile('jsonfile.json',Jsondata,(err)=>{
    console.log("completed...........")
})

fs.readFile("jsonfile.json","utf8",(err,data)=>{
    console.log(data);
    const parseddata=JSON.parse(data);
    console.log(parseddata)
})
//op:{"name":"Rosshhhh","gender":"Female","age":22}
//{ name: 'Rosshhhh', gender: 'Female', age: 22 }

//API: -------------------------------------------------------------------------------
// Application Programming Interface
// its like a service that allows us to requst for a data (ex: Covid-19 API Service)
// It is a software intemidiatory that allows 2 applications to talk to each other
// Each time you see anApp like Facebook,Instant Message App,Weather App ,yor are using an API


