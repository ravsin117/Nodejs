

// new ways of declaring object in es6 js 
// way - 1

const { localsName } = require("ejs");

let name = 'raj';
let student= '4';

let obj={
    name,
    student,

}

// console.log(obj)//- > { name: 'raj', student: '4' }

// way 2 
let n = 'name';
let obj2 = {
    [n] : 'punit'
}
// console.log(obj2) //-> { name: 'punit' }

// way 3
let k = 'student';
let obj3= {
    [k+"name"]:'ram',
    'details show'(){
        return `${this.studentname} of btech`
    }

}
console.log(obj3['details show']())//-> ram of btech


function student(name,course,fname,lname){
    let fullname = fname+" "+lname
    return{fullname,course};
}









