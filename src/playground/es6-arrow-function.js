// const square = function (x) {
//     return x * x;
// };

// The same as writing
// function square(x) {
//     return x * x;
// }

// console.log(square(8));

// The function here are anonymous, you can't name it.
// no vars in the function
// const squareArrow = () =>{}


// const squareArrow = (x) => {
//     return x * x;
// };

// when we return simple value like this.
// const squareArrow = (x) => x * x;

// console.log(squareArrow(9));
const fullname = 'itamar cohen';
// const getFirstName = (fullname) => {
//     return fullname.split(' ')[0];
// }
const getFirstName = (fullname) => fullname.split(' ')[0];

console.log(getFirstName(fullname));
