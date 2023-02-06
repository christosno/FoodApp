import { useState, createContext } from "react";

export const CartContexrt = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const addItemCartHandler = () => {};
const removeItemCartHandler = () => {};

const CartContextProvider = ({ children }) => {
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  };

  return (
    <CartContexrt.Provider value={cartContext}>
      {children}
    </CartContexrt.Provider>
  );
};

export default CartContextProvider;
