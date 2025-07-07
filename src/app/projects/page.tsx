import { Metadata } from 'next';
import { Suspense } from 'react';
import dynamicImport from 'next/dynamic';
import { Container } from '@/components/layout';

// Force static generation for portfolio site
export const dynamic = 'force-static';

// Dynamic import for heavy client component
const ProjectsPageClient = dynamicImport(() => import('./projects-client'), {
    loading: () => (
        <main className='mt-20 sm:mt-24 pb-24'>
            <Container size="md">
            <div className='space-y-8'>
                <div className='space-y-4'>
                    <div className='h-12 bg-neutral-200 dark:bg-neutral-800 rounded w-1/3 animate-pulse'></div>
                    <div className='h-6 bg-neutral-200 dark:bg-neutral-800 rounded w-2/3 animate-pulse'></div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className='space-y-4 p-6 border rounded-lg animate-pulse'>
                            <div className='h-48 bg-neutral-200 dark:bg-neutral-800 rounded'></div>
                            <div className='space-y-2'>
                                <div className='h-6 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4'></div>
                                <div className='h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-full'></div>
                                <div className='h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-2/3'></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </Container>
        </main>
    )
});

export const metadata: Metadata = {
    title: 'Projects | Amar Z. Arslaan - Senior Software Engineer',
    description: 'Explore my portfolio of web applications and digital experiences built with modern technologies.',
};

export default function ProjectsPage() {
    return (
        <Suspense fallback={
            <main className='mt-20 sm:mt-24 pb-24'>
                <Container size="md">
                <div className='space-y-8'>
                    <div className='space-y-4'>
                        <div className='h-12 bg-neutral-200 dark:bg-neutral-800 rounded w-1/3 animate-pulse'></div>
                        <div className='h-6 bg-neutral-200 dark:bg-neutral-800 rounded w-2/3 animate-pulse'></div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className='space-y-4 p-6 border rounded-lg animate-pulse'>
                                <div className='h-48 bg-neutral-200 dark:bg-neutral-800 rounded'></div>
                                <div className='space-y-2'>
                                    <div className='h-6 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4'></div>
                                    <div className='h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-full'></div>
                                    <div className='h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-2/3'></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </Container>
            </main>
        }>
            <ProjectsPageClient />
        </Suspense>
    );
}