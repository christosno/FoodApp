import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { CartContexrt } from "../store/cart";
import CartModalItem from "./CartModalItem";

const CartModal = ({ isOpen, onClose }) => {
  const { order } = useContext(CartContexrt);
  console.log(order.length);
  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="modal container mx-auto my-16 p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl font-medium">Cart Information</h1>
        <div>
          {!(order.length === 0) ? (
            order.map((item) => {
              return <CartModalItem {...item} />;
            })
          ) : (
            <p className="mt-4">Your cart is empty</p>
          )}
        </div>
        <button
          className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => onClose()}
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default CartModal;
