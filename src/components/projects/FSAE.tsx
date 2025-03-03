import "../../css_files/projects_css/FSAE.css";
import "../../css_files/Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
      },
      {
        src: "/assets/project_pics/FSAE/hinge.webp",
        alt: "hinge stress test",
      },
    ],
  },
];

const FSAE = () => {
  return (
    <>
      <div className="wholepage general-font">
        <div className="top-banner"></div>
        <div className="homepage-bg">
          <h1 className="homepage-header">FORMULA SAE: POWERTRAIN DIVISION</h1>
        </div>
        <section className="container my-5">
          {projects.map((project, index) => (
            <div key={index} className="mb-5">
              <h2 className="pic-title">{project.title}</h2>
              <p className="pic-desc">{project.description}</p>
              <div className="grid-container">
                {project.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image.src}
                    alt={image.alt}
                    className="grid-image"
                  />
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
