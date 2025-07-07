import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/layout';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { getFeatures, getPersonalInfo } from '@/lib/site-data';

// Force static generation for portfolio site
export const dynamic = 'force-static';

// Get data from centralized source
const features = getFeatures();
const personalInfo = getPersonalInfo();

export default function HomePage() {
    return (
        <main className='mt-16 pb-16 sm:mt-20 sm:pb-20'>
            <Container size='md' className='py-8 sm:py-12'>
                <div className='space-y-12 sm:space-y-16'>
                    {/* Hero Section */}
                    <section className='space-y-8 text-center'>
                    <div className='space-y-4'>
                        <h1 className='bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl dark:from-neutral-100 dark:to-neutral-400'>
                            Building Digital
                            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'> Experiences</span>
                        </h1>
                        <p className='mx-auto max-w-2xl text-xl text-neutral-600 dark:text-neutral-400'>
                            Crafting modern web applications with clean code, beautiful design, and exceptional user experiences.
                        </p>
                    </div>

                    <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                        <Button asChild size='lg' className='transition-all duration-300 hover:scale-105 hover:shadow-md'>
                            <Link href='/work'>
                                View My Work
                                <ArrowRight className='ml-2 h-4 w-4' />
                            </Link>
                        </Button>
                        <Button variant='outline' size='lg' asChild className='transition-all duration-300 hover:scale-105'>
                            <Link href='/contact'>Get In Touch</Link>
                        </Button>
                    </div>
                </section>


                {/* CTA Section */}
                <section className='space-y-6 text-center'>
                    <Card className='border-0 bg-gradient-to-br from-white to-neutral-50 p-8 transition-all duration-500 hover:shadow-lg dark:from-neutral-900 dark:to-neutral-800'>
                        <div className='space-y-4'>
                            <h2 className='bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-2xl font-bold text-transparent dark:from-neutral-100 dark:to-neutral-400'>Ready to Start Your Project?</h2>
                            <p className='mx-auto max-w-md text-neutral-600 dark:text-neutral-400'>
                                Let's work together to bring your ideas to life with cutting-edge technology and thoughtful design.
                            </p>
                        </div>
                    </Card>
                </section>
                </div>
            </Container>
        </main>
    );
}
