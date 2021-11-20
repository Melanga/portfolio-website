import React from "react";
import ProjectCard from "./projectCard";
import { projectData1, projectData2, projectData3 } from "./ProjectsData";

import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectsWrapper,
} from "./ProjectsSectionElements";

const ProjectsSection = () => {
  return (
    <React.Fragment>
      <ProjectsContainer id="projects">
        <ProjectsTitle>My Projects</ProjectsTitle>
        <ProjectsWrapper>
          <ProjectCard {...projectData1} />
          <ProjectCard {...projectData2} />
          <ProjectCard {...projectData3} />
        </ProjectsWrapper>
      </ProjectsContainer>
    </React.Fragment>
  );
};

export default ProjectsSection;
