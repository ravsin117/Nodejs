// dynamic api -> data comming from database (now building these)
// get-> getting data from database
// post->save data in database
// put-> update data in database
// delete-> delete data in database
const dbConnect = require("./mongodb");

let main = async () => {
  let collectiondata = await dbConnect();
  let data = await collectiondata.find().toArray();
  console.log(data);
};











