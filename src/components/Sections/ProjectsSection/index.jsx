import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";
import ProjectCard from "./projectCard";
import { projectData1, projectData2, projectData3 } from "./ProjectsData";

import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectsWrapper,
} from "./ProjectsSectionElements";

const ProjectsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const contentTextProps = useSpring({
    opacity: inView ? 1 : 0,
    marginTop: inView ? 0 : -200,
    config: config.gentle,
  });

  const contentLeftCardProps = useSpring({
    opacity: inView ? 1 : 0,
    //marginLeft: inView ? 0 : -400,
    config: config.slow,
    delay: 300,
  });

  const contentRightCardProps = useSpring({
    opacity: inView ? 1 : 0,
    //marginRight: inView ? 0 : -400,
    config: config.slow,
    delay: 300,
  });

  const contentMiddleCardProps = useSpring({
    opacity: inView ? 1 : 0,
    //marginRight: inView ? 0 : -400,
    config: config.slow,
    delay: 300,
  });

  return (
    <ProjectsContainer id="projects" ref={ref}>
      <animated.div style={contentTextProps}>
        <ProjectsTitle>My Projects</ProjectsTitle>
      </animated.div>
      <ProjectsWrapper>
        <animated.div style={contentLeftCardProps}>
          <ProjectCard {...projectData1} />
        </animated.div>
        <animated.div style={contentMiddleCardProps}>
          <ProjectCard {...projectData2} />
        </animated.div>
        <animated.div style={contentRightCardProps}>
          <ProjectCard {...projectData3} />
        </animated.div>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
