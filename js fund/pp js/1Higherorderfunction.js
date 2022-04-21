// hof is a function that takes other functions as parameters  


//map filter reduce are higher order function 
let myArr = [1,2,3,4,5];

let newArr = myArr.map((x)=>{  // map is a ho function 
    return 2 * x;
})

console.log(myArr)
console.log(newArr)


// filter 

let filArr = myArr.filter((x)=>{
    return x%2==0;
})

console.log(filArr)


// reduce -> gives single value output by performing some operation 

let sumArr = myArr.reduce(function(accumulator,x){
   return accumulator + x;     
},2)

console.log(sumArr)

//polyfill of map filter and reduce ( impplementing our own map , filter and reduce)->in polyfill.js
































