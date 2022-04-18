function sum(){
    let sum = 0 ; 
    // for(let i in arguments){ // arguments is the object that has all the values passed in sum()
    //     sum+=arguments[i];
    // }
    // console.log(sum);
    console.log(arguments)
}

sum(20,30) // 50 
sum(20,30,40)// 90 
sum(20,30,40,90)// 180 
sum("hello",20,30)// here we wanted only sum of 20 & 30 but we wont get so therefore we have rest operator in es6 js :-

function sum1(name,...args){ // name will store ram and the rest of arguments stored in args array
    let sum = 0 ; 
    for(let i in args){
        sum+=args[i];
    }
    console.log(sum);
    console.log(name);
}
sum1("ram",30,9)

// let arr = [2,4,6,8];
// for(let i of arr){
//     console.log(i)
// }   // of -> i directly gives values of arr
// in -> i means index 

//imp -> fn(...args,name) <- wrong   , fn(name,..args)<- right
// rest operator must be last formal parameter





