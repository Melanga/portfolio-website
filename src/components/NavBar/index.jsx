import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav>
          <NavBarContainer>
            <NavLogo to="/">Portfolio</NavLogo>
            <MobileIcon onClick={this.props.onToggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about_me">About Me</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="education">Education</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="projects">Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="technologies">Technologies</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="footer">Contact Me</NavBtnLink>
            </NavBtn>
          </NavBarContainer>
        </Nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
