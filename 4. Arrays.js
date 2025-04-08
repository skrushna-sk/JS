// // Arrays in JS : Collections of items
// // Array is in form of index: value pair just like objects(key:value)
// // mutable (can change value)
// // Create array
// let heroes = ["ironman", "hulk", "thor", "batman"];
// let marks = [96, 75, 48, 83, 66];
// let info = ["rahul", 86, "Delhi"];

// let info = ["rahul", 86, "Delhi"];
// console.log(info);
// console.log(info.length);  //property

// let heroes = ["ironman", "hulk", "thor", "batman"];
// console.log(heroes);

// // Array indices : arr[0], arr[1], arrr[2]....
// arr = [1, 2, 3, 4, 5]
// arr[0]  //Display 0th position of array //[1]
// arr[0] = 9  //change 0th position to 9  //[9, 2, 3, 4, 5]

// // Looping over an Array
// // Print all elements of an array
// let heroes = ["ironman", "hulk", "thor", "batman", "antman", "shaktiman"];
// for (let i = 0; i < heroes.length; i++){
//     console.log(heroes[i]);
// }

// // for-of loop preffered mostly in array
// let heroes = ["ironman", "hulk", "thor", "batman", "antman", "shaktiman"];
// for (let i of heroes) {
//     console.log(i);
// }

// let heroes = ["ironman", "hulk", "thor", "batman", "antman", "shaktiman"];
// for (let i of heroes) {
//     console.log(i.toUpperCase());
// }

// // Qs1. for a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// // find average marks of the entire class.
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let i of marks) {
//     sum += i;
// }
// let avg = sum / marks.length
// console.log(`avg marks of the class= ${avg}`);

// // Qs2. for given array with prices of 5 items -> [250, 645, 300, 900, 50]
// // all items have an offer of 10% OFF on them. change the array to store finalprice after applying offer.
// let prices = [250, 645, 300, 900, 50]
// let i = 0
// for (let val of prices) {
//     console.log(`value at i${i} = ${val}`);
//     let offer = val/ 10;
//     prices[i] = prices[i] - offer;
//     console.log(`value after offer = ${prices[i]}`);
//     i++;
// }

// let prices = [250, 645, 300, 900, 50]
// for (let i = 0; i < prices.length; i++) {
//     let offer = prices[i] / 10;
//     prices[i] -= offer;
// }
// console.log(prices);

// // Array methods  in JS:
// // push() :      Add to end  // Changes original array
// // pop() :       Delete from end & return   // Change original array
// // toString() :  Convert array to string  // 
// // concat() :    joins multiple arrays & returns result  //Do not change original array
// // unshift() :   add to start  // Like push() method
// // shift() :     delete from start & return  // Like pop() method
// // slice() :     returns a piece of the array //Do not change original array  //slice(startIndex, endIndex)
// // splice() :    change original array (add, remove, replace)  //splice(startIndex, deleteCount, newElementAdd...)

// let veggies = ["potato", "brinjal","spinach", "cabbage", "cauliflower"]
// console.log(veggies);
// console.log(veggies.toString());
// console.log(veggies);

// let marvelHeroes = ["Thor", "Spiderman", "Ironman"];
// let DCHeroes = ["Superman", "Batman"];
// let heroes = marvelHeroes.concat(DCHeroes);
// console.log(heroes);

// let food = ["pizza", "burger", "sandwitch", "dalrice"];
// console.log(food)
// console.log(food.slice(1, 3));  // 1 & 2
// console.log(food.slice(1)); // 1 to end of array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// arr.splice(2, 3, 9, 10, 11);  //replace element
// console.log(arr);
// arr.splice(2, 0, 12);  //Add element
// console.log(arr);
// arr.splice(3, 1);  //Delete element
// console.log(arr);
// arr.splice(3, 1, 13);  //Replace element
// console.log(arr);

// // Qs1. Create an array to store companies -> "Google", "Microsoft","IBM", "Netflix", "Apple", "Oneplus"
// // 1. Remove the first company from  the array
// // 2. Remove Netflix & add Amazon
// // 3. Add MSI at the end
// let companies = ["Google", "Microsoft","IBM", "Netflix", "Apple", "Oneplus"];
// companies.shift();

// let companies = ["Google", "Microsoft","IBM", "Netflix", "Apple", "Oneplus"];
// companies.splice(3, 1, "Amazon");

// let companies = ["Google", "Microsoft","IBM", "Netflix", "Apple", "Oneplus"];
// companies.push("MSI")