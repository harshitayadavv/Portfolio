import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import AboutSection from "./AboutSection";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

function About() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  // Pass refs to Navbar
  const sectionRefs = { 
    aboutRef, 
    skillsRef, 
    projectsRef, 
    experienceRef, 
    contactRef 
  };

  return (
    <div className="relative w-screen text-white font-poppins">
      {/* Navbar with refs */}
      <Navbar sectionRefs={sectionRefs} />

      {/* About Section */}
      <AboutSection ref={aboutRef} />

      {/* Skills Section */}
      {/* <Skills ref={skillsRef} /> */}

      {/* Projects Section */}
      {/* <Projects ref={projectsRef} /> */}

      {/* Experience Section */}
      {/* <Experience ref={experienceRef} /> */}

      {/* Contact Section */}
      {/* <Contact ref={contactRef} /> */}
    </div>
  );
}

export default About;