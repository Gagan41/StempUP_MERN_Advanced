import "./App.css";
//import { useState } from "react";

//Fragments Topics
import Table from "./Fragments/Table";
import Modal from "./Fragments/Modal";
import ProfileCard from "./Fragments/ProfileCrad";
import Fragment from "./Fragments/Fragment";
import Modal1 from "./Fragments/Modal1";
import Fetch from "./Fragments/Fetch";

//axios Topics
import Todo from "./Fragments/Todo";

//react-query
import Posts from "./Fragments/Post";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//task 06-11-25
import LoginPortal from "./Fragments/LoginPortal";

//task 07-11-25
import LoginImage from "./Fragments/LoginImage";

function App() {
  // const [showModal, setShowModal] = useState(false);
  // const [open, setOpen] = useState(false);

  // const tablestyle = {
  //   border: "5px solid white",
  //   padding: "10px",
  //   margin: "10px",
  //   backgroundColor: "lightblue",
  // };

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <>
        <div className="App">
          {/* <table style={tablestyle}>
          <tbody>
            <Table />
          </tbody>
        </table> */}
          {/* <Fragment /> */}

          {/* <h2>Main App component</h2>
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
        <br />
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
        <br />
        <button
          style={{
            background: "lightgreen",
            color: "Black",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setOpen(true)}
        >
          Open modal
        </button>
        {open && (
          <Modal1>
            <h1>This is a notification</h1>
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
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </Modal1>
        )} */}

          {/* <Todo /> */}
          <Posts />

          {/* Tasks */}
          {/* <LoginPortal /> */}
          {/* <Fetch /> */}
          {/* <LoginImage /> */}

          {/* Assignments */}
          {/* <ProfileCard /> */}
        </div>
      </>
    </QueryClientProvider>
  );
}

export default App;
