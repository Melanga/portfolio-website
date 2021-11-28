import React, { useState } from "react";
import { aboutData } from "../components/Sections/AboutSection/Data";
import { educationData } from "../components/Sections/EducationSection/Data";
import { technologiesData } from "../components/Sections/TechnologiesSection/Data";
import AboutSection from "../components/Sections/AboutSection";
import EducationSection from "../components/Sections/EducationSection";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";
import TechnologiesSection from "../components/Sections/TechnologiesSection";
import ProjectsSection from "../components/Sections/ProjectsSection";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  //this handle toggling of nav side bar
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <SideNavBar toggleIsOpen={toggleIsOpen} isOpen={isOpen} />
      <NavBar toggleIsOpen={toggleIsOpen} />
      <HeroSection />
      <AboutSection {...aboutData} />
      <EducationSection {...educationData} />
      <TechnologiesSection {...technologiesData} />
      <ProjectsSection />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
