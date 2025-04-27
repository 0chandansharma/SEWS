import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Button from '../ui/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Determine if we're on the homepage
  const isHomePage = location.pathname === '/';

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Disable body scroll when menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  // Header classes based on scroll state and page
  const headerClasses = `
    header-modern
    ${isScrolled ? 'header-scrolled' : isHomePage ? 'header-transparent' : 'header-scrolled'}
  `;

  return (
    <>
      <header className={headerClasses}>
        <div className="container-custom flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center z-20"
            aria-label="Shobha Engineering Workshop"
          >
            <img 
              src="/images/logo.svg" 
              alt="Shobha Engineering Workshop Logo" 
              className="h-10 w-auto"
            />
            <div className={`ml-3 transition-colors duration-300 ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`}>
              <h1 className="text-lg font-bold leading-tight">Shobha Engineering</h1>
              <p className="text-xs font-medium opacity-80">Workshop</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Navbar isScrolled={isScrolled} isHomePage={isHomePage} />
            
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+91XXXXXXXXXX" 
                className={`flex items-center transition-colors duration-300 ${
                  isScrolled || !isHomePage ? 'text-gray-900 hover:text-primary-600' : 'text-white hover:text-primary-200'
                }`}
                aria-label="Call us"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">+91 XXXXXXXXXX</span>
              </a>
              <Button 
                to="/contact" 
                variant="gradient"
                size="sm"
              >
                Get Quote
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg focus:outline-none z-20 ${
              isScrolled || !isHomePage || isMobileMenuOpen ? 'text-gray-900' : 'text-white'
            } ${isMobileMenuOpen ? 'bg-gray-100' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0)' }}
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Mobile Menu Backdrop */}
          <div 
            className={`mobile-menu-backdrop ${isMobileMenuOpen ? '' : 'hidden'}`}
            onClick={toggleMobileMenu}
            aria-hidden="true"
          ></div>
          
          {/* Mobile Menu Panel */}
          <div className={`mobile-menu-modern ${isMobileMenuOpen ? '' : 'hidden'}`}>
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <Link to="/" className="flex items-center">
                  <img 
                    src="/images/logo.svg" 
                    alt="Shobha Engineering Workshop Logo" 
                    className="h-10 w-auto"
                  />
                  <div className="ml-3">
                    <h1 className="text-lg font-bold leading-tight">Shobha Engineering</h1>
                    <p className="text-xs font-medium opacity-80">Workshop</p>
                  </div>
                </Link>
                
                <button
                  className="p-2 rounded-lg focus:outline-none text-gray-900 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                  aria-label="Close menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav className="mb-8">
                <ul className="space-y-1">
                  {['Home', 'About', 'Services', 'Equipment', 'Projects', 'Contact'].map((item) => (
                    <li key={item}>
                      <Link
                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                        className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                          location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                            ? 'bg-primary-50 text-primary-700'
                            : 'text-gray-900 hover:bg-gray-50'
                        }`}
                        onClick={toggleMobileMenu}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <div className="mt-auto space-y-4">
                <a 
                  href="tel:+91XXXXXXXXXX" 
                  className="flex items-center px-4 py-3 text-gray-900 hover:text-primary-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium">+91 XXXXXXXXXX</span>
                </a>
                
                <div className="px-4">
                  <Button 
                    to="/contact" 
                    variant="gradient"
                    fullWidth
                  >
                    Get Quote
                  </Button>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mt-4 px-4">
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      aria-label="Facebook"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      aria-label="Twitter"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Spacer for fixed header */}
      <div className={isHomePage ? '' : 'h-20'}></div>
    </>
  );
};

export default Header;