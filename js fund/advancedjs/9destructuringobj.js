let user={
    name:'ram',
    city:'Delhi',
    age:24
}
let {name,age: a} = user; // variable names must be same as what are used in objects
console.log(name)
console.log(a) // age is aliased as a 

let {city}= user
console.log(city)



