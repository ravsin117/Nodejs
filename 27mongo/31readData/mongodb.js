const { MongoClient, GridFSBucketReadStream } = require("mongodb");
let url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "e-com";

async function dbConnection() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("products");
}
module.exports=dbConnection;