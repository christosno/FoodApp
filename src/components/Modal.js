import React from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ onCloseModal }) => {
  return (
    <div
      onClick={onCloseModal}
      className="fixed top-0 left-0 w-full h-screen z-20 bg-gray-900 opacity-7"
    ></div>
  );
};

const ModalOverlay = ({ children }) => {
  return (
    <div className="fixed top-24 w-full bg-white p-4 rounded shadow-xl z-30 md:w-10/12 md:inset-x-0 md:mx-auto">
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children, onCloseModal }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={onCloseModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
