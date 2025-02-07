console.log("Hello World");

// create a loop that prints number 1 - 100

for (let i = 1; i <= 100; i++) {
    console.log(`Counts : ${i}`)
}






// create a while loop that prints sum of numbers from 1 to 15

let number = 1;
let sum = 0;

while (number <= 15) {
    number++;
    sum = sum + number;
    console.log("Each Iteration Sum => ", sum);
}

console.log(`Total Sum : ${sum}`)







// create a loop that prints each character of a string

let word = "JAVASCRIPT";

for (let i of word) {
    console.log(i);
}






// create a for loop that extract even numbers and prints rest

// FOR ODD
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log("ITERATION FOR ODD NUMBER => ", i);
    }
}

console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');

// // FOR EVEN
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("ITERATION FOR EVEN NUMBER => ", i);
    }
}






// create a do-while loop that prints number 10 - 1 (reverse order)

let n = 11;
do {
    n--;
    console.log("Iteration => ", n);
} while (n > 1);





// create a forloop to calculate factorial of any number

// decrement

let num = 4;
let fact = 1;

for (let i = num; i > 0; i--) {
    fact = fact * i;
}
console.log(fact);


// increment

let no = 4;
let f = 1;

for (let i = 1; i <= no; i++) {
    f = f * i;
}
console.log(f);






// write a nested loop to print 3x3 grid / matrice of numbers

let row = 1
for (let i = 1; i <= 3; i++) {
    let space = ' ';
    for (let j = 1; j <= 3; j++) {
        space += ` ${row}`; row++;
    }
    console.log(space)
}






// write a for loop to reverse an array's values

const array = [1, 2, 3, 4];

for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}






// write a for loop that prints a reversed array

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - i - 1] = temp;
}
console.log(arr);






// write a while loop that prints numbers divisible by 6

let i = 1;

while (i <= 100) {
    if (i % 6 === 0) {
        console.log("Number => ", n);
    }
    n++;
}






// write a loop that prints all keys of an object

let user = {
    name: 'Moosa',
    age: 19,
    city: 'New York'
};

for (let key in user) {
    console.log(key);
}

console.log("\n");

// write a loop that prints all keys with values of an object

for (let prop in user) {
    console.log(`${prop} : ${user[prop]}`);
}