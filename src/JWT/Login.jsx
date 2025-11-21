import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/login", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
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

        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "2px solid #ccc",
          }}
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "2px solid #ccc",
          }}
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "2px solid #ccc",
          }}
          value={form.password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
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

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      </form>
    </>
  );
}

export default Login;
