import React from 'react';
import SEO from '../components/layout/Seo';
import Hero from '../components/ui/Hero';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import CTA from '../components/ui/CTA';

const Projects = () => {
  // Sample projects data - in a real app, this would come from projects.js
  const featuredProjects = [
    {
      id: 1,
      title: 'Industrial Equipment Fabrication for PTC Industries',
      slug: 'ptc-industries-equipment',
      description: 'Custom fabrication of specialized industrial equipment components with precision engineering and quality materials.',
      client: 'PTC Industries',
      category: 'Industrial Equipment',
      image: '/images/projects/project1.jpg',
    },
    {
      id: 2,
      title: 'Steel Structural Components for Parag Industries',
      slug: 'parag-industries-structural',
      description: 'Design and fabrication of heavy-duty structural steel components for manufacturing facility expansion.',
      client: 'Parag Industries',
      category: 'Structural Fabrication',
      image: '/images/projects/project2.jpg',
    },
    {
      id: 3,
      title: 'Custom Equipment Components for Chemical Plant',
      slug: 'chemical-plant-equipment',
      description: 'Specialized fabrication of corrosion-resistant components for chemical processing applications.',
      client: 'Chemical Processing Plant',
      category: 'Custom Components',
      image: '/images/projects/project3.jpg',
    },
    {
      id: 4,
      title: 'Railway Maintenance Equipment Parts',
      slug: 'railway-maintenance-parts',
      description: 'Precision fabrication of critical components for railway maintenance equipment with strict specifications.',
      client: 'Indian Railway',
      category: 'Maintenance Equipment',
      image: '/images/projects/project4.jpg',
    },
  ];

  // SEO data
  const seoData = {
    title: 'Our Projects | Shobha Engineering Workshop | Metal Fabrication in Lucknow',
    description: 'Explore our completed metal fabrication projects. View case studies of our precision engineering work for various industries in Lucknow.',
    canonicalUrl: '/projects',
  };

  return (
    <>
      <SEO {...seoData} />
      
      {/* Hero Section */}
      <Hero
        title="Our Metal Fabrication Projects"
        subtitle="Showcasing our expertise through successful project implementations across industries"
        backgroundImage="/images/projects-hero-bg.jpg"
        height="md"
      />
      
      {/* Projects Introduction */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Heading
              title="Project Portfolio"
              subtitle="Explore our completed fabrication projects that showcase our precision engineering capabilities"
              align="center"
              hasDivider={true}
              dividerPosition="center"
            />
            
            <p className="text-gray-700 mt-8">
              At Shobha Engineering Workshop, we've successfully completed numerous fabrication projects for clients across various industries. Our comprehensive capabilities enable us to handle projects ranging from custom components to complete assemblies, all delivered with precision and quality craftsmanship.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Gallery */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                subtitle={`Client: ${project.client}`}
                image={project.image}
                imageAlt={project.title}
                className="h-full flex flex-col"
                to={`/projects/${project.slug}`}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
                <div className="mt-auto">
                  <button className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 transition-colors group">
                    View Project Details
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
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA
        title="Ready to Start Your Metal Fabrication Project?"
        subtitle="Contact our engineering team today to discuss your specific requirements"
        buttonText="Request a Quote"
        buttonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/services"
        bgColor="primary"
      />
    </>
  );
};

export default Projects;