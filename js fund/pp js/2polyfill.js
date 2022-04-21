// Map 

let myArr =[1,2,3,4,5];
// map always returns us a new Arr 
let mappedArr = myArr.map((x)=>{
    return x *x;
})
// console.log(mappedArr)

// custom Map
let arr =[1,2,3,4,5];
function myPolyfillMap(arr,cb){
    let newArr=[];
    for(let i = 0 ; i< arr.length ;i++){
           newArr.push(cb(arr[i]))
    }
    return newArr;   
}
function cb (x){
  return x *x;
}
console.log(myPolyfillMap(arr,cb));

// filter 
let farr =[2,4,6,7,9,13,14,16]
let filArr = farr.filter((x)=>x%2==0)
console.log(filArr);

// custom filter 
function myPolyfillfilter(farr,cb2){
    let filterArr = [];
    for(let i = 0 ; i < farr.length ;i++){
        
        if(cb2(farr[i])){
            filterArr.push(farr[i]);
        }
    }
    return filterArr;
}
function cb2(x){
    if(x%2==0){
        return x;
    }
}
console.log(myPolyfillfilter(farr,cb2));

//Reduce
 let sum = arr.reduce(function (accumulator,x){
     return accumulator+x;
 },0) 
 console.log(sum);

// custom reduce 

function customreduce(arr,cb3){
      let narr=[0];
      for(let i = 0 ; i < arr.length ;i++){
        narr[0]=cb3(arr[i],narr[0]);
        
      }
     return narr[0] 
}
function cb3(x,y){
    return y+=x;
} 
console.log(customreduce(arr,cb3))