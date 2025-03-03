import React from "react";
import { Link } from "react-router-dom";
import "../../css_files/sub_page_css/ProjectCards.css";
import fsaeThumbnail from "/public/assets/project_pics/FSAE/FSAE_thumbnail.png";
import autoscrubThumbnail from "/public/assets/project_pics/Autoscrub/logo.png";

const projects = [
  { name: "FSAE", image: fsaeThumbnail, link: "/projects/FSAE" },
  { name: "Autoscrub", image: autoscrubThumbnail, link: "/projects/autoscrub" },
  // { name: "Tomochat", image: fsaeThumbnail, link: "/projects/tomochat" },
  // { name: "Blackjack", image: fsaeThumbnail, link: "/projects/blackjack" },
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
                style={{ backgroundImage: `url(${project.image})` }}
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
