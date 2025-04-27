import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEO from '../components/layout/Seo';
import Hero from '../components/ui/Hero';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import CTA from '../components/ui/CTA';
import { getServiceSchema, getBreadcrumbSchema } from '../utils/schema';

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  // Services data - in a real application, this would come from an API or CMS
  const servicesData = [
    {
      id: 1,
      title: 'Metal Cutting',
      slug: 'metal-cutting',
      description: 'Precision cutting services using oxy-gas torches, plasma, waterjet, and CNC cutting systems for various materials and thicknesses.',
      longDescription: 'Our advanced metal cutting technologies provide exceptional precision and quality across a wide range of materials and thicknesses. From thick structural steel to thin sheet metal and specialized alloys, our cutting capabilities ensure clean, accurate cuts for your fabrication needs.',
      heroImage: '/images/services/metal-cutting-hero.jpg',
      detailImage: '/images/services/metal-cutting-detail.jpg',
      metaTitle: 'Metal Cutting Services in Lucknow | Shobha Engineering Workshop',
      metaDescription: 'Precision metal cutting services in Lucknow using plasma, waterjet, oxy-gas and CNC systems. Cut steel, iron, copper and other metals with precision.',
      technologies: [
        {
          name: 'Plasma Cutting',
          description: 'High-speed, high-precision cutting for conductive metals with minimal heat-affected zones.',
          benefits: [
            'Excellent edge quality',
            'Suitable for most metals',
            'Ideal for medium thickness materials',
            'Cost-effective for complex shapes'
          ]
        },
        {
          name: 'Oxy-Gas Cutting',
          description: 'Traditional cutting method for thick carbon steel with clean, precise cuts.',
          benefits: [
            'Excellent for thick materials (up to 300mm)',
            'Clean cut edges',
            'Economical for straight cuts',
            'Ideal for structural steel'
          ]
        },
        {
          name: 'Waterjet Cutting',
          description: 'Cold-cutting technology for materials sensitive to heat distortion.',
          benefits: [
            'No heat-affected zone',
            'Suitable for all materials',
            'Excellent precision',
            'Clean edges requiring minimal finishing'
          ]
        },
        {
          name: 'CNC Cutting',
          description: 'Computer-controlled precision cutting for complex shapes and patterns.',
          benefits: [
            'High repeatability',
            'Excellent for production runs',
            'Tight tolerances',
            'Complex shape capability'
          ]
        }
      ],
      applications: [
        'Structural steel components',
        'Industrial machine parts',
        'Custom fabricated equipment',
        'Architectural elements',
        'Decorative metal designs',
        'Replacement parts manufacturing'
      ],
      faq: [
        {
          question: 'What materials can you cut?',
          answer: 'We can cut a wide range of metals including mild steel, stainless steel, aluminum, copper, brass, and more. Our different cutting technologies allow us to work with various thicknesses and material properties.'
        },
        {
          question: 'What is the maximum thickness you can cut?',
          answer: 'Our oxy-gas cutting systems can handle steel up to 300mm thick, while our plasma systems work best with materials up to 50mm. Our waterjet system can cut materials up to 200mm thick depending on the specific material.'
        },
        {
          question: 'Which cutting method is best for my project?',
          answer: 'The ideal cutting method depends on your material, thickness, complexity, and quality requirements. Plasma cutting is versatile and cost-effective for most metals, waterjet is excellent for heat-sensitive materials, and oxy-gas is ideal for thick carbon steel. Our team can recommend the best approach based on your specific needs.'
        }
      ]
    },
    {
      id: 2,
      title: 'Metal Forming & Bending',
      slug: 'metal-forming',
      description: 'Custom metal forming and bending using press brakes, roll forming, and tube bending machines for precise component shaping.',
      longDescription: 'Our metal forming and bending services transform flat metal sheets and plates into three-dimensional components with precise angles, curves, and shapes. Using advanced hydraulic press brakes, roll forming machines, and specialized tube benders, we create accurate, consistent bends across a wide range of materials and thicknesses.',
      heroImage: '/images/services/metal-forming-hero.jpg',
      detailImage: '/images/services/metal-forming-detail.jpg',
      metaTitle: 'Metal Forming & Bending Services in Lucknow | Shobha Engineering',
      metaDescription: 'Custom metal forming and bending services in Lucknow. Press brake forming, roll forming, and tube bending for precise metal components.',
      technologies: [
        {
          name: 'Press Brake Forming',
          description: 'Precision bending of sheet metal and plates using our hydraulic press brakes.',
          benefits: [
            'Highly accurate bends',
            'Various bend angles possible',
            'Capacity for long components (up to 4m)',
            'Multiple bend configurations'
          ]
        },
        {
          name: 'Roll Forming',
          description: 'Creating continuous bends and shapes in long metal sheets.',
          benefits: [
            'Consistent profiles',
            'Ideal for high-volume production',
            'Cost-effective for long components',
            'Various profile possibilities'
          ]
        },
        {
          name: 'Tube Bending',
          description: 'Precision bending of tubes and pipes without deformation.',
          benefits: [
            'Minimal distortion',
            'Tight radius capability',
            'Multi-bend programming',
            'Various tube sizes and materials'
          ]
        },
        {
          name: 'Custom Forming',
          description: 'Specialized forming techniques for unique applications and shapes.',
          benefits: [
            'Tailored to specific requirements',
            'Complex shape capability',
            'Various material compatibility',
            'One-off or production quantities'
          ]
        }
      ],
      applications: [
        'Industrial enclosures and cabinets',
        'Machine guards and covers',
        'HVAC components and ducting',
        'Architectural elements',
        'Handrails and structural components',
        'Custom equipment and fixtures'
      ],
      faq: [
        {
          question: 'What metals can you form and bend?',
          answer: 'We work with a wide range of metals including mild steel, stainless steel, aluminum, copper, and brass. Each material has different forming characteristics, and our equipment and expertise allow us to achieve optimal results for each type.'
        },
        {
          question: 'What is the maximum thickness you can bend?',
          answer: 'Our press brakes can handle up to 12mm mild steel, 8mm stainless steel, and 16mm aluminum, depending on the bend radius and length. Our tube bending equipment can work with tubes up to 100mm in diameter with various wall thicknesses.'
        },
        {
          question: 'How accurate are your bending services?',
          answer: 'Our CNC-controlled press brakes and tube benders provide exceptional accuracy with tolerances as tight as ±0.1mm depending on the material, thickness, and complexity of the part. We verify dimensions with precision measuring equipment to ensure consistency.'
        }
      ]
    },
    {
      id: 3,
      title: 'Welding Services',
      slug: 'welding',
      description: 'Expert welding services including MIG, TIG, and gas welding for strong, durable, and aesthetic metal joints for various applications.',
      longDescription: 'Our comprehensive welding services provide strong, durable, and visually appealing metal joints for all types of fabrication projects. With expertise in MIG, TIG, gas welding, and specialized joining techniques, our certified welders deliver exceptional quality across various metals and applications.',
      heroImage: '/images/services/welding-hero.jpg',
      detailImage: '/images/services/welding-detail.jpg',
      metaTitle: 'Welding Services in Lucknow | Shobha Engineering Workshop',
      metaDescription: 'Professional welding services in Lucknow including MIG, TIG, and gas welding for steel, aluminum, stainless steel, and other metals.',
      technologies: [
        {
          name: 'MIG/MAG Welding',
          description: 'Metal Inert Gas welding for high productivity and versatility.',
          benefits: [
            'Fast deposition rates',
            'Strong, clean welds',
            'Suitable for most metals',
            'Ideal for various thicknesses'
          ]
        },
        {
          name: 'TIG Welding',
          description: 'Tungsten Inert Gas welding for precise control and exceptional aesthetics.',
          benefits: [
            'Superior weld appearance',
            'Excellent for thin materials',
            'Precise heat control',
            'Ideal for visible joints and aluminum'
          ]
        },
        {
          name: 'Gas Welding',
          description: 'Traditional oxy-acetylene welding for specific applications.',
          benefits: [
            'Versatility for repair work',
            'No electricity required',
            'Good for certain materials',
            'Heating and bending capabilities'
          ]
        },
        {
          name: 'Spot Welding',
          description: 'Resistance spot welding for sheet metal joining.',
          benefits: [
            'Quick joining method',
            'Clean appearance',
            'Ideal for sheet metal',
            'High production efficiency'
          ]
        }
      ],
      applications: [
        'Structural steel fabrication',
        'Custom machinery and equipment',
        'Stainless steel components',
        'Aluminum fabrication',
        'Repair and maintenance work',
        'Production runs of welded assemblies'
      ],
      faq: [
        {
          question: 'What metals can you weld?',
          answer: 'Our welding capabilities include carbon steel, stainless steel, aluminum, copper alloys, and various other metals. Each metal requires specific welding techniques and filler materials, which our experienced welders are skilled in.'
        },
        {
          question: 'Do you offer certified welding services?',
          answer: 'Yes, our welders are certified according to relevant standards, and we can provide welding services that meet various industry specifications. For projects requiring specific certifications, please discuss your requirements with our team.'
        },
        {
          question: 'What welding method is best for my project?',
          answer: 'The ideal welding method depends on your materials, thickness, application, and appearance requirements. MIG welding is versatile and efficient for most projects, TIG welding provides superior aesthetic results for visible joints, and specialized techniques are available for specific applications. Our team can recommend the best approach based on your project needs.'
        }
      ]
    },
    {
      id: 4,
      title: 'CNC Machining',
      slug: 'cnc-machining',
      description: 'Precision CNC machining services for complex components with tight tolerances and exceptional surface finish for industrial applications.',
      longDescription: 'Our CNC machining services provide exceptional precision, consistency, and surface finish for complex metal components. Using advanced computer-controlled equipment, we produce accurate parts with tight tolerances for various industrial applications, from one-off prototypes to production runs.',
      heroImage: '/images/services/cnc-machining-hero.jpg',
      detailImage: '/images/services/cnc-machining-detail.jpg',
      metaTitle: 'CNC Machining Services in Lucknow | Shobha Engineering Workshop',
      metaDescription: 'Precision CNC machining services in Lucknow for industrial components. CNC turning, milling, and multi-axis machining with tight tolerances.',
      technologies: [
        {
          name: 'CNC Turning',
          description: 'Computer-controlled lathe operations for cylindrical components.',
          benefits: [
            'High precision cylindrical parts',
            'Excellent concentricity',
            'Various diameters and lengths',
            'Consistent production quality'
          ]
        },
        {
          name: 'CNC Milling',
          description: 'Multi-axis milling for complex shapes and features.',
          benefits: [
            'Complex geometry capability',
            'Precise feature locations',
            'Excellent surface finish',
            'Tight tolerances'
          ]
        },
        {
          name: 'Multi-axis Machining',
          description: 'Advanced machining from multiple angles for complex components.',
          benefits: [
            'Complex part capability',
            'Reduced setups',
            'Improved accuracy',
            'Efficient production'
          ]
        },
        {
          name: 'CNC Drilling',
          description: 'Precision hole-making operations with accurate positioning.',
          benefits: [
            'Precise hole location',
            'Consistent hole quality',
            'Pattern drilling capability',
            'Various hole sizes and types'
          ]
        }
      ],
      applications: [
        'Precision industrial components',
        'Custom machinery parts',
        'Production run components',
        'Replacement parts manufacturing',
        'Prototype development',
        'Complex mechanical assemblies'
      ],
      faq: [
        {
          question: 'What materials can you machine?',
          answer: 'We machine a wide range of metals including steel, stainless steel, aluminum, brass, copper, and various alloys. Each material requires specific cutting parameters and tooling, which our CNC programming and setup teams optimize for best results.'
        },
        {
          question: 'What tolerances can you achieve?',
          answer: 'Our CNC machining centers can achieve tolerances as tight as ±0.01mm depending on the feature, material, and part complexity. We verify dimensions with precision measuring equipment to ensure compliance with specifications.'
        },
        {
          question: 'Can you work from CAD files?',
          answer: 'Yes, we can work directly from various CAD file formats including STEP, IGES, DWG, and others. Our programming team can also develop CNC programs from drawings or sketches if digital models are not available.'
        }
      ]
    },
    {
      id: 5,
      title: 'Structural Fabrication',
      slug: 'structural-fabrication',
      description: 'Custom structural steel fabrication for industrial, commercial, and specialized applications with engineered precision.',
      longDescription: 'Our structural fabrication services provide robust, precision-engineered steel structures for industrial, commercial, and specialized applications. From steel frameworks and platforms to equipment supports and custom structural components, we deliver quality fabrication that combines strength, durability, and precision.',
      heroImage: '/images/services/structural-hero.jpg',
      detailImage: '/images/services/structural-detail.jpg',
      metaTitle: 'Structural Steel Fabrication in Lucknow | Shobha Engineering',
      metaDescription: 'Custom structural steel fabrication services in Lucknow. Steel frameworks, platforms, supports, and specialized structural components for industrial applications.',
      technologies: [
        {
          name: 'Steel Framework Construction',
          description: 'Design and fabrication of robust structural frameworks.',
          benefits: [
            'Engineered for specific loads',
            'Precision-fitted connections',
            'Various steel sections available',
            'Modular design possibilities'
          ]
        },
        {
          name: 'Platform and Support Systems',
          description: 'Custom platforms, mezzanines, and equipment support structures.',
          benefits: [
            'Load-optimized designs',
            'Safety compliance',
            'Custom dimensions and configurations',
            'Integration with existing structures'
          ]
        },
        {
          name: 'Staircase and Access Systems',
          description: 'Safe, code-compliant access systems for industrial environments.',
          benefits: [
            'Safety standard compliance',
            'Custom configurations',
            'Integrated handrails and guards',
            'Various tread options'
          ]
        },
        {
          name: 'Custom Structural Components',
          description: 'Specialized structural elements for unique applications.',
          benefits: [
            'Application-specific design',
            'Load analysis and engineering',
            'Custom material options',
            'Integration with larger systems'
          ]
        }
      ],
      applications: [
        'Industrial building structures',
        'Equipment support frameworks',
        'Mezzanine floors and platforms',
        'Access systems and staircases',
        'Material handling structures',
        'Custom structural solutions'
      ],
      faq: [
        {
          question: 'Do you provide engineering design services for structural fabrication?',
          answer: 'Yes, we can provide engineering consultation and design services for structural fabrication projects. For complex structures or those with specific load requirements, we work with qualified structural engineers to ensure safety and compliance.'
        },
        {
          question: 'What steel sections do you work with?',
          answer: 'We work with a full range of structural steel sections including I-beams, H-beams, channels, angles, tubes, pipes, and plate. Our fabrication capabilities allow us to cut, form, and join these sections according to design specifications.'
        },
        {
          question: 'Do your structural fabrications comply with building codes?',
          answer: 'Yes, our structural fabrications are designed and manufactured in accordance with relevant building codes and standards. For projects requiring specific certifications or compliance documentation, we can provide the necessary quality assurance and verification.'
        }
      ]
    },
    {
      id: 6,
      title: 'Custom Metal Fabrication',
      slug: 'custom-fabrication',
      description: 'Specialized custom fabrication services for unique components and assemblies based on your specific requirements and specifications.',
      longDescription: 'Our custom metal fabrication services provide tailored solutions for unique components, assemblies, and specialized applications. From concept to completion, we work closely with clients to understand their specific requirements and deliver high-quality fabrications that meet exact specifications and performance criteria.',
      heroImage: '/images/services/custom-fabrication-hero.jpg',
      detailImage: '/images/services/custom-fabrication-detail.jpg',
      metaTitle: 'Custom Metal Fabrication in Lucknow | Shobha Engineering Workshop',
      metaDescription: 'Specialized custom metal fabrication services in Lucknow. Tailored solutions for unique components and assemblies in steel, iron, and copper.',
      technologies: [
        {
          name: 'Prototype Development',
          description: 'Creation of first-article prototypes and proof-of-concept models.',
          benefits: [
            'Concept validation',
            'Design refinement',
            'Material and process testing',
            'Pre-production verification'
          ]
        },
        {
          name: 'Multi-Metal Fabrication',
          description: 'Working with various metals in single assemblies and components.',
          benefits: [
            'Material-specific advantages',
            'Performance optimization',
            'Cost-effective material selection',
            'Specialized joining techniques'
          ]
        },
        {
          name: 'Complex Assembly Fabrication',
          description: 'Creation of integrated assemblies with multiple components.',
          benefits: [
            'Simplified supply chain',
            'Ensured component compatibility',
            'Integrated quality control',
            'Assembly optimization'
          ]
        },
        {
          name: 'Specialized Component Production',
          description: 'Fabrication of unique, application-specific components.',
          benefits: [
            'Custom specifications',
            'Application-optimized design',
            'Material selection consultation',
            'Process refinement for best results'
          ]
        }
      ],
      applications: [
        'Specialized industrial equipment',
        'Custom machinery components',
        'Unique fixture and tool requirements',
        'Prototype development',
        'Low-volume production runs',
        'Replacement parts for obsolete equipment'
      ],
      faq: [
        {
          question: 'How does the custom fabrication process work?',
          answer: 'Our custom fabrication process begins with a detailed consultation to understand your requirements. We then develop a proposal including design considerations, material recommendations, and production approach. After approval, we proceed with fabrication, conducting quality checks throughout, and deliver the finished components with any required documentation.'
        },
        {
          question: 'Can you work from rough sketches or ideas?',
          answer: 'Yes, we can work from various starting points including rough sketches, verbal descriptions, or existing samples. Our engineering team can help develop your concept into fabrication-ready designs with all necessary specifications.'
        },
        {
          question: 'What production volumes can you handle for custom fabrication?',
          answer: 'We accommodate a wide range of production volumes from one-off custom components to small and medium production runs. Our equipment and processes are adaptable to various quantity requirements while maintaining quality and consistency.'
        }
      ]
    }
  ];
  
  // Find the service that matches the URL parameter
  useEffect(() => {
    const foundService = servicesData.find(svc => svc.slug === serviceSlug);
    
    if (foundService) {
      setService(foundService);
    } else {
      // If service not found, redirect to services page
      navigate('/services', { replace: true });
    }
    
    setLoading(false);
  }, [serviceSlug, navigate]);
  
  // If loading or service not found, show loading state
  if (loading || !service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading service information...</p>
        </div>
      </div>
    );
  }
  
  // Generate structured data for SEO
  const serviceSchemaData = getServiceSchema({
    name: service.title,
    description: service.metaDescription || service.description,
    url: `/services/${service.slug}`,
    image: service.heroImage
  });
  
  // Generate breadcrumb schema
  const breadcrumbData = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${service.slug}` }
  ]);
  
  // SEO data
  const seoData = {
    title: service.metaTitle || `${service.title} | Shobha Engineering Workshop`,
    description: service.metaDescription || service.description,
    canonicalUrl: `/services/${service.slug}`,
    structuredData: serviceSchemaData
  };

  return (
    <>
      <SEO {...seoData} />
      
      {/* Hero Section */}
      <Hero
        title={service.title}
        subtitle={service.description}
        backgroundImage={service.heroImage}
        height="md"
      />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-100 py-3">
        <div className="container-custom">
          <nav className="flex text-sm">
            <Link to="/" className="text-gray-600 hover:text-primary-600">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/services" className="text-gray-600 hover:text-primary-600">Services</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-primary-600 font-medium">{service.title}</span>
          </nav>
        </div>
      </div>
      
      {/* Service Overview */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading
                title={`${service.title} Services`}
                subtitle="Precision engineering and quality craftsmanship for your metal fabrication needs"
                hasDivider={true}
              />
              
              <div className="mt-6 space-y-6 text-gray-700">
                <p className="text-lg">{service.longDescription}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {service.applications.slice(0, 6).map((application, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-primary-600 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700">{application}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button
                    to="/contact"
                    variant="primary"
                  >
                    Request a Quote
                  </Button>
                  <Button
                    to="/equipment"
                    variant="outline"
                  >
                    View Our Equipment
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={service.detailImage} 
                alt={service.title} 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600 rounded-lg z-[-1] hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-secondary-600 rounded-full z-[-1] hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies Used */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <Heading
            title={`Our ${service.title} Technologies`}
            subtitle="Advanced capabilities for exceptional results across various applications"
            align="center"
            hasDivider={true}
            dividerPosition="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {service.technologies.map((tech, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">{tech.name}</h3>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                
                <h4 className="font-semibold text-primary-600 mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {tech.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Applications */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <Heading
            title={`${service.title} Applications`}
            subtitle="Versatile solutions for various industrial and commercial needs"
            align="center"
            hasDivider={true}
            dividerPosition="center"
          />
          
          <div className="mt-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.applications.map((application, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">{application}</h3>
                      <p className="text-gray-600">
                        Custom {service.title.toLowerCase()} solutions tailored to your specific requirements.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <Heading
            title="Frequently Asked Questions"
            subtitle={`Common questions about our ${service.title} services`}
            align="center"
            hasDivider={true}
            dividerPosition="center"
          />
          
          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            {service.faq.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                <p className="text-gray-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Related Services */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <Heading
            title="Related Services"
            subtitle="Explore our other metal fabrication capabilities"
            align="center"
            hasDivider={true}
            dividerPosition="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {servicesData
              .filter(s => s.slug !== service.slug)
              .slice(0, 3)
              .map((relatedService, index) => (
                <div 
                  key={relatedService.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedService.heroImage} 
                      alt={relatedService.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{relatedService.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedService.description}</p>
                    <Link 
                      to={`/services/${relatedService.slug}`} 
                      className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 transition-colors group"
                    >
                      Learn More
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA
        title={`Ready to Discuss Your ${service.title} Needs?`}
        subtitle="Contact our engineering team today for expert consultation and solutions"
        buttonText="Request a Quote"
        buttonLink="/contact"
        secondaryButtonText="View All Services"
        secondaryButtonLink="/services"
        bgColor="primary"
      />
    </>
  );
};

export default ServiceDetail;