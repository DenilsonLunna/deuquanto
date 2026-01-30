import React from 'react';
import style from './Button.module.css';
const Button = ({ label,children, onClick, type = 'button', disabled = false}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${style.button}`}
    >
      {label || children}
    </button>
  );
};

export default Button;
