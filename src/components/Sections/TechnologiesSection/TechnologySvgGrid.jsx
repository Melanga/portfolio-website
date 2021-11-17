import React from "react";
import cSvg from "../../../images/technologies/c.svg";
import reactSvg from "../../../images/technologies/react.svg";
import firebaseSvg from "../../../images/technologies/firebase.svg";
import flutterSvg from "../../../images/technologies/flutter.svg";
import javaSvg from "../../../images/technologies/java.svg";
import javascriptSvg from "../../../images/technologies/javascript.svg";
import pythonSvg from "../../../images/technologies/python.svg";
import tensorflowSvg from "../../../images/technologies/tensorflow.svg";
import styled from "styled-components";

const TechnologySvgGridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 10px;
`;

const TechnologySvgWrapper = styled.div`
  padding: 10px;
`;

const TechnologySvg = styled.img`
  width: 80px;
  height: 80px;
  margin: ${({ margin = 0 }) => margin};
  transition: all 0.4s ease-in-out;
  :hover {
    transform: scale(1.3);
  }
`;

const TechnologySvgGrid = () => {
  return (
    <TechnologySvgGridWrapper>
      <TechnologySvgWrapper>
        <TechnologySvg src={tensorflowSvg} margin="30px 10px 0px 0px" />
      </TechnologySvgWrapper>
      <TechnologySvgWrapper>
        <TechnologySvg src={firebaseSvg} margin="80px 0px 10px 40px" />
      </TechnologySvgWrapper>
      <TechnologySvgWrapper>
        <TechnologySvg src={flutterSvg} margin="10px 10px 0px 20px" />
      </TechnologySvgWrapper>
      <TechnologySvgWrapper>
        <TechnologySvg src={reactSvg} margin="150px 10px 0px 20px" />
      </TechnologySvgWrapper>
      <TechnologySvgWrapper>
        <TechnologySvg src={javascriptSvg} margin="0px 10px 0px 50px" />
      </TechnologySvgWrapper>
      <TechnologySvgWrapper>
        <TechnologySvg src={pythonSvg} margin="60px 10px 0px 30px" />
      </TechnologySvgWrapper>
      <TechnologySvgWrapper>
        <TechnologySvg src={cSvg} margin="10px 0px 0px 40px" />
      </TechnologySvgWrapper>
    </TechnologySvgGridWrapper>
  );
};

export default TechnologySvgGrid;
