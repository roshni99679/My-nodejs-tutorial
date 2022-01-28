const fs = require('fs');

//PS C:\Users\khushbu gupta\Desktop\WebDev Workspace\node_tutorial\Tutorials\fs_async> node fs_async.js


//1.create new folder
fs.mkdir('Challenge_dir',
(err)=>{
    console.log("folder created");
});
//op:folder created

//2.creating new file bio.txt into that folder
//fs.writeFile(filename,data,callback_function with an argument err)
fs.writeFile('Challenge_dir/bio.txt',"I wrote for the first time",
(err)=>{
    console.log("file created.")
    console.log(err)
})
//op:file created.


//while dealing with asynchronous,once the file creation or the task is completed , we must call the callback function to check for any errors
//the callback has an argument that tells you weather the operation has beeen completed successfully or not

//3.append new data into the file 
fs.appendFile('Challenge_dir/bio.txt'," I appended........",
(err)=>{
    console.log("task completed......");
})
//op:
//task completed......

//4.read data from a file 
//while reading , we must pass two arguments err and data (err must always be first) in the callback function 
//utf-8/UTF-8/utf8 is used to avoid buffer data
fs.readFile('Challenge_dir/bio.txt',"UTF-8",
(err,data)=>{
    console.log(data);
});
//op:I wrote for the first time I appended........

//5.rename bio.txt
fs.rename('Challenge_dir/bio.txt','Challenge_dir/mybio.txt',
(err)=>{
    console.log("renamed.")
})
//op:renamed.

//6.delete folder 
fs.unlink('Challenge_dir/mybio.txt',
(err)=>{
    console.log("file deleted..")
})

//7.delete file
fs.rmdir('Challenge_dir',
(err)=>{
    console.log("folder deleted..")
})