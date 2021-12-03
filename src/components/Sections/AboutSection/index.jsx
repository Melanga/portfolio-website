import { React } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";
import { ParallaxLayer } from "@react-spring/parallax";
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
} from "../../Elements/SectionElements";

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
  const { ref, inView } = useInView({ threshold: 0.4 });

  const contentTextProps = useSpring({
    opacity: inView ? 1 : 0,
    marginLeft: inView ? 0 : -400,
    config: config.gentle,
    delay: 200,
  });

  const contentHeaderProps = useSpring({
    opacity: inView ? 1 : 0,
    marginLeft: inView ? 0 : -400,
    config: config.slow,
    delay: 200,
  });
  const contentPProps = useSpring({
    opacity: inView ? 1 : 0,
    marginLeft: inView ? 0 : -400,
    config: config.slow,
    delay: 400,
  });

  const contentImgProps = useSpring({
    opacity: inView ? 1 : 0,
    //marginRight: inView ? 0 : -100,
    config: config.gentle,
    delay: 500,
  });

  return (
    <SectionContainer ref={ref} lightBg={lightBg} id={id}>
      <SectionWrapper>
        <ParallaxLayer
          offset={0.5}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 4,
          }}
        >
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
        </ParallaxLayer>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default AboutSection;
