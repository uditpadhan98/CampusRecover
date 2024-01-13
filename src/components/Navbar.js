import React from "react";
import "../Styles/Navbar.css"
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className="site-header sticky">
        <div id="header-wrap" className="">
          <div className="container">
            <div className="row">
              <div className="col d-flex align-items-center justify-content-between">
                <a className="navbar-brand logo text-dark h2 mb-0" href="/">
                  Campus<span className="text-primary font-weight-bold">Recover.</span>
                </a>
                <nav className="navbar-expand-lg navbar-light ml-auto navbar">
                  <button
                    aria-label="Toggle navigation"
                    type="button"
                    className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className=" navbar-collapse collapse navbar-collapse">
                    <ul className="ml-auto navbar-nav">
                        <li className="nav-item">
                          <NavLink to="/" className="nav-link ">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/missing" className="nav-link ">Missing</NavLink>
                        </li> 
                        <li className="nav-item">
                        <NavLink to="/found" className="nav-link ">FoundIt</NavLink>
                        </li>   
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
