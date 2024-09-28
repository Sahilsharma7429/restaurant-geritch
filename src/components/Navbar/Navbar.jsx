import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import images from '../../constants/images'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdRestaurantMenu } from 'react-icons/md';

const Navbar = () => {
  const [togglemenu, settogglemenu] = useState(false)
  return (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt= "app logo"/>
    </div>
    <ul className="app__navbar-links">
      <li className='p__opensans'><a href='#home'>Home</a></li>
      <li className='p__opensans'><a href='#about'>About</a></li>
      <li className='p__opensans'><a href='#menu'>Menu</a></li>
      <li className='p__opensans'><a href='#awards'>Awards</a></li>
      <li className='p__opensans'><a href='#contact'>Contact</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href='#login' className='p__opensans'>Login /Register</a>
      <div />
      <a href='/' className='p__opensans'>Book a Table</a>
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>settogglemenu(true)} />
        {togglemenu &&(
<div className='app__navbar-smallscreen-overlay flex__center slide-bottom'>
  <MdRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>settogglemenu(false)}/>
  <ul className="app__navbar-smallscreen-links">
      <li className='p__opensans'><a onClick={()=>settogglemenu(false)} href='#home'>Home</a></li>
      <li className='p__opensans'><a onClick={()=>settogglemenu(false)} href='#about'>About</a></li>
      <li className='p__opensans'><a onClick={()=>settogglemenu(false)} href='#menu'>Menu</a></li>
      <li className='p__opensans'><a onClick={()=>settogglemenu(false)} href='#awards'>Awards</a></li>
      <li className='p__opensans'><a onClick={()=>settogglemenu(false)} href='#contact'>Contact</a></li>
    </ul>
</div>
)}
    </div>
        
  </nav>
);
}
export default Navbar;
