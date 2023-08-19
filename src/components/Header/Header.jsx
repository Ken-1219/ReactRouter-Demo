import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
        <header>
        <nav className='navbar'>
          <a href='/' alt="logo">NavBar</a>
          <ul className='nav-items'>
            <li className="item item-1">
              <NavLink to="/">Home</NavLink>

            </li>
            <li className="item item-2">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="item item-3">
              <NavLink to="/about">About</NavLink>

            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;