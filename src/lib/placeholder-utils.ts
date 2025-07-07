/**
 * Utility functions for generating placeholder images and blur data URLs
 */

/**
 * Generate a base64 encoded SVG for use as a blur placeholder
 * @param width - Image width
 * @param height - Image height
 * @param color - Optional background color (default: light gray)
 * @returns Base64 encoded data URL
 */
export function generateBlurDataURL(
  width: number = 400, 
  height: number = 300, 
  color: string = '#f1f5f9'
): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}" />
    </svg>
  `;
  
  const base64 = btoa(svg);

  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Generate a more colorful gradient blur placeholder
 * @param width - Image width  
 * @param height - Image height
 * @param fromColor - Starting gradient color
 * @param toColor - Ending gradient color
 * @returns Base64 encoded data URL
 */
export function generateGradientBlurDataURL(
  width: number = 400,
  height: number = 300,
  fromColor: string = '#f1f5f9',
  toColor: string = '#e2e8f0'
): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${fromColor};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${toColor};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
    </svg>
  `;
  
  const base64 = btoa(svg);

  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Get a placeholder image URL for the built-in API route
 * @param width - Image width
 * @param height - Image height
 * @returns Placeholder API URL
 */
export function getPlaceholderURL(width: number = 400, height: number = 300): string {

  return `/api/placeholder/${width}/${height}`;
}

/**
 * Common blur data URLs for frequently used sizes
 */
export const COMMON_BLUR_DATA_URLS = {
  small: generateBlurDataURL(200, 150),
  medium: generateBlurDataURL(400, 300),
  large: generateBlurDataURL(800, 600),
  avatar: generateBlurDataURL(128, 128),
  hero: generateGradientBlurDataURL(1200, 800, '#dbeafe', '#e0e7ff'),
  card: generateGradientBlurDataURL(300, 200, '#f8fafc', '#f1f5f9')
} as const;