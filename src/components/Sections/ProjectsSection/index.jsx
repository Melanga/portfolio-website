import React from "react";
import Icon1 from "../../../images/svg-1.svg";

import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectsWrapper,
  ProjectCard,
  ProjectIcon,
  ProjectHeading,
  ProjectDescription,
} from "./ProjectsSectionElements";

class ProjectsSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ProjectsContainer id="projects">
          <ProjectsTitle>My Projects</ProjectsTitle>
          <ProjectsWrapper>
            <ProjectCard>
              <ProjectIcon src={Icon1}></ProjectIcon>
              <ProjectHeading>example project</ProjectHeading>
              <ProjectDescription>
                This is an example project details of my latests projects
              </ProjectDescription>
            </ProjectCard>
            <ProjectCard>
              <ProjectIcon src={Icon1}></ProjectIcon>
              <ProjectHeading>example project</ProjectHeading>
              <ProjectDescription>
                This is an example project details of my latests projects
              </ProjectDescription>
            </ProjectCard>
            <ProjectCard>
              <ProjectIcon src={Icon1}></ProjectIcon>
              <ProjectHeading>example project</ProjectHeading>
              <ProjectDescription>
                This is an example project details of my latests projects
              </ProjectDescription>
            </ProjectCard>
          </ProjectsWrapper>
        </ProjectsContainer>
      </React.Fragment>
    );
  }
}

export default ProjectsSection;
