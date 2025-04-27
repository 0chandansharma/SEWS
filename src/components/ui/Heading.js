import React from 'react';

const Heading = ({
  title,
  subtitle,
  align = 'left',
  hasDivider = true,
  dividerPosition = 'left',
  as = 'h2',
  className = '',
  subtitleClassName = '',
  size = 'default',
  light = false,
}) => {
  // Text alignment
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  // Heading sizes
  const sizes = {
    sm: 'text-xl md:text-2xl',
    default: 'text-2xl md:text-3xl lg:text-4xl',
    lg: 'text-3xl md:text-4xl lg:text-5xl',
    xl: 'text-4xl md:text-5xl lg:text-6xl',
  };

  // Divider positions
  const dividerPositions = {
    left: 'after:left-0',
    center: 'after:left-1/2 after:-translate-x-1/2',
    right: 'after:right-0',
  };

  // Determine heading element
  const HeadingElement = as;

  // Text color based on light prop
  const textColor = light ? 'text-white' : 'text-gray-900';
  const subtitleColor = light ? 'text-gray-200' : 'text-gray-600';

  return (
    <div className={`mb-8 md:mb-12 ${alignments[align]} ${className}`}>
      <HeadingElement 
        className={`font-bold ${sizes[size]} ${textColor} ${
          hasDivider 
            ? `pb-4 mb-4 relative after:absolute after:bottom-0 after:h-1 after:bg-primary-600 after:w-16 ${dividerPositions[dividerPosition || align]}`
            : 'mb-4'
        }`}
      >
        {title}
      </HeadingElement>
      
      {subtitle && (
        <p className={`${subtitleColor} text-lg md:text-xl max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;