import React from "react";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Experiences from "./components/Experiences";
// import Navbar from "./components/Navbar";
// import Skills from "./components/Skills";
// import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <div>
      {/* <ThemeProvider> */}
        {/* <Navbar /> */}
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="experiences">
          <Experiences />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
