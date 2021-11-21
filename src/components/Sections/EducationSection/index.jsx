import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";
import {
  SectionContainer,
  SectionWrapper,
  SectionRow,
  Column1,
  Column2,
  TopLine,
  Heading,
  ImgWrap,
  Img,
} from "../SectionElements";
import {
  EducationTimelineWrapper,
  EducationTextWrapper,
} from "./EducationSectionElements";
import EducationTimeline from "./EducationTimeline";

const EducationSection = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  headLine,
  img,
  alt,
}) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const contentTextProps = useSpring({
    opacity: inView ? 1 : 0,
    //marginRight: inView ? 0 : 400,
    config: config.gentle,
  });

  const contentHeaderProps = useSpring({
    opacity: inView ? 1 : 0,
    //marginRight: inView ? 0 : 400,
    config: config.slow,
    //delay: 200,
  });
  const contentTimelineProps = useSpring({
    opacity: inView ? 1 : 0,
    //marginLeft: inView ? 0 : 400,
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
    <React.Fragment>
      <SectionContainer ref={ref} lightBg={lightBg} id={id}>
        <SectionWrapper>
          <SectionRow imgStart={imgStart}>
            <Column1>
              <EducationTextWrapper>
                <animated.div style={contentTextProps}>
                  <TopLine>{topLine}</TopLine>
                </animated.div>
                <animated.div style={contentHeaderProps}>
                  <Heading lightText={lightText}>{headLine}</Heading>
                </animated.div>
                {/* <Subtitle darkText={darkText}>
                  {description}
                </Subtitle> */}
              </EducationTextWrapper>
              <animated.div style={contentTimelineProps}>
                <EducationTimelineWrapper>
                  <EducationTimeline vertical={false} />
                </EducationTimelineWrapper>
              </animated.div>
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
    </React.Fragment>
  );
};

export default EducationSection;
