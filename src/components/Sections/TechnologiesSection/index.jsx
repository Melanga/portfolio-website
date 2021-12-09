import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";
import { ParallaxLayer } from "@react-spring/parallax";
import {
  SectionContainer,
  SectionWrapper,
  SectionRow,
  Column1,
  Column2,
  TopLine,
  Heading,
} from "../../Elements/SectionElements";
import {
  TechnologiesWrapper,
  TecTextWrapper,
} from "./TechnologiesSectionElements";
import TechnologyComponent from "./TechnologyComponent";
import TechnologySvgGrid from "./TechnologySvgGrid";

const TechnologiesSection = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  headLine,
  width,
}) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const contentTextProps = useSpring({
    opacity: inView ? 1 : 0,
    marginLeft: inView ? 0 : -500,
    config: config.gentle,
  });

  const contentHeaderProps = useSpring({
    opacity: inView ? 1 : 0,
    marginLeft: inView ? 0 : -500,
    config: config.slow,
    //delay: 200,
  });

  const contentSvgGridProps = useSpring({
    opacity: inView ? 1 : 0,
    //marginRight: inView ? 0 : -100,
    config: config.gentle,
    delay: 300,
  });

  return (
    <React.Fragment>
      <SectionContainer lightBg={lightBg} id={id} ref={ref}>
        <SectionWrapper>
          <ParallaxLayer
            offset={1}
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
                <TecTextWrapper>
                  <animated.div style={contentTextProps}>
                    <TopLine>{topLine}</TopLine>
                  </animated.div>
                  <animated.div style={contentHeaderProps}>
                    <Heading lightText={lightText}>{headLine}</Heading>
                  </animated.div>
                  <TechnologiesWrapper>
                    <TechnologyComponent
                      inView={inView}
                      timeDelay={200}
                      technology="Python"
                    />
                    <TechnologyComponent
                      inView={inView}
                      timeDelay={700}
                      technology="C"
                    />
                    <TechnologyComponent
                      inView={inView}
                      timeDelay={900}
                      technology="Java"
                    />
                    <TechnologyComponent
                      inView={inView}
                      timeDelay={500}
                      technology="Java Script"
                    />
                    <TechnologyComponent
                      inView={inView}
                      timeDelay={900}
                      technology="React"
                    />
                    <TechnologyComponent
                      inView={inView}
                      timeDelay={700}
                      technology="Flutter"
                    />
                    <TechnologyComponent
                      inView={inView}
                      timeDelay={500}
                      technology="TensorFlow"
                    />
                    <TechnologyComponent
                      inView={inView}
                      timeDelay={700}
                      technology="ML"
                    />
                  </TechnologiesWrapper>
                </TecTextWrapper>
              </Column1>
              <Column2>
                <animated.div style={contentSvgGridProps}>
                  <TechnologySvgGrid width={width}></TechnologySvgGrid>
                </animated.div>
              </Column2>
            </SectionRow>
          </ParallaxLayer>
        </SectionWrapper>
      </SectionContainer>
    </React.Fragment>
  );
};

export default TechnologiesSection;
