import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Scroll from "../utils/Scroll.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router basename="/ProLegal/">
      <Scroll />
      <Routes>
        <Route path="/" element={<App mode="home" />} />
        <Route path="/profile" element={<App mode="profile" />} />
        <Route path="/login" element={<App mode="login" />} />
        <Route path="/service/*" element={<App mode="service" />} />
        <Route path="/pay" element={<App mode="pay" />} />
        <Route path="/admin" element={<App mode="admin" />} />
        <Route path="/adviser" element={<App mode="adviser" />} />
      </Routes>
    </Router>
  </StrictMode>
);
