import React from "react";
//import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
} from "./HeroElements";
import Video from "../../video/video.mp4";

class HeroSection extends React.Component {
  state = {
    hover: false,
  };

  toggleHover = () => {
    let toggledHover = !this.state.hover;
    this.setState({ hover: toggledHover });
  };

  render() {
    return (
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Melanga Dissanayake</HeroH1>
          <HeroP>
            I'm Melanga Bhathiya and I am currently an undergraduate at the Uva
            Wellassa University of Sri Lanka pursuing my special degree in
            Industrial Information Technology(BIIT). <br />
            Machine Learning | Big Data Analysis | Web Designing | Mobile App
            Development are my interesting areas of study.
          </HeroP>
          <HeroBtnWrapper>
            {/* <Button
              primary="true"
              dark="true"
              to="contact_me"
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}
            >
              Contact Me {this.state.hover ? <ArrowForward /> : <ArrowRight />}
            </Button> */}
            <a href="https://github.com/Melanga">
              <GithubIcon />{" "}
            </a>
            <a href="https://twitter.com/melanga98">
              <TwitterIcon />
            </a>
            <a href="https://www.linkedin.com/in/melanga-bhathiya-dissanayake-90bb72193">
              <LinkedinIcon />
            </a>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    );
  }
}

export default HeroSection;
