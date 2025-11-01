// data types  se hum js mai alag alag tarike ke data ko represent kar sakte hai


// primtive data types bo hote hai jinhe agr copy kiya jaye to naya variable alag memory location pe store hota hai aur uska value change karne se original variable ka value change nahi hota

let a = "John"; 
let b =  a;  // b mai a ka value copy hua alag memory location pe but original variable ka value change nahi hoga


// float or integer 
let num1 = 10; // integer

//string
let str = "Hello World"; // string

// boolean
let isTrue = true; // boolean

// null
let emptyValue = null; // null

// undefined
let notDefined; // undefined

// symbol
let sym = Symbol("id"); // symbol

// bigint
let bigIntNum = 9007199254741991n; // bigint


// non-primitive data types
// non-primitive data types bo hote hai jinhe agr copy kiya jaye to naya variable same memory location pe point karta hai aur uska value change karne se original variable ka value bhi change ho jata hai

let obj1 = {name: "Alice", age: 30};
let obj2 = obj1; // obj2 mai obj1 ka reference copy hua same memory location pe point kar raha hai


// array
let arr1 = [1, 2, 3, 4, 5];
 // array ka mtlb hota hai multi value store karna ek variable me using []


// object
let person1 = {firstName: "Bob", lastName: "Smith"};
// object ka mtlb hota hai key value pair me data store karna using {}


// function
function greet() {
    console.log("Hello!");
}
//function ko jim mt hota hai code ka reusable block banana jise hum baar baar call kar sakte hai


