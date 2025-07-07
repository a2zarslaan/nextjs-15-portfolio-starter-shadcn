import { Suspense } from 'react';

import { Metadata } from 'next';
import dynamicImport from 'next/dynamic';

// Force static generation for portfolio site
export const dynamic = 'force-static';

// Dynamic import for heavy client component
const AboutPageClient = dynamicImport(() => import('./about-client'), {
    loading: () => (
        <div className='mx-auto mt-20 max-w-6xl px-3 pb-24 sm:mt-24 sm:px-6 lg:px-8'>
            <div className='flex min-h-[400px] items-center justify-center'>
                <div className='w-full max-w-2xl animate-pulse space-y-4'>
                    <div className='mx-auto h-32 w-32 rounded-full bg-neutral-200 dark:bg-neutral-800'></div>
                    <div className='space-y-2'>
                        <div className='mx-auto h-8 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800'></div>
                        <div className='mx-auto h-4 w-1/2 rounded bg-neutral-200 dark:bg-neutral-800'></div>
                    </div>
                </div>
            </div>
        </div>
    )
});

export const metadata: Metadata = {
    title: 'About me | Full Stack Developer',
    description: 'Learn about me, a passionate full-stack developer creating innovative digital experiences.'
};

export default function AboutPage() {
    return (
        <Suspense
            fallback={
                <div className='mx-auto mt-20 max-w-6xl px-3 pb-24 sm:mt-24 sm:px-6 lg:px-8'>
                    <div className='flex min-h-[400px] items-center justify-center'>
                        <div className='w-full max-w-2xl animate-pulse space-y-4'>
                            <div className='mx-auto h-32 w-32 rounded-full bg-neutral-200 dark:bg-neutral-800'></div>
                            <div className='space-y-2'>
                                <div className='mx-auto h-8 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800'></div>
                                <div className='mx-auto h-4 w-1/2 rounded bg-neutral-200 dark:bg-neutral-800'></div>
                            </div>
                        </div>
                    </div>
                </div>
            }>
            <AboutPageClient />
        </Suspense>
    );
}
