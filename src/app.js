
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


// class Oldsyntax {
//   constructor() {
//     this.name = 'Mike';
//     this.getGreeting = this.getGreeting.bind(this);
//   }

//   getGreeting() {
//     return `Hi. my name is ${this.name}.`;
//   }
// }

// const oldSyntax = new Oldsyntax();
// console.log(oldSyntax);
// console.log(oldSyntax.getGreeting());

// // new syntax

// class NewSyntax {
//   name = 'Jen';

//   getGreeting = () => {
//     return `Hi. my name is ${this.name}.`;
//   }
// }

// const newSyntax = new NewSyntax();
// console.log(newSyntax);
// console.log(newSyntax.getGreeting());


// Grab the add function from the add.js file in the utils folder
// Grab React from the react npm module
// add(2,4)

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };