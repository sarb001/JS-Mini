


// var a = 99;
// console.log('value of a -',a);
// // answer is - 99 


// 1) this keyword in  Global Scope 
// here it refers to Global Object  (this)

// this.a = 1000;
// console.log('value of a -',this.a);     // 1000;


// 2)  this keyword is used inside Function -- 

// this.a = 55;
// function getparam(){
//  console.log('inside params - ',this.a);
// }
// getparam();   // 55 

// inside function this keyword refers to  parent function or global window object 


// 3) inside Object --

// let object = {
//   name : 'faran',
//   age : 243,
//   getdata(){
//     console.log('inside object -',this.age);
//   }
// }
// object.getdata();   // 23

// inside Object this refers to parent Object not window Object 


// 4) Inside Object with Normal Function like 3rd example 
