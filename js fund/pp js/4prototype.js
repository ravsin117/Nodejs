// with prototype we can implement funcitons for ds


Array.prototype.myFunction=function(){
    console.log(this);
}

let arr=[1,2,3,4,5];
arr.myFunction();


// writing map and filter with prototype (polyfill)

Array.prototype.myMap=function(cb){
    let newArr=[]
    for(let i =0 ; i< this.length ;i++){
        newArr.push(cb(this[i]))
    }
     return newArr
}
function cb(x){
    return x*x;
}

let ar =[1,2,3,4,5];
let mappedArr = ar.myMap(cb);

console.log(mappedArr)

// writing polyfill of filter with protoype

Array.prototype.myFilter = function(cb1){
    let newArr2=[]

    for(let i = 0 ; i< this.length ;i++){
        if(cb1(this[i])){
            newArr2.push(this[i])
        }
    }
    return newArr2;
}
function cb1(x){
    if(x%2==0){
        return x;
    }
}

console.log(arr.myFilter(cb1))

// reduce polyfill with prototype 