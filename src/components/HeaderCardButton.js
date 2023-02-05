import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const HeaderCardButton = ({}) => {
  return (
    <button className="cursor-pointer font-bold border border-transparent bg-slate-900 text-white py-2 px-6 rounded hover:bg-slate-800 active:bg-slate-800 duration-500">
      <span className="w-5 h-5 mr-2">
        <FontAwesomeIcon icon={faShoppingCart} />
      </span>
      <span className="text-white text-lg font-[Poppins]">Your Cart</span>
      <span className="badge ml-2 bg-slate-700 text-white font-[Poppins] rounded py-1 px-2 font-bold">
        3
      </span>
    </button>
  );
};

export default HeaderCardButton;
