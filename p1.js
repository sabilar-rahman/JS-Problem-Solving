/*1.Task: Array Filtering and Mapping Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
*/

// Create an array of objects
const people = [
  { name: 'Ayesha', age: 25, gender: 'female' }, 
  { name: 'Rahim', age: 30, gender: 'male' },   
  { name: 'Karim', age: 35, gender: 'male' },   
  { name: 'Fatima', age: 28, gender: 'female' },
  { name: 'Jamal', age: 22, gender: 'male' }    
];

function filterAndMapNames(people) {
  const maleNames = []; // Array to store male names
  for (let i = 0; i < people.length; i++) { // Loop through the people array
      if (people[i].gender !== 'female') { // Check if the person is male
          maleNames.push(people[i].name); // Add the name to the maleNames array
      }
  }
  return maleNames; 
}

const result = filterAndMapNames(people); // Call the filterAndMapNames function
console.log(result);
  