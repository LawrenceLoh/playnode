var animals = [
    { name: 'Waffles', type: 'dog', age: 12 },
    { name: 'Fluffy', type: 'cat', age: 14 },
    { name: 'Spelunky', type: 'dog', age: 4 },
    { name: 'Hank', type: 'dog', age: 11 },
  ];
  var oldDogs = animals.filter(function(animal) {
    return animal.age > 10 && animal.type === 'dog';
  }).map(function(animal) {
    return animal.name;
  });

  console.log(oldDogs);
  // oldDogs will now be an array that contain 
  // only Waffles and Hank objects.