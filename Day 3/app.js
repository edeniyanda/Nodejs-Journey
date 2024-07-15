// Day 3: Loading Variables and Functions from a Module in Node.js

// To load a module, we use the require function. It is only available in Node.js, not in web-based JavaScript.

// Example:
// const logger = require("../Day 2/creating_and_loading_a_module/logger.js");
// logger.whichFoundation("Hello, this is the second foundation");

// It is a best practice to always declare all your imported variables with a constant like this:
const logger = require("../Day 2/creating_and_loading_a_module/logger.js");

// You can then use the imported module's properties and methods:
logger.terminuxUrl = "www.home.com"; // Updating the URL

logger.whichFoundation("Hello"); // Calling the function
