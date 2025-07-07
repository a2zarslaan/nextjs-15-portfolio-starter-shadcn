/**
 * Example Configuration: Full Stack Developer
 * 
 * This example shows how to configure the portfolio for a full stack developer
 * with experience in both frontend and backend technologies.
 */

import {
    Briefcase,
    Code,
    Coffee,
    Database,
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

export const fullstackDeveloperData = {
    personal: {
        name: 'Michael Rodriguez',
        title: 'Full Stack Developer & Cloud Architect',
        bio: 'Experienced full stack developer passionate about building scalable web applications and cloud-native solutions that solve real-world problems.',
        initials: 'MR',
        avatar: undefined
    },

    contact: {
        email: 'michael@devmichael.com',
        phone: '+1 (555) 345-6789',
        location: 'Austin, TX',
        timezone: 'CST'
    },

    socialLinks: [
        {
            platform: 'GitHub',
            url: 'https://github.com/michaeldev',
            username: '@michaeldev',
            icon: GithubLogo,
            color: 'hover:text-neutral-900 dark:hover:text-neutral-100',
            isPublic: true
        },
        {
            platform: 'LinkedIn',
            url: 'https://linkedin.com/in/michael-rodriguez-dev',
            username: '/in/michael-rodriguez-dev',
            icon: LinkedinLogo,
            color: 'hover:text-blue-600',
            isPublic: true
        },
        {
            platform: 'Twitter',
            url: 'https://twitter.com/mikecodes',
            username: '@mikecodes',
            icon: TwitterLogo,
            color: 'hover:text-blue-400',
            isPublic: true
        },
        {
            platform: 'Email',
            url: 'mailto:michael@devmichael.com',
            username: 'michael@devmichael.com',
            icon: Envelope,
            color: 'hover:text-blue-600',
            isPublic: true
        }
    ],

    technologies: [
        // Frontend
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
        
        // Backend
        {
            id: 'nodejs',
            name: 'Node.js',
            category: 'backend',
            proficiency: 'expert'
        },
        {
            id: 'python',
            name: 'Python',
            category: 'backend',
            proficiency: 'advanced'
        },
        {
            id: 'express',
            name: 'Express.js',
            category: 'backend',
            proficiency: 'expert'
        },
        {
            id: 'fastapi',
            name: 'FastAPI',
            category: 'backend',
            proficiency: 'advanced'
        },
        {
            id: 'graphql',
            name: 'GraphQL',
            category: 'backend',
            proficiency: 'advanced'
        },
        
        // Databases
        {
            id: 'postgresql',
            name: 'PostgreSQL',
            category: 'database',
            proficiency: 'advanced'
        },
        {
            id: 'mongodb',
            name: 'MongoDB',
            category: 'database',
            proficiency: 'advanced'
        },
        {
            id: 'redis',
            name: 'Redis',
            category: 'database',
            proficiency: 'intermediate'
        },
        
        // Cloud & DevOps
        {
            id: 'aws',
            name: 'AWS',
            category: 'devops',
            proficiency: 'advanced'
        },
        {
            id: 'docker',
            name: 'Docker',
            category: 'devops',
            proficiency: 'advanced'
        },
        {
            id: 'kubernetes',
            name: 'Kubernetes',
            category: 'devops',
            proficiency: 'intermediate'
        },
        {
            id: 'terraform',
            name: 'Terraform',
            category: 'devops',
            proficiency: 'intermediate'
        }
    ],

    statistics: [
        {
            label: 'Years Experience',
            value: '6+',
            description: 'Years of full stack development experience'
        },
        {
            label: 'Projects Delivered',
            value: '40+',
            description: 'End-to-end applications built and deployed'
        },
        {
            label: 'APIs Built',
            value: '25+',
            description: 'RESTful and GraphQL APIs created'
        },
        {
            label: 'Cloud Deployments',
            value: '30+',
            description: 'Applications deployed to cloud platforms'
        },
        {
            label: 'Databases Designed',
            value: '15+',
            description: 'Database schemas and architectures'
        }
    ],

    timeline: [
        {
            year: '2024',
            title: 'Senior Full Stack Developer',
            company: 'CloudTech Innovations',
            description: 'Leading full stack development and cloud architecture for enterprise applications serving 100K+ users.',
            icon: Briefcase
        },
        {
            year: '2022',
            title: 'Full Stack Developer',
            company: 'StartupVentures',
            description: 'Built and scaled multiple SaaS applications from MVP to production using modern tech stack.',
            icon: Code
        },
        {
            year: '2020',
            title: 'Backend Developer',
            company: 'DataSolutions Inc.',
            description: 'Developed APIs and microservices handling high-volume data processing and real-time analytics.',
            icon: Database
        },
        {
            year: '2019',
            title: 'Frontend Developer',
            company: 'WebCrafters',
            description: 'Created responsive web applications and improved user experience for client projects.',
            icon: Palette
        },
        {
            year: '2018',
            title: 'Computer Science Degree',
            company: 'University of Texas',
            description: 'Bachelor of Science in Computer Science with focus on software engineering and algorithms.',
            icon: GraduationCap
        }
    ],

    interests: [
        {
            icon: Code,
            label: 'Clean Architecture',
            color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
        },
        {
            icon: Database,
            label: 'Database Design',
            color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
        },
        {
            icon: Coffee,
            label: 'Coffee Roasting',
            color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
        },
        {
            icon: Heart,
            label: 'Open Source',
            color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
        }
    ],

    features: [
        {
            icon: Code,
            title: 'Full Stack Expertise',
            description: 'End-to-end development from database design to user interface implementation.'
        },
        {
            icon: Rocket,
            title: 'Scalable Solutions',
            description: 'Building applications that handle growth from startup to enterprise scale.'
        },
        {
            icon: Users,
            title: 'Team Leadership',
            description: 'Mentoring developers and leading technical decisions in cross-functional teams.'
        }
    ],

    projects: [
        {
            id: 1,
            title: 'SaaS Analytics Platform',
            description: 'A comprehensive analytics platform processing 10M+ events daily with real-time dashboards and custom reporting.',
            year: '2024',
            category: 'web',
            status: 'Live',
            featured: true,
            liveUrl: 'https://analytics-pro-platform.com',
            githubUrl: 'https://github.com/michaeldev/analytics-platform',
            technologies: [
                { id: 'nextjs', name: 'Next.js' },
                { id: 'nodejs', name: 'Node.js' },
                { id: 'postgresql', name: 'PostgreSQL' },
                { id: 'aws', name: 'AWS' },
                { id: 'redis', name: 'Redis' }
            ]
        },
        {
            id: 2,
            title: 'E-Commerce Microservices',
            description: 'Scalable e-commerce backend with microservices architecture, handling payments, inventory, and order management.',
            year: '2024',
            category: 'api',
            status: 'Live',
            featured: true,
            liveUrl: 'https://ecommerce-api-docs.com',
            githubUrl: 'https://github.com/michaeldev/ecommerce-microservices',
            technologies: [
                { id: 'nodejs', name: 'Node.js' },
                { id: 'mongodb', name: 'MongoDB' },
                { id: 'docker', name: 'Docker' },
                { id: 'kubernetes', name: 'Kubernetes' },
                { id: 'graphql', name: 'GraphQL' }
            ]
        },
        {
            id: 3,
            title: 'Real-Time Chat Application',
            description: 'Full-featured chat application with video calls, file sharing, and real-time collaboration tools.',
            year: '2023',
            category: 'web',
            status: 'Live',
            featured: true,
            liveUrl: 'https://teamchat-pro.app',
            githubUrl: 'https://github.com/michaeldev/realtime-chat',
            technologies: [
                { id: 'react', name: 'React' },
                { id: 'socketio', name: 'Socket.io' },
                { id: 'nodejs', name: 'Node.js' },
                { id: 'postgresql', name: 'PostgreSQL' },
                { id: 'webrtc', name: 'WebRTC' }
            ]
        },
        {
            id: 4,
            title: 'DevOps Dashboard',
            description: 'Infrastructure monitoring dashboard with metrics visualization, alerting, and deployment tracking.',
            year: '2023',
            category: 'web',
            status: 'Completed',
            featured: false,
            liveUrl: 'https://devops-monitor.herokuapp.com',
            githubUrl: 'https://github.com/michaeldev/devops-dashboard',
            technologies: [
                { id: 'python', name: 'Python' },
                { id: 'fastapi', name: 'FastAPI' },
                { id: 'react', name: 'React' },
                { id: 'prometheus', name: 'Prometheus' },
                { id: 'grafana', name: 'Grafana' }
            ]
        },
        {
            id: 5,
            title: 'Task Management API',
            description: 'RESTful API for project management with authentication, team collaboration, and automated workflows.',
            year: '2022',
            category: 'api',
            status: 'Live',
            featured: false,
            liveUrl: 'https://taskapi-docs.netlify.app',
            githubUrl: 'https://github.com/michaeldev/task-management-api',
            technologies: [
                { id: 'nodejs', name: 'Node.js' },
                { id: 'express', name: 'Express.js' },
                { id: 'mongodb', name: 'MongoDB' },
                { id: 'jwt', name: 'JWT' },
                { id: 'swagger', name: 'Swagger' }
            ]
        }
    ]
};