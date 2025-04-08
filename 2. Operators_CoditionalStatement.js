// Comments in JS (Part of code which is not executed)
// This is single line comment.
/* This is multi-line comment. */

/* This code prints hello
on our console window. */
// console.log("hello.")

// // Operators in JS (Used to perform operation on data):
// // Arithmatic Operators: +, -, *, /, %(modulus), **(Exponentiation), >(Increement), <(Decrement)
// let a = 5;
// let b = 2;
// console.log("a + b = ", a+b);
// console.log("a - b = ", a-b);
// console.log("a * b = ", a*b);
// console.log("a / b = ", a/b);
// console.log("a % b = ", a%b);
// console.log("a ** b = ", a**b);

// // Unary operators: Increment(++) , Decrement(--)
// // post increment (a++, a--), pre increment (++a, a--)
// // a++ --> a=a+1, a-- --> a=a-1 Prints value first
// // ++a --> Its changes the value first then print out
// let a = 5;
// let b = 2;
// console.log("a = ", a, "& b = ", b);
// a++; //a=a+1
// console.log(a); //6

// let a = 5;
// let b = 2;
// console.log("a = ", a, "& b = ", b);
// console.log("++a= ", ++a); //
// console.log("a++= ", a++);
// console.log("--a= ", --a);
// console.log("a--= ", a--);

// // Assignmnet aperators (to assign value):
// // =  --> Equals
// // += --> A+=1.... A=A+1
// // -= --> A-=1.... A=A-1
// // *= --> Multiplication
// // %= --> Modulus
// // **= --> Exponentiation

// let a = 5;
// let b = 2;
// a += 4; // a=a+4
// console.log("a = ", a);

// // Comparison operators:
// // == --> Equals to
// // != --> Not equal to
// // === --> Equal to & type
// // !== --> Not equal to & type
// // > --> Greater then
// // >= --> Greater then equal to
// // < --> Less than
// // <= --> Less than equal to

// let a = 5;
// let b = 2;
// console.log("5 == 2", a==b)  //False
// console.log("5 != 2", a!=b)  //true

// let a = 5; //Number
// let b = "5"; //string --> number conversion automatically
// console.log("a == b", a == b); //true

// // to not to convert string into number aytomatically we use stricter version of eqaul to & type (===)
// let a = 5; //Number
// let b = "5"; //string --> number conversion automatically
// console.log("a === b", a === b); //false
// console.log("a !== b", a !== b); //true

// // Logical operators:
// // && --> Logical AND (All values should be true)
// // ||(pipe) --> Logical OR  (Either values hsould be true)
// // ! --> Logical NOT (Reverse experession)

// condition (1,2) --> (T,T) (T,F) (F,T) (F,F) 
// && --> (T)(F)(F)(F)
// || --> (T)(T)(T)(F)

// let a = 6;
// let b = 5;
// let cond1 = a > b; //true
// let cond2 = a === 5; //false
// console.log("cond1 && cond2 = ", cond1 && cond2);

// let a = 6;
// let b = 5;
// let cond1 = a > b; //true
// let cond2 = a === 5; //false
// console.log("cond1 || cond2 = ", cond1 || cond2);

// let a = 6;
// let b = 5;
// console.log("!(6<b) = ", !(a<b)); //true

// // Conditional statement (To implement some condition in the code):
// // if statements (To check condition)
// // if-else statement
// // else-if statement

// // if statement
// let mode = "dark"
// let color;
// if (mode === "dark"){
//     color = "black";
// }
// if (mode === "light"){
//     color = "white";
// }
// console.log(color);

// let age = 16;
// if(age >= 18) {
//     console.log("you can vote");
// }
// if (age < 18) {
//     console.log("you CANNOT vote");
// }

// // if-else statement
// let mode = "light"
// let color;
// if (mode === "dark"){
//     color = "black";
// } else {
//     color = "white";
// }
// console.log(color);

// let age = 25;
// if(age >= 18) {
//     console.log("you can vote");
// } else {
//     console.log("you CANNOT vote");
// }

// let num = 10;
// if(num%2 === 0) {
//     console.log(num, "is even");
// } else {
//     console.log(num, "is odd");
// }

// // else-if statement
// age = 25
// if (age < 18) {
//     console.log("junior");
// } else if (age > 60) {
//     console.log("senior");
// } else {
//     console.log("middle");
// }

// let mode = "silver"
// let color;
// if (mode === "dark") {
//     color = "black";
// } else if (mode === "pink") {
//     color = "pink";
// } else {
//     color = "white";
// }
// console.log(color);

// // Ternary operators (condition? true output:false output): works on 3 operands
// // Shorthand for conditional statements.
// let age = 25;
// let result = age >= 18 ? "adult" : "not adult";      // if...else (? :)
// console.log(result);

// let age = 25;
// age >= 18 ? console.log("adult") : console.log("not adult");

// // MDN Docs
// // https://developer.mozilla.org/en-US/

// // switch topic: not used frequently in programming.
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

// alert("Hello!"); //One time popup
// prompt("Hello!");  //Msg popup with input

// let name = prompt("Hello!");
// console.log(name);   // temporary method to get inputs from user

// // Q1. Get user to input a number using prompt("enter a number:"). Check if the number is a multiple of 5 or not.
// let num = prompt("enter a number:");
// if (num % 5 === 0) {
//     console.log(num, "is multiple of 5");
// } else {
//     console.log(num, "is NOT a multiple of 5");
// }

// // write a code which can give grades to students according to their scores (JS Program)
// let score = prompt("Enter score (0-100):");
// if (score >=90 && score <= 100) {
//     grade = "A";
// } else if(score >=70 && score <= 89) {
//     grade = "B";
// } else if(score >=60 && score <= 79) {
//     grade = "C";
// } else if(score >=50 && score <= 69) {
//     grade = "D";
// } else if(score >=0 && score <= 49) {
//     grade = "E";
// }
// console.log("According to your scores, your grade was : ", grade)