import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Login Route
app.post("/login", (req, res) => {
  const { email, password } = req.body;


  if (email === "test@gmail.com" && password === "123") {
    return res.status(200).json({
      token: "abc123jdsj",
      message: "Login successful"
    });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
