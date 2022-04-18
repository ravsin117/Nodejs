const express = require('express');
require('./config')
const app = express();
const Product = require('./product');

app.use(express.json());

app.get('/search/:key',async(req,res)=>{
    console.log(req.params.key)
    let data = await Product.find(
        {
            '$or':[
                {
                    "brand":{$regex:req.params.key},
                },
                {
                    "name":{$regex:req.params.key},
                }
            ]
        }
    )
    res.send(data);
})
app.listen(5000);


//can ew use post or put or delete to search 
// yes 

















