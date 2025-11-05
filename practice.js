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



// Even Numbers till N
// Take a number N and print all even numbers from 1 to N using a loop.

// Reverse Counting
// Take a number N and print numbers from N down to 1 using a loop


