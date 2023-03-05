import React, { useContext } from "react";
import { CartContexrt } from "../../store/cart";
import { UserLoginContext } from "../../store/user-auth";
import CartModalItem from "./CartModalItem";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const CartModal = ({ onCloseModal }) => {
  const cartCtx = useContext(CartContexrt);
  const { user } = useContext(UserLoginContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    const addOneItem = { ...item, amount: 1 };
    cartCtx.addItem(addOneItem);
  };

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
        {!user && (
          <div className="m-2 flex justify-end">
            <Link to="/auth?mode=login">
              <p
                onClick={onCloseModal}
                className="text-red-500 mr-3 cursor-pointer"
              >
                Log in
              </p>
            </Link>
            <p className=" text-slate-400">to procced with the order</p>
          </div>
        )}
        <button
          onClick={onCloseModal}
          className="cursor-pointer bg-transparent border-solid border-2 border-red-900 rounded ml-4 py-2 px-8 bg-red-800 text-white hover:bg-red-900  active:bg-red-900 "
        >
          Close
        </button>

        <button
          disabled={user && hasItems}
          className="cursor-pointer bg-transparent border-solid border-2 border-slate-500 rounded ml-4 py-2 px-8 hover:bg-slate-500 hover:text-white active:bg-slate-500 active:text-white"
        >
          Order
        </button>
      </div>
    </Modal>
  );
};

export default CartModal;
