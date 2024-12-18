// const person = {
//   name: {
//     first: 'Elyan',
//     last: 'Kemble',
//   },
//   age: 32,
//   location: {
//     city: 'Garland',
//     state: 'Texas',
//     zip: 75040
//   },
//   occupation: 'Front-End Developer',
//   introduce1 () {  //The function has been added to the object.
//     console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
//   }
// }

// function introduce() {
//   console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
// }

// // Adding the fucntion to the object.
// person.introduce = introduce;
// person.introduce(); // usign the functioin as a method to the object.


// person.introduce1();

// // Classes: The reason that we need classes is becuase when we have multiple objects have been created! That's mean we need to add the function to each object we created which is not a practical solution. Thatr why we need the classes for large projects.


// // Instantiating a Class


// class Animal { 
//     constructor (name, eyes, legs, isAwake, isMoving) {
//       this.name = name;
//       this.eyes = eyes;
//       this.legs = legs;
//       this.isAwake = isAwake;
//       this.isMoving = isMoving;
//     }
//     sleep () {
//       this.isAwake = false;
//     }
//     wake () {
//       this.isAwake = true;
//     }
//     walk () {
//       this.isMoving = true;
//     }
//     sit () {
//       this.isMoving = false;
//     }
//     speak (sound) {
//       console.log(`The sound of ${this.name} is ${sound}`);
//     }
//     toString(animal = this.name) {
//       return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
//     }
// }


// class Cat extends Animal {
//   constractor (fur, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.fur = fur;
//   }
//   speak () {
//     super.speak("Meow...")
//   }
//   toString() {
//     return super.toString ("Cat");
//   }
// }

// class Cow extends Animal {
//   constructor(hair, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.hair = hair;
//   }
//   speak() {
//     super.speak("Moo.");
//   }
//   toString() {
//     return super.toString("Cow");
//   }
// }

// const cat1 = new Animal ("TOM",2, 4, true, true);
// const cat2 = new Animal ("Cat2",2, 4, false, 10);
// const dog1 = new Animal(2, 4, true, true);
// const cow1 = new Animal(2, 4, true, false);

// cat1.toString() ;
// console.log(cat1) ;
// console.log(cat2);

// console.log(cat1.toString());

