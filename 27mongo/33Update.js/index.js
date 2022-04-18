const dbConnect = require('./mongodb')

let main = async()=>{
    let collectionData =  await dbConnect();
    
    let data = await collectionData.find().toArray();
    console.log(data);
}
main();