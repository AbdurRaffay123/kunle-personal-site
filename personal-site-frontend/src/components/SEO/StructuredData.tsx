/**
 * Structured Data component for enhanced SEO
 * Implements JSON-LD structured data for better search engine understanding
 */

interface StructuredDataProps {
  type?: 'Person' | 'Organization' | 'Article' | 'BlogPosting' | 'WebSite';
  data?: any;
}

export default function StructuredData({ type = 'Person', data }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const getStructuredData = () => {
    switch (type) {
      case 'Person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Olukunle Owolabi",
          jobTitle: "Lead AI Engineer & Applied Scientist",
          description: "Lead AI Engineer & Applied Scientist with 7+ years of End-to-End AI & ML experience. Ex Meta Engineer, PhD at Tufts.",
          url: baseUrl,
          image: `${baseUrl}/og-image.png`,
          sameAs: [
            "https://linkedin.com/in/olukunle-owolabi",
            "https://github.com/olukunle",
            "https://twitter.com/olukunle"
          ],
          alumniOf: {
            "@type": "Organization",
            name: "Tufts University",
            url: "https://tufts.edu"
          },
          worksFor: {
            "@type": "Organization", 
            name: "Meta (Former)",
            url: "https://meta.com"
          },
          knowsAbout: [
            "Machine Learning",
            "Large Language Models", 
            "Recommender Systems",
            "Anomaly Detection",
            "Fraud Detection",
            "Forecasting",
            "Optimization",
            "Deep Learning",
            "Natural Language Processing"
          ],
          hasOccupation: {
            "@type": "Occupation",
            name: "Lead AI Engineer",
            description: "Leading AI and Machine Learning initiatives"
          }
        };
        
      case 'WebSite':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Olukunle Owolabi",
          url: baseUrl,
          description: "Personal website of Olukunle Owolabi, Lead AI Engineer & Applied Scientist",
          author: {
            "@type": "Person",
            name: "Olukunle Owolabi"
          },
          potentialAction: {
            "@type": "SearchAction",
            target: `${baseUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        };
        
      case 'Article':
      case 'BlogPosting':
        if (!data) return null;
        return {
          "@context": "https://schema.org",
          "@type": type,
          headline: data.title,
          description: data.description || data.excerpt,
          url: `${baseUrl}${data.path || ''}`,
          datePublished: data.date || data.createdAt,
          dateModified: data.modifiedTime || data.updatedAt,
          author: {
            "@type": "Person",
            name: "Olukunle Owolabi",
            url: baseUrl
          },
          publisher: {
            "@type": "Person",
            name: "Olukunle Owolabi",
            url: baseUrl
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${baseUrl}${data.path || ''}`
          },
          keywords: data.tags?.join(', ') || '',
          articleSection: data.section || 'Technology',
          ...(data.image && {
            image: {
              "@type": "ImageObject",
              url: data.image.startsWith('http') ? data.image : `${baseUrl}${data.image}`,
              width: 1200,
              height: 630
            }
          })
        };
        
      default:
        return data || null;
    }
  };

  const structuredData = getStructuredData();
  
  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}










