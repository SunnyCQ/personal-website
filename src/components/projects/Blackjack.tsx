import "../../css_files/projects_css/ProjectGeneral.css";
import "../../css_files/Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Skills from "../sub_page/Skills";
import { blackjack_tech } from "../../data/skillsData";
import { blackjack_projects as projects } from "../../data/projectItems";
import { blackjack_bg_pic as bg_pic } from "../../data/projectImage";

const blackjack_link = `.blackjack-link {
    text-decoration: underline;
    color: var(--main-yellow);
}`;

const Blackjack = () => {
  return (
    <>
      <style>{bg_pic}</style>
      <style>{blackjack_link}</style>
      <div className="wholepage general-font">
        <div className="background-pic"></div>
        <div className="homepage-bg">
          <h1 className="homepage-header">BLACKJACK: JS FUN</h1>
        </div>
        <section className="video-container container my-5">
          <video width="600" height="340" controls>
            <source
              src="/assets/project_pics/blackjack/blackjack_demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </section>
        <div>
          <a
            className="blackjack-link"
            href="/public/blackjack_website/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>Play Here!</h1>
          </a>
        </div>
        <section className="container my-5">
          <h1> Technologies used </h1>
          <Skills skills={blackjack_tech} />
        </section>
        <section className="container my-5">
          {projects.map((project, index) => (
            <div key={index} className="mb-5">
              <h2 className="pic-title">{project.title}</h2>
              <p className="pic-desc">{project.description}</p>
              <div className="row">
                {project.images.map((image, imgIndex) => (
                  <div key={imgIndex} className={`col-lg-${image.colLg}`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="img-fluid"
                      style={{
                        height: image.height,
                        width: image.width,
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Blackjack;
