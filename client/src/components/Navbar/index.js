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
                <NavLink to='/userMarker' >
                    My Markers
                </NavLink>
                <NavLink to='/addUserMarkers' >
                    Add Markers
                </NavLink>
                <NavLink to='/editUserMarkers' >
                    Edit Markers
                </NavLink>
                <NavLink to='/map' >
                    Map
                </NavLink>
                {/*
                <NavLink to='/sign-up' >
                    Sign Up
                </NavLink>
                */}
            </NavMenu>
            {/*
            <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
            */}
        </Nav> </>
    );
}
export default Navbar;