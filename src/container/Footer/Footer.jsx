import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import {FooterOverlay, Newsletter} from '../../components';
import images from '../../constants/images'
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
  <FooterOverlay/>
    <Newsletter/>
    
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Address here, Himachal, India</p>
      <p className="p__opensans">+91 98765 43210</p>
      <p className="p__opensans">+91 88727 58736</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer logo" />
        <p className="p__opensans">"Life is nothing so please die early."</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop: 15}} />
        <div className="app__footer-links_icons">
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday</p>
      <p className="p__opensans">08:00 am - 12:00pm</p>
        <p className="p__opensans">Saturday - Sunday</p>
      <p className="p__opensans">07:00 am - 11:00pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2024 Geritch, Sahil Sharma. All Rights reserved</p>
    </div>
  </div>
);

export default Footer;
