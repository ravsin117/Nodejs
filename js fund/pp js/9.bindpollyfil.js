let person1={
    name:'adam',
    age:25
}
let showDetails = function(city , state){
    console.log(this.name+ " "+ this.age+' '+city+" "+state);
}

// let showDetailsBind = showDetails.bind(person1,'noida')
// showDetailsBind('UP')

Function.prototype.myBind = function(...args){
    let obj = this
    params = args.slice(1)
    return function(...args2){  //args2 has up or it will show error
        obj.apply(args[0],[...params,...args2])
    }
}
let showdetailsMyBind = showDetails.myBind(person1,'Noida')
showdetailsMyBind('Up')
















