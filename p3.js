/*
3.Task: Function Composition
Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number,
doubles the result,
and then adds 5.
*/

// Function to square a number
function square(x) {
    return x * x;
}

// Function to double a number
function double(x) {
    return x * 2;
}

// Function to add 5 to a number
function addition5(x) {
    return x + 5;
}

function composedFunction(x) {
    return addition5(double(square(x)));
}

const result = composedFunction(2);
console.log(result); 


// Input and Output:
// Input: x = 2.
// Processing:
// square(2) → 4.
// double(4) → 8.
// addition5(8) → 13.
// Output: 13.