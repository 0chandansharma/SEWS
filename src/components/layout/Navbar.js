import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = ({ isScrolled, isHomePage }) => {
  const location = useLocation();

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Equipment', path: '/equipment' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  // Conditional text color based on scroll state and page
  const textColor = isScrolled || !isHomePage 
    ? 'text-gray-800 hover:text-primary-600' 
    : 'text-white hover:text-primary-200';

  return (
    <nav>
      <ul className="flex space-x-8">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) => 
                `nav-link-modern ${
                  isActive ? 'active' : ''
                } ${textColor}`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;