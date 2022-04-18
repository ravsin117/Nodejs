const mongoose = require('mongoose');

    // connection
    mongoose.connect('mongodb://localhost:27017/e-com');
    let prodSch = new mongoose.Schema({
        name:String,
        price:Number,
        brand:String,
        category:String
    });

    // create
const main = async()=>{
    const product = mongoose.model('products',prodSch);
    let data = new product({
        name:"newName1",
        price:1000,
        brand:'b1',
        category:'c1'
    })
    const result = await data.save();
    console.log(result);
}
// main();

const updateIndb = async()=>{
    const product = mongoose.model('products',prodSch);
    let data = await product.updateOne(
        {name:"newName1"},
        {
            $set:{price:131}
        }
    )
    console.log(data);
    
}
// updateIndb();

//delete operation
const deletInDb = async()=>{
    const product = mongoose.model('products',prodSch);
    const result = await product.deleteOne({name:"newName1"});
    console.log(result);
}
// deletInDb();

//find operation  -> searches for a particular data in database
const findIndb = async()=>{
    const product = mongoose.model('product',prodSch);
    const data = await product.find({name:"Ram"});
    console.log(data);
}
findIndb();







