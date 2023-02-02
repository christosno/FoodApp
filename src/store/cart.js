import { useState, createContext } from "react";

export const CartContexrt = createContext({
  id: {
    order: {},
    setOrder: () => {},
  },
});

const CartContextProvider = ({ children }) => {
  const [order, setOrder] = useState({});

  return (
    <CartContexrt.Provider value={{ order, setOrder }}>
      {children}
    </CartContexrt.Provider>
  );
};

export default CartContextProvider;
