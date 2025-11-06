// array[]-> ka matlab hai [ke andar hum multiple value store kar sakte hai]
// baki language mai alga hota hai agr num sotre kr rhe to num hi chr to chr

//create array
let marks = [10,20,40,50];
//access ->index yani position hoga 0 se suru  
marks[0];
//modify
marks[2]= 77;


//arrays methods
//method mtlb -> array bnaya us array ke namke ange .methodname();

let arr = [1 ,5,9,12,24,32,39,41,47,50];

//push-> arr ek last index ke bad new value bhej dena
arr.push(60);

//pop-> arr ke last se value hatana
arr.pop()

//shift-> arr ke startinf se value hata deta hai
arr.shift();

//unshift-> arr ke start mai value add kar deta hai 

arr.unshift(0);

//splice-> ye arr ke bich se value hatata bs ye batana hota (khase ,kitni)

arr.splice(2,3);

//slice -> (khase,khatak)hatana hai + ye main arr ki ek copy variable deta hai return mai 
let newarr = arr.slice(0,3);

// reverse -> ye arr ko reverse kar deta hai.
arr.reverse();

// sort -> ye assecnding order ya descending order mai krta hai , ek fucntion bhi accept krta hai

let sr =arr.sort(function(a,b){
    return b-a;
});







