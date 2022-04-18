const path = require('path');
const fs = require('fs');

const dirPath = path.join(__dirname,'files');
console.warn(dirPath)

// creating multiple files in a folder
for(let i = 0 ; i< 5;i++){
    fs.writeFileSync(dirPath+`/file${i}`,'data')
}

// reading files directory
fs.readdir(dirPath,(err,files)=>{
    console.log(files) // files store the array of file
    //or
    files.forEach((item)=>{
        console.log(item)
    })
})

// can we get any file in our system by nodejs from inside a folder ? 

// when we write node command in a file to run its code then the folder the file is in acts as a webserver and node js runs on this env only it cant get data outside the server 










