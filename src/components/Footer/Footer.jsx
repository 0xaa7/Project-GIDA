import React from 'react'
import "./Footer.scss"

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='wrapper'>
        <div className='top'>

          <div className='item'>
            <h1>Categories</h1>
            <span>plants</span>
            <span>Pots</span>
            <span>Media</span>
            <span>Custom Made</span>
            <span>Best sellers</span>
          </div>

          <div className='item'>
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Blogs</span>
            <span>Privacy Policy</span>
            <span>Refund Policy</span>
            <span>Terms and Conditions</span>
            
          </div>
          <div className='item'>
            <h1>About</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </span>
          </div>
          <div className='item'>
            <h1>Contact</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </span>
          </div>
        </div>

        <div className='bottom'>
          <div className="left">
            <span className='logo'>GIDA</span>
            <span className='copyrights'> © Copyright 2023. All Rights Reserved </span>
          </div>
          <div className='right'>
            <img src='images/pngegg.png' alt=''/>
          </div>
        </div>

      </div>
    </div>
  )
}
