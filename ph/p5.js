function findAndUpdatePerson(people, name, newAge) {
    for (let i = 0; i < people.length; i++) {
      if (people[i].name === name) {
        people[i].age = newAge;
        console.log(`Updated age for ${name}: ${newAge}`);
        return;
      }
    }
    console.log(`Person with name ${name} not found.`);
  }
  
  // Example usage:
  const people = [
    { name: 'Sagor', age: 25 },
    { name: 'Sabilar', age: 30 },
    { name: 'Tamim', age: 24 }
  ];
  
  findAndUpdatePerson(people, 'Tamim', 32);
  console.log(people); 