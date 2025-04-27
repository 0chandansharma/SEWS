import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';

const AboutPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/about-facility.jpg" 
                alt="Shobha Engineering Workshop Facility" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute bottom-12 -right-6 bg-white rounded-lg shadow-lg p-6 max-w-sm z-20 hidden md:block">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">10,000 sq. ft.</h3>
                  <p className="text-gray-600">Manufacturing Facility</p>
                </div>
              </div>
              <p className="text-gray-600">
                Our expansive workshop is equipped with state-of-the-art machinery for comprehensive metal fabrication services.
              </p>
            </div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary-600 rounded-full hidden md:block"></div>
          </div>
          
          {/* Content Column */}
          <div>
            <Heading
              title="Your Trusted Metal Fabrication Partner in Lucknow"
              subtitle="Shobha Engineering Workshop delivers precision metal fabrication solutions from our 10,000 sq. ft. facility in Lucknow's Industrial Area"
              hasDivider={true}
            />
            
            <div className="mt-6 space-y-6 text-gray-700">
              <p>
                Established with a vision to provide world-class metal fabrication services in Lucknow, Shobha Engineering Workshop has grown into a comprehensive fabrication facility equipped with cutting-edge technology and staffed by skilled professionals.
              </p>
              
              <p>
                Our workshop houses advanced machinery including oxy-gas torches, plasma cutting machines, waterjet cutters, press brakes, roll forming machines, tube bending machines, and CNC systems, enabling us to handle diverse fabrication requirements with precision and efficiency.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <div className="text-primary-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Expert engineering team</p>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Cutting-edge machinery</p>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Comprehensive capabilities</p>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Industry-leading quality</p>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">On-time project delivery</p>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Trusted by major clients</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Button
                  to="/about"
                  variant="primary"
                >
                  About Our Workshop
                </Button>
                <Button
                  to="/equipment"
                  variant="outline"
                >
                  Our Equipment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;