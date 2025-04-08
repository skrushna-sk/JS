// // API (Application Programming Interface):

// How to Use an API in JavaScript?
// // 1️⃣ Using fetch() (Modern Approach):
// // fetch() is a built-in JavaScript function to make API calls.

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(response => response.json())  // Convert response to JSON
//   .then(data => console.log(data))    // Handle the data
//   .catch(error => console.error("Error fetching data:", error));

// // 📌 Explanation:
// // fetch(url) → Sends a request to the API.
// // .then(response => response.json()) → Converts response to JSON format.
// // .then(data => console.log(data)) → Processes the API response.
// // .catch(error => console.error(error)) → Handles errors.

// // 2️⃣ Using Async/Await (Better Readability):

// async function getData() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }
// getData();

// // ✅ Easier to read than .then() chaining.
// // ✅ Works like synchronous code, but remains asynchronous.

// // 3️⃣ Making a POST Request (Sending Data):

// async function postData() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title: "New Post", body: "Hello, API!", userId: 1 })
//     });
//     let data = await response.json();
//     console.log("Created Post:", data);
// }
// postData();

// // ✅ Uses POST method to send data.
// // ✅ Sends JSON data using body.

// // 4️⃣ Using Axios (Alternative to fetch())
// // Axios is a popular third-party library for handling API calls.

// import axios from "axios";
// axios.get("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => console.log(response.data))
//     .catch(error => console.error("Error:", error));

// // ✅ Automatically converts responses to JSON.
// // ✅ Handles errors better than fetch().

// // 🚀 Final Thoughts
// // ✔ Use fetch() for native JavaScript API calls.
// // ✔ Use async/await for better readability.
// // ✔ Use Axios for easier error handling and advanced features.


// // 1. fetch API:
// // The fetch API provides an interface for fetching (sending/receiving) resources.
// // It uses Requests and Response objects. (request response cycle)
// // The fetch() method is used to fetch a resource (data).

// // Search for "free APIs" in google or any other search engine.
// // e.g. gitHub
// // https://github.com/public-apis/public-apis
// // https://free-apis.github.io/#/

// APIs are nothing but endpoints of the URL
// It sends request to the URL and it returns webpage.

// let promise = fetch(url, [options])

// const URL  = "https://jsonplaceholder.typicode.com/posts";   // API endpoint
// const getFacts = async () => {
//     console.log("Getting data...");
//     let response = await fetch(URL);
//     console.log(response);     // JSON format
// }

// // call to any API and get data is asynchronous process.

// // Understanding Terms:
// // AJAX: Asynchronous JS And XML
// // AJAJ: Asynchronous JS And JSON (But we often called this AJAX too)
// // JSON: JavaScript Object Notation
// // json() method: Returns a second promise that resolves with the result of parsing the response body tex as json
// // (input is JSON, output is json object)

// //  below code is much simpler and much easier to read.

// // const URL = "https://api.thecatapi.com/v1/images/0XYvRd7oD";
// const URL  = "https://jsonplaceholder.typicode.com/posts";   // API endpoint
// const factPara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");
// const getFacts = async () => {
//     console.log("Getting data...");
//     let response = await fetch(URL);
//     console.log(response);     // JSON format
//     let data = await response.json();
//     factPara.innerText = data[2].text;
// }
// btn.addEventListener("click", getFacts);

// // Promise chain/ Promise chaining: (Comparatively hard to code and read)
// const URL  = "https://jsonplaceholder.typicode.com/posts";   // API endpoint
// const factPara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");
// function getFacts() {
//     fetch (URL).then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factPara.innerText = data[2].text;
//     })
// }
// btn.addEventListener("click", getFacts); 

// // Requests and response:
// // HTTP verbs: In every request there is verbs
// // HTTP Request Methods: GET(retrieve data), HEAD, POST(Send data), PUT, DELETE(Remove data), 
// // CONNECT, OPTIONS, TRACE, PATCH(Partial modifications to resource),
// // Response status code: 
// // *HTTP response headers also contain details about responses, 
// // such as content type, HTTP status code etc.

// // HTTP response status codes:
// // Informational responses (100-199)
// // Successful responses (200-299)
// // Redirection messages (300-299)
// // Client error responses (400-499)
// // Server error responses (500-599) 

// // Sending POST request using fetch API:
