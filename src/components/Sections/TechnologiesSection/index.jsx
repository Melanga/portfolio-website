import React from "react";
import { useInView } from "react-intersection-observer";
import {
  SectionContainer,
  SectionWrapper,
  SectionRow,
  Column1,
  Column2,
  TopLine,
  Heading,
} from "../SectionElements";
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
}) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <React.Fragment>
      <SectionContainer lightBg={lightBg} id={id} ref={ref}>
        <SectionWrapper>
          <SectionRow imgStart={imgStart}>
            <Column1>
              <TecTextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <TechnologiesWrapper>
                  <TechnologyComponent
                    inView={inView}
                    timeDelay={0}
                    technology="Python"
                  />
                  <TechnologyComponent
                    inView={inView}
                    timeDelay={500}
                    technology="C"
                  />
                  <TechnologyComponent
                    inView={inView}
                    timeDelay={700}
                    technology="Java"
                  />
                  <TechnologyComponent
                    inView={inView}
                    timeDelay={300}
                    technology="Java Script"
                  />
                  <TechnologyComponent
                    inView={inView}
                    timeDelay={700}
                    technology="React"
                  />
                  <TechnologyComponent
                    inView={inView}
                    timeDelay={500}
                    technology="Flutter"
                  />
                  <TechnologyComponent
                    inView={inView}
                    timeDelay={300}
                    technology="TensorFlow"
                  />
                  <TechnologyComponent
                    inView={inView}
                    timeDelay={500}
                    technology="ML"
                  />
                </TechnologiesWrapper>
              </TecTextWrapper>
            </Column1>
            <Column2>
              <TechnologySvgGrid></TechnologySvgGrid>
            </Column2>
          </SectionRow>
        </SectionWrapper>
      </SectionContainer>
    </React.Fragment>
  );
};

export default TechnologiesSection;
