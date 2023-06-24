var myName = "John";
console.log(myName);


const myName0= "Johny";
console.log(myName0);

const myName2=[];
console.log(myName2);

myName2.push("john");
console.log(myName2);

//const myName = 5; cannot redeclare block scooped variable

//by using let

let myName1 = "Nick";
console.log(myName1);
myName1= 5;
console.log(myName1);

//let myName = "john"; cannot redeclare block scooped variable

var myName4 = "Nick";
console.log(myName4);
myName1= 5;
console.log(myName4);

var myName4 = "john";
console.log(myName4);

function addTwo(num1 , num2){
    var num = 5;
    return num1 +num2;
}
// console.log (num); var is defined under that function only

//String interpolation

let first = "Priya";
let sec = "Sharma";

//let name = first + " " + sec;

let name =`${first} ${sec}`;
console.log(name);
console.log(first);

//Default params
// function addTwo(num1 , num2){
  
//       return num1 +num2;
// }

let addTwoNum = (num1,num2 = 5) =>{
    console.log(num1);
    console.log(num2);
    return num1 +num2;
};
console.log(addTwoNum(1));

//rest and spread operator

//spread
let array = [1,2,3,4,5];
let newArray = [...array]
//let newArray = [...array,3,4,];
console.log(array);

//rest operator
// let testFunction = (..args)=>{
//     console.log(args);
// };
//let maxOfTwoNumbers= (num1, num2)=>Math.max(num1,num2);
let maxOfNum = (...numb) =>{
    let maximum = Number.MIN_VALUE;
    for(let number of numb){
        maximum = MATH.max(maximum, number);
    }
    return maximum;
};
console.log(maxOfNum(1,2,3,4,5));






