import React from 'react';
import { Container } from '../Container';

const ButtonContainer = ({text, type, className, obj, parentCallbackUpdateTable}) => {
  const triggerText = text;
  const triggerType = type;
  return (
    <span className="ButtonContainer">
      <Container triggerText={triggerText} type={triggerType} className={className} obj={obj} parentCallbackUpdateTable={parentCallbackUpdateTable}/>
    </span>
    );
 };
 export default ButtonContainer;
