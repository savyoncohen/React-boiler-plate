import React from 'react';
const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. {props.optionText} </p>
      <button className="button button--link"
        onClick={() => {
          // We nutrilize the event handle e when calling the function directly,
          //instead return the option.
          props.handleDeleteOption(props.optionText)
        }}>
        Remove
         </button>
    </div>
);
export default Option;