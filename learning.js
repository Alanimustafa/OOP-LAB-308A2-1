const person = {
  name: {
    first: 'Elyan',
    last: 'Kemble',
  },
  age: 32,
  location: {
    city: 'Garland',
    state: 'Texas',
    zip: 75040
  },
  occupation: 'Front-End Developer',
  introduce1 () {  //The function has been added to the object.
    console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
  }
}


// pasing the object's properties in as arguments
function introduce() {
  console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
}

// Adding the fucntion to the object.
person.introduce1 = introduce;
person.introduce1(); // usign the functioin as a method to the object.

person.introduce1();
