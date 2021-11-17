import React from "react";
import {
  SectionContainer,
  SectionWrapper,
  SectionRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
} from "../SectionElements";
import { TechnologiesWrapper } from "./TechnologiesSectionElements";
import TechnologyComponent from "./TechnologyComponent";
import TechnologySvgGrid from "./TechnologySvgGrid";

const TechnologiesSection = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  headLine,
  img,
  alt,
}) => {
  return (
    <React.Fragment>
      <SectionContainer lightBg={lightBg} id={id}>
        <SectionWrapper>
          <SectionRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <TechnologiesWrapper>
                  <TechnologyComponent technology="Python" />
                  <TechnologyComponent technology="C" />
                  <TechnologyComponent technology="Java" />
                  <TechnologyComponent technology="Java Script" />
                  <TechnologyComponent technology="React" />
                  <TechnologyComponent technology="Flutter" />
                  <TechnologyComponent technology="TensorFlow" />
                  <TechnologyComponent technology="ML" />
                </TechnologiesWrapper>
              </TextWrapper>
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
