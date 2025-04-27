import React from 'react';
import SEO from '../components/layout/Seo';
import Hero from '../components/ui/Hero';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ServiceCard from '../components/ui/ServiceCard';
import CTA from '../components/ui/CTA';
import ContactForm from '../components/ui/ContactForm';

const Home = () => {
  // SEO data
  const seoData = {
    title: 'Shobha Engineering Workshop - Metal Fabrication & Engineering Solutions in Lucknow',
    description: 'Premier metal fabrication & engineering solutions in Lucknow. Specializing in steel, iron, and copper fabrication with a 10,000 sq. ft. facility equipped with cutting-edge machinery.',
    canonicalUrl: '/',
  };

  // Sample services for display
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
  ];

  // Client testimonials
  const testimonials = [
    {
      id: 1,
      text: "Shobha Engineering Workshop delivered exceptional quality for our equipment fabrication needs. Their precision engineering and attention to detail resulted in components that exceeded our specifications.",
      author: "Rajesh Kumar",
      company: "PTC Industries",
      position: "Production Manager"
    },
    {
      id: 2,
      text: "Working with Shobha Engineering Workshop on our structural fabrication project was a seamless experience. Their team's expertise and state-of-the-art equipment ensured on-time delivery with outstanding quality.",
      author: "Sunita Sharma",
      company: "Parag Industries",
      position: "Project Director"
    }
  ];

  return (
    <>
      <SEO {...seoData} />
      
      {/* Hero Section */}
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
      
      {/* Services Overview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-in-element">
            <h2 className="text-4xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-24 after:h-1 after:bg-primary-500 after:rounded-full after:-translate-x-1/2 after:mb-[-0.5rem]">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 mt-6">
              We offer a complete range of metal fabrication solutions powered by state-of-the-art machinery and decades of expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                className="slide-up-element" 
                style={{animationDelay: `${index * 0.2 + 0.3}s`}} 
                key={service.id}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  image={service.image}
                  slug={service.slug}
                  variant="gradient"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 slide-up-element" style={{animationDelay: '0.9s'}}>
            <Button
              to="/services"
              variant="gradient"
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
      
      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative fade-in-element">
              <div className="about-image-modern">
                <img 
                  src="/images/about-facility.jpg" 
                  alt="Shobha Engineering Workshop Facility" 
                  className="w-full h-auto rounded-2xl shadow-card"
                />
              </div>
              
              <div className="absolute bottom-8 -right-6 bg-white rounded-xl shadow-card p-6 max-w-sm z-20 hidden md:block slide-up-element" style={{animationDelay: '0.4s'}}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mr-4">
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
            </div>
            
            {/* Content Column */}
            <div className="slide-up-element" style={{animationDelay: '0.2s'}}>
              <h2 className="text-4xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-primary-500 after:rounded-full after:mb-[-0.5rem]">
                Your Trusted Metal Fabrication Partner
              </h2>
              
              <p className="text-xl text-gray-600 mb-6">
                Shobha Engineering Workshop delivers precision metal fabrication solutions from our 10,000 sq. ft. facility in Lucknow's Industrial Area
              </p>
              
              <div className="mt-6 space-y-6 text-gray-700">
                <p>
                  Established with a vision to provide world-class metal fabrication services in Lucknow, Shobha Engineering Workshop has grown into a comprehensive fabrication facility equipped with cutting-edge technology and staffed by skilled professionals.
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
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button
                    to="/about"
                    variant="gradient"
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
      
      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-secondary-500/5 to-primary-500/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-in-element">
            <h2 className="text-4xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-24 after:h-1 after:bg-primary-500 after:rounded-full after:-translate-x-1/2 after:mb-[-0.5rem]">
              Why Choose Shobha Engineering
            </h2>
            <p className="text-xl text-gray-600 mt-6">
              Our commitment to quality, precision, and customer satisfaction sets us apart
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Feature cards */}
            <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 slide-up-element" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Commitment</h3>
              <p className="text-gray-600">
                Rigorous quality control and precision engineering ensure exceptional results for every project.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 slide-up-element" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Technology</h3>
              <p className="text-gray-600">
                State-of-the-art machinery and equipment for precision cutting, forming, welding, and machining.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 slide-up-element" style={{animationDelay: '0.6s'}}>
              <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Timely Delivery</h3>
              <p className="text-gray-600">
                Efficient processes and project management ensure on-time completion of your fabrication needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-in-element">
            <h2 className="text-4xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-24 after:h-1 after:bg-primary-500 after:rounded-full after:-translate-x-1/2 after:mb-[-0.5rem]">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 mt-6">
              Hear from industry leaders who have experienced our metal fabrication excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial-card slide-up-element" style={{animationDelay: `${index * 0.2 + 0.2}s`}}>
                {/* Quote icon */}
                <svg className="w-10 h-10 text-primary-100 mb-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                </svg>
                
                <p className="text-lg text-gray-700 mb-6">"{testimonial.text}"</p>
                
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl">
                      {testimonial.author.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Logos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center mb-12 fade-in-element">
            <h2 className="text-3xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-16 after:h-1 after:bg-primary-500 after:rounded-full after:-translate-x-1/2 after:mb-[-0.5rem]">
              Trusted by Industry Leaders
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-8">
            {/* Client logos would go here - using placeholder text for now */}
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 fade-in-element" style={{animationDelay: '0.2s'}}>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-gray-500">PTC Industries</h3>
              </div>
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 fade-in-element" style={{animationDelay: '0.4s'}}>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-gray-500">Parag Industries</h3>
              </div>
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 fade-in-element" style={{animationDelay: '0.6s'}}>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-gray-500">Indian Railway</h3>
              </div>
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 fade-in-element" style={{animationDelay: '0.8s'}}>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-gray-500">Chemical Plants</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-cta-gradient">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center fade-in-element">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Discuss Your Metal Fabrication Needs?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our engineering team today for expert consultation and solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                to="/contact"
                variant="white"
                size="lg"
              >
                Get a Quote
              </Button>
              <Button
                to="/services"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
                size="lg"
              >
                View Our Services
              </Button>
            </div>
          </div>
        </div>
        
        {/* Wave decoration at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="#ffffff" className="w-full" preserveAspectRatio="none">
            <path d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,112C672,117,768,171,864,197.3C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Contact Form Preview */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up-element" style={{animationDelay: '0.2s'}}>
              <h2 className="text-4xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-primary-500 after:rounded-full after:mb-[-0.5rem]">
                Contact Our Engineering Team
              </h2>
              
              <p className="text-xl text-gray-600 mb-6">
                Have questions about our metal fabrication services? Fill out the form and our team will get back to you shortly.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="contact-info-icon-modern mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="contact-info-content-modern">
                    <h3 className="text-lg font-semibold mb-1">Workshop Location</h3>
                    <p className="text-gray-600">
                      Industrial Area, Lucknow, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="contact-info-icon-modern mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="contact-info-content-modern">
                    <h3 className="text-lg font-semibold mb-1">Phone Number</h3>
                    <p className="text-gray-600">
                      +91 9415154200
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="contact-info-icon-modern mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="contact-info-content-modern">
                    <h3 className="text-lg font-semibold mb-1">Email Address</h3>
                    <p className="text-gray-600">
                      info@shobhaengineering.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-card slide-up-element" style={{animationDelay: '0.4s'}}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;