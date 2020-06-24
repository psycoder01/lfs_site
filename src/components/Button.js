import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size,clickFunction,override }) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        ${!override &&
        `bg-blue-600
        hover:bg-primary-darker
        rounded
        text-white
        hidden md:block
        `}
    `}
    style={{outline:0}}
      onClick={() => clickFunction()}
    >
      {children}
    </button>
  );
};

export default Button;
