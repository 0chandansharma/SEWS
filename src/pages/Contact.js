import React from 'react';
import SEO from '../components/layout/Seo';
import Hero from '../components/ui/Hero';
import Heading from '../components/ui/Heading';
import ContactForm from '../components/ui/ContactForm';

const Contact = () => {
  // SEO data
  const seoData = {
    title: 'Contact Us | Shobha Engineering Workshop | Metal Fabrication in Lucknow',
    description: 'Get in touch with Shobha Engineering Workshop for all your metal fabrication needs in Lucknow. Request a quote for steel, iron, and copper fabrication services.',
    canonicalUrl: '/contact',
  };

  return (
    <>
      <SEO {...seoData} />
      
      {/* Hero Section */}
      <Hero
        title="Contact Our Engineering Team"
        subtitle="Get in touch for consultation, quotes, or inquiries about our metal fabrication services"
        backgroundImage="/images/contact-hero-bg.jpg"
        height="sm"
      />
      
      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <Heading
                title="Get In Touch"
                subtitle="We welcome your inquiries about our metal fabrication services"
                hasDivider={true}
              />
              
              <div className="mt-8 space-y-8">
                {/* Location */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-1">Workshop Location</h3>
                    <p className="text-gray-600">
                      Shobha Engineering Workshop<br />
                      Industrial Area, Lucknow<br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-1">Phone Numbers</h3>
                    <p className="text-gray-600">
                      Primary: +91 9415154200<br />
                      Alternative: +91 9415154200
                    </p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-1">Email Address</h3>
                    <p className="text-gray-600">
                      info@shobhaengineering.com<br />
                      sales@shobhaengineering.com
                    </p>
                  </div>
                </div>
                
                {/* Working Hours */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-1">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Our Location</h3>
                <div className="rounded-lg overflow-hidden shadow-md h-64 bg-gray-200">
                  {/* In a real implementation, this would be a Google Maps embed */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <p className="text-gray-500">Google Maps Embed Would Go Here</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <Heading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our metal fabrication services"
            align="center"
            hasDivider={true}
            dividerPosition="center"
          />
          
          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">What types of materials do you work with?</h3>
              <p className="text-gray-600">
                We work with a wide range of metals including mild steel, stainless steel, aluminum, copper, brass, and more. Our equipment and expertise allow us to handle various material types and thicknesses.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">How do I request a quote for my project?</h3>
              <p className="text-gray-600">
                You can request a quote by filling out our contact form, calling us directly, or visiting our workshop. We'll need details about your project requirements, including specifications, quantities, and timeline.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">What information should I provide for an accurate quote?</h3>
              <p className="text-gray-600">
                To provide an accurate quote, we need detailed specifications, drawings or designs if available, material preferences, quantity required, and project timeline. The more information you provide, the more precise our quote will be.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">What is your typical lead time for fabrication projects?</h3>
              <p className="text-gray-600">
                Lead times vary depending on project complexity, current workload, and material availability. Small projects may be completed in days, while larger or more complex projects might take several weeks. We'll provide a specific timeline during the quotation process.
              </p>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Do you offer design services for fabrication projects?</h3>
              <p className="text-gray-600">
                Yes, we provide design consultation and engineering support for fabrication projects. Our team can help refine your concepts, suggest material improvements, and create fabrication-ready designs when needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;