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

class SideNavBar extends React.Component {
  render() {
    const { isOpen, onToggle } = this.props;

    return (
      <SideNavBarContainer isOpen={isOpen} onClick={onToggle}>
        <Icon onClick={onToggle}>
          <CloseIcon></CloseIcon>
        </Icon>
        <SideNavBarWrapper>
          <SideNavBarMenu>
            <SideNavBarLink to="about_me" onClick={onToggle}>
              About Me
            </SideNavBarLink>
            <SideNavBarLink to="education" onClick={onToggle}>
              Education
            </SideNavBarLink>
            <SideNavBarLink to="projects" onClick={onToggle}>
              Projects
            </SideNavBarLink>
            <SideNavBarLink to="technologies" onClick={onToggle}>
              Technologies
            </SideNavBarLink>
          </SideNavBarMenu>
          <SideNavBtnWrap>
            <SideNavBtn to="/contact_me">Contact Me</SideNavBtn>
          </SideNavBtnWrap>
        </SideNavBarWrapper>
      </SideNavBarContainer>
    );
  }
}

export default SideNavBar;
