import { Briefcase, ChartBar, Code, Database, Globe, Lightbulb, Palette, Shield } from '@phosphor-icons/react';

export const experience = [
    {
        id: 1,
        company: 'TechCorp Solutions',
        position: 'Senior Full Stack Developer',
        duration: 'Jan 2022 - Present',
        location: 'San Francisco, CA',
        type: 'Full-time',
        description:
            'Lead developer for enterprise web applications, focusing on scalable architecture and performance optimization.',
        achievements: [
            'Led a team of 5 developers in rebuilding the main product dashboard',
            'Reduced application load time by 60% through code optimization',
            'Implemented CI/CD pipeline reducing deployment time by 80%',
            'Mentored 3 junior developers, helping them advance their careers'
        ],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'TypeScript'],
        projects: [
            {
                name: 'Customer Portal Redesign',
                description: 'Complete overhaul of the customer-facing portal with modern React architecture',
                impact: '40% increase in user engagement',
                timeline: '6 months'
            },
            {
                name: 'API Gateway Implementation',
                description: 'Microservices architecture with centralized API management',
                impact: '50% reduction in API response time',
                timeline: '4 months'
            }
        ]
    },
    {
        id: 2,
        company: 'StartupCo',
        position: 'Full Stack Developer',
        duration: 'Jun 2020 - Dec 2021',
        location: 'Remote',
        type: 'Full-time',
        description:
            'Early-stage startup focused on SaaS solutions for small businesses. Wore multiple hats including frontend, backend, and DevOps.',
        achievements: [
            'Built the MVP from scratch, leading to $500K seed funding',
            'Scaled application to handle 10,000+ active users',
            'Implemented payment processing with Stripe integration',
            'Established testing practices achieving 90% code coverage'
        ],
        technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Redis', 'Heroku'],
        projects: [
            {
                name: 'SaaS Platform MVP',
                description: 'End-to-end SaaS platform with user management, billing, and analytics',
                impact: 'Secured seed funding',
                timeline: '8 months'
            },
            {
                name: 'Mobile App Launch',
                description: 'React Native app complementing the web platform',
                impact: '5,000+ downloads in first month',
                timeline: '3 months'
            }
        ]
    },
    {
        id: 3,
        company: 'WebDesign Agency',
        position: 'Frontend Developer',
        duration: 'Aug 2019 - May 2020',
        location: 'New York, NY',
        type: 'Full-time',
        description:
            'Specialized in creating responsive, accessible websites for diverse clients ranging from small businesses to Fortune 500 companies.',
        achievements: [
            'Delivered 25+ client projects with 100% on-time completion',
            'Improved website accessibility scores by average of 40%',
            'Reduced bounce rates by 35% through UX improvements',
            'Trained team on modern CSS techniques and responsive design'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Sass', 'jQuery', 'WordPress'],
        projects: [
            {
                name: 'E-commerce Platform',
                description: 'Custom WordPress e-commerce solution for local retailer',
                impact: '200% increase in online sales',
                timeline: '2 months'
            },
            {
                name: 'Corporate Website Redesign',
                description: 'Complete rebrand and website overhaul for Fortune 500 client',
                impact: 'Improved brand recognition',
                timeline: '4 months'
            }
        ]
    },
    {
        id: 4,
        company: 'FreelanceWork',
        position: 'Freelance Web Developer',
        duration: 'Jan 2018 - Jul 2019',
        location: 'Remote',
        type: 'Freelance',
        description:
            'Independent contractor working with various clients on web development projects, from simple landing pages to complex web applications.',
        achievements: [
            'Completed 40+ projects with 5-star client ratings',
            'Generated $80K+ in revenue over 18 months',
            'Built long-term relationships with 15+ recurring clients',
            'Developed expertise in multiple technology stacks'
        ],
        technologies: ['React', 'PHP', 'MySQL', 'Laravel', 'Bootstrap', 'jQuery'],
        projects: [
            {
                name: 'Restaurant Management System',
                description: 'Full-stack solution for restaurant operations and online ordering',
                impact: 'Streamlined operations for 10+ restaurants',
                timeline: '3 months'
            },
            {
                name: 'Portfolio Websites',
                description: 'Custom portfolio sites for creative professionals',
                impact: '20+ successful launches',
                timeline: 'Ongoing'
            }
        ]
    }
];

export const skills = [
    {
        category: 'Frontend',
        icon: Palette,
        skills: [
            { name: 'React', level: 95, years: 5 },
            { name: 'TypeScript', level: 90, years: 4 },
            { name: 'Next.js', level: 85, years: 3 },
            { name: 'Vue.js', level: 80, years: 2 },
            { name: 'HTML/CSS', level: 95, years: 6 },
            { name: 'Tailwind CSS', level: 90, years: 3 }
        ]
    },
    {
        category: 'Backend',
        icon: Database,
        skills: [
            { name: 'Node.js', level: 90, years: 4 },
            { name: 'Python', level: 85, years: 3 },
            { name: 'PostgreSQL', level: 85, years: 4 },
            { name: 'MongoDB', level: 75, years: 2 },
            { name: 'Redis', level: 70, years: 2 },
            { name: 'GraphQL', level: 75, years: 2 }
        ]
    },
    {
        category: 'DevOps',
        icon: Shield,
        skills: [
            { name: 'Docker', level: 80, years: 3 },
            { name: 'AWS', level: 75, years: 2 },
            { name: 'CI/CD', level: 85, years: 3 },
            { name: 'Kubernetes', level: 60, years: 1 },
            { name: 'Terraform', level: 65, years: 1 },
            { name: 'Monitoring', level: 70, years: 2 }
        ]
    },
    {
        category: 'Tools',
        icon: Code,
        skills: [
            { name: 'Git', level: 95, years: 6 },
            { name: 'VS Code', level: 95, years: 5 },
            { name: 'Figma', level: 80, years: 3 },
            { name: 'Jira', level: 85, years: 4 },
            { name: 'Postman', level: 90, years: 4 },
            { name: 'Jest', level: 85, years: 3 }
        ]
    }
];

export const caseStudies = [
    {
        id: 1,
        title: 'E-commerce Platform Modernization',
        client: 'TechCorp Solutions',
        duration: '6 months',
        team: '5 developers',
        overview: 'Complete modernization of a legacy e-commerce platform serving 50,000+ customers',
        challenge:
            'The existing platform was built on outdated technology, causing performance issues and limiting scalability. Customer complaints about slow load times were increasing.',
        solution:
            'Migrated to a modern React-based architecture with a Node.js backend, implemented microservices, and optimized database queries.',
        results: [
            { metric: 'Page Load Time', before: '8.5s', after: '2.1s', improvement: '75%' },
            { metric: 'Customer Satisfaction', before: '3.2/5', after: '4.6/5', improvement: '44%' },
            { metric: 'Conversion Rate', before: '2.1%', after: '3.8%', improvement: '81%' },
            { metric: 'Server Costs', before: '$5,000/mo', after: '$2,800/mo', improvement: '44%' }
        ],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
        lessons: [
            'Importance of gradual migration to minimize downtime',
            'Value of comprehensive testing during platform changes',
            'Benefits of involving stakeholders in the design process'
        ]
    },
    {
        id: 2,
        title: 'SaaS Platform MVP Development',
        client: 'StartupCo',
        duration: '8 months',
        team: '3 developers',
        overview: 'Built a minimum viable product for a SaaS platform targeting small businesses',
        challenge:
            'Create a competitive SaaS product from scratch with limited resources and tight timeline constraints.',
        solution:
            'Used lean development principles, focusing on core features first, and implemented scalable architecture to support future growth.',
        results: [
            { metric: 'Time to Market', before: '12 months', after: '8 months', improvement: '33%' },
            { metric: 'User Acquisition', before: '0', after: '10,000+', improvement: '100%' },
            { metric: 'Seed Funding', before: '$0', after: '$500K', improvement: '100%' },
            { metric: 'Code Coverage', before: '0%', after: '90%', improvement: '90%' }
        ],
        technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Heroku', 'Stripe'],
        lessons: [
            'MVP approach allows for faster validation and iteration',
            'User feedback is crucial for product-market fit',
            'Scalable architecture pays off as the product grows'
        ]
    }
];