import React from "react";
import { createPortal } from "react-dom";

function Modal1({ children }) {
  return createPortal(
    <>
      <div
        style={{
          backgroundColor: "#984ae7ff",
          padding: "50px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: 1001,
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#013e4dff",
          padding: "50px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: 1001,
        }}
      >
        {children}
      </div>
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal1;
