// declaration, ka mtlab variable ko banana
//  var, let, const 3 tarike se variable declare kar sakte hai js me

//  initialization,
//  variable ko pehli baar value dena

//  reassignment in js
//  variable ki value ko badalna

// let

let age = 25; // declaration and initialization
age = 26; // reassignment


//var

var city = "New York"; // declaration and initialization
city = "Los Angeles"; // reassignment


// const

const country = "USA"; // declaration and initialization
// cannot reassign a const variable


// temporary dead zone

// let and const mai temporal dead zone hota hai jab tak variable declare nahi hota tab tak usse access nahi kar sakte. ye error dega
// var mai aisa nahi hota hai. ye undefined

// hoisting

// hoisting ka mtlab hota hai apka variable 2 hisso mai tut jata hai 
// 1. declaration part upar chala jata hai
// 2. initialization part wahi rehta hai jaha apne likha hota hai

// var hoisting mai ap variable ko use kar sakte ho declaration se pehle bhi. ye undefined dega
// let and const mai aisa nahi hota hai. ye error dega . kyunki ye temporal dead zone mai hota hai