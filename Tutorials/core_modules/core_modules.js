//Node js Core Modules 

//Consider modules to be same as Javascript libraries(A set of functions that you want to include in your application)
//Node js has a set of built-in modules which you can use without any installation

//to see output in vs code terminal : type "node Tutorials/core_modules.js"
//to copy the sprevious command in the terminal just press upward arrow
const names="Roshni Gupta";
console.log(names)

// ---------------------------nodejs modules ------------------------------------
//here we are dealing with Synchronous version 

//---------------------------1.Creating a new file  
const fs= require("fs");     
fs.writeFileSync('read.txt',"welcome to my channel"); //if read.txt is not present already then a new read.txt will be created with the given data
fs.writeFileSync('read.txt',"welcome to my channel for the second time....")  //if read.txt is present already ,new data will be overwritten in the same file.

//---------------------------2.To append new data with the previous data in a file
fs.appendFileSync('read.txt'," How are you? I'm fine ! Thankyou...");

//---------------------------3.To read data of a file
// fs.readFileSync('read.txt');
const buf_data= fs.readFileSync('read.txt');
console.log(buf_data);
//op:<Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 63 68 61 6e 6e 65 6c 20 66 6f 72 20 74 68 65 20 73 65 63 6f 6e 64 20 74 69 6d 65 2e 2e 2e 2e 20 48 6f 77 20 ... 31 more bytes>

//Nodejs includes an additional datatype called buffer(not available in Browsers javascript)
//Buffer is mainly used to store Binary data
//while reading from a file or receiving packets over the network

original_data=buf_data.toString();
console.log(original_data);

//----------------------------4.To rename a file 
fs.renameSync('read.txt','readwrite.txt');