// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

console.log(JSON.stringify(items));

function getLength(arr, cb) {
   // getLength passes the length of the array into the callback.
   cb(arr.length);
}
getLength(items, length => {
   console.log("=== Length ===\n", length);
});

function last(arr, cb) {
   // last passes the last item of the array into the callback.
   cb(arr[arr.length-1]);
}
last(items, lastItem => {
   console.log("=== Last Item ===\n", lastItem);
});

function sumNums(x, y, cb) {
   // sumNums adds two numbers (x, y) and passes the result to the callback.
   console.log(`=== Sum Nums (${x} * ${y}) ===`);
   cb(x + y);
}
sumNums(10, 4, sum => {
   console.log(sum);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  console.log(`=== Multiply Nums (${x} * ${y}) ===`);
  cb(x * y);
}
multiplyNums(2, 65, product => {
   console.log(product);
});

function contains(item, list, cb) {
   // contains checks if an item is present inside of the given array/list.
   // Pass true to the callback if it is, otherwise pass false.
   let isContained = false;

   for (let idx = 0; idx < list.length; idx++) {
      if (list[idx] === item) {
         isContained = true;
         break;
      }
   }

   console.log(`=== Array contains "${item}"? ===`);
   cb(isContained);
   // cb(list.includes(item));
}
//['Pencil', 'Notebook', 'yo-yo', 'Gum']
contains("blah", items, isContained => {
   console.log(isContained);
});
contains("Notebook", items, isContained => {
   console.log(isContained);
});

/* STRETCH PROBLEM */
console.log("\n\n||=== STRETCH PROBLEM ===||",);
function removeDuplicates(array, cb) {
   // removeDuplicates removes all duplicate values from the given array.
   // Pass the duplicate free array to the callback function.
   // Do not mutate the original array.
   let noDupes = array.reduce((acc, item) => {
      //=== Method 1 ===//
      let isContained = false;

      for (let idx = 0; idx < acc.length; idx++) {
         if (acc[idx] === item) {
            isContained = true;
            break;
         }
      }
      if (!isContained) acc.push(item);
      
      //=== Method 2 ===//
      // contains(item, acc, isContained => {
      //    if (!isContained) acc.push(item);
      // });

      //=== Method 3 ===//
      // if (!acc.includes(item)) acc.push(item);

      return acc;
   }, []);

   console.log(`--- removeDuplicates: ${JSON.stringify(array)} ---`);
   cb(noDupes);
}

const displayArr = fixedArray => { console.log(JSON.stringify(fixedArray)+ "\n"); };
removeDuplicates([1, 2, 2, 3, 4, 5], displayArr);
removeDuplicates(["hello", "my", "name", "hello", "is", "hello", "Freddy!"], displayArr);
removeDuplicates(["This", "is", "a", "number: ", 10], displayArr);