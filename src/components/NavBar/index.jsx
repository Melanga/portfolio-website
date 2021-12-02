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
//import { animateScroll } from "react-scroll";

const NavBar = ({ toggleIsOpen, scroll }) => {
  // const [navScrolled, setNavScrolled] = useState(false);

  // const onNavScrolled = () => {
  //   if (window.scrollY >= 80) {
  //     setNavScrolled(true);
  //   } else {
  //     setNavScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", onNavScrolled);
  // }, []);

  // const scrollToHome = () => {
  //   animateScroll.scrollToTop();
  // };
  // const scrollProps = {
  //   smooth: true,
  //   duration: 500,
  //   spy: true,
  //   exact: "true",
  //   offset: -80,
  // };
  return (
    <React.Fragment>
      <Nav>
        <NavBarContainer>
          <NavLogo
            //to="/"
            onClick={() => {
              scroll(0);
            }}
          >
            Portfolio
          </NavLogo>
          <MobileIcon onClick={toggleIsOpen}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks onClick={() => scroll(1)}>About Me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => scroll(2)}>Education</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => scroll(3)}>Technologies</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => scroll(4)}>Projects</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink onClick={() => scroll(5)}>Contact Me</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </React.Fragment>
  );
};

export default NavBar;
