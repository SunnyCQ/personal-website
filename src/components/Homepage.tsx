import { useEffect, useState } from "react";
import "../css_files/Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useLocation } from "react-router-dom";
import Skills from "./sub_page/Skills";
import Experiences from "./sub_page/Experiences";

import { all_skills } from "../data/skillsData";

const Homepage = () => {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  //Handles the sun moving up and down
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Handles smooth scrolling when navigating to about page
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <div className="wholepage">
        <div className="homepage-banner">
          <img
            className="sun-image"
            src="/assets/sun.png"
            alt="Sun"
            style={{ transform: `translate(-50%, ${scrollY * 0.5}px)` }} // Moves sun dynamically
          />
        </div>
        <div className="homepage-bg">
          <h1 className="homepage-header">THIS IS SUNNY QI</h1>
        </div>
        <section id="about">
          <div className="homepage-desc">
            <h1>About Me</h1>
            <h2>
              I'm an aspiring programmer currently studying computer engineering
              at Columbia University. When I'm not grinding psets or coding
              projects in a library, I'm usually working on{" "}
              <Link className="links" to="/JapaneseLearning">
                learning Japanese
              </Link>
              ,{" "}
              <Link className="links" to="/Piano">
                piano practice
              </Link>
              , or just plain{" "}
              <Link className="links" to="/Gaming">
                gaming
              </Link>{" "}
              :&#41;
            </h2>
          </div>
        </section>
        <section id="experience">
          <div className="homepage-desc">
            <h1>Experiences</h1>
          </div>
          <Experiences />
        </section>
        <section id="skills">
          <div className="homepage-desc">
            <h1>Skills</h1>
            <Skills skills={all_skills} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;
