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
  return (
    <SideNavBarContainer isOpen={isOpen} onClick={toggleIsOpen}>
      <Icon onClick={toggleIsOpen}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SideNavBarWrapper>
        <SideNavBarMenu>
          <SideNavBarLink to="about_me" onClick={toggleIsOpen}>
            About Me
          </SideNavBarLink>
          <SideNavBarLink to="education" onClick={toggleIsOpen}>
            Education
          </SideNavBarLink>
          <SideNavBarLink to="projects" onClick={toggleIsOpen}>
            Projects
          </SideNavBarLink>
          <SideNavBarLink to="technologies" onClick={toggleIsOpen}>
            Technologies
          </SideNavBarLink>
        </SideNavBarMenu>
        <SideNavBtnWrap>
          <SideNavBtn to="footer" onClick={toggleIsOpen}>
            Contact Me
          </SideNavBtn>
        </SideNavBtnWrap>
      </SideNavBarWrapper>
    </SideNavBarContainer>
  );
};

export default SideNavBar;
