import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logos.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    services: false,
    about: false,
    resource: false,

  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = (menu) => {
    setIsDropdownOpen(prevState => ({
      ...prevState,
      [menu]: !prevState[menu]
    }));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav >
      <img src={logo} alt="Fpct logo" className='logo'/>
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="menu-icon" />
      </div>
      <ul className={`${menuOpen ? 'show' : ''}`}>
        <li>Home</li>
        <li 
          onMouseEnter={() => toggleDropdown('about')} 
          onMouseLeave={() => toggleDropdown('about')}
        >
          About
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`chevron ${isDropdownOpen.about ? 'rotate' : ''}`} 
          />
          {isDropdownOpen.about && (
            <ul className="dropdown">
              <li>About Us</li>
              <li>Board</li>
              <li>Management</li>
              <li>Senior Leaders</li>
              <li>Workers</li>
            </ul>
          )}
        </li>
        <li 
          onMouseEnter={() => toggleDropdown('services')} 
          onMouseLeave={() => toggleDropdown('services')}
        >
          Services
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`chevron ${isDropdownOpen.services ? 'rotate' : ''}`} 
          />
          {isDropdownOpen.services && (
            <ul className="dropdown">
              <li>Spiritual Services</li>
              <li>Conferences</li>
              <li>Seminars</li>
              <li>Workshops</li>
            </ul>
          )}
        </li>
        <li 
          onMouseEnter={() => toggleDropdown('resource')} 
          onMouseLeave={() => toggleDropdown('resource')}
        >
          Resources
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`chevron ${isDropdownOpen.resource ? 'rotate' : ''}`} 
          />
          {isDropdownOpen.resource && (
            <ul className="dropdown">
              <li>Bible study & materials  </li>
              <li>-	Sermons & notes</li>
              <li>Seminars</li>
              <li>	Photo galleys </li>
            </ul>
          )}
        </li>
        <li>Booking</li>
        <li>News & Updates</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
