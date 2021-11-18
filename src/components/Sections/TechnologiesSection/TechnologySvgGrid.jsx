import React from "react";
import styled from "styled-components";
import cSvg from "../../../images/technologies/c.svg";
import reactSvg from "../../../images/technologies/react.svg";
import firebaseSvg from "../../../images/technologies/firebase.svg";
import flutterSvg from "../../../images/technologies/flutter.svg";
import javascriptSvg from "../../../images/technologies/javascript.svg";
import pythonSvg from "../../../images/technologies/python.svg";
import tensorflowSvg from "../../../images/technologies/tensorflow.svg";
//import javaSvg from "../../../images/technologies/java.svg";

const TechnologySvgGridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 10px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: auto auto auto;
  }
`;

const TechnologySvgWrapper = styled.div`
  align-items: center;
  padding: 10px;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 890px) {
    padding: 5px;
  }
  :hover {
    transform: scale(1.3);
  }
`;

const TechnologySvg = styled.img`
  width: 80px;
  height: 80px;
  margin: ${({ margin = 0 }) => margin};
  @media screen and (max-width: 1200px) {
    margin: 10px;
    width: 60px;
    height: 60px;
  }
  @media screen and (max-width: 480px) {
    margin: 10px;
    width: 50px;
    height: 50px;
  }
`;

const TechnologySvgGrid = () => {
  return (
    <TechnologySvgGridWrapper>
      <TechnologySvgWrapper>
        <TechnologySvg src={tensorflowSvg} margin="30px 0px 0px 20px" />
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
