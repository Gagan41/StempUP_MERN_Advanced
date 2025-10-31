import React from "react";

function Table() {
  const tablestyle = {
    padding: "10px",
    margin: "10px",
    backgroundColor: "lightgreen",
  };

  const headingstyle = {
    border: "3px solid white",
    padding: "10px",
    color: "black",
  };

  return (
    <div>
      <tr style={tablestyle}>
        <td style={headingstyle}>hi</td>
        <td style={headingstyle}>how are you</td>
      </tr>
      <tr style={tablestyle}>
        <td style={headingstyle}>hello</td>
        <td style={headingstyle}>i am fine</td>
      </tr>
    </div>
  );
}

export default Table;
