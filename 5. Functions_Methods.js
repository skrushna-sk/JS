// // Functions in JS:
// // Block of code that performs a specific task, can be invoked(call) whenever needed
// // redundancy / repeatability reduces    (DRY: Dont Repeat Yourself)

// console.log("Hello");
// console.log ("abc".toUpperCase());
// console.log([1, 2, 3].push(4));

// // function definition:
// function functionName() {
//     //do some workor block of code
// }

// function functionName(parameter1, parameter2,...) {
//     //do some work or block of code
// }

// // function call/invoke:
// functionName();

// function myFunction() {
//     console.log("Welcome all of you!");
//     console.log("We love JavaScript :)");
// }
// myFunction();

// function myFunction(msg) { //parameter input
//     console.log(msg);
// }
// myFunction("I love JavaScript ƪ(˘⌣˘)ʃ");

// function sum(a, b) {
//     console.log(a + b);
// }
// sum (2, 3)

// function sum(a, b) {  //Local variables -> scope
//     s = a + b;
//     return s;  // anything written after return never execute, return is generally last line of block of code.
// }
// let val = sum (5, 3)
// console.log(val);

// // function parameters are like local variables of function, they have block of code scope.

// // Arrow functions : Compact way of writing a function, Used for small codes.
// const  functionName = (parameter1, parameter2...) =>{
//     //do some work or block of code
// }

// // sum function:
// const sum = (a, b) {
//     return a + b;
// }

// // Arrow sum:
// const arrowSum = (a, b) => {
//     console.log(a + b);
// };
// arrowSum(1, 2);

// // multiplication function:
// function mult(a, b) {
//     return a * b;
// }

// // Arrow multiplication:
// const arrowMult = (a, b) => {
//     console.log (a * b);
// };
// arrowMult(2, 3);

// //  print Hello:
// const printHello = () => console.log("Hello");  //can remove curly braces

// // Qs1. Create a function using the function keyword that takes a  string as an arguments & 
// // return the number of vowels in the string.
// function countVowels (str) {
//     let count = 0;
//     for (const char of str) {
//         if (
//             char === "a" ||
//             char === "e" || 
//             char === "i" || 
//             char === "o" || 
//             char === "u"
//         ) {
//             count ++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("Shrikrushna"))

// // // Create an arrow function to perform the same task.
// const countVow = (str) => { 
//     let count = 0;
//     for (const char of str) {
//         if (
//             char === "a" ||
//             char === "e" || 
//             char === "i" || 
//             char === "o" || 
//             char === "u"
//         ) {
//             count ++;
//         }
//     }
//     return count;
// }
// console.log(countVow("Shrikrushna"))

// // forEach Loop in Arrays : This is method
// // arr.forEach (callBackFunction)   //used only in arrays

// // callback function : Here, it is a function to execute for each element in the array.
// // A callback function passed as an argument to another function.

// arr.forEach((val) => {
//     console.log(val);
// })

// function abc() {
//     console.log("Hello");
// }

// function myFunc(abc) {
//     return abc
// }

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printVal(val) {  //value at each index
//     console.log(val);
// });

// let arr = ["Pune", "Delhi", "Chennai"];
// arr.forEach((val) => {
//     console.log(val);
// });

// // 3 optional parameters : 1.value(item), 2.index(position), 3.array
// let arr = ["Pune", "Delhi", "Chennai"];
// arr.forEach((val, i) => {
//     console.log(val.toUpperCase(), i);
// });

// let arr = ["Pune", "Delhi", "Chennai"];
// arr.forEach((val, i, arr) => {
//     console.log(val.toUpperCase(), i, arr);
// });

// // Higher order functions/Methods : Use other functions as parameter or return another function.

// // Qs1. For a given array of numbers, print the square of each value using the forEach loop.
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((val) => {
//     console.log(val ** 2)
// })

// let nums = [6, 52, 39];
// let calcSquare = (num) => {
//     console.log(num * num);
// };
// nums.forEach(calcSquare);

// // Some more Array Methods:
// // map : creates new array with the results of some operations.
// // The value its callback returns are used to form new array.

// // .map => arr.map(callbackFnx(value,index, array))

// let nums = [6, 5, 3];
// let newArr = nums.map((val) => {
//     return val * 2;
// });
// console.log(newArr)

// let nums = [67, 52, 39];
// let newArray = nums.map((val) => {
//     return val;
// });
// console.log(newArray)

// // Some more Array Methods:
// // filter : creates a new array of elements that give true for a condition/filter.
// // Does not form new array.
// // eg. all even elements
// let Array =[2, 4, 5, 7, 8, 9, 6]
// let newArr = Array.filter((val) => {
//     return val % 2 === 0;
// })
// console.log(newArr)

// // Some more Array methods:
// // Reduce : Performs some operations & reduces the array to a single value. It returns that single value.
// Array1 = [1, 2, 3, 4, 5]
// const initialvalue = 0;
// const sumWithInitial = Array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, initialvalue,
// );
// console.log(sumWithInitial);

// let arr = [2, 3, 4, 5];
// const output = arr.reduce((prev, curr) => {
//     return prev + curr;
// });
// console.log(output);

// let arr = [2, 3, 4, 5];
// const output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// });
// console.log(output);

// // Qs1. We are given array of marks of students. Filter out of marks of students that scored 90+.
// let marks = [97, 64, 32, 49, 99, 86];
// let toppers = marks.filter((val) => {
//     return val > 90;
// })
// console.log(toppers);

// // Qs2. Take a number n as input from user. Create an array of number from 1 to n.
// // Use the reduce method to calculate sum of all numbers in the Array.
// // Use reduce method to calculate product of all numbers in the array.
// let n = prompt("Enter a number: ");
// let arr = [];
// for (let i=1; i<=n; i++ ) {
//     arr[i-1] = i; 
// }
// console.log(arr);
// let sum = arr.reduce((res, curr)=> {
//     return res + curr;
// })
// console.log("sum = ", sum);
// let factorial = arr.reduce((res, curr)=> {
//     return res * curr;
// })
// console.log("Factorial = ", factorial);
