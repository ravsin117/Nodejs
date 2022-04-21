// function calculate(a,b){
//     let result = a+b;
//     return result;
// }

// console.log(calculate(2,3));
// console.log(result); // result not defined outside funciton 
// ------------------------------------------

function add(){
    let a = 4;
    function addChild(){
        console.log(a+5); // parent's variable a = 5 in accessinble in addchild() 
    }
    return addChild;
}
// console.log(add()) //->[Function: addChild] 
// console.log(add()()) //-> 9 
                        // undefined (bcz of console log , and default return type is undefined  )
 

