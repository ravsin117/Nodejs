const dbConnection = require('./mongodb');

const main=async()=>{
    let Collectiondata = await dbConnection();
    let data = await Collectiondata.find().toArray();
    console.log(data);

}
main();












