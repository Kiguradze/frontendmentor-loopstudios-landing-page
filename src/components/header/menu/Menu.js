import "./menu.css";

import React from "react";

const Menu = ({ active, onclick }) => {
  return (
    <div
      className={active ? "menu-container active" : "menu-container"}
      onClick={onclick}>
      <div className="menu-container-header">
        <div className="nav-logo">
          <h1>loopstudios</h1>
        </div>
        <div className="hamburger-menu" onClick={onclick}>
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
              fill="#FFF"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <ul className="menu-list">
        <li className="menu-item">
          <a href="#">About</a>
        </li>
        <li className="menu-item">
          <a href="#">Careers</a>
        </li>
        <li className="menu-item">
          <a href="#">Events</a>
        </li>
        <li className="menu-item">
          <a href="#">Products</a>
        </li>
        <li className="menu-item">
          <a href="#">Support</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
