import React from 'react';
import styles from './Button';

const Button = (props) => {
  return (
    <button
      className="button"
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
