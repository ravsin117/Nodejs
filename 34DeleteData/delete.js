const dbConnect = require('./mongodb')


const deleteData = async()=>{
    let data = await dbConnect();
    let result = await data.deleteMany(
        {
            name:"aman"
        }
    )
    
    console.log(result.deletedCount==0?"Record Not found":'record deleted')
}
deleteData();







