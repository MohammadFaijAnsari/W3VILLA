const express=require('express');
const app=express();
const PORT=8000;

// Middleware : Middleware in like a function that are uesd to to handle the request and respoance using client and server between

app.get('/',(req,res)=>{
    console.log("Home Page");
    res.end("Home Page Module");
})
app.use((req,res,next)=>{
   console.log('Middleware 1');
   next();
})
app.use((req,res,next)=>{
    req.Username="FaijAnsari";
    console.log("Middleware 2 UserName=",req.Username)
    next();
})
app.use((req,res,next)=>{
   console.log('Middleware 3');
})
app.use((req,res)=>{
    console.log("Middleware 4 ");
})
app.listen(PORT,(req,res)=>{
    console.log("Server Started");
})