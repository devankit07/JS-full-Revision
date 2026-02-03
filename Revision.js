// in this i'll be revising the javascript..  video 27 -64 
// console.log("This is the revised code in Revision.js");

// declare , assign and initialize kya hai..

// declare yani variable ka naam batana
// let and=
// const and =
// var and =

// assign yani variable ko value dena
// and = 34;
// and = "harry";
// and = true;

// initialize yani variable ko declare karte waqt hi value dena
// let and = 34;
// const and = "harry";
// var and = true;

//scope in javascript

// global scope -> pure code mai kahi bhi access kar sakte hai
// var a = 45; // global scope

// function func1() {
//   console.log(a);
// }
// func1();
// // function scope -> kisi function ke andar jo variable banaya jata hai wo sirf usi function ke andar access hota hai  
// function func2() {
//   var b = 56;
//   console.log(b);
// }
// func2(); 
// // block scope-> jo variable kisi block ke andar banaya jata hai wo sirf usi block ke andar access hota hai
// {
//   let c = 67;
//   const d = 78;
//   console.log(c);
//   console.log(d);
// }

// hoisting and tdz(temporal dead zone)





// 1 variables 
//var (function scope , reassign , redeclare , hoisting -> undefned & old )

// function abc(){
//   var x = 14;
//   x=15;//reassign
//   var x=16//redeclare
//   console.log(x);//fnc scope
// }
// abc()

// console.log(f);
// var f=7 // undefined 



//let (block scope, reassign, redeclare nahi kr skte , hoisting → error & new )

// {//block scope
//   let x =14;
//   x =15;// reassign 
//   // let x =16 //redeclare nahi hoga
//   console.log(x);
// }

// console.log(c);
// let c =1 // error 



//const(block scope, reassign & redeclare kuch bhi nahi , hoisting-> error & value fix + new )

// {
//   const a =14;
//   // a =15; not reassign
//   // const a =16 not redeclare
//   console.log(a);
// }


// console.log(c);
// const c = 11;  error

