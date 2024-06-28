// src/components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" exact="true" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/mlb" activeClassName="active">
            MLB
          </NavLink>
        </li>
        <li>
          <NavLink to="/nfl" activeClassName="active">
            NFL
          </NavLink>
        </li>
        <li>
          <NavLink to="/pokemon" activeClassName="active">
            Pokemon
          </NavLink>
        </li>
        <li>
          <NavLink to="/mtg" activeClassName="active">
            Magic The Gathering
          </NavLink>
        </li>
        <li>
          <NavLink to="/yugioh" activeClassName="active">
            Yu-Gi-Oh
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
