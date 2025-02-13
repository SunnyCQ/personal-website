import "../css_files/Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="contacts">
        <div className="ContactDetails">
          <h1>Contact Details</h1>
          <h1>
            Email:{" "}
            <a href="mailto:sunnycarlinqi@gmail.com">
              sunnycarlinqi@gmail.com{" "}
            </a>
          </h1>
        </div>
        <div className="Socials">
          <h1>Socials: </h1>
          <Link className="socials-links" to="https://github.com/SunnyCQ">
            Github
          </Link>
          <br />
          <Link
            className="socials-links"
            to="https://www.linkedin.com/in/sunny-qi-125441252/"
          >
            Linkedin
          </Link>
          <br />
          <Link className="socials-links" to="https://github.com/SunnyCQ">
            Instagram
          </Link>
          <br />
        </div>
      </div>
    </>
  );
};

export default Contact;
