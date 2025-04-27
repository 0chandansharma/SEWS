import React from 'react';
import Hero from '../../ui/Hero';

const HeroSection = () => {
  return (
    <Hero
      title="Precision Metal Fabrication & Engineering Solutions"
      subtitle="Your Trusted Partner for Steel, Iron, and Copper Fabrication in Lucknow"
      buttonText="Explore Our Services"
      buttonLink="/services"
      secondaryButtonText="Contact Us"
      secondaryButtonLink="/contact"
      backgroundImage="/images/hero-bg.jpg"
      height="full"
      animated={true}
    />
  );
};

export default HeroSection;