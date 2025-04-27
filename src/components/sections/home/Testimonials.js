import React, { useState } from 'react';
import Heading from '../../ui/Heading';

const Testimonials = () => {
  // Sample testimonials data - in a real app, this would come from a CMS or API
  const testimonials = [
    {
      id: 1,
      quote: "Shobha Engineering Workshop delivered exceptional quality for our equipment fabrication needs. Their precision engineering and attention to detail resulted in components that exceeded our specifications.",
      author: "Rajesh Kumar",
      position: "Production Manager",
      company: "PTC Industries",
    },
    {
      id: 2,
      quote: "Working with Shobha Engineering Workshop on our structural fabrication project was a seamless experience. Their team's expertise and state-of-the-art equipment ensured on-time delivery with outstanding quality.",
      author: "Sunita Sharma",
      position: "Project Director",
      company: "Parag Industries",
    },
    {
      id: 3,
      quote: "The corrosion-resistant components fabricated by Shobha Engineering perfectly met our chemical plant's demanding requirements. Their technical knowledge and quality craftsmanship are unmatched in the region.",
      author: "Vikram Singh",
      position: "Chief Engineer",
      company: "Northern Chemical Processing",
    },
  ];

  // State for active testimonial
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle navigation
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Set specific testimonial
  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-primary-700 text-white">
      <div className="container-custom">
        <Heading
          title="What Our Clients Say"
          subtitle="Hear from industry leaders who have experienced our metal fabrication excellence"
          align="center"
          hasDivider={true}
          dividerPosition="center"
          light={true}
        />
        
        <div className="mt-12 max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative bg-primary-800 rounded-lg p-8 md:p-12 shadow-lg">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-300 opacity-40">
                <path d="M19.9924 6.69421C15.4863 6.69421 11.8434 7.76743 9.06387 9.91387C6.28431 12.0603 4.89453 14.9116 4.89453 18.4678C4.89453 21.5322 6.05388 24.0192 8.37259 25.9289C10.6913 27.8385 13.4052 28.7934 16.5143 28.7934C18.5552 28.7934 20.257 29.1799 21.6196 29.9529C22.9823 30.7259 23.6636 31.8764 23.6636 33.4045C23.6636 34.9327 22.9552 36.1059 21.5383 36.9243C20.1215 37.7426 18.3383 38.1518 16.1887 38.1518C14.0391 38.1518 12.295 37.416 10.9594 35.9445C12.0029 35.8333 12.8758 35.3797 13.578 34.5836C14.2803 33.7876 14.6314 32.8775 14.6314 31.8534C14.6314 30.4709 14.1643 29.3649 13.2301 28.5355C12.2959 27.706 11.1278 27.2913 9.72584 27.2913C8.32389 27.2913 7.12818 27.7887 6.13871 28.7834C5.14924 29.7782 4.65451 31.0625 4.65451 32.6361C4.65451 35.0667 5.78751 37.063 8.0535 38.625C10.3195 40.187 13.1688 40.9681 16.6013 40.9681C20.8016 40.9681 24.1499 39.895 26.6462 37.7486C29.1425 35.6023 30.3906 32.7237 30.3906 29.1127C30.3906 26.0483 29.2264 23.5781 26.8978 21.702C24.5693 19.8259 21.7717 18.8878 18.505 18.8878C16.3097 18.8878 14.4982 18.428 13.0704 17.5084C11.6427 16.5889 10.9289 15.3551 10.9289 13.8071C10.9289 12.259 11.6292 11.0416 13.0299 10.1554C14.4305 9.26911 16.1614 8.826 18.2226 8.826C20.4661 8.826 22.3321 9.52044 23.8205 10.9093C22.7771 11.0205 21.9069 11.4714 21.2101 12.2619C20.5133 13.0524 20.1648 13.9624 20.1648 14.9921C20.1648 16.3745 20.632 17.4833 21.5662 18.3183C22.5004 19.1533 23.6685 19.5707 25.0704 19.5707C26.472 19.5707 27.6676 19.0707 28.6571 18.0704C29.6466 17.0701 30.1413 15.7858 30.1413 14.2176C30.1413 11.787 29.0083 9.79065 26.7423 8.22863C24.4763 6.66661 21.625 5.88559 17.971 5.88559C13.8616 5.88559 10.5159 6.95611 8.83386 9.09714C7.15184 11.2382 6.31082 14.1184 6.31082 17.7377C6.31082 20.8021 7.47498 23.2723 9.80329 25.1485C12.1316 27.0246 15.032 27.9627 18.5045 27.9627C20.6999 27.9627 22.5113 28.4226 23.9391 29.3421C25.3669 30.2617 26.0807 31.4955 26.0807 33.0435C26.0807 34.5915 25.3832 35.8089 23.9881 36.6951C22.5931 37.5814 20.8595 38.0245 18.7872 38.0245C16.5437 38.0245 14.6778 37.33 13.1894 35.9412C14.2328 35.8299 15.1003 35.3791 15.7916 34.5886C16.4829 33.798 16.8286 32.888 16.8286 31.8584C16.8286 30.476 16.3641 29.3672 15.4353 28.5322C14.5065 27.6972 13.3412 27.2797 11.9392 27.2797C10.5373 27.2797 9.34161 27.7797 8.35214 28.7799C7.36266 29.7802 6.86793 31.0645 6.86793 32.6327C6.86793 35.0633 8.00093 37.0597 10.2669 38.6217C12.5329 40.1837 15.3822 40.9647 18.8147 40.9647C22.9241 40.9647 26.2671 39.8942 28.9437 37.7532C31.6202 35.6121 32.9585 32.7319 32.9585 29.1127C32.9585 26.0483 31.797 23.5781 29.474 21.702C27.151 19.8259 24.2479 18.8878 20.9647 18.8878C18.7693 18.8878 16.9579 18.428 15.5301 17.5084C14.1023 16.5889 13.3885 15.3551 13.3885 13.8071C13.3885 12.259 14.0888 11.0416 15.4895 10.1554C16.8901 9.26911 18.621 8.826 20.6822 8.826C22.9257 8.826 24.7916 9.52044 26.2801 10.9093C25.2367 11.0205 24.3665 11.4714 23.6697 12.2619C22.9729 13.0524 22.6244 13.9624 22.6244 14.9921C22.6244 16.3745 23.0916 17.4833 24.0258 18.3183C24.96 19.1533 26.1281 19.5707 27.53 19.5707C28.9319 19.5707 30.1276 19.0707 31.1171 18.0704C32.1066 17.0701 32.6013 15.7858 32.6013 14.2176C32.6013 11.787 31.4683 9.79064 29.2023 8.22863C26.9363 6.66661 24.085 5.88559 20.431 5.88559C16.3216 5.88559 12.9758 6.95611 11.2938 9.09714C9.61182 11.2382 8.77081 14.1184 8.77081 17.7377" fill="currentColor"/>
              </svg>
            </div>
            
            {/* Testimonial Content */}
            <div className="text-center">
              <p className="text-xl md:text-2xl text-gray-100 mb-8 relative z-10">
                "{testimonials[activeIndex].quote}"
              </p>
              
              <div className="flex flex-col items-center">
                <h4 className="text-lg font-bold">{testimonials[activeIndex].author}</h4>
                <p className="text-primary-200">{testimonials[activeIndex].position}</p>
                <p className="text-primary-300">{testimonials[activeIndex].company}</p>
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-between mt-8">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full bg-primary-600 text-white hover:bg-primary-500 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-white' : 'bg-primary-500 hover:bg-primary-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-primary-600 text-white hover:bg-primary-500 transition-colors"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;