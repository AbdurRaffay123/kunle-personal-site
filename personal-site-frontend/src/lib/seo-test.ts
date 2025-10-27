/**
 * SEO Testing utilities
 * Helps verify SEO implementation across all routes
 */

export interface SEOTestResult {
  url: string;
  title: string;
  description: string;
  hasCanonical: boolean;
  hasOpenGraph: boolean;
  hasTwitterCard: boolean;
  hasStructuredData: boolean;
  errors: string[];
}

export const ROUTES_TO_TEST = [
  '/',
  '/contact',
  '/project', 
  '/research',
  '/notes',
  '/blog',
  '/notepad'
];

export async function testSEOImplementation(): Promise<SEOTestResult[]> {
  const results: SEOTestResult[] = [];
  
  for (const route of ROUTES_TO_TEST) {
    try {
      const result = await testRouteSEO(route);
      results.push(result);
    } catch (error) {
      results.push({
        url: route,
        title: '',
        description: '',
        hasCanonical: false,
        hasOpenGraph: false,
        hasTwitterCard: false,
        hasStructuredData: false,
        errors: [`Failed to test route: ${error}`]
      });
    }
  }
  
  return results;
}

async function testRouteSEO(route: string): Promise<SEOTestResult> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const fullUrl = `${baseUrl}${route}`;
  
  try {
    const response = await fetch(fullUrl);
    const html = await response.text();
    
    const errors: string[] = [];
    
    // Extract title
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : '';
    
    // Extract description
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i);
    const description = descMatch ? descMatch[1] : '';
    
    // Check for canonical URL
    const hasCanonical = /<link[^>]*rel=["']canonical["'][^>]*>/i.test(html);
    if (!hasCanonical) errors.push('Missing canonical URL');
    
    // Check for Open Graph tags
    const hasOpenGraph = /<meta[^>]*property=["']og:/i.test(html);
    if (!hasOpenGraph) errors.push('Missing Open Graph tags');
    
    // Check for Twitter Card tags
    const hasTwitterCard = /<meta[^>]*name=["']twitter:/i.test(html);
    if (!hasTwitterCard) errors.push('Missing Twitter Card tags');
    
    // Check for structured data
    const hasStructuredData = /<script[^>]*type=["']application\/ld\+json["'][^>]*>/i.test(html);
    if (!hasStructuredData) errors.push('Missing structured data');
    
    return {
      url: route,
      title,
      description,
      hasCanonical,
      hasOpenGraph,
      hasTwitterCard,
      hasStructuredData,
      errors
    };
  } catch (error) {
    return {
      url: route,
      title: '',
      description: '',
      hasCanonical: false,
      hasOpenGraph: false,
      hasTwitterCard: false,
      hasStructuredData: false,
      errors: [`Failed to fetch route: ${error}`]
    };
  }
}

export function generateSEOTestReport(results: SEOTestResult[]): string {
  let report = '# SEO Implementation Test Report\n\n';
  
  const totalRoutes = results.length;
  const routesWithErrors = results.filter(r => r.errors.length > 0).length;
  const routesWithoutErrors = totalRoutes - routesWithErrors;
  
  report += `## Summary\n`;
  report += `- Total routes tested: ${totalRoutes}\n`;
  report += `- Routes with errors: ${routesWithErrors}\n`;
  report += `- Routes without errors: ${routesWithoutErrors}\n`;
  report += `- Success rate: ${Math.round((routesWithoutErrors / totalRoutes) * 100)}%\n\n`;
  
  report += `## Detailed Results\n\n`;
  
  results.forEach(result => {
    report += `### ${result.url}\n`;
    report += `- **Title**: ${result.title || 'Missing'}\n`;
    report += `- **Description**: ${result.description || 'Missing'}\n`;
    report += `- **Canonical URL**: ${result.hasCanonical ? '✅' : '❌'}\n`;
    report += `- **Open Graph**: ${result.hasOpenGraph ? '✅' : '❌'}\n`;
    report += `- **Twitter Card**: ${result.hasTwitterCard ? '✅' : '❌'}\n`;
    report += `- **Structured Data**: ${result.hasStructuredData ? '✅' : '❌'}\n`;
    
    if (result.errors.length > 0) {
      report += `- **Errors**:\n`;
      result.errors.forEach(error => {
        report += `  - ${error}\n`;
      });
    }
    
    report += '\n';
  });
  
  return report;
}







