import React from "react";
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
  return (
    <React.Fragment>
      <SectionContainer lightBg={lightBg} id={id}>
        <SectionWrapper>
          <SectionRow imgStart={imgStart}>
            <Column1>
              <EducationTextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                {/* <Subtitle darkText={darkText}>
                  {description}
                </Subtitle> */}
              </EducationTextWrapper>
              <EducationTimelineWrapper>
                <EducationTimeline vertical={false} />
              </EducationTimelineWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </SectionRow>
        </SectionWrapper>
      </SectionContainer>
    </React.Fragment>
  );
};

export default EducationSection;
