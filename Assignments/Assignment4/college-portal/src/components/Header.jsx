import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active fw-bold" : "nav-link";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm">
      <div className="container">
        
        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src="/assets/logo.png" 
            alt="College Logo" 
            style={{ width: "40px", marginRight: "10px" }}
          />
          Global Academy
        </NavLink>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon" />
        </button>

        <div id="menu" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink to="/" end className={linkClass}>Home</NavLink></li>
            <li className="nav-item"><NavLink to="/about" className={linkClass}>About</NavLink></li>
            <li className="nav-item"><NavLink to="/departments" className={linkClass}>Departments</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Header;
