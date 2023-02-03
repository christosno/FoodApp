import React, { useState, useContext } from "react";
import { IMG_URL_MENU_ITEM } from "../constants";
import Button from "./Button";
import { CartContexrt } from "../store/cart";

const MenuItem = ({ id, name, price, cloudinaryImageId, description }) => {
  const [numItmes, setNumItmes] = useState(0);
  const { order, setOrder } = useContext(CartContexrt);

  const orderHandler = () => {
    console.log(order);
    if (numItmes > 0) {
      setOrder([
        ...order,
        {
          id,
          name,
          numItmes,
        },
      ]);
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-6 rounded border cursor-pointer bg-white text-black">
      <div className="w-full md:w-1/3 md:mr-6">
        <img
          className="w-32 h-32 object-cover rounded mx-auto mt-4"
          src={IMG_URL_MENU_ITEM + cloudinaryImageId}
          alt={name}
        />
      </div>
      <div className="w-full md:w-2/3">
        <h1 className="text-lg font-medium">{name}</h1>
        <p className="text-sm text-gray-600 p-4">{description}</p>
        <p className="text-sm font-semibold p-2">{`${price}$`}</p>
      </div>
      <div className="flex justify-end p-8  mt-4 md:mt-0">
        <div className="flex items-center">
          <div
            onClick={() => {
              if (numItmes > 0) {
                setNumItmes(numItmes - 1);
              }
            }}
            className="w-10 h-5 text-white forn-[Poppins]  rounded bg-sky-600 text-sm font-medium"
          >
            -
          </div>
          <div className="px-2 text-sm font-medium">{numItmes}</div>
          <div
            onClick={() => {
              setNumItmes(numItmes + 1);
            }}
            className="w-10 h-5 text-white forn-[Poppins]  rounded bg-sky-600 text-sm font-medium"
          >
            +
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button
            bgColor="bg-sky-700"
            bgHoverColor="bg-sky-600"
            margin="ml-8 mr-2"
            clickHandler={orderHandler}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
