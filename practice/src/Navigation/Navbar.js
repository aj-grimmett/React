import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <img
        id="logo"
        className="navbar-brand"
        src={require("../assets/images/Vivtruian-Man.-Logo-1024x1024.png")}
        alt="logo"
      />
      <div className="heading">
        <ul>
          <li id="top">AJ Grimmett</li>
          <li id="btm">Web Designer & Developer </li>
        </ul>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="nav  nav-pills">
            <li className="nav-item active">
              <NavLink className="nav-link" href="../pages/home.js">
                Home <span className="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="../pages/projects.js">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="../pages/contact.js">
                Contact
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
