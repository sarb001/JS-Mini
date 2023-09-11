


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


//***** */
//  First clas Function /anonymous function 


// FUnction statement or declaration 
        // function a(){
        //     console.log('a value is -');
        // }
        // a();


//function Expression 
        // var b = function cc(){
        //     console.log('expresion is here');
        // }
        // b();

/// statement vs expression diff changes  the way  it is executed 
// if a() is executed before declaration it will givesame answer 
// but b() will declare  undefined value is assigned to variable and you caN'T access it 

// Anonymous Function - 
// Function  with no names is called anonymous fn 


//  function (){

//  }


// First class function =--

// Ability of function to be used as values and passed  whole function as argument 
//  and can return the whole function . This ability of function is called first class  function 


//   function a(params){
//      console.log(' a is used ',params);
//   }
//   a(function (){

//   });


// callback functions - 
// we know that we can pass functions into another  function 
// the function  which is passed into function as argumentis called callback function 

//in above Example as well function passed (anonymous fn) inside a() is called Callback Function


// Detailed example is here -- 

     function ab(paramsbc){
        console.log('ab is here ');
        paramsbc();
    }  
    ab(function bc(){
        console.log('bc is here ');
    })


//  In this bc is callback  function passed in ab function 
 // so bc execution depends on ab execution now .

