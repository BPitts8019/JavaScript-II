// ==== Challenge 1: Write your own closure ====
console.log("==== Challenge 1: Write your own closure ====");
// Write a simple closure of your own creation.  Keep it simple!
const trippleIt = (inputNum=1) => {
   const innerFunc = () => {
      const hiddenVal = 3;
      return inputNum * hiddenVal;
   }
   
    //This will throw an error
   // console.log("Hidden Value: ", hiddenVal);

   return innerFunc();
};

console.log(trippleIt());   //3
console.log(trippleIt(3));  //9
console.log(trippleIt(15)); //45

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
console.log("==== Challenge 2: Create a counter function ====");
const counter = () => {
   // Return a function that when invoked increments and returns a counter variable.
   let count = 0;

   return () => ++count;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter()); // 3

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
console.log("==== Challenge 3: Create a counter function with an object that can increment and decrement ====");
const counterFactory = () => {
   // Return an object that has two methods called `increment` and `decrement`.
   // `increment` should increment a counter variable in closure scope and return it.
   // `decrement` should decrement the counter variable and return it.
   let counter = 0;

   return {
      increment: () => ++counter,
      decrement: () => --counter
   };
};

const anotherCounter = counterFactory();
console.log("decrement: ", anotherCounter.decrement()); // -1

console.log("increment: ", anotherCounter.increment()); // 0
console.log("increment: ", anotherCounter.increment()); // 1
console.log("increment: ", anotherCounter.increment()); // 2

console.log("decrement: ", anotherCounter.decrement()); // 1
console.log("decrement: ", anotherCounter.decrement()); // 0

// ==== Challenge 4: Repeat Challenge 3 with an IIFE ====
console.log("==== Challenge 4: Repeat Challenge 3 with an IIFE ====");
const someCounter = (() => {
   // Initialized counter to 20 to show a difference in the logs
   let counter = 20;

   return {
      increment: () => ++counter,
      decrement: () => --counter
   };
})();

console.log("decrement: ", someCounter.decrement()); // 19

console.log("increment: ", someCounter.increment()); // 20
console.log("increment: ", someCounter.increment()); // 21
console.log("increment: ", someCounter.increment()); // 22

console.log("decrement: ", someCounter.decrement()); // 21
console.log("decrement: ", someCounter.decrement()); // 20

