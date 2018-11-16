class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, I am ${this.name}`;
  }

  getDescription() {
    return `Hi, my name is ${this.name} and I'm ${this.age} years old!`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description = description += ` and my major is is ${this.major}`; 
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }

  hasLocation() {
    return !!this.location;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.hasLocation()) {
      greeting = greeting += `. I'm visiting from ${this.location}.`
    }

    return greeting;
  }
}


const me = new Traveler(undefined, undefined, 'Nowhere');

console.log(me);
console.log(me.getGreeting());

// const other = new Student('savy', 6, 'Computer science');
const other = new Traveler('savy', 6, 'Givataim');
console.log(other);
console.log(other.getGreeting());
// console.log(other.hasMajor());