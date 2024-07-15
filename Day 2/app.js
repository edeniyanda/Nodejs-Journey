// Day 2: Understanding Modules in Node.js

// In web-based JavaScript, say we have a function:
var meetSanTi = function() {
    // Function logic here
  };
  
  // meetSanTi is added to the global scope and can be accessed using the window object
  // In a real-world application with code separated into different files, it's possible
  // that in two different files we have functions with the same name, say meetSanTi. 
  // Since the function is defined in the global scope, one function could overwrite the existing
  // definition of the function.
  
  // To avoid this in Node.js, we use modularity. In Node.js, all variables and functions
  // defined in a file are scoped to that file, much like private methods in Java or any other OOP language.
  
  // To use a variable or function defined in a module (i.e., a file), you must explicitly export
  // that function or variable so it can be accessed by other files (modules).
  
  // Example of defining and exporting a function in a module (file):
  
  // In greet.js
  var greet = function() {
    console.log('Hello from greet function');
  };
  
  module.exports = greet;
  
  // Example of importing and using a function from another module (file):
  
  // In app.js
  var greet = require('./greet');
  greet(); // Outputs: Hello from greet function
  
  // The `module` object appears to be a global object, but it is actually specific to each module.
  // The `module` object contains information about the current module, including its exports.
  
  console.log(module); // Outputs detailed JSON about the current module
  