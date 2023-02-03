import React from "react";

const CartModalItem = ({ name, id, numItmes }) => {
  return (
    <div className="flex justify-between p-8  mt-4 md:mt-0">
      <div>
        <h1>{name}</h1>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-5 text-white forn-[Poppins]  rounded bg-sky-600 text-sm font-medium">
          -
        </div>
        <div className="px-2 text-sm text-black font-medium">{numItmes}</div>
        <div className="w-10 h-5 text-white forn-[Poppins]  rounded bg-sky-600 text-sm font-medium">
          +
        </div>
      </div>
    </div>
  );
};

export default CartModalItem;
