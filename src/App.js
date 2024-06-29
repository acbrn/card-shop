import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MLB, NFL, MTG, Yugioh, Pokemon } from "./Pages/Cards";
import { Funko, Action, Misc } from "./Pages/Collectiable";
import { About, FAQ, Support, Contact } from "./Pages/Contact";
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
              <Route path="/funko" element={<Funko />} />
              <Route path="/action-figures" element={<Action />} />
              <Route path="/misc" element={<Misc />} />
              <Route path="/contact-form" element={<Contact />} />
              <Route path="/support" element={<Support />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
