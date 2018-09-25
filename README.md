# Getting Started with Node

## Nodejs With Authentication and simple API

- Node is a runtime environment for executing JS code.

- Essentially, Node is a C++ program that embeds Chrome’s v8 engine, the fastest JS engine in the world.

- We use Node to build fast and scalable networking applications. It’s a perfect choice for building RESTful services.

- Node applications are single-threaded. That means a single thread is used to serve all clients.

- Node applications are asynchronous or non-blocking by default. That means when the application involves I/O operations (eg      accessing the ﬁle system or the network), the thread doesn’t wait (or block) for the result of the operation. It is released to serve other clients.

- This architecture makes Node ideal for building I/O-intensive applications.

- You should avoid using Node for CPU-intensive applications, such as a video encoding service. Because while executing these operations, other clients have to wait for the single thread to ﬁnish its job and be ready to serve them. 

- In Node, we don’t have browser environment objects such as window or the document object. Instead, we have other objects that are not available in browsers, such as objects for working with the ﬁle system, network, operating system, etc.

## Node Core

- We don’t have the window object in Node. 

- The global object in Node is “global”. 

- Unlike browser applications, variables we deﬁne are not added to the “global” object. 

- Every ﬁle in a Node application is a module. Node automatically wraps the code in each ﬁle with an IIFE (Immediately-invoked Function Expression) to create scope. So, variables and functions deﬁned in one ﬁle are only scoped to that ﬁle and not visible to other ﬁles unless explicitly exported. 

- To export a variable or function from a module, you need to add them to module.exports:

```javaScript 
  module.exports.sayHello = sayHello;
```

- To load a module, use the require function. This function returns the module.exports object exported from the target module:

```javaScript 
  const logger = require(‘./logger’); 
``` 

- Node has a few built-in modules that enable us to work with the ﬁle system, path objects, network, operating system, etc. 

- EventEmitter is one of the core classes in Node that allows us to raise (emit) and handle events. Several built-in classes in Node       derive from EventEmitter. 

- To create a class with the ability to raise events, we should extend EventEmitter: 
  ```javaScript
    class Logger extends EventEmitter { 
  
    } 
  ```
   
# API Docs [Routes]

1. auth / loggin
   - /api/auth/           - **post**    and generate token
   
   ```javaScript
   
   {
      "email":"test@test.com",
      "password":"123456789"
   }
   
   ```
   
2. customer
   - /api/customers/      - **get**     list all customer
   - /api/customers/      - **post**    register new customer
   
   ```javaScript
      {
        "name":"SauravGupta" ,
        "isGold": false,
        "phone": 100
      }
   ```
   - /api/customers/:id   - **put**     modify the existing customer
   
    ```javaScript
    {
      "name":"GauravGupta" ,
      "isGold": true,
      "phone": 420
    }
    ```   
   - /api/customers/:id   - **delete**  delete an customer only admin is allow to do this operation
   - /api/customers/:id   - **get**     get a customer with _id

3. genres
   - /api/genres/            - **get**     list all genres
   - /api/genres/            - **post**    add a new genre
   
   ```javaScript
     {
       "name":"horror" 
     }
   ```
   - /api/genres/:id         - **put**     modify a genre
   
   ```javaScript
     {
       "name":"comedy" 
     }
   ``` 
   - /api/genres/            - **delete**  delete a genre only admin is allow to do this operation

4. movies
   - /api/movies/            - **get**     list all movies
   - /api/movies/            - **post**    add a new movie
   
   ```javaScript
    {
      "title":"Dead Pool",
      "genreId":"5ba9e02597c3722e703d9faf",
      "numberInStock":8,
      "dailyRentalRate":4.99   
    }
   ```
   - /api/movies/:id         - **put**     modify a movie
   
   ```javaScript
    {
      "title":"Dead Pool",
      "genreId":"5ba9e02597c3722e703d9faf",
      "numberInStock":8,
      "dailyRentalRate":4.99   
    }
   ```   
   - /api/movies/:id         - **delete**  delete a movie only admin is allow to do this operation
   - /api/movies/:id         - **get**     get a movie with _id

5. rentals
   - /api/rentals/        - **get**     list all the rentals
   - /api/rentals/        - **post**    add a new rental
   
   ```javaScript
   {
      "customerId":"5ba9e02597c3722e703d9faf",
      "movieId":"5ba3a276b62e101b04498e02"
   }
   ```

6. users
   - /api/users/me        - **get**     get the current user information
   - /api/users/          - **post**    register a new user
   
   ```javaScript
    {
       "name":"Gaurav",
       "email":"GauravKumar123@gmail.com",
       "isAdmin": true
    }
   ```
