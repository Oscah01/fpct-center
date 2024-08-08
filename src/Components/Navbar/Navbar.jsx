import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logos.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars, faTimes, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    services: false,
    resource: false,
    languages: false,
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

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
    <nav className={sticky ? 'sticky' : ''}>
      <img src={logo} alt="Fpct logo" className='logo' />
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="menu-icon" />
      </div>
      <ul className={`${menuOpen ? 'show' : ''}`}>
        <li>
          <NavLink exact to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
            About Us
          </NavLink>
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
              <li><NavLink to="/spirituals" className={({ isActive }) => isActive ? "active-link" : ""}>Spiritual Services</NavLink></li>
              <li><NavLink to="/conferences" className={({ isActive }) => isActive ? "active-link" : ""}>Conferences</NavLink></li>
              <li><NavLink to="/seminars" className={({ isActive }) => isActive ? "active-link" : ""}>Seminars</NavLink></li>
              <li><NavLink to="/parking" className={({ isActive }) => isActive ? "active-link" : ""}>Parking & Transport</NavLink></li>
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
              <li><NavLink to="/biblestudy" className={({ isActive }) => isActive ? "active-link" : ""}>Bible study & materials</NavLink></li>
              <li><NavLink to="/sermons" className={({ isActive }) => isActive ? "active-link" : ""}>Sermons & notes</NavLink></li>
              <li><NavLink to="/gallery" className={({ isActive }) => isActive ? "active-link" : ""}>Photos</NavLink></li>
            </ul>
          )}
        </li>
        <li><NavLink to="/Management" className={({ isActive }) => isActive ? "active-link" : ""}>Management</NavLink></li>
        <li><NavLink to="/Booking" className={({ isActive }) => isActive ? "active-link" : ""}>Booking</NavLink></li>
        <li><NavLink to="/contacts" className={({ isActive }) => isActive ? "active-link" : ""}>Contact us</NavLink></li>

        <li 
          onMouseEnter={() => toggleDropdown('languages')} 
          onMouseLeave={() => toggleDropdown('languages')}
        >
          <FontAwesomeIcon icon={faGlobe}  className='lang'/>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`chevron ${isDropdownOpen.languages ? 'rotate' : ''}`} 
          />
          {isDropdownOpen.languages && (
            <ul className="dropdown">
              <li><NavLink to="/en" className={({ isActive }) => isActive ? "active-link" : ""}><span className="flag-icon flag-icon-us"></span> English</NavLink></li>
              <li><NavLink to="/sw" className={({ isActive }) => isActive ? "active-link" : ""}><span className="flag-icon flag-icon-us"></span> Kiswahili</NavLink></li>
              <li><NavLink to="/es" className={({ isActive }) => isActive ? "active-link" : ""}><span className="flag-icon flag-icon-es"></span> Spanish</NavLink></li>
              <li><NavLink to="/fr" className={({ isActive }) => isActive ? "active-link" : ""}><span className="flag-icon flag-icon-fr"></span> French</NavLink></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
