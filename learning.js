

// The adventurer object has been coppied from the assignment sheet.
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
      name: "Leo",
      type: "Cat"
  }
}

// This Function is for testing the this* keyword and how the testThis function works as a method to adventure object.
function testThis () {
  console.log(`This is ${this.name}, and my health is ${this.health}. I have ${this.inventory} and my companion is ${this.companion.name}` ); 
  console.log(`The object is ${this.inventory[1]}`); // This is for learning only.
}

//Setting testThis function to be the adventure object's method.
adventurer.testThis = testThis; // The testThis is the object method.
adventurer.testThis(); // calling the function as a method to the adventure object.







