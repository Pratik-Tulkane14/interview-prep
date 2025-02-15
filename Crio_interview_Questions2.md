## 1 What is debouncing?

Debouncing is a programming practice used to ensure that a function doesn't fire too often. This can be particularly important for functions that run expensive operations or are attached to high-frequency events like keypress or scroll.
It works by delaying the execution of a function until a certain amount of time has passed since it was last called.

Example: 1

let debounceTimer;
function debounce(func, delay) {
return function() {
const context = this;
const args = arguments;
clearTimeout(debounceTimer);
debounceTimer = setTimeout(() => func.apply(context, args), delay);
}
}
window.addEventListener(‘resize’, debounce(function() {
console.log(‘Resize event handling’);
}, 250));

Example: 2

function debounce(func, delay) {
let timeoutId;

    return function (...args) {
        // Clear any existing timeout
        clearTimeout(timeoutId);

        // Set a new timeout
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };

}

const searchAPI = (searchTerm) => {
console.log(`Making API call with search term: ${searchTerm}`);
// Simulated API call
};

debounce(searchAPI, 500);

## 2 What is caching, and what are the different types of caching?

📌 Need for Caching:
Performance Improvement: Caching is needed to improve the performance and responsiveness of applications by storing frequently accessed data closer to the user, reducing the need for repeated computations or network requests.
What is Caching:
Storage Mechanism: Caching involves storing copies of data in a temporary storage location, such as memory or disk, to expedite future access to that data. When requested again, the cached data can be quickly retrieved without the overhead of re-computation or network latency.

❓ How Caching is Used in the Real World:
Web Browsers: Web browsers use caching to store copies of web pages, images, and other resources locally to speed up page loading times and reduce server load.

Content Delivery Networks (CDNs): CDNs cache static assets such as images, videos, and scripts across multiple distributed servers worldwide, enabling faster content delivery to users regardless of their geographic location.

Database Query Caching: Database systems use query caching to store the results of frequently executed queries in memory, reducing the processing time required to retrieve the same data repeatedly.

## Different Types of Caching:

Browser Cache: Web browsers cache resources such as HTML pages, CSS files, JavaScript files, and images locally to speed up page loading times.

CDN Cache: Content Delivery Networks cache static content such as images, videos, and scripts across multiple distributed servers to deliver content more efficiently to users.

Database Query Cache: Database systems cache the results of frequently executed queries in memory to reduce the time required for subsequent executions of the same queries.

Object Caching: Applications cache objects or data structures in memory to avoid redundant computation or database queries, improving overall performance.

## 3 What is currying in Javascript?

Need
Currying makes it easier to create new functions by reusing existing functions. It’s like creating custom tools from a more general tool.

What is it?
Currying is a technique where a function with multiple arguments is transformed into a series of functions, each with just one argument.

How is it used?
Customizing Functions: You can use currying to make a customized function from a general one.

// Function to multiply two numbers
function multiply(a, b) {
return a \* b;
}
// Function to curry the multiply function
function curryMultiply(a) {
return function(b) {
return multiply(a, b);
};
}
// Create a new function that doubles numbers by currying the multiply function with 2
const double = curryMultiply(2);
console.log(double(5)); // Outputs: 10

Saving Arguments for Later: With currying, you can “save” one argument and use it later.

## Key Points:

1. A curried function returns another function until all arguments are satisfied
2. It allows partial application of a function's arguments
3. Makes code more reusable and modular
4. Helps in creating more flexible function compositions

## 4 Define Callback Hell in Javascript

Callback Hell in JavaScript refers to the situation where multiple asynchronous operations are nested within each other, resulting in deeply nested and unreadable code. This occurs when callbacks are used to handle the asynchronous nature of JavaScript, leading to a pyramid-like structure of callbacks within callbacks.

Here is an example of Callback Hell in JavaScript:

asyncOperation1(function(result1) {
asyncOperation2(result1, function(result2) {
asyncOperation3(result2, function(result3) {
asyncOperation4(result3, function(result4) {
// ... and so on
});
});
});
});
In this example, each async operation depends on the result of the previous one, and the code becomes increasingly difficult to read and maintain as more operations are added. This nesting of callbacks makes the code harder to understand, debug, and modify.

To avoid Callback Hell, there are several techniques available in JavaScript, such as using Promises, async/await, or libraries like async.js or Bluebird. These alternatives provide a more structured and readable way to handle asynchronous operations, reducing the nesting and improving code maintainability.

Here’s an example of the same code using Promises:

asyncOperation1()
.then(result1 => asyncOperation2(result1))
.then(result2 => asyncOperation3(result2))
.then(result3 => asyncOperation4(result3))
.then(result4 => {
// ... and so on
})
.catch(error => {
// Handle any errors
});
By using Promises, the code becomes more linear and easier to understand, as each operation is chained with .then() and error handling is done with .catch(). This approach eliminates the deep nesting and improves code readability and maintainability.

## 5 Prototypes

Why does typeof of a string return 'string' but that of an array return 'obj' and not 'array'?

Why:
Javascript typeof returns a “string” for a strings, because it is a primitive data type.
Whereas arrays are non-primitive data type. In Javascript, arrays are objects with additional properties and methods that allow them to store and manipulate a collection of values in a specific way.

## 2 important things to keep in mind:

We can use the Array.isArray() method to check if a value is an array
When checking the type of a null value, typeof returns ‘object’ instead of ‘null’. This happens due to a historical mistake in the implementation of javascript.

What is a prototype in JavaScript?

Need of it:
Prototypes in JavaScript solve the problem of code reuse and inheritance by providing a way to share properties and methods between objects.

What it is:
Prototypes allows to implement inheritance in JavaScript and create complex object hierarchies
Every object in JavaScript has a prototype property, which can be used to define properties and methods that are shared between objects.

How it is used:

To define a prototype, add properties and methods to the prototype property of a constructor function.
To create a new object from a prototype, use the new keyword and call the constructor function.
To check if an object has a specific property, use the hasOwnProperty() method to check if the property is defined on the object itself or on its prototype chain.
To create a prototype chain, set the prototype of one object to another object using the Object.create() method.

Prototypal inheritance vs object-oriented inheritance

Intro line:

Both prototypal inheritance and object-oriented inheritance are mechanisms for creating relationships between objects and allowing for code reuse.

## 3 points of Comparison:

Inheritance Model:
Prototypal Inheritance: Native JavaScript inheritance model.
Object-Oriented Inheritance: Mimics classical inheritance using class syntax found in languages like Java or C#.
Inheritance Mechanism:
Prototypal Inheritance: Inherits directly from other objects (prototype chain)
Object-Oriented Inheritance: Inherits using classes and the extends keyword
Implementation:
Prototypal Inheritance: Uses Object.create(), Object.setPrototypeOf(), constructor functions, and the new keyword
Object-Oriented Inheritance: Uses constructor functions, super keyword, and the class syntax.

## 6 What are the differences between arrow functions and function expressions in JS?

Introduction
In JavaScript, both arrow functions and function expressions are used to define functions, but they have distinct characteristics and use cases. Arrow functions, introduced in ECMAScript 6 (ES6), offer a more concise syntax and have different behavior regarding the this keyword compared to traditional function expressions.

## Differences Between Arrow Functions and Function Expressions

Syntax and Conciseness

Arrow Functions: Provide a more concise syntax for writing functions. They eliminate the need for the function keyword and use the => syntax. For single-expression functions, they also omit the curly braces and return keyword.
Function Expressions: Use the function keyword and require the function body to be enclosed in curly braces, with an explicit return statement if needed.
// Function expression
const add = function(a, b) {
return a + b;
};
// Arrow function
const add = (a, b) => a + b;

Handling of this

Arrow Functions: Lexically bind the this value, meaning they inherit this from the surrounding context where they are defined. This makes them unsuitable for methods or functions that need their own this context.

Function Expressions: Have their own this context, which is dynamically determined based on how the function is called. This makes them suitable for methods where this needs to refer to the object calling the method.
function Counter() {
this.count = 0;
setInterval(function() {
this.count++;
console.log(this.count);
}.bind(this), 1000);
}
new Counter(); // `this` refers to the Counter instance
function Counter() {
this.count = 0;
setInterval(() => {
this.count++;
console.log(this.count);
}, 1000);
}
new Counter(); // `this` refers to the Counter instance

Use as Constructors

Arrow Functions: Cannot be used as constructors and will throw an error if you try to use them with the new keyword.
Function Expressions: Can be used as constructors and instantiated with the new keyword.
function Person(name) {
this.name = name;
}
const person = new Person('Alice'); // Successfully creates a new Person object
const Person = (name) => {
this.name = name;
};
const person = new Person('Alice'); // TypeError: Person is not a constructor

Real-World Usage
Arrow Functions: Ideal for concise functions, especially in scenarios where you need to preserve the this context from the surrounding scope. They are commonly used in callbacks, array methods like map, filter, and reduce, and in functions that don’t require their own this context.
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n \* 2); // Arrow function for concise callback

Function Expressions: Useful when you need to create methods or constructors with their own this context. They are often used for defining methods on objects, functions that require dynamic this, or when functions are passed as arguments to other functions.
const obj = {
value: 42,
getValue: function() {
return this.value; // `this` refers to `obj`
}
};
console.log(obj.getValue()); // Output: 42

## 7 What is lazy loading and debouncing?

🔍 What is it?
Lazy loading is a technique used to defer the loading of non-critical resources (such as images, scripts, or content) until they are needed. Instead of loading all resources upfront when the page loads, lazy loading delays the loading process until the user requests or interacts with the specific content.

❓ How is it used?
Lazy loading is implemented using JavaScript to detect when elements enter the viewport or when certain conditions are met (e.g., user scrolling). When triggered, the JavaScript code dynamically loads the resources, typically via AJAX requests or by dynamically adding <script> or <img> tags to the DOM.

## Why is it needed?

Lazy loading can significantly improve page load times and reduce initial page weight, especially for pages with large images or extensive content. By deferring the loading of non-essential resources, lazy loading prioritizes the loading of critical content, resulting in a faster and smoother user experience.

Examples:
Lazy loading images in a photo gallery: Images are loaded only when they are about to come into view as the user scrolls down the page.
Lazy loading JavaScript libraries: External JavaScript libraries are loaded only when a specific feature that requires them is activated by the user.

## Debouncing:

🔍 What is it?
Debouncing is a technique used to limit the rate at which a particular function is executed, especially in response to rapid or frequent events like scrolling, resizing, or typing. It prevents the function from being called multiple times in quick succession, ensuring that it is only executed after a specified delay has passed since the last invocation.
❓ How is it used?
Debouncing is typically implemented using a timer mechanism. When the event is triggered, a timer is started with a delay value. If the event is triggered again before the timer expires, the previous timer is canceled, and a new timer is started. The function is executed only after the timer has elapsed without further events.

## Why is it needed?

Debouncing is needed to optimize performance and prevent unnecessary or excessive function calls in response to rapid events. Without debouncing, functions like event handlers or API requests may be invoked too frequently, leading to performance issues or unintended behavior.
Examples:
Debouncing the window resize event: When the user resizes the browser window, a function to adjust the layout or perform calculations is invoked only after the user has finished resizing, preventing unnecessary reflows or recalculations during rapid resizing.
Debouncing the input event on a search field: When the user types in a search field, the search function is invoked only after the user pauses typing for a specified period, preventing the search function from being called for every keystroke.

## 8 Describe JavaScript Global execution context

The JavaScript Global Execution Context is crucial for understanding how JavaScript manages code execution at the top level. It serves as the foundational environment where global variables, functions, and objects are defined and executed.

What is it?
The Global Execution Context is the initial context in which JavaScript code is executed. It is created when a JavaScript program starts running and sets up the environment for the global scope.

Initialization of Global Object: The Global Execution Context initializes the global object (e.g., window in browsers or global in Node.js).
Creation of this: It establishes the value of this in the global scope, typically referring to the global object.
Scope Chain Setup: It sets up the scope chain, which allows JavaScript to resolve variable and function lookups within the global context.

Code Example:

// Global scope
var globalVariable = 'Hello, World!';
function globalFunction() {
console.log(globalVariable);
}
globalFunction(); // Output: Hello, World!
In this example, globalVariable and globalFunction are defined in the global execution context. The function globalFunction can access the globalVariable because both are in the same scope.

How is it used?
The Global Execution Context is automatically created when the JavaScript engine starts executing your code. Here's how it affects your code:

Global Object Initialization: When the script is executed, a global object is created where global variables and functions reside. For example, in a browser, this global object is window.
Global Variable and Function Definition: Variables and functions declared outside of any function or block scope are added to this global object.
Scope Chain Setup: JavaScript uses the global execution context to set up the scope chain for resolving identifiers in your code.

Example:

// Adding a global variable and function
var globalVariable = 'Global Scope';
function displayGlobal() {
console.log(globalVariable);
}
// Invoking the function to show the global variable
displayGlobal(); // Output: Global Scope
In this example, displayGlobal function has access to globalVariable because both are defined in the global execution context.

Why is it needed?
Global Scope Initialization: It establishes the global environment necessary for running JavaScript code, setting up the global object and this binding.
Variable and Function Access: It ensures that global variables and functions are accessible from any part of the code, providing a central place for shared resources.
Execution Setup: The Global Execution Context is essential for setting up the initial execution environment, which includes preparing the scope chain and global object.

Best Practices:

Limit Global Scope Usage: Avoid creating excessive global variables and functions to prevent pollution of the global namespace.
Encapsulation: Use modules, closures, or IIFE (Immediately Invoked Function Expressions) to encapsulate code and prevent unintended interactions with the global scope.
Avoid Overusing this: Be cautious with this in the global scope as it can lead to confusion. this generally refers to the global object, which might not always be desirable.

Example of Best Practices:

// Using an IIFE to encapsulate code and avoid polluting the global scope
(function() {
var localVariable = 'I am local!';
function localFunction() {
console.log(localVariable);
}
localFunction(); // Output: I am local!
})();
// Accessing localVariable or localFunction outside the IIFE would result in an error
console.log(typeof localVariable); // Output: undefined

## 9 What is the process of hoisting for normal and arrow functions, and what are the differences between them?

Normal Functions:
🔍 What is it?
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase, before the code execution.
❓ How is it used?
Function declarations are hoisted entirely, meaning that the entire function body is moved to the top of the scope, making it available for invocation even before it appears in the code.
Function expressions, however, are not hoisted entirely. Only the variable declaration is hoisted, while the assignment (the function definition) remains in place.
Why is it needed?
Hoisting allows developers to call functions before they are defined in the code, which can be useful for structuring code and improving readability.
Examples:

```javascript
// Function declaration
greet(); // Output: "Hello, world!"
function greet() {
  console.log("Hello, world!");
}

// Function expression
sayHello(); // Throws an error: sayHello is not a function
var sayHello = function () {
  console.log("Hello!");
};
```

Arrow Functions:
🔍 What is it?
Arrow functions are a more concise syntax for writing function expressions in JavaScript, introduced in ECMAScript 6 (ES6). Unlike normal functions, arrow functions do not have their own this context and are not suitable for use as constructors.
❓ How is it used?
Arrow functions can be used in place of traditional function expressions, especially for short anonymous functions. They have a simpler syntax and lexically bind the this value, meaning they inherit this from the surrounding code.

Why is it needed?
Arrow functions provide a more concise syntax for defining functions, making the code cleaner and easier to read. They also eliminate the need to use bind, call, or apply to maintain the correct this context.
Examples:

```javascript
// Traditional function expression
var add = function (x, y) {
  return x + y;
};
console.log(add(2, 3)); // Output: 5

// Arrow function
var add = (x, y) => x + y;
console.log(add(2, 3)); // Output: 5

// Arrow function with multiple statements
var greet = (name) => {
  console.log("Hello, " + name + "!");
};
greet("Alice"); // Output: "Hello, Alice!"
```

Differences:
Scope of this: Arrow functions do not have their own this context; instead, they inherit this from the surrounding code (lexical scoping). Normal functions have their own this context, which is determined by how they are called.
Hoisting Behavior: Normal function declarations are hoisted entirely, allowing them to be called before they appear in the code. Function expressions, including arrow functions, are only partially hoisted, with the variable declaration being hoisted but not the function definition.
Use Cases: Arrow functions are often used for short anonymous functions and for methods that do not need their own this context. Normal functions are still commonly used for function declarations and for methods that require their own this context, such as object methods and constructor functions.

## 10 What is the type of undefined and null?

Type of undefined:
🔍 What is it?
undefined is a primitive data type in JavaScript that represents the absence of a value. It is typically used to indicate that a variable has not been assigned a value.

❓ How is it used?
undefined is automatically assigned to variables that have been declared but not initialized with a value.
It can also be explicitly assigned to variables or properties to indicate the absence of a value or to reset a value to undefined.
Why is it needed?
undefined serves as a default value for uninitialized variables, allowing developers to check if a variable has been assigned a value or not.
It helps identify errors or unintended behavior in code where a value is expected but not provided.

Type of null:
🔍 What is it?
null is a primitive data type in JavaScript that represents the intentional absence of any value or an empty value. It is often used to explicitly indicate that a variable or object property does not have a value.
❓ How is it used?
Developers can assign null to variables or object properties to indicate that they are intentionally empty or have no value.
It can be used as a placeholder value or to reset a variable or object property to an empty state.
Why is it needed?
null provides a clear and explicit way to indicate the absence of a value, differentiating it from undefined.
It allows developers to handle and represent empty or uninitialized data in a consistent and predictable manner.
Examples:

// Undefined  
let x;  
console.log(x); // Output: undefined  
console.log(typeof(x)); // Output: undefined  
let y = undefined;
console.log(y); // Output: undefined
console.log(typeof(y)); // Output: undefined
// Null
let z = null;
console.log(z); // Output: null
console.log(typeof(z)); // Output: object

<!-- Taken from https://www.crio.do/learn/activity/77079097/TASK_FE_TECHPREP_104/quiz/QUESTION_FE_TECHPREP_Q33/ -->
