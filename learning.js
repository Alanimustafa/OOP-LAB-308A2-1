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

	constructor(firstName, lastName, age, grades) {
		this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
    this.#grades = grades;
	}
  get name () { // usind the get method to make the name and age accessable when we need
    return this.#name.first + ' ' + this.#name.last;
  }
  get age () {
    return this.#age;
  }
  
  // I removed the grade setter and created this function to add grades since they are Numbers and between 0 and 100 to make the code more descriptive. 
  addGrades(...grades) {
    grades = grades.flat();
    grades.forEach((grade) => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        this.#grades.push(grade);
      }
    });
  }
  get grades () {
    return this.#grades;
  }
  get average() {
    const arr = [...this.#grades];
    arr.sort((a, b) => a - b).shift();

    return arr.reduce((a, b) => a + b) / arr.length;
  }
  
}

const learner1 = new Learner('Leeroy', 'Jenkins', 18, [100, 80, 90,100]);
learner1.age = 26; // neither the age nor the name can be changed after the intialization because they are private. when we used get we made the accessable but they are privately accessed.
learner1.name = 'Mustafa'; 
learner1.grades = 75;
learner1.grades = 65;
learner1.grades = "ali";
console.log(`the learner 1 first name is :  ${learner1.name} and is ${learner1.age} years old. the grades are ${learner1.grades}. the grades average is : ${learner1.average.toFixed(2)}%`);

const mustafaAlani = new Learner ('Mustafa', 'Alani', 46, [100, 75, 80, 55]);

console.log(mustafaAlani);

mustafaAlani.addGrades([[95, 87, 66], "98", "100", -60, 88, 89, [100, 76, 88], 105]);
console.log(mustafaAlani);