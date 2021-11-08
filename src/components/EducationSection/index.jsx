import React from "react";
import {
  EducationContainer,
  EducationWrapper,
  EducationRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  EducationTimelineWrapper,
  ImgWrap,
  Img,
} from "./EducationSectionElements";
import EducationTimeline from "./EducationTimeline";
class EducationSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <EducationContainer lightBg={this.props.lightBg} id={this.props.id}>
          <EducationWrapper>
            <EducationRow imgStart={this.props.imgStart}>
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
            </EducationRow>
          </EducationWrapper>
        </EducationContainer>
      </React.Fragment>
    );
  }
}

export default EducationSection;
