import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./AdminPages/AdminLogin.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
