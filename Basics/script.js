/* Task to console your name and hobby/age */

console.log("Hello My Name Is Moosa", "I love Coding/Learning"); // without concatination
console.log("Moosa" + "I am 19 years old"); // uses concatination 





// /* Task to perform some calculations on console */

console.log(2 + 2); // normal addition
console.log(parseFloat("2") + 2); // string to number addition
console.log("2" + 2); // it won't result as 4 because it is string addition , Js is assuming as concatination=
console.log(100 * 89 / 3); // normal calculation







/* Task to print current year and month on console */

let date = new Date(); // current UTC time/date
console.log(date.getFullYear()); // prints year
console.log(date.getMonth()); // prints month (0-11)

const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

const month = months[date.getMonth()]; // prints name of curretn month
console.log(month); 





/* Task to print your firstname and lastname using vars on console */

const fName = "Moosa";
const lName = "Haron";

console.log(fName + " " + lName);





/* Task to print your val of var after reassigning and before on console */

let username = "Moosa";
console.log(`Before  : ${username}`);

username = "Haroon"; // reassigned 
console.log(`After  : ${username}`);





/* Task to print the square of a number on console */

let num = 5;
console.log(num * num);  // 25





/* Task to print the type of var on console */

const usrname = "Moosa";
console.log(`The type os username is ${typeof (usrname)}`); // string

const isLoggedIn = true;
console.log(`The type os isLoggedIn is ${typeof (isLoggedIn)}`); // boolean

const age_ = 19;
console.log(`The type of age is ${typeof (age_)}`); // number





/* Task to print the type of var on console */

const age = 19;
if (age > 15) console.log("You are eligible to code :]");




/* Task to print the type of var on console */

const problem = 100 / 0; // whenever the denominator is zero it will return infinity
console.log(problem);





// console type of null 

/* returns an object but it is not an object 
it is a primitive value and bug from the language*/

console.log(typeof (null)); // object




// console PI using Math()

const pi = Math.PI;
console.log(pi); // exact value





// console var without assigning its value

var a;  

// the type of undefined is also undefined
console.log(a); // undefined





// create an array  using const and reassign values of an array

const arr = [1, 2, 3];
arr = [4, 5, 6]; // error, you can't change the reference of an array because constant means cannot be changed 

console.log(arr);  // throw an error





/*  ----------------------------THE END---------------------------------------- */