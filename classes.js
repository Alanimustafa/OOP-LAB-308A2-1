
// Classes: The reason that we need classes is becuase when we have multiple objects have been created! That's mean we need to add the function to each object we created which is not a practical solution. Thatr why we need the classes for large projects.


// Instantiating a Class


class Animal { 
    constructor (eyes, legs, isAwake, isMoving) {
      this.eyes = eyes;
      this.legs = legs;
      this.isAwake = isAwake;
      this.isMoving = isMoving;
    }
    sleep () {
      this.isAwake = false;
    }
    wake () {
      this.isAwake = true;
    }
    walk () {
      this.isMoving = true;
    }
    sit () {
      this.isMoving = false;
    }
    speak (sound) {
      console.log(`The sound of ${this.name} is ${sound}`);
    }
  }

const cat1 = new Animal(2, 4, true, false);
const cat2 = new Animal(2, 4, false, false);
const dog1 = new Animal(2, 4, true, true);
const cow1 = new Animal(2, 4, true, false);

console.log(cat1);
console.log(cat2);
console.log(dog1);
console.log(cow1);