// src/Components/Navbar/Navbar.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    <nav>
    <img src={logo} alt="Fpct logo" className='logo' />
    <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="menu-icon" />
    </div>
    <ul className={`${menuOpen ? 'show' : ''}`}>
      <li className='nav-home'><Link to="/">Home</Link></li>

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
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/management">Fpct Top leaders</Link></li>
            <li><Link to="/staff">Fpct Center Management Staff</Link></li>
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
            <li><Link to="/spirituals">Spirituals Services</Link></li>
            <li><Link to="/conferences">Meeting & Events</Link></li>
            <li><Link to="/accomodation">Accomodation</Link></li>            
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
            <li><Link to="/biblestudy">Bible study & materials</Link></li>
            <li><Link to="/sermons">Sermons & notes</Link></li>
            <li><Link to="/gallery">Photos</Link></li>
          </ul>
        )}
      </li>

      <li><Link to="/give">Give</Link></li>
      <li><Link to="/contacts">Book now</Link></li>
    </ul>
  </nav>
  );
};

export default Navbar;