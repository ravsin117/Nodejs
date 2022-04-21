// route level middleware 
/* middleware that works either on single route , on a group of routes , or we can apply these middleware on all the routes as well
*/
const express = require('express')
const app = express();

// applying middleware on single route

const reqFilter = (req,res,next)=>{ //<- shifted this in saperate file
    if(!req.query.age){
        res.send('Please provide your age')
    }else if(req.query.age<18){
        res.send('You cannot access this page')
    }else{
        next();
    }
}

// app.use(reqFilter); //<- remove this from here inorder to implement rout level middleware 

app.get("/", (req, res) => { // reqfilter is applied here only(on this url only)
    res.send("welcome to home page");
});
app.get("/user", (req, res) => {
    res.send("welcome to user page");
});
app.get("/About", (req, res) => {
    res.send("welcome to about page");
});
app.get("/Contact",reqFilter, (req, res) => {
    res.send("welcome to Contact page");
});





//make middleware in different file 
// const reqFilter = require('./middleware');
//  then the same code that is above

//apply middleware in the group of route 

// const route = express.Router()

// route.use(reqFilter);
// app.get("/", (req, res) => {
    //   // reqfilter is applied here only(on this url only)
    //   res.send("welcome to home page");
// });
// app.get("/user", (req, res) => {
//   res.send("welcome to user page");
// });
// route.get("/About", (req, res) => {
//   res.send("welcome to about page");
// });
// route.get("/Contact", (req, res) => {
//   res.send("welcome to Contact page");
// });
// app.use("/", route);

app.listen(5000);