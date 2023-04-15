//What is IIFE?
// Immediately Invoked Function Expression

// (function abc() {
//   console.log("Hi mango");
// })();

//this will not execute

var a = 23;
var b = 44;
function abc() {
  console.log("Hello World");
}

function xyz() {
  console.log("Hello Dunia");
}

console.log(__dirname);
console.log(__filename);
exports.abc = abc;
exports.xyz = xyz;
