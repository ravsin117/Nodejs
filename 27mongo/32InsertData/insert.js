const dbConnection = require('./mongodb');



const insert=async()=>{
    const Collectiondata = await dbConnection();
    const result = await Collectiondata.insertMany([
      { name: "harish", brand: "vivo", price: 949, category: "mobile" },
      { name: "Ramu", brand: "orange", price: 2949, category: "moible" },
      { name: "aman", brand: "redme", price: 949, category: "mobile" },
    ]);
    console.log(result.acknowledged==true?"Data inserted":"Error");
}
insert();

// interview -> how to insert one data 7 many data fields









