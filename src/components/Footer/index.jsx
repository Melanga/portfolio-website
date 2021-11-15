import React from "react";
import {
  SectionContainer,
  SectionWrapper,
  Column1,
  Column2,
  TextWrapper,
  Heading,
} from "../Sections/SectionElements";
import {
  ContactDetail,
  ContactDetailsWrapper,
  ContactFormWrapper,
  EmailContainer,
  InputM,
  MessageContainer,
  NameContainer,
  SubLine,
  FormSectionRow,
  MessageInput,
} from "./FooterElements";

const Footer = () => {
  return (
    <SectionContainer lightBg={false} id={"footer"}>
      <SectionWrapper>
        <FormSectionRow imgStart={false}>
          <Column1>
            <TextWrapper>
              <Heading lightText={true}>{"Contact Me"}</Heading>
              <SubLine>{"Ask anything or just say Hi!"}</SubLine>
              <ContactDetailsWrapper>
                <ContactDetail>Email : dissanayakedmmb@gmail.com</ContactDetail>
                <ContactDetail>No : +94 779 860 940</ContactDetail>
              </ContactDetailsWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ContactFormWrapper>
              <NameContainer>
                <InputM placeholder="Name" />
              </NameContainer>
              <EmailContainer>
                <InputM placeholder="Email" />
              </EmailContainer>
              <MessageContainer>
                <MessageInput placeholder="Your Message" rows="5" />
              </MessageContainer>
            </ContactFormWrapper>
          </Column2>
        </FormSectionRow>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Footer;
