import React from 'react';
import style from './Button.module.css';
const Button = ({ label,children, variant = "secondary", onClick, type = 'button', disabled = false}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${style.button} ${style[variant]}`}
      
    >
      {label || children}
    </button>
  );
};

export default Button;
