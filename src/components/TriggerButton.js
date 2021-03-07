import React from 'react';
const Trigger = ({ triggerText, buttonRef, showModal, className }) => {
  return (
    <button
      className={`modal-button ${triggerText} ${className}`}
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </button>
  );
};
export default Trigger;
