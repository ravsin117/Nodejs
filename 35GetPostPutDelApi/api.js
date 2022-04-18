const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb')
const app = express();
app.use(express.json())

app.get('/',async(req,res)=>{
    let data = await dbConnect();
    data= await data.find().toArray();
    res.send(data)
});

app.post('/',async(req,res)=>{ 
    let data = await dbConnect();
    let result= await data.insertOne(req.body);
    res.send(result);

})
// we can also update data with post method but its not standard way -> we use put method in standard method
app.put('/',async(req,res)=>{
    let data = await dbConnect();
    let result = data.updateOne(
        {name:req.body.name}, // updates where condition matches
        {
            $set:req.body
        }
    );
    res.send({result:"updated"})
})
// sending data in url to be updated(below code not working)
// app.put('/:name',async(req,res)=>{
//     let data = await dbConnect();
//     let result = data.updateOne(
//         {name:req.params.name},
//         {
//             $set:req.body
//         }
//     );
//     res.send({result:"updated"})
// })
app.delete('/:id',async(req,res)=>{
    let data = await dbConnect();
    let result = data.deleteOne({
        _id:new mongodb.ObjectId(req.params.id) //<- imp syntax
    })
    console.log(req.params.id)
    res.send("deleted")
})

app.listen(5000);


//node before 4.6 version of express used bodyparser but after 4.6 we use express  
