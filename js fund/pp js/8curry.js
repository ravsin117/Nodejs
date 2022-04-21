// function add(a,b){
//     console.log(a+b)
// }
// add(2,4);

// let addwith2 = add.bind(this,2);// a is assigned by default with 2 
// addwith2(5) // if vakue not specified we get NaN value of b -5 // o/p is 7 

// currying - > passing variables in different ways by storing function
// .........curry with closure.........
function addnums(x){
    return function (y){
        console.log(x+y)
    }
}

let addition = addnums(2) // x=2
addition(3) // y=3 //o/p = 5





