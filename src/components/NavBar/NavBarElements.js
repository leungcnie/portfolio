import styled, { keyframes } from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Nav = styled.nav`
  background-color: ${props => props.theme.tangerineYellow};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100w - 1000px) / 2);
  z-index: 10;
  font-size: 1.5rem;
  font-family: 'Fredoka One', sans-serif;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 1rem;
  padding: 0;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

export const NavSocial = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 1rem;
  padding: 0;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Close = styled(AiOutlineCloseCircle)`
  color: #fff;
  cursor: pointer;
  font-size: 10rem;

  &:hover {
    color: #000;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(5rem);
  }
  100% {
    transform: translateX(0);
  }
`;

export const RightNavMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-even;
  background-color: #143d32;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 3rem;
  height: 100%;
  animation: 150ms ${slideIn} ease-out;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.div`
  color: white;
  font-family: 'Fredoka One', san-serif;
  display: flex;
  align-items: inherit;
  font-size: 2rem;
`;