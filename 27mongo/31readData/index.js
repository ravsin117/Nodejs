const dbConnection = require('./mongodb')
// dbConnection().then((res)=>{
//     res.find({name:"Pappu"}).toArray().then((data)=>{
//         console.log(data)
//     })
// })
// async function getData(){
//     let data = await collection.find({name:'Hari'}).toArray();
//     console.log(data);
// }
// getData();

const main=async()=>{
    let data =await dbConnection();
    data = await data.find().toArray();
    console.log(data)
}
main();

















