import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  // Remove problematic headers if they exist
  response.headers.delete('X-XSS-Protection');
  response.headers.delete('X-Frame-Options');
  response.headers.delete('Expires');
  
  // Set proper Content-Security-Policy instead of X-Frame-Options
  const existingCSP = response.headers.get('Content-Security-Policy');
  if (existingCSP) {
    // If CSP exists, ensure it has frame-ancestors
    if (!existingCSP.includes('frame-ancestors')) {
      response.headers.set('Content-Security-Policy', `${existingCSP}; frame-ancestors 'self'`);
    }
  } else {
    // Set a basic CSP with frame-ancestors
    response.headers.set('Content-Security-Policy', "frame-ancestors 'self'");
  }

  // Set proper content-type with charset for HTML responses
  const contentType = response.headers.get('Content-Type');
  if (contentType && contentType.includes('text/html') && !contentType.includes('charset')) {
    response.headers.set('Content-Type', 'text/html; charset=utf-8');
  }

  // Optimize Cache-Control (remove must-revalidate for most resources)
  const cacheControl = response.headers.get('Cache-Control');
  if (cacheControl && cacheControl.includes('must-revalidate')) {
    const optimizedCacheControl = cacheControl.replace(/,?\s*must-revalidate/g, '');
    response.headers.set('Cache-Control', optimizedCacheControl);
  }

  return response;
});