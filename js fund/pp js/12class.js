class Person {
    constructor(name, age){ // helps to make objects of this class
    this.name = name ;
     this.age = age
    }

    showDetails(){
        return this.name // as this here retuns the object itself
    }
}

let person1 = new Person('Adam', 23);
console.log(person1)

class Personchild extends Person{    // classical inheritence
    constructor(){
        super('steve')
    }
}

let person2 = new Personchild('steve', 23);
console.log(person2.showDetails())//-> steve 










