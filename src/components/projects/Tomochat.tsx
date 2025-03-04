import "../../css_files/projects_css/ProjectGeneral.css";
import "../../css_files/Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Skills from "../sub_page/Skills";
import { tomochat_tech } from "../../data/skills/skillsData";

const projects = [
  {
    title: "Tomochat overview",
    description: `Tomochat, meaning 'friend chat', was an idea that I came up with
                  while learning Japanese. I thought that it would be incredibly
                  helpful to have a practice conversation partner to speak Japanese to.
                  Unfortunately, I didn't really have many friends who were Japanaese
                  around me, and even if I did, my embaressment would get in the way
                  of me actually speaking to them. So I thought: "why not make a chatbot
                  to practice with?" And thus Tomochat was born.
                  `,
    images: [],
  },
  {
    title: "Commands",
    description: `You can read the different tomochat commands as shown below.`,
    images: [
      {
        src: "/assets/project_pics/tomochat/help.png",
        alt: "tomochat commands",
        height: "auto",
        width: "100%",
        colLg: 8,
      },
    ],
  },
  {
    title: "Gameplay features",
    description: `While not necessarily hard, the 'split' action in 
                  blackjack was by far the most complicated feature I
                  had to implement in the code. I did it to varying success,
                  allowing the player to split once. However, for the sake of simplicity,
                  I did not implement it to the degree of allowing the player to split
                  over and over again, which is allowed in real poker.`,
    images: [
      {
        src: "/assets/project_pics/tomochat/chatbot.png",
        alt: "tomochat commands",
        height: "auto",
        width: "100%",
        colLg: 7,
      },
      {
        src: "/assets/project_pics/tomochat/flashcard.png",
        alt: "tomochat commands",
        height: "auto",
        width: "100%",
        colLg: 5,
      },
    ],
  },
];

const bg_pic = `.background-pic {
    background-image: url("/assets/project_pics/tomochat/chatbot.png");
    background-size: 500px;
    background-position: center;
    background-repeat: no-repeat;
    height: 700px;
    position: relative;
    overflow: hidden;
}
`;

const Tomochat = () => {
  return (
    <>
      <style>{bg_pic}</style>
      <div className="wholepage general-font">
        <div className="background-pic"></div>
        <div className="homepage-bg">
          <h1 className="homepage-header">TOMOCHAT: JAPANESE CHATBOT</h1>
        </div>
        <section className="video-container container my-5">
          <video width="600" height="340" controls>
            <source
              src="/assets/project_pics/tomochat/tomochat_demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </section>
        <section className="container my-5">
          <h1> Technologies used </h1>
          <Skills skills={tomochat_tech} />
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

export default Tomochat;
