import cplusplusIcon from "/src/src_assets/card_icons/cplusplus.png";
import pythonIcon from "/src/src_assets/card_icons/python.png";
import fusion360Icon from "/src/src_assets/card_icons/fusion360.png";
import javascriptIcon from "/src/src_assets/card_icons/javascript.png";
import reactIcon from "/src/src_assets/card_icons/react.png";
import bootstrapIcon from "/src/src_assets/card_icons/bootstrap.png";
import solidworksIcon from "/src/src_assets/card_icons/solidworks.png";
import gitIcon from "/src/src_assets/card_icons/git.png";
import htmlIcon from "/src/src_assets/card_icons/html.png";
import cssIcon from "/src/src_assets/card_icons/css.png";
import javaIcon from "/src/src_assets/card_icons/java.png";
import cIcon from "/src/src_assets/card_icons/c.png";
import nodejsIcon from "/src/src_assets/card_icons/nodejs.png";
import flaskIcon from "/src/src_assets/card_icons/flask.png";
import mysqlIcon from "/src/src_assets/card_icons/mysql.png";
import firebaseIcon from "/src/src_assets/card_icons/firebase.png";
import vimIcon from "/src/src_assets/card_icons/vim.png";
import godotIcon from "/src/src_assets/card_icons/godot.png";
import typescriptIcon from "/src/src_assets/card_icons/typescript.png";
import AnsysIcon from "/src/src_assets/card_icons/ansys.png";
import ArduinoIcon from "/src/src_assets/card_icons/arduino.svg";
import TinkercadIcon from "/src/src_assets/card_icons/tinkercad.png";

export interface Skill {
  name: string;
  image: string;
}

export const all_skills: Skill[] = [
    { name: "Python", image: pythonIcon },
    { name: "C++", image: cplusplusIcon },
    { name: "C", image: cIcon },
    { name: "Java", image: javaIcon },
    { name: "HTML", image: htmlIcon },
    { name: "CSS", image: cssIcon },
    { name: "JavaScript", image: javascriptIcon },
    { name: "TypeScript", image: typescriptIcon },
    { name: "React", image: reactIcon },
    { name: "Bootstrap", image: bootstrapIcon },
    { name: "NodeJS", image: nodejsIcon },
    { name: "Flask", image: flaskIcon },
    { name: "MySQL", image: mysqlIcon },
    { name: "FireBase", image: firebaseIcon },
    { name: "Git", image: gitIcon },
    { name: "Vim", image: vimIcon },
    { name: "Godot", image: godotIcon },
    { name: "Arduino", image: ArduinoIcon },
    { name: "Fusion 360", image: fusion360Icon },
    { name: "SolidWorks", image: solidworksIcon },
    { name: "Ansys", image: AnsysIcon },
  ];

export const tomochat_tech: Skill[]  = [
    { name: "Python", image: pythonIcon },
    { name: "HTML", image: htmlIcon },
    { name: "CSS", image: cssIcon },
    { name: "JavaScript", image: javascriptIcon },
    { name: "React", image: reactIcon },
    { name: "Bootstrap", image: bootstrapIcon },
    { name: "NodeJS", image: nodejsIcon },
    { name: "Flask", image: flaskIcon },
    { name: "FireBase", image: firebaseIcon },
    { name: "Git", image: gitIcon },
];

export const FSAE_tech: Skill[]  = [
  { name: "Fusion 360", image: fusion360Icon },
  { name: "SolidWorks", image: solidworksIcon },
  { name: "Ansys", image: AnsysIcon },
];

export const blackjack_tech: Skill[]  = [
  { name: "HTML", image: htmlIcon },
  { name: "CSS", image: cssIcon },
  { name: "JavaScript", image: javascriptIcon },
  { name: "Git", image: gitIcon },
];

export const autoscrub_tech: Skill[]  = [
  { name: "Arduino", image: ArduinoIcon },
  { name: "Fusion 360", image: fusion360Icon },
  { name: "C++", image: cplusplusIcon },
  { name: "Tinkercad", image: TinkercadIcon },
];