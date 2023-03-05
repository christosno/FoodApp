import React from "react";

const Button = ({
  margin,
  bgColor,
  bgHoverColor,
  clickHandler,
  children,
  type = null,
}) => {
  return (
    <button
      type={type}
      onClick={clickHandler}
      className={`${bgColor} text-white forn-[Poppins] py-2 px-6 rounded lg:${margin} hover:${bgHoverColor} duration-500`}
    >
      {children}
    </button>
  );
};

export default Button;
