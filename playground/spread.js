// function add(a, b) {
//     return a + b;
// }
//
// console.log(add(3, 1));
//
// let toAd = [9, 5];
// console.log(add(...toAd));


// let groupA = ['Jen', 'Cory', 'Andrew'];
// let groupB = ['Vikram', 'Alex'];
// let final = [...groupB, 3, ...groupA];
//
// console.log(final);

function greet(name, age) {
    console.log(`Hi ${name}, you are ${age}`);
}

let person = ['Andrew', 25];
let personTwo = ['Jen', 29];

greet(...person);
greet(...personTwo);

let names = ['Ben', 'Andrew'];
let final = [...names, 'Alex'];

final.forEach((name) => {
    console.log(`Hi ${name}`);
});
