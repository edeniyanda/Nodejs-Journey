console.log(); // is a Global Object

// Other global object include
// setTimeout();
// clearTimeout();
// setInterval();

// In Javascript all functin and Object that are defined globally can be access by the window widget
// Technically setTimeout(); is the same as window.setTimeout()

// Likewise this
var message = "Welcome to Earth";
// Can be access by 
// window.message 

// But in Node will can onlt access al this Javascript global variable using the global keyword

// So variables defined are not automatically added to the global scope
console.log(global.message) // This outputs "undefined"