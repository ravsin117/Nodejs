// //array methods
//  var ar = new Array(3);//<- another way of declaring array ( it signifies an rray with length = 3)
//  console.log(ar[0]); //<- undefined

// sort 
// let arr = ["sanjay", "aman",'rehman',"karan"];
// console.log(arr.sort()); //<- sorts in alph order
 
// reverse
// console.log(arr.reverse()); // prints array from last index to first 

//pop
// console.log(arr.pop()); //<- deletes last elem in array and returns it

//push
// console.log(arr.push(1)) // <- appends the elem in last and returns the new length of array

// console.log(arr)

// // shift
// console.log(arr.shift())//<- removes and returns first elem in array , if array is empty undefined is returned and the array is nit modified

// // unshift 
// console.log(arr.unshift(12))//<- inserts new elem in front and returns the length of new array
// console.log(arr);

//concat 
// var a = ["sanjay", "Ram"];
// var b = a.concat("shyam", "hari"); //<- concats two or more array together and doesnt modifies new array
// console.log(b);

// // method - 2
// var d = ["manoj"];
// var e =["n"]
// var c = a.concat(d,e);// < - concats d and e in array -> a
// console.log(c);


// // join 
// let ar = ["a","d","g","k"];
// let s = ar.join("-");//< adds all elem of array into a string , saperated by a specific saperator
// console.log(s);


// slice
// console.log(arr.slice(1,3));//<- returns a new array from si to ei-1;

// // console.log(arr.splice(2,2)) // <- returns new array in which elems present from index si then second paramters signofies no of elem to be included in new array and these teo elems here will be deleted from actual array

// arr.splice(2,0,"neha","priya"); //( 0 elem deleted here then neha and priya appneded in the sam erray at 2th index and 3rd index)
// // if we had 2 as 2nd param then it would have deleted 2 elems and added neha and priya
// console.log(arr)


// isarray method

// var a =["a","b"]
// console.log(Array.isArray(a)) // returns true as a is array

// var b = false
// console.log(Array.isArray(b)==true?"yes":"NO");//-> o/p is NO as b is not array
// false is retunned when its anot an array


// //indexOf -> returns index of first occurence in array or -1 if it is not present
// var a =["a","b","c"];
// console.log(a.indexOf("d")); // -1 returned as "d" is not present in array

// var b =["aman","raj","aman","sema","kunal"];
// console.log(b.indexOf("aman",1)) // searches from index 1 

// // lastIndexOf-> returns the index of last occurence in array and -1 if not present in array
// console.log(b.lastIndexOf("sema")) 
//o/p- > 3

// includes()-> determines whether an array contains a certain element or not 
// var c =["a","b","c"];
// var k = c.includes("a")
// console.log(k); 


// some()-> determine whether a specified callback fn returns true or not for any element in array
// var age=[10,13,18,90];
// var adult = 18;
// var l=age.some(checkadult);// true
// //even if only 1 element is there that satisfy the callback condition true is stored in "l"
// function checkadult(age){
//     return age>=18 ;
// }
// console.log(l)

// // every() -> determines whether or not every element in array satisfy specific test or not
// let m =age.every(checkadult);
// console.log(m); // false


// find()
// let ar = [10,3,23,19,20];
// var adult = 18;
// let first = ar.find(checkAdult);

// function checkAdult(age){
//     return age>=18;
// }
// console.log(first) // -> 23

// // firstIndex() returns the index of first element that satifies that test
// console.log(ar.findIndex(age=>age>=18)); //-> 1 return 


// filter() -> creates an array filled with all elements that pass a test
// let ar = [10,3,23,19,20];
// let arr = ar.filter(age=> age>=18)
// console.log(arr);

// toString()-> returns a string representation of array
// let a = ["sanjay","raj",1];
// console.log(a.valueOf()) //-> simply prints the array values
// a=a.toString();
// console.log(a);


// fill()-> method fills all the element in the arr with a static value
// let a = ["sanjay","raj",1];

// console.log(a.fill("ram")) //-> [ 'ram', 'ram', 'ram' ]

// forEach()-> performs a specified task on each elem of array

// let a =["aman","raj","aman","sema","kunal"];
// let i=1;
// // a.forEach(function(value){
// //     console.log(value+" "+ i++);
// // })
// // or
// a.forEach(function(value,index){
//     console.log(index+1 +" "+ value);
// })


// destructuring array
let user = ["ram",24,"delhi"];
let [name,age,city] = user;
console.log(name); //->ram is stored in name
console.log(age)//-> 24
console.log(city)//delhi

let [name1,age2=34,city1] = user;// setting default in any value















