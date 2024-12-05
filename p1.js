/*1.Task: Array Filtering and Mapping Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
*/

// Create an array of objects, each representing a person
const people = [
  { name: 'Alice', age: 25, gender: 'female' },
  { name: 'Bob', age: 30, gender: 'male' },
  { name: 'Charlie', age: 35, gender: 'male' },
  { name: 'Diana', age: 28, gender: 'female' },
  { name: 'Ethan', age: 22, gender: 'male' }
];

// Function to filter out all females and map the remaining people to an array of names
function getMaleNames(people) {
  return people
      .filter(person => person.gender === 'male') // Filter out females
      .map(person => person.name); // Map to an array of names
}

// Call the function and print the final result
const maleNames = getMaleNames(people);
console.log(maleNames); // Output: ['Bob', 'Charlie', 'Ethan']


  