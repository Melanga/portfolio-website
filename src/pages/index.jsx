import React, { useState, useRef } from "react";
import { aboutData } from "../components/Sections/AboutSection/Data";
import { educationData } from "../components/Sections/EducationSection/Data";
import { technologiesData } from "../components/Sections/TechnologiesSection/Data";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import AboutSection from "../components/Sections/AboutSection";
import EducationSection from "../components/Sections/EducationSection";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";
import TechnologiesSection from "../components/Sections/TechnologiesSection";
import ProjectsSection from "../components/Sections/ProjectsSection";
import Footer from "../components/Footer";
import useViewport from "../components/Hook/ViewPort";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useViewport();
  const parallax = useRef(null);

  //this handle toggling of nav side bar
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  return (
    <React.Fragment>
      <Parallax pages={6} style={{ top: "0", left: "0" }} ref={parallax}>
        <ParallaxLayer offset={0} speed={0}>
          <SideNavBar toggleIsOpen={toggleIsOpen} isOpen={isOpen} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0}
          sticky={{ start: 0, end: 5 }}
          style={{
            height: 80,
          }}
        >
          <NavBar toggleIsOpen={toggleIsOpen} scroll={scroll} />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <HeroSection />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
          <AboutSection {...aboutData} />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0}>
          <EducationSection {...educationData} width={width} />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0}>
          <TechnologiesSection {...technologiesData} width={width} />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0}>
          <ProjectsSection width={width} />
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </React.Fragment>
  );
};

export default Home;
