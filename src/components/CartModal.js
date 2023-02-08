import React, { useContext } from "react";
import { CartContexrt } from "../store/cart";
import CartModalItem from "./CartModalItem";
import Modal from "./Modal";

const CartModal = ({ onCloseModal }) => {
  const cartCtx = useContext(CartContexrt);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {};

  return (
    <Modal onCloseModal={onCloseModal}>
      <ul className="list-none m-0 p-0 max-h-80 overflow-auto">
        {cartCtx.items.map((item) => {
          return (
            <CartModalItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={() => {
                cartItemRemoveHandler(item.id);
              }}
              onAdd={() => {
                cartItemAddHandler(item);
              }}
            />
          );
        })}
      </ul>

      <div className="flex justify-between items-center font-bold text-2xl my-4 mx-0">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="text-right">
        <button
          onClick={onCloseModal}
          className="cursor-pointer bg-transparent border-solid border-2 border-slate-500 rounded ml-4 py-2 px-8 hover:bg-slate-500 hover:text-white active:bg-slate-500 active:text-white"
        >
          Close
        </button>
        {hasItems && (
          <button className="cursor-pointer bg-transparent border-solid border-2 border-slate-500 rounded ml-4 py-2 px-8 hover:bg-slate-500 hover:text-white active:bg-slate-500 active:text-white">
            Order
          </button>
        )}
      </div>
      {/* <h1 className="text-2xl font-medium">Cart Information</h1>
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
      </button> */}
    </Modal>
  );
};

export default CartModal;
