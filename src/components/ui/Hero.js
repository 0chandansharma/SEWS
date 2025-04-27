import React from 'react';
import Button from './Button';

const Hero = ({
  title,
  subtitle,
  backgroundImage = '/images/hero-bg.jpg',
  overlayOpacity = 70,
  textAlign = 'left',
  height = 'full',
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  children,
  animated = true,
}) => {
  // Height variants
  const heights = {
    sm: 'min-h-[500px]',
    md: 'min-h-[600px]',
    lg: 'min-h-[700px]',
    full: 'min-h-screen',
  };

  // Text alignment
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  // Create background style with image and overlay
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to right, rgba(29, 30, 48, ${overlayOpacity / 100}), rgba(43, 44, 61, ${
      (overlayOpacity - 10) / 100
    })), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  // Animation classes based on text alignment
  const getAnimationClasses = (delay) => {
    if (!animated) return '';
    return `opacity-0 ${
      textAlign === 'left'
        ? 'translate-x-8 animate-slide-in-right'
        : 'translate-y-8 animate-slide-up'
    } delay-${delay}`;
  };

  return (
    <section 
      className={`hero-modern ${heights[height]}`}
      style={backgroundStyle}
      aria-label="Hero Section"
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900/60 to-dark-800/50 backdrop-blur-sm"></div>
      
      {/* Animated shapes */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl z-0 animate-pulse-slow"></div>
      <div className="absolute top-1/4 -left-12 w-40 h-40 bg-gradient-to-tr from-secondary-500/10 to-primary-500/10 rounded-full blur-2xl z-0 animate-float"></div>
      
      <div className={`container-custom flex flex-col ${alignments[textAlign]} z-10 py-16`}>
        <div className="max-w-4xl">
          {title && (
            <h1 
              className={`text-white font-bold mb-6 leading-tight ${getAnimationClasses(100)}`}
              style={{textShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
            >
              {title}
            </h1>
          )}
          
          {subtitle && (
            <p 
              className={`text-gray-200 text-xl md:text-2xl mb-8 max-w-3xl ${getAnimationClasses(200)}`}
            >
              {subtitle}
            </p>
          )}
          
          {(buttonText || secondaryButtonText) && (
            <div 
              className={`flex flex-wrap gap-4 mt-4 ${getAnimationClasses(300)} ${
                textAlign === 'center' ? 'justify-center' : textAlign === 'right' ? 'justify-end' : 'justify-start'
              }`}
            >
              {buttonText && (
                <Button
                  to={buttonLink}
                  variant="gradient"
                  size="lg"
                >
                  {buttonText}
                </Button>
              )}
              
              {secondaryButtonText && (
                <Button
                  to={secondaryButtonLink}
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900"
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          )}
          
          {children}
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0L48 8.875C96 17.75 192 35.5 288 35.5C384 35.5 480 17.75 576 26.625C672 35.5 768 71 864 80.125C960 89 1056 71 1152 62.375C1248 53.5 1344 53.5 1392 53.5H1440V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;    