// main.js

// window.alert method
window.alert("Hello, world!");

// document.write method (replaced with DOM manipulation)
const para1 = document.createElement("p");
para1.textContent = "For the last time, hello, world!";
document.body.appendChild(para1);

// creating two variables
var Sent1 = "This is the beginning of the string";
var Sent2 = " and this is the end of the string";

// displaying the variables using DOM manipulation
const para2 = document.createElement("p");
para2.textContent = Sent1 + Sent2;
document.body.appendChild(para2);

// an expression (output using DOM manipulation)
const para3 = document.createElement("p");
para3.textContent = 33 * 84;
document.body.appendChild(para3);
