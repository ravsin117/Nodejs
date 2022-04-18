// #Connecting MongoDB & NodeJS
const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-com'

async function getData(){
  let result = await client.connect(); // connect to mongodb url
  let db = result.db(database); //Create a new Db instance sharing the current socket connections.
  let collection = db.collection("products"); //Returns a reference to a MongoDB Collection. If it does not exist it will be created implicitly.
  let res = await collection.find({}).toArray(); // find->Creates a cursor for a filter that can be used to iterate over results from MongoDB
  console.log(res);
}

getData();









