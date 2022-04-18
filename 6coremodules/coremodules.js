console.log("code")//<- inbuilt modules (features)
// core module-> global and non global module 
// core mod-> fs http  buffer

// global module -> modules that have no need to be imported like console

// Non global module -> (fs module i.e file system module),we need to import these

const fs = require('fs');  // can be required anywhere 
// its recommended to import fs on top of file 


fs.writeFileSync('hello1.txt','code is here')
// fs.writeFileSync("file1.txt","content in file")
// console.log("->>",__filename); //<- gives filename we are in rn and __dirname gives the current directoy name
fs.writeFileSync("code.txt","some code");


// __dirname -> gives the path of curr directory we are in 
// __filename -> gives the current filename














