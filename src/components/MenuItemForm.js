import React from "react";

const MenuItemForm = (props) => {
  return (
    <form className="text-center ml-8">
      <div className="flex alighn items-center mb-2">
        <label
          className="font-semibold font-[Poppins] mr-4 text-gray-600"
          htmlFor="amount"
        >
          Amount
        </label>
        <input
          className="w-12 rounded bg-slate-200 border-slate-600 pl-2 text-black"
          id="amount"
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>
      <button className="bg-slate-900 border-slate-900 text-white font-[Poppins] rounded py-1 px-8 font-bold cursor-pointer hover:bg-slate-800 active:bg-slate-800 duration-500">
        Add
      </button>
    </form>
  );
};

export default MenuItemForm;
