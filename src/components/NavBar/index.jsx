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
  const scrollProps = {
    smooth: true,
    duration: 500,
    spy: true,
    exact: "true",
    offset: -80,
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
              <NavLinks to="about_me" {...scrollProps}>
                About Me
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="education" {...scrollProps}>
                Education
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="technologies" {...scrollProps}>
                Technologies
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" {...scrollProps}>
                Projects
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="footer" {...scrollProps}>
              Contact Me
            </NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </React.Fragment>
  );
};

export default NavBar;
