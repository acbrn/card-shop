import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [dropdown, setDropdown] = useState({
    cards: false,
    toys: false,
    contact: false,
    info: false,
  });

  const toggleDropdown = (menu) => {
    setDropdown((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" exact="true" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <div className="dropdown">
            <span onClick={() => toggleDropdown("cards")}>
              Cards <FaCaretDown />
            </span>
            {dropdown.cards && (
              <ul className="dropdown-menu">
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
            )}
          </div>
        </li>
        <li>
          <div className="dropdown">
            <span onClick={() => toggleDropdown("toys")}>
              Toys/Collectibles <FaCaretDown />
            </span>
            {dropdown.toys && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/funko" activeClassName="active">
                    Funko Pops
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/action-figures" activeClassName="active">
                    Action Figures
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <div className="dropdown">
            <span onClick={() => toggleDropdown("contact")}>
              Contact Us <FaCaretDown />
            </span>
            {dropdown.contact && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/contact-form" activeClassName="active">
                    Contact Form
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/support" activeClassName="active">
                    Support
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <div className="dropdown">
            <span onClick={() => toggleDropdown("info")}>
              More Information <FaCaretDown />
            </span>
            {dropdown.info && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/about" activeClassName="active">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/faq" activeClassName="active">
                    FAQ
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
