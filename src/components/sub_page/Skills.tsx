import React from "react";
import "../../css_files/sub_page_css/Skills.css";

import { Skill } from "../../data/skillsData.js"; // Import the type

interface SkillsProps {
  skills: Skill[];
}

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
