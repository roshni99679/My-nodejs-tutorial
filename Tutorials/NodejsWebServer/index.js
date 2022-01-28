//To access webpages of any web application , you need a web server
//The web server will handle all the http requests for the web application
//ex: IIS is  a web server for ASP.NET web applications and APACHE is a webserver for PHP and JAVA web appications

//Node.js provides capabilities to create your own web server which will handle HTTP requests asynchronously .
//you can use IIS or APACHE to run Node,js web application but it is reccommended to use Node.js web server

//steps of creating a webserver for Node.js---------------------------------------------------------------------

//1.require http modules

//2.The http.createServer((req,res)=>{}) 
//The http.createServer() method includes request and response parameters which is supllied by Node.js
//The request object can be used to get information about the current HTTP request
//ex: url , request header , and data
//The response object can be used to send a response for the current http req


const http=require("http");
const fs=require('fs');

const server=http.createServer((req,res)=>{

    const data=fs.readFileSync("./userApi/userapi.json" , 'utf-8');
    const orgdata=JSON.parse(data);

    console.log(req.url);
    if (req.url=="/"){
        res.end("Hello from home, Rossssshhhhh...........")
    }else if(req.url=="/about"){
        res.end("Hello from about, Rossssshhhhh...........")
    }else if(req.url=="/userapi"){
        res.writeHead(200, {"content-type":"application/json"})
        res.end(orgdata[1].name)
        // fs.readFile(`./userApi/userapi.json`,"utf8",(err,data)=>{
        //     console.log(data)
        //     const orgdata=JSON.parse(data)
        //     res.end(orgdata[0].name);
        // });
    }else if(req.url=="/contact"){
        res.end("Hello from contact, Rossssshhhhh...........")
        // res.write("Hello from contact, Rossssshhhhh...........") :works the same as res.end()
    }else{
        res.writeHead(404,{"Content-type":"text/html"});         //adds a status code for error(check inspect>Network)
        res.end("<h1>404 Error.Page doesnt exist</h1>")
    }
    
});

//listen request at port 8000,local host
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening at port 8000");
})               

//Now you can see the op 
//go to browser > type localhost:8000
//op:Hello from other side Rossssshhhhh...........



