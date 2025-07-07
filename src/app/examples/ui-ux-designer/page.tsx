import { Metadata } from 'next';
import Link from 'next/link';
import { 
    ArrowLeft, 
    Palette, 
    ArrowSquareOut, 
    GithubLogo, 
    LinkedinLogo, 
    TwitterLogo, 
    Envelope,
    Eye,
    PencilSimple,
    Users,
    Coffee,
    Heart,
    Briefcase,
    GraduationCap
} from '@phosphor-icons/react/dist/ssr';

import { uiUxDesignerData } from '../../../../examples/ui-ux-designer';
import { Container } from '@/components/layout';

export const metadata: Metadata = {
    title: 'UI/UX Designer Example - Emma Thompson',
    description: 'Portfolio configuration example for a UI/UX designer with expertise in user-centered design and design systems.',
};

export default function UiUxDesignerPage() {
    const data = uiUxDesignerData;

    return (
        <main className='mt-16 pb-16 sm:mt-20 sm:pb-20'>
            <Container size='md' className='py-8 sm:py-12'>
                <div className="mb-8">
                    <Link 
                        href="/examples" 
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to Examples
                    </Link>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <div className="mb-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-purple-500 p-3 rounded-lg text-white">
                                    <Palette size={24} />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold text-foreground">
                                        {data.personal.name}
                                    </h1>
                                    <p className="text-lg text-muted-foreground">
                                        {data.personal.title}
                                    </p>
                                </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                {data.personal.bio}
                            </p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-foreground mb-4">Key Statistics</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {data.statistics.map((stat, index) => (
                                    <div key={index} className="text-center p-4 rounded-lg bg-card border">
                                        <div className="text-2xl font-bold text-primary mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm font-medium text-foreground mb-1">
                                            {stat.label}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {stat.description}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-foreground mb-4">Design Tools & Skills</h2>
                            <div className="space-y-4">
                                {['design', 'frontend', 'other'].map((category) => {
                                    const categoryTechs = data.technologies.filter(tech => tech.category === category);
                                    if (categoryTechs.length === 0) return null;
                                    
                                    const categoryNames = {
                                        design: 'Design Tools',
                                        frontend: 'Frontend Implementation',
                                        other: 'Research & Collaboration'
                                    };
                                    
                                    return (
                                        <div key={category}>
                                            <h3 className="text-sm font-medium text-foreground mb-2">
                                                {categoryNames[category as keyof typeof categoryNames]}
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {categoryTechs.map((tech) => (
                                                    <span
                                                        key={tech.id}
                                                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                                            tech.proficiency === 'expert'
                                                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                                                                : tech.proficiency === 'advanced'
                                                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                                                                : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
                                                        }`}
                                                    >
                                                        {tech.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-foreground mb-4">Featured Projects</h2>
                            <div className="grid gap-4">
                                {data.projects.filter(project => project.featured).map((project) => (
                                    <div key={project.id} className="p-6 rounded-lg border bg-card">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    {project.description}
                                                </p>
                                                <div className="flex items-center gap-4 text-sm">
                                                    <span className="text-muted-foreground">
                                                        {project.year}
                                                    </span>
                                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                                        {project.status}
                                                    </span>
                                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                                                        {project.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 rounded-md hover:bg-muted transition-colors"
                                                    >
                                                        <ArrowSquareOut size={16} />
                                                    </a>
                                                )}
                                                {project.githubUrl && (
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 rounded-md hover:bg-muted transition-colors"
                                                    >
                                                        <GithubLogo size={16} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech.id}
                                                    className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
                                                >
                                                    {tech.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-foreground mb-4">Design Philosophy</h2>
                            <div className="grid gap-4 md:grid-cols-3">
                                {data.features.map((feature, index) => {
                                    const IconComponent = feature.icon;
                                    
return (
                                        <div key={index} className="p-4 rounded-lg border bg-card">
                                            <div className="flex items-center gap-3 mb-2">
                                                <IconComponent size={20} className="text-primary" />
                                                <h3 className="text-sm font-semibold text-foreground">
                                                    {feature.title}
                                                </h3>
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                {feature.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-6">
                            <div className="p-6 rounded-lg border bg-card">
                                <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Envelope size={16} className="text-muted-foreground" />
                                        <span className="text-sm text-foreground">{data.contact.email}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm text-muted-foreground">📍</span>
                                        <span className="text-sm text-foreground">{data.contact.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm text-muted-foreground">🕐</span>
                                        <span className="text-sm text-foreground">{data.contact.timezone}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-lg border bg-card">
                                <h3 className="text-lg font-semibold text-foreground mb-4">Social Links</h3>
                                <div className="space-y-3">
                                    {data.socialLinks.map((social) => {
                                        const IconComponent = social.icon;
                                        
return (
                                            <a
                                                key={social.platform}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-2 rounded-md hover:bg-muted transition-colors"
                                            >
                                                <IconComponent size={16} className="text-muted-foreground" />
                                                <div>
                                                    <div className="text-sm font-medium text-foreground">
                                                        {social.platform}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">
                                                        {social.username}
                                                    </div>
                                                </div>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="p-6 rounded-lg border bg-card">
                                <h3 className="text-lg font-semibold text-foreground mb-4">Design Interests</h3>
                                <div className="flex flex-wrap gap-2">
                                    {data.interests.map((interest, index) => {
                                        const IconComponent = interest.icon;
                                        
return (
                                            <div
                                                key={index}
                                                className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium ${interest.color}`}
                                            >
                                                <IconComponent size={14} />
                                                {interest.label}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="p-6 rounded-lg border bg-card">
                                <h3 className="text-lg font-semibold text-foreground mb-4">Career Timeline</h3>
                                <div className="space-y-4">
                                    {data.timeline.slice(0, 4).map((item, index) => {
                                        const IconComponent = item.icon;
                                        
return (
                                            <div key={index} className="flex gap-3">
                                                <div className="flex-shrink-0 mt-1">
                                                    <IconComponent size={16} className="text-muted-foreground" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-foreground">
                                                        {item.title}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground mb-1">
                                                        {item.company} • {item.year}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">
                                                        {item.description}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}