const mongoose = require('mongoose');

const productSch = mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
})

module.exports = mongoose.model('products',productSch);





















