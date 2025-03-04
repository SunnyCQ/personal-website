import "../../css_files/projects_css/ProjectGeneral.css";
import "../../css_files/Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Skills from "../sub_page/Skills";
import { blackjack_tech } from "../../data/skills/skillsData";

const projects = [
  {
    title: "Blackjack Overview",
    description: `This was a small but fun project where I implemented blackjack in a
                  simple web format using only HTML and Javascript. The main focus was
                  just to get some JS practice and review the fundamentals. I hope you
                  enjoy the game!
                  `,
    images: [],
  },
  {
    title: "Rules",
    description: `You can read the rules as shown in the image below.`,
    images: [
      {
        src: "/assets/project_pics/blackjack/website_layout.png",
        alt: "blackjack rules",
        height: "auto",
        width: "100%",
        colLg: 12,
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
        src: "/assets/project_pics/blackjack/game_split_1.png",
        alt: "split one",
        height: "auto",
        width: "100%",
        colLg: 5,
      },
      {
        src: "/assets/project_pics/blackjack/game_split_2.png",
        alt: "split two",
        height: "100%",
        width: "100%",
        colLg: 7,
      },
    ],
  },
];

const bg_pic = `.background-pic {
    background-image: url("/assets/project_pics/blackjack/blackjack_thumbnail.png");
    background-size: 600px;
    background-position: center;
    background-repeat: no-repeat;
    height: 600px;
    margin: 50px;
    position: relative;
    overflow: hidden;
}
`;

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
