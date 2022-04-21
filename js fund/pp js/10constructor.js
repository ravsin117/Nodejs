// constructors :

function car(brand,model,color){
    this.brand = brand
    this.model = model
    this.color = color
    
    this.drive = function(){
        console.log('I am driving '+this.brand)
    }
}

let car1 = new car('bmw','x5','white')
let car2 = new car('ducati','a45','white')
car2.drive()