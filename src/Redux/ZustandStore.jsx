import useZustandStore from "./UseZustandStore";

function ZustandStore() {
  const [count, increase, decrease, reset] = useZustandStore();

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
        <h2>{count}</h2>
        <button
          onClick={increase}
          style={{
            background: "#2bff24ff",
            border: "none",
            padding: "10px",
            borderRadius: "6px",
            cursor: "pointer",
            margin: "10px",
            color: "black",
          }}
        >
          +
        </button>
        <button
          onClick={decrease}
          style={{
            background: "#ff8b68ff",
            border: "none",
            padding: "10px",
            borderRadius: "6px",
            cursor: "pointer",
            margin: "10px",
            color: "black",
          }}
        >
          -
        </button>
        <button
          onClick={reset}
          style={{
            background: "#6c44f0ff",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            margin: "10px",
            color: "black",
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default ZustandStore;
