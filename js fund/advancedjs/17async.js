// let test = async ()=>{
//     return "hello";
// }
// console.log(test)
// // async function always resturns promise
// test().then((result)=>{
//     console.log(result);
// });

async function test(){
    console.log("a")
    await console.log("b")
    console.log("c")
}
test();
console.log("d")
console.log("e")

















