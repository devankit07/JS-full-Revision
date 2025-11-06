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

// recusion in js

//   function recursiveFunction() {
      // do something
//   recursiveFunction(); // function calling itself
// }

function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
    return; // base case
  }
  console.log(n);
  countdown(n - 1); 
}

countdown(5);



// first class function-> function ko value ki tarah treat kr sakte hai


function abcd(val){
    val();
}
abcd(function(){
    console.log("heyyy")
})

// high order function-> bo fncs hota hai jo ki return kre ek fncs ya phir accept kre ek fncs apne parameter mai.

function bcs(h4){

}

bcs(function(){
    console.log("isme bcs ek high order gnc hai kyuki iske parameter mai ek fncs accept ho rha hai")
});


function lol(){
    return function(){
        console.log("isme paramete ma nhi balki function return ho rha h")
    }
}
lol();



// pure and impure

let a = 11;

function pure(){
    console.log("isme koi value change nhi ho ri to pure fncs")
};

function impure(){
    console.log("isme a ki value change hogi to impure")
    a++;
};

// clousers -> ek fncs jo return kre fncs but return hone wala parents fncs ka koi variable use krega.

function clousers(){
    let a = 14;
    return function(){
        console.log(a)
    }
};


// lexical scoping -> ka matlab unki phiysical position ka scope kya hai 
// isme a b c inki physical position kha se kha tak accessable hai use lexical scope bolte hai.

function abcd(){
    let a = 11;
    function rfds(){
        let b = 12;
        function ood(){
            let c =13;
        }
    }
}


// iife-> immediatly invoke mean turant run hoga within second
(function(){
    console.log("turan chalunga call akredy ho !")
})();


// hoisting -> declaration and expression

//-> declaration mai hosting hoti hai yani function delare se pehle use call kra ja sakt hai 

gff();



function gff(){
    console.log("hoistinf ho sakti hai ")
};


//-> expression mai hoisting nhi hotii hai kyunki bo fncs variable se bana hota hai 

let gff = function(){
    console.log("hoistinf not work ")
};









