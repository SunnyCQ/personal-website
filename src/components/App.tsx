import NavBar from "./NavBar";
import Homepage from "./Homepage";
import Projects from "./Projects";
import Piano from "./more/Piano";
import JapaneseLearning from "./more/JapaneseLearning";
import Gaming from "./more/Gaming";
import Contact from "./Contact";
import FSAE from "./projects/FSAE";
import Autoscrub from "./projects/Autoscrub";
import Blackjack from "./projects/Blackjack";
import Tomochat from "./projects/Tomochat";
import "../css_files/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="content">
          <Router>
            <div>
              <NavBar />
              <div className="main-content">
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/Projects" element={<Projects />} />
                  <Route
                    path="/JapaneseLearning"
                    element={<JapaneseLearning />}
                  />
                  <Route path="/Piano" element={<Piano />} />
                  <Route path="/Gaming" element={<Gaming />} />
                  <Route path="/Contact" element={<Contact />} />
                  <Route path="/projects/FSAE" element={<FSAE />} />
                  <Route path="/projects/autoscrub" element={<Autoscrub />} />
                  <Route path="/projects/tomochat" element={<Tomochat />} />
                  <Route path="/projects/blackjack" element={<Blackjack />} />
                </Routes>
              </div>
            </div>
          </Router>
        </div>
        <footer className="footer">
          &copy; {new Date().getFullYear()} Sunny Carlin Qi. All rights
          reserved.
        </footer>
      </div>
    </>
  );
}

export default App;

//Note, the path="/somepath" is merely us setting/naming the
//routing path. It has nothing to do with the project
//file structure. We can set it to anything we want,
//as long as it's consistent with the name in navbar too.

//tl;dr the path(route) name only needs to be the same between App and NavBar
