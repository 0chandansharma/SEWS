// Equipment data for Shobha Engineering Workshop
const equipment = [
    {
      id: 1,
      category: 'cutting',
      name: 'Plasma Cutting System',
      description: 'High-precision plasma cutting for conductive metals with excellent edge quality and minimal heat-affected zones.',
      image: '/images/equipment/plasma-cutter.jpg',
      specifications: [
        'Cutting thickness: Up to 50mm',
        'Table size: 3000mm x 1500mm',
        'Precision: ±0.1mm',
        'CNC control system for complex shapes',
        'Multiple torch options',
        'Automatic height control'
      ],
      features: [
        'High cutting speed for production efficiency',
        'Excellent edge quality requiring minimal finishing',
        'Ability to cut complex shapes and patterns',
        'Suitable for most conductive metals',
        'Computer-controlled precision'
      ],
      applications: [
        'Sheet metal components',
        'Custom parts with complex shapes',
        'Moderate thickness materials',
        'Production runs with consistent quality',
        'Decorative metal work'
      ]
    },
    {
      id: 2,
      category: 'cutting',
      name: 'Oxy-Gas Cutting System',
      description: 'Traditional cutting method ideal for thick carbon steel with clean, precise cuts and excellent edge quality.',
      image: '/images/equipment/oxy-gas-cutter.jpg',
      specifications: [
        'Cutting thickness: Up to 300mm',
        'Multiple torch capability',
        'Manual and semi-automated options',
        'Straight and shape cutting capabilities',
        'High-pressure gas regulation systems',
        'Safety monitoring features'
      ],
      features: [
        'Effective for very thick materials',
        'Clean cut edges on carbon steel',
        'Cost-effective for straight cuts',
        'Reliable technology for heavy fabrication',
        'Multiple torch operation for increased productivity'
      ],
      applications: [
        'Heavy structural steel components',
        'Thick plate cutting',
        'Large scale industrial projects',
        'Steel construction elements',
        'Heavy equipment manufacturing'
      ]
    },
    {
      id: 3,
      category: 'cutting',
      name: 'Waterjet Cutting Machine',
      description: 'Cold-cutting technology for materials sensitive to heat distortion, providing exceptional precision across various materials.',
      image: '/images/equipment/waterjet-cutter.jpg',
      specifications: [
        'Cutting thickness: Up to 200mm',
        'Table size: 3000mm x 2000mm',
        'Precision: ±0.05mm',
        'Materials: All metals, glass, stone, composites',
        'Pressure: Up to 87,000 PSI',
        'Computer-controlled 5-axis cutting head'
      ],
      features: [
        'No heat-affected zone or thermal distortion',
        'Ability to cut virtually any material',
        'Exceptional precision and edge quality',
        'Multi-axis cutting capability',
        'Environmentally friendly process'
      ],
      applications: [
        'Heat-sensitive materials',
        'Precision components with tight tolerances',
        'Multi-material projects',
        'Aerospace and medical components',
        'Architectural and decorative elements'
      ]
    },
    {
      id: 4,
      category: 'forming',
      name: 'Hydraulic Press Brake',
      description: 'CNC-controlled press brake for precise sheet metal bending with exceptional accuracy and repeatability.',
      image: '/images/equipment/press-brake.jpg',
      specifications: [
        'Capacity: 160 tons',
        'Working length: 4000mm',
        'CNC back gauge for precise positioning',
        'Multiple tooling options for various bend profiles',
        'Programmable bend angles and sequences',
        'Hydraulic crowning system'
      ],
      features: [
        'Precision bending of sheet metal and plates',
        'CNC control for consistent accuracy',
        'Quick tool changes for versatility',
        'Multi-axis back gauge for complex components',
        'Programmable for production runs'
      ],
      applications: [
        'Enclosures and cabinets',
        'HVAC components',
        'Custom metal furniture',
        'Machine guards and covers',
        'Architectural elements'
      ]
    },
    {
      id: 5,
      category: 'forming',
      name: 'Roll Forming Machine',
      description: 'Creates continuous bends and shapes in long metal sheets for consistent profiles in longer components.',
      image: '/images/equipment/roll-forming.jpg',
      specifications: [
        'Working width: Up to 1500mm',
        'Material thickness: 0.5mm to 6mm',
        'Adjustable roll configuration',
        'Various profile capabilities',
        'Production speed: Up to 30m/min',
        'Quick changeover system'
      ],
      features: [
        'Consistent profile along entire length',
        'High production efficiency',
        'Multiple profile capabilities',
        'Excellent for long components',
        'Minimal material waste'
      ],
      applications: [
        'Structural panels',
        'Metal roofing and siding',
        'Channel sections',
        'Continuous profiles for construction',
        'Custom architectural features'
      ]
    },
    {
      id: 6,
      category: 'forming',
      name: 'Tube Bending System',
      description: 'Specialized equipment for creating precise bends in tubes and pipes of various diameters and wall thicknesses.',
      image: '/images/equipment/tube-bender.jpg',
      specifications: [
        'Tube diameter range: 10mm to 100mm',
        'CNC control for complex bend sequences',
        'Multiple radius dies available',
        'Mandrel bending capability for thin-wall tubes',
        'Stack bending for multiple pieces',
        'Digital angle measurement system'
      ],
      features: [
        'Precision bending with minimal distortion',
        'CNC programming for complex shapes',
        'Ability to create compound bends',
        'Suitable for various tube materials',
        'Mandrel support for thin-wall tubing'
      ],
      applications: [
        'Handrails and railings',
        'Furniture components',
        'Automotive exhaust systems',
        'Custom tubing assemblies',
        'HVAC ductwork'
      ]
    },
    {
      id: 7,
      category: 'welding',
      name: 'MIG/MAG Welding Systems',
      description: 'Versatile wire-feed welding equipment for high productivity across various metals and thicknesses.',
      image: '/images/equipment/mig-welding.jpg',
      specifications: [
        'Multiple units with 250A to 500A capacity',
        'Pulse capability for precision control',
        'Suitable for steel, aluminum, and stainless steel',
        'Synergic programs for optimal parameters',
        'Digital control systems',
        'Water cooling options for heavy duty use'
      ],
      features: [
        'High deposition rate for productivity',
        'Versatile for various metals and thicknesses',
        'Excellent for production welding',
        'Good balance of speed and quality',
        'Easy to learn and operate'
      ],
      applications: [
        'Structural steel fabrication',
        'Production welding',
        'Medium to heavy plate joining',
        'General fabrication work',
        'Automotive components'
      ]
    },
    {
      id: 8,
      category: 'welding',
      name: 'TIG Welding Equipment',
      description: 'Precision welding systems for exceptional control and weld appearance, particularly for detailed work.',
      image: '/images/equipment/tig-welding.jpg',
      specifications: [
        'AC/DC capability for all metals',
        'Pulse functionality',
        'Water-cooled torch options',
        'High-frequency start',
        'Digital parameter control',
        'Current range: 5A to 300A'
      ],
      features: [
        'Superior aesthetic weld quality',
        'Excellent for thin materials',
        'Precise heat control',
        'Clean welds with minimal spatter',
        'Suitable for all metals including aluminum'
      ],
      applications: [
        'Aerospace components',
        'Food processing equipment',
        'Architectural features',
        'Thin-wall tubing',
        'Visible weld locations',
        'Stainless steel and aluminum fabrication'
      ]
    },
    {
      id: 9,
      category: 'machining',
      name: 'CNC Turning Center',
      description: 'Automated lathe for creating precise cylindrical components with exceptional surface finish.',
      image: '/images/equipment/cnc-lathe.jpg',
      specifications: [
        'Chuck size: 300mm',
        'Max turning diameter: 500mm',
        'Max turning length: 1000mm',
        'Live tooling capability for milled features',
        'Spindle speed: Up to 4500 RPM',
        'Automatic tool changer with 12 positions'
      ],
      features: [
        'Precision turning of cylindrical parts',
        'Excellent surface finish and dimensional accuracy',
        'Multiple operations in a single setup',
        'High production efficiency',
        'Tight tolerance capability'
      ],
      applications: [
        'Precision shafts and spindles',
        'Bushings and sleeves',
        'Custom fasteners',
        'Machine components',
        'Turned parts with secondary features'
      ]
    },
    {
      id: 10,
      category: 'machining',
      name: 'CNC Milling Machine',
      description: 'Vertical machining center for creating complex shapes, features, and surface finishes on metal components.',
      image: '/images/equipment/cnc-mill.jpg',
      specifications: [
        'Table size: 1200mm x 600mm',
        'Travel: 1000mm x 500mm x 500mm (X, Y, Z)',
        '10,000 RPM spindle',
        '24-tool automatic tool changer',
        'Full 3-axis capability',
        'High-precision ball screws and linear guides'
      ],
      features: [
        'Complex geometry machining',
        'Multiple feature creation in one setup',
        'High precision and surface finish',
        'Programmable for production runs',
        'Versatile for various materials'
      ],
      applications: [
        'Complex machine components',
        'Mold and die parts',
        'Custom brackets and mounts',
        'Precision industrial components',
        'Prototype development'
      ]
    },
    {
      id: 11,
      category: 'finishing',
      name: 'Shot Blasting System',
      description: 'Surface preparation equipment for cleaning, descaling, and creating uniform surface texture.',
      image: '/images/equipment/shot-blasting.jpg',
      specifications: [
        'Chamber size: 2000mm x 1500mm x 1500mm',
        'Multiple media options for various finishes',
        'Dust collection system',
        'Variable pressure control',
        'Automated part handling system',
        'Media recycling capability'
      ],
      features: [
        'Effective surface cleaning and preparation',
        'Uniform surface texture creation',
        'Removal of scale, rust, and contaminants',
        'Improved surface for coating adhesion',
        'Environmentally controlled process'
      ],
      applications: [
        'Pre-painting preparation',
        'Surface cleaning before welding',
        'Decorative finishing',
        'Stress relief for welded assemblies',
        'Scale and oxide removal'
      ]
    },
    {
      id: 12,
      category: 'finishing',
      name: 'Powder Coating System',
      description: 'Complete system for applying durable, attractive powder coat finishes to metal components.',
      image: '/images/equipment/powder-coating.jpg',
      specifications: [
        'Booth size: 3000mm x 2000mm x 2000mm',
        'Electrostatic spray guns',
        'Curing oven capacity: 3000mm x 2000mm x 2000mm',
        'Temperature range: Up to 220°C',
        'Multiple color capabilities',
        'Automated conveyor system'
      ],
      features: [
        'Durable, high-quality surface finish',
        'Excellent corrosion resistance',
        'Wide range of colors and textures',
        'Environmentally friendly process',
        'Superior adhesion and coverage'
      ],
      applications: [
        'Industrial equipment exteriors',
        'Architectural components',
        'Outdoor furniture and fixtures',
        'Machine housings and enclosures',
        'Decorative metal elements'
      ]
    }
  ];
  
  export default equipment;