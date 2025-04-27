import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/layout/Seo';
import Button from '../components/ui/Button';

const NotFound = () => {
  // SEO data
  const seoData = {
    title: 'Page Not Found | Shobha Engineering Workshop',
    description: 'The page you are looking for does not exist. Return to Shobha Engineering Workshop homepage.',
    canonicalUrl: '/404',
  };

  return (
    <>
      <SEO {...seoData} />
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-24">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-primary-600 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
            
            <p className="text-xl text-gray-600 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                to="/"
                variant="primary"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                }
                iconPosition="left"
              >
                Return to Homepage
              </Button>
              
              <Button
                to="/contact"
                variant="outline"
              >
                Contact Us
              </Button>
            </div>
            
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-bold mb-4">Looking for something specific?</h3>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Link to="/services" className="text-primary-600 hover:text-primary-800 font-medium">
                  Services
                </Link>
                <Link to="/about" className="text-primary-600 hover:text-primary-800 font-medium">
                  About Us
                </Link>
                <Link to="/equipment" className="text-primary-600 hover:text-primary-800 font-medium">
                  Equipment
                </Link>
                <Link to="/projects" className="text-primary-600 hover:text-primary-800 font-medium">
                  Projects
                </Link>
                <Link to="/contact" className="text-primary-600 hover:text-primary-800 font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;