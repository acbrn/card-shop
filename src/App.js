// src/App.js
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MLB, NFL, MTG, Yugioh, Pokemon } from "./Pages";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import MainContent from "./Main/MainContent";
import ThemeProvider, { ThemeContext } from "./Theme/ThemeContent";
import "./index.css";
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="theme-toggle-container">
      <input
        type="checkbox"
        className="theme-toggle-checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <span className="theme-toggle-slider">Light Dark</span>
    </label>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Header />
          <ThemeToggle />
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/mlb" element={<MLB />} />
              <Route path="/nfl" element={<NFL />} />
              <Route path="/pokemon" element={<Pokemon />} />
              <Route path="/mtg" element={<MTG />} />
              <Route path="/yugioh" element={<Yugioh />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
