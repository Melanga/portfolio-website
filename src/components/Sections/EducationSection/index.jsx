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
  ImgWrap,
  Img,
} from "../SectionElements";
import { EducationTimelineWrapper } from "./EducationSectionElements";
import EducationTimeline from "./EducationTimeline";
class EducationSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SectionContainer lightBg={this.props.lightBg} id={this.props.id}>
          <SectionWrapper>
            <SectionRow imgStart={this.props.imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{this.props.topLine}</TopLine>
                  <Heading lightText={this.props.lightText}>
                    {this.props.headLine}
                  </Heading>
                  {/* <Subtitle darkText={this.props.darkText}>
                    {this.props.description}
                  </Subtitle> */}
                </TextWrapper>
                <EducationTimelineWrapper>
                  <EducationTimeline vertical={false} />
                </EducationTimelineWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={this.props.img} alt={this.props.alt} />
                </ImgWrap>
              </Column2>
            </SectionRow>
          </SectionWrapper>
        </SectionContainer>
      </React.Fragment>
    );
  }
}

export default EducationSection;
