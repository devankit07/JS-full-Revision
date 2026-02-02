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
var a = 45; // global scope

function func1() {
  console.log(a);
}
func1();
// function scope -> kisi function ke andar jo variable banaya jata hai wo sirf usi function ke andar access hota hai  
function func2() {
  var b = 56;
  console.log(b);
}
func2(); 
// block scope-> jo variable kisi block ke andar banaya jata hai wo sirf usi block ke andar access hota hai
{
  let c = 67;
  const d = 78;
  console.log(c);
  console.log(d);
}

