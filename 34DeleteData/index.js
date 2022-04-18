const dbConnect = require('./mongodb');

let main = async()=>{
    let collectionData = await dbConnect();
    let data = collectionData.find().toArray();
    console.log(data);

}

main();










