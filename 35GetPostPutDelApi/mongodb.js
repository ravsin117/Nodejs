const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client= new MongoClient(url);
const database = 'e-com';

async function dbConnect(){
    let connection = await client.connect();
    let databaseData = connection.db(database);
    return databaseData.collection('products');
}

module.exports = dbConnect;
