const mysql = require('mysql');

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:'test'
});
con.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('connected');
    }
});
con.query("select * from users",(err,res)=>{
    console.log("result",res);
})




























