import styled from "styled-components";
import { SectionRow } from "../Sections/SectionElements";

export const ContactFormWrapper = styled.div`
  position: relative;

  display: grid;
  grid-template-areas: "name email" "message message";
  @media screen and (max-width: 480px) {
    grid-template-areas: "name" "email" "message";
  }
`;

export const ContactDetailsWrapper = styled.div`
  margin-top: 8rem;
  flex: content;
  justify-content: flex-start;

  @media screen and (max-width: 480px) {
    margin-top: 2rem;
  }
`;

export const ContactDetail = styled.p`
  color: #fff;
  padding: 4px;
  font-size: 1rem;
`;

export const SubLine = styled.p`
  color: #01bf71;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;
export const FormSectionRow = styled(SectionRow)`
  margin-top: 16rem;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    margin-top: 4rem;
  }
  @media screen and (max-width: 480px) {
    margin-top: 0;
  }
`;
const InputContainer = styled.div`
  margin-bottom: 15px;
  margin-top: 4rem;
  @media screen and (max-width: 480px) {
    margin-top: 1rem;
  }
  /* border-bottom: 4;
  border-bottom-style: solid;
  border-color: snow; */
`;
export const NameContainer = styled(InputContainer)`
  margin-right: 20px;
  grid-area: name;
`;

export const EmailContainer = styled(InputContainer)`
  grid-area: email;
`;

export const MessageContainer = styled(InputContainer)`
  grid-area: message;
  margin-top: 2rem;
`;

export const InputM = styled.input`
  padding: 5px;
  width: 100%;
  color: #fff;
  font-size: 1rem;
  outline: 0;
  border-width: 0 0 2px;
  border-color: snow;
  background-color: #010606;
  ::placeholder {
    color: bbbbbb;
    font-size: 1rem;
  }
  :focus {
    outline: none;
    border-color: #01bf71;
    background-color: #ffffff1a;
  }
`;

export const MessageInput = styled.textarea`
  padding: 5px;
  width: 100%;
  color: #fff;
  font-size: 1rem;
  outline: 0;
  border-width: 0 0 2px;
  border-color: snow;
  background-color: #010606;
  ::placeholder {
    color: bbbbbb;
    font-size: 1rem;
  }
  :focus {
    outline: none;
    border-color: #01bf71;
    background-color: #ffffff1a;
  }
`;
