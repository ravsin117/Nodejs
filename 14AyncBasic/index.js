// in async prog second task do not wait to finish first task
// in sync prog second task wait for task before it to finish first


// console.log("first");
// setTimeout(()=>{
//     console.log("second");
// },1000)
// console.log("third");
// o/p -> first
// third
// second

// drawback
// see online as well
// ex-

let a = 10;
let b = 0 ;
setTimeout(()=>{
    b=20;
    console.log(a+b); 
},2000)
console.log(a+b); 
//o/p ->
//  10
//  30 (after 2 sec)









