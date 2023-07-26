import React from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Designer from "./components/Designer";
import Developer from "./components/Developer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/about";
import Graphic from "./components/graphic";
import ELibrary from "./pages/ELibrary";
import Kampung from "./pages/KampungPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/developer" element={<Developer />} />
        <Route path="/designer" element={<Designer />} />
        <Route path="/about" element={<About />} />
        <Route path="/kampung" element={<Kampung />} />
        <Route path="/elibrary" element={<ELibrary />} />
        <Route path="/graphic" element={<Graphic />} />
        <Route path="/" element={<Navigate to="/developer" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
