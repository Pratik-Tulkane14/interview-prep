
---

###  1. **What is ECMAScript in JavaScript?**

   - **Answer**: ECMAScript is a standardized specification for scripting languages such as JavaScript, JScript, and ActionScript. JavaScript implements this specification, defining the syntax, types, and methods that the language follows. ECMAScript evolves with versions, and ES6 (ECMAScript 2015) introduced many modern features like `let`, `const`, classes, and arrow functions.

---

### 2. **What is the difference between `let`, `const`, and `var`?**

- **Answer**:
  - **`let`**: Declares a block-scoped variable. It can be reassigned but cannot be redeclared within the same block scope.
  - **`const`**: Declares a block-scoped variable whose value cannot be reassigned after initialization.
  - **`var`**: Declares a function-scoped variable. Variables declared with `var` can be redeclared and reassigned, leading to potential bugs.

---

### 3. **What is the spread operator, rest operator, and default parameter?**

- **Answer**:
  Spread Operator (...)
  The spread operator is a feature introduced in ES6 that allows an iterable (like an array or string) to be expanded in places where multiple elements/arguments are expected.

Theory:

It unpacks elements from arrays, objects, or strings
Works in array literals, function calls, and object literals
Creates shallow copies (not deep clones)
Helps avoid mutating original data structures

Examples:
// In Arrays
const fruits = ['apple', 'banana']
const moreFruits = [...fruits, 'orange'] // ['apple', 'banana', 'orange']

// In Objects
const user = { name: 'John' }
const userWithAge = { ...user, age: 30 } // { name: 'John', age: 30 }

// In Function Calls
const numbers = [1, 2, 3]
console.log(...numbers) // 1 2 3

Rest Parameter (...)
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

Theory:

Collects all remaining elements into an array
Must be the last parameter in a function
Only one rest parameter is allowed per function
Can be used in arrow functions
Helps create more flexible functions

Examples:
javascriptCopy// Basic Rest Parameter
function sum(...numbers) {
return numbers.reduce((total, num) => total + num, 0)
}
console.log(sum(1, 2, 3)) // 6

// With Other Parameters
function printUserInfo(name, age, ...hobbies) {
console.log(`${name} is ${age} years old`)
console.log(`Hobbies: ${hobbies.join(', ')}`)
}
printUserInfo('John', 30, 'reading', 'gaming', 'cooking')

Default Parameters
Default parameters allow named parameters to be initialized with default values if no value or undefined is passed.

Theory:

Provides fallback values for parameters
Evaluated at call time
Can use expressions or function calls
Only triggers on undefined, not null
Can reference previous parameters

// Simple Default Parameter
function greet(name = 'Guest') {
return `Hello, ${name}!`
}
console.log(greet()) // "Hello, Guest!"
console.log(greet('John')) // "Hello, John!"

// Complex Default Parameters
function createUser(
name = 'Anonymous',
role = 'user',
createdAt = new Date()
) {
return { name, role, createdAt }
}

// Default Parameters with Expressions
function multiply(a, b = a _ 2) {
return a _ b
}
console.log(multiply(5)) // 50

---

### 4. **What is a deep copy and shallow copy in JavaScript?**

- **Answer**:
  - **Shallow Copy**: A shallow copy copies only the top-level properties of an object. If the object contains nested objects, it only copies references to them. Example: `Object.assign({}, obj)`
  - **Deep Copy**: A deep copy creates a completely new object with all levels copied, including nested objects. Example: `JSON.parse(JSON.stringify(obj))`

---

### 5. **What is a promise, callback function, and async/await in JavaScript?**

- **Answer**:
  - **Callback Function**: A function passed as an argument to another function to be executed after the completion of an asynchronous task.
  - **Promise**: Represents the eventual completion or failure of an asynchronous operation, returning a result or error.
  - **Async/Await**: Syntactic sugar over promises, allowing asynchronous code to be written in a synchronous style.

---

### 6. **What is the difference between a promise and a callback in JavaScript?**

- **Answer**: Promises provide a cleaner, more structured way of handling asynchronous operations, supporting chaining and error handling. Callbacks, however, can lead to "callback hell," making the code harder to read and maintain.

---

### 7. **What is event bubbling and event capturing in JavaScript?**

- **Answer**:
  - **Event Bubbling**: The event starts from the innermost target element and bubbles up to the root of the DOM.
  - **Event Capturing**: The event starts from the outermost element (root) and captures down to the target element.

---

### 8. **What is a higher-order function in JavaScript?**

- **Answer**: A higher-order function is a function that either takes one or more functions as arguments or returns a function. Examples include `map()`, `filter()`, and `reduce()`.

---

### 9. **Explain different types of functions in JavaScript.**

- **Answer**:
  - **Function Declaration**: `function greet() { console.log("Hello"); }`
  - **Function Expression**: `const greet = function() { console.log("Hello"); };`
  - **Arrow Function**: `(a, b) => a + b;`

---

### 10. **What is an arrow function in JavaScript?**

- **Answer**: An arrow function is a concise way to write functions. It does not have its own `this`, so it inherits `this` from the surrounding scope. Example: `(a, b) => a + b`

---

### 11. **Why do we use `call`, `apply`, and `bind` in JavaScript?**

- **Answer**:
  - **`call`**: Calls a function with a specified `this` value and arguments passed individually.
  - **`apply`**: Similar to `call`, but arguments are passed as an array.
  - **`bind`**: Returns a new function with the specified `this` value, but does not invoke the function immediately.

---

### 12. **How many ways can we create objects in JavaScript?**

- **Answer**:
  - Using object literals: `const obj = {};`
  - Using `new Object()`: `const obj = new Object();`
  - Using `Object.create()`: `const obj = Object.create(proto);`
  - Using ES6 Classes: `class MyClass { constructor() {} }`

---

### 13. **What is prototype inheritance in JavaScript?**

- **Answer**: JavaScript uses prototype inheritance, where objects can inherit properties and methods from another object. Each object has a prototype, and when a property is not found on the object itself, JavaScript looks up the prototype chain.

---

### 14. **What is TypeScript?**

- **Answer**: TypeScript is a superset of JavaScript that introduces static typing. It allows for type checking, interfaces, and other features that enhance development, particularly for large-scale applications.

---

### 15. **What are array methods and string methods in JavaScript?**

- **Answer**:
  - **Array Methods**: `.map()`, `.filter()`, `.reduce()`, `.forEach()`, `.push()`, `.pop()`, etc.
  - **String Methods**: `.toUpperCase()`, `.toLowerCase()`, `.substring()`, `.trim()`, `.split()`, etc.

---

### 16. **What is the difference between Java and JavaScript?**

- **Answer**: Java is a compiled object-oriented programming language primarily used for backend development, while JavaScript is an interpreted scripting language used mainly for web development, specifically client-side.

---

### 17. **What is throttling and debouncing in JavaScript?**

- **Answer**:
  - **Throttling**: Limits the number of times a function can be executed in a given time frame.
  - **Debouncing**: Ensures that a function is only executed after a certain time period has passed without further calls.

---

### 18. **What is `null` and `undefined` in JavaScript?**

- **Answer**:
  - **`null`**: Represents the intentional absence of a value.
  - **`undefined`**: Indicates a variable has been declared but not assigned a value.

---

### 19. **What are falsy values in JavaScript?**

- **Answer**: Falsy values include: `false`, `0`, `""` (empty string), `null`, `undefined`, and `NaN`.

---

### 20. **What is execution context, event loop, stack, call queue, and microtask queue in JavaScript?**

- **Answer**: Execution context refers to the environment in which code is executed. The event loop controls the execution of code, checking the call stack and executing functions from the call queue. The microtask queue holds tasks like promise callbacks.

---

### 21. **What are `setTimeout` and `setInterval` in JavaScript?**

- **Answer**:
  - **`setTimeout()`**: Executes a function once after a specified delay.
  - **`setInterval()`**: Repeatedly executes a function at specified intervals.

---

### 22. **What is `Object.seal` and `Object.freeze` in JavaScript?**

- **Answer**:
  - **`Object.seal()`**: Prevents adding or deleting properties but allows modifications to existing properties.
  - **`Object.freeze()`**: Prevents adding, deleting, or modifying properties.

---

### 23. **What is the difference between `map` and `set` in JavaScript?**

- **Answer**:
  - **`map`**: A collection of key-value pairs where keys can be any data type.
  - **`set`**: A collection of unique values without keys.

---

### 24. **What is `WeakMap` and `WeakSet` in JavaScript?**

- **Answer**:
  - **`WeakMap`**: A collection of key-value pairs where keys must be objects and values can be any type. It allows for garbage collection of keys.
  - **`WeakSet`**: A collection of unique objects that are weakly held and can be garbage collected.

---

### 25. **What is `sessionStorage`, `localStorage`, and `cookie` in JavaScript?**

- **Answer**:
  - **`sessionStorage`**: Stores data for the duration of the page session.
  - **`localStorage`**: Stores data persistently, even after the page is closed.
  - **`cookie`**: Stores data that is sent with every HTTP request.

---

### 26. **Write a program to sort an array in JavaScript.**

**Answer**:

```javascript
const arr = [3, 1, 4, 2];
arr.sort((a, b) => a - b);
console.log(arr); // Output: [1, 2, 3, 4]
```

---

### 27. **What is the use of `JSON.stringify` and `JSON.parse()` in JavaScript?**

- **Answer**:
  - **`JSON.stringify()`**: Converts a JavaScript object into a JSON string.
  - **`JSON.parse()`**: Converts a JSON string into a JavaScript object.

---

### 28. **What are `map`, `filter`, and `reduce` in JavaScript?**

- **Answer**:
  - **`map()`**: Transforms each element of an array.
  - **`filter()`**: Filters elements based on a condition and returns a new array.
  - **`reduce()`**: Accumulates values into a single result.

---

### 29. **What is a generator function in JavaScript?**

- **Answer**: A generator function is a function that can pause and resume its execution, using the `yield` keyword. Example:

```javascript
function* gen() {
  yield 1;
  yield 2;
}
```

---

### 30. **How to stop event propagation in JavaScript?**

- **Answer**: Use `event.stopPropagation()` to prevent the event from bubbling up or capturing down the DOM tree.

---

### 31. **What is closure in JavaScript?**

- **Answer**:A closure is a fundamental JavaScript concept where a function retains access to variables from its outer (enclosing) lexical scope even after the outer function has returned. In other words, it's a function bundled together with references to its surrounding state.

function outerFunction() {
let name ="Pratik";
function innerFunction(){
console.log(name);
}
innerFunction();
}
outerFunction()

function outerFunction (){
let name ="Pratik";
function innerFunction(){
console.log(name);
}
return innerFunction
}
let closure = outerFunction();
closure();

Real-world Applications:

Module patterns
Currying
Event handlers
Partial application
Maintaining state in async operations

Real life ex:

function createBankAccount(initialBalance) {
let balance = initialBalance;

    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },
        withdraw: function(amount) {
            if (amount > balance) {
                throw new Error('Insufficient funds');
            }
            balance -= amount;
            return balance;
        },
        getBalance: function() {
            return balance;
        }
    };

}

const account = createBankAccount(100);
account.deposit(50); // 150
account.withdraw(30); // 120
account.getBalance(); // 120
// balance variable is private and can't be accessed directly

---

# Currying in JavaScript

Currying is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument. The curried function returns a new function for each argument until all arguments have been provided and the final result is returned.

## Key Points:

1. A curried function returns another function until all arguments are satisfied
2. It allows partial application of a function's arguments
3. Makes code more reusable and modular
4. Helps in creating more flexible function compositions

## Example:

````javascript
// Regular function
function add(x, y) {
    return x + y;
}

// Curried version
function curriedAdd(x) {
    return function(y) {
        return x + y;
    }
}

// Usage
const regularResult = add(2, 3);          // Returns 5
const curriedResult = curriedAdd(2)(3);   // Returns 5

// Practical example with partial application
const addFive = curriedAdd(5);  // Creates a new function
console.log(addFive(3));        // Returns 8
console.log(addFive(7));        // Returns 12

Benefits:

Function Reusability: Create new functions from existing ones with some arguments pre-set
Modularity: Break down complex functions into smaller, more manageable pieces
Function Composition: Easier to compose multiple functions together
Better Code Organization: Helps in creating more organized and maintainable code

Define Callback Hell in Javascript
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

Explain prototype in javascript.

Prototypes
Why does typeof of a string return 'string' but that of an array return 'obj' and not 'array'?

Why:

Javascript typeof returns a “string” for a strings, because it is a primitive data type.
Whereas arrays are non-primitive data type. In Javascript, arrays are objects with additional properties and methods that allow them to store and manipulate a collection of values in a specific way.

2 important things to keep in mind:

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


3 points of Comparison:

Inheritance Model:
Prototypal Inheritance: Native JavaScript inheritance model.
Object-Oriented Inheritance: Mimics classical inheritance using class syntax found in languages like Java or C#.
Inheritance Mechanism:
Prototypal Inheritance: Inherits directly from other objects (prototype chain)
Object-Oriented Inheritance: Inherits using classes and the extends keyword
Implementation:
Prototypal Inheritance: Uses Object.create(), Object.setPrototypeOf(), constructor functions, and the new keyword
Object-Oriented Inheritance: Uses constructor functions, super keyword, and the class syntax.


## What is the process of hoisting for normal and arrow functions, and what are the differences between them?
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
var sayHello = function() {
console.log("Hello!");
};
````

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

# What is the type of undefined and null?

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

# DOM Events: Event Bubbling, Capturing, and stopPropagation

## Table of Contents

- [Event Bubbling](#event-bubbling)
- [Event Capturing](#event-capturing)
- [stopPropagation](#stoppropagation)
- [Examples](#examples)
- [Interview Questions](#interview-questions)
- [Best Practices](#best-practices)

## Event Bubbling

Event bubbling is a type of event propagation where an event triggers on the innermost target element and then bubbles up to outer elements in the DOM hierarchy.

### Example

```html
<div id="grandparent">
  <div id="parent">
    <button id="child">Click me</button>
  </div>
</div>

<script>
  document.getElementById("grandparent").addEventListener("click", function () {
    console.log("Grandparent clicked");
  });

  document.getElementById("parent").addEventListener("click", function () {
    console.log("Parent clicked");
  });

  document.getElementById("child").addEventListener("click", function () {
    console.log("Child clicked");
  });

  // Output when button is clicked:
  // Child clicked
  // Parent clicked
  // Grandparent clicked
</script>
```

## Event Capturing

Event capturing is the opposite of bubbling, where the event starts from the root and flows down to the target element.

### Example

```html
<div id="grandparent">
  <div id="parent">
    <button id="child">Click me</button>
  </div>
</div>

<script>
  document.getElementById("grandparent").addEventListener(
    "click",
    function () {
      console.log("Grandparent clicked - capturing");
    },
    true
  );

  document.getElementById("parent").addEventListener(
    "click",
    function () {
      console.log("Parent clicked - capturing");
    },
    true
  );

  document.getElementById("child").addEventListener(
    "click",
    function () {
      console.log("Child clicked - capturing");
    },
    true
  );

  // Output when button is clicked:
  // Grandparent clicked - capturing
  // Parent clicked - capturing
  // Child clicked - capturing
</script>
```

## stopPropagation

The stopPropagation() method stops the bubbling of an event to parent elements or capturing to child elements.

### Example

```javascript
document.getElementById("inner").addEventListener("click", function (e) {
  e.stopPropagation(); // Stops event from reaching outer elements
  console.log("Inner div clicked");
});
```

## Examples

### Practical Todo List Example

```html
<div id="todoList">
  <div class="todo-item">
    <span class="text">Task 1</span>
    <button class="delete">Delete</button>
  </div>
</div>

<script>
  // Event Delegation with Bubbling
  document.getElementById("todoList").addEventListener("click", function (e) {
    if (e.target.className === "delete") {
      e.stopPropagation();
      const todoItem = e.target.parentElement;
      todoItem.remove();
    }
  });
</script>
```

## Interview Questions

### Q1: What's the difference between event bubbling and capturing?

**Answer:**

- Bubbling: Events bubble up from target to parent elements (bottom to top)
- Capturing: Events are captured from parent to target elements (top to bottom)

```javascript
// Bubbling (default)
element.addEventListener("click", handler, false);

// Capturing
element.addEventListener("click", handler, true);
```

### Q2: How do stopPropagation and preventDefault differ?

**Answer:**

- stopPropagation(): Stops event propagation in the bubbling/capturing phase
- preventDefault(): Prevents the default browser behavior for the event

```javascript
element.addEventListener("click", function (e) {
  e.stopPropagation(); // Stops bubbling
  e.preventDefault(); // Prevents default behavior
});
```

### Q3: What is event delegation and why is it useful?

**Answer:** Event delegation is a technique where you attach a single event listener to a parent element to handle events on its children, even future ones. It's useful for:

- Better performance (fewer event listeners)
- Dynamic elements
- Memory efficiency

## Best Practices

1. **Use Event Delegation for Dynamic Content**

```javascript
// Good Practice
parentElement.addEventListener("click", function (e) {
  if (e.target.matches(".child-class")) {
    // Handle event
  }
});
```

2. **Clean Up Event Listeners**

```javascript
function handler() {
  // Event handling logic
}

// Add listener
element.addEventListener("click", handler);

// Remove when not needed
element.removeEventListener("click", handler);
```

3. **Be Careful with stopPropagation**

```javascript
// Consider whether you really need to stop propagation
element.addEventListener("click", function (e) {
  // Only stop propagation if absolutely necessary
  if (specificCondition) {
    e.stopPropagation();
  }
});
```

4. **Use Proper Event Types**

```javascript
// For forms, use submit instead of click
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // Handle form submission
});
```

### 32. **What is hoisting in JavaScript?**

- **Answer**: Hoisting refers to JavaScript's behavior of moving declarations to the top of their scope during the compile phase, before the code is executed.
