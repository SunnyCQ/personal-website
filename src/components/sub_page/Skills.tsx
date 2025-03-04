import React from "react";
import "../../css_files/sub_page_css/Skills.css";
import cplusplusIcon from "/public/assets/card_icons/cplusplus.png";
import pythonIcon from "/public/assets/card_icons/python.png";
import fusion360Icon from "/public/assets/card_icons/fusion360.png";
import javascriptIcon from "/public/assets/card_icons/javascript.png";
import reactIcon from "/public/assets/card_icons/react.png";
import bootstrapIcon from "/public/assets/card_icons/bootstrap.png";
import solidworksIcon from "/public/assets/card_icons/solidworks.png";
import gitIcon from "/public/assets/card_icons/git.png";
import htmlIcon from "/public/assets/card_icons/html.png";
import cssIcon from "/public/assets/card_icons/css.png";

import javaIcon from "/public/assets/card_icons/java.png";
import cIcon from "/public/assets/card_icons/c.png";
import nodejsIcon from "/public/assets/card_icons/nodejs.png";
import flaskIcon from "/public/assets/card_icons/flask.png";
import mysqlIcon from "/public/assets/card_icons/mysql.png";
import firebaseIcon from "/public/assets/card_icons/firebase.png";
import vimIcon from "/public/assets/card_icons/vim.png";
import godotIcon from "/public/assets/card_icons/godot.png";

import { Skill } from "../../data/skills/skillsData.js"; // Import the type

interface SkillsProps {
  skills: Skill[];
}

// const skills = [
//   { name: "Python", image: pythonIcon },
//   { name: "C++", image: cplusplusIcon },
//   { name: "C", image: cIcon },
//   { name: "Java", image: javaIcon },
//   { name: "HTML", image: htmlIcon },
//   { name: "CSS", image: cssIcon },
//   { name: "JavaScript", image: javascriptIcon },
//   { name: "React", image: reactIcon },
//   { name: "Bootstrap", image: bootstrapIcon },
//   { name: "NodeJS", image: nodejsIcon },
//   { name: "Flask", image: flaskIcon },
//   { name: "MySQL", image: mysqlIcon },
//   { name: "FireBase", image: firebaseIcon },
//   { name: "Git", image: gitIcon },
//   { name: "Vim", image: vimIcon },
//   { name: "Godot", image: godotIcon },
//   { name: "Fusion 360", image: fusion360Icon },
//   { name: "SolidWorks", image: solidworksIcon },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="container my-5">
//       <div className="row">
//         {skills.map((skill, index) => (
//           <div key={index} className="col-md-4 d-flex justify-content-center">
//             <div className="skill-box p-3 text-center rounded shadow-sm">
//               <img src={skill.image} alt={skill.name} className="skill-icon" />
//               <p className="mt-2">{skill.name}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="container my-5">
      <div className="row">
        {skills.map((skill, index) => (
          <div key={index} className="col-md-4 d-flex justify-content-center">
            <div className="skill-box p-3 text-center rounded shadow-sm">
              <img src={skill.image} alt={skill.name} className="skill-icon" />
              <p className="mt-2">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
