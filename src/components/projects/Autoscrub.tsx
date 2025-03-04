import "../../css_files/projects_css/ProjectGeneral.css";
import "../../css_files/Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Skills from "../sub_page/Skills";
import { autoscrub_tech } from "../../data/skills/skillsData";

const projects = [
  {
    title: "Autoscrub Overview",
    description: `The Autoscrub was a product I designed in my Introductory
                  engineering class for my final project. I completed with
                  two other partners. I was the Chief Technical Officer, so
                  I was tasked with performing most of the technical implementations
                  of the Autoscrub, including designing the circuit, creating the
                  casing in Fusion 360, and the final assembly. The goal of the
                  Autoscrub was to be a cleaning device that reduced strain on the
                  user, such as the elderly. The motorized scrubbing feature removes
                  much of the need for physical exertion, as the device would scrub
                  for you automatically. 
                  `,
    images: [],
  },
  {
    title: "",
    description: `In the end, it was implemented with two different modes: automatic 
                  and manual, with the automatic mode having a timer that the
                  user can set, telling it how long it should run for. It also came
                  with a display that would indicate the time left and what mode it 
                  was on.
                  `,
    images: [],
  },
  {
    title: "Circuit Design",
    description: `I was entirely responsible for designing the circuits
                  for the Autoscrub, using TinkerCAD to prototype before
                  implementing it physically. Below is the final product on
                  TinkerCAD. It lists all the functions, such as timer controls,
                  power level controls, and a manuel mode on/off switch.`,
    images: [
      {
        src: "/assets/project_pics/Autoscrub/circuit.png",
        alt: "circuit diagram",
        height: "600px",
        colLg: 12,
      },
    ],
  },
  {
    title: "CAD and Assembly",
    description: `Using Fusion 360, I went through more than 10 design prototypes before
                  reaching the final one shown to the left. The resulting product using
                  this prototype is shown on the right, which implements all the features
                  form the above circuit board physically.`,
    images: [
      {
        src: "/assets/project_pics/Autoscrub/CAD_model.png",
        alt: "CAD model",
        height: "550px",
        colLg: 7,
      },
      {
        src: "/assets/project_pics/Autoscrub/final_product.png",
        alt: "final Autoscrub prototype",
        height: "650px",
        colLg: 5,
      },
    ],
  },
];

const bg_pic = `.background-pic {
    background-image: url("/assets/project_pics/Autoscrub/logo.png");
    background-size: 900px;
    background-position: center;
    background-repeat: no-repeat;
    height: 700px;
    position: relative;
    overflow: hidden;
}
`;

const Autoscrub = () => {
  return (
    <>
      <style>{bg_pic}</style>
      <div className="wholepage general-font">
        <div className="background-pic"></div>
        <div className="homepage-bg">
          <h1 className="homepage-header">AUTOSCRUB: NYU FINAL PROJECT</h1>
        </div>
        <section className="video-container container my-5">
          <video width="600" height="340" controls>
            <source
              src="/assets/project_pics/Autoscrub/autoscrub_demo.MP4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </section>
        <section className="container my-5">
          <h1> Technologies used </h1>
          <Skills skills={autoscrub_tech} />
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

export default Autoscrub;

{
  /* <div className="grid-container">
{project.images.map((image, imgIndex) => (
  <img
    key={imgIndex}
    src={image.src}
    alt={image.alt}
    className="grid-image"
  />
))}
</div> */
}
