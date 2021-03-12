import React, { useState } from 'react'
import { Nav, NavLink, Bars, Close, NavMenu, Logo, NavSocial, RightNavMenu } from './NavBarElements';
import { RiPlantLine } from "react-icons/ri";
import { AiFillLinkedin, AiFillGithub, AiOutlineCloseCircle } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav>
        <NavLink to="/portfolio">
          <Logo>
            <RiPlantLine />
            <h1>CL</h1>
          </Logo>
        </NavLink>
        <Bars onClick={() => setOpen(!open)}/>
        <NavMenu>
          <NavLink to="/portfolio/projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/portfolio/about" activeStyle>
            About
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
        {open && (
          <RightNavMenu>
            <Close onClick={() => setOpen(!open)} />
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
          </RightNavMenu>
        )}
    </>
  )
}

export default NavBar
