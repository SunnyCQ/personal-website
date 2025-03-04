import React from "react";
import { Link } from "react-router-dom";
import "../../css_files/sub_page_css/ProjectCards.css";
import fsaeThumbnail from "/public/assets/project_pics/FSAE/FSAE_thumbnail.png";
import autoscrubThumbnail from "/public/assets/project_pics/Autoscrub/logo.png";
import blackjackThumbnail from "/public/assets/project_pics/Blackjack/blackjack_thumbnail.png";
import tomochatThumbnail from "/public/assets/project_pics/tomochat/tomochat_thumbnail.png";

const projects = [
  {
    name: "FSAE",
    image: fsaeThumbnail,
    link: "/projects/FSAE",
    size: "500px",
  },
  {
    name: "Autoscrub",
    image: autoscrubThumbnail,
    link: "/projects/autoscrub",
    size: "500px",
  },
  {
    name: "Tomochat",
    image: tomochatThumbnail,
    link: "/projects/tomochat",
    size: "500px",
  },
  {
    name: "Blackjack",
    image: blackjackThumbnail,
    link: "/projects/blackjack",
    size: "400px",
  },
];

const ProjectCards = () => {
  return (
    <section id="projects" className="container my-5">
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-lg-6 d-flex justify-content-center">
            <Link className="projects-link" to={project.link}>
              <div
                className="projects-box"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: project.size,
                }}
              >
                <h2 className="project-name">{project.name}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ProjectCards;
