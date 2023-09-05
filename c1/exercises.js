const myName = "Semos";
const check = true;
const PI = 3.14;

const niza = [1, 2, 3, 4]; // 5, 6
// niza.push(5);
// niza.push(6);
// niza.pop();
niza.splice(2,1);
// prv argument - od kade (od koj element) da pocne
// vtor argument - kolku da se dvizi napred

//console.log(niza);

const person = {
    name: "John",
    age: 30,
    info: function() {
        // ne mozeme da ja koristime arrow funkcijata ako sakame da pristapime do name i age
        return `Your name is ${this.name}, you are ${this.age} old.`;
    },
}

//console.log(person.info());

const students = ["Hristo", "Riste", "Nikola"];

//find
const findResult = students.find((student) => student === "Nikola");
//console.log(findResult);

//map
const mapResult = students.map((student) => {
    if(student === "Riste"){
        student = "Riste e vo pravo";
    }
    return student;
});

//console.log(mapResult);

//['H', 'r', 'i', 's', 't', 'o'] -> char array (niza od karakteri)

//filter

const filterResult = students.filter((student) => student.charAt(0) !== "R");
//console.log(filterResult);

const studentsData = [
    {
        ime: "John",
        fakultet: "FINKI",
        prosek: 8.2,
        grad: "Skopje"
    },
    {
        ime: "Jane",
        fakultet: "FIKT",
        prosek: 9.3,
        grad: "Bitola"
    },
    {
        ime: "Mile",
        fakultet: "Goce Delcev",
        prosek: 7.6,
        grad: "Stip"
    },
    {
        ime: "Oliver",
        fakultet: "FIKT",
        prosek: 8.9,
        grad: "Skopje"
    },
    {
        ime: "Timco",
        fakultet: "American College",
        prosek: 9.9,
        grad: "Ohrid"
    },
    {
        ime: "Petar",
        fakultet: "European University",
        prosek: 9.1,
        grad: "Skopje"
    },
    {
        ime: "Trpe",
        fakultet: "FINKI",
        prosek: 10,
        grad: "Skopje"
    },
    {
        ime: "Marija",
        fakultet: "FINKI",
        prosek: 9.0,
        grad: "Resen"
    },
    {
        ime: "Ana",
        fakultet: "FINKI",
        prosek: 6.0,
        grad: "Bitola"
    },
]

// Task 1: Find all students from Skopje and print their names
const task1 = studentsData.filter((student) => student.grad === "Skopje");
const task1Ime = task1.map((student) => student.ime);
//console.log(task1Ime);

// Task 2: Get all students ascending by prosek
const task2 = studentsData.sort((a, b) => a.prosek - b.prosek).map((student) => student.ime);
//console.log(task2);

// Task 3: find best student(one) from FINKI
const task3 = studentsData.
    filter((student) => student.fakultet === "FINKI")
    .sort((a, b) => a.prosek - b.prosek); 

//console.log(task3[task3.length-1]);

// Task 4: find worst student(one) from Bitola

const task4 = studentsData
    .filter((student) => student.grad === "Bitola")
    .sort((a, b) => a.prosek - b.prosek);

console.log(task4[0]);