/*
2.Task: Object Manipulation
Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

*/

// Array of objects representing books 
const books = [
    { title: 'Padma Nadir Majhi', author: 'Manik Bandopadhyay', year: 1936 },
    { title: 'Lalsalu', author: 'Syed Waliullah', year: 1948 },
    { title: 'Srikanto', author: 'Sarat Chandra Chattopadhyay', year: 1917 },
    { title: 'Aparajito', author: 'Bibhutibhushan Bandyopadhyay', year: 1932 },
    { title: 'Deshe Bideshe', author: 'Syed Mujtaba Ali', year: 1948 }
  ];
  
  // Function to extract and return book titles
  function getBookTitles(books) {
    const titles = []; // Initialize an empty array to store the titles
    for (let i = 0; i < books.length; i++) {
      titles.push(books[i].title); // Add each book's title to the titles array
    }
    return titles; // Return the array of titles
  }
  
 
  const bookTitles = getBookTitles(books); // Call the function and store the result
  console.log(bookTitles);
  