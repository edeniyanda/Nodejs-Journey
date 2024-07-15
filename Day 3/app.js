// Day 3: Loading Variables and Functions from a module in Node.js

// To load a module we use the require function, it is only availabe in node not in Web based Javascript

// var  logger = require("../Day 2/creating_and_loading_a_module/logger.js");
// logger.whichFoundation("Hello This is the Second Foundation");


// It ia a best practice to always declare all your imported varibles weith a constant 
// like this 
const logger = require("../Day 2/creating_and_loading_a_module/logger.js");
logger.terminuxUrl = "www.home.com";

logger.whichFoundation("Hello");