import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({
  title,
  description,
  icon,
  image,
  slug,
  index,
  variant = 'default',
}) => {
  // Create animation delay based on index
  const animationDelay = index ? `${index * 0.1}s` : '0s';

  // Card variants
  const cardVariants = {
    default: "service-card",
    minimal: "service-card-minimal",
    bordered: "bg-white rounded-2xl border-2 border-gray-100 p-8 shadow-card hover:border-primary-300 hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1",
    gradient: "bg-white rounded-2xl shadow-card p-8 hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden",
  };

  // For gradient variant, we add a pseudo-element with gradient
  const gradientStyle = variant === 'gradient' ? {
    ':before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(to right, #3272f0, #843dff)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    ':hover:before': {
      opacity: 1,
    }
  } : {};

  return (
    <div 
      className={cardVariants[variant]}
      style={{ 
        animationDelay,
        ...gradientStyle
      }}
    >
      {/* Service Image (conditional) */}
      {image && (
        <div className="h-48 mb-6 overflow-hidden rounded-xl">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      )}
      
      {/* Icon and Title */}
      <div className="flex items-start mb-4">
        {icon && (
          <div className="service-icon-modern mr-4">
            {icon}
          </div>
        )}
        <h3 className="service-title-modern">{title}</h3>
      </div>
      
      {/* Description */}
      <p className="text-gray-600 mb-6">{description}</p>
      
      {/* Learn More Link */}
      <Link 
        to={`/services/${slug}`} 
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
  );
};

export default ServiceCard;