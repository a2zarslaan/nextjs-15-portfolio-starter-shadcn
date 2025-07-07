# Deployment Guide

This guide covers deploying your portfolio to various hosting platforms. Each platform has different benefits and setup requirements.

## Quick Deployment Checklist

Before deploying, ensure:
- [ ] All configuration is complete in data files (`site-data.ts`, `work-data.ts`, `blog-data.ts`, `fun-data.ts`)
- [ ] Personal information has been updated across all data files
- [ ] Placeholder images replaced with real images (or keep API placeholders)
- [ ] API routes are functioning (`/api/placeholder/[...params]`)
- [ ] Build succeeds locally (`npm run build`)
- [ ] All page routes work (About, Work, Projects, Blog, Fun, Contact, Examples)
- [ ] Dark mode and theme switching function properly
- [ ] Site is mobile responsive across all pages
- [ ] Professional examples are customized if used
- [ ] Interactive setup script configured (`npm run setup`)

## Platform Comparisons

| Platform | Ease of Use | Cost | Custom Domain | Analytics | API Routes | CDN |
|----------|-------------|------|---------------|-----------|------------|-----|
| Vercel | ⭐⭐⭐⭐⭐ | Free/Paid | ✅ | ✅ | ✅ | ✅ |
| Netlify | ⭐⭐⭐⭐ | Free/Paid | ✅ | ✅ | Limited | ✅ |
| GitHub Pages | ⭐⭐ | Free | ✅ | Limited | ❌ | ✅ |
| Railway | ⭐⭐⭐⭐ | Free/Paid | ✅ | Limited | ✅ | ✅ |
| DigitalOcean | ⭐⭐⭐ | Paid | ✅ | Custom | ✅ | ✅ |

**Note:** GitHub Pages and static hosting platforms don't support the API routes. Use Vercel, Railway, or other full-stack platforms for complete functionality.

## Vercel (Recommended)

Vercel is the creator of Next.js and provides the best experience for Next.js applications.

### Prerequisites
- GitHub account
- Vercel account (free)

### Deployment Steps

1. **Push to GitHub**:
```bash
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/yourusername/your-portfolio.git
git push -u origin main
```

2. **Deploy with Vercel CLI**:
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# ? Set up and deploy "~/your-portfolio"? [Y/n] y
# ? Which scope do you want to deploy to? [Your Account]
# ? Link to existing project? [y/N] n
# ? What's your project's name? your-portfolio
# ? In which directory is your code located? ./
```

3. **Deploy via Vercel Dashboard**:
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure settings (usually automatic for Next.js)
   - Click "Deploy"

### Environment Variables

If you need environment variables:

```bash
# In your project root
echo "NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id" > .env.local
```

Add to Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add your variables

### Custom Domain

1. **Purchase a domain** (Namecheap, GoDaddy, etc.)
2. **Add domain in Vercel**:
   - Go to Project Settings → Domains
   - Add your domain
   - Follow DNS configuration instructions

### Performance Optimization

```javascript
// vercel.json (optional)
{
  "functions": {
    "app/api/**/*.js": {
      "maxDuration": 10
    }
  },
  "images": {
    "domains": ["your-domain.com"],
    "formats": ["image/webp", "image/avif"]
  },
  "headers": [
    {
      "source": "/api/placeholder/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### API Routes Configuration

The template includes API routes that require server-side rendering:

```typescript
// src/app/api/placeholder/[...params]/route.ts
// Generates dynamic SVG placeholder images
// Works on any platform supporting Next.js API routes
```
```

## Netlify

Netlify offers excellent static site hosting with continuous deployment.

### Deployment Steps

1. **Build Configuration**:
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. **Deploy via Git**:
   - Push code to GitHub
   - Connect GitHub repository to Netlify
   - Configure build settings
   - Deploy

3. **Deploy via Netlify CLI**:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Production deploy
netlify deploy --prod
```

### Static Export for Netlify

**⚠️ Important:** Static export will disable API routes. The placeholder image API will not work.

For static export, update `next.config.ts`:
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
  // Note: API routes won't work with static export
}

export default nextConfig
```

**Alternative:** Use Netlify Functions for API routes:
```javascript
// netlify/functions/placeholder.js
exports.handler = async (event, context) => {
  // Implement placeholder generation
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'image/svg+xml' },
    body: '<!-- SVG content -->'
  }
}
```

### Environment Variables

Add in Netlify dashboard:
- Site Settings → Environment Variables
- Add your variables

## GitHub Pages

Free hosting for open source projects.

### Setup Steps

1. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to Pages section
   - Select source: GitHub Actions

2. **Create GitHub Action**:
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: npm
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

3. **Configure Next.js for GitHub Pages**:
```typescript
// next.config.ts
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/your-repo-name/' : '',
  basePath: isProd ? '/your-repo-name' : '',
  images: {
    unoptimized: true
  }
  // Note: API routes are disabled with static export
  // Placeholder images will need to be real images
}

export default nextConfig
```

**Important for GitHub Pages:**
- API routes won't work (including `/api/placeholder/[...params]`)
- Replace all `/api/placeholder/` URLs with real images before deployment
- Consider using external image services or commit images to the repository

## Railway

Modern hosting platform with simple deployment.

### Deployment Steps

1. **Connect GitHub**:
   - Visit [railway.app](https://railway.app)
   - Connect your GitHub account
   - Select your portfolio repository

2. **Configure Build**:
Railway automatically detects Next.js projects. No additional configuration needed.

3. **Environment Variables**:
Add in Railway dashboard under Variables tab.

4. **Custom Domain**:
- Go to Settings → Domains
- Add your custom domain

## DigitalOcean App Platform

Scalable hosting with more control.

### Deployment Steps

1. **Create App**:
   - Visit DigitalOcean → App Platform
   - Create new app from GitHub repository

2. **Configure Build**:
```yaml
# .do/app.yaml
name: portfolio
services:
- name: web
  source_dir: /
  github:
    repo: yourusername/your-portfolio
    branch: main
  run_command: npm start
  build_command: npm run build
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  routes:
  - path: /
  - path: /api
    type: API
  environment:
  - key: NODE_ENV
    value: production
```

3. **Environment Variables**:
Add in app configuration under Environment Variables.

## Docker Deployment

For containerized deployment on any platform.

### Dockerfile

The template includes both Node.js and Bun Dockerfiles:

```dockerfile
# Dockerfile (Node.js version)
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]
```

```dockerfile
# Dockerfile.bun (Bun version)
FROM oven/bun:1 AS base
WORKDIR /app

# Install dependencies
FROM base AS deps
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# Build the application
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
```

### Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  portfolio:
    build: 
      context: .
      dockerfile: Dockerfile  # or Dockerfile.bun
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://yourdomain.com
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/api/placeholder/100/100"]
      interval: 30s
      timeout: 10s
      retries: 3
```

### Deploy Commands

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio

# With docker-compose
docker-compose up -d
```

## Self-Hosted Options

### VPS Deployment

1. **Server Setup**:
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20 (required for Next.js 15)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx -y

# Optional: Install Bun
curl -fsSL https://bun.sh/install | bash
```

2. **Deploy Application**:
```bash
# Clone repository
git clone https://github.com/yourusername/your-portfolio.git
cd your-portfolio

# Install dependencies
npm install

# Build application
npm run build

# Start with PM2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

3. **Configure Nginx**:
```nginx
# /etc/nginx/sites-available/portfolio
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

4. **Enable SSL**:
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Post-Deployment Checklist

After deploying to any platform:

### Testing
- [ ] All pages load correctly (Home, About, Work, Projects, Blog, Fun, Contact)
- [ ] All internal links work
- [ ] Images display properly (including placeholder API)
- [ ] API routes function (`/api/placeholder/[...params]`)
- [ ] Dark mode toggle works with proper theme switching
- [ ] Mobile responsiveness across all pages
- [ ] Tab navigation works on multi-tab pages (Work, Blog, Fun)
- [ ] Professional examples load if used (`/examples/*`)
- [ ] Social media links open correctly
- [ ] Contact information is accurate
- [ ] Interactive elements function (hover effects, animations)
- [ ] Loading states work properly

### SEO Setup
- [ ] Add Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Tag Manager (optional)
- [ ] Configure social media meta tags
- [ ] Add favicon and app icons

### Performance
- [ ] Test site speed (PageSpeed Insights)
- [ ] Optimize images if needed
- [ ] Enable compression
- [ ] Set up monitoring (optional)

### Security
- [ ] HTTPS is enabled
- [ ] Security headers are configured
- [ ] No sensitive data in client-side code

## Troubleshooting

### Common Build Issues

1. **Build fails with missing dependencies**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Or with Bun
rm -rf node_modules bun.lockb
bun install
```

2. **Static export issues with API routes**:
```typescript
// next.config.ts - ensure proper configuration
const nextConfig = {
  output: 'export',  // Disables API routes
  images: {
    unoptimized: true
  }
}

// For static hosting, replace API placeholder URLs:
// From: '/api/placeholder/400/300'
// To: '/images/placeholder-400x300.jpg'
```

3. **API route issues**:
- API routes require server-side rendering (SSR)
- Don't work with static export (`output: 'export'`)
- Test API routes locally: `http://localhost:3000/api/placeholder/400/300`

4. **Environment variable issues**:
- Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access
- Check platform-specific environment variable configuration
- API routes have access to all environment variables

5. **TypeScript build errors**:
```bash
# Check TypeScript configuration
npm run lint
npm run build

# Common fixes:
- Ensure all data files match their TypeScript interfaces
- Check import paths are correct
- Verify icon imports from @phosphor-icons/react/dist/ssr
```

### Performance Issues

1. **Slow loading**:
- Template already optimizes images with Next.js Image component
- Placeholder API is lightweight SVG-based
- Enable compression on hosting platform
- Use CDN for static assets
- Bundle analyzer available: `BUNDLE_ANALYZER_ENABLED=true npm run build`

2. **Large bundle size**:
- Template already removes 100+ unused shadcn components
- Streamlined registry includes only essential components
- Uses standalone output for optimal deployments
- Phosphor icons are optimized for tree-shaking
- Motion (Framer Motion) is optimized for performance

3. **API route performance**:
- Placeholder API includes proper caching headers
- SVG generation is fast and lightweight
- Consider caching strategies for production

```typescript
// Add to vercel.json for caching:
{
  "headers": [
    {
      "source": "/api/placeholder/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Domain Issues

1. **Custom domain not working**:
- Check DNS configuration
- Wait for DNS propagation (up to 48 hours)
- Verify SSL certificate
- Ensure API routes work with custom domain

2. **HTTPS not working**:
- Check SSL certificate configuration
- Ensure proper redirects from HTTP to HTTPS
- Verify API routes work over HTTPS

3. **API routes not working on custom domain**:
- Check if hosting platform supports API routes
- Verify routing configuration
- Test API endpoints directly: `https://yourdomain.com/api/placeholder/100/100`

### Data Migration Issues

1. **Missing data structure**:
- Ensure all data files are properly configured
- Run `npm run setup` for guided configuration
- Check TypeScript interfaces match data structure

2. **Template placeholders not replaced**:
- Update personal information in all data files
- Replace placeholder URLs with real content
- Customize professional examples if used

## Getting Help

- **Platform Documentation**:
  - [Vercel Docs](https://vercel.com/docs) - Best for full-stack features
  - [Netlify Docs](https://docs.netlify.com) - Good for static sites
  - [GitHub Pages Docs](https://docs.github.com/en/pages) - Free but no API routes
  - [Railway Docs](https://docs.railway.app) - Full-stack alternative

- **Next.js Resources**:
  - [Next.js 15 Documentation](https://nextjs.org/docs)
  - [App Router Guide](https://nextjs.org/docs/app)
  - [API Routes Documentation](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

- **Community Support**:
  - Next.js Discord
  - Platform-specific communities
  - Stack Overflow
  - Template-specific discussions

- **Professional Support**:
  - Consider professional hosting services for critical deployments
  - Contact platform support for enterprise needs
  - Ensure hosting platform supports your required features (API routes, etc.)

## Template-Specific Deployment Notes

- **API Routes Required**: Use platforms that support Next.js API routes (Vercel, Railway, DigitalOcean)
- **Static Export Limitations**: API routes won't work with static hosting
- **Professional Examples**: Customize before deployment if using example templates
- **Data Files**: Ensure all data files are properly configured and personalized
- **Placeholder Images**: Replace with real images for production or keep API placeholders

Remember to keep your deployment configuration in version control and document any custom setup steps for future reference!