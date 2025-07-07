/**
 * Example Configuration: UI/UX Designer
 * 
 * This example shows how to configure the portfolio for a UI/UX designer
 * with skills in design tools, prototyping, and user research.
 */

import {
    Briefcase,
    Code,
    Coffee,
    Envelope,
    Eye,
    GithubLogo,
    GraduationCap,
    Heart,
    LinkedinLogo,
    Palette,
    PencilSimple,
    Phone,
    Rocket,
    TwitterLogo,
    Users
} from '@phosphor-icons/react/dist/ssr';

export const uiUxDesignerData = {
    personal: {
        name: 'Emma Thompson',
        title: 'UI/UX Designer & Product Strategist',
        bio: 'Creative designer passionate about crafting intuitive user experiences and building design systems that bridge the gap between user needs and business goals.',
        initials: 'ET',
        avatar: undefined
    },

    contact: {
        email: 'emma@emmathompsondesign.com',
        phone: '+1 (555) 456-7890',
        location: 'San Francisco, CA',
        timezone: 'PST'
    },

    socialLinks: [
        {
            platform: 'Dribbble',
            url: 'https://dribbble.com/emmathompson',
            username: '@emmathompson',
            icon: Palette,
            color: 'hover:text-pink-600',
            isPublic: true
        },
        {
            platform: 'Behance',
            url: 'https://behance.net/emmathompsonux',
            username: '@emmathompsonux',
            icon: Eye,
            color: 'hover:text-blue-600',
            isPublic: true
        },
        {
            platform: 'LinkedIn',
            url: 'https://linkedin.com/in/emma-thompson-designer',
            username: '/in/emma-thompson-designer',
            icon: LinkedinLogo,
            color: 'hover:text-blue-600',
            isPublic: true
        },
        {
            platform: 'Twitter',
            url: 'https://twitter.com/emmadesigns',
            username: '@emmadesigns',
            icon: TwitterLogo,
            color: 'hover:text-blue-400',
            isPublic: true
        },
        {
            platform: 'Email',
            url: 'mailto:emma@emmathompsondesign.com',
            username: 'emma@emmathompsondesign.com',
            icon: Envelope,
            color: 'hover:text-blue-600',
            isPublic: true
        }
    ],

    technologies: [
        // Design Tools
        {
            id: 'figma',
            name: 'Figma',
            category: 'design',
            proficiency: 'expert'
        },
        {
            id: 'sketch',
            name: 'Sketch',
            category: 'design',
            proficiency: 'advanced'
        },
        {
            id: 'adobe-xd',
            name: 'Adobe XD',
            category: 'design',
            proficiency: 'advanced'
        },
        {
            id: 'framer',
            name: 'Framer',
            category: 'design',
            proficiency: 'advanced'
        },
        {
            id: 'principle',
            name: 'Principle',
            category: 'design',
            proficiency: 'intermediate'
        },
        
        // Adobe Creative Suite
        {
            id: 'photoshop',
            name: 'Photoshop',
            category: 'design',
            proficiency: 'advanced'
        },
        {
            id: 'illustrator',
            name: 'Illustrator',
            category: 'design',
            proficiency: 'advanced'
        },
        {
            id: 'after-effects',
            name: 'After Effects',
            category: 'design',
            proficiency: 'intermediate'
        },
        
        // Frontend (for design implementation)
        {
            id: 'html',
            name: 'HTML',
            category: 'frontend',
            proficiency: 'advanced'
        },
        {
            id: 'css',
            name: 'CSS',
            category: 'frontend',
            proficiency: 'advanced'
        },
        {
            id: 'javascript',
            name: 'JavaScript',
            category: 'frontend',
            proficiency: 'intermediate'
        },
        {
            id: 'react',
            name: 'React',
            category: 'frontend',
            proficiency: 'intermediate'
        },
        
        // Research & Testing
        {
            id: 'miro',
            name: 'Miro',
            category: 'other',
            proficiency: 'advanced'
        },
        {
            id: 'notion',
            name: 'Notion',
            category: 'other',
            proficiency: 'advanced'
        },
        {
            id: 'hotjar',
            name: 'Hotjar',
            category: 'other',
            proficiency: 'intermediate'
        }
    ],

    statistics: [
        {
            label: 'Years Experience',
            value: '5+',
            description: 'Years of UI/UX design experience'
        },
        {
            label: 'Projects Designed',
            value: '50+',
            description: 'Digital products and experiences created'
        },
        {
            label: 'Design Systems',
            value: '8',
            description: 'Complete design systems built'
        },
        {
            label: 'User Tests',
            value: '100+',
            description: 'User research sessions conducted'
        },
        {
            label: 'Prototypes',
            value: '200+',
            description: 'Interactive prototypes created'
        }
    ],

    timeline: [
        {
            year: '2024',
            title: 'Senior UI/UX Designer',
            company: 'InnovateTech',
            description: 'Leading design for multiple product lines, mentoring junior designers, and establishing design system standards.',
            icon: Briefcase
        },
        {
            year: '2022',
            title: 'Product Designer',
            company: 'StartupFlow',
            description: 'Designed end-to-end user experiences for SaaS products, conducted user research, and improved conversion rates by 40%.',
            icon: Palette
        },
        {
            year: '2021',
            title: 'UI/UX Designer',
            company: 'DigitalCraft Agency',
            description: 'Created digital experiences for clients across various industries, specializing in e-commerce and mobile apps.',
            icon: PencilSimple
        },
        {
            year: '2020',
            title: 'Junior Designer',
            company: 'CreativeStudio',
            description: 'Assisted in creating UI designs, wireframes, and prototypes for web and mobile applications.',
            icon: Eye
        },
        {
            year: '2019',
            title: 'Graphic Design Degree',
            company: 'Art Institute of California',
            description: 'Bachelor of Fine Arts in Graphic Design with specialization in digital media and user interface design.',
            icon: GraduationCap
        }
    ],

    interests: [
        {
            icon: Palette,
            label: 'Design Systems',
            color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
        },
        {
            icon: Users,
            label: 'User Research',
            color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
        },
        {
            icon: Coffee,
            label: 'Typography',
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
            icon: Eye,
            title: 'User-Centered Design',
            description: 'Creating designs based on thorough user research and usability testing principles.'
        },
        {
            icon: Palette,
            title: 'Design Systems',
            description: 'Building scalable design systems that ensure consistency across all touchpoints.'
        },
        {
            icon: Users,
            title: 'Collaborative Process',
            description: 'Working closely with developers, product managers, and stakeholders to deliver successful products.'
        }
    ],

    projects: [
        {
            id: 1,
            title: 'FinTech Mobile App',
            description: 'Complete UI/UX design for a personal finance app with budgeting, investment tracking, and financial goal features.',
            year: '2024',
            category: 'mobile',
            status: 'Live',
            featured: true,
            liveUrl: 'https://fintrack-app.com',
            githubUrl: 'https://github.com/emmathompson/fintech-design',
            technologies: [
                { id: 'figma', name: 'Figma' },
                { id: 'framer', name: 'Framer' },
                { id: 'principle', name: 'Principle' },
                { id: 'miro', name: 'Miro' }
            ]
        },
        {
            id: 2,
            title: 'Healthcare Design System',
            description: 'Comprehensive design system for a healthcare platform with 100+ components, accessibility guidelines, and usage documentation.',
            year: '2024',
            category: 'web',
            status: 'Live',
            featured: true,
            liveUrl: 'https://healthcare-design-system.netlify.app',
            githubUrl: 'https://github.com/emmathompson/healthcare-design-system',
            technologies: [
                { id: 'figma', name: 'Figma' },
                { id: 'storybook', name: 'Storybook' },
                { id: 'react', name: 'React' },
                { id: 'css', name: 'CSS' }
            ]
        },
        {
            id: 3,
            title: 'E-Learning Platform Redesign',
            description: 'Complete redesign of an online learning platform focusing on improved navigation, course discovery, and learning experience.',
            year: '2023',
            category: 'web',
            status: 'Live',
            featured: true,
            liveUrl: 'https://eduplatform-redesign.com',
            githubUrl: 'https://github.com/emmathompson/eduplatform-redesign',
            technologies: [
                { id: 'figma', name: 'Figma' },
                { id: 'adobe-xd', name: 'Adobe XD' },
                { id: 'miro', name: 'Miro' },
                { id: 'hotjar', name: 'Hotjar' }
            ]
        },
        {
            id: 4,
            title: 'Travel Booking App',
            description: 'Mobile app design for travel bookings with intuitive search, comparison features, and personalized recommendations.',
            year: '2023',
            category: 'mobile',
            status: 'Completed',
            featured: false,
            liveUrl: 'https://travelbook-concept.dribbble.com',
            githubUrl: 'https://github.com/emmathompson/travel-app-design',
            technologies: [
                { id: 'sketch', name: 'Sketch' },
                { id: 'principle', name: 'Principle' },
                { id: 'invision', name: 'InVision' }
            ]
        },
        {
            id: 5,
            title: 'SaaS Dashboard Interface',
            description: 'Analytics dashboard design for a SaaS platform with complex data visualization and customizable widgets.',
            year: '2022',
            category: 'web',
            status: 'Live',
            featured: false,
            liveUrl: 'https://saas-dashboard-design.behance.net',
            githubUrl: 'https://github.com/emmathompson/saas-dashboard',
            technologies: [
                { id: 'figma', name: 'Figma' },
                { id: 'framer', name: 'Framer' },
                { id: 'chartjs', name: 'Chart.js' }
            ]
        }
    ]
};