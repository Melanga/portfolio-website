import styled from "styled-components";

export const TechnologiesWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  padding: 10px;
  @media screen and (max-width: 960px) {
    grid-template-columns: auto auto auto;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: auto auto;
  }
`;
