import React, { useState } from "react";
import "../../css_files/sub_page_css/Experiences.css";

const experiences = [
  {
    id: 1,
    date: "June 2025 - Aug 2025",
    title: "[UPCOMING] META SWE INTERNSHIP",
    details: [],
  },
  {
    id: 2,
    date: "June 2024 - Aug 2024",
    title: "COLUMBIA WIRELESS & MOBILE NETWORKING LAB INTERN",
    details: [
      "Tested mmWave capabilities for environment sensing using a 140GHz transmission device, comparing results to a LiDAR imaging system",
      "Conducted field tests of 28GHz signal transmission in diverse indoor and outdoor environments to assess 5G performance",
      "Developed NumPy and Matplotlib scripts to visualize the relationship between antenna gain and varying environment types",
      "Designed and 3D-printed custom components in Fusion 360 to securely attach circuit boards to a data collection device",
    ],
  },
  {
    id: 3,
    date: "Sep 2023 - May 2024",
    title: "COLUMBIA FORMULA SOCIETY OF AUTOMOTIVE ENGINEERS",
    details: [
      "Revised accumulator to relocate digital ports (e.g USB) and include an LED indication system using Solidworks",
      "Designed accumulator support tabs to endure static, sheering, and turning stresses with a minimum factor of safety of three",
      "Conducted Solidworks stress simulations on support tabs accounting for various forces (e.g. gravitational) and racing conditions",
      "Prototyped portable power supply containment system to provide convenient and accessible vehicle refueling",
    ],
  },
  {
    id: 4,
    date: "Sep 2022 - Dec 2022",
    title: "RAPID ASSEMBLY AND DESIGN PROJECT",
    details: [
      "Led engineering team to devise marketable product of hand-held assistive cleaning device called the ‘AutoScrub’ to enhance accessibility of traditional cleaning chores for individuals with mobility difficulties",
      "Leveraged TinkerCAD to map principal circuit design, subsequently employing Arduino to program the physical circuits for scrubbing power and timer controls",
      "Designed, printed, and assembled a protective CAD chassis with Fusion 360 to contain electronic components for the AutoScrub",
    ],
  },
];

const Experience = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleCollapse = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="experience" className="container my-5">
      <div className="list-group">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <button
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              onClick={() => toggleCollapse(exp.id)}
            >
              <span>
                {exp.title} - {exp.date}
              </span>
              <span className="arrow">{openId === exp.id ? "▲" : "▼"}</span>
            </button>

            {/* Collapsible Details */}
            <div className={`collapse ${openId === exp.id ? "show" : ""}`}>
              <ul className="list-group list-group-flush">
                {exp.details.map((detail, index) => (
                  <li key={index} className="list-group-item">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
