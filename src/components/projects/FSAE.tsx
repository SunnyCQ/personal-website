import "../../css_files/projects_css/ProjectGeneral.css";
import "../../css_files/Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Skills from "../sub_page/Skills";
import { FSAE_tech } from "../../data/skills/skillsData";

const projects = [
  {
    title: "Accumulator Redesign",
    description: `My first assignment was to redesign the accumulator to 
                    add an additional charging port and on/off button hole 
                    to the sides. Through using Solidworks, the redesign 
                    strengthened my 3D CAD skills significantly.`,
    images: [
      {
        src: "/assets/project_pics/FSAE/FSAE_thumbnail.png",
        alt: "accumulator",
        height: "900px",
        colLg: 15,
      },
    ],
  },
  {
    title: "Stress Tests",
    description: `I also conducted various stress tests using both Solidworks and Ansys. 
                    I learned to configure and operate these tests under various conditions, 
                    such as orienting the direction of the force and applying different materials`,
    images: [
      {
        src: "/assets/project_pics/FSAE/cylinder.webp",
        alt: "cylinder stress test",
        height: "auto",
        colLg: 7,
      },
      {
        src: "/assets/project_pics/FSAE/hinge.webp",
        alt: "hinge stress test",
        height: "400px",
        colLg: 5,
      },
    ],
  },
];

const bg_pic = `
    .background-pic {
    background-image: url("/assets/project_pics/FSAE/FSAE_thumbnail.png");
    background-size: auto;
    background-position: center;
    background-repeat: no-repeat;
    height: 800px;
    width: 100%;
    position: relative;
    overflow: hidden;
}`;

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
          <h1> Technologies used </h1>
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
                      style={{ height: image.height, objectFit: "cover" }}
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
