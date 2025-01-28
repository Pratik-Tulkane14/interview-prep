
---

### 1. **What is ECMAScript in JavaScript?**
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
     - **Spread Operator (`...`)**: Expands elements of an array or object. Example: `let arr = [1, 2, 3]; let newArr = [...arr];`
     - **Rest Operator (`...`)**: Collects multiple elements into an array, used in function parameters. Example: `function sum(...args) { return args.reduce((a, b) => a + b); }`
     - **Default Parameter**: Allows setting default values for function parameters. Example: `function greet(name = "Guest") { console.log(name); }`

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
   console.log(arr);  // Output: [1, 2, 3, 4]
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
   - **Answer**: A closure is a function that retains access to variables from its outer lexical scope, even after the outer function has finished executing.

---

### 32. **What is hoisting in JavaScript?**
   - **Answer**: Hoisting refers to JavaScript's behavior of moving declarations to the top of their scope during the compile phase, before the code is executed.