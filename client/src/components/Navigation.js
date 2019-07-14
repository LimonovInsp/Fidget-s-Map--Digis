import React, { Component } from "react";
import "../less/Navigation.less";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      /* Navigation */
      <nav className="navbar navbar-expand-md navbar-dark link bg-dark sticky-top">
        <div className="container-fluid">
          <span className="navbar-brand">FIDGET'S MAP</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sign-in">
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-md btn-block"
                  >
                    Sign in
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sign-up">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
