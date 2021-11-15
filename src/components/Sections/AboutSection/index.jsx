import { React, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";
import {
  SectionContainer,
  SectionWrapper,
  SectionRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "../SectionElements";

const AboutSection = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  img,
  alt,
}) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    //console.log("inView = ", inView);
  });

  let contentTextProps = useSpring({
    opacity: inView ? 1 : 0,
    marginLeft: inView ? 0 : -400,
    config: config.gentle,
  });

  const contentHeaderProps = useSpring({
    opacity: inView ? 1 : 0,
    marginLeft: inView ? 0 : -400,
    config: config.slow,
    //delay: 200,
  });
  const contentPProps = useSpring({
    opacity: inView ? 1 : 0,
    marginLeft: inView ? 0 : -400,
    config: config.slow,
    delay: 200,
  });

  const contentImgProps = useSpring({
    opacity: inView ? 1 : 0,
    //marginRight: inView ? 0 : -100,
    config: config.gentle,
    delay: 300,
  });

  return (
    <SectionContainer ref={ref} lightBg={lightBg} id={id}>
      <SectionWrapper>
        <SectionRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <animated.div style={contentTextProps}>
                <TopLine>{topLine}</TopLine>
              </animated.div>
              <animated.div style={contentHeaderProps}>
                <Heading lightText={lightText}>{headLine}</Heading>
              </animated.div>
              <animated.div style={contentPProps}>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </animated.div>
            </TextWrapper>
          </Column1>

          <Column2>
            <animated.div style={contentImgProps}>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </animated.div>
          </Column2>
        </SectionRow>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default AboutSection;
