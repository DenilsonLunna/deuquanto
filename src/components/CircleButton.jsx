import React from 'react';
import style from './CircleButton.module.css';
const CircleButton = ({ label,children, onClick, type = 'button', disabled = false}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${style.circleButton}`}
    >
      {label || children}
    </button>
  );
};

export default CircleButton;