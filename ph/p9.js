// Array of numbers
const numbers = [20,18,25,26,19];

// Initialize max to the first number in the array
let max = numbers[0];

// Loop through the array to find the maximum value
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];  // Update max if a larger value is found
  }
}

// Print the maximum value
console.log('The maximum value is:', max);
