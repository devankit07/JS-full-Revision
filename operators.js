// // operators se hum js mai alag alag tarike ke operations kar sakte hai

// // arithmetic operators  +, -, *, /, %
// let a = 10;
// let b = 5;
// let sum = a + b; // addition
// let diff = a - b; // subtraction
// let product = a * b; // multiplication
// let quotient = a / b; // division
// let remainder = a % b; // modulus

// // assignment operators  =, +=, -=, *=, /=, %=
// let x = 10;
// x += 5; // x = x + 5
// x -= 3; // x = x - 3
// x *= 2; // x = x * 2
// x /= 4; // x = x / 4
// x %= 2; // x = x % 2

// // comparison operators  ==, ===, !=, !==, >, <, >=, <=

// let p = 10;
// let q = "10";
// let isEqual = (p == q); // true (value comparison) but type different isliye use nhi krna chahiye
// let isStrictEqual = (p === q); // false (value and type comparison)
// let isNotEqual = (p != q); // false (value comparison) but type different isliye use nhi krna chahiye
// let isStrictNotEqual = (p !== q); // true (value and type comparison)
// let isGreater = (p > 5); // true
// let isLess = (p < 15); // true
// let isGreaterOrEqual = (p >= 10); // true
// let isLessOrEqual = (p <= 5); // false


// // logical operators  &&, ||, !

// //&& (AND AND) operator
//  // isme agar dono conditions true hai to hi result true hoga
// let age = 20;
// let hasID = true;
// let canEnterClub = (age >= 18 && hasID); // true

// // || (OR OR) operator
//  // isme agar koi bhi ek condition true hai to result true hoga
// let isWeekend = false;
// let isHoliday = true;
// let canRelax = (isWeekend || isHoliday); // true

// // ! (NOT NOT) operator
//  // isme jo condition true hai usse false kar deta hai aur jo false hai usse true kar deta hai
// let isRaining = false;
// let willGoOutside = !isRaining; // true


// // ternary operator  condition ? value if true : value if false
// // isme hum pehle condition dete hai agr true hai to ? is code chalega agr false hai to : ke baad wala code chalega

// let score = 85;
// let grade = (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : "D";
// console.log("Grade:", grade); // B


// // typeof operator
// // isse hum variable ka data type check kar sakte hai

// let value = 42;
// console.log("Type of value:", typeof value); // number

// // string operator + ??  ?.

// // (+ concatination) js mai iska mtlab hota hai concatenate karna yani jodna

//  let c = "hello";
//  let d = "ankit";
//  console.log(c+d);

// (?? nullish coalescing )js mai iska use hota hai agr pehli vaalue null hai to dusri value print ho jaegi 


// let user = null;
// let displayname = user ??"guest";

// console.log(displayname);

// (?. optional chaining) js mai iski help se hum nested object ke properties ko easily access kr sakte hai 

// const user = {
//   name: "Ankit",
//   address: {
//     city: "Delhi"
//   }
// };

// console.log(user.address?.city);
// console.log(user.profile?.age);  







