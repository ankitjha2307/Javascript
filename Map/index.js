const arr=[1, 2, 3, 4, 5];

// Example of using the map function to double each element in an array

// triple function to demonstrate another transformation


// binary function to demonstrate a different transformation


const result = arr.map(function double(x) {
  return x * 2;
});
console.log(result); // Output: [2, 4, 6, 8, 10]

const output = arr.map(function triple(x) {
    return x*3;
});
console.log(output); // Output: [3, 6, 9, 12,

const binaryOutput = arr.map(function binary(x) {
    return x.toString(2);
} );
console.log(binaryOutput); // Output: ['1', '10', '11', '100