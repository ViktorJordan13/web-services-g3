//Named function

function functionNamed() {
    console.log("I am a named function");
}

//anonymous function

const multiply = function(x, y){
    return x * y;
}

const multiplyArrow = (x, y) => {
    return x * y;
}

// arrow functions - shorter function

const divide = (x, y) => x / y;
// function dividenamed(x, y) {
//     return x/y;
// }

divide(2,1); //povik

// const divideMe = divide; //reference
// console.log(divideMe(6, 2));

//IIFE - immediately invoked function expression
(function () {
    console.log("i am IIFE");
})();

(() => {
    console.log("i am IIFE with arrow");
})();

//Constructor functions - used to create objects
function Student(name, age){
    this.name = name;
    this.age = age;
}
 
const student = new Student("Pero", 25);  // primer za kreiranje object

const car = {
    type: "Fiat",
    model: 500,
    color: "white"
};

console.log(car.model)

//OOP - Object Oriented Programming example in Java
// class Student{
//     String name;
//     int age;
//     double prosek;

//     public Student(){
//         //nulti constructor
//     }
//     public Student(String n, int a, double p){
//         this.name = n;
//         this.age = a;
//         this prosek = p;
//     }

//     int getAge(){
//         return this.age
//     }
       //void setName(String n){
//          this.name = n
//     }
// }

// Methods - functions inside objects

const calculator = {
    add: function(a, b){
        return a + b;
    }
}

console.log(calculator.add(4,7));
console.log(calculator["add"](5,10));

// Callback function
setTimeout( function () {
    console.log("Callback executed");
}, 5000);