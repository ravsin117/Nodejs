

function sum(name,...args){
    console.log(args)
}
let arr=[2,4,6,8,10];
sum("ram",arr);

// rest operator takes multiple values and store them in array , if we give it one array then it will make array of array
// therefore we have spread operator in js

sum("ram",...arr)

// copy of array 
let ar1 = [...arr];
console.log(ar1);//[2,4,6,8,10]

// changes in arr would not effect ar1

// but in below case values will be refelected 
let ar2 = ar1;
ar1.push(12)
console.log(ar1)//[ 2, 4, 6, 8, 10, 12 ]
console.log(ar2)//[ 2, 4, 6, 8, 10, 12 ]

// concatinatinf two arrays 
// way1:
let a1 =[1,2,3,4];
let a2 =[5,6];
let a3 = a2.concat(a1);
console.log(a3);
// way2
let a4 = [10,...a2,...a1,9];
console.log(a4);//[5,6,1,2,3,4,9]<- extra value =10, 9 also added in array here







