// Day 1: Understanding Global Objects in Node.js

// The console object is a global object in Node.js
console.log('Hello, World!'); // Prints "Hello, World!" to the console

// Other global objects include:
// setTimeout(), clearTimeout(), setInterval(), clearInterval()

// In browser-based JavaScript, all functions and objects defined globally 
// can be accessed via the window object. For example:
// window.setTimeout() is equivalent to setTimeout()

// Similarly:
var message = "Welcome to Earth";
// In the browser, this can be accessed using:
// window.message 

// However, in Node.js, global variables are not automatically added to the global scope.
// To access global variables in Node.js, you use the global object.
// For example:
console.log(global.message); // This outputs "undefined"

// This is because variables defined using var, let, or const within a Node.js module
// are scoped to that module and not added to the global object. To add a variable
// to the global scope, you explicitly attach it to the global object:

global.message = "Hello, Node.js!";
console.log(global.message); // This outputs "Hello, Node.js!"
