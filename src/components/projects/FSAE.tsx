import "../../css_files/projects_css/ProjectGeneral.css";
import "../../css_files/Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Skills from "../sub_page/Skills";
import { FSAE_tech } from "../../data/skillsData";
import { fsae_projects as projects } from "../../data/projectItems";
import { fsae_bg_pic as bg_pic } from "../../data/projectImage";

const FSAE = () => {
  return (
    <>
      <style>{bg_pic}</style>
      <div className="wholepage general-font">
        <div className="background-pic"></div>
        <div className="homepage-bg">
          <h1 className="homepage-header">FORMULA SAE: POWERTRAIN DIVISION</h1>
        </div>
        <section className="container my-5">
          <h1>Skills Used</h1>
          <Skills skills={FSAE_tech} />
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

export default FSAE;
