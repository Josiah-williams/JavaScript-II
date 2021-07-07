// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! 
function greeting() {
  let hello = "Nice to meet you";

  function fullGreeting(first, last) {
      return `${hello} ${first} ${last}!`;
  }
  return fullGreeting;
}

const sayHello = greeting();
console.log(sayHello("Jess", "H"));


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  let count = 0;
    const plusOne = function() {
        return ++count;
    }
    return plusOne;
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2
const newCounter = counterMaker();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.



// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
