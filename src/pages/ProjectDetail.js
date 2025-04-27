import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEO from '../components/layout/Seo';
import Hero from '../components/ui/Hero';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import CTA from '../components/ui/CTA';
import Card from '../components/ui/Card';


const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample projects data - in a real app, this would come from an API or CMS
  const projectsData = [
    {
      id: 1,
      title: 'Industrial Equipment Fabrication for PTC Industries',
      slug: 'ptc-industries-equipment',
      description: 'Custom fabrication of specialized industrial equipment components with precision engineering and quality materials.',
      longDescription: 'This comprehensive project involved the design and fabrication of specialized equipment components for PTC Industries\' manufacturing facility. Our team engineered custom solutions to meet specific operational requirements, working closely with the client\'s technical team throughout the project.',
      client: 'PTC Industries',
      category: 'Industrial Equipment',
      location: 'Lucknow, Uttar Pradesh',
      duration: '3 months',
      year: '2023',
      heroImage: '/images/projects/project1.jpg',
      detailImages: [
        '/images/projects/project1-detail1.jpg',
        '/images/projects/project1-detail2.jpg',
        '/images/projects/project1-detail3.jpg',
      ],
      challenge: 'PTC Industries required specialized equipment components that could withstand high temperatures and mechanical stress while maintaining precise operational tolerances. The complex geometries and material requirements presented significant fabrication challenges.',
      solution: 'Our engineering team developed a comprehensive design approach, selecting appropriate high-temperature resistant alloys and implementing precision fabrication techniques. We utilized our CNC machining capabilities for complex components and advanced welding methods for critical joints.',
      results: 'The completed components integrated seamlessly into the client\'s manufacturing process, improving operational efficiency by 15% and reducing maintenance requirements. The equipment has performed exceptionally well under demanding conditions, validating our engineering and fabrication approach.',
      testimonial: {
        quote: "Shobha Engineering Workshop delivered exceptional quality for our equipment fabrication needs. Their precision engineering and attention to detail resulted in components that exceeded our specifications.",
        author: "Rajesh Kumar",
        position: "Production Manager",
        company: "PTC Industries"
      },
      metaTitle: 'Industrial Equipment Fabrication Case Study | Shobha Engineering',
      metaDescription: 'Learn how Shobha Engineering Workshop designed and fabricated specialized industrial equipment components for PTC Industries with precision engineering and quality materials.',
    },
    // Additional projects would be defined here
  ];
  
  // Find the project that matches the URL parameter
  useEffect(() => {
    const foundProject = projectsData.find(proj => proj.slug === projectId);
    
    if (foundProject) {
      setProject(foundProject);
    } else {
      // If project not found, redirect to projects page
      navigate('/projects', { replace: true });
    }
    
    setLoading(false);
  }, [projectId, navigate]);
  
  // If loading or project not found, show loading state
  if (loading || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project information...</p>
        </div>
      </div>
    );
  }
  
  // SEO data
  const seoData = {
    title: project.metaTitle || `${project.title} | Shobha Engineering Workshop`,
    description: project.metaDescription || project.description,
    canonicalUrl: `/projects/${project.slug}`,
  };

  return (
    <>
      <SEO {...seoData} />
      
      {/* Hero Section */}
      <Hero
        title={project.title}
        subtitle={project.description}
        backgroundImage={project.heroImage}
        height="md"
      />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-100 py-3">
        <div className="container-custom">
          <nav className="flex text-sm">
            <Link to="/" className="text-gray-600 hover:text-primary-600">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/projects" className="text-gray-600 hover:text-primary-600">Projects</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-primary-600 font-medium">{project.title}</span>
          </nav>
        </div>
      </div>
      
      {/* Project Overview */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading
                title="Project Overview"
                subtitle="Delivering precision-engineered solutions to meet specific industrial needs"
                hasDivider={true}
              />
              
              <div className="mt-6 space-y-6 text-gray-700">
                <p className="text-lg">{project.longDescription}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Project Details</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">Client:</span>
                        <span>{project.client}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">Category:</span>
                        <span>{project.category}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">Location:</span>
                        <span>{project.location}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">Duration:</span>
                        <span>{project.duration}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">Year:</span>
                        <span>{project.year}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Client Testimonial</h3>
                    <blockquote className="text-gray-700">
                      <p className="italic">"{project.testimonial.quote}"</p>
                      <footer className="mt-2">
                        <strong>{project.testimonial.author}</strong><br />
                        <span className="text-sm text-gray-600">
                          {project.testimonial.position}, {project.testimonial.company}
                        </span>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button
                    to="/contact"
                    variant="primary"
                  >
                    Discuss a Similar Project
                  </Button>
                  <Button
                    to="/services"
                    variant="outline"
                  >
                    View Our Services
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={project.detailImages[0]} 
                alt={project.title} 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600 rounded-lg z-[-1] hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-secondary-600 rounded-full z-[-1] hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Challenge, Solution & Results */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <Heading
            title="Project Approach"
            subtitle="How we addressed the challenges and delivered exceptional results"
            align="center"
            hasDivider={true}
            dividerPosition="center"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* Challenge */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">The Challenge</h3>
              <p className="text-gray-600">
                {project.challenge}
              </p>
            </div>
            
            {/* Solution */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Our Solution</h3>
              <p className="text-gray-600">
                {project.solution}
              </p>
            </div>
            
            {/* Results */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">The Results</h3>
              <p className="text-gray-600">
                {project.results}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Gallery */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <Heading
            title="Project Gallery"
            subtitle="Visual documentation of our engineering and fabrication work"
            align="center"
            hasDivider={true}
            dividerPosition="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {project.detailImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
                <img 
                  src={image} 
                  alt={`${project.title} - Detail ${index + 1}`} 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Related Projects */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <Heading
            title="Related Projects"
            subtitle="Explore our other metal fabrication work"
            align="center"
            hasDivider={true}
            dividerPosition="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {projectsData
              .filter(p => p.slug !== project.slug)
              .slice(0, 3)
              .map((relatedProject) => (
                <Card
                  key={relatedProject.id}
                  title={relatedProject.title}
                  subtitle={`Client: ${relatedProject.client}`}
                  image={relatedProject.heroImage}
                  imageAlt={relatedProject.title}
                  to={`/projects/${relatedProject.slug}`}
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      {relatedProject.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{relatedProject.description}</p>
                </Card>
              ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA
        title="Interested in Working with Us?"
        subtitle="Contact our team today to discuss your metal fabrication needs"
        buttonText="Contact Us"
        buttonLink="/contact"
        secondaryButtonText="View All Projects"
        secondaryButtonLink="/projects"
        bgColor="primary"
      />
    </>
  );
};

export default ProjectDetail;