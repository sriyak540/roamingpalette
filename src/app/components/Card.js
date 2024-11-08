import React from 'react';
import styles from './Card';

const Card = (props) => {
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>;

};

export default Card;
