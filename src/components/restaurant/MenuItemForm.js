import React, { useRef, useState } from "react";

const MenuItemForm = ({ onAddToCartHandler }) => {
  const [errorNum, setErrorNum] = useState(false);
  const numItmes = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setErrorNum(false);
    const currentNumItems = +numItmes.current.value;

    if (!numItmes.current.value.trim() || currentNumItems < 1) {
      setErrorNum(true);
      return;
    }

    onAddToCartHandler(currentNumItems);
  };

  return (
    <form onSubmit={onSubmitHandler} className="text-center ml-8">
      <div>
        {errorNum && (
          <p className="text-red-700">Please chouse a valid amount</p>
        )}
      </div>
      <div className="flex alighn items-center mb-2">
        <label
          className="font-semibold font-[Poppins] mr-4 text-gray-600"
          htmlFor="amount"
        >
          Amount
        </label>
        <input
          ref={numItmes}
          className="w-12 rounded bg-slate-200 border-slate-600 pl-2 text-black"
          id="amount"
          type="number"
          defaultValue="1"
        />
      </div>
      <button
        type="submit"
        className="bg-slate-900 border-slate-900 text-white font-[Poppins] rounded py-1 px-8 font-bold cursor-pointer hover:bg-slate-800 active:bg-slate-800 duration-500"
      >
        Add
      </button>
    </form>
  );
};

export default MenuItemForm;
