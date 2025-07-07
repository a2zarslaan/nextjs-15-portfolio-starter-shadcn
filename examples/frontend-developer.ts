/**
 * Example Configuration: Frontend Developer
 * 
 * This example shows how to configure the portfolio for a frontend developer
 * specializing in React, Vue, and modern web technologies.
 */

import {
    Briefcase,
    Code,
    Coffee,
    Envelope,
    GithubLogo,
    GraduationCap,
    Heart,
    LinkedinLogo,
    Palette,
    Phone,
    Rocket,
    TwitterLogo,
    Users
} from '@phosphor-icons/react/dist/ssr';

export const frontendDeveloperData = {
    personal: {
        name: 'Sarah Chen',
        title: 'Frontend Developer & UI/UX Enthusiast',
        bio: 'Passionate about creating intuitive user experiences and building scalable web applications with modern JavaScript frameworks.',
        initials: 'SC',
        avatar: undefined
    },

    contact: {
        email: 'sarah@sarahchen.dev',
        phone: '+1 (555) 234-5678',
        location: 'Seattle, WA',
        timezone: 'PST'
    },

    socialLinks: [
        {
            platform: 'GitHub',
            url: 'https://github.com/sarahchen',
            username: '@sarahchen',
            icon: GithubLogo,
            color: 'hover:text-neutral-900 dark:hover:text-neutral-100',
            isPublic: true
        },
        {
            platform: 'LinkedIn',
            url: 'https://linkedin.com/in/sarahchen-dev',
            username: '/in/sarahchen-dev',
            icon: LinkedinLogo,
            color: 'hover:text-blue-600',
            isPublic: true
        },
        {
            platform: 'Twitter',
            url: 'https://twitter.com/sarahbuilds',
            username: '@sarahbuilds',
            icon: TwitterLogo,
            color: 'hover:text-blue-400',
            isPublic: true
        },
        {
            platform: 'Email',
            url: 'mailto:sarah@sarahchen.dev',
            username: 'sarah@sarahchen.dev',
            icon: Envelope,
            color: 'hover:text-blue-600',
            isPublic: true
        }
    ],

    technologies: [
        // Frontend Frameworks
        {
            id: 'react',
            name: 'React',
            category: 'frontend',
            proficiency: 'expert'
        },
        {
            id: 'vue',
            name: 'Vue.js',
            category: 'frontend',
            proficiency: 'advanced'
        },
        {
            id: 'nextjs',
            name: 'Next.js',
            category: 'frontend',
            proficiency: 'advanced'
        },
        {
            id: 'typescript',
            name: 'TypeScript',
            category: 'frontend',
            proficiency: 'advanced'
        },
        
        // Styling
        {
            id: 'tailwind',
            name: 'Tailwind CSS',
            category: 'frontend',
            proficiency: 'expert'
        },
        {
            id: 'sass',
            name: 'Sass/SCSS',
            category: 'frontend',
            proficiency: 'advanced'
        },
        {
            id: 'styledcomponents',
            name: 'Styled Components',
            category: 'frontend',
            proficiency: 'advanced'
        },
        
        // Tools & Build
        {
            id: 'webpack',
            name: 'Webpack',
            category: 'devops',
            proficiency: 'intermediate'
        },
        {
            id: 'vite',
            name: 'Vite',
            category: 'devops',
            proficiency: 'advanced'
        },
        {
            id: 'jest',
            name: 'Jest',
            category: 'other',
            proficiency: 'intermediate'
        },
        
        // Design
        {
            id: 'figma',
            name: 'Figma',
            category: 'design',
            proficiency: 'advanced'
        },
        {
            id: 'sketch',
            name: 'Sketch',
            category: 'design',
            proficiency: 'intermediate'
        }
    ],

    statistics: [
        {
            label: 'Years Experience',
            value: '4+',
            description: 'Years of frontend development experience'
        },
        {
            label: 'Projects Delivered',
            value: '35+',
            description: 'Successful web applications launched'
        },
        {
            label: 'Components Built',
            value: '200+',
            description: 'Reusable UI components created'
        },
        {
            label: 'Frameworks',
            value: '6+',
            description: 'Frontend frameworks and libraries mastered'
        },
        {
            label: 'Design Systems',
            value: '3',
            description: 'Complete design systems implemented'
        }
    ],

    timeline: [
        {
            year: '2024',
            title: 'Senior Frontend Developer',
            company: 'TechFlow Solutions',
            description: 'Leading frontend architecture for a team of 8 developers, focusing on React and TypeScript applications.',
            icon: Briefcase
        },
        {
            year: '2022',
            title: 'Frontend Developer',
            company: 'StartupHub Inc.',
            description: 'Built responsive web applications using React, Vue.js, and modern CSS frameworks for 5+ clients.',
            icon: Code
        },
        {
            year: '2021',
            title: 'Junior Frontend Developer',
            company: 'Digital Innovations',
            description: 'Developed UI components and implemented designs using HTML, CSS, JavaScript, and React.',
            icon: Code
        },
        {
            year: '2020',
            title: 'Web Development Bootcamp',
            company: 'CodeAcademy Pro',
            description: 'Intensive 6-month program covering modern web development with JavaScript, React, and Node.js.',
            icon: GraduationCap
        }
    ],

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
        },
        {
            icon: Coffee,
            label: 'Coffee Art',
            color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
        },
        {
            icon: Heart,
            label: 'Accessibility',
            color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
        }
    ],

    features: [
        {
            icon: Palette,
            title: 'Pixel Perfect Design',
            description: 'Translating designs into responsive, accessible, and performant user interfaces.'
        },
        {
            icon: Rocket,
            title: 'Performance Focused',
            description: 'Optimizing bundle sizes, implementing lazy loading, and ensuring fast load times.'
        },
        {
            icon: Users,
            title: 'User-Centered',
            description: 'Building intuitive interfaces that prioritize user experience and accessibility.'
        }
    ],

    projects: [
        {
            id: 1,
            title: 'E-Learning Platform',
            description: 'A comprehensive online learning platform with video streaming, progress tracking, and interactive quizzes built with React and TypeScript.',
            year: '2024',
            category: 'web',
            status: 'Live',
            featured: true,
            liveUrl: 'https://eduflow-platform.com',
            githubUrl: 'https://github.com/sarahchen/eduflow-platform',
            technologies: [
                { id: 'react', name: 'React' },
                { id: 'typescript', name: 'TypeScript' },
                { id: 'tailwind', name: 'Tailwind CSS' },
                { id: 'nextjs', name: 'Next.js' },
                { id: 'framer', name: 'Framer Motion' }
            ]
        },
        {
            id: 2,
            title: 'Design System Library',
            description: 'A comprehensive component library with 50+ reusable components, documentation, and Storybook integration.',
            year: '2024',
            category: 'web',
            status: 'Live',
            featured: true,
            liveUrl: 'https://flowui-components.netlify.app',
            githubUrl: 'https://github.com/sarahchen/flowui-library',
            technologies: [
                { id: 'react', name: 'React' },
                { id: 'storybook', name: 'Storybook' },
                { id: 'typescript', name: 'TypeScript' },
                { id: 'sass', name: 'Sass' }
            ]
        },
        {
            id: 3,
            title: 'Real Estate Dashboard',
            description: 'Interactive dashboard for real estate agents with property listings, analytics, and client management features.',
            year: '2023',
            category: 'web',
            status: 'Live',
            featured: true,
            liveUrl: 'https://realestate-pro-dashboard.com',
            githubUrl: 'https://github.com/sarahchen/realestate-dashboard',
            technologies: [
                { id: 'vue', name: 'Vue.js' },
                { id: 'vuetify', name: 'Vuetify' },
                { id: 'chartjs', name: 'Chart.js' },
                { id: 'typescript', name: 'TypeScript' }
            ]
        },
        {
            id: 4,
            title: 'Weather Forecast App',
            description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
            year: '2023',
            category: 'web',
            status: 'Live',
            featured: false,
            liveUrl: 'https://weatherpro-app.vercel.app',
            githubUrl: 'https://github.com/sarahchen/weather-app',
            technologies: [
                { id: 'react', name: 'React' },
                { id: 'tailwind', name: 'Tailwind CSS' },
                { id: 'api', name: 'Weather API' },
                { id: 'mapbox', name: 'Mapbox' }
            ]
        }
    ]
};