import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-gradient">
        <div className="nav-content">
          <h1 className="nav-heading">Good morning</h1>
          <div className="icon-container">
            <i className="fas fa-camera nav-icon"></i>
            <i className="fas fa-cog nav-icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
