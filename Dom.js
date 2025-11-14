// DOM- documnet object model

//4 pillars of dom

// 1. accessing elements

const head = document.querySelector('h1');
const idse =document.querySelector('#id');
const classse =document.querySelector('.class');


// 2. changing html content

head.innerHTML="yeh change ho gya";
classse.innerHTML="class se change ho gya";
idse.innerHTML="id se change ho gya";

// 3. changing styles

head.style.color="red";
classse.style.backgroundColor="yellow";
idse.style.fontSize="30px";


// 4. handling eventlisteners

head.addEventListener('click',function(){
    alert('head clicked');
});

classse.addEventListener('mouseover',function(){
    classse.style.backgroundColor="red";
});

idse.addEventListener('mouseout',function(){
    idse.style.fontSize="70px"
});