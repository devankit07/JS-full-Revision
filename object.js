//object:- hum tab bnate hai jab hume ek chij ke entity chaiye hoti hai..

//create and key value

let obj ={
    name: "ankit",
    age: 20,
    khaana: "chicken",
};

// access by dot and bracket
obj.age(); 
//or
obj["age"];

// nesting and deep access

//nesting ka mtlb andar ke andar uske andar kuch 

let obj1 ={
    name: "ankit",
    age: 20,
    khaana: "chicken",
    location:{
        city: "haryana",
        pin: 121003,
        state: "fardabad"
    },
};

// deep acces use andar se access krna  or destructuring

let {city,pin} = obj1.location;

// for in loop  -> for(variable in objectname){
//console.log(variable)
//}

for (let key in obj){
    console.log(key,obj[key]);
}

// object.keys -> arrays return krta hai

//onject,entries -> array ke andar array krta hai return


// spread operator ... -> copy krne ke liye use hota hai

//object.assign bhi copy ke liye use hota h


// deep cloning -> if object is nested

//json.strungify
//json.parse

let obj2 =JSON.parse(JSON.stringify(obj1));

//optional chaining -> agr ho to de dena brna error nhi dena ?.

obj.location?.city?.state;

// computed properties

let key = "age";
let obj3 ={
    [key]: 25,
};















