const mongoose = require('mongoose')

//Demonstration= stoping extra field to be entered in database
// only entering two feild here 
const saveInDb=async()=>{
    await mongoose.connect('mongodb://localhost:27017/e-com')
    const productSch = new mongoose.Schema({
        name:String,
        price:Number
    }); //schema for product fields (can enter only fields mentioned here)
    //model use schemas & connect nodejs with mongodb
    const productModel = mongoose.model('products',productSch);
    let data = new productModel(
            {
                name:"m8--2",
                price:1000
            }
        );
    let result  = await data.save();
    console.log(result);

}

saveInDb();



















