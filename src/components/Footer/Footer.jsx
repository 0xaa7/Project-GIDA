import './Footer.scss';

 const Footer = () => {
  return (
    <div className='footer'>
      <div className='wrapper'>
        <div className='top'>

          <div className='item'>
            <h1>Categories</h1>
            <p>plants</p>
            <p>Pots</p>
            <p>Media</p>
            <p>Custom Made</p>
            <p>Best sellers</p>
          </div>
          
          <div className='item'>
            <h1>Links</h1>
            <p>FAQ</p>
            <p>Pages</p>
            <p>Blogs</p>
            <p>Privacy Policy</p>
            <p>Refund Policy</p>
            <p>Terms and Conditions</p>
          </div>

          <div className='item'>
            <h1>About</h1>
            <p className='b'>
              At GIDA, we have a passion for all things green. Our journey began with a simple idea: to make the joy of gardening and the beauty of nature accessible to everyone.
            </p>
          </div>

          <div className='item'>
            <h1>Contact</h1>
             <p>contact : +91 1234567890</p>
             <p>E-mail  : Work.gida@gmail.com</p>
             <p>Address : xyz india 555555</p>
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
            <p className='logo'>GIDA</p>
            <p className='copyrights'>© Copyright 2023. All Rights Reserved</p>
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