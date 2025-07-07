# Customization Guide

This guide covers advanced customization options for your portfolio template. Learn how to modify the design, add new features, and extend the functionality to match your unique style and requirements.

## Overview

The portfolio template is built with extensive customization capabilities. You can:
- Modify colors, fonts, and styling with CSS variables
- Add new page sections and components
- Create custom components with the enhanced layout system
- Extend the multi-file data structure
- Add new pages and routes with the App Router
- Customize the API infrastructure
- Leverage advanced hooks and animations
- Use professional example templates as starting points

## Styling Customization

### Color Scheme

The template uses CSS variables for theming. Modify colors in `src/app/globals.css`:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 10% 3.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    /* ... other dark mode colors */
  }
}
```

### Creating a Custom Color Palette

1. **Choose your brand colors**:
```css
:root {
  /* Your brand colors */
  --brand-primary: 250 84% 54%;    /* Purple */
  --brand-secondary: 142 76% 36%;  /* Green */
  --brand-accent: 38 92% 50%;      /* Orange */
}
```

2. **Apply to components**:
```css
.hero-gradient {
  background: linear-gradient(135deg, hsl(var(--brand-primary)), hsl(var(--brand-secondary)));
}

.accent-color {
  color: hsl(var(--brand-accent));
}
```

3. **Use in Tailwind classes**:
```typescript
// In your component
<div className="bg-gradient-to-r from-[hsl(var(--brand-primary))] to-[hsl(var(--brand-secondary))]">
```

### Typography

The template uses Geist fonts by default. Modify fonts in `src/app/layout.tsx`:

```typescript
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

// Current implementation:
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// Custom font example:
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});
```

Update your CSS variables:
```css
:root {
  --font-sans: var(--font-inter);
  --font-mono: var(--font-jetbrains-mono);
  --font-heading: var(--font-playfair-display);
}
```

### Enhanced Layout System

The template includes an advanced layout system in `src/components/layout/`:

```typescript
// Container component with size variants
import { Container } from '@/components/layout';

<Container size="lg">  {/* sm, md, lg, xl, full */}
  <YourContent />
</Container>

// Navigation with enhanced features
import { NavigationBar, NavigationLinks } from '@/components/layout';

// Footer component
import { Footer } from '@/components/layout';

// Loading bar for page transitions
import { LoadingBar } from '@/components/layout';

// Enhanced theme switch with accessibility
import { ThemeSwitch } from '@/components/layout';
```

### Custom Components

Create custom components building on the existing system:

#### Custom Button Component

```typescript
// src/components/ui/custom-button.tsx
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  gradient?: boolean;
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = 'primary', size = 'md', gradient = false, ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-primary text-primary-foreground hover:bg-primary/90': variant === 'primary' && !gradient,
            'bg-gradient-to-r from-[hsl(var(--brand-primary))] to-[hsl(var(--brand-secondary))] text-white hover:shadow-lg hover:scale-105': variant === 'primary' && gradient,
            'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
            'border border-input bg-background hover:bg-accent hover:text-accent-foreground': variant === 'outline',
            'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
            'h-8 px-3 text-sm': size === 'sm',
            'h-10 px-4 py-2': size === 'md',
            'h-12 px-6 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

CustomButton.displayName = 'CustomButton';

export { CustomButton };
```

#### Using the Cursor Glow Component

The template includes a built-in cursor glow effect:

```typescript
// src/components/cursor-glow.tsx (already included)
import { CursorGlow } from '@/components/cursor-glow';

// Add to your layout or specific pages
<CursorGlow />
```

#### Enhanced Card Component

Build on the existing card styling patterns:

```typescript
// src/components/ui/enhanced-card.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { cn } from '@/lib/utils';

interface EnhancedCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export function EnhancedCard({ 
  title, 
  children, 
  className, 
  glowOnHover = true 
}: EnhancedCardProps) {
  return (
    <Card className={cn(
      'group h-full transition-all duration-300',
      glowOnHover && 'hover:shadow-xl hover:shadow-primary/10',
      className
    )}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent className="h-full">
        {children}
      </CardContent>
    </Card>
  );
}
```

## Adding New Sections

### Creating a New Section Component

```typescript
// src/components/sections/testimonials.tsx
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Others Say
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Feedback from colleagues and clients I've worked with
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6">
              <CardContent className="p-0">
                <blockquote className="text-sm leading-relaxed mb-4">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Adding to Data Structure

Update your `site-data.ts` to include testimonials:

```typescript
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export const siteData = {
  // ... existing data
  testimonials: [
    {
      id: 1,
      name: 'John Doe',
      role: 'Product Manager',
      company: 'Tech Corp',
      content: 'Amazing work! The project was delivered on time and exceeded expectations.',
      avatar: '/images/testimonial-1.jpg'
    }
  ] as Testimonial[]
};

// Add helper function
export const getTestimonials = () => siteData.testimonials;
```

### Using the New Section

```typescript
// src/app/page.tsx or src/app/about/page.tsx
import { Testimonials } from '@/components/sections/testimonials';
import { getTestimonials } from '@/lib/site-data';

export default function Page() {
  const testimonials = getTestimonials();

  return (
    <div>
      {/* Other sections */}
      <Testimonials testimonials={testimonials} />
    </div>
  );
}
```

## Adding New Pages

### Extending Existing Pages

The template includes comprehensive pages that you can extend:

1. **Blog Page** (`src/app/blog/`):
```typescript
// Already implemented with blog-client.tsx
import { blogPosts } from '@/lib/blog-data';

// The page includes:
- Blog post listing with categories
- Interactive filtering
- FAQ section
- Professional styling
```

2. **Work Page** (`src/app/work/`):
```typescript
// Already implemented with work-client.tsx
import { experience, skills, caseStudies } from '@/lib/work-data';

// Features include:
- Professional experience timeline
- Skills with proficiency levels
- Detailed case studies
- Tab-based navigation
```

3. **Fun Page** (`src/app/fun/`):
```typescript
// Already implemented with fun-client.tsx
import { hobbies, goals2024, personalProjects } from '@/lib/fun-data';

// Includes:
- Hobby showcases with images
- Personal goals tracking
- Side project displays
```

### Creating Custom Pages

1. **Create a new route**:
```typescript
// src/app/custom-page/page.tsx
export default function CustomPage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold">Custom Page</h1>
      {/* Your content */}
    </div>
  );
}
```

2. **Add to navigation** (if needed):
```typescript
// src/lib/ui-constants.ts (already comprehensive)
export const NAVIGATION = {
  home: 'Home',
  about: 'About',
  work: 'Work',
  projects: 'Projects',
  blog: 'Blog',
  fun: 'Fun',
  contact: 'Contact',
  examples: 'Examples'
};

// Navigation is automatically configured
// Add custom pages to QUICK_LINKS if needed
```

3. **Navigation is already configured**:
```typescript
// src/components/layout/navigation-links.tsx
// Already includes all main pages with TypeScript interfaces
// Responsive design with mobile menu
// Active state handling
// Hover effects and animations
```
```

## Advanced Customizations

### Using Built-in Hooks

The template includes advanced custom hooks:

```typescript
// src/hooks/use-intersection-observer.ts
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

function MyComponent() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });

  return (
    <div 
      ref={ref} 
      className={`transition-opacity duration-1000 ${
        isIntersecting ? 'opacity-100' : 'opacity-0'
      }`}
    >
      Content that fades in when visible
    </div>
  );
}

// src/hooks/use-meta-color.ts
import { useMetaColor } from '@/hooks/use-meta-color';

function ThemedComponent() {
  useMetaColor(); // Automatically manages theme-based meta colors
  return <YourContent />;
}

// src/hooks/use-site-data.ts
import { useSiteData } from '@/hooks/use-site-data';

function DataComponent() {
  const { personal, contact, projects } = useSiteData();
  return <YourContent />;
}
```

### Motion Animations

The template uses Motion (Framer Motion) for animations:

```typescript
import { motion } from 'motion';

// Fade in animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>

// Staggered children animation
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map((item, index) => (
    <motion.div
      key={index}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

### API Route Customization

Extend the existing API infrastructure:

```typescript
// src/app/api/placeholder/[...params]/route.ts (existing)
// Generates dynamic placeholder images

// Add custom API routes:
// src/app/api/contact/route.ts
export async function POST(request: Request) {
  const body = await request.json();
  // Handle contact form submission
  return new Response(JSON.stringify({ success: true }));
}

// src/app/api/blog/route.ts
export async function GET() {
  // Return blog posts as JSON API
  return Response.json(blogPosts);
}
```

### Custom Data Extensions

Extend the existing data structure:

```typescript
// Add to existing data files:
// src/lib/work-data.ts
export const certifications = [
  {
    name: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024-01-15',
    credentialId: 'ABC123',
    url: 'https://...',
    icon: Shield
  }
];

// src/lib/fun-data.ts
export const achievements = [
  {
    title: 'Marathon Finisher',
    description: 'Completed first marathon',
    date: '2024-10-15',
    category: 'fitness'
  }
];
```
```

### Professional Examples

Use the included professional examples as starting points:

```typescript
// src/app/examples/frontend-developer/page.tsx
// Complete frontend developer portfolio

// src/app/examples/fullstack-developer/page.tsx
// Full stack developer portfolio

// src/app/examples/ui-ux-designer/page.tsx
// UI/UX designer portfolio

// Each includes:
- Role-specific data structure
- Customized layouts and components
- Professional presentation
- Industry-relevant content
```

### Theme System Enhancement

The template includes an enhanced theme system:

```typescript
// Enhanced theme switching with:
- Automatic meta color management
- Smooth transitions
- System preference detection
- Accessibility improvements
- Loading state handling

// Customization in globals.css:
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  /* Add custom CSS variables */
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  /* Dark mode variants */
}
```
```

## Performance Optimization

### Performance Optimizations

The template includes built-in optimizations:

```typescript
// Bundle analysis with environment variable
BUNDLE_ANALYZER_ENABLED=true npm run build

// Streamlined component registry
// Only essential components included
// 100+ unused components removed

// Standalone output for deployment
// next.config.ts includes:
export default {
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react']
  }
};

// Lazy loading with dynamic imports:
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./heavy-component'), {
  loading: () => <div className="animate-pulse">Loading...</div>,
  ssr: false,
});
```

### Built-in Image System

The template includes an optimized image system:

```typescript
// Placeholder API for development
/api/placeholder/400/300  // Generates 400x300 placeholder

// Used throughout data files:
const hobbies = [
  {
    images: [
      {
        url: '/api/placeholder/400/300',
        alt: 'Description',
        description: 'Image description'
      }
    ]
  }
];

// Next.js Image optimization:
import Image from 'next/image';

<Image
  src="/api/placeholder/400/300"
  alt="Description"
  width={400}
  height={300}
  className="rounded-lg"
  priority={false}
/>

// For production, replace placeholder URLs with real images
// The API automatically clamps dimensions (50-2000px)
```
```

## Best Practices

1. **Component Structure**:
   - Keep components small and focused
   - Use TypeScript for type safety
   - Follow the single responsibility principle

2. **Styling**:
   - Use CSS variables for consistent theming
   - Prefer Tailwind classes over custom CSS
   - Maintain consistent spacing and typography

3. **Performance**:
   - Lazy load heavy components
   - Optimize images with Next.js Image component
   - Use React.memo for expensive components

4. **Accessibility**:
   - Always include alt text for images
   - Use semantic HTML elements
   - Ensure proper keyboard navigation

5. **Testing**:
   - Test components in isolation
   - Test different screen sizes
   - Verify dark mode compatibility

## Troubleshooting

### Common Issues

1. **Styles not applying**: Check Tailwind class names and CSS variable names
2. **Components not rendering**: Verify import paths and component names
3. **TypeScript errors**: Check type definitions and prop types
4. **Build errors**: Ensure all dependencies are installed

### Getting Help

- Check the [configuration guide](configuration.md) for data structure help
- Review component source code for examples
- Check the Next.js and Tailwind CSS documentation
- Open an issue on GitHub for bugs or feature requests

## Next Steps

- Explore the [deployment guide](deployment.md) for publishing your portfolio
- Check out example configurations for inspiration
- Join the community discussions for tips and tricks

Remember to test your customizations thoroughly and maintain backups of your configuration files!