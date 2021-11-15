import React from "react";
import { useSpring, animated, config } from "react-spring";
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
const HeroSection = () => {
  const propsHeader = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 400,
    config: config.molasses,
  });

  const propsButtons = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 575,
    config: config.molasses,
  });

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <animated.div style={propsHeader}>
          <HeroH1>Melanga Dissanayake</HeroH1>
          <HeroP>
            I'm Melanga Bhathiya and I am currently an undergraduate at the Uva
            Wellassa University of Sri Lanka pursuing my special degree in
            Industrial Information Technology(BIIT). <br />
            Machine Learning | Big Data Analysis | Web Designing | Mobile App
            Development are my interesting areas of study.
          </HeroP>
        </animated.div>
        <animated.div style={propsButtons}>
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
        </animated.div>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
