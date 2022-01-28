const fs = require('fs');

//To run this file :
// PS C:\Users\khushbu gupta\Desktop\WebDev Workspace\node_tutorial\Tutorials\fs_sync> node fs_sync.js
//here we are dealing with Sunchronous version 

//-----------------1.create new folder 
//A folder will be created inside the CURD_Challenge folder
// fs.mkdirSync('Challenge_dir');

//---------------2. create new file inside the newly created folder
fs.writeFileSync('Challenge_dir/bio.txt',"I created a new file.............. ");
fs.writeFileSync('Challenge_dir/bio.txt',"I overwrote.............. ");
//this will overwrite the data in bio.txt if bio.txt already exists

//---------------3.Append new data with the previous data
fs.appendFileSync('Challenge_dir/bio.txt'," I appended new data...... ")

//----------------4. Read the data in the file (not a buffer data)
const buffer_data=fs.readFileSync('Challenge_dir/bio.txt');
nonbuffer_data=buffer_data.toString();
console.log(nonbuffer_data);

//------------OR
const data=fs.readFileSync('Challenge_dir/bio.txt',"utf8");
console.log(data);

//-----------------5. Rename bio.txt 
fs.renameSync('Challenge_dir/bio.txt','Challenge_dir/mybio.txt');

//---------------6. Delete a file 
// fs.unlinkSync('Challenge_dir/mybio.txt');

//---------------7. delete a folder 
// fs.rmdirSync('Challenge_dir');