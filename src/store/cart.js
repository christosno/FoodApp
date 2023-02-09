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
    console.log("IN ADD");
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

      console.log(updatedItem);

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
    console.log(removedItem);
    const updatedTotalAmount = state.totalAmount - removedItem.price;

    let updatedItem;
    let updatedItems;

    if (removedItem.amount > 1) {
      console.log("decrease the amount by one");
      updatedItem = { ...removedItem, amount: removedItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
      console.log(updatedItems);
    } else {
      console.log("remove complete the item");
      updatedItems = state.items.filter((item) => item.id !== action.id);
      // updatedItems = state.items
      //   .slice(0, itemIndex)
      //   .concat(state.items.slice(itemIndex + 1));

      console.log(updatedItems);
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
