import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({
  children,
  title,
  subtitle,
  image,
  imageAlt,
  to,
  href,
  className = '',
  elevation = 'md',
  hover = true,
  footer,
  ...props
}) => {
  // Elevation variants
  const elevations = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  // Base classes
  const baseClasses = [
    'card bg-white rounded-lg overflow-hidden',
    elevations[elevation],
    hover ? 'transition-all duration-300 hover:shadow-xl' : '',
    className,
  ].join(' ');

  // Card content
  const cardContent = (
    <>
      {image && (
        <div className="relative">
          <img 
            src={image} 
            alt={imageAlt || title} 
            className="w-full h-48 md:h-56 object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
        {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          {footer}
        </div>
      )}
    </>
  );

  // Render as Link if "to" prop is provided
  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {cardContent}
      </Link>
    );
  }

  // Render as anchor if "href" prop is provided
  if (href) {
    return (
      <a 
        href={href} 
        className={baseClasses} 
        target="_blank" 
        rel="noopener noreferrer"
        {...props}
      >
        {cardContent}
      </a>
    );
  }

  // Default render as div
  return (
    <div className={baseClasses} {...props}>
      {cardContent}
    </div>
  );
};

export default Card;