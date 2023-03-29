import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavBarElements';
const NavBar = () => {
  return (
    <Nav>
        <NavLink to='/'>
        Logo
        </NavLink>
        <Bars/>
        <NavMenu>
            <NavLink to='/about' activestyle>About</NavLink>
        </NavMenu>
        <NavMenu>
            <NavLink to='/service' activestyle>Services</NavLink>
        </NavMenu>
        <NavMenu>
            <NavLink to='/contact' activestyle>Contact</NavLink>
        </NavMenu>
        <NavMenu>
            <NavLink to='/sign-in' activestyle>Sign In</NavLink>
        </NavMenu>
<NavBtn>
    <NavBtnLink to ='sign-in'>Sign-In</NavBtnLink>
</NavBtn>
    </Nav>
   
  )
}

export default NavBar
