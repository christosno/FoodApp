import React, { useState, useContext } from "react";
import { IMG_URL_MENU_ITEM } from "../../constants";
import Button from "../UI/Button";
import { CartContexrt } from "../../store/cart";
import MenuItemForm from "./MenuItemForm";

// id, name, price, cloudinaryImageId, description

const MenuItem = ({ item }) => {
  const { addItem, removeItem } = useContext(CartContexrt);

  const onAddToCartHandler = (amount) => {
    const newItem = { ...item, amount: amount };

    addItem(newItem);
  };

  return (
    <div className="flex md:flex-row justify-between m-2 p-2 rounded items-center bg-white">
      <div className="md:w-3/4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 md:mr-4 ">
          <img
            className="w-32 h-32 object-cover rounded mx-auto"
            src={IMG_URL_MENU_ITEM + item.cloudinaryImageId}
            alt={item.name}
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-lg text-gray-600 font-semibold">{item.name}</h1>
          <p className="text-sm text-gray-600 p-4">{item.description}</p>
          <p className="inline-block text-sm rounded bg-slate-200 text-gray-600 font-semibold p-2">{`${item.price}$`}</p>
        </div>
      </div>
      <MenuItemForm onAddToCartHandler={onAddToCartHandler} />
    </div>
  );
};

export default MenuItem;
