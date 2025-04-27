import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../ui/Heading';
import ServiceCard from '../../ui/ServiceCard';
import Button from '../../ui/Button';

const ServicesOverview = () => {
  // Sample services data - in a real app, this would come from a CMS or API
  const services = [
    {
      id: 1,
      title: 'Metal Cutting',
      slug: 'metal-cutting',
      description: 'Precision cutting services using oxy-gas torches, plasma, waterjet, and CNC cutting systems for various materials and thicknesses.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0 0L9.121 9.121" />
        </svg>
      ),
      image: '/images/services/cutting.jpg',
    },
    {
      id: 2,
      title: 'Metal Forming & Bending',
      slug: 'metal-forming',
      description: 'Custom metal forming and bending using press brakes, roll forming, and tube bending machines for precise component shaping.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      image: '/images/services/forming.jpg',
    },
    {
      id: 3,
      title: 'Welding Services',
      slug: 'welding',
      description: 'Expert welding services including MIG, TIG, and gas welding for strong, durable, and aesthetic metal joints for various applications.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
      image: '/images/services/welding.jpg',
    },
    {
      id: 4,
      title: 'CNC Machining',
      slug: 'cnc-machining',
      description: 'Precision CNC machining services for complex components with tight tolerances and exceptional surface finish for industrial applications.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      image: '/images/services/cnc.jpg',
    },
    {
      id: 5,
      title: 'Structural Fabrication',
      slug: 'structural-fabrication',
      description: 'Custom structural steel fabrication for industrial, commercial, and specialized applications with engineered precision.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      image: '/images/services/structural.jpg',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <Heading
          title="Our Comprehensive Fabrication Services"
          subtitle="We offer a complete range of metal fabrication services powered by state-of-the-art machinery and decades of expertise"
          align="center"
          hasDivider={true}
          dividerPosition="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              slug={service.slug}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            to="/services"
            variant="primary"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            }
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;