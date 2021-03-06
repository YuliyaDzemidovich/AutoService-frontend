import React from 'react';
const Trigger = ({ triggerText, buttonRef, showModal, onClick }) => {
  return (
    <button
      className={`modal-button ${triggerText}`}
      ref={buttonRef}
      onClick={showModal, onClick}
    >
      {triggerText}
    </button>
  );
};
export default Trigger;
