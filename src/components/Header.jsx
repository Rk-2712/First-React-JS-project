import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaRss, 
  FaYoutube, 
  FaChevronDown, 
  FaBars, 
  FaTimes 
} from 'react-icons/fa';
import logo from '../assets/images/logo.jpg';
import '../App.css';

// Custom SVG X/Twitter Icon for consistency
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const scrollContainer = document.body;
    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop || window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 45) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    scrollContainer.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set correct state
    handleScroll();
    
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileDropdown = (index) => {
    if (activeMobileDropdown === index) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(index);
    }
  };

  // Reverted back to the website's original routes and menu items
  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    {
      name: 'Courses',
      link: '/courses',
      dropdown: [
        { name: 'Course Detail', link: '/course-detail' },
        { name: 'Courses Small', link: '/courses-small' },
        { name: 'Our Courses List', link: '/our-courses-list' },
        { name: 'Our Courses', link: '/courses' },
      ]
    },
    {
      name: 'Blog',
      link: '/blog',
      dropdown: [
        { name: 'Blog Large', link: '/blog' },
        { name: 'Blog Medium', link: '/blog-medium' },
        { name: 'Blog Small', link: '/blog-small' },
        { name: 'Blog Detail', link: '/blog-detail' },
      ]
    },
    {
      name: 'Event',
      link: '/events',
      dropdown: [
        { name: 'Event Detail', link: '/event-detail' },
        { name: 'Event Calendar', link: '/events' },
      ]
    },
    {
      name: 'Staff',
      link: '/staff',
      dropdown: [
        { name: 'Our Staff', link: '/staff' },
        { name: 'Staff Detail', link: '/staff-detail' },
      ]
    },
    {
      name: 'Gallery',
      link: '/gallery',
      dropdown: [
        { name: 'Gallery Medium', link: '/gallery-medium' },
        { name: 'Gallery Small', link: '/gallery-small' },
        { name: 'Masonry Gallery', link: '/gallery' },
      ]
    },
    {
      name: 'Contact',
      link: '/contact',
      dropdown: [
        { name: 'Contact Us', link: '/contact' },
        { name: 'Contact List', link: '/contact-list' }
      ]
    }
  ];

  // Helper function to check if a menu path is currently active
  const isPathActive = (item) => {
    if (location.pathname === item.link) {
      return true;
    }
    if (item.dropdown) {
      return item.dropdown.some(subItem => location.pathname === subItem.link);
    }
    return false;
  };

  return (
    <header className={`adg-header ${isSticky ? 'sticky' : ''}`}>
      {/* LEVEL 1: TOP BAR (NAVY BLUE) */}
      <div className="adg-top-bar-wrapper">
        <div className="adg-container-fluid adg-top-bar">
          <Link to="/contact" className="adg-top-btn">
            Admission Enquiry
          </Link>
          <Link to="/about" className="adg-top-btn">
            Alumni Portal
          </Link>
          <div className="adg-social-container">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="adg-social-icon" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="adg-social-icon" aria-label="X (Twitter)">
              <XIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="adg-social-icon" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://rss.com" target="_blank" rel="noopener noreferrer" className="adg-social-icon" aria-label="RSS Feed">
              <FaRss />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="adg-social-icon" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* LEVEL 2: MIDDLE BAR (WHITE LOGO AREA) */}
      <div className="adg-middle-bar-wrapper">
        <div className="adg-container-fluid adg-middle-bar">
          <div className="adg-logo-left">
            <Link to="/" className="adg-logo-link">
              <img src={logo} alt="University Logo" className="adg-logo-img" />
            </Link>
          </div>
          
          {/* Dynamic header contact details styled in a premium block */}
          <div className="adg-contact-right">
            <div className="adg-contact-info-item">
              <span className="adg-contact-label">Call us</span>
              <span className="adg-contact-value">+01 123 456</span>
            </div>
            <div className="adg-contact-info-item">
              <span className="adg-contact-label">Email us</span>
              <span className="adg-contact-value">info@info.com</span>
            </div>
            <div className="adg-contact-info-item">
              <span className="adg-contact-label">Timings</span>
              <span className="adg-contact-value">Mon - Sat : 09:00 - 17:30</span>
            </div>
          </div>
        </div>
      </div>

      {/* LEVEL 3: BOTTOM NAVIGATION (MAROON THEME) */}
      <nav className="adg-nav-bar">
        <div className="adg-container-fluid adg-nav-container">
          <button className="adg-mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          <ul className={`adg-nav-list ${isMobileMenuOpen ? 'active' : ''}`}>
            {menuItems.map((item, index) => {
              const active = isPathActive(item);
              return (
                <li 
                  key={index} 
                  className={`adg-nav-item ${active ? 'active' : ''} ${activeMobileDropdown === index ? 'mobile-active' : ''}`}
                >
                  {item.dropdown ? (
                    <>
                      <button 
                        className="adg-nav-link" 
                        onClick={() => handleMobileDropdown(index)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}
                      >
                        {item.name}
                        <FaChevronDown className="adg-chevron" />
                      </button>
                      <ul className="adg-dropdown">
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex} className="adg-dropdown-item">
                            <Link to={subItem.link} className="adg-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link to={item.link} className="adg-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}