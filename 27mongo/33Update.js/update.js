const dbConnect = require('./mongodb');


const mongoUpdate=async()=>{
    let data = await dbConnect();
    let result = await data.updateMany(
        // 1st obj = condition
        { 
            name:"harish"
        
        }, // second object = > new data to be updated where the condition is matched.
        {
            $set:{name:'charmender'}
        }
    )
    console.log(result)
    
}
mongoUpdate();




