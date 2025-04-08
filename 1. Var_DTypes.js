// // console.log is used to log (print) a message to the console.

// console.log("welcome to website!");
// console.log("shrikrushna karale");
// console.log("I love JavaScript!");


// // variables in JS
// // variables are containers for data
// // containers store data
// // There are memory locations

// // fullName -> camel case [This case used often]
// // full_name -> snake case
// // full-name -> kabab case
// // FullName -> pascal case
// // FULL_NAME -> upper snake case
// // strFullName -> Hungarian Notation

// // variable rules-
// // 1. case sensitive.
// // 2. only letters, digits, underscore(_) and $ allowed. (not even SPACE)
// // 3. only letters, underscore(_) or $ should be first character.
// // 4. reserved words cannot be variable names. 

// // assignment operator(=)
// fullname = "tony stark";
// console.log(fullname);
// age = 24;
// price = 99.99;
// // null - know the value is empty
// x = null; 
// // undefined - don't know the value
// y = undefined;
// isFollow = true;
// // This is dynamic language it updates the variables
// fullname = 25
// FULLNAME = "shrikrushna"
// console.log(FULLNAME);

// // define variables (keywords)
// // var: variable can be re-declared & updated. A global scope variable.(never use this in JS, ES6(ECMAScript 2015, is the 6th version of ECMAScript, a standard for scripting languages like JavaScript))
// // let: variable cannot be re-declared but can be updated. A block{} scope variable.
// // const: variable cannot be re-declared or updated(but, object key can be updated). A block{} scope variable. (prefer more)

// let fullName = "steve rogers";
// let age = 24;
// // update variable (don't use "let" again)
// age = 28;
// let totalPrice = 1000;
// console.log(age);

// // to represent fixed value in code, prefer more than others.
// // const variable cannot be updated, always need to assign value.
//     const PI = 3.14;
//     console.log(PI)

// // declare variable as undefined:
// let a;
// console.log(a);
// // update value for a
// a = 10;
// console.log(a)

// // Block:
// // block is curly braces/bracket {}
// // code written in { code } is called as one block.
// {
//     let a = 5;
//     console.log(a);
// }
// {
//     let a = 10;
//     console.log(a);
// }

// // Data types in JS:
// // Data types categories:
// // 1. Primitive data types(7): Number, Strings, Boolean, Undefined, Null, BigInt, Symbol
// // 2.Non-primitive data types: objects(array, functions)

// // Object: Collection of values in "key:value" pair
// // To see data type: typeof
// // boolean varibale: is____.
// // let x = BigInt("123");
// // let y = Symbol("Hello!")

// const student = {
//     fullName: "Rahul kumar", 
//     age: 20,
//     cgpa: 8.2,
//     isPass: true
// }
// student["age"] = student["age"+ 1]
// console.log(student["age"]);

// const product = {
//     title: "Ball pen",
//     rating:4,
//     offer: 5,
//     price: 270,
// };
// console.log(product);

// const profile = {
//     username: "@skrushna.sk",
//     isFollow: false,
//     followers: 123,
//     following: 123,
// };
// console.log(profile);
// console.log(typeof profile["isFollow"])
// console.log(typeof profile["followers"])