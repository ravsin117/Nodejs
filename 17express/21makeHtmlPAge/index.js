const express = require('express');
const path = require('path');

const app = express();


const publicPath = path.join(__dirname,'public')
// console.log(publicPath);

app.use(express.static(publicPath));
// static -> loads static content 

app.listen(5000);
