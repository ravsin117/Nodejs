
const pending = 0 ;
const fullfuilled =1;
const rejected = 2;

function custompromise(executor){  // executor is a callback function 
    let state = pending;
    let value = null 
    let handlers =[];
    let catchers =[];
    function resolve(result){
          if(state!==pending){
              return ;
          }
          state = fullfuilled;
          value = result

          handlers.forEach((h)=>h(value))
    }
    function reject(){
        if(state!==pending) return
        state = rejected;
        value = err

        catchers.forEach((c)=>c(value))
    }
    this.then= function(successCallback){
        if(state===fullfuilled){
            successCallback(value)
        }else{
            handlers.push(successCallback)
        }
    }

    this.catch = function(failureCallback){
        if(state===rejected){
            failureCallback(value)
        }else{
            catchers.push(failureCallback)
        }
    }
     executor(resolve,reject)
}

const dowork = (res,rej)=>{
    if(2==2){
        setTimeout(()=>{res('Promise resolved hello ')},1000)
    }else{
        setTimeout(()=>{rej('Promise rejected bye')},1000);
    }
}

let greetMsg = new custompromise(dowork)

greetMsg.then((val)=>{
    console.log('then log', val)
})

greetMsg.catch((v)=>{
    console.log('catch log',val)
})




















































