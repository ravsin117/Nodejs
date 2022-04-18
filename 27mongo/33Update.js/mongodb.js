const { MongoClient } = require("mongodb");
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);
const database = 'e-com'

async function dbConnect(){
    let connection =await client.connect();
    let dbase = connection.db(database);
    return dbase.collection('products');   
}
module.exports= dbConnect;














