import React, { useEffect, useState } from "react";
import axios from "axios";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 5);
  };

  if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>Todo List</h1>

      {todos.slice(0, limit).map((todo) => (
        <div
          key={todo.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            margin: "10px 0",
            backgroundColor: todo.completed ? "#d4edda" : "#f8d7da",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            textAlign: "center",
            color: "black",
          }}
        >
          <h4 style={{ margin: "0 0 8px" }}>{todo.title}</h4>
          <p style={{ margin: 0 }}>
            Status:{" "}
            <strong style={{ color: todo.completed ? "green" : "red" }}>
              {todo.completed ? "Completed" : "Pending"}
            </strong>
          </p>
        </div>
      ))}

      {limit < todos.length && (
        <button
          style={{
            background: "#0585eeff",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "10px",
          }}
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Todo;
