'use client';

import { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';

import { Container } from '@/components/layout';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/registry/new-york-v4/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/registry/new-york-v4/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york-v4/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/registry/new-york-v4/ui/carousel';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { ArrowUpRight, Calendar, Eye, GithubLogo, Globe, Code, Palette, Database, Star } from '@phosphor-icons/react/dist/ssr';
import { getProjects, type Project, type ProjectTechnology } from '@/lib/site-data';
import { COMMON_BLUR_DATA_URLS } from '@/lib/placeholder-utils';

// Enhanced project data with additional details for demonstration
const enhancedProjects = [
    {
        id: 1,
        title: 'E-commerce Platform',
        description: 'A modern, scalable e-commerce solution with advanced features like real-time inventory, payment processing, and analytics dashboard.',
        longDescription: 'Built with Next.js 14 and React 18, this e-commerce platform features a modern design with advanced functionality including real-time inventory management, integrated payment processing with Stripe, comprehensive analytics dashboard, and mobile-responsive design. The platform handles thousands of products and supports multiple payment methods.',
        category: 'web',
        status: 'Live',
        year: '2024',
        liveUrl: 'https://ecommerce-demo.com',
        githubUrl: 'https://github.com/username/ecommerce',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Stripe'],
        featured: true,
        images: [
            { url: '/api/placeholder/800/600', alt: 'Homepage design', description: 'Modern homepage with hero section and featured products' },
            { url: '/api/placeholder/800/600', alt: 'Product listing', description: 'Advanced filtering and search functionality' },
            { url: '/api/placeholder/800/600', alt: 'Checkout process', description: 'Streamlined checkout with multiple payment options' },
            { url: '/api/placeholder/800/600', alt: 'Admin dashboard', description: 'Comprehensive analytics and inventory management' }
        ],
        features: ['Real-time inventory', 'Payment processing', 'Analytics dashboard', 'Mobile responsive'],
        challenges: 'Implementing real-time inventory updates and handling high traffic during sales events.',
        solution: 'Used WebSocket connections for real-time updates and implemented Redis caching for better performance.'
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking.',
        longDescription: 'This comprehensive task management solution enables teams to collaborate effectively with features like real-time notifications, file sharing, time tracking, and detailed project analytics. Built with modern technologies to ensure scalability and performance.',
        category: 'web',
        status: 'Live',
        year: '2024',
        liveUrl: 'https://taskmanager-demo.com',
        githubUrl: 'https://github.com/username/taskmanager',
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
        featured: true,
        images: [
            { url: '/api/placeholder/800/600', alt: 'Dashboard view', description: 'Clean dashboard with project overview' },
            { url: '/api/placeholder/800/600', alt: 'Task board', description: 'Kanban-style task management' },
            { url: '/api/placeholder/800/600', alt: 'Team collaboration', description: 'Real-time collaboration features' }
        ],
        features: ['Real-time collaboration', 'File sharing', 'Time tracking', 'Project analytics'],
        challenges: 'Ensuring real-time synchronization across multiple users and devices.',
        solution: 'Implemented WebSocket connections with conflict resolution and optimistic updates.'
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description: 'A beautiful weather application with detailed forecasts, interactive maps, and personalized weather alerts.',
        longDescription: 'An elegant weather dashboard that provides comprehensive weather information including detailed forecasts, interactive weather maps, severe weather alerts, and historical weather data. Features a clean, intuitive interface with customizable widgets.',
        category: 'web',
        status: 'Live',
        year: '2024',
        liveUrl: 'https://weather-dashboard-demo.com',
        githubUrl: 'https://github.com/username/weather-dashboard',
        technologies: ['Vue.js', 'TypeScript', 'Chart.js', 'Weather API'],
        featured: false,
        images: [
            { url: '/api/placeholder/800/600', alt: 'Main dashboard', description: 'Clean weather dashboard interface' },
            { url: '/api/placeholder/800/600', alt: 'Weather maps', description: 'Interactive weather mapping' }
        ],
        features: ['7-day forecast', 'Interactive maps', 'Weather alerts', 'Historical data'],
        challenges: 'Handling multiple weather data sources and ensuring data accuracy.',
        solution: 'Implemented data validation and fallback mechanisms for reliable weather information.'
    },
    {
        id: 4,
        title: 'Mobile Fitness App',
        description: 'A comprehensive fitness tracking mobile application with workout plans, progress tracking, and social features.',
        longDescription: 'A full-featured fitness application built with React Native, offering personalized workout plans, progress tracking, nutrition logging, and social features to keep users motivated and engaged in their fitness journey.',
        category: 'mobile',
        status: 'In Development',
        year: '2024',
        liveUrl: 'https://fitness-app-demo.com',
        githubUrl: 'https://github.com/username/fitness-app',
        technologies: ['React Native', 'Firebase', 'TypeScript', 'Expo'],
        featured: true,
        images: [
            { url: '/api/placeholder/800/600', alt: 'App home screen', description: 'Personalized fitness dashboard' },
            { url: '/api/placeholder/800/600', alt: 'Workout tracking', description: 'Exercise logging and tracking' },
            { url: '/api/placeholder/800/600', alt: 'Progress charts', description: 'Visual progress tracking' }
        ],
        features: ['Workout plans', 'Progress tracking', 'Nutrition logging', 'Social features'],
        challenges: 'Creating an intuitive mobile experience while maintaining feature richness.',
        solution: 'Designed a clean, gesture-based interface with intelligent defaults and customization options.'
    },
    {
        id: 5,
        title: 'Analytics Dashboard',
        description: 'A powerful analytics dashboard for business intelligence with real-time data visualization and custom reporting.',
        longDescription: 'An enterprise-grade analytics dashboard that transforms complex business data into actionable insights. Features real-time data processing, customizable visualizations, automated reporting, and role-based access control.',
        category: 'web',
        status: 'Live',
        year: '2023',
        liveUrl: 'https://analytics-dashboard-demo.com',
        githubUrl: 'https://github.com/username/analytics-dashboard',
        technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
        featured: false,
        images: [
            { url: '/api/placeholder/800/600', alt: 'Analytics overview', description: 'Comprehensive business metrics' },
            { url: '/api/placeholder/800/600', alt: 'Custom reports', description: 'Customizable reporting interface' }
        ],
        features: ['Real-time data', 'Custom visualizations', 'Automated reports', 'Role-based access'],
        challenges: 'Processing large datasets in real-time while maintaining responsive UI.',
        solution: 'Implemented data streaming with efficient caching and progressive loading strategies.'
    },
    {
        id: 6,
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website showcasing creative work with smooth animations and interactive elements.',
        longDescription: 'A stunning portfolio website built with modern web technologies, featuring smooth animations, interactive elements, and optimized performance. Includes a content management system for easy updates and a blog section.',
        category: 'web',
        status: 'Live',
        year: '2023',
        liveUrl: 'https://portfolio-demo.com',
        githubUrl: 'https://github.com/username/portfolio',
        technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Sanity CMS'],
        featured: false,
        images: [
            { url: '/api/placeholder/800/600', alt: 'Portfolio home', description: 'Elegant homepage design' },
            { url: '/api/placeholder/800/600', alt: 'Project showcase', description: 'Interactive project gallery' }
        ],
        features: ['Smooth animations', 'CMS integration', 'Blog section', 'Contact forms'],
        challenges: 'Balancing visual appeal with performance and accessibility.',
        solution: 'Optimized animations for performance and ensured full accessibility compliance.'
    }
];

export default function ProjectsPageClient() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { value: 'all', label: 'All Projects', count: enhancedProjects.length, icon: Globe },
        { value: 'web', label: 'Web Apps', count: enhancedProjects.filter(p => p.category === 'web').length, icon: Code },
        { value: 'mobile', label: 'Mobile Apps', count: enhancedProjects.filter(p => p.category === 'mobile').length, icon: Database },
        { value: 'featured', label: 'Featured', count: enhancedProjects.filter(p => p.featured).length, icon: Palette }
    ];

    const filteredProjects = useMemo(() => {
        if (selectedCategory === 'all') return enhancedProjects;
        if (selectedCategory === 'featured') return enhancedProjects.filter(p => p.featured);

        return enhancedProjects.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    const handleAction = useCallback((url: string, type: 'demo' | 'code') => {
        console.log(`${type} clicked:`, url);
        // In a real app, you'd navigate to the URL
        window.open(url, '_blank');
    }, []);

    return (
        <main className='mt-16 pb-16 sm:mt-20 sm:pb-20'>
            <Container size="md" className='py-8 sm:py-12'>
                {/* Header Section */}
                <div className="mb-16">
                    <div className='space-y-6 text-center'>
                        <h1 className='text-4xl font-bold tracking-tight'>
                            My Projects
                        </h1>
                        <p className='mx-auto max-w-3xl text-xl text-neutral-600 dark:text-neutral-400'>
                            A showcase of my latest work and side projects, featuring web applications, mobile apps, and experimental projects.
                        </p>
                    </div>
                </div>

                {/* Project Categories with Tabs */}
                <div className="mb-12">
                    <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                        <TabsList className="grid w-full grid-cols-4 mb-10 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 p-1.5 rounded-xl shadow-sm">
                            <TabsTrigger value='all' className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-neutral-500 data-[state=active]:to-gray-500 data-[state=active]:text-white data-[state=active]:shadow-sm dark:data-[state=active]:from-neutral-600 dark:data-[state=active]:to-gray-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] [&[data-state=active]_svg]:text-white">
                                <Globe className='h-4 w-4 text-muted-foreground' />
                                <span className="hidden sm:inline">All Projects</span>
                                <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 text-xs shadow-sm">
                                    {categories.find(c => c.value === 'all')?.count}
                                </Badge>
                            </TabsTrigger>
                            <TabsTrigger value='web' className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-sm dark:data-[state=active]:from-blue-600 dark:data-[state=active]:to-cyan-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] [&[data-state=active]_svg]:text-white">
                                <Code className='h-4 w-4 text-muted-foreground' />
                                <span className="hidden sm:inline">Web Apps</span>
                                <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 text-xs shadow-sm">
                                    {categories.find(c => c.value === 'web')?.count}
                                </Badge>
                            </TabsTrigger>
                            <TabsTrigger value='mobile' className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-sm dark:data-[state=active]:from-green-600 dark:data-[state=active]:to-emerald-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] [&[data-state=active]_svg]:text-white">
                                <Database className='h-4 w-4 text-muted-foreground' />
                                <span className="hidden sm:inline">Mobile Apps</span>
                                <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 text-xs shadow-sm">
                                    {categories.find(c => c.value === 'mobile')?.count}
                                </Badge>
                            </TabsTrigger>
                            <TabsTrigger value='featured' className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-sm dark:data-[state=active]:from-purple-600 dark:data-[state=active]:to-pink-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] [&[data-state=active]_svg]:text-white">
                                <Palette className='h-4 w-4 text-muted-foreground' />
                                <span className="hidden sm:inline">Featured</span>
                                <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 text-xs shadow-sm">
                                    {categories.find(c => c.value === 'featured')?.count}
                                </Badge>
                            </TabsTrigger>
                        </TabsList>

                        {categories.map((category) => (
                            <TabsContent key={category.value} value={category.value} className="mt-0 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {filteredProjects.map((project, index) => (
                                        <EnhancedProjectCard 
                                            key={project.id} 
                                            project={project} 
                                            index={index}
                                            onAction={handleAction}
                                        />
                                    ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>

                {/* Call to Action */}
                <div className="mt-20 text-center">
                    <div className='space-y-6'>
                        <h2 className='text-3xl font-bold text-neutral-900 dark:text-neutral-100'>
                            Let's Work Together
                        </h2>
                        <p className='mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400'>
                            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
                        </p>
                        <Button
                            size='lg'
                            className='transition-all duration-300 hover:scale-105 hover:shadow-md'
                            onClick={() => console.log('Contact clicked')}>
                            Let's Talk
                            <ArrowUpRight className='ml-2 h-4 w-4' weight='regular' />
                        </Button>
                    </div>
                </div>
            </Container>
        </main>
    );
}

// Enhanced ProjectCard component with Dialog and Carousel
interface EnhancedProjectCardProps {
    project: any;
    index: number;
    onAction: (url: string, type: 'demo' | 'code') => void;
}

const EnhancedProjectCard = ({ project, index, onAction }: EnhancedProjectCardProps) => {
    return (
        <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardContent className="flex h-full flex-col p-0">
                {/* Cover Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30">
                    <Image 
                        src={project.images[0]?.url} 
                        alt={project.images[0]?.alt}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        placeholder="blur"
                        blurDataURL={COMMON_BLUR_DATA_URLS.card}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                        <Badge
                            variant={project.status === 'Live' ? 'default' : 'secondary'}
                            className={`${
                                project.status === 'Live'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-orange-500 text-white'
                            }`}>
                            {project.status}
                        </Badge>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                        <div className="absolute top-3 left-3">
                            <Badge variant="outline" className="bg-yellow-500/90 text-white border-yellow-500 flex items-center gap-1">
                                <Star className="h-3 w-3" />
                                Featured
                            </Badge>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                    <CardHeader className="p-0 mb-4">
                        <CardTitle className="line-clamp-2 text-xl">{project.title}</CardTitle>
                        <CardDescription className="line-clamp-2">
                            {project.description}
                        </CardDescription>
                    </CardHeader>

                    <div className="flex-1 space-y-4">
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 3).map((tech: string) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                    {tech}
                                </Badge>
                            ))}
                            {project.technologies.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                    +{project.technologies.length - 3} more
                                </Badge>
                            )}
                        </div>

                        {/* Year and Category */}
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {project.year}
                            </span>
                            <Badge variant="outline" className="text-xs">
                                {project.category}
                            </Badge>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2 pt-4">
                        <div className="flex gap-2">
                            <Button
                                size="sm"
                                variant="outline"
                                className="flex-1"
                                onClick={() => onAction(project.liveUrl, 'demo')}>
                                <Eye className="mr-2 h-4 w-4" />
                                Demo
                            </Button>
                            <Button
                                size="sm"
                                variant="outline"
                                className="flex-1"
                                onClick={() => onAction(project.githubUrl, 'code')}>
                                <GithubLogo className="mr-2 h-4 w-4" />
                                Code
                            </Button>
                        </div>
                        
                        {/* Project Details Dialog */}
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="sm" className="w-full">
                                    Details
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                                    <DialogDescription className="text-base">
                                        {project.longDescription}
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="space-y-6 mt-6">
                                    {/* Image Carousel */}
                                    {project.images && project.images.length > 0 && (
                                        <div>
                                            <h4 className="font-semibold mb-3">Project Screenshots</h4>
                                            <div className="relative">
                                                <Carousel className="w-full max-w-full overflow-hidden">
                                                    <CarouselContent className="-ml-2 md:-ml-4">
                                                        {project.images.map((image: any, idx: number) => (
                                                            <CarouselItem key={idx} className="pl-2 md:pl-4">
                                                                <div className="space-y-2">
                                                                    <Image 
                                                                        src={image.url} 
                                                                        alt={image.alt}
                                                                        width={600}
                                                                        height={400}
                                                                        className="w-full h-64 object-cover rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30"
                                                                        placeholder="blur"
                                                                        blurDataURL={COMMON_BLUR_DATA_URLS.medium}
                                                                    />
                                                                    <p className="text-sm text-muted-foreground text-center">
                                                                        {image.description}
                                                                    </p>
                                                                </div>
                                                            </CarouselItem>
                                                        ))}
                                                    </CarouselContent>
                                                    <CarouselPrevious className="left-2" />
                                                    <CarouselNext className="right-2" />
                                                </Carousel>
                                            </div>
                                        </div>
                                    )}

                                    <Separator />

                                    {/* Project Details Grid */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Technologies */}
                                        <div>
                                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                                <Code className="h-4 w-4" />
                                                Technologies Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech: string) => (
                                                    <Badge key={tech} variant="secondary">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Key Features */}
                                        <div>
                                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                                <Palette className="h-4 w-4" />
                                                Key Features
                                            </h4>
                                            <ul className="space-y-1">
                                                {project.features.map((feature: string, idx: number) => (
                                                    <li key={idx} className="flex items-center gap-2 text-sm">
                                                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Challenges */}
                                        <div>
                                            <h4 className="font-semibold mb-3">Challenges</h4>
                                            <p className="text-sm text-muted-foreground">
                                                {project.challenges}
                                            </p>
                                        </div>

                                        {/* Solution */}
                                        <div>
                                            <h4 className="font-semibold mb-3">Solution</h4>
                                            <p className="text-sm text-muted-foreground">
                                                {project.solution}
                                            </p>
                                        </div>
                                    </div>

                                    <Separator />

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 justify-center">
                                        <Button 
                                            onClick={() => onAction(project.liveUrl, 'demo')}
                                            className="flex items-center gap-2">
                                            <Globe className="h-4 w-4" />
                                            View Live Demo
                                        </Button>
                                        <Button 
                                            variant="outline"
                                            onClick={() => onAction(project.githubUrl, 'code')}
                                            className="flex items-center gap-2">
                                            <GithubLogo className="h-4 w-4" />
                                            View Source Code
                                        </Button>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
