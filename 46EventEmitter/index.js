// event -> simply a signal that trigers particular function or particular code
// event emitter -> emits event to trigger 
// in html -> button
// in nodejs -> we make button by api , cant make button lcik in nodejs can only be imitated by api 

const express = require('express')
const EventEmitter = require('events');
const app = express();
const event = new EventEmitter();

let count = 0 ;
event.on("countapi",()=>{
    count++;
    console.log(count,'event called')
})
app.get('/',(req,res)=>{
  res.send("api called");
  event.emit("countapi"); //Synchronously calls each of the listeners registered for the event named eventName,
})
app.get('/search',(req,res)=>{
    res.send('Search api called')
})
app.get('/update',(req,res)=>{
    res.send('update api called')
})


// how many api hits till now ? 

app.listen(5000);



















