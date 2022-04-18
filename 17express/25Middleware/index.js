// middleware -> functions that are used eith routed and with the help of these we can access req and res and modify them ->(why modify -> we need to check authentication or checking age or blocking something i.e making changes in request and response)
// cant we just make changes in middleware 
// if we have 50 routes we need to make check in all of them , 
// But if we have a middleware then we can make chnages in it only .


const express = require('express');
const res = require('express/lib/response');
const app= express();

const reqFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send("Please provide age")
    }else if(req.query.age<18){
        res.send('You cannot access the page')
    }else{
        
        next();
    }
    // when we call next then the url works if we dont apply it , then it will just keep on trying to load the page
}
app.use(reqFilter);

app.get('/',(req,res)=>{
    res.send('welcome to home page')
})
app.get('/user',(req,res)=>{
    res.send('welcome to user page')
})

app.listen(5000);

/* types of middleware
-application middleware(used in above example) -> 
These are middleware that can be applied on all routes. 
-router-level middleware -> used on particular routes only 
-error handling
-built in
-third party
*/
/* what are middleware 
 how to make them 
 types of it 
 */
