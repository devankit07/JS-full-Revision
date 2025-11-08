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


// map filter foreach reduce ye sab ek fncs aaccept krte hai

//forEach-> har ek value ke liye fncs ko chalata hai.
arr.forEach(function(val){
   console.log(val+5);
});

//map-> use map only when you want new array on depends on old array data
// jab bhi aisa case dikhe jha par ek array se naya array bngega or bo naya array kuch value ko rakhega. agr kuch return nhi krega to undefined hoga.

let ans = arr.map(function(hell){
    return 12;
});

//filter-> ye bhi new array bnata hai but kuch value hi leta hai old array se agr true hai.

let mewarr = arr.filter(function(val){
    if(val>4) return true;
});

// reduce->  ek array se ek value banana.

arr.reduce(function(accumlator, val){
    accumlator + val;
},0);

//some, find, every-> 

//some-> ye check karta hai ki kya koi ek value true hai ya nahi.
arr.some(function(val){
    if(val>4) return true;
});

//find-> ye pehli value return karta hai jo true hai.
arr.find(function(val){
    if(val>4) return true;
});

//every-> ye check karta hai ki kya sabhi value true hai ya nahi.
arr.every(function(val){
    if(val>4) return true;
});



















