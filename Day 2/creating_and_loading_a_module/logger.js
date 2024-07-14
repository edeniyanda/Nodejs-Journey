// Day 3: Exporting Variables and Functions in Node.js

// Say I have this URL:
var terminuxUrl = "https://primeradiant.io/";

function whichFoundation(message) {
    console.log(message);
}

// Since all variables and functions defined in a Node.js module are private to that module,
// one has to explicitly make them available for use in another module by exporting them.

// When I 'console.log'ed😅 the module object in "../app.js", in the JSON returned, there is a key named "exports".
// This key is crucial because anything added to this object will be exported from the current module
// and will be available to other modules.

// For example:
module.exports.url = terminuxUrl;
module.exports.whichFoundation = whichFoundation;

// So when I console.log the module object, you will see that the "exports" key has been paired with the respective added exports.
console.log(module);

// Output: 
// The console.log will show a detailed JSON object with the "exports" key containing our added exports:
// {
//   ...
//   exports: {
//     url: "https://primeradiant.io/",
//     whichFoundation: [Function: whichFoundation]
//   },
//   ...
// }
