## 1 What is the difference between == and === in JS?
Intro Line

In JavaScript, == and === are operators used for comparison, but they differ in how they compare values.

3 points of comparison

Type Coercion

==: Performs type coercion, which means it converts the values to a common type before making the comparison.
===: Does not perform type coercion. It checks for both value and type equality, so the values must be of the same type to be considered equal.
Strictness

==: Known as the loose or abstract equality operator. It's less strict, as it allows for an equality comparison of values after type conversion.
===: Known as the strict equality operator. It's stricter as it requires both values to be of the same type for equality.
Real-world Usage

In real-world coding, === is generally preferred for comparisons to avoid unintended results due to type coercion by ==. For example, when validating inputs or comparing values fetched from a database or API, === ensures that you're comparing both the value and the type, reducing the risk of bugs.
Examples:

[] == [] // false
var arr1 = []; var arr2 = []; console.log(arr1 == arr2); // false
Explanation:

In JavaScript, the equality operator (==) compares objects by reference, not by value. When comparing two arrays with [] == [], two separate array objects are being compared. Since each array object has its own unique reference in memory, the comparison evaluates to false. Even though the arrays have the same contents (i.e., both are empty), they are distinct objects and occupy different memory locations. Therefore, the comparison [] == [] returns false.

## 2 What is Shallow copy and Deep copy in JavaScript?
Shallow copy and Deep copy are methods used to create copies of objects or arrays in JavaScript. 

1. Shallow copy: It creates a new object or array that shares references to the original object's or array's properties or elements.
  - Used when you want to create a copy that references the same underlying data as the original object or array.
  - It can be done using the spread operator, Object.assign(), or Array.slice() method.

  Example:

const originalObj = { a: 1, b: 2 };
const shallowCopy = { ...originalObj };
originalObj.a = 10;
console.log(shallowCopy.a); // Output: 1 (originalObj and shallowCopy reference the same underlying data)
 

2. Deep copy: It creates a completely independent copy of an object or array with its own separate memory allocations.

  - Used when you want to create a copy that does not affect the original object or array and has its own separate values.

  - It can be done using JSON.stringify() and JSON.parse() methods, or by implementing a recursive copy function.

 

  Example:

 const originalArray = [1, 2, [3, 4]];
 const deepCopy = JSON.parse(JSON.stringify(originalArray));
 originalArray[2][0] = 5;
 console.log(deepCopy[2][0]); // Output: 3 (deepCopy is completely independent of originalArray)
 // Recursive copy function
 function deepCopyObject(obj) {
   if (typeof obj !== 'object' || obj === null) {
     return obj;
   }
   const copy = Array.isArray(obj) ? [] : {};
   for (const key in obj) {
     copy[key] = deepCopyObject(obj[key]);
   }
   return copy;
 }
 

Takeaways / Best practices:

- Shallow copy is sufficient when you need to create a new reference to an object or array without duplicating the data. It is more performant than deep copy.

- Deep copy should be used when you want to ensure complete independence of the copied object or array.

- Be careful with circular references or functions inside the object, as they may not be properly copied using simple shallow or deep copy methods.

## 3 What are Closures in JS?
Need for it
Closures are a powerful feature of JavaScript, enabling function encapsulation and private data management. 
They are fundamental to functional programming in JavaScript and are crucial for writing efficient and modular code.
 

What is it
A closure is a function that remembers the environment or scope in which it was created. This means it retains access to the variables in its lexical scope even after the outer function has returned. 
In JavaScript, every function creates a closure, including functions within functions (nested functions).
 

How is it used
Closures are often used to create private variables or functions. Since JavaScript doesn’t have built-in support for private variables, closures can encapsulate variables, making them accessible only to certain functions. This is useful for data encapsulation and object data privacy. 
Closures are also used in event handling, callbacks, and maintaining state in asynchronous operations.
 

Example in JavaScript
Here's a simple example in JavaScript:

function outerFunction(outerVariable) {
   return function innerFunction(innerVariable) {
       console.log('Outer Variable:', outerVariable);
       console.log('Inner Variable:', innerVariable);
   };
}
const newFunction = outerFunction('outside');
newFunction('inside');
outerFunction is defined with one parameter outerVariable.
Inside outerFunction, an innerFunction is defined and returned. innerFunction takes one parameter innerVariable.
innerFunction has access to both outerVariable and innerVariable because of the closure.
When outerFunction is called with 'outside', it returns innerFunction.
newFunction now holds the innerFunction returned by outerFunction, and when newFunction is called with 'inside', it logs both outerVariable and innerVariable.

## 4 Differentiate between map(), filter() and reduce()
Intro Line

In JavaScript, map(), filter(), and reduce() are powerful higher-order functions that operate on arrays. They are part of the functional programming paradigm in JavaScript, each serving a distinct purpose to transform, filter, or accumulate array elements.

 

3 points of contrast:

Functionality:

map() iterates over each element in an array and applies a function to each element, returning a new array with the transformed elements. It's used for transforming the shape of data.
filter() also iterates over each element but returns a new array containing only those elements that satisfy a specified condition. It's used for selecting a subset of data.
reduce() iterates through each element, applying a reducer function to accumulate or reduce the array elements into a single value. It's typically used for summing up values or combining them in a particular way.
Return Values:

map() returns a new array of the same length as the original, but with each element transformed.
filter() returns a new array that might be smaller than the original, as it only includes elements that pass a test.
reduce() can return any value type (array, object, number, etc.) based on the logic implemented in the reducer function.
Use Cases:

map() is ideal for transformations, like converting temperatures from Celsius to Fahrenheit, or mapping a list of user objects to a list of usernames.
filter() is suited for scenarios like filtering a list of users based on age criteria or extracting elements from an array that meet certain conditions.
reduce() is used in scenarios like summing up all numbers in an array, or concatenating an array of strings into a single string.
 

Real-World Usage:

map(): Suppose we have an array of product prices and we need to apply a discount to each price. We can use map() to create a new array of prices with the discount applied.

filter(): Consider an e-commerce application where we need to show products that are under a certain price. We can use filter() to get an array of products that meet the price criteria.

reduce(): In a shopping cart application, to calculate the total price, we can use reduce() to sum up the prices of all items in the cart.

## 5 What is a callback function in JavaScript?
Need for it:

In JavaScript, much of the programming involves dealing with asynchronous operations like API requests, file operations, or timers. Without a mechanism to handle these asynchronous tasks, JavaScript code could become blocked or unresponsive while waiting for these operations to complete. Callbacks provide a way to ensure that certain code doesn’t execute until other code has finished execution, thus enabling non-blocking, asynchronous programming.

 

What is it?:

A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of action or routine. In JavaScript, because functions are first-class objects, you can pass functions as parameters to other functions and call them inside the outer function.

 

Use-case example:

Higher-Order Functions: JavaScript's array methods like map(), filter(), and forEach() use callbacks. Here, the callback function is called on each element of the array.

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);

## 6 Differentiate between the rest and spread operators in javascript
The rest and spread operators are both features introduced in JavaScript ES6 that allow for more flexible handling of arrays and objects.

Rest Operator:
The rest operator is denoted by three dots (…) and is used to represent an indefinite number of arguments as an array. It is typically used in function parameters to gather all remaining arguments into an array.

Example:

function sum(...numbers) {
return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
In the above example, the rest operator ...numbers gathers all the arguments passed to the sum function into an array called numbers. This allows us to pass any number of arguments to the function and perform operations on them as an array.

Spread Operator:
The spread operator is also denoted by three dots (…) and is used to unpack elements from an array or object. It allows us to spread the elements of an array or object into another array or object.

Example:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
In the above example, the spread operator ...arr1 and ...arr2 spread the elements of arr1 and arr2 into a new array called combinedArray. This allows us to concatenate arrays easily without modifying the original arrays.

The spread operator can also be used to create a copy of an array or object:

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]
In this example, the spread operator ...originalArray spreads the elements of originalArray into a new array called copiedArray, creating a shallow copy of the original array.

Overall, the rest operator is used to gather multiple function arguments into an array, while the spread operator is used to spread elements from an array or object into another array or object. Both operators provide powerful ways to manipulate arrays and objects in JavaScript.

## 7 Differentiate between let, var, and const in JavaScript
In JavaScript, let, var, and const are used to declare variables, but they have some differences in terms of scope, hoisting, and reassignment. Here’s a concise and structured explanation differentiating between these three:

var:

var is the oldest way to declare variables in JavaScript.

It has function scope, meaning it is accessible within the function it is declared in, regardless of block scope.
Variables declared with var are hoisted to the top of their scope, which means they can be accessed before they are declared.
var allows redeclaration and reassignment of variables within its scope.
It is recommended to avoid using var in modern JavaScript development due to its potential issues with hoisting and scope.

let:

let was introduced in ES6 (ECMAScript 2015) as a replacement for var.

It has block scope, meaning it is only accessible within the block it is declared in (e.g., within loops or if statements).
Variables declared with let are not hoisted, so they cannot be accessed before they are declared.
let does not allow redeclaration of variables within the same scope, but it allows reassignment.
It is commonly used when you need to reassign a variable or limit its scope to a specific block.

const:

const was also introduced in ES6 and stands for “constant.”

It has block scope, similar to let.
Variables declared with const are not hoisted and cannot be accessed before they are declared.
const is used to declare variables that should not be reassigned after their initial assignment.
It does not allow redeclaration or reassignment of variables within the same scope.
When using const with objects or arrays, the variable itself is constant, but the properties or elements within it can still be modified.
In summary, var has function scope, is hoisted, and allows redeclaration and reassignment. let and const have block scope, are not hoisted, and do not allow redeclaration within the same scope. However, let allows reassignment, while const is used for variables that should not be reassigned.

## 8 How does JavaScript manage asynchronous behavior, and what are some techniques or mechanisms it uses to handle tasks asynchronously

JavaScript Event Loop and Asynchronous Techniques
Event Loop: JavaScript uses a single-threaded event loop to manage asynchronous tasks:

It’s a continuous process that tracks the execution stack and multiple task queues (e.g., callback queue, microtask queue).
Asynchronous tasks, like setTimeout callbacks or DOM events, are placed in these queues.
When the execution stack is empty, the event loop checks the queues and executes tasks in a FIFO (First-In-First-Out) manner, allowing asynchronous tasks to run without blocking the main thread.
Asynchronous Techniques:

Callbacks:

Functions passed as arguments to be invoked upon the completion of an asynchronous operation.
However, nesting callbacks can lead to callback hell, making code hard to manage.
Promises:

Represent the eventual result of an asynchronous operation.
They allow chaining with .then() and handling errors with .catch(), providing a more structured approach to async code.
Async/Await:

Syntactic sugar built on top of Promises, making asynchronous code appear synchronous.
Async functions return Promises, and await suspends the execution until a Promise settles, enhancing code readability and maintainability.
Things to Keep in Mind:

Callback Nesting:

Deeply nested callbacks can lead to code complexity and maintenance issues.
Employ Promises or async/await for more readable and maintainable code.
Error Handling:

Proper error handling is crucial in async operations.
Neglecting error handling can result in uncaught exceptions, causing unexpected behavior.
Always handle errors using try/catch or .catch() to ensure code stability and predictability.




<!-- Above questions taken from https://www.crio.do/learn/activity/76060804/TASK_FE_TECHPREP_102/quiz/QUESTION_FE_TECHPREP_Q13/ -->