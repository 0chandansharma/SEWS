// src/utils/schema.js
import helpers from './helpers';

/**
 * Base company information
 */
const companyInfo = {
  name: "Shobha Engineering Workshop",
  url: "https://www.shobhaengineering.com",
  logo: "https://www.shobhaengineering.com/images/logo.svg",
  address: {
    streetAddress: "Industrial Area",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "XXXXXX",
    addressCountry: "IN"
  },
  telephone: "+91-XXXXXXXXXX",
  email: "info@shobhaengineering.com"
};

/**
 * Generate LocalBusiness schema
 * 
 * @param {Object} customData - Custom data to merge with the base schema
 * @returns {Object} - Structured data for LocalBusiness
 */
export const getLocalBusinessSchema = (customData = {}) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyInfo.name,
    image: companyInfo.logo,
    url: companyInfo.url,
    telephone: companyInfo.telephone,
    email: companyInfo.email,
    address: {
      "@type": "PostalAddress",
      ...companyInfo.address
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "XX.XXXXXX",
      longitude: "XX.XXXXXX"
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      opens: "09:00",
      closes: "18:00"
    },
    ...customData
  };
};

/**
 * Generate Service schema for service pages
 * 
 * @param {Object} serviceData - Service-specific data
 * @returns {Object} - Structured data for Service
 */
export const getServiceSchema = (serviceData) => {
  const { name, description, url, image } = serviceData;
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    image,
    provider: {
      "@type": "LocalBusiness",
      name: companyInfo.name,
      address: {
        "@type": "PostalAddress",
        ...companyInfo.address
      }
    },
    areaServed: {
      "@type": "City",
      name: "Lucknow"
    }
  };
};

/**
 * Generate BreadcrumbList schema
 * 
 * @param {Array} items - Array of breadcrumb items with name and url
 * @returns {Object} - Structured data for BreadcrumbList
 */
export const getBreadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${companyInfo.url}${item.url}`
    }))
  };
};

/**
 * Generate FAQPage schema for FAQ sections
 * 
 * @param {Array} questions - Array of question/answer pairs
 * @returns {Object} - Structured data for FAQPage
 */
export const getFAQSchema = (questions) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(qa => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: qa.answer
      }
    }))
  };
};

/**
 * Generate Organization schema
 * 
 * @param {Object} customData - Custom data to merge with the base schema
 * @returns {Object} - Structured data for Organization
 */
export const getOrganizationSchema = (customData = {}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    url: companyInfo.url,
    logo: companyInfo.logo,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyInfo.telephone,
      contactType: "customer service",
      email: companyInfo.email,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"]
    },
    address: {
      "@type": "PostalAddress",
      ...companyInfo.address
    },
    ...customData
  };
};

export default {
  getLocalBusinessSchema,
  getServiceSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  getOrganizationSchema
};