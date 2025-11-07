import React, { useState } from "react";
import { createPortal } from "react-dom";

function LoginPortal() {
  const [message, setMessage] = useState(false);

  const handleLogin = () => {
    setMessage(true);
    setTimeout(() => setMessage(false), 3000);
  };

  return (
    <>
      <form
        style={{
          width: "300px",
          margin: "100px auto",
          padding: "20px",
          border: "5px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Login Portal</h2>

        <label htmlFor="email" style={{ textAlign: "left" }}>
          Email :
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "2px solid #ccc",
          }}
        />

        <label htmlFor="pass" style={{ textAlign: "left" }}>
          Password :
        </label>
        <input
          type="password"
          id="pass"
          placeholder="Enter your password"
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "2px solid #ccc",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            background: "#0585eeff",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Submit
        </button>
      </form>

      {message &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                background: "lightblue",
                padding: "20px",
                margin: "auto",
                boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <h2 style={{ color: "black" }}>Login Successful!</h2>
            </div>
          </div>,
          document.getElementById("portal-root")
        )}
    </>
  );
}

export default LoginPortal;
