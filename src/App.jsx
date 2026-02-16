import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  personalInfo,
  about,
  skills,
  projects,
  certifications,
  education,
  // blogPosts,
  socialLinks
} from "./data/mock";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero personalInfo={personalInfo} />
      <About about={about} personalInfo={personalInfo} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Education certifications={certifications} education={education} />
      {/* <Blog blogPosts={blogPosts} /> */}
      {/* <Contact personalInfo={personalInfo} socialLinks={socialLinks} /> */}
      <Footer personalInfo={personalInfo} socialLinks={socialLinks} />
    </div>
  );
}

export default App;
