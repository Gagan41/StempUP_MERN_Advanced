import "./App.css";
import Table from "./Fragments/Table";

function App() {
  const tablestyle = {
    border: "5px solid white",
    padding: "10px",
    margin: "10px",
    backgroundColor: "lightblue",
  };

  return (
    <div div className="App">
      <table style={tablestyle}>
        <tbody>
          <Table />
        </tbody>
      </table>
    </div>
  );
}

export default App;
