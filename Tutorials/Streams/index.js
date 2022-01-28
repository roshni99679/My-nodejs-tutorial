//Streams:
//streams are objects that let you read data from a source or write data to a destination in continous fashion 

//Streaming means listening to music / watching video in "real time" instead of downloading it and watching it later

//In nodejs there are 4types of streams:
//1.Readable:Stream which is used for read operation
//2.Writable: Stream which is used for write operation
//3.Duplex: Stream which is used for both read and write operation
//4.Transform: Atype of Duplex stream where o/p is computed based on i/p

//Each type of Stream is an EventEmmitter instance and throws several events at different instances of time .
//ex: some of the commonly used events are:

//data: this event is fired when ther's a data available to read
//end: this event is fired when ther's no more data to read
//error: this event is fired when ther's any error in receiving/writing data
//finish: this event is fired when all the data has been flushed to underlying system

//stream.pipe() method is used to take a readable stream and connect it to a writeable stream.
//readable.pipe(destination[,pipes])
//destination file here: index.js

const fs=require("fs");
const http=require("http");

const server=http.createServer();

server.on("request",(req,res)=>{
    
    //method1: to read a file (complete download and reading later all at once)
    // fs.readFile("input.txt",(err,data)=>{
    //     if (err) return console.error(err)
    //     res.end(data.toString())
    // })

    //method2:Streaming(reading chunk after chunk in a continous fashion)
    // const readable_stream=fs.createReadStream("input.txt");
    // readable_stream.on("data",(chunkdata)=>{
    //     res.write(chunkdata)
    // });

    // readable_stream.on("end",()=>{
    //     res.end();
    // });
    // readable_stream.on("error",(err)=>{
    //     console.log(err)
    //     res.end("file not found");
    // });

    //method3:pipes method
    const readable_stream=fs.createReadStream("input.txt")     //input.txt:destination(read from index.txt)
    readable_stream.pipe(res)                                  //show on res(write on res)


})

server.listen(7000,"127.0.0.1");