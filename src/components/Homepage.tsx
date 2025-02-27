import { useEffect, useState } from "react";
import "../css_files/Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <h2 className="homepage-desc">About Me</h2>
          <h2 className="homepage-desc">
            I'm an aspiring programmer currently studying at Columbia
            University. When I'm not grinding psets or coding projects in a
            library, I'm usually working on{" "}
            <Link className="links" to="/JapaneseLearning">
              language learning
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
        </section>
        <div className="additional-content"></div>
      </div>
    </>
  );
};

export default Homepage;
