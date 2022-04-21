// __proto__.___proto__ of array -> gives an object which is __proto__ of object .

let person1={
    name:'adam',
    age:25,
    showDetails:function(){
        console.log(this.name+" "+this.age);
    }
}

let person2 = {
    name:'steve'
}

person2.__proto__=person1

console.log(person2.name)//> steve
console.log(person2.age)//>25

person2.showDetails()// steve 25
//when we assigned person1 to proto object of person 2, person2 accessed all properties of person 1 . name in peson2 is not overriden by name of person 1 this is protoypal inheritence





