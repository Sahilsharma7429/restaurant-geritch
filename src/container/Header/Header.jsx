import React from 'react';
import images from '../../constants/images'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The Key to Fine Dine</h1>

      <p style={{margin : '2rem'}} className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
        Cras mattis consectetur purus sit amet fermentum.</p>
<button className='custom__button' type='button'>Explore Menu</button>
      </div>
      <div className='app__wrapper_img'>
<img src={images.welcome} alt='welcome img'/>
      </div>
  </div>
);

export default Header;
