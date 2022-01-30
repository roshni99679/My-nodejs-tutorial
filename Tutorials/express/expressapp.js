const express=require("express");
const res = require("express/lib/response");
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("helloooo.")
})
app.get('/about',(req,res)=>{
    res.send("About page......")
})

app.listen(port,()=>{
    console.log("Listening...............")
})

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })