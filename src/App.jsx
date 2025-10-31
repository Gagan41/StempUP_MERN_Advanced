import "./App.css";
import { useState } from "react";
import Table from "./Fragments/Table";
import Modal from "./Fragments/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const tablestyle = {
    border: "5px solid white",
    padding: "10px",
    margin: "10px",
    backgroundColor: "lightblue",
  };

  return (
    <div className="App">
      <table style={tablestyle}>
        <tbody>
          <Table />
        </tbody>
      </table>

      <h2>Main App component</h2>
      <button
        style={{
          background: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setShowModal(true)}
      >
        Show Modal
      </button>

      {showModal && (
        <Modal>
          <h3>This is modal content rendered through a portal</h3>
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </Modal>
      )}
    </div>
  );
}

export default App;
