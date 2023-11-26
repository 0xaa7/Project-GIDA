import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Squash as Hamburger } from 'hamburger-react'
import './Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='navbar'>
      <div className="wrapper">
       
        <div className='left'>
          <Link className='link' to='/'>
            GIDA
          </Link>
        </div>
        
        <div className={`center ${menuOpen ? 'show-menu' : ''}`}>
          <div className='item'>
            <Link className='link' to='/'>
              Home
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/1'>
              Plants
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/2'>
              Pots
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/3'>
              Best seller
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/contact'>
              Contact
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/about'>
              About Us
            </Link>
          </div>
        </div>

        <div className='right'>
           <div className='icons'>
            <div className="cartIcon">
              <ShoppingCartIcon />
              <span className='noti'>0</span>
            </div>
            <div>
              <SearchIcon />
            </div>
            <span onClick={toggleMenu}>
              <Hamburger size={18}/>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
