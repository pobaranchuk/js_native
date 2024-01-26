// const car1 = {
//   brand: "bmw",
//   maxSpeed: 220,
//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   },
// };

// const car2 = {
//   brand: "kia",
//   maxSpeed: 250,
//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   },
// };

// function carCreator(brand, maxSpeed) {
//   return {
//     brand,
//     maxSpeed,
//     startEngine() {
//       console.log(`Start ${this.brand}`);
//     },
//   };
// }

// const car1 = carCreator("bmw", 220);
// const car2 = carCreator("kia", 250);

// console.log(car1);
// console.log(car2);
// const startEngine = function () {
//   console.log(`Start ${this.brand}`);
// };

// function Car(brand, maxSpeed) {
//   //{}
//   this.brand = brand;
//   this.maxSpeed = maxSpeed;
//   this.startEngine = startEngine;
// }

// Car.prototype.startEngine = function () {
//   console.log(`Start ${this.brand}`);
// };

// const car1 = new Car("bmw", 220);
// const car2 = new Car("kia", 250);
// console.log(car1.startEngine === car2.startEngine);

// console.log(car1);
// console.log(car2);

// car1.startEngine();
// car2.startEngine();

// class Car {
//   constructor(brand, maxSpeed) {
//     this.brand = brand;
//     this.maxSpeed = maxSpeed;
//   }
//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   }
//   stopEngine = () => {
//     console.log(`Stop ${this.brand}`);
//   };
// }
//
// const car1 = new Car("bmw", 220);
// const car2 = new Car("kia", 250);
//
// console.log(car2.startEngine === car1.startEngine);
// console.log(car2.stopEngine === car1.stopEngine);

// car1.startEngine();
// car2.startEngine();

// setTimeout(car1.startEngine(), 10000);

class Car {
  #brand;
  constructor(brand, maxSpeed) {
    //{}
    this.#brand = brand;
    this.maxSpeed = maxSpeed;
    console.log("constructor from class Car");
  }
  setBrand(value) {
    this.#brand = value;
    return value;
  }
  getBrand() {
    return this.#brand;
  }
  get brand() {
    return this.#brand;
  }
  set brand(value) {
    this.#brand = value;
  }
}

class SuperCar extends Car {
  constructor(brand, maxSpeed, canFly) {
    super(brand, maxSpeed);
    this.canFly = canFly;
  }
  // startFly() {
  //   console.log(`Start fly ${this.brand}`);
  // }
  startEngine() {
    super.startEngine();
  }
}

const superBmw = new SuperCar("superBmw", 320, true);

