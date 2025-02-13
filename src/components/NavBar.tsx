import React from "react";
import { Link } from "react-router-dom";
import "../css_files/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark">
        <div className="container-fluid d-flex align-items-center">
          <Link className="navbar-logo" to="/">
            SunnyCQ
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-0 mb-lg-0">
              <li className="nav-item">
                <Link className="custom-nav-link active" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="custom-nav-link active" to="/Projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="custom-nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Misc.
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/JapaneseLearning">
                      Japanese Learning
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Piano">
                      Piano
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Gaming">
                      Gaming
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="custom-nav-link active custom-nav-link-right"
                  aria-current="page"
                  to="/Contact"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

/*<nav className="navbar  navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <ul className="nav d-flex justify-content-between">
            <li className="nav-item">
              <a className="nav-link navbar-brand active" href="#">
                NotePro
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                LogIn
              </a>
            </li>
          </ul>
        </div>
      </nav>


<a className="navbar-logo" href="#">
            SCQ
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="custom-nav-link" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="custom-nav-link" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="custom-nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Misc.
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Piano
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Gaming
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Japanese Learning
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <li className="custom-nav-item-right">
                <a className="custom-nav-link" href="#">
                  Contact
                </a>
              </li>
            </form>
          </div> */
