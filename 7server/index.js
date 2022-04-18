const http = require('http') ;

// http module handles request and response in server 

http.createServer((req,res)=>{ 
    res.write("<h1>hello this is Ravinder singh</h1>");
    res.end(); // must end response 
    
}).listen(4900); // creates server 

//listens on aparticular port for 
// request- req -> access the parameters in request
// response - res -> response sent to client by server 



// 2nd way ->

function dataControl(req,res){
    res.write("<h1>this is the funciton defination</h1>")
    res.end();
}
http.createServer(dataControl).listen(5500)

// must restart the server after making changes inorder to see changes on page 
