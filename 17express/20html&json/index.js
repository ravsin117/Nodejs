const express = require('express')
const app = express();

app.get('',(req,res)=>{
    res.send(`<h1>hello</h1>
    <a href='/about'>Got to about page</a>
    `);
})
app.get('/about',(req,res)=>{
    res.send(`
    <input type='text' placeholder='username' value="${req.query.name}"/>
    <button>click me </button/>
    <a href='/'>Got to home page</a>
    `);
})
app.get('/help',(req,res)=>{
    res.send([
        {
            name:'ram',
            email:'anil@gmail.com'
        },
        {
            name:'sam',
            email:'ssanil@gmail.com'
        }
    ]);
})
app.listen(5000)