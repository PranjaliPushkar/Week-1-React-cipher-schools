//1. map 

// let array = [1,1,2,3,6];
// let newArray = [];
// for (let i = 0; i<array.length; i++){
//     newArray[i] = array[i] * array[i];
// }
// console.log(newArray);

let array = [1,1,2,3,6];
function functionMap(element){
    return element *element;
}
let newArray = array.map(functionMap)
console.log(newArray);
// in js , a function is also a Js object

let addTwoNum = (a,b) => a+b;
let n1 = 3;
let n2 = 9;
addTwoNum(n1,n2);

let arr1= [2,4,3,5,5,7];
// let arr = arr1.map((element) => element * element);
// console.log(arr);

let arr = arr1.map((element,index) =>{
    return element * element});
console.log(arr);

//2.forEach
// let array1 = [2,3,4,5,6,7];
// array1.forEach((element,index)=>{
//     console.log(element);
// });

let array1 = [2,3,4,5,6,7];
array1.forEach((element,index)=>{
    element *= element;
    console.log(element);
});
console.log("array is ", array1);

//3.filter

let array2 = [2,3,4,5,6,7];
let array3= array2.filter((element) =>
   element>= 30
);

console.log(array3);

let thing = [2,3,4,];
let temp = thing.find((value)=>{
    return value >20;
});
console.log(temp);

//4.sorting
let list = [1,2,3,4,5,6];
// let sortArray = list.sort();
//console.log(sortArray);

let sortArray = array.sort((el1,el2)=>{
    el1 = Number(el1);
    el2 = Number(el2);
return el1-el2;
});
console.log(sortArray);

/Object Destructuring
let details = {
    name: "John",
    age: "24",
    address: {
        city: "New York",
        state: "NY",
        country: "USA",
        street: "Brooklyn",
        passportDetails: {
            passportNumber: "ABCD1234",
        },
    },
};
console.log(details.address.passportDetails.passportNumber);

//Array matching and Object matching
let obj1 = {name: "Ram"};
let obj2 = {name: "Ram"};
functionareEqual(obj1,obj2) {
    if (obj1 == obj2) {
        return true;
    }
    if(object.key(obj1).length ! = object.key(obj2).length) {
        return false;
    }
    for (let key of object.keys(obj1)) {
        if (typeof obj2[key] == "undefined") {
            return false;
        }
        if (obj2[key] != obj1[key]) {
            return false;
        }
    }
    return true;
}
console.log(areEqual(obj1, obj2));

//Map ans Set
let map = new map();
map.set(1, "Ram");
map.set2(2, "Alex");
console.log(map);
map.value()

let set = new set();
set.add(1);
set.add(2);
console.log(set);

//Class
class Animal {
    noOfLegs;
    color;
    family;
    sound;
    constructor(noOfLegs.color,family,sound) {
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.family = family;
        this.sound = sound;
    }
}
let animal = new Animal(4, "browm","rodent","something");
console.log(animal);








