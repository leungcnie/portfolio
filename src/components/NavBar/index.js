import React from 'react'
import { Nav, NavLink, Bars, NavMenu, Logo, NavSocial } from './NavBarElements';
import { RiPlantLine } from "react-icons/ri";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/portfolio">
          <Logo>
            <RiPlantLine />
            <h1>CL</h1>
          </Logo>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/portfolio/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/portfolio/projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/portfolio/contact" activeStyle>
            Contact
          </NavLink>
          <NavSocial href="https://www.linkedin.com/in/connie-leung-0858221b3/">
            <AiFillLinkedin />
          </NavSocial>
          <NavSocial to="https://github.com/leungcnie">
            <AiFillGithub />
          </NavSocial>
        </NavMenu>
      </Nav>
    </>
  )
}

export default NavBar
