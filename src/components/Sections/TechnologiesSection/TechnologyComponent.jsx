import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const Technology = styled.div`
  width: 120px;
  padding: 10px;
  margin: 20px 0px 40px;
  //background-color: red;
  align-items: center;
  @media screen and (max-width: 480px) {
    margin: 5px 0px 10px;
  }
`;

const TechnologyHeader = styled.p`
  margin-bottom: 4px;
  font-size: 1rem;
  font-weight: bold;
`;

const TechnologyBar = styled.div`
  height: 4px;
  //width: 100px;
  background-color: teal;
  border-radius: 2px;
`;

const TechnologyComponent = ({ inView, timeDelay, technology }) => {
  let contentProps = useSpring({
    opacity: inView ? 1 : 0,
    width: inView ? "100px" : "0px",
    delay: timeDelay,
    config: config.slow,
  });
  let headerAnimationProps = useSpring({
    opacity: inView ? 1 : 0,
    //width: inView ? "100px" : "0px",
    delay: timeDelay,
    config: config.slow,
  });

  return (
    <Technology>
      <animated.div style={headerAnimationProps}>
        <TechnologyHeader>{technology}</TechnologyHeader>
      </animated.div>
      <animated.div style={contentProps}>
        <TechnologyBar></TechnologyBar>
      </animated.div>
    </Technology>
  );
};

export default TechnologyComponent;
