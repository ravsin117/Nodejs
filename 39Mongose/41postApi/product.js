const mongoose = require('mongoose');

const prodSchema = mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
})

module.exports = mongoose.model('product',prodSchema);












