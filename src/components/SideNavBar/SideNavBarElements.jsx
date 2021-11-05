import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SideNavBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SideNavBarWrapper = styled.div`
  color: #fff;
`;

export const SideNavBarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SideNavBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SideNavBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SideNavBtn = styled(LinkR)`
  border-radius: 50px;
  color: #000;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: #fff;
    color: #010606;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
  }
`;
