
// Classes: The reason that we need classes is becuase when we have multiple objects have been created! That's mean we need to add the function to each object we created which is not a practical solution. Thatr why we need the classes for large projects.


// Instantiating a Class


class Animal { 
    constructor (firstName, lastName, age, city, state, zipCode, eyes, legs, isAwake, isMoving) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.city = city;
      this.state = state;
      this.zipCode = zipCode;
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
    toString(animal = 'an Animal') {
      return `${this.firstName} is ${animal}, it has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
    }
  }

// const cat1 = new Animal(2, 4, true, false);
// const cat2 = new Animal(2, 4, false, false);
// const dog1 = new Animal(2, 4, true, true);
// const cow1 = new Animal(2, 4, true, false);

// console.log(cat1);
// console.log(cat1.isAwake); // I could access the mehtod in the Animal Class from the Cat1 Child class.
// console.log(cat1.toString()); // I could access the toString() mehtod in the Animal Class from the Cat1 Child class.
// console.log(cat2);
// console.log(dog1);
// console.log(cow1);


// Extends

// Cat Extends Animal
class Cat extends Animal {
  constructor (firstName, isAwake, fur, isMoving) // This constrauctor is only for the Cat Class and it will receive the data of (Fur, isAwake and isMoving) when we create the cat1
  {
    super(firstName, false, false, false, false, false, 2, 4, isAwake, isMoving); // We passed to the Animal class that Cat class has 2 eyes and 4 legs permenantly.
    this.fur = fur;
  }
  speak () {
    super.speak("Meow...");
  }
  toString() {
   return super.toString("a Cat");
  }
}

const cat1 = new Cat ("TOM", true, true, false);
console.log (cat1);
console.log (cat1.toString());





// Dog Extends Animal
class Dog extends Animal {
  constructor(firstName, fur, isAwake, isMoving) {
    super(firstName, false, false, false, false, false, 2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Woof!");
  }
  toString() {
    return super.toString("a Dog");
  }
}

const dog1 = new Dog ("Snoopy", true, false, false );
console.log(dog1);
console.log (dog1.toString());





//Cow Extends Animal
class Cow extends Animal {
  constructor(firstName, hair, isAwake, isMoving) {
    super(firstName, false, false, false, false, false, 2, 4, isAwake, isMoving);
    this.hair = hair;
  }
  speak() {
    super.speak("Moo.");
  }
  toString() {
    return super.toString("a Cow");
  }
}

const cow1 = new Cow ("Cowee",true, true, true);
console.log(cow1);
console.log(cow1.toString())



// Creating the Human class extended from Animal
class Human extends Animal {
  constructor (firstName, lastName, age, city, state, zipCode, isAwake, isMoving) {
    super(firstName, lastName, age, city, state, zipCode, 2, 2, isAwake, isMoving)
  }
}

const mustafa = new Human ("Mustafa", "Alani", 46, "Chicago", "Illinois", 60073, true, true);

console.log(mustafa);