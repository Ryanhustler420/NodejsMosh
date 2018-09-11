console.log(); //global we can access it anywere

// these are also globally access in nodejs

// this is also a part of js as global objects
setTimeout();
clearTimeout();
setInterval();
clearInterval();

// in browser we have 'window' object

window.console.log(); // this function is a part of window object
// we can also do this
console.log();

// almost all object belongs to window Object

var message = '';
// this variable is also avialable on window Object


/// but in node we dont have window object
// but node has global Object

// Example

global.console.log();
global.setInterval();
// ofcourse we will prefer short hand

console.log(global.message); //will be Undefined because its not avialable on global Object
// the Scope of 'message' is avialbe inside this file only
