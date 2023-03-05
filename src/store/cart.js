import { faAudioDescription } from "@fortawesome/free-solid-svg-icons";
import { useReducer, createContext } from "react";

export const CartContexrt = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingItemIndex];

    let updatedItem;

    let updatedItems;

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = [...state.items, action.item];
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    const removedItem = state.items[itemIndex];
    const updatedTotalAmount = state.totalAmount - removedItem.price;

    let updatedItem;
    let updatedItems;

    if (removedItem.amount > 1) {
      updatedItem = { ...removedItem, amount: removedItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => item.id !== action.id);
      // updatedItems = state.items
      //   .slice(0, itemIndex)
      //   .concat(state.items.slice(itemIndex + 1));
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartContextProvider = ({ children }) => {
  const [cartState, dispachCartState] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemCartHandler = (item) => {
    dispachCartState({ type: "ADD", item: item });
  };
  const removeItemCartHandler = (id) => {
    dispachCartState({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
