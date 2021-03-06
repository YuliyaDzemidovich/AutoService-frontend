import React from 'react';
import { Container } from '../Container';

const ButtonContainer = ({text, type}) => {
  const triggerText = text;
  const triggerType = type;
  const onSubmit = (event) => {
    event.preventDefault(event);
    // console.log(event.target.name.value);
    // console.log(event.target.email.value);
  };
  return (
    <span className="ButtonContainer">
      <Container triggerText={triggerText} onSubmit={onSubmit} type={triggerType} />
    </span>
    );
 };
 export default ButtonContainer;
