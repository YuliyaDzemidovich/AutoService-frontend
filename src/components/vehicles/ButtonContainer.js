import React from 'react';
import { Container } from '../Container';

const ButtonContainer = ({text, type, className, obj}) => {
  const triggerText = text;
  const triggerType = type;
  const onSubmit = (event) => {
    event.preventDefault(event);
    // console.log(event.target.name.value);
    // console.log(event.target.email.value);
  };
  return (
    <span className="ButtonContainer">
      <Container triggerText={triggerText} onSubmit={onSubmit} type={triggerType} className={className} obj={obj}/>
    </span>
    );
 };
 export default ButtonContainer;
