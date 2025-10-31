import React from "react";
import ReactDOM from "react-dom";

function Modal({ children }) {
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1000,
  };

  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "lightgreen",
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    zIndex: 1001,
  };

  return ReactDOM.createPortal(
    <>
      <div style={overlayStyle}></div>
      <div style={modalStyle}>{children}</div>
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal;
