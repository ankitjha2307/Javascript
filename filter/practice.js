const arr=[1, 2, 3, 4, 5];

// filter the array to get odd numbers



const output = arr.filter(function isOdd(x) {
    return x%2;
})
console.log(output); // Output: [1, 3, 5]

// Example of using the filter function to get even numbers

const result = arr.filter(function isEven(x) {
    return x%2===0;
})
console.log(result); // Output: [1, 3, 5]
