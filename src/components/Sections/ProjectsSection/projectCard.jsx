import React from "react";

import {
  ProjectCardWrapper,
  ProjectIcon,
  ProjectHeading,
  ProjectDescription,
} from "./ProjectsSectionElements";

const ProjectCard = ({ img, alt, heading, description }) => {
  return (
    <ProjectCardWrapper id={img}>
      <ProjectIcon src={img} alt={alt}></ProjectIcon>
      <ProjectHeading>{heading}</ProjectHeading>
      <ProjectDescription>{description}</ProjectDescription>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
