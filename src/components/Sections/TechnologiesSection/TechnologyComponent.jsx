import React from "react";
import styled from "styled-components";

const Technology = styled.div`
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
  width: 100px;
  background-color: teal;
  border-radius: 2px;
`;

const TechnologyComponent = ({ technology }) => {
  return (
    <Technology>
      <TechnologyHeader>{technology}</TechnologyHeader>
      <TechnologyBar></TechnologyBar>
    </Technology>
  );
};

export default TechnologyComponent;
