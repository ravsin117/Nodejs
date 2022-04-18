// template pages-> used to make dynamic pages 
// need to install these like npm pages 

// static pages -> as the page we MADE AS IT IS IT WILL BE DISPLAYED .
//dynamic page -> is connected to a backend and is dependent for data on dynamic page only
//ejs-> one of the tempklate engine (widely used )

const express = require('express')
const path = require('path')
const app = express();

const publicPath = path.join(__dirname, "public");
app.set('view engine','ejs')

// every time we use template engine we must have view folder and app.set('view engine','ejs')


app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
})
app.get('/profile',(req,res)=>{
    const user={
        name:'Ravinder Singh',
        email:'REav@gmail.com',
        phno:'8687654654',
        city:'noida'
    }
    res.render(`profile`,{user});
})
app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get("/help", (req, res) => {
  res.sendFile(`${publicPath}/help.html`);
});
//making 404 page
app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/notFound.html`);
});
app.listen(5000);
