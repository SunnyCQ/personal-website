import "../css_files/Projects.css";
import "../css_files/Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ProjectCards from "./sub_page/ProjectCards.tsx";


const Projects = () => {
  return (
    <>
      <div className="general-font">
        <h1 className="title">Projects</h1>
        <div className="project-cards">
          <ProjectCards />
        </div>
      </div>
    </>
  );
};

export default Projects;
