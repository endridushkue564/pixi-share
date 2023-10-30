/* 
   filename: sophisticated_code.js
   description: This code demonstrates a complex data structure and various operations on it.
*/

// Define a class for representing a car
class Car {
  constructor(make, model, year, price) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
  }
  
  displayInfo() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Price: $${this.price}`);
  }
}

// Create an array of cars
let cars = [
  new Car("Toyota", "Camry", 2018, 25000),
  new Car("Honda", "Accord", 2016, 22000),
  new Car("Ford", "Mustang", 2020, 40000),
  new Car("Chevrolet", "Camaro", 2019, 38000)
];

// Function to find a car by make and model
function findCar(make, model) {
  for (let car of cars) {
    if (car.make === make && car.model === model) {
      return car;
    }
  }
  return null;
}

// Function to sort cars by price in descending order
function sortCarsByPrice() {
  cars.sort((a, b) => {
    return b.price - a.price;
  });
}

// Function to get the average price of all the cars
function getAveragePrice() {
  let totalPrice = 0;
  for (let car of cars) {
    totalPrice += car.price;
  }
  return totalPrice / cars.length;
}

// Function to display all car information
function displayAllCars() {
  for (let car of cars) {
    car.displayInfo();
  }
}

// Function to remove a car from the list
function removeCar(make, model) {
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].make === make && cars[i].model === model) {
      cars.splice(i, 1);
      return;
    }
  }
}

// Add a new car to the list
cars.push(new Car("BMW", "X5", 2017, 50000));

// Find and display information of a specific car
let carToFind = findCar("Toyota", "Camry");
if (carToFind) {
  console.log("Car found:");
  carToFind.displayInfo();
} else {
  console.log("Car not found.");
}

// Sort the cars by price and display them
console.log("Sorting cars by price:");
sortCarsByPrice();
displayAllCars();

// Get the average price of all the cars
let averagePrice = getAveragePrice();
console.log(`Average price of all cars: $${averagePrice}`);

// Remove a car from the list and display the updated list
console.log("Removing a car from the list...");
removeCar("Ford", "Mustang");
console.log("Cars after removal:");
displayAllCars();