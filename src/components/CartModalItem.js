import React from "react";

const CartModalItem = ({ name, amount, price, onRemove, onAdd }) => {
  console.log("CartModalItem Component");
  console.log(price);
  const fixedPrice = `$${price.toFixed(2)}`;
  return (
    <li className="flex justify-between items-center border-solid border-2 border-slate-500 rounded p-4 my-4 mx-0">
      <h2 className="mb-2 text-slate-800 w-40">{name}</h2>
      <div className="flex w-40 justify-between items-center">
        <span className="text-slate-800 w-20">{fixedPrice}</span>
        <span className="text-2xl text-white bg-slate-800 border-solid border-2 border-slate-500 rounded p-2">
          x {amount}
        </span>
      </div>
      <div className="flex flex-col md:flex-row">
        <button
          onClick={onRemove}
          className="text-white bg-slate-800 text-2xl border-solid border-2 border-slate-500 rounded w-12 text-center  cursor-pointer m-1 ml-4 hover:bg-slate-700  active:bg-slate-500 "
        >
          -
        </button>
        <button
          onClick={onAdd}
          className="text-white bg-slate-800 text-2xl border-solid border-2 border-slate-500 rounded w-12 text-center cursor-pointer m-1 ml-4 hover:bg-slate-700  active:bg-slate-500 "
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartModalItem;
