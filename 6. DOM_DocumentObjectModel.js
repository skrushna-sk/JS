// // The 3 Musketeers of web development (Frontend):
// // 1.HTML (Structure)
// // 2.CSS (Style)
// // 3.JS (Logic)

// // starter code:
// // <style> tag connects HTML with CSS
// // <script> tag connects HTML with JS

// // why we write separate .JS file => readability, modularity, browser caching

// console.log("Hello");
// alert("Hi Growson!")

// // Window object: Represent an open window in a browser.
// // It is browser's object (not JavaScript's) & is automatically created by browser.
// // It is a global object with lots of properties & methods.
// // Go to console & type "window" OR
// // console.log(window);

// console.log("hello");
// window.console.log("hello2");  //This is same as console.log("hello");

// alert("hello")

// // What is DOM?
// // When a web page is loaded, the browser creates a Document Object Model(DOM) of the page.
// // To make dynamic changes/manipulation in web page.
// // all jot down below are node hierarchy.
// // window => document => html 
// // html => 1.head, 2.body
// // head => 1.meta, 2.meta, 3.title, 4.link 
// // body => 1.div, 2.script
// // div => 1.img, 2.h1, 3.p, 4.div

// // console.log()  //print()
// // console.dir()  //special objects properties and methods got printed as an elements and is part of windows object.

// console.log(window.document);

// console.dir(document.body.childNodes)

// // DOM Manipulation:
// // Selecting with id: document.getElementById("myId")
// // Selecting with class: document.getElementbyClassName("myClass")  //Multiple elements to be put under same category. //write html collection (similar to array, but not array.)
// // Selecting with tag: document.getElementByTagname("p")

// // Access elements with class
// let headings = document.getElementsByClassName("myClass");
// console.dir(headings);
// console.log(headings);

// // Access elements by Id
// let button = document.getElementById("myId");
// console.dir(button);

// // Access elements by tag name
// let para = document.getElementsByTagName("p");
// console.dir(para);

// // If id element does not exist then it returns "null"
// // If class element does not exist then it returns empty html collection.

// // DOM manipulation (mostly used):
// // Query Selector: returs node list
// // document.querySelector("myId / myClass / tag")   // returns first element
// // document.querySelectorAll("myId / myClass / tag")  // returns a NodeList

// let firstElement = document.querySelector("p")  //1st element
// console.dir(firstElement);

// let allElement = document.querySelectorAll("p"); //all elements
// console.dir(allElement);

// let firstElement = document.querySelector(".myClass")  //1st element
// console.dir(firstElement);

// let allElement = document.querySelectorAll(".myClass"); //all elements
// console.dir(allElement);

// let firstElement = document.querySelector("#myId")  //1st element
// console.dir(firstElement);

// // DOM Manipulation Properties:
// // tagName: returns tag for elements nodes.
// // innerText: returns the text content of the element and all its children.
// // innerHTML: returns the plain text or HTML contents in the element.
// // textContent: returns textual content even for hideen elements.

// // DOM tags: firstChild, lastChild  //used fornavigation

// // Property	            Returns
// // firstChild:	        First node (could be text, comment, or element)
// // firstElementChild:	First element node (ignores text and comments)
// // lastChild:	        Last node (could be text, comment, or element)
// // lastElementChild:	    Last element node (ignores text and comments)

// // DOM nodes: 1.text, 2.comment, 3.elements(most important)

// console.log(document.body.firstChild);

// div.innerHTML // test this on console
// div.innerText // test this on console

// // Qs1. Create a H2 heading element with text - "Hello JavaScript".Append "from Growson Students" to this text using JS.
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText)
// h2.innerText = h2.innerText + "from Growson students."

// // Create 3 divs with common class name - "box". Access them & add some unique of them.

// // DOM Manipulation Attributes:
// // getAttributes(attr)  //to get the attribute value
// // setAttributes(attr, value)  //to set the attribute value th
// // Style:
// // node.style

// // Create element:
// // let element = document.createElement("div")

// // Insert Element:
// // node.append(element)  //adds at the end of node(inside)
// // node.prepend(element) //adds at the start of node(inside)
// // node.before(element)  //adds before the node(outside)
// // node.after(element)   //adds after the node(outside)

// // Delete Element:
// // node.remove()    //remove the node

// let newButton = document.createElement("button");
// newButton.innerText = "Click me!";
// console.log(newButton);
// let div = document.querySelector("div");
// div.after(newButton);

// let newHeading = document.createElement("h1");
// h1.innerHTML = "<i>Hi, I am new!</i>";
// document.querySelector("body").prepend(newHeading);
// let para = document.querySelector("p");
// para.remove();
// newHeading.remove();

// Qs1. append child()
// Qs2. remove child()

// // Qs1. Create a new button element. Give it a text "Click me", background color of red & text color of white.
// // Insert the button as the first element inside the body tag.
// let button = document.createElement("button");   // Create a new button element
// button.innerText = "Click me";      // Set button text
// button.style.backgroundColor = "red";     // Apply styles
// button.style.color = "white";
// button.style.padding = "10px 15px";
// button.style.border = "none";
// button.style.cursor = "pointer";
// button.style.fontSize = "16px";
// button.style.borderRadius = "5px";
// document.body.insertBefore(button, document.body.firstChild);    // Insert the button as the first element inside the <body>

// // Qs2.Create a <p> tag in html, give it a class & some styling.
// // Now create a new class in CSS and try to append this class to the <p> element
// // Did you notice, how you overwrite the class name when you add a new class
// // Solve this problem using classList.
