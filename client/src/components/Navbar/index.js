import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements'


const Navbar = () => {
    return (
        <> <Nav>
            <Bars />
            <NavMenu>
                <NavLink to='/' >
                    Home
                </NavLink>
                <NavLink to='/data' >
                    Data
                </NavLink>
                <NavLink to='/map' >
                    Map
                </NavLink>
                <NavLink to='/sign-up' >
                    Sign Up
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
        </Nav> </>
    );
}
export default Navbar;