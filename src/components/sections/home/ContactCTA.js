import React from 'react';
import CTA from '../../ui/CTA';

const ContactCTA = () => {
  return (
    <CTA
      title="Ready to Discuss Your Metal Fabrication Needs?"
      subtitle="Contact our engineering team today for expert consultation and solutions"
      buttonText="Get a Quote"
      buttonLink="/contact"
      secondaryButtonText="View Our Services"
      secondaryButtonLink="/services"
      bgColor="gradient"
    />
  );
};

export default ContactCTA;