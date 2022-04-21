// call apply bind 

let person1 ={
    name:'adam',
    age:25,
    showDetails:function (){
        console.log(this.name + ' is '+this.age+' years old')
    }
}

let person2={
    name:'steve',
    age:20,
    
}
// person1.showDetails()

// showDetails funciton can be called for person 2from funciotn on person 1 this is called function borrowing:
person1.showDetails.call(person2)

 // we can globally define function by 
//  let showDetails= function(){

//  } // & then if we want to acces the function then we can do showdetails.call(person1)




// -------------------------------------------
//  apply and bind 
let showDetails=function (city , car){
        console.log(this.name + ' is '+this.age+' years old  and he lives in '+ city + 'and has a car' +car)
    }

    // showDetails.call(person2,'delhi','mercedez')
    showDetails.apply(person2,['delhi','mercedez']) // aply has different way of beig called that is with array 


    // bind 
    // bind does not immediately calls function it stores the funciotn
    let bindmethod= showDetails.bind(person2,'delhi','mercedez') 
    console.log(bindmethod)//-> [Function: bound showDetails]






