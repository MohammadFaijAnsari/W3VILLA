const express=require('express');
const { EventEmitter } = require('stream');
const app=express();
const event=new EventEmitter();

let count=0;
event.on("APICount",()=>{
    count++;
    console.log("Event Called",count);
    
})
app.get('/',(req,res)=>{
   res.end("Home Pgae");
   event.emit("APICount")
})

app.get('/about',(req,res)=>{
   res.end("About Pgae");
   event.emit("APICount")
})

app.get('/contact',(req,res)=>{
   res.end("Contact Pgae");
   event.emit("APICount")
})

app.listen(8000,()=>{
    console.log("Server Started")
})

