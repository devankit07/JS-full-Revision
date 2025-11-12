// 🧩 Beginner Level — Control Flow (5 Questions)


// Positive or Negative
// Write a program that takes a number from the user and checks whether it is positive, negative, or zero.



// let ask = +prompt("number btao");
// if(ask>0){
//     console.log("postive");
// }else if(ask<0){
//     console.log("negative");
// }else{
//     console.log("zero")
// };



// Even or Odd
// Write a program to check if a given number is even or odd using if-else.


// let pucho = +prompt("pucho bhai");
// if(isNaN(pucho)){
//     console.log("bhai number likho");
// }else if(pucho%2===0)
// {
//  console.log("even");
// }else{console.log("odd")}



// Largest of Two Numbers
// Take two numbers as input and display which one is greater, or if they are equal.

// let pehla = +prompt("pehla number btao");
// let dusra = +prompt("dusra number btao");

// if(isNaN(pehla) || isNaN(dusra)){
//     console.error("bhai tumne galat likha hai");
// }else if (pehla === dusra){
//     console.log("both are equal");
// }else if (pehla > dusra){
//     console.log(`${pehla}bada hai`);
// }else {
//     console.log(`${dusra}bada hai`);
// }


// Grading System
// Write a program that takes a student’s marks (0–100) and prints their grade:

// A: 90–100

// B: 75–89

// C: 50–74

// F: below 50


// let gradebtao = +prompt("marks do muje:");

// if(isNaN(gradebtao)){
//     console.error("kuch bhi !")
// } else if (gradebtao >=90 && gradebtao<=100){
//     console.log("grade:A");
// } else if (gradebtao >=75 && gradebtao<=89){
//     console.log("grade:B");
// }else if (gradebtao >=50 && gradebtao<=74){
//     console.log("grade:C");
// }else if(gradebtao>=0 && gradebtao<=50){
//     console.log("grade:F");
// }else{
//     console.log("marks given range 0-100");
// };


// Day of the Week (Switch)
// Write a program using switch that takes a number (1–7) and prints the corresponding day name (1 → Monday, 2 → Tuesday, etc.).

// let dayNumber = +prompt("1-7 ke beech number do:");

// switch(dayNumber) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid number! 1-7 ke beech do.");
// }



// Beginner Level — Loops (5 Questions)

// Print Numbers 1–10
// Write a program to print numbers from 1 to 10 using a for loop.

// for (let i =1; i<=10;i++){
//     console.log(i)
// };


// Sum of First N Numbers
// Take a number N from the user and calculate the sum of first N natural numbers using a loop.

// let N = +prompt("Enter a number N:");
// let sum = 0;

// if (isNaN(N) || N <= 0) {
//   console.log("Please enter a valid positive number!");
// } else {
//   for (let i = 1; i <= N; i++) {
//     sum += i; // add i to sum
//   }
//   console.log(`Sum of first ${N} numbers is ${sum}`);
// }



// Multiplication Table
// Ask the user for a number and print its multiplication table up to 10 using a loop.

// let num = +prompt("Konsa number ka table chahiye?");

// if (isNaN(num)) {
//   console.log("Bhai number likho, alphabet nahi 😅");
// } else {
//   console.log(`\nMultiplication Table of ${num}:\n`);
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
//   }
// }



// Even Numbers till N
// Take a number N and print all even numbers from 1 to N using a loop.

// let n = +prompt("number do (n):");

// if(isNaN(n) || n<0){
//     console.log("please enter positive number");
// }else {
//     console.log(`even number tille${n}:`);
//     for(let i= 1; i<=n;i++){
//         if(i%2 === 0){
//             console.log(i);
//         }
//     }
// }



// Reverse Counting
// Take a number N and print numbers from N down to 1 using a loop


// let n = +prompt("number do");
// if(isNaN(n) || n<0){
//      console.log("please enter positive number");
// }else{
//     console.log(`reverse number from${n}:`);
//     for(let i = n; i>= 1; i--){
//         console.log(i)
//     }

// };




// Question 1 — Count Even and Odd Numbers

// Write a program that:

// Takes a number N from the user.

// Prints all numbers from 1 to N.

// At the end, prints how many of them are even and how many are odd.


// let n = +prompt("Number do:");

// if (isNaN(n) || n < 0) {
//   console.log("Please ek positive number do!");
// } else {
//   let evenCount = 0;
//   let oddCount = 0;

//   console.log(`\nEven and Odd numbers from ${n} to 1:`);

//   for (let i = n; i >= 1; i--) {
//     if (i % 2 === 0) {
//       console.log(`${i} is Even`);
//       evenCount++;
//     } else {
//       console.log(`${i} is Odd`);
//       oddCount++;
//     }
//   }

//   console.log(`\nTotal Even: ${evenCount}`);
//   console.log(`Total Odd: ${oddCount}`);
// }



// Question 2 — Sum of Even Numbers Only

// Write a program that:

// Takes a number N from the user.

// Finds the sum of all even numbers from 1 to N.

// If N is negative or not a number, print a proper error message.





// let n = +prompt("number do :");

// if(isNaN(n) || n<0){
//     console.error("please wrie a number");
// }else{
//     let sum =0;
//     console.log(`sum of even number from${n}`);

//     for(let i =n; i>=1; i--){
//         if(i%2=== 0){
//             console.log(i);
//             sum += i;
//         }
//     }
//     console.log(`sum of all even number ${n}to 1 is:${sum}`);
// }




// FUNCTIONS — EASY LEVEL (5 Questions)

// sayHello() — Ek function banao jo "Hello JavaScript!" print kare.

// function sayhello(){
//     console.log("hello javascript");
// }

// sayhello();

// greet(name) — Naam input le aur "Hello <name>" print kare.

// function greet(name){
//     console.log(`hello${name}`)
// }
// greet("ankit");

// add(a, b) — Dono number ka sum return kare.

// function jodo(v1 ,v2){
//     return  v1 + v2
// }

// let and =jodo(475,986);
// console.log(and);

// isEven(num) — Number even hai ya odd, ye check kare.

// function isEven(num){
//     if(num%2 ===0) {return "true";}
//     else {
//         return "false";
//     }
// }

// console.log(isEven(11));
// console.log(isEven(10));

// square(num) — Number ka square return kare.

// function square(num)
// {
//      return num * num;
// }

// console.log(square(4));


// FUNCTIONS — INTERMEDIATE LEVEL (Next 5 Questions)

// findMax(a, b, c) → Teen numbers me se sabse bada return karo.

// function findMax(a,b,c){
//     return Math.max(a,b,c)
// }

// console.log(findMax(7777, 7767, 7757));



// factorial(n) → Given number ka factorial return karo.

// function factorial(n){
//     let fact = 1;

//     for(let i= 1;i<= n;i++){
//         fact = fact*i ;
//     }{
//         return fact;
//     }
// }

// console.log(factorial(7));

// // countVowels(str) → String me total vowels (a, e, i, o, u) count karo.

// function countVowels(str){
//     return (str.match(/[aeiou]/gi)|| [].length);
// }
// console.log(countVowels("ankit"));


// reverseString(str) → Di gayi string ko reverse karke return karo.
// function reverseString(str){
//     return str.split('').reverse().join('');
// };

// console.log(reverseString("ram ram"));

//split-> string ko chote array ke part mai tod dena
//reverse -> unhe reverse kr dega
//join -> un reverse ko baps jod dega










