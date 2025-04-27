import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  icon = null,
  iconPosition = 'right',
  disabled = false,
  onClick,
  animated = true,
  ...props
}) => {
  // Variants
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
    dark: 'bg-dark-800 text-white hover:bg-dark-700 shadow-md hover:shadow-lg',
    gradient: 'bg-cta-gradient text-white shadow-md hover:shadow-lg',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-800',
    white: 'bg-white text-gray-900 hover:bg-gray-50 shadow-md hover:shadow-lg',
    danger: 'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg',
  };

  // Sizes
  const sizes = {
    xs: 'px-3 py-1.5 text-xs rounded-lg',
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-10 py-5 text-xl rounded-xl',
  };

  // Animation classes
  const animationClass = animated 
    ? 'transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95'
    : '';
  
  // Combined classes
  const buttonClasses = [
    'btn inline-flex items-center justify-center font-medium',
    variants[variant],
    sizes[size],
    animationClass,
    fullWidth ? 'w-full' : '',
    disabled ? 'opacity-60 cursor-not-allowed pointer-events-none' : '',
    className,
  ].join(' ');

  // Content with icon
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  // Render based on to, href, or button
  if (to) {
    return (
      <Link 
        to={to} 
        className={buttonClasses} 
        {...props}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses} 
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      className={buttonClasses} 
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;