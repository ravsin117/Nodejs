// video->18,19
// express js is a framework of nodejs
const express = require('express');
const app = express(); // now in executable state
// express()-> creates express application

app.get('',(req,res)=>{
    console.log("data sent by browser",req.query.name);
    res.send('Hello this is home page , welcome '+req.query.name);
});
app.get('/about',(req,res)=>{
    res.send('Hello this is about page');
});
app.get('/help',(req,res)=>{
    res.send('Hello this is help page');
});
app.get('/my',(req,res)=>{
    res.send('Hello this is my page');
});

app.listen(5000);


// express js -> is a open source web application framework for node js 

// get method provides-> routes
// first param -> route 
// 2nd param -> callback function

// send()-> sends a response

// whenever we make changes in out script and we want to see changes refelected on page then we must re start the server again 
// we can also run our script with nodemon instead of node then we wont have to restart the page again





