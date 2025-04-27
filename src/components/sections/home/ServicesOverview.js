import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../ui/Heading';
import ServiceCard from '../../ui/ServiceCard';
import Button from '../../ui/Button';
import services from '../../data/services';

const ServicesOverview = () => {
  // Sample services data - in a real app, this would come from a CMS or API  

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