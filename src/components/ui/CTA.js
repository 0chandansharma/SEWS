import React from 'react';
import Button from './Button';

const CTA = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  align = 'center',
  bgColor = 'primary',
  className = '',
}) => {
  // Background variants
  const bgVariants = {
    primary: 'bg-primary-700 text-white',
    secondary: 'bg-secondary-700 text-white',
    light: 'bg-gray-100 text-gray-900',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-r from-primary-700 to-secondary-700 text-white',
  };

  // Text alignment
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  // Button alignment
  const buttonAlignments = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  return (
    <section className={`py-16 ${bgVariants[bgColor]} ${className}`}>
      <div className="container-custom">
        <div className={`max-w-3xl mx-auto ${alignments[align]}`}>
          {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
          {subtitle && <p className="text-lg md:text-xl mb-8 opacity-90">{subtitle}</p>}
          
          {(buttonText || secondaryButtonText) && (
            <div className={`flex flex-wrap gap-4 ${buttonAlignments[align]} ${align === 'center' ? 'mx-auto' : ''}`}>
              {buttonText && (
                <Button
                  to={buttonLink}
                  variant={bgColor === 'light' ? 'primary' : 'outline'}
                  className={bgColor === 'light' ? '' : 'border-white text-white hover:bg-white hover:text-gray-900'}
                >
                  {buttonText}
                </Button>
              )}
              
              {secondaryButtonText && (
                <Button
                  to={secondaryButtonLink}
                  variant={bgColor === 'light' ? 'outline' : 'secondary'}
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;