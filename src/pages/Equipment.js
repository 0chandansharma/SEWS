import React from 'react';
import SEO from '../components/layout/Seo';
import Hero from '../components/ui/Hero';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import CTA from '../components/ui/CTA';

const Equipment = () => {
  // SEO data
  const seoData = {
    title: 'Our Equipment | Shobha Engineering Workshop | Metal Fabrication in Lucknow',
    description: 'Explore our state-of-the-art machinery including oxy-gas torches, plasma cutters, waterjet cutters, press brakes, and CNC machines for precision metal fabrication.',
    canonicalUrl: '/equipment',
  };

  // Equipment categories and items
  const equipmentCategories = [
    {
      id: 'cutting',
      title: 'Cutting Equipment',
      description: 'Advanced machinery for precise and efficient metal cutting across various materials and thicknesses.',
      equipment: [
        {
          name: 'Plasma Cutting System',
          description: 'High-precision plasma cutting for conductive metals with excellent edge quality and minimal heat-affected zones.',
          specifications: [
            'Cutting thickness: Up to 50mm',
            'Table size: 3000mm x 1500mm',
            'Precision: ±0.1mm',
            'CNC control system for complex shapes'
          ],
          image: '/images/equipment/plasma-cutter.jpg',
        },
        {
          name: 'Oxy-Gas Cutting System',
          description: 'Traditional cutting method ideal for thick carbon steel with clean, precise cuts and excellent edge quality.',
          specifications: [
            'Cutting thickness: Up to 300mm',
            'Multiple torch capability',
            'Manual and semi-automated options',
            'Ideal for heavy structural components'
          ],
          image: '/images/equipment/oxy-gas-cutter.jpg',
        },
        {
          name: 'Waterjet Cutting Machine',
          description: 'Cold-cutting technology for materials sensitive to heat distortion, providing exceptional precision across various materials.',
          specifications: [
            'Cutting thickness: Up to 200mm',
            'Table size: 3000mm x 2000mm',
            'Precision: ±0.05mm',
            'Materials: All metals, glass, stone, composites'
          ],
          image: '/images/equipment/waterjet-cutter.jpg',
        },
      ],
    },
    {
      id: 'forming',
      title: 'Forming & Bending Equipment',
      description: 'Precision machinery for shaping metal components according to exact specifications.',
      equipment: [
        {
          name: 'Hydraulic Press Brake',
          description: 'CNC-controlled press brake for precise sheet metal bending with exceptional accuracy and repeatability.',
          specifications: [
            'Capacity: 160 tons',
            'Working length: 4000mm',
            'CNC back gauge for precise positioning',
            'Multiple tooling options for various bend profiles'
          ],
          image: '/images/equipment/press-brake.jpg',
        },
        {
          name: 'Roll Forming Machine',
          description: 'Creates continuous bends and shapes in long metal sheets for consistent profiles in longer components.',
          specifications: [
            'Working width: Up to 1500mm',
            'Material thickness: 0.5mm to 6mm',
            'Adjustable roll configuration',
            'Various profile capabilities'
          ],
          image: '/images/equipment/roll-forming.jpg',
        },
        {
          name: 'Tube Bending System',
          description: 'Specialized equipment for creating precise bends in tubes and pipes of various diameters and wall thicknesses.',
          specifications: [
            'Tube diameter range: 10mm to 100mm',
            'CNC control for complex bend sequences',
            'Multiple radius dies available',
            'Mandrel bending capability for thin-wall tubes'
          ],
          image: '/images/equipment/tube-bender.jpg',
        },
      ],
    },
    {
      id: 'welding',
      title: 'Welding Equipment',
      description: 'Advanced welding systems for creating strong, durable, and aesthetic metal joints.',
      equipment: [
        {
          name: 'MIG/MAG Welding Systems',
          description: 'Versatile wire-feed welding equipment for high productivity across various metals and thicknesses.',
          specifications: [
            'Multiple units with 250A to 500A capacity',
            'Pulse capability for precision control',
            'Suitable for steel, aluminum, and stainless steel',
            'Synergic programs for optimal parameters'
          ],
          image: '/images/equipment/mig-welding.jpg',
        },
        {
          name: 'TIG Welding Equipment',
          description: 'Precision welding systems for exceptional control and weld appearance, particularly for detailed work.',
          specifications: [
            'AC/DC capability for all metals',
            'Pulse functionality',
            'Water-cooled torch options',
            'Ideal for thin materials and visible welds'
          ],
          image: '/images/equipment/tig-welding.jpg',
        },
        {
          name: 'Resistance Spot Welding Machine',
          description: 'Creates strong spot welds in sheet metal components quickly and efficiently.',
          specifications: [
            'Capacity: Up to 6mm combined thickness',
            'Adjustable pressure and current settings',
            'Various electrode configurations',
            'Ideal for production welding of sheet metal assemblies'
          ],
          image: '/images/equipment/spot-welding.jpg',
        },
      ],
    },
    {
      id: 'machining',
      title: 'CNC Machining Equipment',
      description: 'Computer-controlled precision machining centers for complex components with tight tolerances.',
      equipment: [
        {
          name: 'CNC Turning Center',
          description: 'Automated lathe for creating precise cylindrical components with exceptional surface finish.',
          specifications: [
            'Chuck size: 300mm',
            'Max turning diameter: 500mm',
            'Max turning length: 1000mm',
            'Live tooling capability for milled features'
          ],
          image: '/images/equipment/cnc-lathe.jpg',
        },
        {
          name: 'CNC Milling Machine',
          description: 'Vertical machining center for creating complex shapes, features, and surface finishes on metal components.',
          specifications: [
            'Table size: 1200mm x 600mm',
            'Travel: 1000mm x 500mm x 500mm (X, Y, Z)',
            '10,000 RPM spindle',
            '24-tool automatic tool changer'
          ],
          image: '/images/equipment/cnc-mill.jpg',
        },
        {
          name: 'Conventional Machining Equipment',
          description: 'Traditional lathes, mills, and drills for supplementary operations and quick modifications.',
          specifications: [
            'Multiple manual lathes and mills',
            'Radial drill press',
            'Surface grinder',
            'Ideal for one-off components and modifications'
          ],
          image: '/images/equipment/conventional-machines.jpg',
        },
      ],
    },
    {
      id: 'finishing',
      title: 'Finishing Equipment',
      description: 'Machinery for creating the ideal surface finish on fabricated components.',
      equipment: [
        {
          name: 'Shot Blasting System',
          description: 'Surface preparation equipment for cleaning, descaling, and creating uniform surface texture.',
          specifications: [
            'Chamber size: 2000mm x 1500mm x 1500mm',
            'Multiple media options for various finishes',
            'Dust collection system',
            'Ideal for pre-painting preparation'
          ],
          image: '/images/equipment/shot-blasting.jpg',
        },
        {
          name: 'Power Grinding and Polishing Tools',
          description: 'Range of equipment for surface finishing, from rough grinding to mirror polishing.',
          specifications: [
            'Various abrasive options',
            'Belt and disc sanders',
            'Angle grinders',
            'Polishing equipment for stainless steel and aluminum'
          ],
          image: '/images/equipment/grinding-polishing.jpg',
        },
        {
          name: 'Powder Coating System',
          description: 'Complete system for applying durable, attractive powder coat finishes to metal components.',
          specifications: [
            'Booth size: 3000mm x 2000mm x 2000mm',
            'Electrostatic spray guns',
            'Curing oven',
            'Multiple color capabilities'
          ],
          image: '/images/equipment/powder-coating.jpg',
        },
      ],
    },
  ];

  return (
    <>
      <SEO {...seoData} />
      
      {/* Hero Section */}
      <Hero
        title="Our State-of-the-Art Equipment"
        subtitle="Advanced machinery for precision metal fabrication and engineering"
        backgroundImage="/images/equipment-hero-bg.jpg"
        height="md"
      />
      
      {/* Equipment Introduction */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Heading
              title="Cutting-Edge Fabrication Technology"
              subtitle="Our 10,000 sq. ft. facility houses advanced machinery for comprehensive metal fabrication capabilities"
              align="center"
              hasDivider={true}
              dividerPosition="center"
            />
            
            <p className="text-gray-700 mt-8">
              At Shobha Engineering Workshop, we continuously invest in state-of-the-art equipment to ensure exceptional precision, quality, and efficiency in our metal fabrication services. Our comprehensive range of machinery enables us to handle all aspects of fabrication in-house, from cutting and forming to welding, machining, and finishing.
            </p>
            
            <p className="text-gray-700 mt-4">
              Our equipment includes oxy-gas torches, plasma cutting machines, waterjet cutters, press brakes, roll forming machines, tube bending machines, MIG/TIG welding systems, and CNC machining centers, allowing us to work with various metals including steel, iron, and copper with exceptional precision.
            </p>
          </div>
          
          {/* Equipment Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Card 1 */}
            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0 0L9.121 9.121" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Precision Cutting</h3>
              <p className="text-gray-600">
                Our advanced cutting technologies include plasma, waterjet, and oxy-gas systems for materials of all types and thicknesses.
              </p>
            </Card>
            
            {/* Card 2 */}
            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">CNC Technology</h3>
              <p className="text-gray-600">
                Computer-controlled machinery ensures exceptional accuracy, consistency, and efficiency in our fabrication processes.
              </p>
            </Card>
            
            {/* Card 3 */}
            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Versatile Capabilities</h3>
              <p className="text-gray-600">
                Our diverse equipment enables us to handle projects of all sizes, from small precision components to large structural fabrications.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Equipment Categories */}
      {equipmentCategories.map((category, index) => (
        <section 
          key={category.id}
          id={category.id}
          className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container-custom">
            <Heading
              title={category.title}
              subtitle={category.description}
              align="center"
              hasDivider={true}
              dividerPosition="center"
            />
            
            <div className="mt-12 space-y-12">
              {category.equipment.map((item, itemIndex) => (
                <div 
                  key={itemIndex}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    itemIndex % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                    <div className={`absolute ${
                      itemIndex % 2 === 0 ? '-bottom-4 -right-4' : '-bottom-4 -left-4'
                    } w-24 h-24 bg-primary-600 rounded-lg opacity-20 z-[-1] hidden md:block`}></div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{item.name}</h3>
                    <p className="text-gray-700 mb-6">{item.description}</p>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-3">Key Specifications:</h4>
                      <ul className="space-y-2">
                        {item.specifications.map((spec, specIndex) => (
                          <li key={specIndex} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      
      {/* Quality Control */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading
                title="Quality Control Equipment"
                subtitle="Precision measuring and testing equipment to ensure fabrication excellence"
                hasDivider={true}
              />
              
              <div className="mt-6 space-y-6">
                <p className="text-gray-700">
                  Beyond our fabrication equipment, we maintain a comprehensive suite of quality control instruments to verify the dimensional accuracy, structural integrity, and overall quality of every component we produce.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-primary-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Precision Measuring Instruments</h4>
                      <p className="text-gray-600">Digital calipers, micrometers, and coordinate measuring equipment for exact dimensional verification.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Material Testing Equipment</h4>
                      <p className="text-gray-600">Hardness testers and other material verification tools to ensure the right material properties.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Weld Inspection Equipment</h4>
                      <p className="text-gray-600">Visual inspection tools and testing equipment to verify weld quality and integrity.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Surface Finish Measurement</h4>
                      <p className="text-gray-600">Instruments for validating surface roughness and finish quality on fabricated components.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/quality-control.jpg" 
                alt="Quality Control Equipment" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-600 rounded-full z-[-1] hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Equipment Maintenance */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <Heading
            title="Equipment Maintenance & Calibration"
            subtitle="Our commitment to equipment excellence ensures consistent quality and reliability"
            align="center"
            hasDivider={true}
            dividerPosition="center"
          />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-6">
                We maintain a rigorous equipment maintenance and calibration program to ensure that all our machinery operates at peak performance levels, delivering the precision and quality our clients expect.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold mb-1">Regular Maintenance</h3>
                    <p className="text-gray-600">
                      Scheduled preventive maintenance on all equipment to ensure consistent performance and prevent downtime.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold mb-1">Calibration Program</h3>
                    <p className="text-gray-600">
                      Regular calibration of all measuring instruments and CNC equipment to maintain accuracy and precision.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold mb-1">Technology Updates</h3>
                    <p className="text-gray-600">
                      Continuous investment in equipment upgrades and new technologies to enhance our capabilities.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold mb-1">Skilled Operators</h3>
                    <p className="text-gray-600">
                      Continuous training for our equipment operators to ensure optimal utilization of our advanced machinery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA
        title="Experience Our Advanced Fabrication Capabilities"
        subtitle="Contact us to discuss how our equipment and expertise can meet your metal fabrication needs"
        buttonText="Contact Us"
        buttonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/services"
        bgColor="gradient"
      />
    </>
  );
};

export default Equipment;