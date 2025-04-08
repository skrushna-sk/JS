// // Loops in JS (Used to execute a piece of code again & again)
// // 1. for loop
// // 2. while loop
// // 3. do-while loop
// // 4. for-of loop
// // 5. for-in loop

// // for loop (initialization, stopping condition, updation)
// for (let i = 1; i <= 5; i++) {
//     console.log("Hello")
// } 
// console.log("Loop has ENDED");

// // calculate sum of 1 to n
// let sum = 0;
// let n = 10;
// for (let i = 1; i <= n; i++) {
//     sum = sum + i;
// }
// console.log("sum = ",sum);
// console.log("loop has ended");

// // value of i changing pattern
// for (let i = 1; i <= 5; i++) {
//     console.log("i = ", i);
// } 

// for (let i = 1; i <= 5; i++) {
//     console.log("i = ", i);
// } 
// let i = 6; // redeclaring value of i
// console.log(i);

// for (var i = 1; i <= 5; i++) {
//     console.log("i = ", i);
// } // No need to redeclare
// console.log(i);

// // Infinite loop: A loop that never ends (never run otherwise system will be freezed)

// // while loop: Repeatedly execute a block of code as long as a specified condition evaluates to true. 
// initialization
// while (condition) {
//     // do some work, updation
// }

// let i = 1;
// while (i<=5) {
//     console.log("Hello");
//     i++;
// }

// // do-while loop: execute a block of code at least once, regardless of whether a condition is true or false. 
// do {
//     // do some work, updation
// } while condition

// let i= 20;
// do {
//     console.log("Hello");
//     i++;
// } while (i <= 10);

// let i= 1;
// do {
//     console.log("i =", i);
//     i++;
// } while (i <= 5);

// // for-of loop: Used to iterate over iterable objects, such as arrays, strings, maps, sets, and more.
// // More simpler and readable than for, while loop
// for (let variable of stringVariable) {
//     // do some work, updation
// }

// let str = "Hello";
// for (let i of str) {
//     console.log("i= ", i);
// }

// let str = "JavaScript";
// let size = 0;
// for (let i of str) {
//     console.log("i= ", i);
//     size++;
// }
// console.log("String size = ", size);

// // for-in loop: To iterate over the enumerable properties (keys) of an object.
// for(let key in objectVariable) {
//     // do some work or block of code
// }

// let student = {
//     name: "Shrikr kar",
//     age: 28,
//     cgpa: 8.9,
//     isPass: true
// };
// for (let key in student) {
//     console.log("key=", key, "value=", student[key]);
// }

// // Qs1. Print all even numbers from 0 to 100.
// for (let i = 1; i <= 100; i++) {
//     if (i%2 === 0){
//         console.log("i=", i);
//     }
// }

// // Qs2. Create a game where you start with any random game number.
// // Ask the user to keep guessing the game number until the user enters correct Value.
// let gameNum = 25;
// let userNum = prompt("Guess the game number: ");
// while (userNum != gameNum) {
//     userNum = prompt("You entered the wrong number. Guess again: ");
// }
// console.log("Congratulations, you entered the right number");

// // Strings
// let str = "Shrikrushna"; // All strings should have double inverted comma.

// let str2 = 'Karale'; // All strings should have single iverted comma.

// // create string
// let str = "Apna college";

// // String length
// str.lenghth

// // string Indices
// str[o], str[1], str[2]

// let str = "VIT engineering";
// console.log(str[6])

// // Template literals in JS: Way to have embedded expressions in strings
// // `this is template literals`
// let specialString = `This is template literal`;
// console.log(specialString);
// console.log(typeof specialString);

// // String interpolation: To create strings by doingsubstitution of placeholders.
// // `String text ${expression} string text`

// let obj = {
//     item : "Pen",
//     price: 10,
// };
// console.log("the cost of", obj.item, "is", obj.price, "rupees");

// let obj = {
//     item : "Pen",
//     price: 10,
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// let specialString = `this is a template literal ${1 + 2 + 3}`;
// console.log(specialString);

// // Escape character (\n --> new line, \t --> tab)
// console.log("Hello\nworld\ngood\nmorning");
// console.log("Hello\tworld\tgood\tmorning");

// let str = "Hello\tworld\tgood\tmorning"; // \t always count as a single character.
// console.log(str.length);

// // strings method in JS: These are built-in functions to manipulate a string, Do not change original string.
// // strings are immutable in JS (cannot be changed).
// // 1. str.toUpperCase()
// // 2. str.toLowerCase()
// // 3. str.trim() // Remove whitespaces in starting and end.
// // 4. str.slice(start, end?) //Return part of string 
// // 5. str1.concat(str2) // joins str2 with str1  // Or str1 + str2
// // 6. str.replace(searchVal, newVal)
// // 7. str.charAt(index)

// str = "shrikrushna"
// newstr = str.toUpperCase();
// console.log(str);
// console.log(newstr);

// let str ="   shrikrushna "
// console.log(str.trim())

// // Qs1. Prompt the user to enter their fullname. generate a username for them based on the input.
// // start username with @, followed by their fullname and ending with the fullname length.
// let fullname = prompt("Enter your fullname without spaces");
// let username = "@" + fullname + fullname.length;
// console.log(username);
