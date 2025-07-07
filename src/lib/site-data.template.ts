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
    /** Your full name as it should appear on the website */
    name: string;
    /** Your professional title or role */
    title: string;
    /** A brief bio describing your passion and expertise */
    bio: string;
    /** Your initials for avatar display (2-3 characters) */
    initials: string;
    /** Optional: Path to your avatar image */
    avatar?: string;
}

export interface ContactInfo {
    /** Your professional email address */
    email: string;
    /** Your phone number (optional, can be left empty) */
    phone: string;
    /** Your location (city, state/country) */
    location: string;
    /** Your timezone abbreviation (e.g., PST, EST, GMT) */
    timezone: string;
}

export interface SocialLink {
    /** Platform name (e.g., GitHub, LinkedIn, Twitter) */
    platform: string;
    /** Full URL to your profile */
    url: string;
    /** Your username or handle with @ symbol */
    username: string;
    /** Icon component from Phosphor Icons */
    icon: any;
    /** Tailwind CSS hover color classes */
    color: string;
    /** Whether this link should be displayed publicly */
    isPublic: boolean;
}

export interface Technology {
    /** Unique identifier for the technology */
    id: string;
    /** Display name of the technology */
    name: string;
    /** Optional: Icon component */
    icon?: any;
    /** Optional: Color for the technology */
    color?: string;
    /** Category classification */
    category: 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'other';
    /** Your skill level with this technology */
    proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Statistic {
    /** Label for the statistic */
    label: string;
    /** Value (can include symbols like + or %) */
    value: string;
    /** Optional: Detailed description */
    description?: string;
}

export interface TimelineItem {
    /** Year or date range */
    year: string;
    /** Job title or degree */
    title: string;
    /** Company or institution name */
    company: string;
    /** Brief description of role/achievements */
    description: string;
    /** Optional: Icon from Phosphor Icons */
    icon?: any;
}

export interface Interest {
    /** Icon component from Phosphor Icons */
    icon: any;
    /** Interest label */
    label: string;
    /** Tailwind CSS color classes for styling */
    color: string;
}

export interface Feature {
    /** Icon component from Phosphor Icons */
    icon: any;
    /** Feature title */
    title: string;
    /** Feature description */
    description: string;
}

export interface ProjectTechnology {
    /** Unique identifier matching main technologies */
    id: string;
    /** Display name */
    name: string;
    /** Optional: Icon component */
    icon?: any;
    /** Optional: Color for display */
    color?: string;
}

export interface Project {
    /** Unique project identifier */
    id: number;
    /** Project title */
    title: string;
    /** Project description */
    description: string;
    /** Year completed or started */
    year: string;
    /** Project category */
    category: 'web' | 'mobile' | 'desktop' | 'api' | 'other';
    /** Current status */
    status: 'Live' | 'In Development' | 'Completed' | 'Archived';
    /** Whether to feature on homepage */
    featured: boolean;
    /** Live project URL */
    liveUrl: string;
    /** GitHub repository URL */
    githubUrl: string;
    /** Technologies used in this project */
    technologies: ProjectTechnology[];
    /** Optional: Project screenshot */
    image?: string;
    /** Optional: Cover image for detailed view */
    coverImage?: string;
}

// =============================================================================
// TEMPLATE DATA - CUSTOMIZE THIS SECTION FOR YOUR PORTFOLIO
// =============================================================================

/**
 * Main site data configuration
 * 
 * This template provides a complete portfolio structure. Replace the placeholder
 * data below with your own information. Each section is well-documented to help
 * you understand what to include.
 */
export const siteData = {
    // Personal Information
    personal: {
        name: 'Your Name',
        title: 'Your Professional Title',
        bio: 'A brief description of your passion and expertise. Keep it concise but compelling.',
        initials: 'YN', // Your initials for avatar display
        avatar: undefined // Optional: add path to your avatar image
    } as PersonalInfo,

    // Contact Information
    contact: {
        email: 'hello@yourname.com',
        phone: '+1 (555) 123-4567', // Optional: leave empty if you prefer not to show
        location: 'Your City, State/Country',
        timezone: 'YOUR_TIMEZONE' // e.g., PST, EST, GMT, etc.
    } as ContactInfo,

    // Social Media Links
    // Add your social media profiles here. Set isPublic to false to hide any links.
    socialLinks: [
        {
            platform: 'GitHub',
            url: 'https://github.com/yourusername',
            username: '@yourusername',
            icon: GithubLogo,
            color: 'hover:text-neutral-900 dark:hover:text-neutral-100',
            isPublic: true
        },
        {
            platform: 'LinkedIn',
            url: 'https://linkedin.com/in/yourusername',
            username: '/in/yourusername',
            icon: LinkedinLogo,
            color: 'hover:text-blue-600',
            isPublic: true
        },
        {
            platform: 'Twitter',
            url: 'https://twitter.com/yourusername',
            username: '@yourusername',
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
    // List your technical skills and proficiency levels
    technologies: [
        // Frontend Technologies
        {
            id: 'react',
            name: 'React',
            category: 'frontend',
            proficiency: 'expert' // beginner | intermediate | advanced | expert
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
        {
            id: 'tailwind',
            name: 'Tailwind CSS',
            category: 'frontend',
            proficiency: 'advanced'
        },
        
        // Backend Technologies
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
            proficiency: 'intermediate'
        },
        
        // Databases
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
        
        // DevOps & Tools
        {
            id: 'aws',
            name: 'AWS',
            category: 'devops',
            proficiency: 'beginner'
        },
        {
            id: 'docker',
            name: 'Docker',
            category: 'devops',
            proficiency: 'intermediate'
        },
        
        // Design
        {
            id: 'figma',
            name: 'Figma',
            category: 'design',
            proficiency: 'intermediate'
        }
    ] as Technology[],

    // Statistics
    // Update these numbers to reflect your experience
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
    // Add your professional experience and education
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
    // Add your professional interests and hobbies
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
    // Highlight your key strengths
    features: [
        {
            icon: Code,
            title: 'Clean Code',
            description: 'Well-structured, maintainable code following industry best practices.'
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
    // Add your projects here - start with 3-6 projects
    projects: [
        {
            id: 1,
            title: 'Your Featured Project',
            description: 'A detailed description of your most impressive project.',
            year: '2024',
            category: 'web',
            status: 'Live',
            featured: true, // This will appear on homepage
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

// =============================================================================
// HELPER FUNCTIONS - DON'T MODIFY THESE
// =============================================================================

// Helper functions to access specific data
export const getPersonalInfo = () => siteData.personal;
export const getContactInfo = () => siteData.contact;
export const getSocialLinks = () => siteData.socialLinks;
export const getTechnologies = () => siteData.technologies;
export const getStatistics = () => siteData.statistics;
export const getTimeline = () => siteData.timeline;
export const getInterests = () => siteData.interests;
export const getFeatures = () => siteData.features;

// Filtered data accessors
export const getTechnologiesByCategory = (category: Technology['category']) =>
    siteData.technologies.filter((tech) => tech.category === category);

export const getPublicSocialLinks = () => siteData.socialLinks.filter((link) => link.isPublic);

export const getContactSocialLinks = () => siteData.socialLinks.filter((link) => link.platform !== 'Email');

export const getEmailLink = () => siteData.socialLinks.find((link) => link.platform === 'Email');

// Technology names as simple array (for backward compatibility)
export const getTechnologyNames = () => siteData.technologies.map((tech) => tech.name);

// Statistics formatted for different layouts
export const getHomePageStats = () => [
    siteData.statistics[1], // Projects Completed
    siteData.statistics[2], // Happy Clients
    siteData.statistics[0], // Years Experience
    siteData.statistics[3] // Technologies
];

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