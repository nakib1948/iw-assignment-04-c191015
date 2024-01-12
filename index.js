// Import NPM Package
var _ = require('underscore');

// Call appropriate function from the NPM package to solve the assignment

/**
 * Print out the result if ["Java", "Javascript", "Typescript"] this array 
 * contains "Java"
 */
// First Answer 
var lang = ["Java", "Javascript", "Typescript"];
var checkJ = _.contains(lang, "Java");

console.log("Array contains Java:", checkJ);


/**
 * Print out the result if ["Java", "Javascript", "Typescript"] this array 
 * contains "C++"
 */
// Second Answer
var checkC = _.contains(lang, "C++");

console.log("Array contains C++:", checkC)
