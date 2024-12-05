// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.



// Array of objects representing cars
const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2020 },
    { make: 'Honda', model: 'Civic', year: 2018 },
    { make: 'Ford', model: 'Focus', year: 2022 },
    { make: 'Tesla', model: 'Model 3', year: 2019 },
    { make: 'Chevrolet', model: 'Malibu', year: 2021 }
  ];
  
  // Function to sort cars by year in ascending order
  function sortCarsByYear(cars) {
    return cars.sort((a, b) => a.year - b.year); // Compare years in ascending order
  }
  
  // Call the function and store the result
  const sortedCars = sortCarsByYear(cars);
  
  // Print the sorted array
  console.log(sortedCars);