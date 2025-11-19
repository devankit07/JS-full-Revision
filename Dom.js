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

// math random & floor

// math.random -> se cure random number generate krta hai 0 to 0.99999 tak
const randomNum = Math.random(); 
console.log(randomNum);  

// math.floor -> se decimal ko remove krta hai
const flooredNum = Math.floor(4.7);
console.log(flooredNum); 


// create emelements -> is se naya element create kr skte hai

 const newElement = document.createElement('tagname');
    newElement.innerHTML="yeh naya element hai";
    console.log(newElement);

// append element -> is se element ko add kr skte hai ya window me show kr skte hai
    document.body.appendChild(newElement);

// remove element -< is se element ko remove kr skte hai
    newElement.remove();

//replace element -> is se element ko replace kr skte hai
 const anotherElement = document.createElement('p');
 anotherElement.innerHTML="yeh replace hua element hai";
 document.body.replaceChild(anotherElement, newElement);


 // setInterval -> is se hum koi function ko bar bar chla skte hai specified time ke baad
 setInterval(function(){
    console.log("yeh function har 2 second me chlega");
 },2000);


// clearInterval -> is se hum setInterval ko rok skte hai
    const intervalId = setInterval(function(){  
        console.log("yeh function har 2 second me chlega");
     },2000);

     clearInterval(intervalId); // is se interval ruk jayega



 // setTimeout -> is se hum koi function ko ek baar specified time ke baad chla skte hai

    setTimeout(function(){
        console.log("yeh function 3 second ke baad 1 bar chlega");
    },3000);


// clearTimeout -> is se hum setTimeout ko rok skte hai
    const timeoutId = setTimeout(function(){
        console.log("yeh function 3 second ke baad 1 bar chlega");
    },3000);    

    clearTimeout(timeoutId); // is se timeout ruk jayega


 









