// //lets see use of 'this' keyword

// // In JS 'this' refers to object 

// const person = {
//     fName : 'Sanjay',
//     lName : 'Kkkkkkkamble',
//     fullName : function(){
//         return this.fName+" "+this.lName;
//     },
//     myFunction:function(){
//         return this;
//     }

// }

// console.log(person.myFunction());

// console.log(person.fullName());

// document.write(person.fullName());

// document.getElementById('demo').innerHTML = person.fullName();

// //when used alone this refers to window object

// let x = this;

// console.log(this);

// "use strict";

// console.log(this);

// function f(){

//     "use strict";
//     console.log(this); //in a function wen 'use strict' is used , 'this' returns undefined
    
// }


// f();

// Explicit function binding
// In JS call() and apply() functions can call a object method with another object as argments


 

 const person1 ={
     fullName : function(){
         return this.fName + " "+this.lName;
     }


 }

 const person2 = {
     fName:"arya",
     lName:"kamble"
 }

 console.log(person1.fullName);
 console.log(person1.fullName.call(person2));


 const test = {
     prop:42,
     func : function(){
        return this.prop;
     }
 };

 console.log(test.func());

a=34;

console.log(window.a);// 34
console.log(a); //34

let b =2;
console.log(window.b); //undefined
console.log(b); // 2

this.c="hello";
console.log(window.c);//hello
console.log(c); //hello


