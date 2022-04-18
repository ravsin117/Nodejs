const express = require('express')
const path = require('path')
const app = express();

const publicPath = path.join(__dirname, "public");
app.set('view engine','ejs')




app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
})

// how to make loop in ejs file

app.get('/profile',(req,res)=>{
    const user={
        name:'Ravinder Singh',
        email:'REav@gmail.com',
        phno:'8687654654',
        city:'noida',
        skills:['php','nodejs','react','java','node']
    }
    res.render(`profile`,{user});
})
app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get("/login", (req, res) => {
  res.render(`login`);
});
app.get("/help", (req, res) => {
  res.sendFile(`${publicPath}/help.html`);
});
//making 404 page
app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/notFound.html`);
});
app.listen(5000);
