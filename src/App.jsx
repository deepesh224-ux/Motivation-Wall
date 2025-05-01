import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MotivationWall from "./components/MotivationWall.jsx";  // Importing components
import QuoteGenerator from "./components/QuoteGenerator.jsx";  // Importing components
import JournalEntry from "./components/JournalEntry";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="nav-bar">
        {/* Link to main Motivation Wall */}
        <Link to="/" className="nav-button">Motivation Wall</Link>

        {/* Link to Quote Generator */}
        <Link to="/quote" className="nav-button">Motivational Quote</Link>

        <Link to="/journal" className="nav-button">Journal</Link>
      </div>

      <Routes>
        {/* This will render the MotivationWall component when the user visits the root path */}
        <Route path="/" element={<MotivationWall />} />

        {/* This will render the QuoteGenerator component when the user visits the /quote path */}
        <Route path="/quote" element={<QuoteGenerator />} />

        <Route path="/journal" element={<JournalEntry />} />
      </Routes>
    </Router>
  );
}

export default App;
