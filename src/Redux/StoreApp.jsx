import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./CounterSlice";

function StoreApp() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          margin: "20px",
          padding: "10px",
          background: "lightblue",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ color: "black" }}>Store using Redux</h2>
        <h2 style={{ color: "black" }}>Count : {count}</h2>
        <button
          style={{
            background: "#2bff24ff",
            border: "none",
            padding: "10px",
            borderRadius: "6px",
            cursor: "pointer",
            margin: "10px",
            color: "black",
          }}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          style={{
            background: "#ff8b68ff",
            border: "none",
            padding: "10px",
            borderRadius: "6px",
            cursor: "pointer",
            margin: "10px",
            color: "black",
          }}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          style={{
            background: "#6c44f0ff",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            margin: "10px",
            color: "black",
          }}
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default StoreApp;
