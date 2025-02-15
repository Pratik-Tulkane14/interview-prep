## What is Promises in JavaScript.

"A Promise is an object that represents a value that may not be available immediately but will be resolved at some point in the future. It's commonly used to handle asynchronous operations like fetching data from an API, reading files, or any task that takes time to complete.

A Promise can be in one of three states:

1. Pending: It'a default state of the promise, neither fulfilled nor rejected.
2. Fulfilled: Operation completed successfully
3. Rejected: Operation failed

## Example


// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an async operation
    setTimeout(() => {
        const success = true;   
        if (success) {
            resolve("Operation successful!");
        } else {
            reject("Operation failed!");
        }
    }, 1000);
});

// Using the Promise
myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));

