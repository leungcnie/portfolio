import React from 'react'
import { Nav, NavLink, Bars, NavMenu, Logo } from './NavBarElements';
import { RiPlantLine } from "react-icons/ri";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <Logo>
            <RiPlantLine />
            <h1>CL</h1>
          </Logo>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default NavBar
