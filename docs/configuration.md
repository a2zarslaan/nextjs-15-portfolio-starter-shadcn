# Configuration Guide

This guide provides detailed information about configuring your portfolio template. The configuration system is designed to be centralized, type-safe, and easy to maintain.

## Overview

The portfolio template uses multiple configuration files for organized data management:

- **`src/lib/site-data.ts`** - Contains personal data, projects, and general content
- **`src/lib/work-data.ts`** - Contains professional experience, skills, and case studies
- **`src/lib/blog-data.ts`** - Contains blog posts and FAQ items
- **`src/lib/fun-data.ts`** - Contains hobbies, goals, and personal projects
- **`src/lib/ui-constants.ts`** - Contains UI text, labels, and interface copy

## Quick Setup

Run the interactive setup script to configure your portfolio:

```bash
npm run setup
```

This will guide you through personalizing your portfolio data step by step.

## Core Data Configuration

### Site Data Configuration (`src/lib/site-data.ts`)

#### Personal Information

```typescript
personal: {
    name: string;           // Your full name
    title: string;          // Your professional title
    bio: string;            // Brief bio (2-3 sentences)
    initials: string;       // 2-3 character initials for avatar
    avatar?: string;        // Optional: path to avatar image
}
```

**Example:**
```typescript
personal: {
    name: 'Jane Smith',
    title: 'Frontend Developer & UX Designer',
    bio: 'Passionate about creating intuitive user experiences and building scalable web applications with modern technologies.',
    initials: 'JS',
    avatar: '/images/avatar.jpg' // Optional
}
```

### Contact Information

```typescript
contact: {
    email: string;      // Your professional email
    phone: string;      // Your phone number (can be empty)
    location: string;   // Your location
    timezone: string;   // Your timezone abbreviation
}
```

**Example:**
```typescript
contact: {
    email: 'jane@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    timezone: 'PST'
}
```

### Social Links

```typescript
socialLinks: SocialLink[] = [
    {
        platform: string;   // Platform name (GitHub, LinkedIn, etc.)
        url: string;        // Full URL to your profile
        username: string;   // Your username/handle
        icon: IconComponent; // Phosphor icon component
        color: string;      // Tailwind hover color classes
        isPublic: boolean;  // Whether to display publicly
    }
]
```

**Available Icons:**
- `GithubLogo` - GitHub
- `LinkedinLogo` - LinkedIn
- `TwitterLogo` - Twitter/X
- `Envelope` - Email
- `Phone` - Phone
- `MapPin` - Location

**Example:**
```typescript
socialLinks: [
    {
        platform: 'GitHub',
        url: 'https://github.com/janesmith',
        username: '@janesmith',
        icon: GithubLogo,
        color: 'hover:text-neutral-900 dark:hover:text-neutral-100',
        isPublic: true
    },
    {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/janesmith',
        username: '/in/janesmith',
        icon: LinkedinLogo,
        color: 'hover:text-blue-600',
        isPublic: true
    }
]
```

### Technologies and Skills

```typescript
technologies: Technology[] = [
    {
        id: string;                 // Unique identifier
        name: string;               // Display name
        icon?: IconComponent;       // Optional icon
        color?: string;             // Optional color
        category: 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'other';
        proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    }
]
```

**Categories:**
- `frontend` - Frontend technologies (React, Vue, Angular, etc.)
- `backend` - Backend technologies (Node.js, Python, etc.)
- `database` - Database technologies (PostgreSQL, MongoDB, etc.)
- `devops` - DevOps and deployment tools (AWS, Docker, etc.)
- `design` - Design tools and skills (Figma, Sketch, etc.)
- `other` - Other technologies and tools

**Example:**
```typescript
technologies: [
    {
        id: 'react',
        name: 'React',
        category: 'frontend',
        proficiency: 'expert'
    },
    {
        id: 'nodejs',
        name: 'Node.js',
        category: 'backend',
        proficiency: 'advanced'
    },
    {
        id: 'figma',
        name: 'Figma',
        category: 'design',
        proficiency: 'intermediate'
    }
]
```

### Statistics

```typescript
statistics: Statistic[] = [
    {
        label: string;          // Statistic label
        value: string;          // Value (can include symbols)
        description?: string;   // Optional description
    }
]
```

**Common Statistics:**
- Years of experience
- Projects completed
- Happy clients
- Technologies mastered
- Certifications earned

**Example:**
```typescript
statistics: [
    {
        label: 'Years Experience',
        value: '5+',
        description: 'Years of professional development experience'
    },
    {
        label: 'Projects Completed',
        value: '50+',
        description: 'Successful projects delivered'
    }
]
```

### Career Timeline

```typescript
timeline: TimelineItem[] = [
    {
        year: string;           // Year or date range
        title: string;          // Job title or degree
        company: string;        // Company or institution
        description: string;    // Brief description
        icon?: IconComponent;   // Optional icon
    }
]
```

**Recommended Icons:**
- `Briefcase` - Work positions
- `Code` - Development roles
- `GraduationCap` - Education
- `Rocket` - Startups or launches
- `Users` - Team leadership roles

**Example:**
```typescript
timeline: [
    {
        year: '2024',
        title: 'Senior Frontend Developer',
        company: 'Tech Innovations Inc.',
        description: 'Leading frontend development for a team of 5 developers, focusing on React and Next.js applications.',
        icon: Briefcase
    },
    {
        year: '2021',
        title: 'Computer Science Degree',
        company: 'State University',
        description: 'Bachelor of Science in Computer Science, graduated magna cum laude.',
        icon: GraduationCap
    }
]
```

### Projects Portfolio

```typescript
projects: Project[] = [
    {
        id: number;                     // Unique project ID
        title: string;                  // Project name
        description: string;            // Project description
        year: string;                   // Year completed
        category: 'web' | 'mobile' | 'desktop' | 'api' | 'other';
        status: 'Live' | 'In Development' | 'Completed' | 'Archived';
        featured: boolean;              // Show on homepage
        liveUrl: string;                // Live project URL
        githubUrl: string;              // GitHub repository URL
        technologies: ProjectTechnology[]; // Technologies used
        image?: string;                 // Optional screenshot
        coverImage?: string;            // Optional cover image
    }
]
```

## Work Data Configuration (`src/lib/work-data.ts`)

### Professional Experience

```typescript
experience: Experience[] = [
    {
        id: number;
        company: string;
        position: string;
        duration: string;
        location: string;
        type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
        description: string;
        achievements: string[];
        technologies: string[];
        projects: {
            name: string;
            description: string;
            impact: string;
            timeline: string;
        }[];
    }
]
```

### Skills and Proficiencies

```typescript
skills: SkillCategory[] = [
    {
        category: string;
        icon: IconComponent;
        skills: {
            name: string;
            level: number;      // 0-100
            years: number;      // Years of experience
        }[];
    }
]
```

### Case Studies

```typescript
caseStudies: CaseStudy[] = [
    {
        id: number;
        title: string;
        client: string;
        duration: string;
        team: string;
        overview: string;
        challenge: string;
        solution: string;
        results: {
            metric: string;
            before: string;
            after: string;
            improvement: string;
        }[];
        technologies: string[];
        lessons: string[];
    }
]
```

## Blog Data Configuration (`src/lib/blog-data.ts`)

### Blog Posts

```typescript
blogPosts: BlogPost[] = [
    {
        id: number;
        title: string;
        excerpt: string;
        category: 'technical' | 'personal' | 'tutorial';
        date: string;           // YYYY-MM-DD format
        readTime: string;       // e.g., "8 min"
        tags: string[];
        content: string;        // HTML content
    }
]
```

### FAQ Items

```typescript
faqItems: FAQ[] = [
    {
        question: string;
        answer: string;
    }
]
```

## Fun Data Configuration (`src/lib/fun-data.ts`)

### Hobbies

```typescript
hobbies: Hobby[] = [
    {
        id: string;
        name: string;
        icon: IconComponent;
        description: string;
        images: {
            id: number;
            url: string;
            alt: string;
            description: string;
        }[];
        stats: {
            [key: string]: string | number;
        };
    }
]
```

### Personal Goals

```typescript
goals2024: Goal[] = [
    {
        name: string;
        current: number;
        target: number;
        unit: string;
    }
]
```

### Personal Projects

```typescript
personalProjects: PersonalProject[] = [
    {
        id: number;
        name: string;
        description: string;
        status: 'Active' | 'In Progress' | 'Planning' | 'Completed';
        image: string;
        technologies: string[];
        link: string;
    }
]
```

**Example:**
```typescript
projects: [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform with modern UI, secure payments, and admin dashboard.',
        year: '2024',
        category: 'web',
        status: 'Live',
        featured: true,
        liveUrl: 'https://my-ecommerce-site.com',
        githubUrl: 'https://github.com/janesmith/ecommerce-platform',
        technologies: [
            { id: 'react', name: 'React' },
            { id: 'nextjs', name: 'Next.js' },
            { id: 'stripe', name: 'Stripe' }
        ]
    }
]
```

### Interests and Hobbies

```typescript
interests: Interest[] = [
    {
        icon: IconComponent;    // Phosphor icon
        label: string;          // Interest name
        color: string;          // Tailwind color classes
    }
]
```

**Example:**
```typescript
interests: [
    {
        icon: Code,
        label: 'Clean Code',
        color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
    },
    {
        icon: Palette,
        label: 'UI/UX Design',
        color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
    }
]
```

### Features (Homepage)

```typescript
features: Feature[] = [
    {
        icon: IconComponent;    // Phosphor icon
        title: string;          // Feature title
        description: string;    // Feature description
    }
]
```

**Example:**
```typescript
features: [
    {
        icon: Code,
        title: 'Clean Code',
        description: 'Well-structured, maintainable code following industry best practices.'
    },
    {
        icon: Rocket,
        title: 'Performance',
        description: 'Optimized for speed and user experience with modern web technologies.'
    }
]
```

## UI Constants Configuration

### Page Headings

```typescript
headings: {
    home: {
        hero: string;           // Main homepage headline
        heroAccent: string;     // Highlighted part of headline
        technologies: string;   // Technologies section heading
        cta: string;           // Call-to-action heading
    },
    about: {
        hero: string;          // About page hero (usually your name)
        myStory: string;       // Story section heading
        journey: string;       // Journey section heading
        letsConnect: string;   // Connect section heading
        skillsAndTechnologies: string; // Skills section heading
        interests: string;     // Interests section heading
    },
    // ... other pages
}
```

### Descriptions

```typescript
descriptions: {
    home: {
        hero: string;           // Homepage hero description
        technologies: string;   // Technologies section description
        cta: string;           // Call-to-action description
    },
    about: {
        subtitle: string;       // About page subtitle
        bio: string;           // Bio text
        story1: string;        // First story paragraph
        story2: string;        // Second story paragraph
        story3: string;        // Third story paragraph
    },
    // ... other pages
}
```

### Button Labels

```typescript
buttons: {
    getInTouch: string;     // "Get In Touch"
    letsTalk: string;       // "Let's Talk"
    viewWork: string;       // "View My Work"
    viewProjects: string;   // "View Projects"
    contact: string;        // "Contact"
    demo: string;           // "Demo"
    code: string;           // "Code"
    sendMessage: string;    // "Send Message"
    download: string;       // "Download"
    learnMore: string;      // "Learn More"
}
```

## Helper Functions

The configuration system provides several helper functions to access your data:

### Personal Data (`site-data.ts`)
- `getPersonalInfo()` - Get personal information
- `getContactInfo()` - Get contact information
- `getSocialLinks()` - Get all social links
- `getPublicSocialLinks()` - Get only public social links

### Technologies (`site-data.ts`)
- `getTechnologies()` - Get all technologies
- `getTechnologiesByCategory(category)` - Get technologies by category
- `getTechnologyNames()` - Get array of technology names

### Projects (`site-data.ts`)
- `getProjects()` - Get all projects
- `getFeaturedProjects()` - Get featured projects only
- `getProjectsByCategory(category)` - Get projects by category
- `getProjectsByStatus(status)` - Get projects by status
- `getProjectById(id)` - Get specific project by ID
- `getRecentProjects(limit)` - Get recent projects
- `getLiveProjects()` - Get projects that are live
- `getProjectsByTechnology(technologyId)` - Get projects using specific technology

### Statistics (`site-data.ts`)
- `getStatistics()` - Get all statistics
- `getAboutPageStats()` - Get statistics formatted for about page

### Work Data (`work-data.ts`)
- `experience` - Professional experience array
- `skills` - Skills organized by category
- `caseStudies` - Detailed case studies

### Blog Data (`blog-data.ts`)
- `blogPosts` - All blog posts
- `faqItems` - FAQ items

### Fun Data (`fun-data.ts`)
- `hobbies` - Hobbies with images and stats
- `goals2024` - Personal goals for 2024
- `personalProjects` - Personal side projects

## API Infrastructure

The template includes a dynamic placeholder image generation API:

### Placeholder API (`/api/placeholder/[...params]`)

Generate placeholder images with custom dimensions:

```
/api/placeholder/400/300        // 400x300 image
/api/placeholder/800/600        // 800x600 image
/api/placeholder/1200/800       // 1200x800 image
```

**Features:**
- SVG-based placeholder generation
- Automatic dimension clamping (50-2000px)
- Responsive and lightweight
- Used throughout the template for demo content

## Template Files

The template includes template files for easy setup:

- `src/lib/site-data.template.ts` - Template for personal data
- `src/lib/ui-constants.template.ts` - Template for UI constants
- `scripts/setup.js` - Interactive setup script

## Professional Examples

The template includes complete portfolio examples:

- `/examples/frontend-developer` - Frontend developer portfolio
- `/examples/fullstack-developer` - Full stack developer portfolio
- `/examples/ui-ux-designer` - UI/UX designer portfolio

Each example includes:
- Customized data structure
- Role-specific content
- Tailored design elements
- Professional presentation

## Tips for Configuration

1. **Keep it Updated**: Regularly update your projects and experience
2. **Use Consistent Formatting**: Maintain consistent style in descriptions
3. **Optimize for SEO**: Use descriptive titles and meta descriptions
4. **Test Locally**: Always test changes locally before deploying
5. **Backup Configuration**: Keep backups of your configuration files

## Common Issues

### Missing Icons
Make sure to import icons from `@phosphor-icons/react/dist/ssr`:
```typescript
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr';
```

### Invalid URLs
Ensure all URLs are complete and valid:
```typescript
// ✅ Good
url: 'https://github.com/username'

// ❌ Bad
url: 'github.com/username'
```

### TypeScript Errors
If you encounter TypeScript errors, check that:
- All required fields are provided
- Enum values match the allowed options
- Icon imports are correct

## Advanced Configuration

### Custom Hooks

The template includes advanced custom hooks:

```typescript
// src/hooks/use-site-data.ts
// Site data management hook

// src/hooks/use-intersection-observer.ts
// Intersection observer for animations

// src/hooks/use-meta-color.ts
// Theme-based meta color management
```

### Component Architecture

The template uses a streamlined component registry:

- **Registry Path**: `src/registry/new-york-v4/ui/`
- **Essential Components**: Only core UI components included
- **Removed Components**: 100+ unused components removed for performance
- **Layout System**: Advanced layout components in `src/components/layout/`

### Enhanced Features

```typescript
// Cursor glow effect
src/components/cursor-glow.tsx

// Loading bar for page transitions
src/components/layout/loading-bar.tsx

// Enhanced theme switching
src/components/layout/theme-switch.tsx
```

### Custom Categories
You can extend the category types by modifying the interfaces:

```typescript
// Add new project category
category: 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'other' | 'mobile';

// Add new blog category
category: 'technical' | 'personal' | 'tutorial' | 'industry';
```

### Environment-Specific Configuration
You can create different configurations for different environments:

```typescript
// site-data.development.ts
// site-data.production.ts
```

## Next Steps

Once you've configured your data:

1. **Test locally**: Run `npm run dev` to see your changes
2. **Validate**: Run `npm run validate` to check for issues
3. **Build**: Run `npm run build` to test production build
4. **Deploy**: Deploy to your chosen platform

For more advanced customization, see the [Customization Guide](customization.md).