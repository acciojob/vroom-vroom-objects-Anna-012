// Complete the js code
// Define the Car constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add the getMakeModel method to Car's prototype
Car.prototype.getMakeModel = function () {
    return `${this.make} ${this.model}`;
};

// Define the SportsCar constructor function
function SportsCar(make, model, topSpeed) {
    // Call the Car constructor function to initialize make and model
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Set up inheritance of Car's prototype in SportsCar's prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add the getTopSpeed method to SportsCar's prototype
SportsCar.prototype.getTopSpeed = function () {
    return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
