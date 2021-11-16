import React, { useState, useEffect } from "react";
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
import { animateScroll } from "react-scroll";

const NavBar = ({ toggleIsOpen }) => {
  const [navScrolled, setNavScrolled] = useState(false);

  const onNavScrolled = () => {
    if (window.scrollY >= 80) {
      setNavScrolled(true);
    } else {
      setNavScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScrolled);
  }, []);

  const scrollToHome = () => {
    animateScroll.scrollToTop();
  };

  return (
    <React.Fragment>
      <Nav navScrolled={navScrolled}>
        <NavBarContainer>
          <NavLogo to="/" onClick={scrollToHome}>
            Portfolio
          </NavLogo>
          <MobileIcon onClick={toggleIsOpen}>
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
};

export default NavBar;
