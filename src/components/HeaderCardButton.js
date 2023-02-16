import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const HeaderCardButton = ({ onOpenModal, numItems }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const buttonId = btnIsHighlighted ? "cart-button" : "";

  useEffect(() => {
    if (numItems === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [numItems]);

  return (
    <button
      // id={buttonId}
      onClick={onOpenModal}
      className="fixed left-1/2 transform -translate-x-1/2 bottom-6 md:static md:translate-x-0 cursor-pointer font-bold border border-white bg-slate-900 text-white py-2 px-6 rounded hover:bg-slate-800 active:bg-slate-800 duration-500"
    >
      <span className="w-5 h-5 mr-2">
        <FontAwesomeIcon icon={faShoppingCart} />
      </span>
      <span className="text-white text-lg font-[Poppins]">Cart</span>
      <span className="badge ml-2 bg-slate-700 text-white font-[Poppins] rounded py-1 px-2 font-bold">
        {numItems}
      </span>
    </button>
  );
};

export default HeaderCardButton;
