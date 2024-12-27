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

// person.introduce1();



// Encapsulation

class Learner {
  #grades = [];
  #name = {
    first: '',
    last: '',
  }
  #age;

	constructor(firstName, lastName, age) {
		this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
	}
  get name () { // usind the get method to make the name and age accessable when we need
    return this.#name.first + ' ' + this.#name.last;
  }
  get age () {
    return this.#age;
  }
  set grades (grade) { // The setter her is to set that the grades have to be numbers, and they should be between 0 and 100.
    grade = Number(grade); // Grades have to be numbers.
    if (grade >= 0 && grade <= 100 ) { 
      this.#grades.push(grade);
      }
  }
}

const learner1 = new Learner('Leeroy', 'Jenkins', 18);
learner1.age = 26; // neither the age nor the name can be changed after the intialization because they are private. when we used get we made the accessable but they are privately accessed.
learner1.name = 'Mustafa'; 
console.log(`the learner 1 first name is :  ${learner1.name} and is ${learner1.age} years old`);