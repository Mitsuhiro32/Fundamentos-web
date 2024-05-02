// 1
console.log(hello);
var hello = 'world';
// var hello;
// console.log(hello); // undefined
// hello = 'world';

console.log("-------------------");

// 2
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
// var needle;
// function test() {
//     var needle;
//     needle = 'magnet';
//     console.log(needle); // magnet
// }
// needle = 'haystack';
// test(); // magnet

console.log("-------------------");

// 3
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan;
// function print() {
//     brendan = 'only okay';
//     console.log(brendan); // only okay
// }
// brendan = 'super cool';
// console.log(brendan); // super cool

console.log("-------------------");

// 4
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food;
// function eat() {
//     var food;
//     food = 'half-chicken';
//     console.log(food); // half-chicken
//     food = 'gone';
// }
// food = 'chicken';
// console.log(food); // chicken
// eat(); // half-chicken

console.log("-------------------");

// 5
//!mean(); 
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// var mean;
// mean(); // mean is not a function (Se detiene la ejecución)
// console.log(food); // food is not defined
// mean = function () {
//     var food;
//     food = "chicken";
//     console.log(food); // chicken
//     food = "fish";
//     console.log(food); // fish
// }
// console.log(food); // food is not defined

console.log("-------------------");

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre;
// function rewind() {
//     genre = "rock";
//     console.log(genre); // rock
//     genre = "r&b";
//     console.log(genre); // r&b
// }
// console.log(genre); // undefined
// genre = "disco";
// rewind(); // rock r&b
// console.log(genre); // disco

console.log("-------------------");

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo); // seattle
//     dojo = "burbank";
//     console.log(dojo); // burbank
// }
// dojo = "san jose";
// console.log(dojo); // san jose
// learn(); // seattle burbank
// console.log(dojo); // san jose

console.log("-------------------");

// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";  //! Error de asignación a una constante
    }
    return dojo;
}
// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     }
//     else if (dojo.students <= 0) {
//         dojo = "closed for now"; // Asignación a una constante
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65)); // { name: 'Chicago', students: 65, hiring: true }
// console.log(makeDojo("Berkeley", 0)); // error de asignación a una constante
