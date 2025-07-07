import { Metadata } from 'next';
import Link from 'next/link';

import { Container } from '@/components/layout';
import { ArrowRight, Briefcase, Code, Database, Eye, Palette, Rocket, Users } from '@phosphor-icons/react/dist/ssr';

export const metadata: Metadata = {
    title: 'Portfolio Examples',
    description: 'Explore different portfolio configurations for various professional backgrounds and specializations.'
};

const examples = [
    {
        id: 'frontend-developer',
        name: 'Sarah Chen',
        title: 'Frontend Developer & UI/UX Enthusiast',
        description: 'Specializes in React, Vue.js, and modern frontend frameworks with focus on UI/UX implementation.',
        icon: Code,
        color: 'bg-blue-500',
        stats: {
            experience: '4+ years',
            projects: '35+',
            specialization: 'Frontend & UI/UX'
        },
        technologies: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Figma'],
        href: '/examples/frontend-developer'
    },
    {
        id: 'fullstack-developer',
        name: 'Michael Rodriguez',
        title: 'Full Stack Developer & Cloud Architect',
        description: 'End-to-end development with frontend and backend expertise, plus cloud architecture experience.',
        icon: Database,
        color: 'bg-green-500',
        stats: {
            experience: '6+ years',
            projects: '40+',
            specialization: 'Full Stack & Cloud'
        },
        technologies: ['React', 'Node.js', 'Python', 'AWS', 'Docker'],
        href: '/examples/fullstack-developer'
    },
    {
        id: 'ui-ux-designer',
        name: 'Emma Thompson',
        title: 'UI/UX Designer & Product Strategist',
        description: 'User-centered design and design systems specialist with user research and prototyping expertise.',
        icon: Palette,
        color: 'bg-purple-500',
        stats: {
            experience: '5+ years',
            projects: '50+',
            specialization: 'UI/UX & Product'
        },
        technologies: ['Figma', 'Sketch', 'Adobe XD', 'Framer', 'Miro'],
        href: '/examples/ui-ux-designer'
    }
];

export default function ExamplesPage() {
    return (
        <main className='mt-16 pb-16 sm:mt-20 sm:pb-20'>
            <Container size='md' className='py-8 sm:py-12'>
                <div className='mb-16 text-center'>
                    <h1 className='text-foreground text-4xl font-bold tracking-tight'>Portfolio Examples</h1>
                    <p className='text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-8'>
                        Explore different portfolio configurations for various professional backgrounds. Each example
                        demonstrates a simple one page site for different career paths and specializations.
                    </p>
                </div>

                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {examples.map((example) => {
                        const IconComponent = example.icon;

                        return (
                            <Link
                                key={example.id}
                                href={example.href}
                                className='group bg-card relative overflow-hidden rounded-lg border p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl'>
                                <div className='mb-4 flex items-center gap-4'>
                                    <div className={`${example.color} rounded-lg p-3 text-white`}>
                                        <IconComponent size={24} />
                                    </div>
                                    <div>
                                        <h3 className='text-foreground group-hover:text-primary text-lg font-semibold transition-colors'>
                                            {example.name}
                                        </h3>
                                        <p className='text-muted-foreground text-sm'>{example.title}</p>
                                    </div>
                                </div>

                                <p className='text-muted-foreground mb-6 text-sm leading-relaxed'>
                                    {example.description}
                                </p>

                                <div className='mb-6 space-y-4'>
                                    <div className='grid grid-cols-3 gap-4 text-center'>
                                        <div>
                                            <div className='text-foreground text-sm font-medium'>
                                                {example.stats.experience}
                                            </div>
                                            <div className='text-muted-foreground text-xs'>Experience</div>
                                        </div>
                                        <div>
                                            <div className='text-foreground text-sm font-medium'>
                                                {example.stats.projects}
                                            </div>
                                            <div className='text-muted-foreground text-xs'>Projects</div>
                                        </div>
                                        <div>
                                            <div className='text-foreground text-sm font-medium'>
                                                {example.stats.specialization}
                                            </div>
                                            <div className='text-muted-foreground text-xs'>Focus</div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='text-muted-foreground mb-2 text-xs'>Key Technologies</div>
                                        <div className='flex flex-wrap gap-1'>
                                            {example.technologies.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className='bg-muted text-muted-foreground inline-flex items-center rounded-md px-2 py-1 text-xs font-medium'>
                                                    {tech}
                                                </span>
                                            ))}
                                            {example.technologies.length > 3 && (
                                                <span className='bg-muted text-muted-foreground inline-flex items-center rounded-md px-2 py-1 text-xs font-medium'>
                                                    +{example.technologies.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <div className='text-primary flex items-center gap-2 text-sm'>
                                        <Eye size={16} />
                                        <span>View Example</span>
                                    </div>
                                    <ArrowRight
                                        size={16}
                                        className='text-muted-foreground group-hover:text-primary transition-all duration-200 group-hover:translate-x-1'
                                    />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div className='mt-16 text-center'>
                    <div className='bg-muted rounded-lg p-8'>
                        <Briefcase size={48} className='text-muted-foreground mx-auto mb-4' />
                        <h2 className='text-foreground mb-4 text-2xl font-bold'>Create Your Own Portfolio</h2>
                        <p className='text-muted-foreground mx-auto mb-6 max-w-2xl'>
                            These examples are starting points for your own portfolio. You can copy complete
                            configurations, mix and match sections, or use them as inspiration for your unique
                            professional story.
                        </p>
                        <div className='flex flex-wrap justify-center gap-4 text-sm'>
                            <div className='flex items-center gap-2'>
                                <Rocket size={16} className='text-primary' />
                                <span>Copy complete configuration</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Users size={16} className='text-primary' />
                                <span>Mix and match sections</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Code size={16} className='text-primary' />
                                <span>Use as inspiration</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
