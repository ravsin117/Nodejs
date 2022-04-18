const express = require('express');
const multer  = require('multer');
const app =express();


const upload = multer({
    storage:multer.diskStorage({// returns a storage engine implementation configured to store files on local storage
        destination:function(req,file,cb) // destination param for uploaded file 
        {
            cb(null,"upload")
        },
        filename:function(req,file,cb){ // fn determining name of the uploaded file 
            cb(null,file.feildname+"-"+Date.now()+".jpg")
        }
    })
}).single("user_file") // ret middlW that processes a single file assosiated with the given form feild
app.post('/upload',upload,(req,res)=>{
    res.send("file uploaded");
})
app.listen(5000);



// without multer package can we not upload a file 
// yes we can with nodejs readstream function (more code not prefered)


