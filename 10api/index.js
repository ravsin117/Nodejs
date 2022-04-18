const http = require('http');
const data = require('./data')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();

}).listen(5000);
 // we get data by req

 // we get data from req and send data with response 

 //writeHead -> 
//  Sends a response header to the request. The status code is a 3-digit HTTP status code, like 404.

// 201-> created 
// 200 -> OK
// 500 -> server error
//404 








