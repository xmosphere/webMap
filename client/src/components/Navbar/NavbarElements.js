import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import { FaBars } from 'react-icons/fa'
import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';

var color1 = "#1565C0";
var color2 = "#808080";
var color3 = "#63A071";
var NavHeight = "85px";



export const Nav = styled.nav`
    background: ${color1};
    height: ${NavHeight};
    font-family: 'Roboto';font-size: 22px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) /2);
    z-index: 12;
`;

export const NavLink = styled(Link)`
    color: '#dddddd'};
    text
    display: flex;
    align-items left;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%
    cursor: pointer;
    &.active {
      color: ${color2};
    }
    NavLink.hover {
      background-color: ${color2};
      transition: 0.2s;
    }
  `;
    
  export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
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
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
    white-space: nowrap; */
    @media screen and (max-width: 768px) {
      display: none;
    }
  `;
    
  export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    /* Third Nav */
    /* justify-content: flex-end;
    width: 100vw; */
    @media screen and (max-width: 768px) {
      display: none;
    }
  `;
    
  export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #808080;
    padding: 10px 22px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 24px;
    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${color2};
      color: #808080;
    }
  `;
