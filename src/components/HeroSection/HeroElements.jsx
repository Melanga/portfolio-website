import styled from "styled-components";
//import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { SiGithub, SiTwitter, SiLinkedin } from "react-icons/si";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  //@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
  //fonts were added using index.html header
  font-family: "Pacifico";
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const HeroP = styled.p`
  margin-top: 36px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 900px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 64px;
  height: 50px;
  display: flex;
  //max-width: 400px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 300px) {
    flex-direction: column;
    height: unset;
  }
`;

// export const ArrowForward = styled(MdArrowForward)`
//   margin-left: 8px;
//   font-size: 20px;
// `;
// export const ArrowRight = styled(MdKeyboardArrowRight)`
//   margin-left: 8px;
//   font-size: 20px;
// `;

export const GithubIcon = styled(SiGithub)`
  color: #fff;
  font-size: 36px;
  transition: all 0.1s ease-in-out;
  :hover {
    font-size: 42px;
    transition: all 0.1s ease-in-out;
  }
`;

export const TwitterIcon = styled(SiTwitter)`
  color: #fff;
  font-size: 36px;
  margin-left: 40px;
  transition: all 0.1s ease-in-out;
  :hover {
    font-size: 42px;
    transition: all 0.1s ease-in-out;
  }
  @media screen and (max-width: 300px) {
    margin-left: unset;
  }
`;

export const LinkedinIcon = styled(SiLinkedin)`
  color: #fff;
  font-size: 36px;
  margin-left: 40px;
  transition: all 0.1s ease-in-out;
  :hover {
    font-size: 42px;
    transition: all 0.1s ease-in-out;
  }
  @media screen and (max-width: 300px) {
    margin-left: unset;
  }
`;
