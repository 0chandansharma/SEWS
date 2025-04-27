import React from 'react';
import SEO from '../components/layout/Seo';
import Hero from '../components/ui/Hero';
import Heading from '../components/ui/Heading';
import ServiceCard from '../components/ui/ServiceCard';
import CTA from '../components/ui/CTA';

const Services = () => {
  // SEO data
  const seoData = {
    title: 'Metal Fabrication Services in Lucknow | Shobha Engineering Workshop',
    description: 'Comprehensive metal fabrication services including cutting, forming, welding, CNC machining, and structural fabrication for industrial needs in Lucknow.',
    canonicalUrl: '/services',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Metal Fabrication Services",
      "serviceType": "Metal Fabrication",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Shobha Engineering Workshop",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lucknow",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Lucknow"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Metal Fabrication Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Metal Cutting Services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Metal Forming & Bending"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Welding Services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CNC Machining"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Structural Steel Fabrication"
            }
          }
        ]
      }
    }
  };

  // Services data
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
      features: [
        'Oxy-gas cutting for thick materials',
        'Plasma cutting for precision and speed',
        'Waterjet cutting for heat-sensitive materials',
        'CNC cutting for complex shapes',
        'Custom cutting services for all metals',
      ],
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
      features: [
        'Press brake forming for precise bends',
        'Roll forming for continuous profiles',
        'Tube and pipe bending services',
        'Custom metal forming solutions',
        'Sheet metal bending and folding',
      ],
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
      features: [
        'MIG welding for versatility and speed',
        'TIG welding for precision and aesthetics',
        'Gas welding for specialized applications',
        'Spot and seam welding services',
        'Custom welding for all metal types',
      ],
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
      features: [
        'CNC turning for cylindrical parts',
        'CNC milling for complex features',
        'Multi-axis machining capabilities',
        'Precision parts manufacturing',
        'Custom machining solutions',
      ],
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
      features: [
        'Industrial steel frameworks',
        'Equipment support structures',
        'Staircases, railings, and platforms',
        'Custom structural components',
        'Industrial infrastructure fabrication',
      ],
    },
    {
      id: 6,
      title: 'Custom Metal Fabrication',
      slug: 'custom-fabrication',
      description: 'Specialized custom fabrication services for unique components and assemblies based on your specific requirements and specifications.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      image: '/images/services/custom.jpg',
      features: [
        'Prototype development',
        'One-off custom components',
        'Production runs of custom parts',
        'Multi-metal fabrication',
        'Complete engineered solutions',
      ],
    },
  ];

  return (
    <>
      <SEO {...seoData} />
      
      {/* Hero Section */}
      <Hero
        title="Comprehensive Metal Fabrication Services"
        subtitle="Precision engineering and quality craftsmanship for all your steel, iron, and copper fabrication needs"
        backgroundImage="/images/services/service-hero-bg.jpg"
        buttonText="Contact Us"
        buttonLink="/contact"
        height="md"
      />
      
      {/* Services Introduction */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Heading
              title="Our Fabrication Services"
              subtitle="From custom components to complete assemblies, we offer a comprehensive range of metal fabrication services to meet your industrial needs"
              align="center"
              hasDivider={true}
              dividerPosition="center"
            />
            
            <p className="text-gray-700 mt-8">
              At Shobha Engineering Workshop, we provide end-to-end metal fabrication solutions powered by state-of-the-art machinery and decades of expertise. Our 10,000 sq. ft. facility in Lucknow's Industrial Area is equipped with advanced equipment and staffed by skilled engineers and technicians to deliver exceptional quality in steel, iron, and copper fabrication.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>
      
      {/* Quality Process */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading
                title="Our Quality Assurance Process"
                subtitle="Every fabrication project undergoes a comprehensive quality control procedure to ensure exceptional results"
                hasDivider={true}
              />
              
              <div className="mt-8 space-y-8">
                {/* Step 1 */}
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary-600 text-primary-600 font-bold text-xl">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">Material Verification</h3>
                    <p className="text-gray-600 mt-2">
                      Thorough inspection and verification of all materials before fabrication to ensure they meet quality standards and project specifications.
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary-600 text-primary-600 font-bold text-xl">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">In-Process Inspection</h3>
                    <p className="text-gray-600 mt-2">
                      Regular quality checks throughout the fabrication process to identify and address any issues early, ensuring continuous quality.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary-600 text-primary-600 font-bold text-xl">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">Dimensional Verification</h3>
                    <p className="text-gray-600 mt-2">
                      Precise measurement and verification of all dimensions to ensure components meet the exact specifications required for your project.
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary-600 text-primary-600 font-bold text-xl">
                      4
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">Final Inspection</h3>
                    <p className="text-gray-600 mt-2">
                      Comprehensive final quality check before delivery to ensure all components and assemblies meet our high standards and your requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/images/quality-process.jpg"
                alt="Quality Control Process at Shobha Engineering Workshop"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600 rounded-lg z-[-1] hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-secondary-600 rounded-full z-[-1] hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industries We Serve */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <Heading
            title="Industries We Serve"
            subtitle="Our metal fabrication expertise supports a wide range of industries across Lucknow and beyond"
            align="center"
            hasDivider={true}
            dividerPosition="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Industry 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
              <p className="text-gray-600">
                Custom fabrication solutions for manufacturing equipment, production line components, and industrial machinery parts.
              </p>
            </div>
            
            {/* Industry 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Railway</h3>
              <p className="text-gray-600">
                Specialized components for railway infrastructure, maintenance equipment, and facility improvements.
              </p>
            </div>
            
            {/* Industry 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Chemical Processing</h3>
              <p className="text-gray-600">
                Corrosion-resistant fabrications for chemical plants, including tanks, pipes, and specialized equipment components.
              </p>
            </div>
            
            {/* Industry 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Construction</h3>
              <p className="text-gray-600">
                Structural steel fabrication for construction projects, including frameworks, supports, and custom architectural elements.
              </p>
            </div>
            
            {/* Industry 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Power & Energy</h3>
              <p className="text-gray-600">
                Fabrication of components for power generation equipment, transmission infrastructure, and energy storage systems.
              </p>
            </div>
            
            {/* Industry 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Projects</h3>
              <p className="text-gray-600">
                Beyond standard industries, we welcome unique and challenging custom fabrication projects across various sectors.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA
        title="Ready to Discuss Your Fabrication Needs?"
        subtitle="Contact our engineering team today for expert consultation and tailored solutions"
        buttonText="Request a Quote"
        buttonLink="/contact"
        secondaryButtonText="Learn About Our Equipment"
        secondaryButtonLink="/equipment"
        bgColor="primary"
      />
    </>
  );
};

export default Services;