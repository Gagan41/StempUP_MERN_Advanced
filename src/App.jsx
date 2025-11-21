import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// JWT topics
import Home from "./JWT/Home";
import Login from "./JWT/Login";
import Dashboard from "./JWT/Dashboard";
import ProtectedRoute from "./JWT/ProtectedRoute";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
