import React from "react";
import styled from "styled-components";
import cSvg from "../../../images/technologies/c.svg";
import reactSvg from "../../../images/technologies/react.svg";
import firebaseSvg from "../../../images/technologies/firebase.svg";
import flutterSvg from "../../../images/technologies/flutter.svg";
import javascriptSvg from "../../../images/technologies/javascript.svg";
import pythonSvg from "../../../images/technologies/python.svg";
import tensorflowSvg from "../../../images/technologies/tensorflow.svg";
import { ParallaxLayer } from "@react-spring/parallax";
//import javaSvg from "../../../images/technologies/java.svg";

const TechnologySvgGridWrapper = styled.div``;

const TechnologySvgWrapper = styled.div`
  align-items: center;
  display: block;
  padding: 10px;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 890px) {
    padding: 5px;
  }
`;

const TechnologySvg = styled.img`
  width: 80px;
  height: 80px;
  //margin: ${({ margin = 0 }) => margin};
  transition: all 0.4s ease-in-out;
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
  :hover {
    transform: scale(1.3);
  }
`;

const TechnologySvgGrid = () => {
  return (
    <TechnologySvgGridWrapper>
      <TechnologySvgWrapper>
        <ParallaxLayer
          offset={1}
          speed={0.37}
          style={{
            display: "block",
            marginLeft: "47%",
            marginTop: "0%",
            width: 60,
            height: 60,
          }}
        >
          <TechnologySvg src={tensorflowSvg} margin="30px 0px 0px 20px" />
        </ParallaxLayer>
      </TechnologySvgWrapper>
      <TechnologySvgWrapper>
        <ParallaxLayer
          offset={1}
          speed={0.6}
          style={{
            display: "block",
            marginLeft: "65%",
            marginTop: "32%",
            width: 60,
            height: 60,
          }}
        >
          <TechnologySvg src={firebaseSvg} margin="80px 0px 10px 40px" />
        </ParallaxLayer>
      </TechnologySvgWrapper>
      <TechnologySvgWrapper>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "block",
            marginLeft: "80%",
            marginTop: "12%",
            width: 60,
            height: 60,
          }}
        >
          <TechnologySvg src={flutterSvg} margin="10px 10px 0px 20px" />
        </ParallaxLayer>
      </TechnologySvgWrapper>
      <TechnologySvgWrapper>
        <ParallaxLayer
          offset={1}
          speed={0.4}
          style={{
            display: "block",
            marginLeft: "76%",
            marginTop: "20%",
            width: 60,
            height: 60,
          }}
        >
          <TechnologySvg src={reactSvg} margin="150px 10px 0px 20px" />
        </ParallaxLayer>
      </TechnologySvgWrapper>
      <TechnologySvgWrapper>
        <ParallaxLayer
          offset={1}
          speed={0.4}
          style={{
            display: "block",
            marginLeft: "44%",
            marginTop: "27%",
            width: 60,
            height: 60,
          }}
        >
          <TechnologySvg src={javascriptSvg} margin="0px 10px 0px 50px" />
        </ParallaxLayer>
      </TechnologySvgWrapper>
      <TechnologySvgWrapper>
        <ParallaxLayer
          offset={1}
          speed={0.6}
          style={{
            display: "block",
            marginLeft: "55%",
            marginTop: "40%",
            width: 60,
            height: 60,
          }}
        >
          <TechnologySvg src={pythonSvg} margin="60px 10px 0px 30px" />
        </ParallaxLayer>
      </TechnologySvgWrapper>
      <TechnologySvgWrapper>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "block",
            marginLeft: "65%",
            marginTop: "40%",
            width: 60,
            height: 60,
          }}
        >
          <TechnologySvg src={cSvg} margin="10px 0px 0px 40px" />
        </ParallaxLayer>
      </TechnologySvgWrapper>
    </TechnologySvgGridWrapper>
  );
};

export default TechnologySvgGrid;
