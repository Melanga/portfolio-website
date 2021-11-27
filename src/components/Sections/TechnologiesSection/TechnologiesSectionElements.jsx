import styled from "styled-components";
import { TextWrapper } from "../../Elements/SectionElements";

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

export const TecTextWrapper = styled(TextWrapper)`
  @media screen and (max-width: 480px) {
    padding-bottom: 10px;
  }
`;
