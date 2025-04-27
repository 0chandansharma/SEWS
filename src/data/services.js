// Services data for Shobha Engineering Workshop
const services = [
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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0 0L9.121 9.121" />
        </svg>
      ),
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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
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
  ];
  
  export default services;