import React, { useContext } from "react";
import { CartContexrt } from "../store/cart";
import CartModalItem from "./CartModalItem";
import Modal from "./Modal";

const CartModal = ({ onCloseModal }) => {
  console.log("CartModal Component");
  const { order } = useContext(CartContexrt);
  return (
    <Modal onCloseModal={onCloseModal}>
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
        onClick={onCloseModal}
        className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Close
      </button>
    </Modal>
  );
};

export default CartModal;
