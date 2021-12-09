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

const TechnologySvgGrid = ({ width }) => {
  if (width > 768) {
    return (
      <div>
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
            <TechnologySvg src={tensorflowSvg} />
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
            <TechnologySvg src={firebaseSvg} />
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
            <TechnologySvg src={flutterSvg} />
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
            <TechnologySvg src={reactSvg} />
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
            <TechnologySvg src={javascriptSvg} />
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
            <TechnologySvg src={pythonSvg} />
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
            <TechnologySvg src={cSvg} />
          </ParallaxLayer>
        </TechnologySvgWrapper>
      </div>
    );
  } else {
    return (
      <TechnologySvgGridWrapper>
        <TechnologySvgWrapper>
          <TechnologySvg src={tensorflowSvg} />
        </TechnologySvgWrapper>
        <TechnologySvgWrapper>
          <TechnologySvg src={firebaseSvg} />
        </TechnologySvgWrapper>
        <TechnologySvgWrapper>
          <TechnologySvg src={flutterSvg} />
        </TechnologySvgWrapper>
        <TechnologySvgWrapper>
          <TechnologySvg src={reactSvg} />
        </TechnologySvgWrapper>
        <TechnologySvgWrapper>
          <TechnologySvg src={javascriptSvg} />
        </TechnologySvgWrapper>
        <TechnologySvgWrapper>
          <TechnologySvg src={pythonSvg} />
        </TechnologySvgWrapper>
        <TechnologySvgWrapper>
          <TechnologySvg src={cSvg} />
        </TechnologySvgWrapper>
      </TechnologySvgGridWrapper>
    );
  }
};

export default TechnologySvgGrid;
