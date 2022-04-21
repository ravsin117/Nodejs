//callbacks 
// synchronous callback example
// function greet(personName, age, callback, callback2){
//     let msg = "hello "+ personName
//     let ageOfPerson = age;
//     callback(msg)
//     callback2(ageOfPerson)
// }
// function logGreeting(greeting){
//     console.log(greeting)
// }
// function showAge(age){
//     console.log(age)
// }
// greet('steve',25,logGreeting,showAge)
//o/p=> hellosteve
// 25

//----------------------------- async callback 
console.log('hello ')

setTimeout(function cb(){
    console.log('I am settimeout1')
},2000)  // setimeout function executes after 2000ms


setTimeout(function cb(){
    console.log('I am settimeout2')
},1000)
   

function sayBye(){
    console.log('bye')
}
sayBye()
// output -> hello 
// bye
// I am settimeout2
// I am settimeout1

// settimeout is function provided by node , its not inbuilt in js
// here we didnt waited for s1 s2 and went forward to run other fucntions and we didnt blocked the thread till s1 , s2 were exectuted 



















