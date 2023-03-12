import "./nav.css";

import React from "react";

const Nav = ({ onclick }) => {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-logo">
          <h1>loopstudios</h1>
        </div>
        <div className="list-container">
          <div className="menu" onClick={onclick}>
            <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fill-rule="evenodd">
                <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
              </g>
            </svg>
          </div>
          <ul className="nav-list">
            <li className="list-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="list-item">
              <a className="nav-link" href="#">
                Careers
              </a>
            </li>
            <li className="list-item">
              <a className="nav-link" href="#">
                Events
              </a>
            </li>
            <li className="list-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="list-item">
              <a className="nav-link" href="#">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
