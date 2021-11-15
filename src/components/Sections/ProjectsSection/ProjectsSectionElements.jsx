import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;
export const ProjectsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const ProjectCardWrapper = styled.div`
  background: #fff;
  display: flex;
  height: 400px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-height: 400px;
  padding: 30px;
  margin: 1rem;
  box-shadow: 1px 4px 20px rgba(0, 0, 0, 0.2);
  /* transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  } */

  @media screen and (max-width: 480px) {
    height: 340px;
  }
`;
export const ProjectIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
export const ProjectsTitle = styled.div`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ProjectHeading = styled.h2`
  text-align: center;
  font-size: 1rem;
  margin-bottom: 10px;
`;
export const ProjectDescription = styled.p`
  font-size: 1rem;
  text-align: center;
`;
