// hum koi code likhe or bo turant na chale uske lie hum  function chlate h

// function is like a reusable block of code to perform a task.


// functon declaration / function expression

function abd (){
    console.log('basic function declare');
}
abd();


let bbs = function(){
    console.log('varible se function expresion')
}
bbs();

let fcf = ()=>{
    console.log('arrow or fat arrow function');
}

fcf();


// parameter and arguments -> function name ke ()kuch name likha to vo parameter  and call jha kr re hai function name ko uske ()jo likha bo paramtere ko follow krta hai.

function jodo (v4){
console.log(`${v4}nach raha hai`);
}
jodo(ghoda);


// default, rest and spread operator ->

//  agr argument mai koi value nhi di to parameter mai humm (default)  value de sakte hai..
function defaultaa(v1=1,v2=1){
console.log(v1,v2);
}
defaultaa();

// jb arguments mai value multiple ho to utne hi parameter bhi bnane hote hai use bachne ke liye hum (rest...) parameter mai ...kuchnaam bs phir multiple value hi argument mai koi problem nhi hogi. or function ke parameter mai ... ka mtlb rest hai 

function restaa(...rustam){
     console.log(rustam);
};
restaa(1,5,apple,5,seb);


// return and early return

// return ka matlab jha se aya wahi behj denge

function bgbf(v1){
    return 12+v1;
;}

let val =bgbf(44);
console.log(val);


// early return -> turant wahi pr return kar dena

let age =18
function valid(){
    if(age>=19) return "balik";
    else return "nabalik";
};

let dekho =valid();
console.log(dekho);

//




