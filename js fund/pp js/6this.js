// this in node with (non strict mode) :

// console.log(this)  //->  {}

// with function 
// function cb(){
//     console.log(this)
// } 
// cb()  //-> return global object(see below):-

/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 28.705799996852875,
      nodeStart: 0.4620000123977661,
      v8Start: 1.6807000041007996,
      bootstrapComplete: 19.6109000146389,
      environment: 10.581400007009506,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1644017790534.536
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}

*/

// with object's function
// let obj={
//    name:'adam',
//    f: function(){
//        console.log(this);
//    }
// }
// obj.f()  //-> { name: 'adam', f: [Function: f] } (returns entire obj)

// with object's function's function 

// let obj2={
//    name:'adam',
//    f: function(){
//        function g(){
//            console.log(this);
//        }
//        g()
//    }
// }
// obj2.f() // -> again returns global object

/************NODE JS WITH STRICT MODE**************** */
'use strict'

// in node 
// console.log(this)  //-> {}

// w/ function 

// function cb(){
//     console.log(this)
// }
// cb(); //-> undefined

// react is by default in strict mode and whenever we use functions in it and use this on them it gives us undefined

//with object's function 

// let obj={
//     name:'adam',
//     f: function (){
//         console.log(this);
//     }

// }
// obj.f();  /// -> returns object itself 

// with objects's function's function

// let obj3={
//     name:'adam',
//     f: function (){
//         function g(){
//             console.log(this);
//         }
//         g();
//     }

// }
// obj3.f();  //-> gives undefined

/********** this in BROWSER NON STRICT MODE  */

// console.log(this)  //-> window object returned


// FUNCTION 
//  function s(){
//   console.log(this)
//  }
//  s()//-> returns window object

// with object's function 

// let obj ={
//  name:'adam',
//  f: function(){
//      console.log(this)

//  }
// }
// obj.f()//-returns back the object itself 

// object fun fun 

// let obj ={
//  name:'adam',
//  f: function(){
//      function g(){

//          console.log(this)
//      }
//      g();
//  }
// }
// obj.f() //-> returns window object back 

//                browser with strict mode 
 
// console.log(this)//-> gives window object

// function

// function s(){
//   console.log(this)
//  }
//  s()//-> returns undefined

//obj's fun

// let obj ={
//  name:'adam',
//  f: function(){
//      console.log(this)

//  }
// }
// obj.f() // -> returns obj itself

// obj's fun's fun

// let obj ={
//  name:'adam',
//  f: function(){
//      function g(){

//          console.log(this)
//      }
//      g();
//  }
// }
// obj.f() //-> return undefined









