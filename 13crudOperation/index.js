// crud - create read update delete
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'crud');
// const filePath = `${dirPath}/apple.txt`

// // creating file
// fs.writeFileSync(filePath,'this is data');

// // reading file data
// fs.readFile(filePath,(err,item)=>{
//     console.log(""+item);
// })

//appendFile data - update
// fs.appendFile(filePath," this is additional data",(err,item)=>{
//     if(!err){
//         console.log('file is updated')
//     }
// })


//rename
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log('name changed')
// })

// delete
// fs.unlinkSync(`${dirPath}`+"/fruit.txt");

// buffer -> temporary memory location used by node  to perform its task

