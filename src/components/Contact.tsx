import "../css_files/Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="contacts">
        <div className="send-message">
          <form className="contact-form">
            <h1>Contact Me</h1>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="email">
          ...or email me directly at{" "}
          <a href="mailto:sunnycarlinqi@gmail.com" className="my-email">
            sunnycarlinqi@gmail.com
          </a>
        </div>
        <div className="ContactDetails"></div>
        <div className="socials">
          <h1>Socials</h1>
          <div className="social-icons-container">
            <Link className="socials-links" to="https://github.com/SunnyCQ">
              <img
                src="/public/assets/github-icon.png"
                alt="Github Profile"
                className="social-icon"
              />
            </Link>
            <br />
            <Link
              className="socials-links"
              to="https://www.linkedin.com/in/sunny-qi-125441252/"
            >
              <img
                src="/public/assets/linkedin-icon.png"
                alt="LinkedIn Profile"
                className="social-icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
