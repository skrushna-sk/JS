// // Events in JS:
// // The change in the state of an object is known as an event.
// // Events are fired to notify code of "interesting changes" that may affect code execution.

// // Mouse events(Click, double click etc.)
// // Keyboard events(keypass, keyup, keydown)
// // Form events(submit etc.)
// // Print events & many more. 

// // e.g.
// // onclick: onclick="console.log('button was clicked');alert('hello!'
// // ondblclick: ondblclick="console.log('button was clicked 2 times')"

// // 1️⃣ Mouse Events 🖱️
// // onclick :	Fires when an element is clicked.
// // ondblclick : Fires when an element is double-clicked.
// // onmousedown : Fires when a mouse button is pressed down.
// // onmouseup : Fires when a mouse button is released.
// // onmousemove : Fires when the mouse moves over an element.
// // onmouseover : Fires when the mouse enters an element.
// // onmouseout : Fires when the mouse leaves an element.
// // oncontextmenu : Fires when the right-click menu is triggered.

// // 2️⃣ Keyboard Events ⌨️
// // onkeydown : Fires when a key is pressed down.
// // onkeypress (Deprecated) : Similar to onkeydown, but only for printable characters.
// // onkeyup : Fires when a key is released.

// // 3️⃣ Form Events 📝
// // onfocus : Fires when an input field gets focus.
// // onblur : Fires when an input field loses focus.
// // onchange : Fires when the value of an input field changes.
// // oninput : Fires when the user types in an input field.
// // onsubmit : Fires when a form is submitted.
// // onreset : Fires when a form is reset.
// // onselect : Fires when text inside an input field is selected.

// // 4️⃣ Window Events 🌍
// // onload : Fires when the page has fully loaded.
// // onunload : Fires when the user leaves the page.
// // onresize : Fires when the browser window is resized.
// // onscroll : Fires when the user scrolls the page.
// // onbeforeunload : Fires before the user leaves the page (e.g., "Are you sure you want to leave?").

// // 5️⃣ Clipboard Events 📋
// // oncopy : Fires when the user copies text.
// // oncut : Fires when the user cuts text.
// // onpaste : Fires when the user pastes text.

// // 6️⃣ Drag & Drop Events 🖱️🖇️
// // ondrag : Fires when an element is dragged.
// // ondragstart : Fires when dragging starts.
// // ondragover : Fires when an element is dragged over a valid drop target.
// // ondrop : Fires when the dragged element is dropped.

// // 7️⃣ Touch Events (Mobile) 📱
// // ontouchstart : Fires when a touch starts.
// // ontouchmove : Fires when a touch is moved.
// // ontouchend : Fires when a touch ends.

// // inline event handeling:
// // within .JS file code this
// // node.event = () => {
// //     //handel here
// // }

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     leta = 25;
//     a++;
//     console.log(a);  //26
// };

// let box = document.querySelector("div");
// div.onmousehover = () => {
//     console.log("you are inside div");
// };

// // If we inline handel event and .js handel then priority is .js handel.
// // If we handel event for one time then we cannot handel that again. define eveything in single event.

// // Event object:
// // it is special object that has deatails about the event.
// // All events handlers have access to the event object's properties and methods.
// // node.event = (event) => {
// //     //handel here    
// // }
// // e.target, e.type, e.clientX, e.clientY


// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };

// let div = document.querySelector("div");
// div.onmousehover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };

// // Event listeners: 
// // node.addEventlistener(event, callback)   //callback is also known as handelers.
// // node.removeEventListeners(event, callback)
// // *NOTE: the callbck reference should be same to remove.

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked- handler1");
// });

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked- handler2");
// });

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked- handler3");
// });

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked- handler4");
// });

// btn1.removeEventListener("click", () => {
//     console.log("button1 was clicked- handler4");
// });

// // Qs1. Create a toggle button that changes the sceen to dark-mode when clicked & light-mode when clicked again.
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <button id="mode">change mode</button>
//     <script src="eventStyle.js"></script>
//     <link rel="stylesheet" href="eventStyle.css">
// </body>
// </html>

// let modebtn = document.querySelector("#mode");
// let body = document.querySelector("#mode");
// let currMode = "light";  //dark
// modebtn.addEventListener("click",() => {
//     if (currMode === "light") {
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     } else {
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// });

// // #style.css  (class)
// .dark {
//     background-Color: back;
//     color: white
// }

// .light {
//     background-Color: white;
//     color: black;
// }

// // Qs2. Create something after mouse hovering.