import React from 'react';
import musicClass from './Music.module.css';

const Music = (props) => {
//   debugger; 
  return <div className={musicClass.time}>Сейчас {props.date.toLocaleTimeString()}</div>;
};

export default Music;
