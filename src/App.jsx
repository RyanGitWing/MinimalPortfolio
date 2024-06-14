import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <div>
      {/* <ThemeProvider> */}
      {/* <Navbar /> */}
        <About />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
      <Footer />
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
