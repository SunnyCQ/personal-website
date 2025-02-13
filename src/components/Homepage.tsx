import "../css_files/Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="homepage-bg">
        <h2 className="homepage-desc">
          Hey, Sunny Qi here. I'm an aspiring programmer currently studying at
          Columbia University. When I'm not grinding psets or coding projects,
          I'm usually working on{" "}
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
      </div>
    </>
  );
};

export default Homepage;
