import React, { useState } from 'react';
import Button from './Button';

const ContactForm = ({ onSubmit, variant = 'default' }) => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  // Error state
  const [errors, setErrors] = useState({});
  
  // Success state
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    // Phone validation (optional)
    if (formData.phone && !/^[0-9+\-\s()]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real application, this would be an API call
      // For this demo, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Call onSubmit if provided
      if (onSubmit) {
        onSubmit(formData);
      }
      
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      
      // Show success message
      setIsSubmitted(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({
        ...errors,
        form: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Service options
  const serviceOptions = [
    { value: '', label: 'Select a service (optional)' },
    { value: 'metal-cutting', label: 'Metal Cutting' },
    { value: 'metal-forming', label: 'Metal Forming & Bending' },
    { value: 'welding', label: 'Welding Services' },
    { value: 'cnc-machining', label: 'CNC Machining' },
    { value: 'structural-fabrication', label: 'Structural Steel Fabrication' },
    { value: 'other', label: 'Other Services' },
  ];

  // Form variants
  const variants = {
    default: 'bg-white shadow-md rounded-lg p-6 md:p-8',
    inline: 'bg-transparent',
    light: 'bg-gray-100 p-6 md:p-8 rounded-lg',
    dark: 'bg-gray-800 p-6 md:p-8 rounded-lg text-white',
  };

  return (
    <div className={variants[variant]}>
      {variant !== 'inline' && (
        <h3 className="text-2xl font-bold mb-6">
          {variant === 'dark' ? (
            <span className="text-white">Get In Touch</span>
          ) : (
            'Get In Touch'
          )}
        </h3>
      )}
      
      {/* Success message */}
      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
          <p className="font-medium">Thank you for your message!</p>
          <p>We'll get back to you shortly.</p>
        </div>
      )}
      
      {/* Error message */}
      {errors.form && (
        <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
          <p className="font-medium">Error</p>
          <p>{errors.form}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name field */}
          <div>
            <label 
              htmlFor="name" 
              className={`form-label ${variant === 'dark' ? 'text-gray-300' : ''}`}
            >
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? 'border-red-500' : ''} ${
                variant === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : ''
              }`}
              placeholder="Your name"
            />
            {errors.name && <p className="form-error">{errors.name}</p>}
          </div>
          
          {/* Company field */}
          <div>
            <label 
              htmlFor="company"
              className={`form-label ${variant === 'dark' ? 'text-gray-300' : ''}`}
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={`form-input ${
                variant === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : ''
              }`}
              placeholder="Your company name"
            />
          </div>
          
          {/* Email field */}
          <div>
            <label 
              htmlFor="email"
              className={`form-label ${variant === 'dark' ? 'text-gray-300' : ''}`}
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'border-red-500' : ''} ${
                variant === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : ''
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>
          
          {/* Phone field */}
          <div>
            <label 
              htmlFor="phone"
              className={`form-label ${variant === 'dark' ? 'text-gray-300' : ''}`}
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`form-input ${errors.phone ? 'border-red-500' : ''} ${
                variant === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : ''
              }`}
              placeholder="Your phone number"
            />
            {errors.phone && <p className="form-error">{errors.phone}</p>}
          </div>
        </div>
        
        {/* Service field */}
        <div className="mt-6">
          <label 
            htmlFor="service"
            className={`form-label ${variant === 'dark' ? 'text-gray-300' : ''}`}
          >
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`form-input ${
              variant === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : ''
            }`}
          >
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        {/* Message field */}
        <div className="mt-6">
          <label 
            htmlFor="message"
            className={`form-label ${variant === 'dark' ? 'text-gray-300' : ''}`}
          >
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={`form-input ${errors.message ? 'border-red-500' : ''} ${
              variant === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : ''
            }`}
            placeholder="Tell us about your project or inquiry"
          ></textarea>
          {errors.message && <p className="form-error">{errors.message}</p>}
        </div>
        
        {/* Submit button */}
        <div className="mt-8">
          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
        
        {/* Form note */}
        <p className={`mt-4 text-sm ${variant === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          By submitting this form, you agree to our{' '}
          <a 
            href="/privacy-policy" 
            className={variant === 'dark' ? 'text-primary-400' : 'text-primary-600'}
          >
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  );
};

export default ContactForm;