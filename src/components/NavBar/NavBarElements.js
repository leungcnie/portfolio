import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background-color: ${props => props.theme.tangerineYellow};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100w - 1000px) / 2);
  z-index: 10;
  font-size: 1.5rem;
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

  &.active {
    color: blue;
  }

  &:hover {
    color: purple;
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

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
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
