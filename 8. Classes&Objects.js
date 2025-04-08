// // Interview points of questions are expected.
// // Someprojects use this frequently but others may not.

// // Prototype in JS:
// // A javascript object in an entity having state and behaviour (properties and method)
// // JS objects have a special property called prototype.
// // We can set prototype using __proto__
// // protottype is reference to an object.
// // *If object & prototype have same method, object's method will be used.

// const student = {
//     name: "shrikrushna karale",
//     marks: 94.2,
//     printMarks: function () {
//         console.log("marks = ", this.marks); //student.marks
//     },
// };
// console.log (student.marks);

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };
// const karanArjun = {
//     salary: 50000,
//     calcTax() {
//         console.log("tax rate is 20%");
//     }
// };
// karanArjun.__proto__ = employee;  //set prototype

// // Classes in JS:
// // class is a program-code template for creating objects.
// // These objects will have some state (variables) & some behaviour (functions) inside it.
// // Multiple objects created on same templates.

// // class myClass {
// // constructor() {...}
// // myMethod() {...}
// // }
// // let myObj = new myClass();

// class ToyotaCar {
//     start () {   //function
//         console.log("start");
//     }
//     stop () {    //function
//         console.log("stop");
//     }
//     setBrand(brand) {
//         this.brandName = brand;   //this means every individual object
//     }
// }
// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner");
// let lexus = new ToyotaCar();
// lexus.setBrand("lexus");

// // constructor() method is:
// // Automatically invoked by "new"
// // initializes object
// // this is special method

// class ToyotaCar {
//     constructor(brand) {
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = this.mileage
//     }
//     start () {   //function
//         console.log("start");
//     }
//     stop () {    //function
//         console.log("stop");
//     }
// }
// let fortuner = new ToyotaCar("fortuner", 10); //constructor
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus",12);    //constructor
// console.log(lexus);

// // Inheritance in JS
// // Inheritance is passing down properties & methods from parent class to child class.
// // This is programming concept.
// // to avoid repeatation in object oriented programming.
// // class Parent {
// // }
// // class Child extends Parent {
// // }
// // *If child & Parent have same method, child's method will be used.[Method overriding]

// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }
// class child extends Parent {}
// let object = new child()

// class Person {
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
//     work() {
//         console.log("do nothing");
//     }
// }
// class engineer {
//     work() {
//         console.log("solve problems, build something");
//     }
// }
// class Doctor extends Person {
//     work() {
//         console.log("treat patients");
//     }
// }
// let shrikrushnaObj = new engineer;

// // super Keyword
// // used to call the constructor of its parent class to access the parent's properties and methods.
// // super(args) //calls Parent's constructor
// // super.parentMethod(args)

// class Person {
//     constructor(name) {
//         console.log("enter parent constructor");
//         this.species = "homo sapiens";
//         this.name = name
//     }
//     eat() {
//         console.log("eat");
//     }
// }
// class engineer extends Person {
//     constructor (branch) {
//         console.log("enter child constructor");
//         super(name); //to invoke parent class constructor
//         this.branch = branch;
//         console.log("exit child constructor");
//     }
//     work() {
//         super.eat();
//         console.log("solve problems, build something");
//     }
// }
// let engObj = new engineer("shrikrushna");

// // Qs. You are creating a website for your college. Crreate a class User with 2 properties, name & email.
// // It also  has a method called viewData() tat allows user to view website data.
// let DATA = "secret information"
// class User {
//     constructor(name, enail) {
//         this.name = name;
//         this.email = enail;
//     }
//     viewData() {
//         console.log("data = ", DATA);
//     }
// }
// let student1 = new User("shrikrushna,smk@gmail.com");
// let student2 =new User("minal", "mno@gmail.com");
// let teacher1 = new User ("Dean", "dean@college.com");

// // Qs. Create a new class called Admin which inherits from User. 
// // Add a new method called editData to Admin that allows it to edit website data. 