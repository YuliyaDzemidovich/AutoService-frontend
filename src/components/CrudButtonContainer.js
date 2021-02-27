import React from 'react';
import { Container } from './Container';

const CrudButtonContainer = () => {
const triggerText = 'Open Form';
const onSubmit = (event) => {
   event.preventDefault(event);
   console.log(event.target.name.value);
   console.log(event.target.email.value);
 };
return (
  <div className="CrudButtonContainer">
    <Container triggerText={triggerText} onSubmit={onSubmit} />  
  </div>
  );
 };
 export default CrudButtonContainer;
