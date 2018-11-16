// arguments object - no longer bound with arrow functions
const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}

console.log(add(55, 1));

// this keybord - no longer bound

const user = {
  name: 'savyon',
  cities: ['Jerusalem', 'Tel aviv', 'Giva`taim'],
  // printPlaceLived: function () {
  //   console.log(this.name);
  //   console.log(this.cities);
  //   const that = this;
  //   that.cities.forEach(function (city) {
  //     console.log(that.name + ' has lived in ' + city);
  //   });
  // }
  // printPlaceLived: function () {
  //   this.cities.forEach( (city) => {
  //     console.log(this.name + ' has lived in ' + city);
  //   });
  // }
  // printPlaceLived: function () {
  //   this.cities.forEach( (city) => {
  //     console.log(this.name + ' has lived in ' + city);
  //   });
  // }
  printPlaceLived() {
    return this.cities.map((city) => this.name  + ' has lived is ' + city + '!!!');
  }
};

console.log(user.printPlaceLived());

//   // numbers - array of numbers;
//   const numbers = [
//     1,
//     5,
//     8,
//     10
//   ];

// const singleNumber = 5;
// const multiply = (numbers, multiplyBy) => {
//   return numbers.map((numbers) => numbers * multiplyBy); 
// };
// console.log(multiply(numbers, singleNumber));
const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((numbers) => numbers * this.multiplyBy);
  }
}

console.log(multiplier.multiply());
