import { NextRequest, NextResponse } from 'next/server';

// Simple placeholder image generator
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ params: string[] }> }
) {
  const resolvedParams = await params;
  const { params: slugs } = resolvedParams;
  
  // Parse dimensions from URL (e.g., /api/placeholder/800/600)
  const width = parseInt(slugs[0]) || 400;
  const height = parseInt(slugs[1]) || 300;
  
  // Clamp dimensions to reasonable limits
  const clampedWidth = Math.min(Math.max(width, 50), 2000);
  const clampedHeight = Math.min(Math.max(height, 50), 2000);
  
  // Generate SVG placeholder
  const svg = `
    <svg width="${clampedWidth}" height="${clampedHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f1f5f9;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
      <text x="50%" y="50%" text-anchor="middle" dy="0.35em" 
            font-family="system-ui, -apple-system, sans-serif" 
            font-size="${Math.min(clampedWidth, clampedHeight) * 0.08}" 
            fill="#64748b" opacity="0.8">
        ${clampedWidth} × ${clampedHeight}
      </text>
    </svg>
  `;
  
  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}