import React from 'react';
import images from '../../constants/images'
import './Chef.css';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding' id='chef'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />

    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Words"/>
      <h1 className='headtext__cormorant'>What we Believe in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
     <img src={images.quote} alt="chef_quote"  />
     <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
        </div>
        <p className='p__opensans'>Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
      Cum sociis natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus.</p>
        </div>
        <div className='app__chef-sign'>
          <p >Chef Vicky</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt='chef_sign' />
          </div>

        </div>
    </div>

);

export default Chef;
