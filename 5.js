// js fundamental for nodejs
// condition loop array object

import {x} from './4.js'

// console.log(x); // cant use import and export in node js like this 

const app = require('./4')

console.log(app.x);


// --------------------
let arr=[2,4,7,1,3,8,3];

let newArr = arr.filter((item) => item>2);
console.log(newArr)












