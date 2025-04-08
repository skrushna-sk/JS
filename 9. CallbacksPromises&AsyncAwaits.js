// // async await >> promise chains >> callback hell  (>> better than)

// // synchronous in JS:
// // synchronous means the code runs in a particular sequence of instructions given in the program.
// // Each instruction waits for the previous instruction to complete its execution.

// // synchronous programming (line runs in sequence):
// console.log("one");
// console.log("two");
// console.log("three");

// // Asynchronous:
// // Due to synchronous programming, sometimes imp instructions get blocked
// // due to some previous instructions, which causes a delay in the UI.
// // Asynchronous code execution allows to execute next instructions immediately & does't block the flow.

// // setTimeout() function: delay in executing
// function hello() {
//     console.log("hello, How are you?");
// }
// setTimeout(hello, 2000)  //timeOut for 2000 miliseconds (2 seconds)

// setTimeout(() => {
//     console.log("hi, Good Morning");
// }, 4000);  //timeout after 4000 miliseconds (4 seconds).

// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("List completed successfully");
// }, 3000);  //timeout after 3000 miliseconds.
// console.log("three");
// console.log("four");

// // calculator
// function sum(a, b) {
//     console.log(a+b);
// }
// function calculator (a, b, sumCallBack) {
//     sumCallBack(a, b);
// }
// calculator(1, 2, sum)

// // calculator complete function callback
// function sum(a, b) {
//     console.log(a+b);
// }
// function calculator (a, b, sumCallBack) {
//     sumCallBack(a, b);
// }
// calculator(1, 2, (a, b) => {
//     console.log(a+b);
// })

// const hello = () => {
//     console.log("hello");
// }
// setTimeout(hello, 3000)

// // Callback Hell:
// // Nested callbacks stacked below one another forming a pyramid structure (pyramid of doom)
// // This style of programming becomes difficult to understand & manage.

// // Nesting
// let age = 28;
// if(age>=18) {
//     if(age>=60) {
//         console.log("senior");
//     }else {
//         console.log("middle");
//     }
// } else {
//     console.log("child");
// }

// for (let i=0; i<5; i++) {
//     for(let j=0; j<5; j++) {
//         console.log(j);
//     }
// }

// for (let i=0; i<5; i++) {
//     let str = "";
//     for(let j=0; j<5; j++) {
//         str = str + j;
//     }
//     console.log(i, str);
// }

// // nested callack (Callback Hell)
// function getData(dataId) {
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 2000);
// }
// getData(1);
// getData(2);
// getData(3);

// function getData(dataId, getNextData) {   //2s delay
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// // callback hell structure:
// getData(1, () =>{  //arrow function must be used to not to execute immediately.
//     console.log("getting data2...")
//     getData(2, () => {
//         console.log("getting data3...")
//         getData(3, () => {
//             console.log("getting data4...")
//             getData(4);
//         });
//     });
// });

// // Simulating an asynchronous function:
// function getData(id, callback) {
//     console.log(`Getting data ${id}...`);
//     setTimeout(() => {     // Simulating async delay using setTimeout
//         if (callback) callback();
//     }, 1000);
// }
// getData(1, () => {  // Nested callbacks (Fixed structure)
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });

// // promises:
// // promise is for "eventual" completion of task. It is an object in JS.
// // It is a solution to callback hell.
// // let promise = new Promise((resolve,reject) => {...})
// // this....(resolve,reject) => {...} is function with 2 handlers.
// // *resolve & reject are callbacks provided by JS. 
// // 3 states of promise: 1.Pending, 2.Fulfiled[resolved], 3.Rejected

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success")
// });
// function getData(dataId, getNextData) {   //2s delay
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             if (genNextData) {
//                 getNextData();
//             }
//         }, 2000);
//     })
// }

// // A javascript promise object can be:
// // Pending: the result is undefined
// // Resolved: the result is a value (fulfiled).... resolve(result)
// // Rejected: the result is an error object.... reject(error)
// // *Promise has state (pending, fulfiled) & some result (result for resolve & error for reject).

// // .then() & .catch()
// // promise.then((res) => {...})     //after fulfilling promise we use .then
// // promise.catch((err) => {...})    //after rejecting promise we use .catch

// const getPromise = () => {
//     return new promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve ("success");
//     });
// };
// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled");
// });
// promise.catch((err) => {
//     console.log("rejected, err");
// });