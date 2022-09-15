//removing extension from url 

const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname,'public');


app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})
app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get('/help',(req,res)=>{
    res.sendFile(`${publicPath}/help.html`)
})
//making 404 page 
app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/notFound.html`)
})
app.listen(5000)
//sendFile()-> transfer the file at a given path

// what is 404 page , 
// how to load file with get method 
// how to remove extension from url
