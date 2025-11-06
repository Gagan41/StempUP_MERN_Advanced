import React from "react";

function Fragment() {
  return (
    <>
      <div
        style={{
          backgroundColor: "lightblue",
          width: "100vh",
          height: "100%",
          color: "#333",
        }}
      >
        <h2>Gagan TP</h2>
        <p>Final year student</p>
      </div>
      <div
        style={{
          backgroundColor: "lightgreen",
          width: "100vh",
          height: "100%",
          color: "#333",
        }}
      >
        <h2>Testing</h2>
        <p>Fragments</p>
      </div>
      <React.Fragment>
        <div style={{backgroundColor: "lightyellow",
          width: "100vh",
          height: "100%",
          color: "#333",}}>
          <h2>Testing React.Fragments</h2>
          <p>It works</p>
        </div>
      </React.Fragment>
    </>
  );
}

export default Fragment;
