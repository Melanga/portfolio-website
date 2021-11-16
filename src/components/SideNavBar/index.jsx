import React from "react";
import {
  SideNavBarContainer,
  Icon,
  CloseIcon,
  SideNavBarWrapper,
  SideNavBarMenu,
  SideNavBarLink,
  SideNavBtnWrap,
  SideNavBtn,
} from "./SideNavBarElements";

const SideNavBar = ({ isOpen, toggleIsOpen }) => {
  const scrollProps = {
    smooth: true,
    duration: 500,
    spy: true,
    exact: "true",
    offset: -80,
  };

  return (
    <SideNavBarContainer isOpen={isOpen} onClick={toggleIsOpen}>
      <Icon onClick={toggleIsOpen}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SideNavBarWrapper>
        <SideNavBarMenu>
          <SideNavBarLink to="about_me" onClick={toggleIsOpen} {...scrollProps}>
            About Me
          </SideNavBarLink>
          <SideNavBarLink
            to="education"
            onClick={toggleIsOpen}
            {...scrollProps}
          >
            Education
          </SideNavBarLink>
          <SideNavBarLink to="projects" onClick={toggleIsOpen} {...scrollProps}>
            Projects
          </SideNavBarLink>
          <SideNavBarLink
            to="technologies"
            onClick={toggleIsOpen}
            {...scrollProps}
          >
            Technologies
          </SideNavBarLink>
        </SideNavBarMenu>
        <SideNavBtnWrap>
          <SideNavBtn to="footer" onClick={toggleIsOpen} {...scrollProps}>
            Contact Me
          </SideNavBtn>
        </SideNavBtnWrap>
      </SideNavBarWrapper>
    </SideNavBarContainer>
  );
};

export default SideNavBar;
