const express=require('express');
const port=8000;
const app=express();
app.get('/',(req,res)=>{
    res.end("Home Page");
})
app.get('/about',(req,res)=>{
    // console.log()
    res.end("About Page");
})
app.get('/contact',(a,res)=>{
    res.end("Contact Page");
})
app.use((resq,res)=>{
    res.end("404 Page Not Found")
    // console.log("404 Page Not Found");
})

app.listen(port,(req,res)=>{
    console.log("Server Started",port)
})