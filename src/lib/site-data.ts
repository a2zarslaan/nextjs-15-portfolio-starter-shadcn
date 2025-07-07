import {
    ArrowRight,
    Briefcase,
    Calendar,
    Code,
    Coffee,
    Envelope,
    GithubLogo,
    GraduationCap,
    Heart,
    LinkedinLogo,
    MapPin,
    Palette,
    Phone,
    Rocket,
    TwitterLogo,
    Users
} from '@phosphor-icons/react/dist/ssr';

// Type definitions for centralized data
export interface PersonalInfo {
    name: string;
    title: string;
    bio: string;
    initials: string;
    avatar?: string;
}

export interface ContactInfo {
    email: string;
    phone: string;
    location: string;
    timezone: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    username: string;
    icon: any; // Icon component type
    color: string;
    isPublic: boolean;
}

export interface Technology {
    id: string;
    name: string;
    icon?: any;
    color?: string;
    category: 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'other';
    proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Statistic {
    label: string;
    value: string;
    description?: string;
}

export interface TimelineItem {
    year: string;
    title: string;
    company: string;
    description: string;
    icon?: any;
}

export interface Interest {
    icon: any;
    label: string;
    color: string;
}

export interface Feature {
    icon: any;
    title: string;
    description: string;
}

export interface ProjectTechnology {
    id: string;
    name: string;
    icon?: any;
    color?: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    year: string;
    category: 'web' | 'mobile' | 'desktop' | 'api' | 'other';
    status: 'Live' | 'In Development' | 'Completed' | 'Archived';
    featured: boolean;
    liveUrl: string;
    githubUrl: string;
    technologies: ProjectTechnology[];
    image?: string;
    coverImage?: string;
}

// Centralized site data
export const siteData = {
    // Personal Information
    personal: {
        name: 'Your Name',
        title: 'Your Professional Title',
        bio: 'A brief description of your passion and expertise. Keep it concise but compelling.',
        initials: 'YN',
        avatar: undefined
    } as PersonalInfo,

    // Contact Information
    contact: {
        email: 'hello@yourname.com',
        phone: '+1 (555) 123-4567',
        location: 'Your City, State/Country',
        timezone: 'YOUR_TIMEZONE'
    } as ContactInfo,

    // Social Media Links
    socialLinks: [
        {
            platform: 'GitHub',
            url: 'https://github.com/username',
            username: '@username',
            icon: GithubLogo,
            color: 'hover:text-neutral-900 dark:hover:text-neutral-100',
            isPublic: true
        },
        {
            platform: 'LinkedIn',
            url: 'https://linkedin.com/in/username',
            username: '/in/username',
            icon: LinkedinLogo,
            color: 'hover:text-blue-600',
            isPublic: true
        },
        {
            platform: 'Twitter',
            url: 'https://twitter.com/username',
            username: '@username',
            icon: TwitterLogo,
            color: 'hover:text-blue-400',
            isPublic: true
        },
        {
            platform: 'Email',
            url: 'mailto:hello@yourname.com',
            username: 'hello@yourname.com',
            icon: Envelope,
            color: 'hover:text-blue-600',
            isPublic: true
        }
    ] as SocialLink[],

    // Technologies & Skills
    technologies: [
        {
            id: 'react',
            name: 'React',
            category: 'frontend',
            proficiency: 'expert'
        },
        {
            id: 'nextjs',
            name: 'Next.js',
            category: 'frontend',
            proficiency: 'expert'
        },
        {
            id: 'typescript',
            name: 'TypeScript',
            category: 'frontend',
            proficiency: 'advanced'
        },
        {
            id: 'tailwind',
            name: 'Tailwind CSS',
            category: 'frontend',
            proficiency: 'advanced'
        },
        {
            id: 'nodejs',
            name: 'Node.js',
            category: 'backend',
            proficiency: 'advanced'
        },
        {
            id: 'python',
            name: 'Python',
            category: 'backend',
            proficiency: 'advanced'
        },
        {
            id: 'postgresql',
            name: 'PostgreSQL',
            category: 'database',
            proficiency: 'intermediate'
        },
        {
            id: 'mongodb',
            name: 'MongoDB',
            category: 'database',
            proficiency: 'intermediate'
        },
        {
            id: 'aws',
            name: 'AWS',
            category: 'devops',
            proficiency: 'intermediate'
        },
        {
            id: 'docker',
            name: 'Docker',
            category: 'devops',
            proficiency: 'intermediate'
        },
        {
            id: 'graphql',
            name: 'GraphQL',
            category: 'backend',
            proficiency: 'intermediate'
        },
        {
            id: 'restapi',
            name: 'REST APIs',
            category: 'backend',
            proficiency: 'advanced'
        },
        {
            id: 'figma',
            name: 'Figma',
            category: 'design',
            proficiency: 'intermediate'
        }
    ] as Technology[],

    // Statistics
    statistics: [
        {
            label: 'Years Experience',
            value: '3+',
            description: 'Years of development experience'
        },
        {
            label: 'Projects Completed',
            value: '20+',
            description: 'Successful projects delivered'
        },
        {
            label: 'Happy Clients',
            value: '10+',
            description: 'Satisfied clients and stakeholders'
        },
        {
            label: 'Technologies',
            value: '15+',
            description: 'Technologies and frameworks learned'
        },
        {
            label: 'Passion Driven',
            value: '100%',
            description: 'Commitment to quality and innovation'
        }
    ] as Statistic[],

    // Career Timeline
    timeline: [
        {
            year: '2024',
            title: 'Your Current Position',
            company: 'Current Company',
            description: 'Brief description of your current role and achievements.',
            icon: Briefcase
        },
        {
            year: '2022',
            title: 'Previous Position',
            company: 'Previous Company',
            description: 'Description of your previous role and key accomplishments.',
            icon: Code
        },
        {
            year: '2020',
            title: 'Education or Earlier Role',
            company: 'School/University or Company',
            description: 'Your educational background or earlier professional experience.',
            icon: GraduationCap
        }
    ] as TimelineItem[],

    // Interests
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
            label: 'Your Hobby',
            color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
        },
        {
            icon: Heart,
            label: 'Your Interest',
            color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
        }
    ] as Interest[],

    // Features (for homepage)
    features: [
        {
            icon: Code,
            title: 'Clean Code',
            description: 'Well-structured, maintainable code following industry best practices and modern standards.'
        },
        {
            icon: Palette,
            title: 'Beautiful Design',
            description: 'Pixel-perfect user interfaces with attention to detail.'
        },
        {
            icon: Rocket,
            title: 'Performance',
            description: 'Optimized for speed and user experience.'
        }
    ] as Feature[],

    // Projects Portfolio
    projects: [
        {
            id: 1,
            title: 'Your Featured Project',
            description: 'A detailed description of your most impressive project.',
            year: '2024',
            category: 'web',
            status: 'Live',
            featured: true,
            liveUrl: 'https://your-project.com',
            githubUrl: 'https://github.com/yourusername/project',
            technologies: [
                { id: 'react', name: 'React' },
                { id: 'nextjs', name: 'Next.js' },
                { id: 'typescript', name: 'TypeScript' }
            ]
        },
        {
            id: 2,
            title: 'Another Great Project',
            description: 'Description of another project you want to showcase.',
            year: '2024',
            category: 'web',
            status: 'Live',
            featured: true,
            liveUrl: 'https://another-project.com',
            githubUrl: 'https://github.com/yourusername/another-project',
            technologies: [
                { id: 'react', name: 'React' },
                { id: 'nodejs', name: 'Node.js' }
            ]
        },
        {
            id: 3,
            title: 'Third Project',
            description: 'Description of your third project.',
            year: '2023',
            category: 'web',
            status: 'Completed',
            featured: false,
            liveUrl: 'https://third-project.com',
            githubUrl: 'https://github.com/yourusername/third-project',
            technologies: [
                { id: 'react', name: 'React' },
                { id: 'tailwind', name: 'Tailwind CSS' }
            ]
        }
    ] as Project[]
};

// Helper functions to access specific data
export const getPersonalInfo = () => siteData.personal;
export const getContactInfo = () => siteData.contact;
export const getSocialLinks = () => siteData.socialLinks;
export const getTechnologies = () => siteData.technologies;
export const getStatistics = () => siteData.statistics;
export const getFeatures = () => siteData.features;

// Filtered data accessors
export const getTechnologiesByCategory = (category: Technology['category']) =>
    siteData.technologies.filter((tech) => tech.category === category);

export const getPublicSocialLinks = () => siteData.socialLinks.filter((link) => link.isPublic);

export const getContactSocialLinks = () => siteData.socialLinks.filter((link) => link.platform !== 'Email');

export const getEmailLink = () => siteData.socialLinks.find((link) => link.platform === 'Email');

// Technology names as simple array (for backward compatibility)
export const getTechnologyNames = () => siteData.technologies.map((tech) => tech.name);



export const getAboutPageStats = () => [
    siteData.statistics[0], // Years Experience
    siteData.statistics[1], // Projects Completed
    siteData.statistics[3], // Technologies
    siteData.statistics[4] // Passion Driven
];

// Project-related helper functions
export const getProjects = () => siteData.projects;

export const getFeaturedProjects = () => siteData.projects.filter((project) => project.featured);

export const getProjectsByCategory = (category: Project['category']) =>
    siteData.projects.filter((project) => project.category === category);

export const getProjectsByStatus = (status: Project['status']) =>
    siteData.projects.filter((project) => project.status === status);

export const getProjectById = (id: number) => siteData.projects.find((project) => project.id === id);

export const getRecentProjects = (limit: number = 3) => 
    siteData.projects
        .sort((a, b) => parseInt(b.year) - parseInt(a.year))
        .slice(0, limit);

// Project utility functions
export const getProjectTechnologies = (projectId: number): ProjectTechnology[] => {
    const project = getProjectById(projectId);

    return project?.technologies || [];
};

export const getProjectsByTechnology = (technologyId: string) =>
    siteData.projects.filter((project) =>
        project.technologies.some((tech) => tech.id === technologyId)
    );

export const getLiveProjects = () => siteData.projects.filter((project) => project.status === 'Live');

export const getCompletedProjects = () => siteData.projects.filter((project) => project.status === 'Completed');

export const getInDevelopmentProjects = () => siteData.projects.filter((project) => project.status === 'In Development');
