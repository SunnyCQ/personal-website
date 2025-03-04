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
            <ul className="navbar-left navbar-nav me-auto mb-0 mb-lg-0">
              <li className="nav-item">
                <Link className="custom-nav-link active" to="/#about">
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
                  More
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
                    <Link className="dropdown-item" to="/Gaming">
                      Gaming
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <li className="nav-item d-flex align-items-center">
              <a
                href="/personal-website/assets/sunny_qi_resume_V36.pdf"
                target="_blank"
              >
                <img
                  src="/personal-website/assets/pdf_icon.svg"
                  alt="resume"
                  className="resume-icon"
                />
              </a>
            </li>
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
