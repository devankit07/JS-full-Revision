// oops
// object oriented programming

// code fela hua na rahe uske liye hum oops concept use krte hai jisme code ko class object and fucntion ki form mai tod dete hai..

// 1 class -> Blueprint jisme se objects bante hain.
class Car {}

// 2 objects ->  Class ka real instance jo actual data hold karta hai.
let c1 = new Car();

// 3 constructor -> class bnte hi auto run hota hai .
constructor(time);
{
  this.name = time;
}

// 4 protorype -> Extra properties/functions ka backup storage jisse saare objects share karte hain (its a shared memory)
Car.prototype.drive = function () {};

// this -> Runtime par jis object ne function call kiya hota hai, this usi ko point karta hai.

// this ki value or nature change ho jata h is bat se ki use kha use kr rha hai .
// global scope->  window - pm ya suprem hai window 
// function -> window
// method -> ek fnc jo obj ke inside ho  usme this ki value = object 
// event handler -> jispr event handler lga ho wahi this hota hai
// class ->  blank object jab new keyword ke sath use call kre h.

// call, apply , bind

// call  Function ko turant call karta hai, aur this ko manually set karne deta hai.
fun.call(obj);
// apply call() jaisa hi, bas arguments array form me leta hai.
fun.apply(obj, [a, b]);
// bind  Function ka copy return karta hai jisme this permanently set hota hai.
let fn = fun.bind(obj);

// class expression , -> isme class ek variable bn jata hai ,  like

let adimanav = class {
  constructor() {
    this.name = "kuchkuch";
    this.age = 25;
  }
};

let hum = new adimanav();

// hoisting mai [let hum = new adimanav();] ye part class create se pehle kiya to error because pehle hi cal nhi kr sakte.

// inheritance -> koi class kisme kuch kuch hai ek or class bnayi jisme purani ke data chaiye and new ke khud ka data but dono relte krti ho tb data class data lena  = inheritance

class pen {
  constructor() {
    this.price = 20;
    this.body = "plastic";
  }
  write() {
    console.log("writing");
  }
}

class bluePen extends pen {
  constructor() {
    super();
    this.color = "blue";
  }

  flexible() {
    console.log("flexible");
  }
}

let pen1 = new bluePen();
console.log(pen1);

// setter and getter

// sbse pehle jb koi class bna re hai usme koi vairable private ya public hai ye btane ke liye _ lgane se ek hint hota hai ki ye private ki trh treat hona chaiye value value change ho sakti h [this._name = "ankit"] kuch aise ...
// set value update or read  get us ko read krne ke clean way -> inhe tab use krna hoya hai jab private vauable value sahi way se cahnge krni ho.

class Manav {
  constructor() {
    this._age = 24;
  }

  set age(val) {
    if (val < 0) {
      console.error("not");
      return;
    }
    this._age = val;
  }

  get age() {
    return this._age;
  }
}

let pehla = new Manav();
pehla.age = 3;



//synchronous/asynchronous

// js single threaded yani synchronous

// syn-> single threaded -> Kaam ek-ek karke hota hai, line by line. Agla code tab chalega jab pehla complete ho jaaye.

// it's a problem is se site stuck/ freeze ho jati h solution hum syn ko asyn mai convert kr akte h.

// async -> Kaam background me hota hai, wait nahi karta. Baaki code chalti rahegi jab tak async kaam complete nahi hota.


// callbacks and problem in callback

//tis a function.never runs instantly, when your work done then execute auto..
// ya ek fncs mai callback ko pass krna ..

function abc(argu){
  argu();
}
abc(function(){
  console.log("isme ye fnc pass hoga ")
})

// callback example..

function usersedetailslaoo(add,callback){
  setTimeout(()=>{
    callback(22);
  },3000);
}

usersedetailslaoo("h25,block-8", function(detail){
  console.log(detail);
})
