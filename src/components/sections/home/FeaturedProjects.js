import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../ui/Heading';
import Card from '../../ui/Card';
import Button from '../../ui/Button';

const FeaturedProjects = () => {
  // Sample projects data - in a real app, this would come from a CMS or API
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
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <Heading
          title="Featured Projects"
          subtitle="Our metal fabrication expertise in action through successful project implementations"
          align="center"
          hasDivider={true}
          dividerPosition="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
                <Link 
                  to={`/projects/${project.slug}`} 
                  className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 transition-colors group"
                >
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
                </Link>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            to="/projects"
            variant="primary"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            }
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;