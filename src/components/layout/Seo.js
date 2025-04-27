import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  canonicalUrl,
  ogType = 'website',
  ogImage = '/images/og-image.jpg',
  structuredData = null
}) => {
  // Default title and description if not provided
  const defaultTitle = 'Shobha Engineering Workshop - Metal Fabrication & Engineering Solutions in Lucknow';
  const defaultDescription = 'Premier metal fabrication & engineering solutions in Lucknow. Specializing in steel, iron, and copper fabrication with a 10,000 sq. ft. facility equipped with cutting-edge machinery.';
  
  // Use provided values or defaults
  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  
  // Website base URL - replace with your actual domain in production
  const siteUrl = 'https://www.shobhaengineering.com';
  
  // Canonical URL (full URL)
  const canonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  
  // Full og:image URL
  const ogImageUrl = `${siteUrl}${ogImage}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={ogImageUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
      
      {/* Structured Data if provided */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;