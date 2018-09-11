```javaScript

console.log(); //global we can access it anywhere

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
// this variable is also available on window Object


/// but in node we don't have window object
// but node has global Object

// Example

global.console.log();
global.setInterval();
// of course we will prefer short hand

console.log(global.message); //will be Undefined because its not available on global Object
// the Scope of 'message' is available inside this file only


```

## Module in nodejs


```javaScript

// when we define Variable or function that is added to global scope if you are writting
// JavaScript for browser

// like for example

// when we define a function like say

var sayHello  = function(){}

// this function is added to global object and can be access

// we can access it via window.sayHello


// but in real world example we split our function into module for further Mentainence


//NOTE:- why node's global object will not key track of all variables or function in its
// global object because suppose in some casses if there are many module or third party
// lib is there and you try to access a function than the Object 'global' will crash because
// it will not keep track of right function like JavaScript's window Object

// it can be overwritten so,
// we should avoid define variable and function in global object because it can be
// overwritten and can be cause of server/application crash

// we need module
// we need to create module for split code
// it cant collide at all like for example same function name
// module usesses code encapsulation like private function, so not chance for code
// collision


// like app.js is our main module as every application has a main module


// just run
console.log(module); // this is not a global variable search on google why!


// so in node every file is module and the variable and function defiend inside that
// module are only scoped inside that module

```
## Creating a module

```javaScript

var url = 'http://mylogger.io/log';


function log(message){
    // Send an HTTP request
    console.log(message);
}

// if we export an object to exports that will be availabel to entire application

// for further detail run code

// console.log(module);

module.exports.log = log;
module.exports.endPointurl = url;


```

## Loading a module

```javaScript


// to load a module we use require();
// always use const instead of var because const are not reset.

const logger = require(./logger);
console.log(logger);

logger.log('Message');

// we can also export a single function like this


// logger.js

function log(message){
    console.log(message);
}

module.exports = log;



// accessing app.js

const log = require(./logger);

log('message');


```

## Module Wrapper Function

> you can see this in cammand line using and self made mistake like

``
Make Sure you make this mistake in first line of your Editor
``

```javaScript
var x=;

function log(message){
    console.log(message);
}

module.exports = log;

```

``What Exectaly Happening behind the scene is this``

```javaScript
(function(exports,require,module,__filename,__dirname){

    var url = "google.com";

    function log(message){
        console.log(message);
    }

    module.exports = log;

})

```

> This is wrapper function also know as IIFE in javaScript Node doesn't execute our code directly.

## Event Module

```javaScript


const EventEmitter = require('event');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged',function(){
    console.log('Some one invoked!');
});

// Raise an event
emitter.emit('messageLogged');

```

## Event Arguments

> You can pass data from emit to listener

```javaScript

const EventEmitter = require('event');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged',(e) => {
    console.log('Some one invoked!',e);
});

// Raise an event
emitter.emit('messageLogged',{id:32,message:"Hey You have logged in successfully!"});

```

## HTTP Module

> Framework like express.js is build on top of http core lib of nodejs

**http is come with emitter so the basic function of EventEmitter will be still there.**

```javaScript

const http = require('http');

const server = http.createServer((req,res) => {

    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }
    
    if(req.url === '/api/login'){
        res.write(JSON.stringify(['gaurav','saurav']));
        res.end();
    }

});

server.listen(3000);

console.log('Listening on port 3000...');

```
