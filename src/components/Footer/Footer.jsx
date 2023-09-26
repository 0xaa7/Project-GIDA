import './Footer.scss';

 const Footer = () => {
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
            <span className='b'>
              At GIDA, we have a passion for all things green. Our journey began with a simple idea: to make the joy of gardening and the beauty of nature accessible to everyone. Today, we are proud to be your trusted partner in turning your indoor and outdoor spaces into lush, thriving paradises.
            </span>
          </div>

          <div className='item'>
            <h1>Contact</h1>
            <span className='b'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
          </div>

          <div className='item'>
            <h1>Follow Us On</h1>
            <p>
              Thank you for choosing GIDA. Follow us on social media to stay up-to-date with our latest products and services.
              <div className='social'>
              <img src='../images/social/fb.png' alt='' />
              <img src='../images/social/insta.png' alt='' />
              <img src='../images/social/twitter.png' alt='' />
              </div>
            </p>
          </div>
        </div>

        <div className='bottom'>
          <div className='left'>
            <span className='logo'>GIDA</span>
            <span className='copyrights'>© Copyright 2023. All Rights Reserved</span>
          </div>
          <div className='right'>
            <img src='./images/pngegg.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;