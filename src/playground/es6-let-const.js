var nameVar = 'Savyon';
var nameVar = 'itamar';
// console.log('nameVar', nameVar);

let nameLet = 'savyon let';
// let nameLet = 'itamar let';
// console.log('nameLet', nameLet);

const nameconst = 'Savyon const';
// const nameconst = 'itamar const';
// console.log('nameconst', nameconst);

// Block scoping

const fullName = 'savyon cohen';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);