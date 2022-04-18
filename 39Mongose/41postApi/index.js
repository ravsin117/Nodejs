const express = require('express');
require('./config')
const Product = require('./product');
// when ever we receive data , it is in the form of stream . we need to convert it in form of json

const app = express();
app.use(express.json())
//post method
app.post("/create",async(req,res)=>{
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result)
    res.send(req.body);
})

//get method - > gets data from server 
app.get('/list',async(req,res)=>{
    let data = await Product.find();
    res.send(data);
})
//delete method
app.delete('/delete/:_id',async(req,res)=>{
    console.log(req.params);
    let data = await Product.deleteOne(req.params);
    res.send("done");
})
//update method 
app.put('/update/:_id',async(req,res)=>{
    console.log(req.params);
    let data = await Product.updateOne(
        
            req.params // <- object
        ,
        {
            $set: req.body
        }
    )
    res.send(data);
})

app.listen(5000);

// how to send id in case of put and delete query parm or body
// ans -> in put -> can be send in either 
// in delete -> can only be send in query

















