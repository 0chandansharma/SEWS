import React from 'react';
import SEO from '../components/layout/Seo';
import Hero from '../components/ui/Hero';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import CTA from '../components/ui/CTA';

const About = () => {
  // SEO data
  const seoData = {
    title: 'About Shobha Engineering Workshop | Metal Fabrication in Lucknow',
    description: 'Learn about Shobha Engineering Workshop, Lucknow\'s premier metal fabrication facility with 10,000 sq. ft. workshop and cutting-edge equipment for steel, iron, and copper fabrication.',
    canonicalUrl: '/about',
  };

  // Core Values data
  const coreValues = [
    {
      title: 'Technical Excellence',
      description: 'Pursuing the highest standards of engineering and fabrication expertise in everything we do.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Quality Commitment',
      description: 'Ensuring exceptional quality in every component we produce through rigorous standards and processes.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: 'Customer Focus',
      description: 'Placing client needs and satisfaction at the center of our operations and decision-making.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Innovation',
      description: 'Continuously improving our processes, techniques, and capabilities to deliver better solutions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Reliability',
      description: 'Building trust through consistent performance, clear communication, and timely delivery.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Integrity',
      description: 'Conducting business with honesty, transparency, and ethical practices in all relationships.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
  ];

  // Team Members data
  const teamMembers = [
    {
      name: 'Rajesh Sharma',
      position: 'Managing Director',
      bio: 'With over 25 years of experience in the metal fabrication industry, Rajesh leads our team with expertise and vision.',
      image: '/images/team/director.jpg',
    },
    {
      name: 'Amit Kumar',
      position: 'Engineering Manager',
      bio: 'Amit oversees our engineering department, ensuring precision and quality in every project we undertake.',
      image: '/images/team/engineer.jpg',
    },
    {
      name: 'Priya Singh',
      position: 'Production Manager',
      bio: 'Priya manages our production workflow, optimizing processes for efficiency and timely delivery.',
      image: '/images/team/production.jpg',
    },
    {
      name: 'Vikram Patel',
      position: 'Quality Control Specialist',
      bio: 'Vikram ensures that all our fabrications meet the highest standards of quality and precision.',
      image: '/images/team/quality.jpg',
    },
  ];

  // Major clients
  const clients = [
    { name: 'PTC Industries', logo: '/images/clients/ptc.png' },
    { name: 'Parag Industries', logo: '/images/clients/parag.png' },
    { name: 'Indian Railway', logo: '/images/clients/railway.png' },
    { name: 'Chemical Plants', logo: '/images/clients/chemical.png' },
  ];

  return (
    <>
      <SEO {...seoData} />
      
      {/* Hero Section */}
      <Hero
        title="About Shobha Engineering Workshop"
        subtitle="Your trusted metal fabrication partner in Lucknow since [Establishment Year]"
        backgroundImage="/images/about-hero-bg.jpg"
        height="md"
      />
      
      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading
                title="Our Journey"
                subtitle="From humble beginnings to Lucknow's premier metal fabrication facility"
                hasDivider={true}
              />
              
              <div className="mt-6 space-y-6 text-gray-700">
                <p>
                  Established with a vision to provide world-class metal fabrication services in Lucknow, Shobha Engineering Workshop has grown from humble beginnings into a comprehensive fabrication facility equipped with cutting-edge technology and staffed by skilled professionals.
                </p>
                
                <p>
                  Our founder's dedication to quality craftsmanship and technical precision laid the foundation for what has become one of Lucknow's most trusted engineering workshops. Through consistent investment in advanced machinery and skilled personnel, we have expanded our capabilities while maintaining our commitment to excellence.
                </p>
                
                <p>
                  Today, our 10,000 sq. ft. facility in Lucknow's Industrial Area stands as a testament to our growth and dedication. Equipped with state-of-the-art machinery including oxy-gas torches, plasma cutting machines, waterjet cutters, press brakes, roll forming machines, tube bending machines, and CNC systems, we provide comprehensive metal fabrication solutions to industries across Uttar Pradesh and beyond.
                </p>
                
                <p>
                  Our partnerships with major clients like PTC Industries, Parag Industries, and Indian Railway reflect our reputation for quality, reliability, and technical expertise in the metal fabrication industry.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/about-facility.jpg" 
                alt="Shobha Engineering Workshop Facility" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-600 rounded-full z-[-1] hidden md:block"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-600 rounded-lg z-[-1] hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
              <div className="text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg">
                To deliver precision-engineered metal fabrication solutions that meet the highest standards of quality, durability, and functionality while exceeding our clients' expectations through technical expertise and innovative approaches.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
              <div className="text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg">
                To be recognized as the most reliable and technically advanced metal fabrication workshop in Uttar Pradesh, known for our commitment to quality, customer satisfaction, and engineering excellence in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <Heading
            title="Our Core Values"
            subtitle="The principles that guide our operations and relationships"
            align="center"
            hasDivider={true}
            dividerPosition="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary-600"
              >
                <div className="text-primary-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Facility Section */}
      <section id="facility" className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <Heading
            title="Our 10,000 sq. ft. Facility"
            subtitle="Equipped with state-of-the-art machinery for comprehensive metal fabrication"
            align="center"
            hasDivider={true}
            dividerPosition="center"
          />
          
          <div className="mt-12">
            <div className="relative">
              <img 
                src="/images/facility-panorama.jpg" 
                alt="Shobha Engineering Workshop Facility Panorama" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {/* Facility Feature 1 */}
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-1">Strategic Location</h3>
                  <p className="text-gray-600">
                    Situated in Lucknow's Industrial Area with easy access for material delivery and product distribution.
                  </p>
                </div>
              </div>
              
              {/* Facility Feature 2 */}
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-1">Advanced Equipment</h3>
                  <p className="text-gray-600">
                    Cutting-edge machinery for cutting, forming, welding, and CNC machining operations.
                  </p>
                </div>
              </div>
              
              {/* Facility Feature 3 */}
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-1">Optimized Workflow</h3>
                  <p className="text-gray-600">
                    Strategically designed layout for efficient material flow through fabrication processes.
                  </p>
                </div>
              </div>
              
              {/* Facility Feature 4 */}
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-1">Quality Control Area</h3>
                  <p className="text-gray-600">
                    Dedicated space for quality inspection and testing of fabricated components.
                  </p>
                </div>
              </div>
              
              {/* Facility Feature 5 */}
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-1">Design Office</h3>
                  <p className="text-gray-600">
                    Technical design and engineering team for project planning and consultation.
                  </p>
                </div>
              </div>
              
              {/* Facility Feature 6 */}
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-1">Material Storage</h3>
                  <p className="text-gray-600">
                    Organized inventory of raw materials for immediate production availability.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button
                to="/equipment"
                variant="primary"
              >
                Explore Our Equipment
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section id="team" className="py-16 md:py-24">
        <div className="container-custom">
          <Heading
            title="Meet Our Team"
            subtitle="Skilled professionals dedicated to excellence in metal fabrication"
            align="center"
            hasDivider={true}
            dividerPosition="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section id="clients" className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <Heading
            title="Our Trusted Clients"
            subtitle="Partnerships built on quality, reliability, and excellence"
            align="center"
            hasDivider={true}
            dividerPosition="center"
          />
          
          <div className="mt-12">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                >
                  {/* In a real implementation, this would be the client's logo */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-700">{client.name}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Industry Partnerships</h3>
              <p className="text-gray-700">
                Our long-standing relationships with major clients like PTC Industries, Parag Industries, Indian Railway, and various chemical processing plants reflect our commitment to quality, reliability, and customer satisfaction. We take pride in being the trusted metal fabrication partner for industry leaders across Uttar Pradesh and beyond.
              </p>
              <p className="text-gray-700 mt-4">
                Whether working with established corporations or emerging businesses, we bring the same level of dedication, expertise, and precision to every project, fostering partnerships that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA
        title="Ready to Partner With Shobha Engineering Workshop?"
        subtitle="Contact our team today to discuss your metal fabrication needs"
        buttonText="Contact Us"
        buttonLink="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonLink="/services"
        bgColor="primary"
      />
    </>
  );
};

export default About;