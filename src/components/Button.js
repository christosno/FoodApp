import React from "react";

const Button = (props) => {
  return (
    <button className="bg-sky-700 text-white forn-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-sky-600 duration-500">
      {props.children}
    </button>
  );
};

export default Button;
