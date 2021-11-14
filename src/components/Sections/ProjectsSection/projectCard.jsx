import React from "react";

import {
  ProjectCardWrapper,
  ProjectIcon,
  ProjectHeading,
  ProjectDescription,
} from "./ProjectsSectionElements";

class ProjectCard extends React.Component {
  render() {
    return (
      <ProjectCardWrapper id={this.props.img}>
        <ProjectIcon src={this.props.img} alt={this.props.alt}></ProjectIcon>
        <ProjectHeading>{this.props.heading}</ProjectHeading>
        <ProjectDescription>{this.props.description}</ProjectDescription>
      </ProjectCardWrapper>
    );
  }
}

export default ProjectCard;
